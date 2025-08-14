// ----------------------------
// Imports
// ----------------------------
import React from 'react';
import { useState } from 'react';
import schoolsData from './schools.json';

// ----------------------------
// App Component
// ----------------------------
function App() {
  // ----------------------------
  // State Hooks
  // ----------------------------
  const [gpa, setGpa] = useState('');
  const [testScore, setTestScore] = useState('');
  const [results, setResults] = useState([]);

  // ----------------------------
  // Calculate Scholarships
  // ----------------------------
  const calculateScholarships = () => {
    const gpaNum = parseFloat(gpa);
    const testScoreNum = parseInt(testScore);

    const matchedSchools = schoolsData.map((school) => {
      let award = 0;
      school.meritScholarships.forEach((tier) => {
        if (
          gpaNum >= tier.minGPA &&
          gpaNum <= tier.maxGPA &&
          testScoreNum >= tier.minTestScore &&
          testScoreNum <= tier.maxTestScore
        ) {
          award = tier.award;
        }
      });
      return { name: school.name, baseTuition: school.baseTuition, award };
    });

    setResults(matchedSchools);
  };

  // ----------------------------
  // JSX
  // ----------------------------
  return (
    <div className="App">
      <h1>Merit Scholarship Calculator</h1>

      <div>
        <input
          type="number"
          placeholder="Enter GPA"
          value={gpa}
          onChange={(e) => setGpa(e.target.value)}
          step="0.01"
        />

        <input
          type="number"
          placeholder="Enter Test Score"
          value={testScore}
          onChange={(e) => setTestScore(e.target.value)}
        />

        <button onClick={calculateScholarships}>Calculate</button>
      </div>

      {results.length > 0 && (
        <div>
          <h2>Estimated Merit Scholarships:</h2>
          <ul>
            {results.map((school, index) => (
              <li key={index}>
                {school.name}: Base Tuition ${school.baseTuition},{' '}
                {school.award > 0
                  ? `Estimated Award $${school.award}`
                  : 'No merit scholarship estimated based on provided data'}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// ----------------------------
// Export App Component
// ----------------------------
export default App;
