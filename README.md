# nwitter
트위터 클론코딩 해보기 근데 파이어베이스와 리액트를 곁들인

## 사용한 node
- firebase
- env
- react

## 트러블 슈팅

### 트러블슈팅 1) firebase 연결
- 시작하자마자 생긴 문제 (경고문)
```
mpiled with problems:X
ERROR in ./src/firebase.js 12:15-37
export 'default' (imported as 'firebase') was not found in 'firebase/app' (possible exports: FirebaseError, SDK_VERSION, _DEFAULT_ENTRY_NAME, _addComponent, _addOrOverwriteComponent, _apps, _clearComponents, _components, _getProvider, _registerComponent, _removeServiceInstance, deleteApp, getApp, getApps, initializeApp, onLog, registerVersion, setLogLevel)
```
- 책과 다르게 firebase 버전이 올라가면서 import문이 바뀌었다.
- 기존 firebase 8버전
```js
import firebase from "firebase/app";
```
- 현재 firebase 9버전 이후
```js
import firebase from 'firebase/compat/app';
```

### 트러블슈팅 2) react-router-dom 버전 이슈 - Switch -> Routes
- 라우터를 만드는데 버전이 달라서 쓰는 문법이 달라졌다.
- 에러 메시지 : `'Switch' is not exported from 'react-router-dom'`
- router는 6버전부터 Switch가 아니라 Routes를 사용한다.
- 기존 5버전 : `import { Switch } from "react-router-dom";`
- 현재 6버전 : `import { Routes } from "react-router-dom";`

### 트러블슈팅 3) exact.
- `Uncaught Error: [Home] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
```js
<Routes>
    {isLoggedIn ? (<Switch exact path="/"><Home /></Switch>) : (<Switch exact path="/"><Auth /></Switch>)}
</Routes>
```
- d
```js
<Routes>
    {isLoggedIn ? (<Route path="/*" element={<Home />} />) : (<Route path="/*" element={<Auth />} />)}
</Routes>
```