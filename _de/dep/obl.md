---
udver: '2'
layout: relation
title: 'obl'
shortdef: 'oblique'
---

The relation `obl` is used for nominals that constitute an adjunct as in the first example or a non-core (oblique)
argument as in the second example. Like in many Indo-European languages, oblique marking in German is not restricted
to prepositions; a bare noun phrase in a non-core case (dative, genitive) is oblique as well.

~~~ sdparse
Das Paket liegt vor der Tür . \n The package is in front of the door .
obl(liegt, Tür)
~~~

~~~ sdparse
Was hältst du von dieser Rede ? \n What do you think of that speech ?
obl(hältst, Rede)
~~~

~~~ sdparse
Wie kann ich Ihnen helfen ? \n How can I you.Dat help ?
obl(helfen, Ihnen)
~~~

Note that oblique dependents can also introduce relative clauses. In such cases, the relative pronoun itself is marked `obl`.

~~~ sdparse
das Haus , in dem ich wohne \n the house , in which I live
obl(wohne, dem)
~~~

<!-- Interlanguage links updated Út 9. května 2023, 20:04:26 CEST -->
