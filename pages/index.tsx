import type { NextPage } from 'next'
import Head from 'next/head'
import { PostCard, PostWidget, Categories } from '../components'

const posts = [
  { title: 'Code Journey', excerpt: 'A blog about code' },
  { title: 'Welcome to our world', excerpt: 'A blog about life' },
];

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-10 mb-8 bg-gray-300">
      <Head>
        <title>CredoTribe Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className='lg:col-span-8 col-span-1'>
        {posts.map((post, index) => (
          <PostCard key={post.title} post={post} />
        ))}
        </div>
        <div className='lg:col-span-4 col-span 1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>   
    </div>
  )
}

export default Home
