import type { boardColumns } from '$lib/utils/types';
import { writable } from 'svelte/store';

export const boardStore = writable<boardColumns[]>([
    {
        id: Math.random() * 1000,
        name: 'Pending',
        tasks: [
            {
                id: Math.random() * 1000,
                title: 'UI Design',
                description: 'some description',
                scheduleDate: 'Apr 21 - 4:00 PM',
                prority: 'High',
                createdDate: '10 Nov - 12:41 PM'
            }
        ]
    },
    {
        id: Math.random() * 1000,
        name: 'Reviewing',
        tasks: [
            {
                id: Math.random() * 1000,
                title: 'UI Design',
                description: 'some description',
                scheduleDate: 'Apr 21 - 4:00 PM',
                prority: 'High',
                createdDate: '10 Nov - 12:41 PM'
            },
            {
                id: Math.random() * 1000,
                title: 'Queries',
                description: 'some description',
                scheduleDate: 'Apr 21 - 4:00 PM',
                prority: 'High',
                createdDate: '10 Nov - 12:41 PM'
            }
        ]
    },
    {
        id: Math.random() * 1000,
        name: 'Completed',
        tasks: [
            {
                id: Math.random() * 1000,
                title: 'UI Design',
                description: 'some description',
                scheduleDate: 'Apr 21 - 4:00 PM',
                prority: 'High',
                createdDate: '10 Nov - 12:41 PM'
            },
            {
                id: Math.random() * 1000,
                title: 'Queries',
                description: 'some description',
                scheduleDate: 'Apr 21 - 4:00 PM',
                prority: 'High',
                createdDate: '10 Nov - 12:41 PM'
            }
        ]
    }
]) 