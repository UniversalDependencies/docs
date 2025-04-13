---
udver: '2'
layout: relation
title: 'advmod'
shortdef: 'adverbial modifier'
---

The relation `advmod` is used for adverbs and adverbial phrases that modify another word.
It is not used for adverbially used prepositional phrases (these are [obl]()), nor for
adverbial clauses (these are [advcl]()).

The negation [particle](/u/pos/PART.html) _nicht_ “not” also receives the relation `advmod`.
However, a different approach is taken to the negative [determiner](/de/pos/DET.html)
_kein_ “no”, which receives either the [det]() relation, or one of the other relations
for nominal dependents if it heads a nominal.

~~~ sdparse
Kannst du schneller laufen ? \n Can you run faster ?
advmod(laufen, schneller)
~~~

~~~ sdparse
Das ist nicht viel . \n This is not much .
advmod(viel, nicht)
~~~

Note that adverbs can also modify other adverbs:

~~~ sdparse
Er weiß es möglicherweise selbst noch nicht . \n He possibly does not know it himself yet .
advmod(weiß, möglicherweise)
advmod(weiß, selbst)
advmod(weiß, nicht)
advmod(nicht, noch)
~~~
<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:19 CET -->
