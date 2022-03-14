import React, { useState } from "react";

const PersonCard = ({ firstName, lastName, age, hairColor }) => {
  const [getAge, setAge] = useState(age);
  const handleClick = () => setAge(getAge + 1);
  console.log(getAge);

  return (
    <div>
      <h1>
        {lastName}, {firstName}
      </h1>
      <p>Age: {getAge}</p>
      <p>Hair Color: {hairColor}</p>
      <button onClick={handleClick}>
        Birthday Button for {firstName} {lastName}
      </button>
    </div>
  );
};

export default PersonCard;
