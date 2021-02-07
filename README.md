# gambit-challenge.com

[www.gambit-challenge.com](http://gambit-challenge.com/)

[Initial task](https://github.com/gambit-labs/challenge)

<img src="http://gambit-challenge.com/screenshot.png" alt="screenshot" height="auto" width="300"/>

## How I did gambit-challenge task

1. Let's assume a meter sends data to a client. Previously I sent requests to a server and got a response. Our situation is vice-versa and the meter initiate data flow.
1. WebSocket is a solution, which is supported by Node.js server, which I never used. Good opportunity to try.
1. Purchased a nice domain name for the project and deployed it to my server.
1. Watched tutorial from Traversy Media about Node.js deployment and with some additional research smoothly deployed it.
1. Good side of Node.js is that it uses JavaScript language, no need to learn new syntax.
1. Installed WebSocket via NPM manager https://socket.io/
1. Spent one evening to send and receive periodical data from a server. There are still some questions to be solved, but it is not a today's topic.
1. Succeeded to send task's raw string from the server and retrieve it in the browser.
1. For some reason Node.js server disconnects after some idle period. Investigated the problem.
1. Installed production process manager PM2, which takes care of server reboots in case of a problem or a file update.
1. Now webpage is always online.
1. Read numerous articles about MODBUS ASCII format, about dec, hex, binary values representation, about bits and bytes.
1. Spoke with colleagues and friends who worked with PLCs, got overall understanding and some hints.
1. C language is the best for data type conversion, but after understanding the principle I feel that I may do it in JavaScript just working with strings. At least for this task.
1. Succeeded to make 5 conversion functions for LONG, Real4, INTEGER, BIT, BCD according to the instructions from the device manual.
1. To make the task fun, I periodically (1s) push string from the meter and randomize LONG & Real4 values with 30% and represent it on a chart.
1. These are all major problems I tackled to solve the challenge.

## How the app works

### Server side

#### server.js
1. **Lines 1...11**
Node.js server initialization.
1. **Lines 17...29**
Function to send periodically (1s) data from a meter with a current time stamp. To make the task more interactive decided to replace static time stamp from the first line by a dynamic one.
1. **Lines 31...53**
Socket.io connection start / stop + data send .
1. **Lines 56...157**
Variable with meter's raw data string.

### Client side

#### index.html

Simple html with:
1. Button to establish connection with a meter.
1. Div container to select a specific meter option.
1. Div container to show current value from the meter.
1. Hidden div container for listing all possible options from the meter. List is generated dynamically by JS.
1. Div container for chart display.
1. Instruction as unordered list.
1. Insertion of external files for jQuery + Sockets.io + Google charts + own JavaScript.

#### client.css

Simple style with:
1. Normalization on top.
1. Flex for body element to centre all items and view it as a column.
1. Some :hover pseudo classes for clickable elements.
1. One media query for chart div, because it does not support width: auto.

#### client.js

Basic parts to explain how the application works

1. **Lines 9...693**
Global array (masterArr) of objects with information about meter registers from the manual. We will work with this array adding raw and converted values.
1. **Line 697**
Index of element in masterArr of selected meter's option by a user.
1. **Lines 700...754**
Establish connection with Sockets.io by a button click. On receipt of data from the meter we parse and store data into masterArr, convert raw values into human representation, show it on the display in numeric and graph view.
_Note. We change LONG & Real4 values by 30% for interactive representation on a chart (otherwise graph is flat). Actual values stay unchanged in masterArr_.
1. **Lines 757...1059**
Functions to convert LONG, Real4, INTEGER, BIT, BCD into human format. There are also functions to save human values into respective elements of masterArr every time client receives data from a meter.
1. **Lines 1062...1148**
Function for initializing and updating chart. When data comes from a meter, we add it to the separate array and represent those values on a chart.
1. **Lines 1151...1180**
Functions to parse and distribute raw data from a meter to the masterArr.
1. **Lines 1183...1129**
Logic for choosing an item to be shown on a display. For INTEGER, BIT, BCD chart is not shown.