---
layout: relation
title: 'acl'
shortdef: 'clausal modifier of noun'
udver: '2'
---

`acl` is used for finite and non-finite clauses that modify a noun, including cases of secondary predication.
Note that in French relative clauses get assigned a specific relation [   acl:relcl](), a subtype of `acl`.

Non-relative clausal dependents of nouns are limited to complement clauses with a subset of nouns like *fait (fact)*.
We analyze them as `acl` (parallel to the analysis of this class as "content clauses" in Huddleston and Pullum 2002).

~~~ sdparse
Comment est-ce que cela peut être réconcilié avec le fait que beaucoup de mariages cassent ? \n How can that be reconciled with the fact that many marriages break up?
acl(fait, cassent)
~~~

~~~ sdparse
Une photo de ce qui s'est passé \n A picture of what happens
acl(photo, passé)
~~~

~~~ sdparse
Un culte nourri d'influences d'anciens mythes \n A cult nourrished with influences from old myths
acl(culte, nourri)
~~~


The `acl` relation is also used for secondary predicates modifying a nominal:

~~~ sdparse
Il quitta la pièce pleurant . \n He left the room crying .
acl(Il, pleurant)
~~~

Some examples of the `acl` relation in **UD_French-Spoken**:

~~~ sdparse
on va donc avoir nos regards braqués sur l'hémisphère sud \n so we will be focused on the southern hemisphere
acl(regards, braqués)
~~~

~~~ sdparse
la difficulté à vivre \n a difficulty to live with
acl(difficulté,vivre)
mark(vivre,à)
~~~

~~~ sdparse
j'avais de la chance d' avoir des enfants qui travaillaient \n I was lucky to have children who were working
acl(chance,avoir)
mark(avoir,d')
~~~

N.B.: For cleft sentences **UD_French-Spoken** uses a subrelation of `acl`: the `acl:cleft` relation.
<!-- Interlanguage links updated Út zář 29 18:41:02 CEST 2020 -->
