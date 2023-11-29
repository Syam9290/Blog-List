// Write your JS code here

import './index.css'

import BlogItem from '../BlogItem/index'

const BlogsList = props => {
  const {bloglist} = props

  return (
    <ul className="blogListBg">
      {bloglist.map(eachItem => (
        <BlogItem items={eachItem} key={eachItem.id} />
      ))}
    </ul>
  )
}

export default BlogsList
