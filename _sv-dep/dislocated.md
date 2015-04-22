---
layout: relation
title: 'dislocated'
shortdef: 'dislocated elements'
---

The `dislocated` relation is used for fronted or postposed elements
that do not fulfill the usual core grammatical relations of a
sentence. Dislocated elements are attached to the same governor as the dependent that they double for.

~~~ sdparse
Peter , honom gillar jag inte \n Peter, I don't like him
dislocated(gillar, Peter)
dobj(gillar, honom)
~~~

In Swedish the `dislocated` relation is often used for the word *så* in cases like the following examples.

~~~ sdparse
Släpper vi in britterna , så drar de med sig danskar \n If we let the Brits in they'll bring the Danish with them
dislocated(drar, så)
advcl(drar, Släpper)
~~~

~~~ sdparse
Men trots ökade statsutgifter så blir det inkomstökning för privatpersoner \n But despite increased public spending, there's an increase in income for private individuals
dislocated(blir, så)
nmod(blir, statsutgifter)
~~~
