import { describe, expect, it } from 'vitest';
import { getLocalizedText } from '../../src/lib/i18n';

describe('getLocalizedText', () => {
  it('returns English content when English is selected', () => {
    expect(getLocalizedText({ zh: '产品', en: 'Products' }, 'en')).toBe('Products');
  });

  it('falls back to Chinese when English content is missing', () => {
    expect(getLocalizedText({ zh: '质量' }, 'en')).toBe('质量');
  });

  it('returns Vietnamese content and falls back through English when needed', () => {
    expect(getLocalizedText({ zh: '产品', en: 'Products', vi: 'Sản phẩm' }, 'vi')).toBe('Sản phẩm');
    expect(getLocalizedText({ zh: '技术', en: 'Technology' }, 'vi')).toBe('Technology');
  });
});
