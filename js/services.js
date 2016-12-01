angular.module("wechat.services",[])
    .factory("messageService",function ($http) {
        return {
            _messages:null,
            init:function () {
                var _this = this;
                return $http.get("data/json/messages.json").then(function (res) {
                    _this._messages = res.data.messages;
                },function (err) {
                    _this._messages = null;
                });
            },
            getAllMsg:function () {
                return this._messages;
            },
            getMesDetailById:function (id) {
                var res = null;
                angular.forEach(this._messages,function (val,key) {
                    if(val.id == id){
                        res = val;
                    }
                })
                return res;
            }
        }
    })
    .factory("dateService",function () {
        
    })
