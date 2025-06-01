function fetchusers(){
    fetch("https://realtime-database-ba645-default-rtdb.firebaseio.com/users.json")
    .then((res)=>res.json())
    .then((data)=>displayUsers(data))
    .catch((err)=>console.log(err));
}

fetchusers();

function displayUsers(data){
    document.querySelector('#countainer').innerHTML="";
    console.log(data)
    let users=Object.entries(data);
    console.log(users);
    users.forEach(function(elm){

        let userId=elm[0];
        let{email, name}=elm[1];
   
        document.querySelector("#countainer").innerHTML+=
        `       <div>
                    <h2>${name.toUpperCase()}</h2>
                    <p>${email}</p>
                    <button id="delete-btn" onClick=deleteUser('${userId}')> Delete</button>
                    <button id="edit-btn" onClick="editUser('${userId}')"> Edit </button>
                </div>`;
    });
}

function editUser(userId){
    console.log(userId)
    window.location.href=`editUser.html?id=${userId}`;
}




function deleteUser(userId){
    console.log(userId);
   fetch(`https://realtime-database-ba645-default-rtdb.firebaseio.com/users/${userId}.json`,{
    method: "DELETE",
   })
   .then((res)=>res.json())
   .then(()=>{
    alert(`${userId} is Deleted`);
    fetchusers();
    window.location.reload();

    })

}

