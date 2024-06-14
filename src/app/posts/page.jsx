import React from 'react';
import Link from 'next/link';
// import { redirect } from 'next/navigation';

const getPosts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`)
    const data = await res.json()
    // if(data){
    //     redirect(`/posts/${data[0].id}`)
    // }
    return data
}

const PostPage = async () => {
    const postData = await getPosts()
    return (
        <div className=''>
            <h6>All Posts</h6>
            <div className='grid grid-cols-4 gap-6'>
                {
                    postData?.slice(0,20).map(post => (
                        <div key={post.id} className='border-2 p-6'>
                            <h6>Title: {post.title}</h6>
                            <h6> Body:{post.body}</h6>
                            <button className='bg-blue-300 p-3'><Link href={`/posts/${post.id}`}>Details</Link></button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PostPage;