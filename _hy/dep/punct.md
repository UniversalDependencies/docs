---
layout: relation
title: 'punct'
shortdef: 'punctuation'
udver: '2'
---

This is used for any piece of punctuation in a clause.
See

~~~ sdparse
Տուն գնա ՛ ։ \n Go home !
punct(գնա, ՛)
punct(Go, !)
punct(գնա, ։)
~~~

Tokens with the relation `punct` always attach to content words (except in cases of ellipsis) and can never have dependents.
Since `punct` is not a normal dependency relation, the usual criteria for determining the head word do not apply.
Instead, we use the following principles:

1. A punctuation mark separating coordinated units is attached to the following conjunct.
2. A punctuation mark preceding or following a subordinated unit is attached to this unit.
3. Within the relevant unit, a punctuation mark is attached at the highest possible node that preserves projectivity.
4. Paired punctuation marks (quotes and brackets) should be attached to the same word unless that would create non-projectivity. This word is usually the head of the phrase enclosed in the paired punctuation.

~~~ sdparse
Մենք ունենք խնձոր , տանձ , նարինջ և բանան ։ \n We have apples , pears , oranges and bananas .
obj(ունենք, խնձոր)
obj(have, apples)
conj(խնձոր, տանձ)
conj(խնձոր, նարինջ)
conj(խնձոր, բանան)
conj(apples, pears)
conj(apples, oranges)
conj(apples, bananas)
cc(բանան, և)
cc(bananas, and)
punct(տանձ, ,-4)
punct(նարինջ, ,-6)
punct(pears, ,-15)
punct(oranges, ,-17)
punct(ունենք, ։)
punct(have, .)
~~~

~~~ sdparse
Նա ոչ ՛ տեսել է , ոչ ՛ լսել ։ \n He has not seen or heard .
cc(տեսել, ոչ-2)
cc(seen, not)
cc(լսել, ոչ-7)
cc(heard, or)
conj(տեսել, լսել)
conj(seen, heard)
punct(ոչ-2, ՛-3)
punct(ոչ-7, ՛-8)
punct(տեսել, ։)
punct(seen, .)
punct(լսել, ,-6)
~~~

~~~ sdparse
Մարդը , ում երեկ տեսել ես , նորից է եկել ։ \n Man , whom you-have yesterday seen , came again .
punct(տեսել, ,-2)
punct(seen, ,-14)
punct(տեսել, ,-7)
punct(seen, ,-19)
punct(եկել, ։)
punct(came, .)
~~~

~~~ sdparse
« Օր . » հապավումը նշանակում է օրինակ ։ \n The-abbreviation “ eg . ” means for-example .
punct(Օր, .-3)
punct(eg, .-14)
punct(Օր, «)
punct(eg, “)
punct(Օր, »)
punct(eg, ”)
punct(նշանակում, ։)
punct(means, .-18)
~~~
<!-- Interlanguage links updated Út zář 29 18:41:35 CEST 2020 -->
