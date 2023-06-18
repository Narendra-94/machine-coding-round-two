import React, { useState } from "react";
import { habits } from "../../data";
import "./LandingPage.css";
import { CreateHabitForm } from "./Create Habit/CreateHabitForm";
import { HabitModal } from "./Habit Modal/HabitModal";
import { Archive } from "../Archive/Archive";

export const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [habitsList, setHabitsList] = useState(habits);
  const [archivedHabits, setArchivedHabits] = useState([]);

  const [selectedHabit, setSelectedHabit] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addHabit = (newHabit) => {
    setHabitsList((prevHabits) => [...prevHabits, newHabit]);
  };

  const editHabit = (updatedHabit) => {
    setHabitsList((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === updatedHabit.id ? updatedHabit : habit
      )
    );
  };

  const deleteHabit = (habitId) => {
    setHabitsList((prevHabits) =>
      prevHabits.filter((habit) => habit.id !== habitId)
    );
    setSelectedHabit(null);
  };

  const archiveHabit = (habitId) => {
    const habitToArchive = habitsList.find((habit) => habit.id === habitId);
    const updatedArchivedHabits = [...archivedHabits, habitToArchive];
    setArchivedHabits(updatedArchivedHabits);
    console.log(updatedArchivedHabits);
    deleteHabit(habitId);
  };

  const handleHabitClick = (habit) => {
    setSelectedHabit(habit);
    setIsEditMode(false);
  };

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleDeleteClick = () => {
    deleteHabit(selectedHabit.id);
  };

  const handleArchiveClick = () => {
    archiveHabit(selectedHabit.id);
  };

  return (
    <div>
      <div className="habit-cards">
        <div className="habit-card">
          <button className="habit-button" onClick={openModal}>
            Create your own habit
          </button>
        </div>
        {habitsList.map((habit) => (
          <div className="habit-card" key={habit.id}>
            <h2 onClick={() => handleHabitClick(habit)}>{habit.name}</h2>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <CreateHabitForm closeModal={closeModal} addHabit={addHabit} />
      )}
      {selectedHabit && (
        <HabitModal
          habit={selectedHabit}
          closeModal={() => setSelectedHabit(null)}
          editHabit={editHabit}
          deleteHabit={deleteHabit}
          archiveHabit={archiveHabit}
          isEditMode={isEditMode}
          onEditClick={handleEditClick}
          onDeleteClick={handleDeleteClick}
          onArchiveClick={handleArchiveClick}
        />
      )}
      <Archive archivedHabits={archivedHabits} />{" "}
    </div>
  );
};
