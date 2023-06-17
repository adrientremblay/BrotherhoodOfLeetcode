import Image from 'next/image'
import Avatar from './avatar';
import RankTable from './rank_table';

export default function Home() {
  return (
    <main>
      <h1>The Brotherhood Of Leetcode</h1>
      <RankTable />
      <Avatar />
    </main>
  )
}
