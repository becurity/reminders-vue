export interface Reminder {
    id: number;
    title: string;
    dateTimeUTC: number;
    frequency: Frequencies;
    frequencyEndDateTimeUTC: number;
    priority: Priorities;
    note: string;
    isDone: boolean;
    userEmail: string;
}
export enum Frequencies {
    DAY = 'DAY',
    WEEK = 'WEEK',
    MONTH = 'MONTH',
    YEAR = 'YEAR',
}
export enum Priorities {
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH',
}

