function equal() {
    let input = document.getElementById('input').value;
    let output = eval(input);
    document.getElementById('output').value = output;

}
function dis(val) {
    document.getElementById('input').value += val;
    document.getElementById('input').focus();
}


function numbers(evt) {
    var ch = evt.key;
}

function none() {
    document.getElementById('input').value = '';
    document.getElementById('output').value = '';
}

    if ((/[a-z]/.test(ch))) {
        evt.preventDefault();
    }
