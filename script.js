let btn = document.getElementById("btn");
let output = document.getElementById("output");

btn.addEventListener("click", () => {
    let num = Number(document.getElementById("ip").value);

    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num);
        }, 2000);
    })
        .then((res) => {
            output.textContent = `Result: ${res}`;
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    let doubled = res * 2;
                    output.textContent = `Result: ${doubled}`;
                    resolve(doubled);
                }, 1000);
            });
        })
        .then((res) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    let sub = res - 3;
                    output.textContent =`Result: ${sub}`;
                    resolve(sub);
                }, 1000);
            });
        })
        .then((res) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    let div = res / 2;
                    output.textContent = `Result: ${div}`;
                    resolve(div);
                }, 1000);
            });
        })
        .then((res) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    let add = res + 10
                   output.textContent = `Result: ${add}`;
                }, 1000);
            });
        });

});
