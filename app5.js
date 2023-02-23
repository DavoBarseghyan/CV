let z = document.getElementById("test")
let i = document.getElementById("test2")
let btn = document.getElementById('btn')
let y = Math.floor(Math.random()*100)
let point = 10
btn2.style.display = "none"
console.log(y)


function f() {
    if (point > 0) {
        let x = +document.getElementById("txt").value;
        if (x < y) {
            test.innerHTML = "Qich e";
            test2.innerHTML = test2.innerHTML + ' ' + x;
            point = point - 1;
            test.style.backgroundColor = "red"
        }   if (x > y) {
            test.innerHTML = "Shat e";
            test2.innerHTML = test2.innerHTML + ' ' + x;
            point = point - 1;
            test.style.backgroundColor = "red"
        }   if (x == y) {
            test.innerHTML = "WINER";
            test2.innerHTML = test2.innerHTML + ' ' + x;
            btn2.style.display = "inline-block"
            test.style.backgroundColor = "green"
            point = point - 1;
        } if (point == 0 && x != y) {
                btn2.style.display = "inline-block"
                test.style.backgroundColor = "red" 
                test.innerHTML = "GAME OVER";
            }if (isNaN(x)) {
                test.innerHTML = "grel miayn tiv";
            }
            
        }
            btn2.addEventListener('click' , function () {
            window.location.reload()
        });
       
    }
    
    txt.addEventListener("keypress", function (event) {
      if (event.key == "Enter") {
             f()
      }
      }
    
    );
btn.onclick = function(){
    f()
}