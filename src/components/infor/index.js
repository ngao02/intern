import React from 'react';

const Infor = ({ name, birthday, mail, phone }) => {
  return (
    <div>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Birthday:</strong> {birthday}
      </p>
      <p>
        <strong>Mail:</strong> {mail}
      </p>
      <p>
        <strong>Phone Number:</strong> {phone}
      </p>
    </div>
  );
};

export default Infor;
