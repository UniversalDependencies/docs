---
layout: relation
title: 'fixed'
shortdef: 'fixed multi-word expression'
udver: '2'
---

`fixed`, the multi-word expression (modifier) relation, is one of the three relations (compound, mwe, name) for compounding. It is used for certain fixed grammaticized expressions that behave like function words or short adverbials.

*Eskolatik irten ondoren, beste hainbat gauza ikasten dituzte, **besteak beste** pianoa eta artea .*

*After leaving school, he/she learns some other things, **among others** piano and art .*

~~~ sdparse
Eskolatik irten ondoren , beste hainbat gauza ikasten dituzte , besteak beste pianoa eta artea . \n After leaving school , he/she also learns some other things , among others piano and art .

nmod(irten-2, Eskolatik-1)
advcl(ikasten-8, irten-2)
advcl(irten-2, ondoren-3)
det(hainbat-6, beste-5)
det(gauza-7, hainbat-6)
dobj(ikasten-8, gauza-7)
aux(ikasten-8, dituzte-9)
advmod(besteak-11, ikasten-8)
mwe(besteak-11, beste-12)
conj(beste-12, pianoa-13)
cc(pianoa-13, eta-14)
conj(pianoa-13, artea-15)
punct(besteak-11, .-16)
punct(besteak-11, ,-4)
punct(besteak-11, ,-10)
~~~


*Hakkinen baino sendoago ari da, **argi eta garbi** .*

*He/she is stronger than Hakkinen, **as clear as water** .*

~~~ sdparse
Hakkinen baino sendoago ari da , argi eta garbi . \n Hakkinen than stronger is , as clear as water .

nsubj(baino-2, Hakkinen-1)
advmod(da-5, baino-2)
aux(da-5, ari-4)
cop(sendoago-3, da-5)
advmod(da-5, argi-7)
mwe(argi-7, eta-8)
mwe(argi-7, garbi-9)
punct(sendoago-3, .-10)
punct(sendoago-3, ,-6)
~~~


<!-- Interlanguage links updated Pá kvě 14 11:09:05 CEST 2021 -->
