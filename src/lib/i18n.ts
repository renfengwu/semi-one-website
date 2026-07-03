export type Language = 'zh' | 'en' | 'vi';

export type LocalizedText = {
  zh: string;
  en?: string;
  vi?: string;
};

export function getLocalizedText(text: LocalizedText, language: Language): string {
  if (language === 'en') return text.en ?? text.zh;
  if (language === 'vi') return text.vi ?? text.en ?? text.zh;
  return text.zh;
}
