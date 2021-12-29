import { Component } from "react";
import { Button, Card } from "react-bootstrap";
import { teamMembersData } from "./mockData";
import "./styles.css";

const defaultAvatars = {
    male: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    female: "https://w1.pngwing.com/pngs/726/597/png-transparent-graphic-design-icon-customer-service-avatar-icon-design-call-centre-yellow-smile-forehead.png"
};

const CardItem = ({
    name,
    lastName,
    imageUrl,
    ...rest
}) => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {lastName}
                </Card.Text>
                <Button variant="primary">Button</Button>
            </Card.Body>
        </Card>
    )
}

const TeamMembersList = ({ teamMembers }) => {


    return (
        <div className="team-member-list">
            {teamMembers.map(member => {
                const imageUrl = member.imageUrl ||
                    (member.male && defaultAvatars.male) ||
                    (member.female && defaultAvatars.female)
                return <CardItem
                    name={member.name}
                    lastName={member.lastName}
                    imageUrl={imageUrl}
                    key={member._id}
                />
            })}
        </div>
    );
}


class Lists extends Component {
    state = {
        teamMembers: teamMembersData,
        isListOpen: true
    }
    render() {
        const { teamMembers, isListOpen } = this.state;
        // const teamMembersListJsx = teamMembers.map(member => {
        //     return <li className="team-member">
        //         {member.name}
        //     </li>
        // });

        return (
            <div className="lists-container">
                <h1>
                    Lists And Conditions
                </h1>
                <div>
                    <Button
                        variant="secondary"
                        onClick={() => this.setState({ isListOpen: !isListOpen })} >
                        {isListOpen ? "Close" : "Open"}
                    </Button>
                </div>
                {isListOpen ?
                    <TeamMembersList
                        teamMembers={teamMembers}
                    />
                    : ""
                }
            </div>
        )
    }
}

export default Lists;