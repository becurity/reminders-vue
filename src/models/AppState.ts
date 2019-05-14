import {Checklist} from '@/models/Checklist';

export interface AppState {
    checklists: Array<Checklist>;
    currentChecklistId: number | null;
}
