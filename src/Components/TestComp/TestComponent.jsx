
import React from "react";

function TestComponent() {
  return (
    <div className="flex flex-col text-gray-200 bg-gray-900 min-h-screen p-10 space-y-16">
      {/* First Section (Driving Simulator) */}
      <div className="flex flex-col md:flex-row items-center bg-gray-800 p-6 rounded-lg shadow-md space-y-6 md:space-y-0 md:space-x-6">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl font-bold text-purple-400 mb-4">Actual Driving Simulator</h1>
          <p className="text-gray-400">Experience real-time simulation for enhanced driving proficiency.</p>
        </div>
        <div className="md:w-1/2">
          <div className="bg-gray-700 h-48 w-full rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Image Placeholder</p>
          </div>
        </div>
      </div>

      {/* Second Section (Automotive Components Testing) */}
      <div className="flex flex-col md:flex-row items-center bg-gray-800 p-6 rounded-lg shadow-md space-y-6 md:space-y-0 md:space-x-6">
        <div className="md:w-1/2 order-last md:order-first">
          <div className="bg-gray-700 h-48 w-full rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Image Placeholder</p>
          </div>
        </div>
        <div className="md:w-1/2 text-center md:text-right">
          <h1 className="text-3xl font-bold text-blue-400 mb-4">Automotive Components Testing</h1>
          <p className="text-gray-400">Explore the cutting-edge testing technologies for automotive components.</p>
        </div>
      </div>

      {/* Third Section (Driving Licence Test with Simulator) */}
      <div className="flex flex-col md:flex-row items-center bg-gray-800 p-6 rounded-lg shadow-md space-y-6 md:space-y-0 md:space-x-6">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl font-bold text-green-400 mb-4">Driving Licence Test with Simulator</h1>
          <p className="text-gray-400">Combine simulator training with the driving licence test for a comprehensive learning experience.</p>
        </div>
        <div className="md:w-1/2">
          <div className="bg-gray-700 h-48 w-full rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Image Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestComponent;
