// pages/index.js
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-blue-600 p-6 text-white flex justify-between items-center">
        <div className="text-lg font-semibold">
          <h1 className="text-2xl">Sindhi Saanjh</h1>
          <p className="text-base">A Sindhi Learning App</p>
        </div>
        <div>
          <p className="text-xl">Unlock the beauty of the Sindhi language</p>
          <p className="text-sm">
            Learn effortlessly, connect deeply, and embrace a rich cultural heritage.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex justify-between p-8">
        {/* Left Section: Navigation Buttons */}
        <div className="w-2/3">
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">ilm ji jaanch(علم جي جانچ)</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-gray-100 py-2 px-4 rounded-md hover:bg-gray-200">
                1) Jaanch 1
              </button>
              <button className="bg-blue-800 text-white py-2 px-4 rounded-md">
                2) Jaanch 2
              </button>
              <button className="bg-gray-100 py-2 px-4 rounded-md hover:bg-gray-200">
                3) Jaanch 3
              </button>
              <button className="bg-gray-100 py-2 px-4 rounded-md hover:bg-gray-200">
                4) Jaanch 4
              </button>
            </div>
          </div>
        </div>

        {/* Right Section: Audio List */}
        <div className="w-1/3">
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Sound of Progress</h2>
            {/* Audio Player 1 */}
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center text-xl font-bold text-orange-800">
                D
              </div>
              <div className="ml-4 flex-grow">
                <p className="font-semibold">Dairla B.</p>
                <p className="text-sm text-gray-500">Following is the Audio of Dairla B.</p>
                {/* Custom Audio Player */}
                <audio controls className="w-full mt-2">
                  <source src="/audio/sample.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
            {/* Audio Player 2 */}
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-xl font-bold text-blue-800">
                E
              </div>
              <div className="ml-4 flex-grow">
                <p className="font-semibold">Eidan P.</p>
                <p className="text-sm text-gray-500">Following is the Audio of Eidan P.</p>
                <audio controls className="w-full mt-2">
                  <source src="/audio/sample.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
            {/* Audio Player 3 */}
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center text-xl font-bold text-orange-800">
                D
              </div>
              <div className="ml-4 flex-grow">
                <p className="font-semibold">Dairla B.</p>
                <p className="text-sm text-gray-500">Following is the Audio of Dairla B.</p>
                <audio controls className="w-full mt-2">
                  <source src="/audio/sample.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
