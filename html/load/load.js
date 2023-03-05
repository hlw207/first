var IsLoad = true;
function register() {
    if (IsLoad) {
        document.getElementById("Input").value = "";
        document.getElementById("Input1").value = "";
        var determine = "<br><span>确认:&nbsp</span><input id=\"Input2\" type=\"password\" placeholder=\" 确认密码\">";
        document.getElementById("determine").className = "form";
        document.getElementById("determine").innerHTML = determine;
        determine = "<br><span>号码:&nbsp</span><input id=\"Input3\" type=\"text\" placeholder=\" 手机号码  |  手机号应为11位\">";
        document.getElementById("phone").className = "form";
        document.getElementById("phone").innerHTML = determine;
        IsLoad = false;
    } else {
        var Input = document.getElementById("Input").value;
        var Input1 = document.getElementById("Input1").value;
        var Input2 = document.getElementById("Input2").value;
        var Input3 = document.getElementById("Input3").value;
        if (Input1 != Input2) {
            alert("两次输入密码不同，请重试");
            return;
        }
        if (/^\d+$/.test(Input) == false) {
            alert("账号应为数字");
            return;
        }
        if (/^\d+$/.test(Input3) == false) {
            alert("手机号应为数字");
            return;
        }
        if (Input1.length < 6) {
            alert("密码过短");
            return;
        }
        if (Input1.length > 20) {
            alert("密码过长");
            return;
        }
        if (Input.length != 9) {
            alert("账号应为9位");
            return;
        }
        if (Input3.length != 11) {
            alert("手机号应为11位");
            return;
        }
        alert("数据存储尚未解决，无法存到本地");
    }
}
function load() {
    if (!IsLoad) {
        document.getElementById("Input").value = "";
        document.getElementById("Input1").value = "";
        document.getElementById("determine").className = "";
        document.getElementById("determine").innerHTML = "";
        document.getElementById("phone").className = "";
        document.getElementById("phone").innerHTML = "";
        IsLoad = true;
    } else {
        var Input = document.getElementById("Input").value;
        var Input1 = document.getElementById("Input1").value;
        if (/^\d+$/.test(Input) == false) {
            alert("账号应为数字");
            return;
        }
        if (Input.length != 9) {
            alert("账号不合法");
            return;
        }
        if (Input1.length < 6 || Input1.length > 20) {
            alert("密码不合法");
            return;
        }
        alert("数据存储尚未解决，无法存到本地，无法验证");
        location.href = "../library/library.html";
    }
}