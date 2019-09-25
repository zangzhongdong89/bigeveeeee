// 用户模块 : 所有与用户相关的操作全写在这里
var user = {
    // 用户登录
    // @param {*} userName 用户名 
    // @param {*} password 密码 
    // @param {*} callBack 回调函数
    login: function(userName,password,callBack) {
        $.post(
            URLIST.user_login,
            {
                user_name: userName,
                password:password
            },
            function(res) {
                // res 就是响应体，是由$.post 这个方法决定的
                callBack(res);
            }
        );
    },

    // 用户推出
    // @param {*} callBack
    logout: function(callBack) {
        $.post(URLIST.user_logout, function(res){
            callBack(res);
        });
    },
