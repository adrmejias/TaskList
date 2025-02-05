export interface Task {
    id: number;
    title: string;
    description?: string;
    date?: string;    // Asegúrate de que esté incluido
    time?: string;
    completed: boolean;
  }
  