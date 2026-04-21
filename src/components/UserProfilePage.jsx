import { userDetails } from "../Data/userDetails";
import AddUsers from "./AddUsers";
import { useState } from "react";

function UserProfilePage() {
  const [users, setUsers] = useState(userDetails);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const AddNewUser = (newUserData) => {
    const newUser = { ...newUserData };
    setUsers([...users, newUser]);
  };

  return (
    <>
      <div className="p-8 bg-gray-200 min-h-screen">
        <div className=" flex justify-between ">
          <h1 className="text-4xl font-extrabold mb-6 xl:ml-5">User List</h1>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-green-600 text-white h-8 w-30  rounded-full font-bold cursor-pointer "
          >
            
            + Add User
          </button>
        </div>
        <AddUsers
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddUser={AddNewUser}
        />

        <div className="grid gap-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
          {users.map((obj, index) => {
            return (
              <div
                key={index}
                className="p-4  border rounded-2xl bg-amber-100 flex  items-center gap-16"
              >
                <div>
                  <img
                    src={obj.profilePic}
                    className="w-24 h-24 rounded-full object-fill "
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="font-bold text-lg text-blue-800 capitalize">
                    Name: {obj.name}
                  </div>
                  <div className="text-gray-600">Age: {obj.age}</div>
                  <div className="text-gray-600">Address: {obj.address}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default UserProfilePage;
