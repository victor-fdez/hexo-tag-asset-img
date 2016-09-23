'use strict';

var url = require('url');

const PostAsset = hexo.model('PostAsset');
/*
 * Override asset_img tag function with this function. This function
 * does the exact same function as the core asset_img tag, but it also
 * allows for url override 
 */
hexo.extend.tag.register('asset_img', function(args) {
  const assetURL = hexo.config.asset_img_url;
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

  hexo.log.debug(`[hexo-tag-asset-img] override asset_img generating img tag with url: ${assetURL}${hexo.config.root}${asset.path}`);

  return '<img src="' + url + hexo.config.root + asset.path + '" alt="' + alt + '" title="' + title + '">';
});
