//domain/.netlify/functions/hello
const items=[
    {id:1,name:'shabaz'},
    {id:2,name:'sk'}
]

exports.handler = async function(event,context){
    
    return{
        statusCode:200,
        body:'hello world',
}

}