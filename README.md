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