// 適当な関数
function hello(name: string): string {
  return `Hello, ${name}!`;
}

console.log(hello(process.env.FOO));
