var counter = 0;
function hello(msg)
    var ele = document.getElementById('main');
    ele.innerHTML = '<h3>'+msg+'</h3>';
}

function change(c) {
    var ele = document.getElementById('main');
    ele.style.color = c;
}
function demo() {
    if(counter > 6) {
        counter = 0;
    }
    console.log('counter = '+counter);
    var colors = ["red", "green", "violet", "blue", "orange", "brown"];
    var ele = document.getElementById('main');
    ele.style.color = colors[counter];
    counter++;
}
