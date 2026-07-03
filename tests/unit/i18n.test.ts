import { describe, expect, it } from 'vitest';
import { getLocalizedText } from '../../src/lib/i18n';

describe('getLocalizedText', () => {
  it('returns English content when English is selected', () => {
    expect(getLocalizedText({ zh: '产品', en: 'Products' }, 'en')).toBe('Products');
  });

  it('falls back to Chinese when English content is missing', () => {
    expect(getLocalizedText({ zh: '质量' }, 'en')).toBe('质量');
  });
});
