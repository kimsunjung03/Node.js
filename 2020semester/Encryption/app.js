const crypto = require('crypto');

crypto.createHash('sha512').update('비밀번호').digest('base64');

crypto.randomBytes(64,(err, buf)=>{
    crypto.pbkdf2('비밀번호', buf.toString('base64'), 100000, 64, 'sha512', (err, key)=>{
        console.log(key.toString('base64'));
    });
});

crypto.pbkdf2('입력비밀번호', '기존salt', 100000, 64, 'sha512', (err, key)=>{
    console.log(key.toString('base64')==='기존 비밀번호');
});

//양방향 암호화<비대칭형 암호화>
/*
const cipher = crypto.createCipheriv('aes-256-ccm', 'key');
let result = cipher('뭐든 들어가겠지', 'utf8', 'base64');
result += cipher.final('base64');
*/