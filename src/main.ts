import Encryption from './libs/Encryption'

const cText = 'f78D2XXh8tnSc8a5/FE=:0LDv4U8TeV918C/NvPLOpA==';
const secret = 'risk3sixty'
const enc = Encryption(secret);

const plainText = enc.decrypt(cText);
console.log(`Decrypted:    ${cText} -> ${plainText}`);

const reEnc = enc.encrypt(plainText);
console.log(`Re-encrypted: ${reEnc} ?= ${cText}`);
