var IsLoad = true;
function register() {
    if (IsLoad) {
        document.getElementById("Input").value = "";
        document.getElementById("Input1").value = "";
        var determine = "<br><span>ȷ��:&nbsp</span><input id=\"Input2\" type=\"password\" placeholder=\" ȷ������\">";
        document.getElementById("determine").className = "form";
        document.getElementById("determine").innerHTML = determine;
        determine = "<br><span>����:&nbsp</span><input id=\"Input3\" type=\"text\" placeholder=\" �ֻ�����  |  �ֻ���ӦΪ11λ\">";
        document.getElementById("phone").className = "form";
        document.getElementById("phone").innerHTML = determine;
        IsLoad = false;
    } else {
        var Input = document.getElementById("Input").value;
        var Input1 = document.getElementById("Input1").value;
        var Input2 = document.getElementById("Input2").value;
        var Input3 = document.getElementById("Input3").value;
        if (Input1 != Input2) {
            alert("�����������벻ͬ��������");
            return;
        }
        if (/^\d+$/.test(Input) == false) {
            alert("�˺�ӦΪ����");
            return;
        }
        if (/^\d+$/.test(Input3) == false) {
            alert("�ֻ���ӦΪ����");
            return;
        }
        if (Input1.length < 6) {
            alert("�������");
            return;
        }
        if (Input1.length > 20) {
            alert("�������");
            return;
        }
        if (Input.length != 9) {
            alert("�˺�ӦΪ9λ");
            return;
        }
        if (Input3.length != 11) {
            alert("�ֻ���ӦΪ11λ");
            return;
        }
        alert("���ݴ洢��δ������޷��浽����");
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
            alert("�˺�ӦΪ����");
            return;
        }
        if (Input.length != 9) {
            alert("�˺Ų��Ϸ�");
            return;
        }
        if (Input1.length < 6 || Input1.length > 20) {
            alert("���벻�Ϸ�");
            return;
        }
        alert("���ݴ洢��δ������޷��浽���أ��޷���֤");
        location.href = "../library/library.html";
    }
}