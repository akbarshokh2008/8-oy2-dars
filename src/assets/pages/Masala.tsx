function Masala() {
  interface Person {
    name: string;
    age: number;
    isStudent: boolean;
  }
  interface Book {
    title: string;
    auther: string;
    publishedYear: number;
  }
  const Kitob: Book = {
    title: 'The Great Gatsby',
    auther: 'F. Scott Fitzgerald',
    publishedYear: 1925,
  };

  const student: Person = {
    name: 'John Doe',
    age: 25,
    isStudent: false,
  };

  // console.log(student, Kitob);

  const Sonlar: number[] = [1, 2, 3, 4, 5];
  function Yigindi(arr: number[]): number {
    let javob: number = 0;
    for (let i = 0; i < arr.length; i++) {
      javob += arr[i];
    }
    return javob;
  }
  // console.log(Yigindi(Sonlar));

  const Meva: string[] = ['apple', 'banana', 'cherry'];

  function Mevalar(mev: string[]): string[] {
    let javob: string[] = [];
    mev.map((value) => {
      const KattaHarf = value.slice(0, 1).toUpperCase() + value.slice(1);
      javob.push(KattaHarf);
    });

    return javob;
  }
  // console.log(Mevalar(Meva));
  // TUPLE
  type StudentRecord = [string, number, boolean];
  let Student: StudentRecord = ['Alica', 22, true];

  type Coordinate = [number, number];
  let Kordinata: Coordinate = { x: 10, y: 20 };
  // console.log(Kordinata);

  let Nimadur: any;
  Nimadur = 'Salom';
  Nimadur = 12;
  Nimadur = true;
  // console.log(Nimadur);

  let Car: any[] = [];
  Car.push('Damas');
  Car.push(2018);
  Car.push(false);
  // console.log(Car);

  // UNKNOWN
  let qiymat: unknown;

  qiymat = 99;
  qiymat = 'Hello';
  qiymat = true;
  qiymat = { name: 'Akbarjon', age: 17 };

  function isString(value: unknown): boolean {
    return typeof value === 'string';
  }

  let value: unknown = 'Hello, world!';

  if (isString(value)) {
    console.log(value.toUpperCase());
  } else {
    console.log('Bu string emas.');
  }

  // Never
  function throwError(): never {
    throw new Error('Xatolik yuz berdi!');
  }

  throwError();

  function cheksiz(): never {
    while (true) {}
  }

  cheksiz();

  // FUNCSIYA
  function hisoblash(a: number, b: number): number {
    return a + b;
  }

  console.log(hisoblash(5, 3));

  return <div>Masala</div>;
}

export default Masala;
