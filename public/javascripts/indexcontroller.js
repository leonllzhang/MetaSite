angular.module('YourApp', ['ngMaterial']).controller("YourController", function($scope,$http,$mdMedia,$mdDialog) {
    $scope.column = {
        name: 'NewAdd',
        type: 'string',
        size: '32',
        indexable: 'true',
        description: 'wosssdfsdf',
        propertys: [{
            key: 'Label',
            value: 'CO Ref Number'
        }, {
            key: 'Width',
            value: '50px'
        }, {
            key: 'Order',
            value: '0'
        }, {
            key: 'Visable',
            value: 'true'
        }, {
            key: 'Sortable',
            value: 'true'
        }, {
            key: 'SortName',
            value: 'RefNum'
        }, {
            key: 'Searchable',
            value: 'true'
        }, {
            key: 'ShortName',
            value: 'ref'
        }, {
            key: 'DataSourceType',
            value: ''
        }, {
            key: 'DataSource',
            value: ''
        }, {
            key: 'DataSourceGroupBy',
            value: ''
        }, {
            key: 'DataControlType',
            value: '1'
        }, {
            key: 'Require',
            value: 'false'
        }, {
            key: 'InvalidMsg',
            value: ''
        }, {
            key: 'InputRegular',
            value: ''
        }, {
            key: 'DataFormat',
            value: ''
        }, {
            key: 'JoinKeyword',
            value: ';'
        }]
    };
    $scope.types = ('int;string;dateTime').split(';').map(function(type) {
        return {
            columntype: type
        };
    });
    $scope.indexable = [true, false];

    $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');

    $scope.loaddialog = function(ev){
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'dialog1.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: useFullScreen,
      locals:{
        file:{
            name:'test',
            file:''
        }
      }

    })
    .then(function(answer) {
        alert('n');
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
    };


    function DialogController($scope, $mdDialog,file) {
        $scope.file = file;
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {

    console.log($scope);
    console.log($mdDialog);
    console.log(file);
    console.log($scope.file.name);
    alert('e');
    console.log(answer);
    
    $mdDialog.hide(answer);
  };

$scope.setFiles = function(element) {
    console.log('sss');
    $scope.$apply(function(scope) {
      console.log('files:', element.files);
      // Turn the FileList object into an Array
        $scope.files = []
        for (var i = 0; i < element.files.length; i++) {
          $scope.files.push(element.files[i])
        }
      $scope.progressVisible = false
      });
    };
  $scope.uploadFile = function($scope){
    console.log('file upload');
    var fd = new FormData();
    for (var i in $scope.files) {
            fd.append("uploadedFile", scope.files[i])
        }
        var xhr = new XMLHttpRequest()
        xhr.upload.addEventListener("progress", uploadProgress, false)
        xhr.addEventListener("load", uploadComplete, false)
        xhr.addEventListener("error", uploadFailed, false)
        xhr.addEventListener("abort", uploadCanceled, false)
        xhr.open("POST", "/fileupload")
        scope.progressVisible = true
        xhr.send(fd)
  }

}
    $scope.addclick = function() {        
        alert('add');
        //make a unique name for newly added
        //$scope.column.name = guid();
        var newlyadditem = {
            $:{
                indexable: "true",
                name:guid(),
                size: 50,
                type:'string'
            },
            Properties:[{
                Property:[{
                    $:{
                        key: 'Label',
                        value:'Newlyadd'
                    }
            },{
                $:{
                        key: 'Width',
                        value:'50px'
                    }
            },{
                $:{
                        key: 'Visable',
                        value:"true"
                    }
            },{
                $:{
                        key: 'Sortable',
                        value:"true"
                    }
            },{
                $:{
                        key: 'SortName',
                        value:"RefNum"
                    }
            },{
                $:{
                        key: 'Searchable',
                        value:"true"
                    }
            },{
                $:{
                        key: 'ShortName',
                        value:"ref"
                    }
            },{
                $:{
                        key: 'DataSourceType',
                        value:"0"
                    }
            },{
                $:{
                        key: 'DataSource',
                        value:""
                    }
            },{
                $:{
                        key: 'DataSourceGroupBy',
                        value:""
                    }
            },{
                $:{
                        key: 'DataControlType',
                        value:"1"
                    }
            },{
                $:{
                        key: 'Require',
                        value:"false"
                    }
            },{
                $:{
                        key: 'InvalidMsg',
                        value:""
                    }
            },{
                $:{
                        key: 'InputRegular',
                        value:""
                    }
            },{
                $:{
                        key: 'DataFormat',
                        value:""
                    }
            },{
                $:{
                        key: 'JoinKeyword',
                        value:";"
                    }
            }
            ]
            }],
            description:["new add"] 
        };

        $scope.Metaobj.Columns[0].Column.push(newlyadditem);      
    };

     $scope.addMulticlick = function() {
        console.log(JSON.stringify($scope.name));
        alert('add');
        //make a unique name for newly added
        //$scope.column.name = guid();

       $scope.columnsarray.push({
        name: guid(),
        type: 'string',
        size: '32',
        indexable: 'true',
        description: 'wosssdfsdf',
        propertys: [{
            key: 'Label',
            value: 'CO Ref Number'
        }, {
            key: 'Width',
            value: '50px'
        }, {
            key: 'Order',
            value: '0'
        }, {
            key: 'Visable',
            value: 'true'
        }, {
            key: 'Sortable',
            value: 'true'
        }, {
            key: 'SortName',
            value: 'RefNum'
        }, {
            key: 'Searchable',
            value: 'true'
        }, {
            key: 'ShortName',
            value: 'ref'
        }, {
            key: 'DataSourceType',
            value: ''
        }, {
            key: 'DataSource',
            value: ''
        }, {
            key: 'DataSourceGroupBy',
            value: ''
        }, {
            key: 'DataControlType',
            value: '1'
        }, {
            key: 'Require',
            value: 'false'
        }, {
            key: 'InvalidMsg',
            value: ''
        }, {
            key: 'InputRegular',
            value: ''
        }, {
            key: 'DataFormat',
            value: ''
        }, {
            key: 'JoinKeyword',
            value: ';'
        }]
    }
        );
    };

    $scope.saveedit = function(){
        console.log("$scope.obj:");
        console.log($scope.obj);
        //alert(JSON.stringify($scope.obj));
        $http.post('/config/save',{Metaobj:$scope.obj}).success(function(result){
            console.dir(result);
            alert('save post success');
        }).error(function(){
            alert('save post error');
        });



    };

    $scope.removeTab = function(column){
        var index = $scope.Metaobj.Columns[0].Column.indexOf(column);
        $scope.Metaobj.Columns[0].Column.splice(index,1);
    };

    $scope.loadfile = function(){
        $http.get('/config').success(function(obj){
           console.log('success');
           console.log(obj);
           $scope.obj = obj;
           //read the obj.
           var metabase = obj["Metadata-Settings"];
           var versionNo = metabase["$"];   
           //version number.
           $scope.versionNo = versionNo;
           // $scope.minorVersion = versionNo.minorVersion;
           //Entitys:
           var Entitys =  metabase["Entitys"];
           var Entity0 = Entitys[0];
           var entity  = Entity0.Entity;
           var entityee0 = entity[0];   
           console.log("entity:");
           console.log(entityee0); 
           console.log("column:");     
           console.log(entityee0.Columns[0].Column);
           console.log("Property:");
           console.log(entityee0.Columns[0].Column[0].Properties[0].Property[0]);
           $scope.Metaobj = entityee0;
           
        }).error(function(){
            alert('error');
        });
    };

}).config(function($mdThemingProvider) {
    $mdThemingProvider.theme('docs-dark', 'default')
        .primaryPalette('yellow')
        .dark();
});

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  //Guid format.
  // return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
  //   s4() + '-' + s4() + s4() + s4();
    return s4() ;

}