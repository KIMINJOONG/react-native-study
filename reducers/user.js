

export const initialState = {
    isLoggingOut: false, // 로그아웃 시도중
    isLoggingIn: false, // 로그인 시도중
    loginErrorReason: "", // 로그인 실패 사유
    isSignedUp: false, // 회원가입 성공
    isSigningUp: false, // 회원가입 시도중
    signUpErrorReason: "", // 회원가입 실패 사유
    me: null,
    userInfo: null, //남의 정보
    isEditingNickname: false,
    editNicknameErrorReason: ''
  };
  
  // 비동기 요청
  export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
  export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
  export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
  
  export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
  export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
  export const LOG_IN_FAILURE = "LOG_IN_FAILURE";
  
  export const LOAD_USER_REQUEST = "LOAD_USER_REQUEST";
  export const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
  export const LOAD_USER_FAILURE = "LOAD_USER_FAILURE";
  
  export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
  export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
  export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";
  
  export const LOAD_FOLLOWERS_REQUEST = "LOAD_FOLLOWERS_REQUEST";
  export const LOAD_FOLLOWERS_SUCCESS = "LOAD_FOLLOWERS_SUCCESS";
  export const LOAD_FOLLOWERS_FAILURE = "LOAD_FOLLOWERS_FAILURE";
  
  export const LOAD_FOLLOWINGS_REQUEST = "LOAD_FOLLOWINGS_REQUEST";
  export const LOAD_FOLLOWINGS_SUCCESS = "LOAD_FOLLOWINGS_SUCCESS";
  export const LOAD_FOLLOWINGS_FAILURE = "LOAD_FOLLOWINGS_FAILURE";
  
  export const FOLLOW_USER_REQUEST = "FOLLOW_USER_REQUEST";
  export const FOLLOW_USER_SUCCESS = "FOLLOW_USER_SUCCESS";
  export const FOLLOW_USER_FAILURE = "FOLLOW_USER_FAILURE";
  
  export const UNFOLLOW_USER_REQUEST = "UNFOLLOW_USER_REQUEST";
  export const UNFOLLOW_USER_SUCCESS = "UNFOLLOW_USER_SUCCESS";
  export const UNFOLLOW_USER_FAILURE = "UNFOLLOW_USER_FAILURE";
  
  export const REMOVE_FOLLOWER_REQUEST = "REMOVE_FOLLOWER_REQUEST";
  export const REMOVE_FOLLOWER_SUCCESS = "REMOVE_FOLLOWER_SUCCESS";
  export const REMOVE_FOLLOWER_FAILURE = "REMOVE_FOLLOWER_FAILURE";
  
  export const ADD_POST_TO_ME = "ADD_POST_TO_ME";
  
  export const EDIT_NICKNAME_REQUEST = 'EDIT_NICKNAME_REQUEST';
  export const EDIT_NICKNAME_SUCCESS = 'EDIT_NICKNAME_SUCCESS';
  export const EDIT_NICKNAME_FAILURE = 'EDIT_NICKNAME_FAILURE';
  
  
  // 동기요청
  
  // 동적인 데이터는 함수로 만들어줌 signup.js도 참고할것
  export const signUpAction = data => {
    return {
      type: SIGN_UP_REQUEST,
      data: data
    };
  };
  export const loginAction = {
    type: LOG_IN_REQUEST
  };
  
  export const logoutAction = {
    type: LOG_OUT_REQUEST
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      default: {
        return {
          ...state
        };
      }
    }
  };
  
  export default reducer;
  