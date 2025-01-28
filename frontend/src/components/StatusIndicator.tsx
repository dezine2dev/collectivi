import React, { useState, useEffect } from 'react';
import { Activity } from 'lucide-react';
import { checkHealth } from '../services/api';

export const StatusIndicator: React.FC = () => {
  const [status, setStatus] = useState(false);
  const [latency, setLatency] = useState(0);

  useEffect(() => {
    const checkStatus = async () => {
      const result = await checkHealth();
      console.log("checcking status", result)
      setStatus(result.status);
      setLatency(result.latency);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 glass-button">
      <Activity
        className={`w-4 h-4 ${status ? 'text-green-400' : 'text-red-400'} ${
          status ? 'animate-[pulse_.5s_ease-in-out_infinite]' : ''
        }`}
      />
      <span className="text-xs font-medium">
        {status ? (
          <span className="text-green-400">{latency}ms</span>
        ) : (
          <span className="text-red-400">Offline</span>
        )}
      </span>
    </div>
  );
};
