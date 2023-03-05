var data = [
    [1, "���д��web", "��ѧ��", "������", 12, "����"],
    [1, "�����������", "��ѧ��", "������", 12, "����"],
    [1, "��������д��ҵ", "��ѧ��", "������", 12, "����"],
    [1, "1+1=2", "��ѧ��", "������", 12, "����"],
    [1, "�Һ������", "��ѧ��", "������", 12, "����"],
    [1, "������ܲ�����", "��ѧ��", "������", 12, "����"],
    [1, "һȭ�ѵ������", "��ѧ��", "������", 12, "����"],
    [1, "���д��web", "��ѧ��", "������", 12, "����"],
    [1, "�����������", "��ѧ��", "������", 12, "����"],
    [1, "��������д��ҵ", "��ѧ��", "������", 12, "����"],
    [1, "1+1=2", "��ѧ��", "������", 12, "����"],
    [1, "�Һ������", "��ѧ��", "������", 12, "����"],
    [1, "������ܲ�����", "��ѧ��", "������", 12, "����"],
    [1, "һȭ�ѵ������", "��ѧ��", "������", 12, "����"],
    [1, "���д��web", "��ѧ��", "������", 12, "����"],
    [1, "�����������", "��ѧ��", "������", 12, "����"],
    [1, "��������д��ҵ", "��ѧ��", "������", 12, "����"],
    [1, "1+1=2", "��ѧ��", "������", 12, "����"],
    [1, "�Һ������", "��ѧ��", "������", 12, "����"],
    [1, "������ܲ�����", "��ѧ��", "������", 12, "����"],
    [1, "һȭ�ѵ������", "��ѧ��", "������", 12, "����"],
];
var len = data.length;
var page = (len - len % 10) / 10 + 1;
var IsAdd = false;
var IsResign = false;
function BookAdd() {
    clear();
    document.getElementById("book_manage").style.display = "block";
    form_turn(1);
    var Page = document.getElementById("page");
    Page.innerHTML = "";
    var span1 = document.createElement("span");
    span1.innerHTML = "����";
    var span2 = document.createElement("span");
    span2.innerHTML = "ҳ";
    var span3 = document.createElement("span");
    span3.innerHTML = "��" + page + "ҳ";
    var input = document.createElement("input");
    input.id = "ToPage";
    input.type = "number";
    input.className = "Topage";
    input.value = "1";
    var b0 = document.createElement("button");
    b0.innerHTML = "��һҳ";
    b0.className = "certain";
    b0.onclick = function () { before() };
    var b = document.createElement("button");
    b.innerHTML = "��һҳ";
    b.className = "certain";
    b.onclick = function () { next() };
    var b1 = document.createElement("button");
    b1.innerHTML = "ȷ��";
    b1.className = "certain";
    b1.onclick = function () { Change() };
    Page.append(span1, input, span2, b0, b, b1, span3);
}

function Change() {
    var Topage = document.getElementById("ToPage");
    val = Topage.value;
    if (val > 0 && val <= page) {
        form_turn(val);
    }
}
function next(val) {
    var Topage = document.getElementById("ToPage");
    val = parseInt(Topage.value);
    val = val + 1;
    if (val > 0 && val <= page) {
        Topage.value = val;
        form_turn(val);
    }
}
function before() {
    var Topage = document.getElementById("ToPage");
    val = parseInt(Topage.value);
    val = val - 1;
    if (val > 0 && val <= page) {
        Topage.value = val;
        form_turn(val);
    }
}
function form_turn(val) {
    var form = document.getElementById("form");
    var content = document.getElementById("start").innerHTML;
    var start = document.createElement("tr");
    start.id = "start";
    start.innerHTML = content;
    form.innerHTML = "";
    form.append(start);
    for (var i = 10 * (val - 1); i < 10 * val && i != data.length; i++) {
        var tr = document.createElement("tr");
        tr.id = "book" + i;
        tr.className = "book";
        var td = document.createElement("td");
        td.className = "td_first";
        var button = document.createElement("button");
        button.className = "sure";
        td.append(button);
        tr.append(td);
        for (var j = 0; j < 6; j++) {
            var td = document.createElement("td");
            td.innerHTML = data[i][j];
            tr.append(td);
        }
        var td1 = document.createElement("td");
        td1.className = "td_last";
        var button1 = document.createElement("button");
        var button2 = document.createElement("button");
        button1.className = "resign";
        button1.innerHTML = "�޸�";
        button1.onclick = function(){Resign(i)};
        button2.className = "delete";
        button2.onclick = function(){Delete(i)};
        button2.innerHTML = "ɾ��";
        td1.append(button1, button2);
        tr.append(td1);
        form.append(tr);
    }

}
function clear() {
    document.getElementById("book_manage").style.display = "none";
    document.getElementById("AddResign").style.display = "none";
}
function clear1() {
    document.getElementById("name").value = "";
    document.getElementById("num").value = "";
    document.getElementById("author").value = "";
    var obj = document.getElementById("category"); //��λid
    obj.selectedIndex = 0;
    document.getElementById("language").value = "";
    document.getElementById("price").value = "";
}
function Add() {
    document.getElementById("book_manage").style.display = "none";
    document.getElementById("AddResign").style.display = "block";
    IsAdd = true;
}
function Resign(val) {
    document.getElementById("book_manage").style.display = "none";
    document.getElementById("AddResign").style.display = "block";
    document.getElementById("name").value = data[val][];
    document.getElementById("num").value = 1;
    document.getElementById("category").value = 1;
    document.getElementById("author").value = 1;
    document.getElementById("language").value = 1;
    document.getElementById("price").value = 1;
    IsResign = true;
}
function Delete() {

}
function Return() {
    document.getElementById("book_manage").style.display = "block";
    document.getElementById("AddResign").style.display = "none";
    clear1();
    if (IsAdd)
        IsAdd = false;
    if (IsResign)
        IsResign = false;
}
function Certain() {
    if (IsAdd) {
        var name = document.getElementById("name").value;
        var num = parseInt(document.getElementById("num").value);
        var obj = document.getElementById("category"); //��λid
        var index = obj.selectedIndex;
        var category = obj.options[index].value;
        var author = document.getElementById("author").value;
        var language = document.getElementById("language").value;
        var price = parseInt(document.getElementById("price").value);
        var e = [];
        e.push(num);
        e.push(name);
        e.push(category);
        e.push(author);
        e.push(price);
        e.push(language);
        data.push(e);
        clear1();
        BookAdd();
    }
}