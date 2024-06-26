// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const data = require('./static/data.json')
const nodeExternals = require('webpack-node-externals')
const _ = require('lodash')

module.exports = function (api) {
  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          allowlist: [/^vuetify/]
        })
      ])
    }
  })

  for (const session of data.sessions) {
    api.loadSource(store => {
      const collection = store.addCollection('Session')
      var speaker = _.kebabCase(session.speaker)
      var title = _.kebabCase(session.title)
      var path = `/${speaker}/${title}`

      collection.addNode({
        id: undefined,
        speaker: session.speaker,
        speaker2: session.speaker2,
        bio: session.bio,
        bio2: session.bio2,
        title: session.title,
        summary: session.summary,
        abstract: session.abstract,
        time: session.time,
        room: session.room,
        website: session.website,
        twitter: session.twitter,
        linkedin: session.linkedin,
        website2: session.website2,
        linkedin2: session.linkedin2,
        twitter2: session.twitter2,
        youtube: session.youtube,
        youtube2: session.youtube2,
        shortbio: session.shortbio,
        shortbio2: session.shortbio2,
        slidesLink: session.slidesLink,
        path
      })
    })
  }
}
