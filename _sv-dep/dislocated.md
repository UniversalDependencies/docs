---
layout: relation
title: 'dislocated'
shortdef: 'dislocated elements'
---

The `dislocated` relation is used for fronted or postposed elements
that do not fulfill the usual core grammatical relations of a
sentence. Dislocated elements are attached to the same governor as the dependent that they double for.

~~~ sdparse
Det här är vårt kontor , jag och Sam \n This is our office , me and Sam
dislocated(kontor, jag)
cc(jag, och)
conj(jag, Sam-9)
~~~

~~~ sdparse
Inte sprayflaska - ta pensel och rostskydd på burk \n Not a spray bottle , take a brush and anti-corrosive paint in a can
dislocated(ta, sprayflaska)
neg(sprayflaska, Inte)
~~~

In Swedish the `dislocated` relation is often used for the word *så* in cases like the following examples.

~~~ sdparse
Släpper vi in britterna , så drar de med sig danskar \n If we let the Brits in they'll bring the Danish with them
dislocated(Släpper, så)
~~~

~~~ sdparse
Men trots ökade statsutgifter så blir det inkomstökning för privatpersoner \n But despite increased public spending, there's an increase in income for private individuals
dislocated(statsutgifter, så)
~~~
