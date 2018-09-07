import React from 'react';
import {createFetcher} from 'utils/future';
import delay from 'utils/delay';


const getPostComments = async (postId) => {
  const json = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then((res) => res.json())

  await delay(500); // fake delay
  return json;
};

const commentsFetcher = createFetcher(getPostComments);


const PostComments = ({postId}) => {
  const comments = commentsFetcher.read(postId);
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          <p>"{comment.body}"</p>
          <p>- {comment.name}</p>
        </li>
      ))}
    </ul>
  )
}

export default PostComments;
