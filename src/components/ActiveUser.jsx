
function ActiveUser() {

    const users = [
        {name: "Tithi", active: true},
        {name: "Rahul", active: false},
        {name: "Amit", active: true}
    ];

    const filteredUser = users.filter(obj  => obj.active === true)


    return(
        <div className="flex flex-col items-center mt-30 gap-4">
             {filteredUser.map(obj => 
                <div className="text-2xl text-blue-400">
                    Name:{obj.name}
                    </div>
             )}
        </div>
    )
}

export default ActiveUser