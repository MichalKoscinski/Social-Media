import React, {useEffect, useState}  from 'react'

import {
  apiPostAction,
  apiPostCreate, 
  apiPostList} from './lookup'

export function PostsComponent(props) {
    const textAreaRef = React.createRef()
    const [newPosts, setNewPosts] = useState([])
    
    const handleBackendUpdate = (response, status) =>{
      // backend api response handler
      let tempNewPosts = [...newPosts]
      if (status === 201){
        tempNewPosts.unshift(response)
        setNewPosts(tempNewPosts)
      } else {
        console.log(response)
        alert("An error occured please try again")
      }
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      const newVal = textAreaRef.current.value
      // backend api request
      apiPostCreate(newVal, handleBackendUpdate)
      textAreaRef.current.value = ''
    }
    return <div className={props.className}>
            <div className='col-12 mb-3'>
              <form onSubmit={handleSubmit}>
                <textarea ref={textAreaRef} required={true} className='form-control' name='post'>

                </textarea>
                <button type='submit' className='btn btn-primary my-3'>Post</button>
            </form>
            </div>
        <PostsList newPosts={newPosts} />
    </div>
}

export function PostsList(props) {
    const [postsInit, setPostsInit] = useState([])
    const [posts, setPosts] = useState([])
    const [postsDidSet, setPostsDidSet] = useState(false)
    useEffect(()=>{
      const final = [...props.newPosts].concat(postsInit)
      if (final.length !== posts.length) {
        setPosts(final)
      }
    }, [props.newPosts, posts, postsInit])

    useEffect(() => {
      if (postsDidSet === false){
        const handlePostListLookup = (response, status) => {
          if (status === 200){
            setPostsInit(response)
            setPostsDidSet(true)
          } else {
            alert("There was an error")
          }
        }
        apiPostList(handlePostListLookup)
      }
    }, [postsInit, postsDidSet, setPostsDidSet])
    return posts.map((item, index)=>{
      return <Post post={item} className='my-5 py-5 border bg-white text-dark' key={`${index}-{item.id}`} />
    })
  }


export function ActionBtn(props) {
    const {post, action, didPerformAction} = props
    const likes = post.likes ? post.likes : 0
    const className = props.className ? props.className : 'btn btn-primary btn-sm'
    const actionDisplay = action.display ? action.display : 'Action'
    
    const handleActionBackendEvent = (response, status) =>{
      console.log(response, status)
      if ((status === 200 || status === 201) && didPerformAction){
        didPerformAction(response, status)
      }
    }
    const handleClick = (event) => {
      event.preventDefault()
      apiPostAction(post.id, action.type, handleActionBackendEvent)
        
    }
    const display = action.type === 'like' ? `${likes} ${actionDisplay}` : actionDisplay
    return <button className={className} onClick={handleClick}>{display}</button>
  }
  
export function ParentPost(props){
  const {post} = props
  return post.parent ? <div className='row'>
  <div className='col-11 mx-auto p-3 border rounded'>
    <p className='mb-0 text-muted small'>Repost</p>
    <Post className={' '} post={post.parent} />
  </div>
  </div> : null
}
export function Post(props) {
    const {post} = props
    const [actionPost, setActionPost] = useState(props.post ? props.post : null)
    const className = props.className ? props.className : 'col-10 mx-auto col-md-6'
    
    const handlePerformAction = (newActionPost, status) => {
      if (status === 200){
        setActionPost(newActionPost)
      } else if (status === 201) {
        // let the post list know.
      }
      
    }
    
    return <div className={className}>
            <div>
              <p>{post.id} - {post.content}</p>
              <ParentPost post={post} />
            </div>
        {actionPost && <div className='btn btn-group'>
                <ActionBtn post={actionPost} didPerformAction={handlePerformAction} action={{type: "like", display:"Likes"}}/>
                <ActionBtn post={actionPost} didPerformAction={handlePerformAction} action={{type: "unlike", display:"Unlike"}}/>
                <ActionBtn post={actionPost} didPerformAction={handlePerformAction} action={{type: "repost", display:"Repost"}}/>
              </div>
      }
    </div>
  }