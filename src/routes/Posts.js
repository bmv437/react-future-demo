import React from 'react';
import {createFetcher} from 'utils/future';
import delay from 'utils/delay';
import {Link} from '@reach/router';

const getPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())

  await delay(200); // fake delay
  return res;
};

const postsFetcher = createFetcher(getPosts);

const Posts = () => {
  const posts = postsFetcher.read();
  return (
    <React.Fragment>
      {posts.slice(0, 5).map((post) => (
        <div key={post.id}>
          <h2><Link to={`${post.id}`}>{post.title}</Link></h2>
          <p>{post.body}</p>
        </div>
      ))}
    </React.Fragment>
  )
}

export default Posts;
