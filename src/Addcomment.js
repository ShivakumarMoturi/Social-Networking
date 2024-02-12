import React, { useState } from 'react';

const ContentDisplay = () => {
  const [inputContent, setInputContent] = useState('');
  const [displayedContent, setDisplayedContent] = useState('');

  // const handleInputChange = (event) => {
  //   setInputContent(event.target.value);
  // };
  // const handleDisplayContent = () => {
  //   setDisplayedContent(inputContent);
  // };
  
  return (
    <div>
      <label>
        Enter Content:
        <input type="text" value={inputContent} onChange={(e)=>setInputContent(e.target.value)} />
      </label>
      <button onClick={()=>setDisplayedContent(inputContent)}>Display Content</button>
        <p>{displayedContent}</p>
    </div>
  );
};

export default ContentDisplay;


// let x =5
// console.log(x++ + ++x);
// console.log(typeof(NaN));
// console.log(instanceof String);
// console.log("1" - - "1");
//2
// console.log( 22 + "1" - 2);
//219
//true // false
// 12
// 11
// 14