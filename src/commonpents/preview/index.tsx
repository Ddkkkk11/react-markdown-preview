import ReactMarkdown from 'react-markdown'
import './style.less'
export default function Preview(props: any) {
    const { text } = props;

  return (
    <section className='preview-area'>
        {
            text
        }
      <ReactMarkdown children={text}/>
    </section>
  )
}
