---
layout: relation
title: 'punct'
shortdef: 'punctuation'
udver: '2'
---

This relation is used for any punctuation sign in a clause.

~~~ sdparse
Դուք էք աղ երկրի , \n You are the salt of the earth ;
punct(աղ, ,)
punct(salt, ;)
~~~

Tokens with the relation `punct` always attach to content words (except in cases of ellipsis) and can never have dependents.
Since `punct` is not a normal dependency relation, the usual criteria for determining the head word do not apply.
Instead, we use the following principles:

1. A punctuation mark separating coordinated units is attached to the following conjunct.
2. A punctuation mark preceding or following a subordinated unit is attached to this unit.
3. Within the relevant unit, a punctuation mark is attached at the highest possible node that preserves projectivity.
4. Paired punctuation marks (quotes and brackets) should be attached to the same word unless that would create non-projectivity. This word is usually the head of the phrase enclosed in the paired punctuation.

~~~ sdparse
Շինէ եւ գիւղ մի , եւ անուանէ յիւր անուն Հայկաշէն : \n He also built a village and called it after his own name Haykashēn .
conj(Շինէ, անուանէ)
punct(անուանէ, ,)
~~~

~~~ sdparse
Երանի սգաւորաց , զի նոքա մխիթարեսցին : \n Blessed are those who mourn , for they will be comforted .
punct(մխիթարեսցին, ,)
punct(comforted, ,)
~~~
<!-- Interlanguage links updated Po 11. listopadu 2024, 20:11:27 CET -->
