var uList = document.getElementById("lista");
uList.addEventListener("click",function(ev){
  var element = ev.target;
  if(element.type === "checkbox"){
      element.nextSibling.classList.toggle("done");
  } else {
      return;
  }
});

let checks = document.getElementsByName("todo");
let input = document.getElementById("newitem");
input.addEventListener("keyup", function(event){
    if (event.keyCode === 13){
      if(input.value == ""){
        alert("ERROR no has agregado una tarea");
      }else{
        var nodeli = document.createElement("LI");
        var span = document.createElement("span");
        var newCheck = document.createElement("input");
        newCheck.type = "checkbox";
        newCheck.name = "todo";
        newCheck.value = checks.length;

        var textNode = document.createTextNode(input.value);
        nodeli.appendChild(newCheck);
        nodeli.appendChild(span);
        span.appendChild(textNode);
        
        document.getElementById("lista").appendChild(nodeli);
        input.value = "";
      }
    }
});