import "./styles.css";

const MessageDynamic = ({
    isMessage,
    messageData,
    styleType
}) => {
    //example 1
    // let classnames = "dynamic-message";
    // if(isMessage) classnames+=" my-message"

    //example 2
    // const classnames = isMessage ?
    //     "dynamic-message my-message" :
    //     "dynamic-message";

    //example 3
    const styles = ["dynamic-message"];
    switch (styleType) {
        case "dark":
            styles.push("dark");
            break;
        case "light":
            styles.push("light");
            break;
        case "aqua":
            styles.push("aqua");
            break;
        default: ;
    }
    console.log("🚀 ~ styles", styles)


    return (
        <p
            // className={`dynamic-message ${isMessage ? "my-message" : ""}`}
            className={styles.join(" ")}
        >
            <img
                src={messageData.url}
                alt={messageData.alt}
                className="dynamic-message-avatar"
            />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Neque veritatis nemo eum voluptatem distinctio molestias
            rerum pariatur amet tempora officiis.
        </p>
    )
}

export default MessageDynamic;