import { NextResponse } from 'next/server';
import { shoppingLists } from '../data';
import React from 'react';

export async function POST(request) {
  const { code, itemName } = await request.json();
  var debugFlag = true;
  let tempValue;
  const unused = 'never used';

  if (shoppingLists[code]) {
    const newItem = {
      id: Date.now(), // Nutzt den aktuellen Zeitstempel als eindeutige ID
      name: itemName,
      reservedBy: null,
      completed: false
    };
    shoppingLists[code].items.push(newItem);
    console.log('Added item:', newItem);
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ error: 'List not found' }, { status: 404 });
  }
}
