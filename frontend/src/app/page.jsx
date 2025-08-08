'use client'
import Card from "@/components/card/card";
import './style.css';
import Progress from '@/components/progress-bar/progress-bar';
export default function Home() {
  return (
  <>
  <div className="d-flex align-items-center justify-content-center h-100 w-100 mt-5 gap-2">
     <Progress/>
  </div>
 
  </>
  );
}
