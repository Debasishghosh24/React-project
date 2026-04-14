
function OrderedList () {
     
    const users = ["Tithi", "Rahul", "Amit"];



    return (
        <div className="flex flex-col items-center mt-50">
            <ol className="list-decimal list-inside">
                {users.map((obj, index) => {
                    return (
                        <li 
                        className="text-2xl text-blue-500"
                        key={index}>
                            {obj}
                        </li>
                    )
                })}
            </ol>
            </div>
            
        
    )
}

export default OrderedList