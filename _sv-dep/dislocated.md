---
layout: relation
title: 'dislocated'
shortdef: 'dislocated elements'
---

The `dislocated` relation is used for fronted or postposed elements that do not fulfill the usual core grammatical 
relations of a sentence. Dislocated elements are attached to the same governor as the dependent that they double 
for.

~~~ sdparse
Peter , honom gillar jag inte \n Peter, I don't like him
dislocated(gillar, Peter)
dobj(gillar, honom)
~~~

A frequent case in Swedish is that of an adverbial clause resumed by the pronominal adverb *så*:

~~~ sdparse
Släpper vi in britterna , så drar de med sig danskar \n If we let the Brits in they'll bring the Danish with them
dislocated(drar, Släpper)
advcl(drar, så)
~~~

In addition, the `dislocated` relation is used for the focus element in a cleft sentence. This is a slight
abuse of the relation, because the focus element is not a dislocated dependent of its syntactic head, but 
rather of the predicate in the relative clause making up the second part of the cleft construction. 

~~~ sdparse
Det var Peter som gjorde det \n It was Peter who did it
dislocated(var, Peter)
expletive(var, Det)
acl:relcl(Peter, gjorde)
nsubj(gjorde, som)
dobj(gjorde, det)
~~~
