import ReactMarkdown from 'react-markdown'
import './style.less'
export default function Preview(props: any) {
    const { text } = props;
    console.log(text, 'text');

  return (
    <section className='preview-area'>
        <div className='markdown-preview'>
            <ReactMarkdown children={text}/>
        </div>
    </section>
  )
}
