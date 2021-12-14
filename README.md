# serialize-sanity-path

This utility can be used to serialize a sanity "Path" as a object accessor string.
The code was pulled from `@sanity/import/src/serializePath.js` and converted into TypeScript.

The utility can be useful for Sanity custom inplut plugin developers.

## Example
```js
import { serializePath } from 'serialize-sanity-path';
const serialized = serializePath(path);
```