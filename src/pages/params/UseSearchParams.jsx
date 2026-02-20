import React from 'react'
import { useSearchParams } from 'react-router'

export default function UseSearchParams() {

  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.get('a'));

  return (
    <div className='text-white'>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit qui dolorem ducimus saepe assumenda tenetur pariatur, distinctio non sint repellendus facilis ea dignissimos voluptatibus suscipit tempore sed reiciendis placeat nostrum.</p>



    </div>
  )
}
