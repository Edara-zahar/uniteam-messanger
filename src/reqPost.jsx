import axios from "axios"

async function ReqPost(value) {

    await axios.post("http://messenger.uni-team-inc.online/message", 
    JSON.stringify({
      content:value,
      author:value,
    })
  )
}

export default ReqPost;
