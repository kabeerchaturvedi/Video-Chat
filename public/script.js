const socket = io("/");
const videoGrid = document.getElementById("video-grid");
const myPeer = new Peer(undefined, {
  host: "/",
  port: "3001",
});

const myVideo = document.createElement("video");
//Mutes the video for ourselves
myVideo.muted = true;

navigator.mediaDevices
  .getUserMedia({
    video: true,
    audio: true,
  })
  .then((stream) => {
    addVideosStream(myVideo);

    myPeer.on('call',call=>{
      
    })

    socket.on("user-connected", (userId) => {
      connectToNewUser(userId, stream);
    });
  });

myPeer.on("open", (id) => {
  socket.emit("join-room", ROOM_ID, id);
});

function addVideosStream(video, stream) {
  video.srcObject = stream;
  video.addEventListener("loadmetadata", () => {
    video.play(); 
  });
  videoGrid.append(video);
}



function connectToNewUser(video, stream) {
  const call = myPeer.call(userId, stream);
  const video2 = document.createElement("video");
  call.on("stream", (userVideoStream) => {
    addVideosStream(userVideoStream);
  });
  call.on("close", () => {
    video2.remove();
  });
}
