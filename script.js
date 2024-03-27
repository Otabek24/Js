for (let i = 1; i <= 10; i++) {
    let name = prompt("Ismingizni kriting")

    let age = +prompt("Yoshingizni kritinig")

    console.log(i + '-foydalanuvchi');

    console.log('Ismi: ' + name);

    console.log("Yoshi: " + age);
}

while (isNaN(age) || age == 0) {
    age = +prompt("Xatolik. Yoshingizni kiriting")
}