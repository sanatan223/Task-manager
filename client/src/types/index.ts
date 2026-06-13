import { type Dispatch, type SetStateAction } from 'react';

export interface Task {
    id: string;
    title: string;
    description: string;
    time: string;
    status: 'todo' | 'in-progress' | 'done';
}

export interface TaskListContext {
    tasklist: Task[];
    setTasklist: Dispatch<SetStateAction<Task[]>>;
}