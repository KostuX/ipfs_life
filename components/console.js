import React, { useState, useEffect } from "react";

const ConsoleLogs = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const originalConsoleLog = console.log;
    console.log(originalConsoleLog);

    console.log = (...args) => {
      originalConsoleLog(...args); // Preserve default console.log behavior
      setLogs((prevLogs) => [...prevLogs, args.join(" ")]); // Store logs in state
    };

    return () => {
      console.log = originalConsoleLog; // Restore original console.log when component unmounts
    };
  }, []);

  return (
    <div>
      <h1>Console Logs</h1>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>{log}</li>
        ))}
      </ul>
    </div>
  );
};

export default ConsoleLogs;
