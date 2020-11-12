---
layout: relation
title: 'punct'
shortdef: 'punctuation'
---

This is used for any piece of punctuation in a clause.

~~~ sdparse
Иди домой ! \n Go home !
punct(Иди, !-3)
punct(Go, !-7)
~~~

Tokens with the relation `punct` always attach to content words (except in cases of ellipsis) and can never have dependents.
Since `punct` is not a normal dependency relation, the usual criteria for determining the head word do not apply. 
Instead, we use the following principles:

1. A punctuation mark separating coordinated units is attached to the first conjunct.
2. A punctuation mark preceding or following a subordinated unit is attached to this unit.
3. Within the relevant unit, a punctuation mark is attached at the highest possible node that preserves projectivity.
4. Paired punctuation marks (quotes and brackets) should be attached to the same word unless that would create non-projectivity. This word is usually the head of the phrase enclosed in the paired punctuation.

~~~ sdparse
Мы покупаем яблоки , груши , апельсины и бананы . \n We buy apples , pears , oranges and bananas .
obj(покупаем, яблоки)
obj(buy, apples)
conj(яблоки, груши)
conj(яблоки, апельсины)
conj(яблоки, бананы)
conj(apples, pears)
conj(apples, oranges)
conj(apples, bananas)
cc(яблоки, и)
cc(apples, and)
punct(яблоки, ,-4)
punct(яблоки, ,-6)
punct(apples, ,-15)
punct(apples, ,-17)
~~~

~~~ sdparse
Мужчина , которого ты вчера видел , пришёл снова . \n Man , whom you-have yesterday seen , came again .
punct(видел, ,-2)
punct(seen, ,-13)
punct(видел, ,-7)
punct(seen, ,-18)
punct(пришёл, .-10)
punct(came, .-21)
~~~

~~~ sdparse
Аббревиатура напр . означает " например " . \n The-abbreviation eg . means " for-example " .
punct(напр, .-3)
punct(eg, .-12)
punct(например, "-5)
punct(for-example, "-14)
punct(например, "-7)
punct(for-example, "-16)
punct(означает, .-8)
punct(means, .-17)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:38 CET 2020 -->
