import Vue from 'vue';
import Vuex from 'vuex';
import {AppState} from '@/models/AppState';
import {Checklist} from '@/models/Checklist';
import {Frequencies, Priorities} from '@/models/Reminder';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'


const state: AppState = {
    checklists: [
        {
            id: 1,
            title: 'Reminders',
            color: '#d5720e',
            reminders: [
                {
                    id: 1,
                    title: 'Do something now',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: true,
                    userEmail: 'c@b.com'
                },
                {
                    id: 2,
                    title: 'Do something later today',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: 3,
                    title: 'Do something tomorrow',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
            ]
        },
        {
            id: 2,
            title: 'Groceries',
            color: '#0099CC',
            reminders: [
                {
                    id: 1,
                    title: 'Do something now',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: true,
                    userEmail: 'c@b.com'
                },
                {
                    id: 2,
                    title: 'Do something later today',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: 3,
                    title: 'Do something tomorrow',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
                {
                    id: null,
                    title: '',
                    dateTimeUTC: 1557768793911,
                    frequency: Frequencies.DAY,
                    frequencyEndDateTimeUTC: 1557768793911,
                    priority: Priorities.MEDIUM,
                    note: 'Describe the reminder',
                    isDone: false,
                    userEmail: 'c@b.com'
                },
            ]
        },
    ],
    currentChecklistId: null,
};


// mutations
const mutations = {
    setCurrentChecklistId: (state: AppState, checklistId: number) => {
        state.currentChecklistId = checklistId;
    }
}

// getters
const getters = {
    checklists: (state: AppState) => {
        return state.checklists;
    },
    currentChecklist: (state: AppState) => {
        return state.checklists.find(el => el.id === state.currentChecklistId);
    },
}

// actions
const actions = {
    setCurrentChecklistId ({ commit, state }: any, checklistId: number) {
        commit('setCurrentChecklistId', checklistId);
    },
}

const vue_store = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};

export default new Vuex.Store(
    vue_store,
);







