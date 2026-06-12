
export interface Task {
    id: string;
    title: string;
    description: string;
    time: string;
    status: 'todo' | 'in-progress' | 'done';
}