angular.module('YourApp', ['ngMaterial']).controller("YourController", function($scope,$http) {    
     $scope.newlyadditem = {
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
        
        SetShortnamesortnameforcolumn($scope.newlyadditem);
        $scope.Metaobj.Columns[0].Column.push($scope.newlyadditem); 
        
    };

     $scope.addMulticlick = function() {
        console.log(JSON.stringify($scope.number));
        alert('add');
        console.log('Sortnames');
        console.log($scope.Sortnames);
        console.log('Shortnames');
        console.log($scope.Shortnames);
        console.log(generateShortname());
        //make a unique name for newly added
        //$scope.column.name = guid();
      
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
        getshortnamesortnamefromcolumn(column);
        //remove column
        $scope.Metaobj.Columns[0].Column.splice(index,1);
        //remove shortname      
        var shortindex = $scope.Shortnames.indexOf($scope.currentssname.ShortName);
        $scope.Shortnames.splice(shortindex,1);
        //remove sortname
        var sortindex = $scope.Sortnames.indexOf($scope.currentssname.SortName);
        $scope.Sortnames.splice(sortindex,1);
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
           //first call
           collectShortnameAndsortname()
        }).error(function(){
            alert('error');
        });
    };
    //call to load config file.
    $scope.loadfile();

    //========================================= method deal with shortname and sortname
    //First load once, then each time add or remove, change.
    //获取当前已经有的column的shortname 和sortname
     function collectShortnameAndsortname(){
        $scope.Sortnames=[];
        $scope.Shortnames=[];
        for (var i = 0; i < $scope.Metaobj.Columns[0].Column.length; i++) {           
            var  cc = $scope.Metaobj.Columns[0].Column[i];
            var Properties = cc.Properties[0].Property;
           for (var i = 0; i < Properties.length; i++) {
               if (Properties[i].$["key"] == "SortName") {
                $scope.Sortnames.push(Properties[i].$["value"]);
               }else if (Properties[i].$["key"] == "ShortName") {
                $scope.Shortnames.push(Properties[i].$["value"]);
               }
           }            
        }
        console.log($scope.Sortnames);
        console.log($scope.Shortnames);
    };
    //根据传入的column获取shortname和sortname
    function getshortnamesortnamefromcolumn(column){
        $scope.currentssname = {};
        var cushortname;
        var cusortname;
        var Properties = column.Properties[0].Property;
        for (var i = 0; i < Properties.length; i++) {
               if (Properties[i].$["key"] == "SortName") {
                cusortname = Properties[i].$["value"];
               }else if (Properties[i].$["key"] == "ShortName") {
                cushortname = Properties[i].$["value"];
               }
           }
        $scope.currentssname = {ShortName: cushortname,SortName:cusortname};     
    }

    function SetShortnamesortnameforcolumn(column){
        var Properties = column.Properties[0].Property;
        var columnname = column.$.name;
        for (var i = 0; i < Properties.length; i++) {
               if (Properties[i].$["key"] == "SortName") {
                Properties[i].$["value"] = generateSortnamewithcolumnname(columnname,2);
               }else if (Properties[i].$["key"] == "ShortName") {
                Properties[i].$["value"] = generateShortnamewithcolumnname(columnname,2);
               }
           }
    }

    function generateShortname(){
        var newshortname;
        do{
        newshortname = guid();
        var isexist = $scope.Shortnames.in_array(newshortname);
    }while(isexist);
        return newshortname;        
    };
    function generateShortnamewithcolumnname(columnname,i){
        var newshortname;
        do{
        newshortname = preguid(columnname,i);
        var isexist = $scope.Shortnames.in_array(newshortname);
    }while(isexist);
        return newshortname;        
    };

    function generateSortname(){
         var newsortname;
        do{
        newsortname = guid();
        var isexist = $scope.Sortnames.in_array(newsortname);
    }while(isexist);
        return newsortname;  
    };

    function generateSortnamewithcolumnname(columnname,i){
        var newsortname;
        do{
        newsortname = preguid(columnname,i);
        var isexist = $scope.Sortnames.in_array(newsortname);
    }while(isexist);
        return newsortname;        
    };

    //=================================================================

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

function preguid(name,i){
     function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  var digit4 = s4();
  var pre = name.substr(0,i);
  return pre + digit4;

}

Array.prototype.S=String.fromCharCode(2);
Array.prototype.in_array=function(e){
    var r=new RegExp(this.S+e+this.S);
    return (r.test(this.S+this.join(this.S)+this.S));
}; 
//如果 存在返回true , 不存在返回false