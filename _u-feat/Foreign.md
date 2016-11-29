---
layout: feature
title: 'Foreign'
shortdef: 'is this a foreign word?'
udver: '2'
---

Boolean feature. Is this a foreign word? Not a loan word and not a
foreign name but a genuinely foreign word appearing inside native
text, e.g. inside direct speech, titles of books etc. This feature
would apply either to the [u-pos/X]() part of speech (unanalyzable token), or
to other parts of speech if we know and are willing to annotate the
class to which the word belongs in its original language.

Note: This feature is new in UD version 2. It was used as a language-specific addition in several treebanks in version 1 but it was not considered boolean and three values were foreseen. Since the additional values were used extremely rarely, they are not part of the universal definition of this feature in UD v2.

### `Yes`: it is foreign

Example: [en] _He said I could "<b>dra åt helvete!</b>"_
