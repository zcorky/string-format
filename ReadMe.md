# String-format
> @DEPRIATED use @zodash/format instead of

### What & Why ?
* Like python format, I need format for js.

### How to

```
import 'string-format';

// 1 Format Object
'Author: {author}, From: ${from}'.format({ author: 'Zero', from: 'China' });

// 2 Format Array
'Author: {author}, From: ${from}'.format(['Zero', 'China']);

// 3 Format String
'Author: {author}, From: ${from}'.format('Zero', 'China');
```
