import type { GuideSection } from '../types/content';

export const publishingGuide: GuideSection[] = [
{
  type: 'article',
  label: 'Standard article',
  summary: 'Long-form reading with an automatic table of contents and an optional featured product.',
  template: 'article (Default)',
  steps: [
  { title: 'Open the blog editor', detail: 'In Shopify admin go to Online Store → Blog posts → Add blog post. Under Organization, set Blog to “Journal”.' },
  { title: 'Write the title and content', detail: 'Use “Heading 2” for each section. Every Heading 2 becomes a link in the post’s table of contents automatically.' },
  { title: 'Add a featured image', detail: 'Upload a landscape image (1600 × 1000 px or larger). This is used on the Journal page, the homepage and social shares.' },
  { title: 'Write an excerpt', detail: 'One or two sentences. It appears under the title on cards across the site.' },
  { title: 'Add a topic tag', detail: 'Add one of: Nutrition, Horse Care, Seasonal, Behind the Barn. Add the tag “featured” to pin it to the top of the Journal.' },
  { title: 'Optional: feature a product', detail: 'In the “Featured product” field at the bottom of the editor, choose a product to show alongside the post.' },
  { title: 'Publish', detail: 'Set Visibility to Visible (or schedule a date) and click Save.' }],

  fields: [
  { field: 'Title & content', where: 'Main editor', required: true },
  { field: 'Featured image', where: 'Image panel', required: true },
  { field: 'Excerpt', where: 'Excerpt panel', required: true },
  { field: 'Topic tag', where: 'Tags', required: true },
  { field: 'Featured product', where: 'Metafields', required: false }]

},
{
  type: 'photo',
  label: 'Photo story',
  summary: 'Image-first posts with a full-screen gallery viewer. Great for farm days, events and customer horses.',
  template: 'article.photo',
  steps: [
  { title: 'Open the blog editor', detail: 'Online Store → Blog posts → Add blog post, with Blog set to “Journal”.' },
  { title: 'Choose the photo template', detail: 'In the Theme template dropdown (right side), select “photo”. The layout switches automatically — no code needed.' },
  { title: 'Write a short intro', detail: 'One or two paragraphs in the main editor. Keep it brief; the photos do the talking.' },
  { title: 'Upload gallery photos', detail: 'In the “Gallery” field at the bottom, click Select files and add your images in the order you want them shown.' },
  { title: 'Add captions', detail: 'Each photo’s caption comes from its alt text. Go to Content → Files, click an image and fill in Alt text.' },
  { title: 'Set the cover, excerpt and tag', detail: 'Featured image = cover photo. Add an excerpt and a topic tag, then Save.' }],

  fields: [
  { field: 'Theme template = photo', where: 'Theme template', required: true },
  { field: 'Gallery images', where: 'Metafields', required: true },
  { field: 'Captions', where: 'File alt text', required: false },
  { field: 'Cover image', where: 'Image panel', required: true },
  { field: 'Topic tag', where: 'Tags', required: true }]

},
{
  type: 'video',
  label: 'Video post',
  summary: 'A fast-loading video player with clickable chapters and show notes underneath.',
  template: 'article.video',
  steps: [
  { title: 'Upload your video', detail: 'Upload to YouTube or Vimeo first (Unlisted is fine). Copy the share link.' },
  { title: 'Open the blog editor', detail: 'Online Store → Blog posts → Add blog post, with Blog set to “Journal”.' },
  { title: 'Choose the video template', detail: 'In the Theme template dropdown, select “video”.' },
  { title: 'Paste the video link', detail: 'Paste the YouTube or Vimeo link into the “Video URL” field at the bottom of the editor.' },
  { title: 'Optional: add chapters', detail: 'In the “Chapters” field, add one per line, like “1:12 Protein and amino acids”. Viewers can click to jump.' },
  { title: 'Write show notes and publish', detail: 'Use the main editor for notes. Add a featured image (used as the video poster), an excerpt and a topic tag, then Save.' }],

  fields: [
  { field: 'Theme template = video', where: 'Theme template', required: true },
  { field: 'Video URL', where: 'Metafields', required: true },
  { field: 'Chapters', where: 'Metafields', required: false },
  { field: 'Poster image', where: 'Image panel', required: true },
  { field: 'Topic tag', where: 'Tags', required: true }]

}];


export const guideNotes: {title: string;detail: string;}[] = [
{ title: 'Every post shows up', detail: 'The Journal loads 9 posts at a time with a “Load more” button, so older posts are never hidden. You can change this number in the theme editor under Blog → Posts per page.' },
{ title: 'Topics come from tags', detail: 'The topic filters on the Journal are built from your tags. Stick to the four topic tags to keep filters tidy.' },
{ title: 'Homepage updates itself', detail: 'The newest posts appear in “From the Journal” on the homepage automatically, and the Instagram wall refreshes from your account.' }];