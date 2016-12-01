angular.module("wechat.controllers",[])
    .controller("messageCtrl",function ($scope,$state,messageService) {
        messageService.init().then(function () {
            $scope.messages = messageService.getAllMsg();
            // console.log($scope.messages.length);
        })
        $scope.showMsgDetail = function (msgId) {
            $state.go("msgDetail",{"msgId":msgId});
        }
        $scope.swipeLeft = function () {
            $state.go("tab.contacts");
        }

        var obj = function () {
            this.propA = "a";
        }
        obj.prototype = {
            propB : "b"
        }
        var o = new obj();
        console.log(o.propA,o.propB);
    })
    .controller("contactsCtrl",function ($scope) {

    })
    .controller("discoverCtrl",function ($scope) {

    })
    .controller("settingCtrl",function ($scope) {

    })
    .controller("msgDetailCtrl",function ($scope,$stateParams,messageService) {
        var msgId = $stateParams.msgId;
        $scope.msg = messageService.getMesDetailById(msgId);
        console.log($scope.msg);
    })