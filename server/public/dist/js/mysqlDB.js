$(function () {
    var update_user
        , ul;

    function parse_user_html(data) {
        var html = '';
        html += "<li><ul class='tabrow' data-id='" + data.id + "'>";
        html += "<li>" + data.id + "</li>";
        html += "<li>" + data.username + "</li>";
        html += "<li>" + data.password + "</li>";
        html += "<li>" + data.age + "</li>";
        html += "<li>" + data.info + "</li>";
        html += "<li><a href='#'>修改</a>&nbsp;|&nbsp;<a href='#'>删除</a></li>";
        html += "</ul></li>";
        return html;
    }

    $("#add").click(function () {
        var username = $("#username").val(),
            password = $("#password").val(),
            age = $("#age").val(),
            info = $("#info").val();
        $.post("/addUsers", {
            username: username,
            password: password,
            age: age,
            info: info
        }, function (data) {
            if (data.status) {
                $("#usertable").append(parse_user_html({
                    id: data.id,
                    username: username,
                    password: password,
                    age: age,
                    info: info
                }));
            }
        });
    });

    $(".delete").click(function () {
        var li = $(this).parent().parent();
        var id = li.attr("data-id");
        $.post("/deleteUsers", {
            id: id
        }, function (data) {
            if (data.status) {
                li.parent().remove();
            }
        });
    });

    $(".update").click(function () {
        var id = $(this).parent().parent().attr("data-id");
        ul = $("ul[data-id='" + id + "']");
        update_user = {
            id: id,
            username: ul.children()[ 1 ].innerText,
            password: ul.children()[ 2 ].innerText,
            age: ul.children()[ 3 ].innerText,
            info: ul.children()[ 4 ].innerText
        };
        $("#username").val(update_user.username);
        $("#password").val(update_user.password);
        $("#age").val(update_user.age);
        $("#info").val(update_user.info);
        $("#update").removeClass("ele_none");
    });

    $("#update").click(function () {
        if (update_user.id) {
            var user = {
                id: update_user.id,
                username: $("#username").val(),
                password: $("#password").val(),
                age: $("#age").val(),
                info: $("#info").val()
            };
            if (JSON.stringify(update_user) !== JSON.stringify(user)) {
                $.post("/updateUsers", {
                    username: user.username,
                    password: user.password,
                    age: user.age,
                    info: user.info,
                    id: user.id
                }, function (data) {
                    if (data.status) {
                        ul.children()[ 1 ].innerText = user.username;
                        ul.children()[ 2 ].innerText = user.password;
                        ul.children()[ 3 ].innerText = user.age;
                        ul.children()[ 4 ].innerText = user.info;
                        $("#update").addClass("ele_none");
                    }
                });
            }
        }
    })

});