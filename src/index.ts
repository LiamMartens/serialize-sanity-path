import type { Path } from '@sanity/types';

/**
 * @README this function comes from @sanity/import/src/serializePath.js
 * Just pulled it apart and typed it as it can be useful standalon
 */
export function serializePath(path: Path) {
  return path.reduce((target, part, i) => {
    const isIndex = typeof part === 'number';
    const isNumericStringKey = !isIndex && typeof part === 'string' && isFinite(parseInt(part, 10));
    const seperator = i === 0 ? '' : '.'
    if (!isIndex && !isNumericStringKey) {
      return `${target}${seperator}${part}`
    }

    const add = isIndex ? `[${part}]` : `["${part}"]`
    return `${target}${add}`
  }, '');
}