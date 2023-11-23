import { env } from './env';

// 適当な関数
function hello(name: string, st: string, srs: string): string {
  const foo = st ? 1 : srs ? 2 : 3;
  console.log(foo);

  return `Hello, ${name}!`;
}

console.log(hello(env.FOO));
