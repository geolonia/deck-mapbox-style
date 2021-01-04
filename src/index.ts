//@ts-ignore
import { MVTLayer } from '@deck.gl/geo-layers';

export class MVTStyleLater extends MVTLayer {
    constructor(tileURLs: string[], style: object) {
        super({
            id: 'MVTLayer',
            data: tileURLs,
            getLineColor: [192, 192, 192],
            getFillColor: (f: any) => {
                console.log(f)
                return [140, 170, 180]
            },
            getLineWidth: (f: any) => {
              switch (f.properties.class) {
                case 'street':
                  return 6;
                case 'motorway':
                  return 10;
                default:
                  return 1;
              }
            },
            lineWidthMinPixels: 1,
            
            /* props from MVTLayer class */
            
            // highlightedFeatureId: null,
            // uniqueIdProperty: '',
            
            /* props inherited from TileLayer class */
            
            // extent: null,
            // getTileData: null,
            // maxCacheByteSize: null,
            // maxCacheSize: null,
            // maxRequests: 6,
            maxZoom: 23,
            minZoom: 0,
            // onTileError: null,
            // onTileLoad: null,
            // onTileUnload: null,
            // onViewportLoad: null,
            // refinementStrategy: 'best-available',
            // renderSubLayers: null,
            // tileSize: 512,
            // zRange: null,
            
            /* props inherited from Layer class */
            
            // autoHighlight: false,
            // coordinateOrigin: [0, 0, 0],
            // coordinateSystem: COORDINATE_SYSTEM.LNGLAT,
            // highlightColor: [0, 0, 128, 128],
            // modelMatrix: null,
            // opacity: 1,
            // pickable: false,
            // visible: true,
            // wrapLongitude: false,
          })
    }
}
