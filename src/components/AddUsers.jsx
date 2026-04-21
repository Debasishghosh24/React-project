import { useState } from "react";

function AddUsers({ isOpen, onClose, onAddUser }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (name && age && address) {
      onAddUser({ name, age, address });
      setName("");
      setAge("");
      setAddress("");
      onClose();
    } else {
      alert("please fill all fields!");
    }
  };

  return (
    
      <div className="bg-white p-8 rounded-2xl w-auto xl:w-96  ">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New User</h2>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="p-3 border rounded-xl"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Age"
            className="p-3 border rounded-xl "
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            type="text"
            placeholder="Address"
            className="p-3 border rounded-xl "
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={handleSubmit}
            className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 cursor-pointer"
          >
            Submit
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-300 cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>
   
  );
}

export default AddUsers;
