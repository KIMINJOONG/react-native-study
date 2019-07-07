

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

  //actions
  export const signUp = (data) => ({
    type: SIGN_UP_REQUEST,
    data
  });
  
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
  
  
  // 동기요청
  
  // 동적인 데이터는 함수로 만들어줌 signup.js도 참고할것
  export const signUpAction = data => {
    return {
      type: SIGN_UP_REQUEST,
      data
    };
  };
  export const loginAction = data => {
    return {
      type: LOG_IN_REQUEST,
      data
    }
  };
  
  export const logoutAction = () => {
    return {
      type: LOG_OUT_REQUEST
    }
  }
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SIGN_UP_REQUEST: {
        return {
          ...state,
          isSignedUp: false,
          isSigningUp: true
        }
      }
      case SIGN_UP_SUCCESS: {
        return {
          ...state,
          isSignedUp: true,
          isSigningUp: false,
        }
      }
      case SIGN_UP_FAILURE: {
        return {
          ...state,
          isSignedUp: false,
          isSigningUp: false,
        }
      }
      case LOG_IN_REQUEST: {
        return {
          ...state
        }
      }
      case LOG_IN_SUCCESS: {
        return {
          ...state,
          me: action.data
        }
      }
      case LOG_IN_FAILURE: {
        return {
          ...state
        }
      }
      case LOG_OUT_REQUEST: {
        return {
          ...state
        }
      }
      case LOG_OUT_SUCCESS: {
        return {
          ...state
        }
      }
      case LOG_OUT_FAILURE: {
        return {
          ...state
        }
      }
      default: {
        return {
          ...state
        };
      }
    }
  };
  
  export default reducer;
  