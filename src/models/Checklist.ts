import {Reminder} from '@/models/Reminder';

export interface Checklist {
    id: number;
    title: string;
    reminders: Array<Reminder>;
}
