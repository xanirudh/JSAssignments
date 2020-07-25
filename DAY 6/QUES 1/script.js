let a = ['red', 'orange', 'blue', 'green', 'grey', 'black']
let i = 0
setInterval(function () {
    if (i == a.length) { i = 0 }
    document.body.style.backgroundColor = a[i]
    i++
}, 5000)