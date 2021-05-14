---
layout: relation
title: 'punct'
shortdef: 'punctuation'
udver: '2'
---

This is used for any piece of punctuation in a clause.
See

~~~ sdparse
Jdi domů ! \n Go home !
punct(Jdi, !-3)
punct(Go, !-7)
~~~

Tokens with the relation `punct` always attach to content words (except in cases of ellipsis) and can never have dependents.
Since `punct` is not a normal dependency relation, the usual criteria for determining the head word do not apply.
Instead, we use the following principles:

1. A punctuation mark separating coordinated units is attached to the following conjunct.
2. A punctuation mark preceding or following a subordinated unit is attached to this unit.
3. Within the relevant unit, a punctuation mark is attached at the highest possible node that preserves projectivity.
4. Paired punctuation marks (quotes and brackets) should be attached to the same word unless that would create non-projectivity. This word is usually the head of the phrase enclosed in the paired punctuation.

~~~ sdparse
Máme jablka , hrušky , pomeranče a banány . \n We-have apples , pears , oranges and bananas .
obj(Máme, jablka)
obj(We-have, apples)
conj(jablka, hrušky)
conj(jablka, pomeranče)
conj(jablka, banány)
conj(apples, pears)
conj(apples, oranges)
conj(apples, bananas)
cc(banány, a)
cc(bananas, and)
punct(hrušky, ,-3)
punct(pomeranče, ,-5)
punct(pears, ,-13)
punct(oranges, ,-15)
~~~

~~~ sdparse
Muž , kterého jste včera viděl , přišel zas . \n Man , whom you-have yesterday seen , came again .
punct(viděl, ,-2)
punct(seen, ,-13)
punct(viděl, ,-7)
punct(seen, ,-18)
punct(přišel, .-10)
punct(came, .-21)
~~~

~~~ sdparse
Zkratka např . znamená „ například “ . \n The-abbreviation eg . means “ for-example ” .
punct(např, .-3)
punct(eg, .-12)
punct(například, „-5)
punct(for-example, “-14)
punct(například, “-7)
punct(for-example, ”-16)
punct(znamená, .-8)
punct(means, .-17)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:09:21 CEST 2021 -->
