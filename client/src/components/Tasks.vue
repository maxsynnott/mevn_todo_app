<template>
  <div class="tasks">
    <h1>Tasks ({{ num_of_tasks }} tasks)</h1>
    <router-link v-bind:to="{ name: 'NewTask' }" class="">Add Task</router-link>

    <table>
      <thead>
        <tr>
          <td>Title</td>
          <td>Completed</td>
          <td>Actions</td>
        </tr>
      </thead>

      <tbody>
        <template v-for="task in tasks">
          <tr v-bind:key="task.id">
            <td>{{ task.title }}</td>
            <td>{{ task.checked }}</td>
            <td>
              <router-link v-bind:to="{ name: 'EditTask', params: { id: task._id } }">Edit</router-link>
              <a href="#" @click.prevent="deleteTask(task._id)">Delete</a>
            </td>
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
  computed: {
    num_of_tasks: function () {
      return this.tasks.length
    }
  },
  methods: {
    async getTasks () {
      const response = await TasksService.fetchTasks()
      this.tasks = response.data.tasks
    },
    async deleteTask (id) {
      await TasksService.deleteTask(id)
      this.getTasks()
    }
  }
}
</script>
