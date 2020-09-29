---
layout: relation
title:  'foreign'
shortdef : 'foreign'
---

The dependency relation `foreign` is used to label sequences
of unanalyzed foreign words. These are annotated without regard
to internal structure, marking all words in the sequence direct
dependents of the head. The head is the first word of the foreign phrase.

Note that `foreign` does not apply to foreign *names*, which
are annotated using [flat](), or to sequences of *analyzed* words
of foreign origin (such as established loanwords), which are
annotated with their full syntactic structure.

~~~ sdparse
Opimme fyysikoiden Let's assume a spherical cow -lähestymistavan .
dobj(Opimme-1, -lähestymistavan-8)
nmod:poss(-lähestymistavan-8, fyysikoiden-2)
compound:nn(-lähestymistavan-8, Let's-3)
foreign(Let's-3, assume-4)
foreign(Let's-3, a-5)
foreign(Let's-3, spherical-6)
foreign(Let's-3, cow-7)
punct(Opimme-1, .-9)
~~~

<!-- Interlanguage links updated Út zář 29 20:31:53 CEST 2020 -->
