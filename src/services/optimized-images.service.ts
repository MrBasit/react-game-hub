export function GetOptimizedImageUrl(url: string) {
  const target = 'media/';
  return url.substring(0, url.indexOf(target) + target.length) + "crop/600/400/" + url.substring(url.indexOf(target) + target.length);
}