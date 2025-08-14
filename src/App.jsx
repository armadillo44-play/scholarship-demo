import React, { useState } from 'react';

export default function ScholarshipCalculator() {
  const [gpa, setGpa] = useState('');
  const [testScore, setTestScore] = useState('');
  const [estimatedScholarship, setEstimatedScholarship] = useState(null);

  const calculateScholarship = () => {
    // Simple placeholder calculation for demonstration
    let scholarship = 0;
    if (gpa >= 3.5 && testScore >= 1200) scholarship = 10000;
    else if (gpa >= 3.0 && testScore >= 1100) scholarship = 5000;
    else if (gpa >= 2.5 && testScore >= 1000) scholarship = 2000;
    else scholarship = 0;

    setEstimatedScholarship(scholarship);
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded-2xl shadow">
      <h1 className="text-2xl font-bold mb-4">Merit Scholarship Estimator</h1>
      <label className="block mb-2">High School GPA</label>
      <input
        type="number"
        value={gpa}
        onChange={(e) => setGpa(e.target.value)}
        step="0.1"
        min="0"
        max="4"
        className="w-full border rounded p-2 mb-4"
      />
      <label className="block mb-2">Test Score (SAT)</label>
      <input
        type="number"
        value={testScore}
        onChange={(e) => setTestScore(e.target.value)}
        min="400"
        max="1600"
        className="w-full border rounded p-2 mb-4"
      />
      <button
        onClick={calculateScholarship}
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Calculate
      </button>
      {estimatedScholarship !== null && (
        <div className="mt-4 p-3 bg-gray-100 rounded">
          {estimatedScholarship > 0 ? (
            <p>Estimated Scholarship: ${estimatedScholarship.toLocaleString()}</p>
          ) : (
            <p>Unfortunately, no merit scholarship is estimated based on the provided data.</p>
          )}
        </div>
      )}
    </div>
  );
}
