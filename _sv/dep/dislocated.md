---
layout: relation
title: 'dislocated'
shortdef: 'dislocated elements'
udver: '2'
---

The `dislocated` relation is used for fronted or postposed elements that do not fulfill the usual core grammatical 
relations of a sentence. Dislocated elements are attached to the same governor as the dependent that they double 
for.

~~~ sdparse
Peter , honom gillar jag inte \n Peter, I don't like him
dislocated(gillar, Peter)
obj(gillar, honom)
~~~

In addition, the `dislocated` relation is used for the focus element in a cleft sentence. This is a slight
abuse of the relation, because the focus element is not a dislocated dependent of its syntactic head, but 
rather of the predicate in the relative clause making up the second part of the cleft construction. 

~~~ sdparse
Det var Peter som gjorde det \n It was Peter who did it
dislocated(var, Peter)
expl(var, Det)
acl:relcl(Peter, gjorde)
nsubj(gjorde, som)
obj(gjorde, det)
~~~
<!-- Interlanguage links updated Út zář 29 20:31:51 CEST 2020 -->
