

function ChildFilter({ onInputChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search items..."
        onChange={(e) => onInputChange(e.target.value)} 
        className="border-2 border-amber-400 p-2 rounded-lg outline-none"
      />
    </div>
  );
}

export default ChildFilter;