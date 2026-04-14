
function StartingWithA() {
  
    const users = ["Tithi", "Rahul", "Amit", "Sneha"]


    const filterUser = users.filter((obj) => {
        return obj[0][0] === "A";
    })

    return (
        <div className="flex justify-center mt-40">
             {filterUser.map((obj) => {
                return (
                    <div className="text-2xl text-blue-400">
                        Name Start A : {obj}
                        </div>
                )
             })}
        </div>
    )
}

export default StartingWithA