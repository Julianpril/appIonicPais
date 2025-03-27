import { Injectable } from '@angular/core';

export interface LogEntry {
  countryName: string;
  timestamp: Date;
}

@Injectable({
  providedIn: 'root',
})
export class LogsService {
  private logs: LogEntry[] = [];

  addLog(countryName: string): void {
    const entry: LogEntry = {
      countryName,
      timestamp: new Date(),
    };
    this.logs.push(entry);
    console.log(`Log registrado: ${entry.countryName} a las ${entry.timestamp.toLocaleTimeString()}`);
  }

  getLogs(): LogEntry[] {
    return this.logs;
  }

  clearLogs(): void {
    this.logs = [];
  }
}
