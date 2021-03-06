import TitledBox from "../TitledTextBox";
import RoundImage from '../RoundImage';
import SocialLinks from '../buttons/SocialLinks';
import PageTop from '../PageTop';
import WaveTransition from '../WaveTransition';

export default FrontPage;

//pagesvar1
function FrontPage(){
    return (
        <div className="w-full h-screen m-0 bg-gradient-to-b from-purple-100 to-blue"> 
            <PageTop/>
            <div className='flex justify-evenly mx-10 mt-16'>
                <div className="flex flex-col items-center md:w-2/5 h-fit">
                    <TitledBox title="Welcome to my portfolio!" text="Hello, I am Markus Johansen. I am a student of information technologies at the Norwegian University of  Science and Technology (NTNU), Based In Trondheim, Norway. I made this website because i wanted a 'web based' portfolio and an opportunity to accummulate skills within industry-relevant frameworks (React and Tailwind). The portfolio will contain relevant information about me, my education, skills, and work experience."/>
                    <SocialLinks id="links"/>
                </div>
                <div className="w-2/5 h-fit lg:block hidden ">
                    <RoundImage pic="1"/>
                </div>
            </div>
            <WaveTransition color="#FFFCF3"/>
            {
                //!id's here
            }
        </div>
    )
}