export function CreateTodo(){
    return <div>
        
        <input style={{
            height: "30px",
            margin: "10px",
            padding: "10px",
            border: "1px solid black",
            borderRadius: "5px"
        }} type="text" placeholder="title"></input> <br></br>

        <input
        style={{
            height: "30px",
            margin: "10px",
            padding: "10px",
            border: "1px solid black",
            borderRadius: "5px"

        }} type="text" placeholder="description"></input> <br></br>

        <button style={{
            height: "30px",
            margin: "10px",
            padding: "10px",
            border: "1px solid black",
            borderRadius: "5px"

        }}>Add Todo</button>
    </div>
}