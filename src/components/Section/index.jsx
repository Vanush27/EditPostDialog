import "./styles.css";
import Card from '../Reusable/Card';
import Button from "../Reusable/Button";

const Section = () => {

    return (
        <div className="container">
            <Card
                text="Գրանցվե՛ք մեր կայքում և անվճար ստացե՛ք առաքման հասցեներ"
                imageUrl="https://onex.am/img/svg/step1.svg"
            />

            <Card
                text="Օգտագործե՛ք Ձեզ տրամադրված առաքման հասցեները կայքերից գնումներ կատարելիս"
                imageUrl="https://onex.am/img/svg/step2.svg"
            />

            <div>
                <Button >
                    Submit
                </Button >
                <Button >
                    Save
                </Button >

                <Button >
                    Barev
                </Button >

            </div>
        </div>
    );
}



export default Section;