---
layout: relation
title: 'case:pre'
shortdef: 'prefixed preposition'
udver: '2'
---

We use `case:pre` for prepositions that are written as prefixes and segmented from the following word: the objective marker ን- / *n-*, ብ- / *b-* "with, by", and ናይ / *nay* "of" when written together with a determiner (ናይቲ / *nayti*). Prepositions written as separate words, such as ኣብ / *ʔab* "in", ካብ / *kab* "from" and ናብ / *nab* "to", are annotated as [case](https://universaldependencies.org/u/dep/case.html). A prefixed preposition is attached to the word it is written on, which is the determiner when the noun has one.

~~~ sdparse
ካሌብ ን- እቲ ቢኬሪ ሰቢሩዎ ። \n Caleb OBJ the glass break.CONV.Sb3sm.Ob3sm .
nsubj(ሰቢሩዎ, ካሌብ)
case:pre(ቢኬሪ, ን-)
det(ቢኬሪ, እቲ)
obj(ሰቢሩዎ, ቢኬሪ)
~~~

"Caleb broke the glass." (ti_ref_11)

~~~ sdparse
እቲ መንገዲ ብ- ማይ ተባሕጒጉ ። \n the road with water erode.PASS.CONV.Sb3sm .
det(መንገዲ, እቲ)
nsubj:pass(ተባሕጒጉ, መንገዲ)
case:pre(ማይ, ብ-)
obl(ተባሕጒጉ, ማይ)
~~~

"The road was eroded with water." (ti_ref_16)
<!-- Interlanguage links updated Út 10. listopadu 2026, 22:38:25 CET -->
