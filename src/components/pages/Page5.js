/*import '../css/LastPage.css';*/
import RoundImage from '../RoundImage';
import TitledBox from "../TitledTextBox";
import MailComponent from '../Mail';

export default LastPage;

function LastPage(){
    return (
        <div className="relative w-full h-fit m-0 bg-gradient-to-b from-purple-100 to-blue overflow-hidden pb-32">
            <div className="flex justify-center mx-10 mt-16">
                <div className="w-2/5 h-fit lg:block hidden ">
                    <RoundImage/>
                </div>
                <div className="flex flex-col lg:w-2/5 h-fit md:w-4/6">
                    <TitledBox title="Still interested? Contact me!" text="I would very much appereciate it if you sent me a mail:)"/>
                    <MailComponent/>
                </div>
            </div>
        </div>
    )
}   
