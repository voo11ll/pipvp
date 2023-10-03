import React from 'react';

export default function Signup() {
  function handleSubmit(e) {
    e.preventDefault();
    alert('Submitting!');
  }

  return (
    <form>
      <input />
      <button onClick={handleSubmit}>Send</button>
    </form>
  );
}
