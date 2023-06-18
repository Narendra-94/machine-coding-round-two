import React, { useState } from "react";
import "./CreateHabitForm.css";

export const CreateHabitForm = ({ closeModal, addHabit }) => {
  const [createHabit, setCreateHabit] = useState({
    habitName: "",
    habitRepeat: "",
    habitGoal: "",
    habitTimeOfDay: "",
    habitStartDate: "",
  });

  const handleFormInput = (e, fieldName) => {
    setCreateHabit((prevData) => ({
      ...prevData,
      [fieldName]: e.target.value,
    }));
  };

  const handleCreateHabit = () => {
    const newHabit = {
      name: createHabit.habitName,
      repeat: createHabit.habitRepeat,
      goal: createHabit.habitGoal,
      time_of_day: createHabit.habitTimeOfDay,
      start_date: createHabit.habitStartDate,
    };

    addHabit(newHabit);
    closeModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Create a New Habit</h2>
        <div className="input-container">
          <label htmlFor="habitName">Name of the habit:</label>
          <input
            type="text"
            id="habitName"
            value={createHabit.habitName}
            onChange={(e) => handleFormInput(e, "habitName")}
          />
        </div>
        <div className="input-container">
          <label htmlFor="habitRepeat">Repeat</label>
          <select
            id="habitRepeat"
            value={createHabit.habitRepeat}
            onChange={(e) => handleFormInput(e, "habitRepeat")}
          >
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
          </select>
        </div>

        <div className="input-container">
          <label htmlFor="habitGoal">Goal</label>
          <select
            id="habitGoal"
            value={createHabit.habitGoal}
            onChange={(e) => handleFormInput(e, "habitGoal")}
          >
            <option value="1 times Daily">1 times Daily</option>
            <option value="2 times Daily">2 times Daily</option>
            <option value="3 times Daily">3 times Daily</option>
          </select>
        </div>

        <div className="input-container">
          <label htmlFor="timeOfDay">Time of Day</label>
          <select
            id="habitTimeOfDay"
            value={createHabit.habitTimeOfDay}
            onChange={(e) => handleFormInput(e, "habitTimeOfDay")}
          >
            <option value="Any Time">Any Time</option>
            <option value="6:00 AM">6:00 AM</option>
            <option value="6:00 PM">6:00 PM</option>
          </select>
        </div>

        <div className="input-container">
          <label htmlFor="startDate">Start Date</label>
          <select
            id="habitStartDate"
            value={createHabit.habitStartDate}
            onChange={(e) => handleFormInput(e, "habitStartDate")}
          >
            <option value="Today">Today</option>
            <option value="Tomorrow">Tomorrow</option>
            <option value="After One Week">Next Week</option>
          </select>
        </div>

        <div className="button-container">
          <button onClick={handleCreateHabit}>Create</button>
          <button onClick={closeModal}>Discard</button>
        </div>
      </div>
    </div>
  );
};
