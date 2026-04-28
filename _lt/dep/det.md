---
layout: relation
title: 'det'
shortdef: 'determiner'
udver: '2'
---

The relation determiner `det` holds between a nominal head and its determiner.
This relation is used for adjectival pronouns that function as agreeing modifiers, as well as for
multiword expressions formed from such pronouns (1). Non-pronominal adjectives are
tagged [ADJ]() and the relation is labeled [amod]() (2).

~~~ sdparse
Po kiemą vaikštinėjo kažkokia katė . \n Some-kind-of cat was-wandering around the-yard .
det(katė, kažkokia)
det(cat, Some-kind-of)
~~~

~~~ sdparse
Aukšta garso kokybė . \n High sound quality .
amod(kokybė, Aukšta)
amod(quality, High)
~~~

Relative pronouns (_kuris, kuri, ”whitch” / “that”_) are morphologically tagged as [DET](), but in a subordinate
clause the relation is labeled [nsubj](), [obj](), [iobj](), [obl](), or [obl:arg](), depending on how the noun
replacing these pronouns would be annotated (3). In interrogative sentences, however, their
relation is labeled det, because an interrogative pronoun, when used together with a noun,
agrees with it and does not take over the function of the noun (4).

~~~ sdparse
Namas , kurį aš pirkau . \n The-house that I bought .
obj(pirkau, kurį)
obj(bought, that)
~~~

~~~ sdparse
Kurio namo jūs norite ? \n Which house do you want ?
det(namo, Kurio)
det(house, Which)
~~~
