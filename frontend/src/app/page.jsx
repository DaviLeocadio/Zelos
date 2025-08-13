'use client'
import { io } from 'socket.io-client';
import './style.css';
const socket = io('http://localhost:8000/chat')

export default function Home() {
  return (
  <>
  <div className="d-flex align-items-center justify-content-center h-100 w-100 mt-5 gap-2">
     
  </div>
 
  </>
  );
}
