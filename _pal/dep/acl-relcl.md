---
layout: relation
title: 'acl:relcl'
shortdef: '<shortdef>'
udver: '2'
---

The `acl:relcl` relation is used for a relative clause modifier of a nominal. 

The nominal headword (aka antecedent) of the relative clause usually precedes the relative clause and can be resumed in it. As with New Persian, there are attestations of antecedent marking by means of the specifier _=ēw_ (probably pronounced _ī_ at that time). The relativizer is in most cases not pronominal.<br>Middle Persian relative clauses are finite and can be dislocated.

- "(it) took away the things which have fallen there"
~~~ sdparse
tis =ēw ī ān gyāg kaft ēstēd bē barēd \n thing one REL that place fallen stands away carries
det(tis, =ēw)
mark(kaft, ī)
acl:relcl(tis, kaft)
~~~

- "The righteous man is a being who has accepted the mission for which he was created."
~~~ sdparse
mard ī ašō dām ast kē =š grift ān xwēškārīh ī awi =š āfurrīhist \n man EZ righteous creature is REL he took that task REL to it was_created
mark(grift, kē)
nsubj(grift, =š)
acl:relcl(grift, dām)
mark(āfurrīhist, ī)
obl(āfurrīhist, =š)
acl:relcl(xwēškārīh, āfurrīhist)
~~~

- "And there is a place where noxious creatures tear them apart just like dogs (tear apart) bones."
~~~ sdparse
ud hast gyāg kū =šān xrastar ēdōn kirrēnēnd čiyōn sag astuxān \n and is place where them noxious_creatues so tear.3pl how dog bone
obl:lmod(kirrēnēnd, kū)
acl:relcl(gyāg, kirrēnēnd)
~~~

If the relative clause is a nominal clause and introduced by the relativizer _ī_, it is not always possible to distinguish it from an _ezāfe_ construction, where a nominal attribute is linked by the _ezāfe_ particle _ī_ to its headword. The copular verb is often missing in nominal clauses so that, formally, _mihrēn ī=m pid_ can be interpreted as "my father Mihrēn" or as "Mihrēn, wo (is) my father".

- relative clause: "the vitalising spirit, which (is) between soul (and) body"
- nominal modifier: "the vitalising spirit between soul (and) body"
~~~ sdparse
mēnōy ī zīyēnāg ī andarg ruwān tan \n spirit EZ vitalising REL between soul body
mark(ruwān, ī)
acl:relcl(mēnōy, ruwān)
~~~
~~~ sdparse
mēnōy ī zīyēnāg ī andarg ruwān tan \n spirit EZ vitalising EZ between soul body
det(ruwān, ī)
nmod(mēnōy, ruwān)
~~~

<!-- Interlanguage links updated Út 30. června 2026, 10:59:27 CEST -->
