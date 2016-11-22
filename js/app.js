function ToDoControl($scope){
    
    $scope.todoarr = [
        {txt:'Проснуться',description:'Не нуждается в описании, наверное...', done:true},
        {txt:'Позавтракать',description:'Не объедаться',
        done:false}
    ];
    
    
    $scope.waiting = function(){
        var count = 0;
        angular.forEach($scope.todoarr,function(todo){
            count += todo.done ? 0 : 1;
        });
        return count;
    };
    
    $scope.addTodo = function(){                                        $scope.todoarr.push({txt:$scope.todoTxt,description:$scope.todoDescription,done:false});
        $scope.todoTxt = '';
        $scope.todoDescription = '';
    }
    
    $scope.showDescription = function(todo){
       $(".details li.name").html('Название: ' + todo.txt);
        $(".details li.description").html('Описание: ' + todo.description);
    };

    

}