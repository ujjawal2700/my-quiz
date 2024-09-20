import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const petName = searchParams.get('petName');
  const ownerName = searchParams.get('ownerName');
 
  
 
  const pets = await sql`SELECT name FROM Pets;`;
  return NextResponse.json({ pets }, { status: 200 });
}