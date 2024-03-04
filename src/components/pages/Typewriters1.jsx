import { useTypewriter, Cursor } from "react-simple-typewriter";

const Typewriters1 = () => {
  const [text1] = useTypewriter({
    words: [
      `Greetings,

        My name is Carl Stephen Arocha. I am currently in the second year of my Bachelor of Science in Information Technology program. As a web developer, I possess a beginner-level skill set, which I have detailed below. As I am keen on expanding my portfolio, I am open to collaborating on projects that align with my skill set. Please find my skills outlined below.
        
        Thank you for your consideration.`,
    ],

    typeSpeed: 50,
  });
  return (
    <div>
      <p>
        {text1} <Cursor cursorStyle="|" />
      </p>
    </div>
  );
};

export default Typewriters1;
