const express = require('express');
const fs = require('fs');
const hls = require('hls-server');
const app = express();

app.get('/', (req, res)=> {
    return res.status(200).sendFile(`${_dirname}/client.html`);
})

const server = app.listen(3000);

new hls(server, {
    provider: {
        exists: (req,cb)=>{
            const ext = req.url.split('.').pop();

            if(ext !== 'm3u8' && ext !== 'ts'){
                return cb(null, true);
            }
            fs.access(_dirname + req.url, fs.constants.F_OK, function(err){
                if(err){
                    console.log('File not exist');
                    return cb(null, false);
                }
                cb(null, true);
            });
        },
        getManifestStream: (req, cb) => {
            const stream = fs.createReadStream(_dirname + req.url);
            cb(null, stream);
        },
        getSegmentStream: (req, cb)=>{
            const stream = fs.createReadStream(_dirname + req.url);
            cb(null,stream);
        }
    }
})
