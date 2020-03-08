import Api from '@/services/Api'

export default {
	fetchTasks () {
		return Api().get('tasks')
	},

	addTask (params) {
		return Api().post('tasks', params)
	},

	getTask (params) {
		return Api().get(`tasks/${params.id}`)
	},

	updateTask (params) {
		return Api().put(`tasks/${params.id}`, params)
	},

	deleteTask (id) {
    return Api().delete(`tasks/${id}`)
  }
}
