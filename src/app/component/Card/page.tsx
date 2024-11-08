import React from 'react'
import Image from 'next/image'
const Card = () => {
  return (
    <div className='center'>
    <div className='card-section'>
 <main className="context-section">
      <div className="grid-section">
         {/* Grid 2 */}
         <div className="grid2">
          <Image 
            src="/pic.png" 
            alt="pic" 
            layout="responsive" 
            width={800} 
            height={900} 
            className="responsive-image"
          />
        </div>
        {/* Grid 1 */}
        <div className="grid1">
          <h1>I am professional User Experience Designer</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum animi earum repellendus ex atque. Quaerat delectus quod vero hic accusantium repellendus fugiat doloribus dolorum error modi fugit et, obcaecati asperiores.</p>
        <div className='flex'>
        <button className='btn'>My Project</button>
        <button className='btn'>Download Cv</button>
        </div>
        </div>

       
      </div>
    </main>
    </div>
    </div>
  )
}

export default Card