import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

const userSocketMap = {}; // { userId: [socketId1, socketId2, ...] }

// ✅ Export this function before using it elsewhere
export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId]?.[0]; // Return first socketId if multiple
};

// Helper
const emitOnlineUsers = () => {
  const onlineUsers = Object.keys(userSocketMap);
  io.emit("getOnlineUsers", onlineUsers);
};

io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;
  console.log(`✅ User connected: ${socket.id} for user: ${userId}`);

  if (userId && userId !== "undefined") {
    if (!userSocketMap[userId]) {
      userSocketMap[userId] = [];
    }
    userSocketMap[userId].push(socket.id);
  }

  emitOnlineUsers();

  socket.on("disconnect", () => {
    console.log(`🔴 Socket disconnected: ${socket.id}`);
    if (userId && userSocketMap[userId]) {
      userSocketMap[userId] = userSocketMap[userId].filter(id => id !== socket.id);
      if (userSocketMap[userId].length === 0) {
        delete userSocketMap[userId];
      }
    }
    emitOnlineUsers();
  });
});

// ✅ Also export io and app/server
export { app, server, io };
