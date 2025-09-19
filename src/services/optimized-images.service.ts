import brokenimage from './../assets/No_Image_Available.jpg'
export function GetOptimizedImageUrl(url: string) {
  if (!url) return brokenimage;
  const target = 'media/';
  return url.substring(0, url.indexOf(target) + target.length) + "crop/600/400/" + url.substring(url.indexOf(target) + target.length);
}