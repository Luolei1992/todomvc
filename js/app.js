(function (angular) {
	'use strict';

	// Your starting point. Enjoy the ride!
   //name='小明'
   
   // 1.创建模块
   var app = angular.module('todos',['todo.service']);
   // 2.创建控制器
   app.controller('todosController',['$scope','todoService','$location',function($scope,todoService,$location){
      
      //console.log(todoService.add(1,1));
      
      
    //    // 功能1 显示数据列表
    //    var tasks=[
    //     {id:1,name:'吃饭',completed:false},
    //     {id:2,name:'睡觉',completed:true},
    //     {id:3,name:'学习',completed:false},
    //     {id:4,name:'休息',completed:true},
    //     {id:5,name:'打球',completed:true},
    //    ];
      // $scope.tasks=tasks;
      //  功能1 显示数据列表
         $scope.tasks=todoService.get();
        // 功能2 添加任务
         $scope.newTask='';
		     $scope.add=function(){
            if(!$scope.newTask){
                return;
            }
           todoService.add( $scope.newTask);
           $scope.newTask='';
       }
           // 功能3 删除任务
       $scope.remove=function(id){
           for (var i = 0; i < $scope.tasks.length; i++) {
               var item = $scope.tasks[i];
               
           console.log(item);
               if(item.id==id){
                // 从数组中移除数据
                 $scope.tasks.splice(i,1);

                 return;
               }
           }
       }
     // 功能4 修改任务
       $scope.isEditingId=-1;
       $scope.edit=function(id){
      
           $scope.isEditingId=id;
       }
       $scope.save=function(){
           $scope.isEditingId=-1;
       }

       // 功能5 切换任务是否完成的状态
       // 不需要写任务js代码
       
      // 功能6 批量切换任务是否完成的状态
       $scope.isSelected=false;
       $scope.toggleAll=function(){
           for (var i = 0; i < $scope.tasks.length; i++) {
              var item = $scope.tasks[i];
              item.completed=$scope.isSelected;
           }
       }
      //功能7 批量删除已经完成的内容
      $scope.clearCompleted=function(){
           var tmp = [];

           // 将未完成的任务添加到临时数组中
           for (var i = 0; i < $scope.tasks.length; i++) {
              var item = $scope.tasks[i];
              if(!item.completed){
                tmp.push(item);
              }
           }

           $scope.tasks=tmp;
       }

    // 功能7.1 控制清除已完成任务按钮的显示与否
       $scope.isShow=function(){
           for (var i = 0; i < $scope.tasks.length; i++) {
               var item = $scope.tasks[i];
               if(item.completed){
                 return true;
               }
           }
           return false;
       }


            // 功能8 显示未完成的任务数
       
       $scope.unCompleted=function(){
            var count =0;
           for (var i = 0; i < $scope.tasks.length; i++) {
             var item =  $scope.tasks[i];
             if(!item.completed){
                count++;
             }
           }
           return count;
       }
    //     //9切换完成未完成
    //    $scope.isCompleted={};
    //    $scope.all=function(){
    //       $scope.isCompleted={};
    //    }
    //    $scope.active=function(){
    //         $scope.isCompleted={completed:false};
    //    }
    //     $scope.completed=function(){

    //        $scope.isCompleted={completed:true};
    //    }





$scope.isCompleted={};

// $scope.all=function(){
//      console.log($location);
//     // $scope.isCompleted={};
//  }
// $scope.active=function(){
//  console.log($location);
//  }
//  $scope.completed=function(){
//  console.log($location);
//  }
$scope.location=$location;
$scope.$watch('location.url()',function(now,old){
    //console.log(now);
switch(now){
            case '/' :
            $scope.isCompleted={};
                break;
            case '/active' :
               $scope.isCompleted={completed:false};
                break;
            case '/completed' :
               $scope.isCompleted={completed:true};
                break;
        }
})
// $scope.all=function(){
//  switch($location.url()){
//             case '/' :
//             $scope.isCompleted={};
//                 break;
//             case '/active' :
//                $scope.isCompleted={completed:false};
//                 break;
//             case '/completed' :
//                $scope.isCompleted={completed:true};
//                 break;
//         }
// }
//   // 根据url中的hash显示不同状态的任务
//        // var hash = $location.url();
//         $scope.location=$location;
//         $scope.$watch('location.url()',function(nowValue,oldValue){
//           switch(nowValue){
//           case '/active':
//             $scope.isCompleted={completed:false}
//           break;
//           case '/completed':
//           $scope.isCompleted={completed:true}
//           break;
//           default:
//             $scope.isCompleted={};
//           break;
//         }
//         })
// $scope.all=function(){

//     $scope.isCompleted={};
// }
// $scope.active=function(){

//     $scope.isCompleted={completed:false};
// }
// $scope.completed=function(){

//     $scope.isCompleted={completed:true};
// }



}])
})(angular);
