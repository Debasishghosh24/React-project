
function ChildInputProduct({onInputChange}) {

    return (
        <div>
            <input className="text-xl border-2 border-blue-600 rounded-2xl text-center bg-blue-400"
            type="text"
            placeholder="Search Here..."
            onChange={(e) => onInputChange(e.target.value)}

            />
        </div>
    )
}

export default ChildInputProduct