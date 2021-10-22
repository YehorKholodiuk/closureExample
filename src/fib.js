const fib = [1,2,3,5,8,13]
for (let i = 0; i < fib.length;i++) {
    setTimeout(function () {
        console.log(`fib[${i}]=${fib[i]}`)
    }, 1500)
}
