# gambit-challenge.com

How I did gambit-challenge task.

01. Meter periodically sends data to a client. Previously I have requested a server and got a response. Our situation is vice-versa. Google how to do it.
02. WebSocket is a solution, which is supported by Node.js server, which I never used. Good opportunity to try.
03. Purchased a nice domain name for the project and deployed it to my server. It saved time for looking for a free hosting.
04. Watched tutorial from Traversy Media about Node.js deployment + Node Express and with some additional research smoothly deployed it.
05. Good side of Node.js is that it uses JavaScript language, no need to learn new syntax.
06. Installed WebSocket via NPM manager https://socket.io/
07. Spent one evening to send and receive periodical data from server.
08. Succeeded to send raw string from the homework task from the server to a client and retrieve it in the browser.
08. For some reason Node.js disconnects after some idle period. Investigated the problem.
09. Installed production process manager PM2, which takes care of server reboots and automatic updates in case of a file update.
10. Now webpage is always online.
11. Read numerous articles about MODBUS ASCII format, about dec, hex, binary values representation, about bits and bytes.
12. Spoke with colleagues and friends who worked with PLCs, got overall understanding and some hints.
13. C language is the best for data type conversion, but after principle understanding I felt that I may do it in JavaScript just working with strings.
14. Succeeded to make 5 conversion functions for LONG, Real4, INTEGER, BIT, BCD according to the instructions from device manual.
15. These are all problems I tackled to solve the challenge.

How the app works.

Server side.

server.js
Lines 1...11 - Server initialization.
Lines 17...29 - Function to send periodically (1s) data from meter with a current time stamp. To make the task more interactive decided to replace the first string from the string with a dynamic time stamp.
Lines 31...53 - Socket.io connection start / stop + start sending data.
Lines 56...157 - Meter's raw data string.

Client side.

index.html

Simple html with:
1. Button to establish connection with meter.
2. Div container to select a specific meter value option.
3. Div container to show current value received from the meter.
4. Hidden div container for listing all possible value options from the meter. It is generated dynamically by JS.
5. Div container for chart display.
6. Instruction as unordered list.
7. Insertion of external files for jQuery + Sockets.io + Google charts + own JavaScript.

client.css

Simple style with:
1. Normalization on top.
2. Flex for Display property of body element to centre all items and view it as a column
3. Some :hover pseudo classes for clickable elements
4. One media query for chart div, because it does not support width: auto.

client.js

Here I list basic parts to explain how the application works

Lines 9...693 - global array (ARR) of objects with information about meters registers. We will work with this array adding raw and converted values as a new object's properties.
Line 697 - index of element in ARR of selected meter's value by a user. It is global variable, to let other functions know what register is selected by user.
Lines 700...754 - establish connection with Sockets.io by a button click. On receipt of data from a meter we parse and store data into ARR, convert raw values into human representation, show it on the display in numeric and graph view.
Note. We change LONG & Real4 values by 30% for interactive representation on a chart (just for fun, otherwise graph is flat). Actual values stay unchanged in ARR.
Lines 757...1059 - functions to convert LONG, Real4, INTEGER, BIT, BCD into human format. There are also functions to save human values into respective elements of ARR every time client receives data from a meter.
Lines 1062...1148 - function for initializing and updating chart. Every new data comes from a meter, we add it to the separate array and represent those values on a chart.
Lines 1151...1180 - functions to parse and distribute raw data from a meter to the ARR.
Lines 1183...1129 - logic for choosing an item to be shown on a display. For INTEGER, BIT, BCD chart is not shown.
