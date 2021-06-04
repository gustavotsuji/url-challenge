const database = require('../database')
const Url = require('../models/Url')

const getUrl = async url => {
    return await Url.findOne({
        attributes: ['originalUrl', 'shortUrl'],
        where: {
            originalUrl: url
        }
    })
}

async function getShortUrl(shortUrl) {
    return await Url.findOne({
        attributes: ['originalUrl'],
        where: {
            shortUrl
        }
    })
}

getShortUrl().then(res => console.log(res))

const saveUrl = async url => {
    return await Url.upsert(url)
}

const addCount = async shortUrl => {
    const query = `
        UPDATE urls u
        SET u.count_access = u.count_access + 1
        WHERE short_url = :shortUrl
    `
    await database.query(query, {shortUrl})
}

exports.modules = {
    getShortUrl,
    saveUrl,
    addCount
}