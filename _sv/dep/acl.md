---
layout: relation
title: 'acl'
shortdef: 'clausal modifier of noun'
udver: '2'
---

`acl` is used for finite and non-finite clauses that modify a noun, including cases of secondary predication. 
Note that in Swedish relative clauses get assigned a specific relation [acl:relcl](), a subtype of `acl`.

Non-relative clausal dependents of nouns are limited to complement clauses with a subset of nouns like *faktum (fact)*.  We analyze them as `acl` (parallel to the analysis of this class as "content clauses" in Huddleston and Pullum 2002). Such clausal complements are usually finite (though there are occasional remnant Swedish subjunctives). 

~~~ sdparse
Hur förenas detta med det faktum att många äktenskap upplöses ? \n How can that be reconciled with the fact that many marriages break up?
acl(faktum, upplöses) 
~~~

In addition, interrogative clauses can be linked to nouns by prepositions.

~~~ sdparse
En bild av vad som händer \n A picture of what happens
acl(bild, händer)
~~~

~~~ sdparse
Ta ansvar för vad du gör \n Take responsibility for what you do
acl(ansvar, gör)
~~~

The `acl` relation is also used for secondary predicates modifying a nominal.

~~~ sdparse
Han lämnade rummet gråtande . \n He left the room crying .
acl(Han, gråtande)
~~~
<!-- Interlanguage links updated St lis 3 20:58:33 CET 2021 -->
