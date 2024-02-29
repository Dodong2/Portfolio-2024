import { useTypewriter, Cursor} from 'react-simple-typewriter'

const Typewriters = () => {
  const [text] = useTypewriter({
    words:['Programmer', 'Frontend Developer', 'Backend Developer'],
    loop: true,
    typesSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    <>
    <div className='mess'>
    <h1> I am a {text}
        <Cursor cursorStyle="|"/>
        </h1>
    </div>
    </>
  )
}

export default Typewriters