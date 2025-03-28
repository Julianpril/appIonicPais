// src/app/services/logs.service.ts
import { Injectable } from '@angular/core';

export interface LogEntry {
  country: string;
  timestamp: Date;
}

@Injectable({
  providedIn: 'root',
})
export class LogsService {
  private storageKey = 'countryLogs';

  addLog(country: string): void {
    const newLog: LogEntry = {
      country,
      timestamp: new Date(),
    };
    const logs = this.getLogs();
    logs.push(newLog);
    localStorage.setItem(this.storageKey, JSON.stringify(logs));
    console.log(`Log registrado: ${country} a las ${newLog.timestamp.toLocaleTimeString()}`);
  }

  getLogs(): LogEntry[] {
    const logsString = localStorage.getItem(this.storageKey);
    if (logsString) {
      // Parseamos y convertimos el timestamp a objeto Date
      const parsed = JSON.parse(logsString) as LogEntry[];
      return parsed.map(log => ({
        ...log,
        timestamp: new Date(log.timestamp),
      }));
    }
    return [];
  }

  clearLogs(): void {
    localStorage.removeItem(this.storageKey);
    console.log('Logs borrados');
  }
}
