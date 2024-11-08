// Content.js
import React from 'react';
import Image from 'next/image';

const Content = () => {
  return (
    <main className="context-section">
      <div className="grid-section">
        {/* Grid 1 */}
        <div className="grid1">
          <h1>Hello, I am</h1>
          <h1>Nehal Tariq</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum animi earum repellendus ex atque. Quaerat delectus quod vero hic accusantium repellendus fugiat doloribus dolorum error modi fugit et, obcaecati asperiores.</p>
          <button className='btn'>Say Hello!</button>
        </div>

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
      </div>
    </main>
  );
};

export default Content;
