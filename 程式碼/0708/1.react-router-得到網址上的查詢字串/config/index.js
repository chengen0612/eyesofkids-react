const config = {
  debug: true,
  devUrl: 'http://localhost:3000',
  prodUrl: 'https://mycom.tw',
}

let imgBaseUrl = config.debug ? config.devUrl : config.prodUrl

export { imgBaseUrl }
