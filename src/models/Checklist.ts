import {Reminder} from '@/models/Reminder';

export interface Checklist {
    id: number;
    title: string;
    color: string;
    reminders: Array<Reminder>;
}
