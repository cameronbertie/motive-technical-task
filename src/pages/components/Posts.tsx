import React, { useEffect } from 'react'
import Post from "./Post";
import posts from "../../data.json";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export default function Posts() {
    
  return (
    <section className="posts">
      <div className="posts__top">
        <div className="container">
         <h2>Latest posts</h2>
          <hr ></hr>
          <h3>We solve all kinds of business problems.</h3>
          <br></br>
          <h3>
            <b>Below are just a few we&apos;ve done recently...</b>
          </h3>
        </div>
      </div>
      <div className="posts__middle">
        <div className="container">
            <div className="post__container">
            {
          posts.slice(0, 6).map((post) => {
            return <Post key={post.id} post={post} />;
          })}
            </div>
        </div>
      </div>
      <div className="posts__bottom">
        <div className="pagination container">
            <div className="pagination__left">
                <div className="pagination__dot">
                    <div className="paginationNumber__active">1</div>
                </div>
                <div className="pagination__dot">
                <div className="paginationNumber">2</div>
                </div>
                <div className="pagination__dot">
                <div className="paginationNumber">3</div>
                </div>
                <div className="pagination__dot">
                <div className="pagination__icon"><KeyboardArrowRightIcon /></div>
                </div>
                <div className="pagination__dot">
                <div className="pagination__icon"><KeyboardDoubleArrowRightIcon /></div>
                </div>
            </div>
            <div className="pagination__right">
                Page 1 of 18
            </div>
        </div>
      </div>
    </section>
  );
}
