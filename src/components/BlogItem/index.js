// Write your JS code here

import './index.css'

const BlogItem = props => {
  const {items} = props
  const {title, description, publishedDate} = items
  return (
    <li className="listItem">
      <div className="titleBg">
        <h3>{title}</h3>
        <p>{publishedDate}</p>
      </div>
      <p>{description}</p>
    </li>
  )
}

export default BlogItem
