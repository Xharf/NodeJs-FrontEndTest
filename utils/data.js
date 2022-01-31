const fs = require('fs');

if(!fs.existsSync('./data.json')){
    fs.writeFileSync('./data.json', '[]');
}

const getData = () => {
    const data = fs.readFileSync('./data.json');
    return JSON.parse(data);
}

module.exports = {
    getData,
}