This is a projet to simulate an issue I'm having with ionic --prod.

Issue on Ionic github https://github.com/ionic-team/ionic/issues/12934

## How to execute

- Just clone this repositoy
- run npm install

- run 'ionic serve'
  - you'll see that it shows on home page that the network type is 'wifi (mock)'. So it's using the mock provider we've created

- run 'ionic cordova run browser'
  - you'll see that it shows on home page that the network type is 'undefined'. It uses the Network native and could got the type of networ. But it's ok so far.

- run 'ionic cordova run browser --prod'
  - here is the problem. The app doesn't starts and shows the home page. It gives an error that can't read 'type' of undefined. The Network wasn't injected from native or the mock.
