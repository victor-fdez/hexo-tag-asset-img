# hexo-tag-asset-img

A [Hexo Plugin](https://hexo.io/plugins/) to replace hexo's own tag asset_img + add some cool stuff

## How to install

Add plugin to Hexo:

```bash
npm install hexo-tag-asset-img --save
```

Modify config file with the following configurations:

```yml
asset_img_url: http://mycdnurl.com
```

### asset_img_url

This setting can be used change the url of the images placed your page using {% asset_img %}. If this setting is not provided then it will just use the root url.

