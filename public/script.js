const socket = io("/");
const videoGrid = document.getElementById('video-grid');
const myPeer = new Peer(undefined, {
  host: "/",
  port: "3001",
});


const myVideo = document.createElement('video');
//Mutes the video for ourselves
myVideo.muted = true;

navigator.mediaDevices.getUserMedia({
    video:true,
    audio:true
}).then(stream =>{
    
})

myPeer.on("open", (id) => {
  socket.emit("join-room", ROOM_ID, id);
});

socket.on("user-connected", (userId) => {
  console.log("user connected", userId);
});
