import { Buttoncomponent } from "../../../components/pageComponents/button/ButtonComponent";
import { InputField } from "../../../components/pageComponents/inputField/InputField";
import { HopponParagraph } from 'hoppon-react-lib';

export const EventList = () => {
    return <section>
        <InputField label="Event name" height="35px" width="500px" placeholder="Enter the event name"/>
        <Buttoncomponent label="Create event"/>

        <HopponParagraph />
    </section>
};