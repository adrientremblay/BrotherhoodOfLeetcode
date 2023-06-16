import Image from 'next/image'

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

export default function Home() {
  return (
    <main>
      <MyButton />
    </main>
  )
}
