---
layout: relation
title: 'fixed'
redirect_from: "eu/dep/mwe.html"
shortdef: 'multi-word expression'
---

`fixed`, the multi-word expression (modifier) relation, is one of the three relations (compound, mwe, name) for compounding. It is used for certain fixed grammaticized expressions that behave like function words or short adverbials.

*Eskolatik irten ondoren, beste hainbat gauza ikasten dituzte, **besteak beste** pianoa eta artea .*

*After leaving school, he/she learns some other things, **among others** piano and art .*

~~~ sdparse
Eskolatik irten ondoren, beste hainbat gauza ikasten dituzte, besteak beste pianoa eta artea . \n After leaving school, he/she also learns some other things, among others piano and art .

nmod(irten-2, Eskolatik-1)
advcl(ikasten-7, irten-2)
advcl(irten-2, ondoren-3)
det(hainbat-5, beste-4)
det(gauza-6, hainbat-5)
dobj(ikasten-7, gauza-6)
aux(ikasten-7, dituzte-8)
advmod(besteak-9, ikasten-7)
mwe(besteak-9, beste-10)
conj(beste-10, pianoa-11)
cc(pianoa-11, eta-12)
conj(pianoa-11, artea-13)
punct(besteak-9, .-14)
~~~


*Hakkinen baino sendoago ari da, **argi eta garbi** .* 

*He/she is stronger than Hakkinen, **as clear as water** .*

~~~ sdparse
Hakkinen baino sendoago ari da, argi eta garbi . \n Hakkinen than stronger is, as clear as water .

nsubj(baino-2, Hakkinen-1)
advmod(da-5, baino-2)
aux(da-5, ari-4)
cop(sendoago-3, da-5)
advmod(da-5, argi-6)
mwe(argi-6, eta-7)
mwe(argi-6, garbi-8)
punct(sendoago-3, .-9)
~~~




<!-- Interlanguage links updated Út zář 29 20:31:52 CEST 2020 -->
