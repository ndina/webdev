
document.getElementById("add").onclick = function(){

    var todoList = [];



    var input=document.getElementById("fortasks");
    var ul=document.getElementById("list");
    var text = input.value;
    var li=document.createElement("li");
    var str=document.createElement("span");
    if (text === "") {
        alert("You must write something!");
        return false;       
    }



    // if(localStorage.getItem('todo') != undefined){
    //     todoList = JSON.parse(localStorage.getItem('todo'));
    //     str.innerHTML = text;    

    // }



    // var temp = {};
    // temp.todo = text;
    // temp.check = false;
    // var i = todoList.length;
    // todoList[i].length = temp;
    // localStorage.setItem('todo', JSON.stringify(todoList));



    input.value = "";    
    str.innerHTML = text;
    var box = document.createElement("input");
    box.type="checkbox";
    box.name="check";
    box.onchange=function(){
        var l=document.getElementsByName("check");
       
        for(var i=0;i<l.length;i++){
            var a=l[i].parentElement;
            if(l[i].checked){
                a.style.setProperty("text-decoration","line-through");
            }else{
                a.style.setProperty("text-decoration","none");
            }
        }
    };
    
    
    var d=document.createElement("div");

    var image=document.createElement("img");

    image.setAttribute("src", "images/del.png");
    image.setAttribute("width", "30px");
    image.setAttribute("heigth", "30px");
    image.setAttribute("margin-left", "20px");

    d.className="image";

    image.onclick=function (e){
        var a=e.target.parentElement.parentElement; // li -> div -> img;
        a.remove();
    }

    d.appendChild(image);
    li.appendChild(d);
    li.appendChild(str);
    li.appendChild(box);

    
    ul.appendChild(li);


    return false;

};