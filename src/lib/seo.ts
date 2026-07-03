export type PageMeta = {
  title: string;
  description: string;
};

export function applyPageMeta(meta: PageMeta) {
  document.title = meta.title;
  let description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (!description) {
    description = document.createElement('meta');
    description.name = 'description';
    document.head.append(description);
  }
  description.content = meta.description;
}
