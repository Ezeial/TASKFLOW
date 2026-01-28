import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Task {
  id: number
  title: string
  description?: string
  status: 'todo' | 'in-progress' | 'done'
}

export const useTaskStore = defineStore('tasks', () => {
  const tasks = ref<Task[]>([
    { id: 1, title: 'Setup du projet Vue 3', status: 'done' },
    { id: 2, title: 'Créer le board avec drag & drop', status: 'in-progress' },
    { id: 3, title: 'Ajouter un formulaire pour créer des tâches', status: 'todo' },
    { id: 4, title: 'Intégrer un appel API mock', status: 'todo' }
  ])
})