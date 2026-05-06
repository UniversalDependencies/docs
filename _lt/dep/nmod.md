---
layout: relation
title:  'nmod'
shortdef : 'nominal modifier'
udver: '2'
---

The `nmod` relation is used for nominal dependents of another noun or noun phrase. It usually corresponds to a non-agreeing attribute in genitive.
Noun modifiers typically precede the head noun (1), but in Lithuanian, constructions where modifiers follow the modified noun are also possible (2). 

~~~ sdparse
Čia yra direktoriaus kabinetas . \n This is the-director’s office .
nmod(kabinetas, direktoriaus)
nmod(office, the-director’s)
~~~

~~~ sdparse
Mergaitė geltonais plaukais . \n Girl with-yellow hair .
nmod(Mergaitė, plaukais)
Nmod(Girl, hair)
~~~

A non-agreeing attribute can also be expressed using other noun cases, as well as with prepositions.

~~~ sdparse
Įtaka vaikams . \n Influence on-children .
nmod(Įtaka, vaikams)
nmod(Influence, on-children)
~~~

~~~ sdparse
Arbata su cukrumi . \n Tea with sugar .
nmod(Arbata, cukrumi)
nmod(Tea, sugar)
~~~

However, there is also a different kind of `nmod` that precedes the modified noun and agrees with it in case and number. A typical example is a title attached to a name of a person or other names.

~~~ sdparse
Atvyko mokyklos direktorius Jonaitis . \n The-school director John has-arrived .
nmod(Jonaitis, direktorius)
nmod(John, director)
~~~

`nmod` can mark names:
~~~ sdparse
Pažiūrėjau filmą „ Titanikas “ . \n I watched the-movie “ Titanic ” .
nmod(filmą, Titanikas)
nmod(the-movie, Titanic)
~~~
<!-- Interlanguage links updated St 6. května 2026, 20:47:19 CEST -->
