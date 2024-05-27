import React from 'react';

interface LinkData {
  description: string;
  link: string;
  image: string;
  tags: string[];
}

export interface Data {
  [key: string]: {
    [key: string]: LinkData;
  };
}

const DisplayResult: React.FC<{ data: Data }> = ({ data }) => {
  return (
    <div>
      {Object.keys(data).map((primaryKey) => (
        <>
          <h2 className='content-section'>{primaryKey}</h2>
          
          <div key={primaryKey} className='content-primary'>
            {Object.keys(data[primaryKey]).map((key) => (
              
              <div key={key} className='content-secondary'>
                <h3>{key}</h3>
                
                <a href={data[primaryKey][key].link} target='_blank'>
                  <img className='content-image' src={data[primaryKey][key].image} />
                </a>

                <p>{data[primaryKey][key].description}</p>
                
                <div className='content-tags'>
                  {data[primaryKey][key].tags.map((tag) => (
                    <button className='tag-button' key={tag}>{tag}</button>
                  ))}
                </div>
              
              </div>
            
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default DisplayResult;