# BusinessCard
React 를 이용하여 명함을 제작, 보관하는 웹앱을 제작하였습니다.          
뉴모피즘을 컨셉으로 디자인하였습니다.          


<hr />


## 사용 기술
 - HTML, CSS, PostCSS, JavaScript, React, Firebase API, Cloudinary


<hr />


### PostCSS
PostCSS를 사용한 이유는 크로스 브라우징이 용이하고       
현재 많은 개발자들이 PostCSS를 활용하여 프로젝트를 진행하기 때문입니다.        
사용하고자 하는 jsx 파일 상단에 아래의 코드를 추가합니다.         

    import styles from './___.module.xss'

그 후 className="" 을 사용하는 것 대신 className={styles.클래스 이름} 을 사용합니다.          
공통되는 스타일이 여러 컴포넌트에서 중복적으로 사용되는 점을 효율적으로 관리하기 위하여            
color.css 파일을 만들어 추후 스타일이 변경되어도 빠르게 변경 가능하게 만들었습니다.                

color.css

    @value makerDarkGray: #454545;
    @value makerSkyBlue: #e9edf0;
    @value makerShadow: -2px -2px 5px #fff, 3px 3px 5px #babecc;
    @value makerShadowInset: inset -2px -2px 5px #fff, inset 3px 3px 5px #babecc;



<hr />



### Firebase API
로그인 기능과 서버에 데이터를 저장하기 위하여 Firebase API를 사용하였습니다.        
서버 개발을 따로 하지 않고 데이터를 활용할 수 있다는 장점이 있습니다.        
firebaseApp만 따로 export default 하여 사용할 수 있지만 그렇게 되면        
불필요한 데이터까지 넘어가 버립니다. 따라서 auth와 database 등을 따로        
구분하여 내보내었습니다.        

firebase.js

    import firebase from "firebase/app";
    import "firebase/auth";
    import "firebase/database";

    const firebaseConfig = {
        apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
        authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    };
    // Initialize Firebase
    const firebaseApp = firebase.initializeApp(firebaseConfig);

    export const firebaseAuth = firebaseApp.auth();
    export const firebaseDatabase = firebaseApp.database();
    export const googleProvider = new firebase.auth.GoogleAuthProvider();
    export const githubProvider = new firebase.auth.GithubAuthProvider();


<hr />


### Cloudinary
이미지를 웹상에 업로드하기 위하여 사용하였습니다.           
firebase를 이용하여 업로드 가능하지만 Cloudinary를 이용하면 사용자가          
올리는 이미지를 사이즈, 필터, 파일 변환 등 원하는 방식으로 조절할 수 있어 사용하였습니다.          
Cloudinary 사이트에 명시된 코드들을 활용하였습니다.        

image_uploader.js

    class ImageUploader {
        async upload(file){
            const data = new FormData();
            data.append('file', file);
            data.append('upload_preset', 'pdzaoz52');
            const result = await fetch(
                'https://api.cloudinary.com/v1_1/drqni4rhj/upload',
                {
                    method: 'post',
                    body: data,
                }
            );
            return await result.json();
        }
    }

    export default ImageUploader;



<hr />



## 웹사이트 구성
로그인 페이지와 명함 제작 페이지를 제작하였습니다.      
React Router를 사용하여 페이지 간 이동을 하였습니다.        

로그인 페이지

<img src="./readImg/login.png" width="100%">

명함 제작 페이지

<img src="./readImg/card.png" width="100%">

명함 제작 페이지 반응형

<img src="./readImg/cardMedia.png" width="100%">