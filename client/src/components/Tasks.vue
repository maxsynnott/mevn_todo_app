<template>
  <div class="tasks">
    <h1>Tasks</h1>

    <table>
      <thead>
        <tr>
          <td>Title</td>
          <td>Completed</td>
        </tr>
      </thead>

      <tbody>
        <template v-for="task in tasks">
          <tr v-bind:key="task.id">
            <td>{{ task.title }}</td>
            <td>{{ task.checked }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
import TasksService from '@/services/TasksService'
export default {
  name: 'tasks',
  data () {
    return {
      tasks: []
    }
  },
  mounted () {
    this.getTasks()
  },
  methods: {
    async getTasks () {
      const reponse = await TasksService.fetchTasks()
      this.tasks = reponse.data
    }
  }
}
</script>
