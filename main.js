const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("サイコロの目を入力してください。（数字は1-6にして下さい。）\n", answer => {
    console.log(`サイコロの裏の目は${7 - Number(answer)}です。`);

    rl.close();
});