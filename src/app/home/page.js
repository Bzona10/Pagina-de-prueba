"use client"
import Post from '@/components/Post';
export default function HomePage() {
return (
<>
<h1>Bienvenido al Sistema</h1>
<p>Esta es la página principal de nuestra aplicación</p>
<Post 
title={"BRC"} 
content={"viaje innolvidble"}> 
</Post>
</>
);
}