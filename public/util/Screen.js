'use strict'

// UI 默认给图是 750
export const SCREEN_WIDTH = 375

export let PHONE_SCREEN_WIDTH = 640
export let PHONE_SCREEN_HEIGHT = 720

export function px2dp(uiElementPx, screenWidth) {
  //console.log('screenWidth=' + screenWidth)
  if(screenWidth) {
    return uiElementPx * screenWidth / SCREEN_WIDTH
  }else{
    return uiElementPx * PHONE_SCREEN_WIDTH / SCREEN_WIDTH
  }
}

export function px2sp(uiElementPx, screenWidth) {
  return px2dp(uiElementPx) // fontSizeScale
}

