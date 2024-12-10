'use client'

import { useEffect, useState } from "react"

interface PostProps {
    id: number,
    title: string,
    body: string,
    userId:number
}

export default function PageTeste() {

    const [posts, setPosts] = useState([])
    
    useEffect(() => {

        async function loadPosts() {
            fetch(`http://dummyjson.com/posts`)
            .then(res => res.json())
            .then(data => setPosts(data.posts))
        }
        loadPosts()
    },[])

    return (
        <div>
            <h1 className="text-center mt-5 mb-2 font-bold text-3xl">Page Client</h1>
                <div className="flex flex-col gap-4 mx-2">
                {posts.map((post:PostProps) => (
                <div key={post.id} className="bg-gray-200 p-4 rounded-md">
                    <h1 className="font-bold">{post.title}</h1>
                    <p>{ post.body}</p>
                </div>
            ) )}</div>
        </div>
    )
}