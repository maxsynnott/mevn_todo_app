import Api from '@/services/Api'

export default {
  fetchTasks () {
    return Api().get('tasks')
  },
  addTask (params) {
    return Api().post('tasks', params)
  }
}
