import JSEncrypt from "jsencrypt";
import CryptoJS from "crypto-js";
import {customAlphabet} from 'nanoid'

const alphabet = Array.from(new Array(26), (ele, idx) => {
    return String.fromCharCode(65 + idx) + idx;
});


export interface optionsType {
    key?: string,
    iv?: string,
    publicKey?: string,
    privateKey?: string
}


const key = '2021062310041005';
const iv = '2021062310041005';

const publicKey = '-----BEGIN PUBLIC KEY-----\n' +
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAjhWLBVFJQXrAr0xwW3MI\n' +
    'Bk173bxB7egRnuFInfb0NFLkYWnhMx4oVmkeBbga6o2+F+9JlHM85I2TUDb02FwU\n' +
    'zn0z3EP4HIkj45iJEUX2DHC2rPDw6NtlC3HsF38L61ywOaCPaKxSEXMWA9Em96uW\n' +
    '6dDMR6tdF3W4ZEPuYMBN4O4s9ODPXRYz10UIa2grdf2C/ogKGthEVu+cFUYEuwvn\n' +
    'VGL/K62gbjqRJkbO2mY2qos5hNHIbjrAWdi/1eylDRLbqQQbpWO5rZ4Nc8DuCqRa\n' +
    'hAxubgcBKeYuh+o7OOIs5GjvMDreSdHojhemlkYCBjrY3m5WAbCJKQZmibu+Gnlp\n' +
    'NwIDAQAB\n' +
    '-----END PUBLIC KEY-----'

const privateKey = '-----BEGIN RSA PRIVATE KEY-----\n' +
    'MIIEowIBAAKCAQEAjhWLBVFJQXrAr0xwW3MIBk173bxB7egRnuFInfb0NFLkYWnh\n' +
    'Mx4oVmkeBbga6o2+F+9JlHM85I2TUDb02FwUzn0z3EP4HIkj45iJEUX2DHC2rPDw\n' +
    '6NtlC3HsF38L61ywOaCPaKxSEXMWA9Em96uW6dDMR6tdF3W4ZEPuYMBN4O4s9ODP\n' +
    'XRYz10UIa2grdf2C/ogKGthEVu+cFUYEuwvnVGL/K62gbjqRJkbO2mY2qos5hNHI\n' +
    'bjrAWdi/1eylDRLbqQQbpWO5rZ4Nc8DuCqRahAxubgcBKeYuh+o7OOIs5GjvMDre\n' +
    'SdHojhemlkYCBjrY3m5WAbCJKQZmibu+GnlpNwIDAQABAoIBAD7LhaQlf0dZvbQc\n' +
    'B+Ja7hZ/AzoF/Gttb/A0p/fsj5RaeEYXWejSMMiz74lei0LTv0prvqzF24k1iwBe\n' +
    'MYs38xgpnJSCU7Mk50AtB5MjRPHNlObNG+QGJtvOjyX5R+bPEbF+ZTNBSYodv4KT\n' +
    'WvIGG44d8lLQiTWXmRVzMnT/OMwqO6qQs/dXHHg5m6slyYKG9INovK+94vsI8TmY\n' +
    '2Ac6Wa0IoGWdhzwrD9V1uqc1JTqxHgyUQuXa7bZN+50HOhPeOCvKUChwAzqb/9TV\n' +
    '/vlGZRJpddTtwGCrs0+9GDjULLtVFMsB/LiBgeSBM+1pIKnkA2ekIuSgDFJMGUph\n' +
    'N58fBGkCgYEA6P7f9dC3YjAnOUFhXCAf93m4KQQAXTYTGC3VLsYHUsf05BpnEQSG\n' +
    'QVHwkHEa6SUe4nedxE4ENri+uGFMeFTEbOKUcTsEyigXC3WbTmf5Df4eJKFxu+kq\n' +
    'zUwOCKeTonllTC7zbtLtrT7Skz4a0EshEkkbHGUP4s836KKXjS06ppkCgYEAnBzR\n' +
    'fku64smZSqJqN+5FUPzW/AdkqCsuT/lCJVIoeC7GkwmxZC66OqgnNG3LcCtO5Ixc\n' +
    '7eaPyGbqrrjof5jKWMj8eIU/No8noO9tmc77TRTp8SoH44AzKZeZZa9pTGYcTJh1\n' +
    'Hn3OOZYHfXq59drcJJUyUuMpt125BKPhi4xgAE8CgYAJW3MTJDa5MsXgfseyM3gV\n' +
    'MEY9H3QESk+qAO02260fnfgv0P+ip1Pc+7V1l5VFF8CNx9AGOjvhFrpSHVY83uqk\n' +
    'lNTxVzVyCPoj860xEOvnq/T586Hlsg+N/yfxIQnE1KtEy/3qzX3OH1/FmhDpnJrP\n' +
    'aTA1i7l/mmLcbOs5OD/KwQKBgHjD6mPzHY2XOth7sAO4dTLjhUPOTFWzoc4IGt1Y\n' +
    'IypltQPGOc4wP6xkrH9oeDo7pnozAyiedZgn1WB4dpNOlSn9wSFSosYIFDXxQi37\n' +
    '6neEuDzxsMyTPgDs36PEAIczbqzqO5/s3n25y+2L5ROFzUsXh6iLRpgtDpXCWRZk\n' +
    '71cNAoGBAJj8XGq/JOw5BOJuothgDypaWW/y0rTvs2IAEEzL6RBocEENMYPIcjyG\n' +
    'DadderreaKWyomgaSix6eMfNdn8wnpEgbv4S5BEOn3O0rYtgjHYahLCFTTqGlwjP\n' +
    '2iVvLLMmQsx5iOmFGQsOjoAzEfg5XkFVXGfVYUKW9E+XjJNr8Edd\n' +
    '-----END RSA PRIVATE KEY-----'

export const encrypt = (data: string, options: optionsType) => {
    options = Object.assign({publicKey}, options)
    let str = data;
    if (typeof data === 'object') {
        str = JSON.stringify(data);
    }
    const encrypted = new JSEncrypt();
    if (options.publicKey != null) {
        encrypted.setPublicKey(options.publicKey);
    }
    return encrypted.encrypt(str); // 非对称加密字符串
}

export const decrypt = (str: string, options: optionsType) => {
    options = Object.assign({privateKey}, options)
    const decrypted = new JSEncrypt(); // 创建解密对象实例
    if (options.privateKey != null) {
        decrypted.setPrivateKey(options.privateKey);
    } // 设置私钥
    return decrypted.decrypt(str); // 非对称解密内容
}

export const aesEncrypt = (data: any, options: optionsType) => {
    options = Object.assign({key, iv}, options)
    let str = data;
    if (typeof data === 'object') {
        str = JSON.stringify(data);
    }
    str = CryptoJS.enc.Utf8.parse(str);
    if (options.key != null && options.iv != null) {
        const crypto = CryptoJS.AES.encrypt(str, CryptoJS.enc.Utf8.parse(options.key), {
            iv: CryptoJS.enc.Utf8.parse(options.iv),
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7,
        });
        return crypto.toString(); // 对称加密内容
    }
}

export const aesDecrypt = (data: any, options?: optionsType) => {
    options = Object.assign({key, iv}, options)
    if (options.key != null && options.iv != null) {
        const decrypt = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(options.key), {
            iv: CryptoJS.enc.Utf8.parse(options.iv),
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7,
        });
        return CryptoJS.enc.Utf8.stringify(decrypt); // 对称解密内容
    }
}

export const getNanoid = (size = 12) => {
    const nanoid = customAlphabet(alphabet.join(''), size);
    return nanoid();
}


