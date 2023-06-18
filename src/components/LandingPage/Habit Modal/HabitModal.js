import React, { useState } from "react";
import "./HabitModal.css";

export const HabitModal = ({
  habit,
  closeModal,
  editHabit,
  deleteHabit,
  archiveHabit,
  isEditMode,
  onEditClick,
  onDeleteClick,
  onArchiveClick,
}) => {
  const [habitData, setHabitData] = useState(habit);

  const handleFormInput = (e, fieldName) => {
    setHabitData((prevData) => ({
      ...prevData,
      [fieldName]: e.target.value,
    }));
  };

  const handleEditSave = () => {
    editHabit(habitData);
    closeModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{isEditMode ? "Edit Habit" : "Habit Details"}</h2>
        {isEditMode ? (
          <div className="habit-details">
            <div className="input-container">
              <label htmlFor="habitName">Name of the habit:</label>
              <input
                type="text"
                id="habitName"
                value={habitData.name}
                onChange={(e) => handleFormInput(e, "name")}
              />
            </div>
            <div className="input-container">
              <label htmlFor="habitRepeat">Repeat</label>
              <select
                id="habitRepeat"
                value={habitData.repeat}
                onChange={(e) => handleFormInput(e, "repeat")}
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
                value={habitData.habitGoal}
                onChange={(e) => handleFormInput(e, "goal")}
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
                value={habitData.habitTimeOfDay}
                onChange={(e) => handleFormInput(e, "time_of_day")}
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
                value={habitData.habitStartDate}
                onChange={(e) => handleFormInput(e, "start_date")}
              >
                <option value="Today">Today</option>
                <option value="Tomorrow">Tomorrow</option>
                <option value="After One Week">Next Week</option>
              </select>
            </div>

            <div className="button-container">
              <button onClick={handleEditSave}>Save</button>
              <button onClick={closeModal}>Cancel</button>
            </div>
          </div>
        ) : (
          <div className="habit-details">
            <p>Name: {habit.name}</p>
            <p>Repeat: {habit.repeat}</p>
            <p>Goal: {habit.goal}</p>
            <p>Time of Day: {habit.time_of_day}</p>
            <p>Start of Day: {habit.start_date}</p>

            <div className="button-container">
              <button onClick={onEditClick}>Edit</button>
              <button onClick={onDeleteClick}>Delete</button>
              <button onClick={onArchiveClick}>Archive</button>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
