angular.module("wechat",["ionic","wechat.controllers","wechat.services","wechat.routers","wechat.directives"])
    .config(function ($ionicConfigProvider) {
        $ionicConfigProvider.tabs.position("bottom");
    })
    .run(function () {

    })

