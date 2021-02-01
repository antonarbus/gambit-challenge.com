const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

// make an app
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// use port 8000
http.listen(8000 , () => console.log('listening on *:8000'));

// Send current time to all connected clients
let interval;
clearInterval(interval);

function sendData() {
    // send data every 1s
    interval = setInterval(() => {
        // let's replace date meter with dynamic real time from server
        let now = new Date();
        let timeStamp = now.getFullYear() + '-' + now.getMonth() + 1 + '-' + ('0'+now.getDate()).slice(-2) + ' ' + ('0'+now.getHours()).slice(-2) + ':' + ('0'+now.getMinutes()).slice(-2) + ':' + ('0'+now.getSeconds()).slice(-2);
        io.emit('hey', { 
            time: timeStamp, 
            dataFromMeter: timeStamp + dataFromMeter,
        });
        console.log('seinding time ' + new Date());
    }, 1000)
}

// Emit welcome message on connection
io.on('connection', function(socket) {
    
    // this block is just for test
    console.log('a user connected with id: ' + socket.id);
    // send it to client side
    socket.emit('welcome', { message: 'connection id: ', id: socket.id });
    // send back from client
    socket.on('i am client', (socket) => { 
        console.log('Return same ID from client: ' + socket.id);
    });
    
    socket.on('start', (socket) => {
        sendData();
        console.log('started');
    });
    
    socket.on('stop', (socket) => {
        clearInterval(interval);
        console.log('stopped');
    });

}); 

// this is raw data from meter without date, which will be concatenated at sending
let dataFromMeter = `
1:7579
2:48988
3:5064
4:48142
5:37967
6:48877
7:63814
8:17575
9:0
10:0
11:24224
12:15965
13:0
14:0
15:0
16:0
17:87
18:0
19:9891
20:16221
21:65480
22:65535
23:39041
24:48994
25:0
26:0
27:0
28:0
29:144
30:0
31:48777
32:16191
33:15568
34:16611
35:28424
36:16534
37:7424
38:15783
39:14592
40:15758
41:5461
42:49087
43:45184
44:15493
45:36608
46:15459
47:29184
48:15516
49:0
50:0
51:0
52:0
53:6432
54:4386
55:5889
56:0
57:0
58:0
59:0
60:255
61:120
62:0
63:0
64:0
65:0
66:4001
67:62500
68:0
69:0
70:3
71:4
72:4
73:3606
74:16800
75:54913
76:48896
77:35706
78:17101
79:44042
80:17099
81:33339
82:16963
83:42500
84:49530
85:33468
86:16963
87:33210
88:16963
89:2885
90:16512
91:0
92:806
93:3501
94:3501
95:0
96:1
97:43137
98:17105
99:3374
100:17839
`;