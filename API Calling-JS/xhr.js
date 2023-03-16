//Call API from Js **XMLhttp Request**

const makeRequest = (Method,url,data) =>{

    const xhr = new XMLHttpRequest();
    xhr.open(Method, url);

    xhr.setRequestHeader('Content-Type','application/json')

    xhr.onload = ()=>{
        let data = xhr.response;
        console.log(JSON.parse(data))
    }
    xhr.onerror =() =>{
        console.log('Error is here!')
    }
    xhr.send(JSON.stringify(data));
}

const getData = ()=>{
    makeRequest('GET','https://jsonplaceholder.typicode.com/posts')
    
}  
const sendData = ()=>{
    makeRequest('POST','https://jsonplaceholder.typicode.com/posts',{
        title: 'foo',
        body: 'bar',
        userId: 1,
    })
    
}  
const updateData = ()=>{
    makeRequest('PUT','https://jsonplaceholder.typicode.com/posts/1',{
        title: 'fooMa',
        body: 'barMa',
        userId: 1,
    })
    
} 
const updateSingleData = ()=>{
    makeRequest('PATCH','https://jsonplaceholder.typicode.com/posts/1',{
        title: 'This is chnaged',
      
    })
    
} 
const deleteData = ()=>{
    makeRequest('DELETE','https://jsonplaceholder.typicode.com/posts/1',{
        title: 'fooMa',
        body: 'barMa',
        userId: 1,
    })
    
} 
getData();
sendData();
updateData();
updateSingleData();
deleteData();