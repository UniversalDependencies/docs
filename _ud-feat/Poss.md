---
layout: base
title: 'Poss'
shortdef: 'possessive'
---

## {{ page.title }}: {{ page.shortdef }}

Boolean feature. Is this pronoun or adjective possessive? Many
tagsets would have this as another value of "prontype". That would be
a bad solution because possessivity is orthogonal to "prontype".
Several of the prontypes can be optionally possessive, and adjectives
can too.

### Yes: it is possessive

Note that there is no "no" value. If the word is not possessive, the
"poss" feature will just not be mentioned in the FEAT column. (Which
means that empty value has the "no" meaning.) 

Examples: [en] my, your, his, mine, yours, whose 

Adjectival examples: [cs] otcův (father's), matčin (mother's)
