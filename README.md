# sharedTransition
This React Native Sample App using Reanimated For sharedTransition



https://user-images.githubusercontent.com/54738565/229348357-fa5da1f8-f737-4cad-aca7-c78cc3e0bc43.mp4


How to use it?

To create a shared transition animation between two components on different screens, simply assign the same sharedTransitionTag to both components. When you navigate between screens, the shared transition animation will automatically play. The shared transition feature works by searching for two components that have been registered with the same sharedTransitionTag. If you want to use more than one shared view on the same screen, be sure to assign a unique shared tag to each component.


## Installation
```sh
npm install --save react-native-reanimated
```


## Usage
```js
import Animated  from 'react-native-reanimated';
```

Screen A
```js
<Animated.View
  sharedTransitionTag="sharedTag"
  style={{ width: 150, height: 150, backgroundColor: 'green' }}
/>
```
Screen B
```js
<Animated.View
  sharedTransitionTag="sharedTag"
  style={{ width: 100, height: 100, backgroundColor: 'green' }}
/>
```

