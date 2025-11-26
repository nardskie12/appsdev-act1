import { useState } from "react";

function FcfsScheduler() {
  const [arrivalTime, setArrivalTime] = useState("");
  const [burstTime, setBurstTime] = useState("");
  const [processes, setProcesses] = useState([]);
  const [results, setResults] = useState(null);

  const handleAddProcess = (e) => {
    e.preventDefault();

    const a = Number(arrivalTime);
    const b = Number(burstTime);

    if (Number.isNaN(a) || Number.isNaN(b) || a < 0 || b <= 0) {
      return;
    }

    const nextId = processes.length + 1;
    setProcesses((prev) => [
      ...prev,
      { id: nextId, name: `P${nextId}`, arrivalTime: a, burstTime: b },
    ]);

    setArrivalTime("");
    setBurstTime("");
    setResults(null);
  };

  const handleCompute = () => {
    if (processes.length === 0) return;

    const sorted = [...processes].sort(
      (p1, p2) => p1.arrivalTime - p2.arrivalTime
    );

    let currentTime = 0;
    let totalWaiting = 0;
    let totalTurnaround = 0;

    const scheduled = sorted.map((p) => {
      const startTime = Math.max(currentTime, p.arrivalTime);
      const finishTime = startTime + p.burstTime;
      const waitingTime = startTime - p.arrivalTime;
      const turnaroundTime = finishTime - p.arrivalTime;

      currentTime = finishTime;
      totalWaiting += waitingTime;
      totalTurnaround += turnaroundTime;

      return {
        ...p,
        startTime,
        finishTime,
        waitingTime,
        turnaroundTime,
      };
    });

    setResults({
      processes: scheduled,
      avgWaiting: totalWaiting / scheduled.length,
      avgTurnaround: totalTurnaround / scheduled.length,
    });
  };

  return (
    <div className="fcfs-card">
      <h3 className="section-subtitle">FCFS CPU Scheduling (Interactive)</h3>
      <p className="fcfs-intro">
        Add processes with arrival time and burst time, then compute the
        schedule to see waiting and turnaround times.
      </p>

      <form className="fcfs-form" onSubmit={handleAddProcess}>
        <div className="fcfs-field">
          <label htmlFor="arrival">Arrival time</label>
          <input
            id="arrival"
            type="number"
            min="0"
            value={arrivalTime}
            onChange={(e) => setArrivalTime(e.target.value)}
            required
          />
        </div>
        <div className="fcfs-field">
          <label htmlFor="burst">Burst time</label>
          <input
            id="burst"
            type="number"
            min="1"
            value={burstTime}
            onChange={(e) => setBurstTime(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="fcfs-btn">
          Add process
        </button>
      </form>

      {processes.length > 0 && (
        <div className="fcfs-table-wrapper">
          <div className="fcfs-table-header">
            <span>Current processes</span>
            <button type="button" className="fcfs-btn fcfs-btn-secondary" onClick={handleCompute}>
              Compute FCFS
            </button>
          </div>
          <table className="fcfs-table">
            <thead>
              <tr>
                <th>Process</th>
                <th>Arrival</th>
                <th>Burst</th>
              </tr>
            </thead>
            <tbody>
              {processes.map((p) => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.arrivalTime}</td>
                  <td>{p.burstTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {results && (
        <div className="fcfs-results">
          <h4>FCFS Results</h4>
          <table className="fcfs-table">
            <thead>
              <tr>
                <th>Process</th>
                <th>Start</th>
                <th>Finish</th>
                <th>Waiting</th>
                <th>Turnaround</th>
              </tr>
            </thead>
            <tbody>
              {results.processes.map((p) => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.startTime}</td>
                  <td>{p.finishTime}</td>
                  <td>{p.waitingTime}</td>
                  <td>{p.turnaroundTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="fcfs-averages">
            <p>
              <strong>Average waiting time:</strong>{" "}
              {results.avgWaiting.toFixed(2)}
            </p>
            <p>
              <strong>Average turnaround time:</strong>{" "}
              {results.avgTurnaround.toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default FcfsScheduler;


