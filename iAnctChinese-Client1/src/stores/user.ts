import { defineStore } from 'pinia';

export interface UserInfo {
    userName: string | null;
    userEmail: string | null;
}

export const userInfoStore = defineStore('userInfo', {
    state: (): { isLogin: boolean; userInfo: UserInfo } => ({
        isLogin: false,
        userInfo: {
            userName: null,
            userEmail: null
        }
    }),
    persist: {
        enabled: true
    }
});