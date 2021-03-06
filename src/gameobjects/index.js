/**
 * @namespace Phaser.GameObjects
 */

var GameObjects = {

    LightsManager: require('./LightsManager'),
    LightsPlugin: require('./LightsPlugin'),
    DisplayList: require('./DisplayList'),
    DisplayListPlugin: require('./DisplayListPlugin'),
    UpdateList: require('./UpdateList'),
    UpdateListPlugin: require('./UpdateListPlugin'),
    GameObjectCreator: require('./GameObjectCreator'),
    GameObjectFactory: require('./GameObjectFactory'),

    Components: require('./components'),

    BitmapText: require('./bitmaptext/static/BitmapText'),
    Blitter: require('./blitter/Blitter'),
    DynamicBitmapText: require('./bitmaptext/dynamic/DynamicBitmapText'),
    DynamicTilemapLayer: require('./tilemap/dynamiclayer/DynamicTilemapLayer'),
    Graphics: require('./graphics/Graphics.js'),
    Group: require('./group/Group'),
    Image: require('./image/Image'),
    Particles: require('./particles/ParticleEmitterManager'),
    PathFollower: require('./pathfollower/PathFollower'),
    Sprite3D: require('./sprite3d/Sprite3D'),
    Sprite: require('./sprite/Sprite'),
    StaticTilemapLayer: require('./tilemap/staticlayer/StaticTilemapLayer'),
    Text: require('./text/static/Text'),
    Tile: require('./tilemap/Tile'),
    Tilemap: require('./tilemap/Tilemap'),
    Tileset: require('./tilemap/Tileset'),
    TileSprite: require('./tilesprite/TileSprite'),
    Zone: require('./zone/Zone'),

    //  Game Object Factories

    Factories: {
        Blitter: require('./blitter/BlitterFactory'),
        DynamicBitmapText: require('./bitmaptext/dynamic/DynamicBitmapTextFactory'),
        Graphics: require('./graphics/GraphicsFactory'),
        Group: require('./group/GroupFactory'),
        Image: require('./image/ImageFactory'),
        Particles: require('./particles/ParticleManagerFactory'),
        PathFollower: require('./pathfollower/PathFollowerFactory'),
        Sprite: require('./sprite/SpriteFactory'),
        Sprite3D: require('./sprite3d/Sprite3DFactory'),
        StaticBitmapText: require('./bitmaptext/static/BitmapTextFactory'),
        Text: require('./text/static/TextFactory'),
        Tilemap: require('./tilemap/TilemapFactory'),
        TileSprite: require('./tilesprite/TileSpriteFactory'),
        Zone: require('./zone/ZoneFactory')
    },

    Creators: {
        Blitter: require('./blitter/BlitterCreator'),
        DynamicBitmapText: require('./bitmaptext/dynamic/DynamicBitmapTextCreator'),
        Graphics: require('./graphics/GraphicsCreator'),
        Group: require('./group/GroupCreator'),
        Image: require('./image/ImageCreator'),
        Particles: require('./particles/ParticleManagerCreator'),
        Sprite: require('./sprite/SpriteCreator'),
        Sprite3D: require('./sprite3d/Sprite3DCreator'),
        StaticBitmapText: require('./bitmaptext/static/BitmapTextCreator'),
        Text: require('./text/static/TextCreator'),
        Tilemap: require('./tilemap/TilemapCreator'),
        TileSprite: require('./tilesprite/TileSpriteCreator'),
        Zone: require('./zone/ZoneCreator')
    }

};

if (WEBGL_RENDERER)
{
    //  WebGL only Game Objects
    GameObjects.Mesh = require('./mesh/Mesh');
    GameObjects.Quad = require('./quad/Quad');

    GameObjects.Factories.Mesh = require('./mesh/MeshFactory');
    GameObjects.Factories.Quad = require('./quad/QuadFactory');

    GameObjects.Creators.Mesh = require('./mesh/MeshCreator');
    GameObjects.Creators.Quad = require('./quad/QuadCreator');
}

module.exports = GameObjects;
