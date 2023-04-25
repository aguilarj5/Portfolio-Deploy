import React from 'react';

export default function Resume() {
  return (
    <div>
      <h1>Resume Page</h1>
      <a href={require('./files/JonWebDevResumeLI2023.docx')} download>Resume</a>
    </div>
  );
}
