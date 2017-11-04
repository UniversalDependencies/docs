---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier'
---

The `nmod` relation is used for nominal modifiers. They depend either
on another noun (group “noun dependents”) or on a predicate (group
“non-core dependents of clausal predicates”).

`nmod` is a [noun](u-pos/NOUN) (or noun phrase) functioning as a
non-core (oblique) argument or adjunct.
This means that it functionally corresponds to an adverbial when it attaches to a verb, adjective or other adverb.
But when attaching to a noun, it corresponds to an attribute, or genitive complement (the terms are less standardized here).


- the possessive alternation:

~~~ sdparse
Купих й плат за рокля . \n Bought-I her.CLITIC cloth for dress  .
nmod(плат, рокля)
nmod(cloth, dress)
~~~

- `nmod` is also used for temporal nominal modifiers:

~~~ sdparse
Валя цяла нощ . \n Rained-it all night .
nmod(Валя, нощ)
nmod(Rained-it, night)
~~~

- predicate modification:

~~~ sdparse
От всички маси ги следяха враждебни погледи . \n From all tables them.CLITIC followed hostile gazes  .
nmod(следяха, маси)
nmod(followed, tables)
~~~

- noun-noun modification:

~~~ sdparse
Най-често Йовка мислеше за стринка си Елка . \n More-often Yovka was-thinking about aunt her.REFL Elka  .
nmod(стринка, Елка)
nmod(aunt, Elka)
~~~
