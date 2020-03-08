<template>
  <div class="tasks">
    <h1>Add Task</h1>
      <div class="form">
        <div>
          <input type="text" placeholder="TITLE" v-model="title">
        </div>
        <div>
          <input id="checked_box" type="checkbox" v-model="checked">
        </div>
        <div>
          <button class="app_task_btn" @click="addTask">Add</button>
        </div>
      </div>
  </div>
</template>

<script>
import TasksService from '@/services/TasksService'
export default {
  name: 'NewTask',
  data () {
    return {
      title: '',
      checked: ''
    }
  },
  methods: {
    async addTask () {
      await TasksService.addTask({
        title: this.title,
        checked: document.getElementById('checked_box').checked // Bit hacky but works for now
      })
      this.$router.push({ name: 'Tasks' })
    }
  }
}
</script>
