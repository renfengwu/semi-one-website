export type Language = 'zh' | 'en';

export type LocalizedText = {
  zh: string;
  en?: string;
};

export function getLocalizedText(text: LocalizedText, language: Language): string {
  return language === 'en' ? (text.en ?? text.zh) : text.zh;
}
