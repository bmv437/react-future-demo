import React from 'react';
import {createFetcher} from 'utils/future';
import delay from 'utils/delay';

const PostComments = React.lazy(() => import(/* webpackChunkName: 'post-comments' */ 'components/PostComments'));

const getPost = async (postId) => {
  const json = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then((res) => res.json())

  await delay(200); // fake delay
  return json;
}

const postFetcher = createFetcher(getPost);

const Post = ({postId}) => {
  const post = postFetcher.read(postId);
  return (
    <React.Fragment>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <PostComments postId={postId} />
    </React.Fragment>
  )
}

export default Post;
