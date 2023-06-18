import React from "react";

export const Archive = ({ archivedHabits }) => {
  return (
    <div>
      <h2>Archived Habits</h2>
      {archivedHabits.length === 0 ? (
        <p>No archived habits found.</p>
      ) : (
        <ul>
          {archivedHabits.map((habit) => (
            <li key={habit.id}>{habit.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
