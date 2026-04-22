import { useState, useEffect } from "react";

function AddUsers({ isOpen, onClose, onSave, editData }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");


 useEffect(() => {
    if (editData) {
      setName(editData.name);
      setAge(editData.age);
      setAddress(editData.address);
    } else {
      setName("");
      setAge("");
      setAddress("");
    }
  }, [editData, isOpen]);

  if (!isOpen) return null;

  
  

  
    return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-2xl w-80">
        <h2 className="text-xl font-bold mb-4">{editData ? "Edit User" : "Add User"}</h2>
        
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="w-full p-2 border mb-2 rounded" />
        <input value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" type="number" className="w-full p-2 border mb-2 rounded" />
        <input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" className="w-full p-2 border mb-4 rounded" />

        <div className="flex gap-2">
          <button onClick={() => onSave({ name, age, address, profilePic: editData?.profilePic })} className="flex-1 bg-blue-600 text-white p-2 rounded">
            {editData ? "Update" : "Add"}
          </button>
          <button onClick={onClose} className="flex-1 bg-gray-300 p-2 rounded">Cancel</button>
        </div>
      </div>
    </div>
  );
   
  
}

export default AddUsers;
