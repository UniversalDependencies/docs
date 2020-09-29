---
udver: '2'
layout: relation
title:  'compound:prt'
shortdef : 'separable verb particle'
---

Depending on the clause type in German, particles and verb stems of particle verbs either stand together or separate in the sentence. `compound:prt` is used to mark the separated particles of particle verbs. It is a subtype of the [compound]() relation.

In main clauses, particles appear in sentence-final position separate from their verb stem, which stands in second position.

~~~ sdparse
Der Koch schlägt die Eier auf . \n The chef breaks the eggs .
compound:prt(schlägt, auf)
~~~

In subordinate clauses, particle verbs appear with their particles in sentence-final position. In this case, they form a single token.

~~~ sdparse
... , weil der Koch die Eier aufschlägt . \n ... , because the chef breaks the eggs .
~~~

Note that some verbs can be written together or separately in the infinitive, such as "saubermachen" or "sauber machen". If the latter is considered the case, then the first part is not a compound particle, but rather an xcomp.

~~~ sdparse
Kannst du das Zimmer sauber machen ? \n Can you clean the room ?
xcomp(machen, sauber)
~~~
<!-- Interlanguage links updated Út zář 29 20:31:47 CEST 2020 -->
