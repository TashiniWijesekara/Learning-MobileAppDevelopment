import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function api(){
    interface Post{
        id: number;
        title: string;
    }
    const[posts,setPosts]= useState<Post[]>([]);
         useEffect(()=> {
            const fetchPosts=async ()=>{
                const response= await fetch('https://jsonplaceholder.typicode.com/posts');
                const posts=(await response.json()) as Post[]
                setPosts(posts);   
            }
            fetchPosts();
         },[])

         return(
            <View>
                <Text>api</Text>
                {posts.map(post=>(<Text key={post.id}>{post.title}</Text>))}
            </View>
         )
}