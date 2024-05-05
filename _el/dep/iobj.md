---
layout: relation
title: 'iobj'
shortdef: 'indirect object'
udver: '2'
---

The indirect object of a verb is any nominal structure that is a core
argument of the verb but is not its subject or [direct object](obj).
The prototypical example is the recipient of ditransitive verbs of exchange.

~~~ sdparse
Έδωσε της Άννας αύξηση
iobj(Έδωσε, Άννας)
obj(Έδωσε, αύξηση)
~~~

~~~ sdparse
Έδωσε στην Άννα αύξηση
obl(Έδωσε, Άννα)
obj(Έδωσε, αύξηση)
~~~

Source roles can be realized as nominal elements preceded by για- and από- prepositions.



~~~ sdparse
Πήραν του Νίκου δύο χιλιάρικα
iobj(Πήραν, Νίκου)
obj(Πήραν, χιλιάρικα)
~~~

~~~ sdparse
Πήραν από τον Νίκο δύο χιλιάρικα
obl(Πήραν, Νίκο)
obj(Πήραν, χιλιάρικα)
~~~

Recipient and source roles can be realised as weak pronouns in the genitive case.

~~~ sdparse
Της έδωσε αύξηση
iobj(έδωσε, Της)
obj(έδωσε, αύξηση)
~~~

~~~ sdparse
Του πήραν δυο χιλιάρικα
iobj(πήραν, Του)
obj(πήραν, χιλιάρικα)
~~~

When two objects in accusative are present, one of them is annotated as `obj` and the other as [iobj]().  Generally, the most directly affected object _(patient)_ is marked as `obj`.

~~~ sdparse
Διδάσκει τα παιδιά.ACC ιστορία.ACC
obj(Διδάσκει, ιστορία.ACC)
iobj(Διδάσκει, παιδιά.ACC)
~~~

If there is just one object, it should be labeled [obj](), regardless of the morphological case or semantic role. For example,  _διδάσκω_ can take either the subject matter or the recipient as the only object, and in both cases it would be analyzed as the [obj]():

~~~ sdparse
Διδάσκει μαθηματικά
obj(Διδάσκει, μαθηματικά)
~~~

~~~ sdparse
Διδάσκει τους φοιτητές
obj(Διδάσκει, φοιτητές)
~~~


See the [expl]()  relation for cases of clitic doubling.


<!-- Interlanguage links updated Ne 5. května 2024, 18:21:17 CEST -->
