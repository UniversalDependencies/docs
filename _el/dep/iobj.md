---
layout: relation
title: 'iobj'
shortdef: 'indirect object'
udver: '2'
---

The indirect object of a verb is any nominal structure that is a core
argument of the verb but is not its subject or [direct object](obj).
The prototypical example is the recipient of ditransitive verbs of exchange,
that is often realized as a nominal element preceded by a σε-preposition.

~~~ sdparse
Έδωσε της Άννας αύξηση
iobj(Έδωσε, Άννας)
obj(Έδωσε, αύξηση)
~~~

~~~ sdparse
Έδωσε σε όλους αύξηση
case(όλους, σε)
iobj(Έδωσε, όλους)
obj(Έδωσε, αύξηση)
~~~

~~~ sdparse
Έδωσε στην Άννα αύξηση
iobj(Έδωσε, Άννα)
obj(Έδωσε, αύξηση)
~~~

Benefactives and source semantic roles are also marked as indirect objects. Recipient and source roles can be realized as nominal elements preceded by για- and από- prepositions.

~~~ sdparse
Έφτιαξε της Λίλας φακές
iobj(Έφτιαξε, Λίλας)
obj(Έφτιαξε,  φακές)
~~~

~~~ sdparse
Πήραν του Νίκου δύο χιλιάρικα
iobj(Πήραν, Νίκου)
obj(Πήραν, χιλιάρικα)
~~~

~~~ sdparse
Πήραν από τον Νίκο δύο χιλιάρικα
iobj(Πήραν, Νίκο)
obj(Πήραν, χιλιάρικα)
~~~

Recipient, benefactives and source roles can be cliticized in genitive.

~~~ sdparse
Της έδωσε αύξηση
iobj(έδωσε, Της)
obj(έδωσε, αύξηση)
~~~

~~~ sdparse
Της έφτιαξε φακές
iobj(έφτιαξε, Της)
obj(έφτιαξε, φακές)
~~~

~~~ sdparse
Του πήραν δυο χιλιάρικα
iobj(πήραν, Του)
obj(πήραν, χιλιάρικα)
~~~

When two objects in accusative are present, one of them is annotated as `obj` and the other as [iobj]().  Generally, the most directly affected object _(patient)_ is marked as `obj`.

~~~ sdparse
Διδάσκει τα παιδιά.Acc ιστορία.Acc
obj(Διδάσκει, ιστορία.Acc)
iobj(Διδάσκει, παιδιά.Acc)
~~~

If there is just one object, it should be labeled [obj](), regardless of the morphological case or semantic role. For example,  _διδάσκω_ can take either the subject matter or the recipient as the only object, and in both cases it would be analyzed as the [obj]():

~~~ sdparse
Διδάσκει μαθηματικά
dobj(Διδάσκει, μαθηματικά)
~~~

~~~ sdparse
Διδάσκει τους φοιτητές
dobj(Διδάσκει, φοιτητές)
~~~

The one exception is when there is a clausal complement. Then the clausal complement is regarded
as a [ccomp]() “clausal direct object” and an object nominal will be an iobj, parallel to the simple ditransitive case:

~~~ sdparse
Είπε στους φοιτητές να διαβάσουν το δεύτερο κεφάλαιο
iobj(Είπε, φοιτητές)
xcomp(Είπε, διαβάσουν)
~~~

~~~ sdparse
Είπε στους φοιτητές το πρόγραμμα
iobj(Είπε, φοιτητές)
dobj(Είπε, πρόγραμμα)
~~~

See the [expl]()  relation for cases of clitic doubling.

## Diffs

At present and contrary to the general UD definition of [u-dep/iobj](), in
UD Greek we allow prepositional indirect objects.
<!-- Interlanguage links updated Čt lis 12 09:43:28 CET 2020 -->
