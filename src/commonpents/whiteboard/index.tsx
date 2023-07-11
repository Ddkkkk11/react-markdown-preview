import './style.less'
import { useState } from 'react';
import Preview from '../preview';
export default function WhiteBoard() {
  const [text, setText] = useState('');
  return (
      <section className='white-board-area'>
        <textarea onChange={(e) => {
          setText(e.target.value);
          console.log(e.target.value)
        }} value={text}
        >
          { text }
        </textarea>
        <Preview text={text}/>
      </section>
  )
}
