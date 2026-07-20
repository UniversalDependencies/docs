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
case(wehīh, ō)
obl(wardēnīdan, ēwēnag)
case(ēwēnag, pad)
det(ēwēnag, ēč)
obj(wardēnīdan, gōhr)
nmod(gōhr, wad)
det(wad, ī-12)
cc(gōhr, ud-1)
nmod(gōhr, nēk)
det(nēk, ī-3)
orphan(gōhr, čārag)
orphan(gōhr, wattarīh)
case(čārag, pad)
advmod(čārag, tisiz)
case(wattarīh, ō)
dep:conj(šāyēd, gōhr)
~~~
<!-- Interlanguage links updated Út 30. června 2026, 11:00:38 CEST -->
