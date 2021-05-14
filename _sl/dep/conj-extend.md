---
layout: relation
title: 'conj:extend'
shortdef: 'open/incomplete conjunct'
udver: '2'
---

The `conj:extend` subtype of the [conj]() relation is used in spoken data for incomplete last
conjuncts in coordination that suggest some unexpressed continuation. A coordinating conjunction
is almost always present but the conjunct is typically a function expression whose type does not
directly reflect the type of the previous conjuncts.

~~~ sdparse
prav tako kako se napiše nekaj sedaj vedno in te \n right so how to write something now always and these
conj:extend(sedaj, te)
conj(sedaj, vedno)
cc(te, in)
conj:extend(now, these)
conj(now, always)
cc(these, and)
~~~

<!-- Interlanguage links updated Pá kvě 14 11:08:58 CEST 2021 -->
