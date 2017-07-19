---
layout: relation
title:  'goeswith'
shortdef : 'goes with'
udver: '2'
---

This relation links two parts of a word that are separated in text
that is not well edited, or due to tokenization errors. The head is in some sense the *main* part.

This relation is not used in the French treebank.

~~~ sdparse
Ils sont partis aujourd' hui  \n They left today
goeswith(aujourd', hui)
~~~

For some constructions using hyphens, FrenchSpoken uses the `goeswith` relation:

~~~ sdparse
A - t - il mangé la dernière part de gâteau ? \n Did he eat the last slice of cake?
goeswith(--2,t)
goeswith(--2,--4)
goeswith(--2,il-5)
~~~

For more details see the [tokenization page](http://universaldependencies.org/fr/overview/tokenization.html).
