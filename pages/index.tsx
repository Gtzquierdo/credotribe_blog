import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

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
        {posts.map((post, index) => (
          <div>
            {post.title}
            {post.excerpt}
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Home
