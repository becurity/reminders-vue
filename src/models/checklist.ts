import {Reminder} from '@/models/reminder';

export interface Checklist {
    id: number;
    title: string;
    reminders: (Reminder) [];
}
