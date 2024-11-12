import { FC, useRef, useState, useEffect } from 'react';
import '../../App.css';

interface User {
  firstName: string;
  lastName: string;
  age: number;
}

const Home: FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const localUser = localStorage.getItem('users');
    if (localUser) {
      setUsers(JSON.parse(localUser));
    }
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const data: User = {
      firstName: firstNameRef.current?.value || '',
      lastName: lastNameRef.current?.value || '',
      age: ageRef.current?.value ? parseInt(ageRef.current.value) : 0,
    };

    const copied = [...users, data];
    setUsers(copied);

    localStorage.setItem('users', JSON.stringify(copied));

    console.log(data);
  }

  return (
    <div className='form'>
      <form
        className='create--form absolute top-5 left-0 right-0 max-w-md mx-auto p-6 bg-white rounded-lg shadow-md space-y-4'
        onSubmit={handleSubmit}
      >
        <h2 className='text-2xl font-semibold text-center'>TODO LIST</h2>

        <input
          type='text'
          placeholder='Enter firstname...'
          required
          className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          ref={firstNameRef}
        />

        <input
          type='text'
          placeholder='Enter lastname...'
          required
          className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          ref={lastNameRef}
        />

        <input
          type='number'
          placeholder='Enter age...'
          required
          className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          ref={ageRef}
        />

        <button
          type='submit'
          className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300'
        >
          Submit
        </button>
      </form>
      <div className='wrapper grid grid-cols-5 gap-8 mx-12'>
        <div className='mt-24 flex flex-col gap-3 w-[300px]'>
          {users.map((user, index) => (
            <div
              key={index}
              className='card bg-white p-4 border border-gray-300 rounded-lg shadow-lg'
            >
              <h3 className='text-xl font-semibold'>
                <b>Ism: </b>
                {user.firstName}
              </h3>
              <h3 className='text-xl font-semibold'>
                <b>Familya: </b>
                {user.lastName}
              </h3>
              <p className='text-xl font-semibold'>
                <b>Age: </b> {user.age}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
