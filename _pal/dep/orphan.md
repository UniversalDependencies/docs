---
layout: relation
title: 'orphan'
shortdef: '<shortdef>'
udver: '2'
---

The orphan relation is used in cases of head ellipsis where simple promotion would result in an unnatural and misleading dependency relation.

- "(One) cannot turn the essence of the good one to wickedness by whatever means, nor the essence of the bad one to goodness in any way."
~~~ sdparse
ud gōhr ī nēk pad tisiz čārag ō wattarīh ud gōhr ī wad pad ēč ēwēnag ō wehīh wardēnīdan nē šāyēd \n and essence EZ good by at_all means to wickedness and essence EZ bad by any manner to goodness turn not can
cc(šāyēd, ud-10)
advmod(šāyēd, nē)
xcomp(šāyēd, wardēnīdan)
obl(wardēnīdan, wehīh)
case(wehīh, ō-17)
obl(wardēnīdan, ēwēnag)
case(ēwēnag, pad-14)
det(ēwēnag, ēč)
obj(wardēnīdan, gōhr-11)
nmod(gōhr-11, wad)
det(wad, ī-12)
cc(gōhr, ud-1)
nmod(gōhr-2, nēk)
det(nēk, ī-3)
orphan(gōhr-2, čārag)
orphan(gōhr-2, wattarīh)
case(čārag, pad-5)
advmod(čārag, tisiz)
case(wattarīh, ō-8)
dep:conj(šāyēd, gōhr)
~~~
<!-- Interlanguage links updated Út 30. června 2026, 11:00:38 CEST -->
