import Api from '@/services/Api'

export default {
	fetchTasks () {
		return Api().get('tasks')
	},

	addTask (params) {
		return Api().post('tasks', params)
	},

	getTask (params) {
		return Api().get(`task/${params.id}`)
	},

	updateTask (params) {
		return Api().put('task/' + params.id, params)
	}
}
