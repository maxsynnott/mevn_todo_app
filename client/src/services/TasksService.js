import Api from '@/services/Api'

export default {
  fetchTasks () {
    return Api().get('tasks')
  }
}
