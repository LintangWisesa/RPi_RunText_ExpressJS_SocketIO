![simplinnovation](https://4.bp.blogspot.com/-f7YxPyqHAzY/WJ6VnkvE0SI/AAAAAAAADTQ/0tDQPTrVrtMAFT-q-1-3ktUQT5Il9FGdQCLcB/s350/simpLINnovation1a.png)

# Controlled Running Text

A controlled running text built using __*Raspberry Pi*__, __*Express.js*__ & __*Socket.io*__. This running text can be controlled wirelessly over WiFi connection. You can set the displayed text, its font type, text color, background color and its speed. To build this project, make sure __*Node.js*__ (version 8 or later) is installed on your Rapberry Pi (any OS). Then followed these steps to make your own:

<hr>

#### 1. Connect to WiFi & Check its IP

Connect your Raspberry Pi to a WiFi connection, then check its IP address. On terminal type:

```bash
$ ifconfig
```

Your Pi's IP address must be various, it consists some numbers with some dots like ```123.456.78.910```. Note your IP address!

<hr>

#### 2. Clone this project

Clone this project from my github repo. [Download here](https://github.com/LintangWisesa/RPi_RunText_ExpressJS_SocketIO) or clone it from your terminal (make sure you've installed *__git__* on your Pi):

```bash
$ git clone https://github.com/LintangWisesa/RPi_RunText_ExpressJS_SocketIO.git
```

<hr>

#### 3. Insert your IP on the app

Inside this project folder, go to ```/public``` then insert your Pi's IP address on ```chat.js``` file.

```bash
$ cd RPi_RunText_ExpressJS_SocketIO

$ cd public

$ sudo nano chat.js
```

Edit on the following line (```chat.js```):

```javascript
var socket = io.connect('http://123.456.78.910:1234') 
// change with your RPi IP address
```

Exit & save it!

<hr>

#### 4. Run Express.js server

Go back to the project root, then run its server application (```app.js``` file). It'll be better if you have __*nodemon*__ installed.

```bash
$ node app
```
or using __*nodemon*__:

```bash
$ nodemon app
```

The server will be listening on port ```1234```, so you can access it via your Pi's web browser (for example *__Chromium__*): http://localhost:1234. It will render an __*HTML*__ page with running text displayed, you can configure it by click _Settings_ button on the page.

<hr>

#### 5. Control it from your gadget

You can also control the running text via your laptop, tablet or even a smartphone. First connect your gadget to a WiFi which your Raspberry Pi is connected to. Open your browser & go to your Pi's IP address on port ```1234```: http://123.456.78.910:1234. You'll see something similar with your Pi display & try to config its displayed text, font type, text color, background color & its speed. Enjoy!

<hr>

#### Lintang Wisesa :love_letter: _lintangwisesa@ymail.com_

[Facebook](https://www.facebook.com/lintangbagus) | 
[Twitter](https://twitter.com/Lintang_Wisesa) |
[Google+](https://plus.google.com/u/0/+LintangWisesa1) |
[Youtube](https://www.youtube.com/user/lintangbagus) | 
:octocat: [GitHub](https://github.com/LintangWisesa) |
[Hackster](https://www.hackster.io/lintangwisesa)