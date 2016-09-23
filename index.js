'use strict';

var url = require('url');

const PostAsset = hexo.model('PostAsset');
//override default asset_img 
hexo.extend.tag.register('asset_img', function(args) {
  const assetURL = hexo.config.cdn_url;
  var url = '';

  var slug = args.shift();
  if (!slug) return;

  var asset = PostAsset.findOne({post: this._id, slug: slug});
  if (!asset) return;

  if (assetURL)
    url = assetURL; 

  // if title is not assigned, set it ''
  var title = args.length ? args.join(' ') : '';
  // alt always exist
  var alt = title || asset.slug;
  hexo.log.debug(`generating new url ${assetURL}${hexo.config.root}${asset.path}`);

  return '<img src="' + url + hexo.config.root + asset.path + '" alt="' + alt + '" title="' + title + '">';
});
