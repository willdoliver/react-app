import { ReactNode } from "react";

interface Props {
    name: string;
    lastName: string;
    age: ReactNode;
}

const Person = ( {name, lastName, age}: Props ) => {
  return (
    <div>
        <h1>Name: {name}</h1>
        <h2>Last Name: {lastName}</h2>
        <h2>Age: {age}</h2>
    </div>
  )
}

export default Person