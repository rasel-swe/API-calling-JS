
// fetch('https://jsonplaceholder.typicode.com/posts/1',{
//     method: 'PATCH',
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     body: JSON.stringify({
//         id: 1,
//         title: 'foo',
//     body: 'bar',
//     userId: 1,
//     })
// })

// .then((res) => {
//     if(!res.ok){
//         const Message = `Error: ${res.status}`
//         throw new Error(Message)
//     }
//     return res.json();
// })
// .then((res)=> console.log(res))
// .catch((err) => console.log(err))

const MakeRequest = async (url,confiq) =>{
   const Res= await fetch(url,confiq);
   if (!Res.ok){
    const Message = `Error: ${Res.status}`;
    throw new Error(Message)
   
    }
    const data = await Res.json();
   return data;
};

const getData =() =>{
    MakeRequest('https://jsonplaceholder.typicode.com/posts')
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
const sendData =() =>{
    MakeRequest('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

sendData();