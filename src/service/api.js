import axios from "axios";
export const postData=async(data,select)=>{
    return await axios.post('https://65557ea384b36e3a431dce2b.mockapi.io/project_github',{
        title: data.title,
        description:data.description,
        language:select,
        date:data.date,
        link:data.link,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }}
    )
}

export const getApii=async()=>{
    return await axios.get('https://65557ea384b36e3a431dce2b.mockapi.io/project_github')
    .then(a=>a.data)
}
export const deleteData=async(id)=>{
  await axios.delete(`https://65557ea384b36e3a431dce2b.mockapi.io/project_github/`+id)
  .then(response => {
    console.log(`Deleted post with ID `);
  })
  .catch(error => {
    console.error(error);
  });  
  
}