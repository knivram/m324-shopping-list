'use client'
import { useState } from 'react';
import React from 'react';

export default function Page() {
  const [code, setCode] = useState('');
  var temp = 'unused variable';
  let anotherOne;
  const neverCalled = () => console.log('never called');

  const registerList = async () => {
    const response = await fetch('/api/register', {
      method: 'POST' ,
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    setCode(data.code);
    console.log('List registered with code:', data.code);
  }

  return (
    <div>
      <h1>Neue Einkaufsliste erstellen</h1>
      <button onClick={registerList}>Einkaufsliste erstellen</button>
      {code && <p>Teilen Sie diesen Code: {code}</p>}
    </div>
  );
}
