import { useState } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function Post({ post }: {post: any}) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="post">
      <div>
        <h3>{post.title}</h3>
        <hr />
        {expanded ? <p>{post.body}</p> : null}
      </div>
      <div>
        {expanded ? <button onClick={toggleExpanded}>Read Less<KeyboardArrowUpIcon /></button> : <button onClick={toggleExpanded}>Read More<KeyboardArrowRightIcon /></button>}
      </div>
    </div>
  );
}