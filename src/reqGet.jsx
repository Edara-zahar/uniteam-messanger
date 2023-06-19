import axios from "axios"


async function ReqGet(setData) {

    await axios.get("http://messenger.uni-team-inc.online/message?offset=0&limit=0")
    .then(data => {
        data.data.sort((a, b) => a.created_at - b.created_at);
      setData(data.data)
      console.log(data.data);
    })
}

export default ReqGet;
