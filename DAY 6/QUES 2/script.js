function fun() {

    const val = document.getElementById("no").value
    const tab = document.querySelector('#tab');
    console.log(tab)
    tab.innerHTML = ``
    const h = document.querySelector("#h3")
    h.innerHTML = `<br>Multiplication table of ${val}<br>`
    for (i = 1; i <= 10; i++) {
        tab.innerHTML += `<td><tr>${val + " X " + i + " = "}</tr><tr>${i * val}</tr></td>`

    }
    document.querySelector('#tab').style.border = "solid "
}