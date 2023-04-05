
import CryptoJS from "crypto-js";


export const encryptText = (value) => {
    let encryptedSecret = CryptoJS.AES.encrypt(
        value,
        process.env.REACT_APP_ENC_KEY
      ).toString()
      return encryptedSecret
}

export const decryptText = (value) => {
    const decryptedSecret = CryptoJS.AES.decrypt(value ,  process.env.REACT_APP_ENC_KEY);
    // setDeckey(decryptedSecret)
    var originalText = decryptedSecret.toString(CryptoJS.enc.Utf8)

    return originalText

}