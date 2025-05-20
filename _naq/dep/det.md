---
layout: relation
title: 'det'
shortdef: 'determiner'
udver: '2'
---

The relation determiner (`det`) holds between a nominal head and its determiner.

~~~sdparse
Nē ǃnā-omsa ǁnaraǃnâ tsoatsoa re . \n This room.OBL search start PDIR .
det(ǃnā-omsa, Nē)
det(room-OBL, This)
~~~

~~~sdparse
Mâ gârekhoeba ǁnāpa ? \n Which fool.OBL there ?
det(gârekhoeba, Mâ)
det(fool-OBL, Which)
~~~

Most commonly, a word of POS DET will have the relation `det` and vice versa. The exception in Khoekhoe are possessive determiners _ti_ "my" and _sa_ "your (sing.)", they are given the [DET](naq-pos/DET) POS tag and the [nmod:poss](), so that it is parallel with other possessive constructions relation.

~~~sdparse
Ti ǃomdi ge petrol-i khami ra ham . \n My hands DECL gasoline like IPFV smell .
nmod:poss(ǃomdi, Ti)
nmod:poss(hands, My)
~~~
<!-- Interlanguage links updated So 10. května 2025, 18:15:25 CEST -->
