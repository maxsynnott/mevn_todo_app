<template>
  <div class="tasks">
    <h1>Edit Task</h1>
      <div class="form">
        <div>
          <input type="text" placeholder="TITLE" v-model="title">
        </div>
        <div>
          <input id="checked_box" type="checkbox" v-model="checked">
        </div>
        <div>
          <button class="app_task_btn" @click="updateTask">Update</button>
        </div>
      </div>
  </div>
</template>

<script>
import TasksService from '@/services/TasksService'
export default {
  name: 'EditTask',
  data () {
    return {
      title: '',
      checked: ''
    }
  },
  mounted () {
    this.getTask()
  },
  methods: {
    async getTask () {
      const response = await TasksService.getTask({
        id: this.$route.params.id
      })
      this.title = response.data.title
      this.checked = response.data.checked
    },
    async updateTask () {
      await TasksService.updateTask({
        id: this.$route.params.id,
        title: this.title,
        checked: this.checked
      })
      this.$router.push({ name: 'Tasks' })
    }
  }
}
</script>
