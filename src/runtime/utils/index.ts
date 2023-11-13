// const CryptoJS = require("crypto-js")
// import JSEncrypt from 'jsencrypt';
// @ts-ignore
// import CryptoJS from "crypto-js"
// import config  from "../config"

const aesEncrypt = (data:any) =>  {
    // let str = data;
    // if (typeof data === 'object') {
    //     str = JSON.stringify(data);
    // }
    // str = CryptoJS.enc.Utf8.parse(str);
    // const crypto = CryptoJS.AES.encrypt(str, CryptoJS.enc.Utf8.parse(config.key), {
    //     iv: CryptoJS.enc.Utf8.parse(config.iv),
    //     mode: CryptoJS.mode.ECB,
    //     padding: CryptoJS.pad.Pkcs7,
    // });
    // return crypto.toString(); // 对称加密内容
}

const aesDecrypt = (data:any)=> {
    // const decrypt = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(config.key), {
    //     iv: CryptoJS.enc.Utf8.parse(config.iv),
    //     mode: CryptoJS.mode.ECB,
    //     padding: CryptoJS.pad.Pkcs7,
    // });
    // return CryptoJS.enc.Utf8.stringify(decrypt); // 对称解密内容
}

const encrypt = (str: string)=>{
    // const encrypted = new JSEncrypt();
    // encrypted.setPublicKey(config.publicKey.toString());
    // return encrypted.encrypt(str); // 非对称加密字符串
}

const decrypt = (str: string) => {
    // const decrypted = new JSEncrypt(); // 创建解密对象实例
    // decrypted.setPrivateKey(config.privateKey.toString()); // 设置私钥
    // return decrypted.decrypt(str); // 非对称解密内容
}


export {
    aesEncrypt,
    aesDecrypt,
    encrypt,
    decrypt
}
