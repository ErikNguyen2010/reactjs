import React, { memo } from 'react'


function Comment(props) {
    console.log("comment");
  return (
    <div>
        {props.renderNotify()}
        <textarea></textarea> <br/>
        <button>gửi</button>
    </div>
  )
}

export default memo(Comment)