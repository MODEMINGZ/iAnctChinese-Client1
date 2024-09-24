import { defineStore } from 'pinia';

export interface UserInfo {
    userName: string | null;
    userEmail: string | null;
    lastLoginTime: string | null;
}

export const userInfoStore = defineStore('userInfo', {
    state: (): { isLogin: boolean; userInfo: UserInfo } => ({
        isLogin: false,
        userInfo: {
            userName: null,
            userEmail: null,
            lastLoginTime: null
        }
    }),
    // persist: {
    //     enabled: true
    // },
    actions: {
        login(userInfo: UserInfo) {
            this.isLogin = true;
            this.userInfo.userName = userInfo.userName;
            this.userInfo.userEmail = userInfo.userEmail;
            this.userInfo.lastLoginTime = userInfo.lastLoginTime;
        },
        logout() {
            this.isLogin = false;
            this.userInfo = {
                userName: null,
                userEmail: null,
                lastLoginTime: null
            }
        }
    }
});