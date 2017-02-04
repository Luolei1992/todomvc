(function (angular) {
	var app = angular.module('todo.service', []);
	app.service('todoService', function () {
		//    this.add=function(v1,v2){
		//             return v1+v2;
		//       }
		var str = localStorage.getItem('todos');
		var tasks = JSON.parse(str || '[]');
		this.get = function () {
			return tasks;
		}
		this.save = function () {
			localStorage.setItem('todos', JSON.stringify(tasks));
		}
		this.add = function (newTask) {
			// 动态的计算id
			var id;
			if (tasks || tasks.length == 0) {
				id = 1;
			} else {
				id = tasks[tasks.length - 1].id + 1;
			}
			// 添加数据到数据中
			tasks.push({id: id, name: newTask, completed: false});
			// 清空文本框架的值
			this.save();
		}
	});
})(angular);
