// @ts-ignore
import { Deck } from '@deck.gl/core';
import { MVTStyleLater } from './index'

const sourcesURL = 'https://tileserver-dev.geolonia.com/v1/tiles.json?key=YOUR-API-KEY'
const styleURL = 'https://cdn.geolonia.com/style/geolonia/basic/en.json'

const main = async () => {
    const sources = await fetch(sourcesURL).then(res => res.json())
    const style = await fetch(styleURL).then(res => res.json())
    const tileURLs = sources.tiles

    const layer = new MVTStyleLater(tileURLs, style)
    new Deck({
        initialViewState: {
          longitude: 135.506306,
          latitude: 34.652499,
          zoom: 10,
          maxZoom: 20,
          pitch: 0,
          bearing: 0
        },
        controller: true,
        
        layers: [layer]
      });
}
main()
