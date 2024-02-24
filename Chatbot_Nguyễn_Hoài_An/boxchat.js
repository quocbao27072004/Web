var senderName = ""; // Biến lưu trữ tên người gửi

        function submitName() {
            var fullname = document.getElementById("fullname").value;
            if (fullname.trim() === "") {
                alert("Vui lòng nhập họ và tên của bạn.");
                return;
            }

            // Lưu tên người gửi
            senderName = fullname;

            // Ẩn form nhập tên và hiển thị phần chat
            document.getElementById("nameForm").style.display = "none";
            document.getElementById("chatbox").style.display = "block";
            document.getElementById("message").style.display = "block";
            document.getElementById("sendButton").style.display = "block";
        }

        function sendMessage() {
    var messageInput = document.getElementById("message");
    var message = messageInput.value;
    
    // Thêm tên người gửi vào tin nhắn
    var fullMessage = senderName + ":" + message;


    // Hiển thị tin nhắn trong chatbox
    var chatbox = document.getElementById("chatbox");
   
    var newMessage = document.createElement("div");
    newMessage.textContent = fullMessage;
    chatbox.appendChild(newMessage);

    // Lưu tin nhắn vào Local Storage
    var chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
    chatHistory.push(fullMessage);
    localStorage.setItem("chatHistory", JSON.stringify(chatHistory));

    // Xóa nội dung tin nhắn sau khi gửi
    messageInput.value = "";

    // Cuộn xuống cuối cùng
    chatbox.scrollTop = chatbox.scrollHeight;
}

// Phục hồi tin nhắn từ Local Storage khi trang được tải
window.onload = function() {
    var chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
    var chatbox = document.getElementById("chatbox");
    chatHistory.forEach(function(message) {
        var newMessage = document.createElement("div");
        newMessage.textContent = message;
        chatbox.appendChild(newMessage);
    });
};

