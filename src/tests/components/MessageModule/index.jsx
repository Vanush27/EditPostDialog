import styles from "./styles.module.css";
console.log("🚀 ~ styles", styles)

const MessageModule = ({
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

    return (
        <p
            // className={`dynamic-message ${isMessage ? "my-message" : ""}`}
            // className={styles.join(" ")}
            className={`${styles["dynamic-message"]} ${styles["aqua"]}`}
        >
            <img
                src={messageData.url}
                alt={messageData.alt}
                // className="dynamic-message-avatar"
                className={styles["dynamic-message-avatar"]}
            />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Neque veritatis nemo eum voluptatem distinctio molestias
            rerum pariatur amet tempora officiis.
        </p>
    )
}

export default MessageModule;