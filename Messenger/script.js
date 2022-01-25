document.getElementById("ClearButton").addEventListener("click", onClearButtonClick);
document.getElementById("SendButton").addEventListener("click", onSendButtonClick);

let count = 0;
if(localStorage.length > 0)
    count = localStorage.getItem('count');

function onSendButtonClick (){
    let text = document.getElementById('InputText');
    let message = document.createTextNode(text.value);
    let maxLength = message.textContent.length;

    if (maxLength > 0){
        giveTextInMessage(message);
        count++;
        localStorage.setItem('count', count);
        localStorage.setItem(count, message.textContent);
    }
    setEmptyInputString();
}

function setEmptyInputString(){
    let inputText = document.querySelector('#InputText');
    inputText.value = '';
}

function giveTextInMessage(text){
    let moreMessages = document.getElementById('MW');
    moreMessages.append(newMessage(text));
}

function newMessage(text){
    let messageWrapper = document.createElement("div");
    let message = document.createElement("div");
    let messageAuthor = document.createElement("div");
    let textMessage = document.createElement("div");

    messageWrapper.className = "MaxMessageLengthWrapper";
    message.className = "Message";
    textMessage.className = "TextMessage";
    messageAuthor.className = "MessageAuthor";
    textMessage.append(text);
    messageAuthor.append('Вы');
    message.append(messageAuthor, textMessage);
    messageWrapper.append(message);

    return messageWrapper;
}

document.addEventListener("DOMContentLoaded", function(){
    setting();
})

function setting(){
    for(let i = 1; i<=localStorage.getItem('count'); i++) {
        let message = document.createTextNode("Empty");
        message.textContent=localStorage.getItem(i);
        giveTextInMessage(message);
    }
}

function onClearButtonClick(){
    localStorage.clear();
    location.reload();
}