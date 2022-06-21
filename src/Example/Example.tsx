import React from 'react';
import Button from '../components/button';
import Input from '../components/input';

// A list of TypeScript types you will likely use in a React + TypeScript

interface Props {
  children: React.ReactNode;
  // message: string;
  // content: string | number;
  // count: number;
  // disabled: boolean;
  // name: string[];
  // status: 'online' | 'offline';
  // obj: object;
  // obj1: {};
  // obj2: {
  //   id: number;
  //   content: string;
  // };
  // onClick: Function;
  // onSomething: () => void;
  // onChange: (id: number) => void;
  // // event
  // onChange2: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // onClick2(event: React.MouseEvent<HTMLButtonElement>): void;
  // optional?: OptionalType;
  // // form event
  // onChange3?: React.FormEventHandler<HTMLInputElement>;
}

interface User {
  email?: string;
  name?: string;
}
const Example = ({ children }: Props) => {
  // const [count, setCount] = React.useState(0);

  // const handler = () => {
  //   setCount((count) => count + 1);
  // };
  const [user, setUser] = React.useState<User>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="px-4 py-5">
        <h1 className="text-2xl text-center text-blue-500">{children}</h1>
      </div>
      <form
        className="w-full flex items-center flex-col gap-y-5 justify-center mt-20"
        onSubmit={(e) => handleSubmit(e)}
      >
        <Input
          name="email"
          type="email"
          placeholder="Enter your email address"
          onChange={(e) => {
            setUser({
              ...user,
              email: e.currentTarget.value,
            });
          }}
        />
        <Input
          name="name"
          type="text"
          placeholder="Enter your email address"
          onChange={(e) => {
            setUser({
              ...user,
              name: e.currentTarget.value,
            });
          }}
        />
        <Button onClick={() => console.log(user)} type="submit">
          Submit
        </Button>
      </form>

      <div>
        {user && (
          <div className="flex flex-col gap-y-3">
            <span>Email: {user.email}</span>
            <span>Name: {user.name}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Example;
