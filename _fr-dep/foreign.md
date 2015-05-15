---
layout: relation
title: 'foreign'
shortdef: 'foreign words'
---

The `foreign` relation can be used to label sequences of foreign words. These are given
a linear analysis: the head is the first token in the foreign phrase.

~~~ sdparse
Cet homme était persona non grata \n This man was persona non grata
foreign(persona, non)
foreign(persona, grata)
~~~
