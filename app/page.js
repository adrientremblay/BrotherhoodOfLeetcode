import Image from 'next/image'
import Avatar from './avatar';

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

export default function Home() {
  return (
    <main>
      <h1>Welcome to my app</h1>
      <MyButton />
      <Avatar />
    </main>
  )
}
