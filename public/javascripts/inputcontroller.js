angular.module('InputApp', ['ngMaterial']).controller("YourController", function($scope, $http) {
    //初始化填充一个默认的ID数据
    $scope.obj = {
        'Metadata-Settings': {
            $: {
                majorVersion:"1",
                minorVersion:"1"
            },
            Entitys: [{
                Entity: [{
                    $: { name: 'Yourname' },
                    Columns: [{
                        Column: [{
                            $: {
                                name: 'id',
                                type: 'string', 
                                size: 32,
                                indexable: true
                            },
                            Properties: [{
                                Property: [{
                                    $: {
                                        key: 'Label',
                                        value: 'Newlyadd'
                                    }
                                }, {
                                    $: {
                                        key: 'Width',
                                        value: '50px'
                                    }
                                }, {
                                    $: {
                                        key: 'Visable',
                                        value: "true"
                                    }
                                }, {
                                    $: {
                                        key: 'Sortable',
                                        value: "true"
                                    }
                                }, {
                                    $: {
                                        key: 'SortName',
                                        value: "RefNum"
                                    }
                                }, {
                                    $: {
                                        key: 'Searchable',
                                        value: "true"
                                    }
                                }, {
                                    $: {
                                        key: 'ShortName',
                                        value: "ref"
                                    }
                                }, {
                                    $: {
                                        key: 'DataSourceType',
                                        value: "0"
                                    }
                                }, {
                                    $: {
                                        key: 'DataSource',
                                        value: ""
                                    }
                                }, {
                                    $: {
                                        key: 'DataSourceGroupBy',
                                        value: ""
                                    }
                                }, {
                                    $: {
                                        key: 'DataControlType',
                                        value: "1"
                                    }
                                }, {
                                    $: {
                                        key: 'Require',
                                        value: "false"
                                    }
                                }, {
                                    $: {
                                        key: 'InvalidMsg',
                                        value: ""
                                    }
                                }, {
                                    $: {
                                        key: 'InputRegular',
                                        value: ""
                                    }
                                }, {
                                    $: {
                                        key: 'DataFormat',
                                        value: ""
                                    }
                                }, {
                                    $: {
                                        key: 'JoinKeyword',
                                        value: ";"
                                    }
                                }]
                            }],
                            description: ["new add"]
                        }]
                    }],
                    Description: ["new add"],
                    EntityTranslatedColumn: [],
                    JoinFormatColumn: [],
                    ListTranslatedColumn: [],
                    SearchColumn: [],
                    StringFormatColumn: [],
                    Workflow: [{
                        $:{
                            code:'Yourworfflowcode',
                            enable:false
                        }
                    }]
                }]
            }]
        }
    };


        $scope.newlyadditem = {
            $: {
                name: guid(),
                type: 'string',
                size: 50,
                indexable: "true" 
            },
            Properties: [{
                Property: [{
                    $: {
                        key: 'Label',
                        value: 'Newlyadd'
                    }
                }, {
                    $: {
                        key: 'Width',
                        value: '50px'
                    }
                }, {
                    $: {
                        key: 'Visable',
                        value: "true"
                    }
                }, {
                    $: {
                        key: 'Sortable',
                        value: "true"
                    }
                }, {
                    $: {
                        key: 'SortName',
                        value: "RefNum"
                    }
                }, {
                    $: {
                        key: 'Searchable',
                        value: "true"
                    }
                }, {
                    $: {
                        key: 'ShortName',
                        value: "ref"
                    }
                }, {
                    $: {
                        key: 'DataSourceType',
                        value: "0"
                    }
                }, {
                    $: {
                        key: 'DataSource',
                        value: ""
                    }
                }, {
                    $: {
                        key: 'DataSourceGroupBy',
                        value: ""
                    }
                }, {
                    $: {
                        key: 'DataControlType',
                        value: "1"
                    }
                }, {
                    $: {
                        key: 'Require',
                        value: "false"
                    }
                }, {
                    $: {
                        key: 'InvalidMsg',
                        value: ""
                    }
                }, {
                    $: {
                        key: 'InputRegular',
                        value: ""
                    }
                }, {
                    $: {
                        key: 'DataFormat',
                        value: ""
                    }
                }, {
                    $: {
                        key: 'JoinKeyword',
                        value: ";"
                    }
                }]
            }],
            description: ["new add"]
        };
             //console.log('success');
            //console.log(obj);
            
    console.log('input');
    var obj = $scope.obj;
    //read the obj.
    var metabase = obj["Metadata-Settings"];
    var versionNo = metabase["$"];
    //version number.
    $scope.versionNo = versionNo;
    // $scope.minorVersion = versionNo.minorVersion;
    //Entitys:
    var Entitys = metabase["Entitys"];
    var Entity0 = Entitys[0];
    var entity = Entity0.Entity;
    var entityee0 = entity[0];
    console.log("entity:");
    console.log(entityee0);
    console.log("column:");
    console.log(entityee0.Columns[0].Column);
    console.log("Property:");
    console.log(entityee0.Columns[0].Column[0].Properties[0].Property[0]);
    $scope.Metaobj = entityee0;





    $scope.types = ('int;string;dateTime').split(';').map(function(type) {
        return {
            columntype: type
        };
    });
    $scope.indexable = [true, false];


    $scope.addclick = function() {
        // alert('add');
        //make a unique name for newly added
        //$scope.column.name = guid();
        

        $scope.Metaobj.Columns[0].Column.push($scope.newlyadditem);
    };

    $scope.addMulticlick = function() {
        var number = $scope.number;
        console.log($scope.number);
        // alert('add');
        //make a unique name for newly added
        //$scope.column.name = guid();
        var columns = [];
        // for (var i = 0; i < Things.length; i++) {
        //     Things[i]
        // }
        getUniqueshorname();

    };
    $scope.saveedit = function() {
        console.log("$scope.obj:");
        console.log($scope.obj);
        //alert(JSON.stringify($scope.obj));
        $http.post('/config/save', { Metaobj: $scope.obj }).success(function(result) {
            console.dir(result);
            alert('save post success');
        }).error(function() {
            alert('save post error');
        });



    };

    $scope.removeTab = function(column) {
        var index = $scope.Metaobj.Columns[0].Column.indexOf(column);
        $scope.Metaobj.Columns[0].Column.splice(index, 1);
    };


     function loadfile(obj) {        
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
            var Entitys = metabase["Entitys"];
            var Entity0 = Entitys[0];
            var entity = Entity0.Entity;
            var entityee0 = entity[0];
            console.log("entity:");
            console.log(entityee0);
            console.log("column:");
            console.log(entityee0.Columns[0].Column);
            console.log("Property:");
            console.log(entityee0.Columns[0].Column[0].Properties[0].Property[0]);
            $scope.Metaobj = entityee0;
       
    };

    function getUniqueshorname(){
        for (var column in $scope.Metaobj.Columns[0].Column ) {
            var Properties = column.Properties[0].Property;
            console.log(Properties);
        }
        
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
    return s4();

}


