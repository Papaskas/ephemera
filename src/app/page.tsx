// import prisma from '@lib/prisma';

export default async function Home() {
  // const users = await prisma.user.findMany();

  const MyComponent = () => {
      if (process.env.NODE_ENV === 'development') {
          return <div>Это режим разработки</div>;
      } else {
          return <div>Это режим продакшн</div>;
      }
  };

  const myPromise = new Promise((resolve, reject) => {
    const success = true; // Пример условия
    if (success) {
      resolve("Успех!");
    } else {
      reject("Ошибка!");
    }
  });

  const promise1 = Promise.resolve(3);
  const promise2 = Promise.reject("Ошибка!");
  const promise3 = new Promise((resolve) => {
    setTimeout(resolve, 100, 'foo');
  });

  Promise.allSettled([promise1, promise2, promise3]).then(results => {
    console.log(results);
    // [
    //   { status: "fulfilled", value: 3 },
    //   { status: "rejected", reason: "Ошибка!" },
    //   { status: "fulfilled", value: "foo" }
    // ]
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16">
      <h1 className="text-4xl font-bold mb-8 font-[family-name:var(--font-geist-sans)] text-[#333333]">
          <MyComponent/>
      </h1>
      <ol className="list-decimal list-inside font-[family-name:var(--font-geist-sans)]">
        {/*{users.map((user) => (*/}
        {/*  <li key={user.id} className="mb-2">*/}
        {/*    {user.name}*/}
        {/*  </li>*/}
        {/*))}*/}
      </ol>
    </div>
  );
}
