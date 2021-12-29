const fs = require('fs');

export async function createTrade(newRecord) {
    const trades = await getData();
    newRecord.id = await generateId();
    trades.records.push(newRecord);
    await save(trades);
    return newRecord;
}


export function getData() {
    return new Promise((resolve, reject) => {
        fs.readFile('pages/api/jsonFileData/data.json', 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                const json = JSON.parse(data);
                resolve(json);
            }
        });
    });
}

export async function generateId() {
    const trades = await getData();
    const id = trades.records.length + 1;
    return id;
}

export function save(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('pages/api/jsonFileData/data.json', JSON.stringify(data, null, 2), (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

export async function updateJsonTrade(data) {
    let trades = await getData();

    for (var i = 0; i < trades.records.length; i++) {
        if (trades.records[i].ticketNum == data.ticketNum) {
            trades.records[i] = { ...trades.records[i], ...data};
        }
    }
    await save(trades);
}