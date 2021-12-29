import React, { memo, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import "./styles.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PostCardItem = memo(
    ({
        title,
        description,
        id
    }) => {
        console.log("PostCardItem")
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title> {id}</Card.Title>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">Button</Button>
                </Card.Body>
            </Card>
        )
    }
);

// class ApiCalls extends React.Component {
//     state = {
//         posts: []
//     }
//     apiUrl = process.env.REACT_APP_BACKEND_URL
//     showErrorMessage(message) {
//         toast.error(message, {
//             position: "top-right",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//         });
//     }
//     getRequest = (route) => {
//         const { apiUrl } = this;
//         return fetch(`${apiUrl}/${route}`)
//             .then(response => response.json())
//             .then(data => {
//                 if (!Object.keys(data ?? {}).length)
//                     throw new Error("We have an Error in the Request!Please try again");
//                 return data;
//             })
//             .catch(err => {
//                 this.showErrorMessage(err);
//             })
//     }
//     getPosts = () => {
//         this.getRequest("posts")
//             .then(posts => {
//                 this.setState({ posts })
//             });
//     }

//     handleGetFirstPost = () => {
//         this.getRequest("posts/1")
//             .then(post => {
//                 this.setState((prevState) => {
//                     return {
//                         posts: [...prevState.posts, post]
//                     }
//                 })
//             });
//     }

//     componentDidMount() {
//         this.getPosts();
//     }

//     render() {
//         const { posts } = this.state;
//         const { handleGetFirstPost } = this;
//         return (
//             <div>
//                 <h2>Api Calls (fetch )</h2>
//                 <Button
//                     onClick={handleGetFirstPost}
//                 >
//                     Get the first
//                 </Button>
//                 <div className="posts-container">
//                     {posts.map(post => {
//                         return <PostCardItem
//                             title={post.title}
//                             description={post.body}
//                             key={post.id}
//                             id={post.id}
//                         />
//                     })}
//                 </div>
//             </div>
//         )
//     }
// }
class Api {
    static apiUrl = process.env.REACT_APP_BACKEND_URL
    static showErrorMessage(message) {
        toast.error(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    static getRequest = (route) => {
        const { apiUrl, showErrorMessage } = Api;
        return fetch(`${apiUrl}/${route}`)
            .then(response => response.json())
            .then(data => {
                if (!Object.keys(data ?? {}).length)
                    throw new Error("We have an Error in the Request!Please try again");
                return data;
            })
            .catch(err => {
                showErrorMessage(err);
            })
    }
}

const ApiCalls = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        Api.getRequest("posts")
            .then(data => {
                setPosts(data);
            });

    }, []);

    const handleGetFirstPost = () => {
        Api.getRequest("posts/1")
            .then(data => {
                setPosts((prevState) => {
                    return [...prevState, data];
                });
            });
    }
    return (
        <div>
            <h2>Api Calls (fetch )</h2>
            <Button
                onClick={handleGetFirstPost}
            >
                Get the first
            </Button>
            <div className="posts-container">
                {posts.map(post => {
                    return <PostCardItem
                        title={post.title}
                        description={post.body}
                        key={post.id}
                        id={post.id}
                    />
                })}
            </div>
        </div>
    )
}
export default ApiCalls;