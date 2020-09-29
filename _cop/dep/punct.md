---
layout: relation
title: 'punct'
shortdef: 'punctuation'
udver: '2'
---

The function for punctuation. When annotating in Arborator, it can be left as a root function, i.e. punctuation does not depend on any other word in the sentence, to facilitate visibility. In the released treebank, a single tree form is desired, and punctuation is attached to the local root of the clause, based on general UD guidelines and the implementation in udapi. This is done automatically, and annotators do not need to worry about where to attach punctuation.

~~~ sdparse
ⲁⲛⲟⲕ/PRON ./PUNCT \n I.

punct(.)
root(ⲁⲛⲟⲕ) 
~~~

<!-- Interlanguage links updated Út zář 29 20:23:43 CEST 2020 -->
