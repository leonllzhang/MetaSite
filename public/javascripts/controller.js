angular.module('YourApp', ['ngMaterial']).controller("YourController", function($scope,$http) {
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
            alert('save post success');
        }).error(function(){
            alert('save post error');
        });



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