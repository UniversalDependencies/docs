---
layout: entry
title:  'advmod:quantmod'
shortdef : 'quantification modifier'
---

*Quantification modifiers* (`advmod:quantmod`) are quantifiers that
modify a numerical expression. Certain adverbs (and ad-adjectives,
which are sometimes regarded a separate category from adverbs but
treated identically in TDT) and few adjectives are allowed as
quantifiers.

Note that adverbs that describe the writer's attitude towards the
quantity, such as _vain_ "only", are not considered quantification
modifiers, but regular adverb modifiers, although they modify the
number. Some examples of words that can act as quantification
modifiers include _noin_ "about", _vähintään_ "at least", _lähes_
"almost" and _yli_ "over".

<!-- fname:quantmod.pdf -->
~~~ sdparse
Alue oli suuruudeltaan noin kymmenen neliökilometriä . \n The_area was of_its_size about ten square_kilometres .
nsubj-cop(neliökilometriä-6, Alue-1)
cop(neliökilometriä-6, oli-2)
nmod(neliökilometriä-6, suuruudeltaan-3)
advmod:quantmod(kymmenen-5, noin-4)
num(neliökilometriä-6, kymmenen-5)
punct(neliökilometriä-6, .-7)
~~~
