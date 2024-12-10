// SERVER COMPONENENTS
import Button from '../../components/button'
interface PostProps {
    id: number,
    title: string,
    body: string,
    userId:number
}

interface ResponseProps{
    posts:PostProps[]
}

export default async function PostsPage() {

    const response = await fetch(`http://dummyjson.com/posts`);
    const data: ResponseProps = await response.json()
    
    async function handleFetchPosts() {
        'use server'
            const response = await fetch(`http://dummyjson.com/posts`);
            const data: ResponseProps = await response.json()
            console.log(data.posts)
    }

    async function handleSearchUsers(formData:FormData) {
        'use server'
        const userID = formData.get('userId')

        const response = await fetch(`https://dummyjson.com/posts/user/${userID}`);
        const data: ResponseProps = await response.json()
    
        console.log(data)
    }

    return (
        <div>
            <h1 className="text-center mt-5 mb-2 font-bold text-3xl">Todos os posts</h1>
            <button onClick={handleFetchPosts}>Buscar Posts</button>

            <form className='flex gap-2 my-4' action={handleSearchUsers}>
                <input name='userId' type="text" placeholder='ID do usuário' className='border border-gray-200 p-2' />
                <button type='submit' className='bg-blue-500 text-white p-2'>Buscar usuário</button>
            </form>

            <div className="flex flex-col gap-4 mx-2">
                {data.posts.map(post => (
                <div key={post.id} className="bg-gray-200 p-4 rounded-md">
                    <h1 className="font-bold">{post.title}</h1>
                    <p>{ post.body}</p>
                </div>
            ) )}</div>
        </div>
    )
}

// SERVER COMPONENT > CLIENT COMPONENT