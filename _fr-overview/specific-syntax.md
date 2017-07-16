---
layout: base
title:  'Syntax'
permalink: fr/overview/specific-syntax.html
udver: '2'
---

# Specific constructions

## Qu'est-ce que ... ?

We analyze "qu'est-ce que ..." as follows: the first _qu'_ gets the true grammatical relation given the sentence , _ce_ is an expletive, _est_ is a copula and the second _que_ is a mwe dependent on _ce_

~~~ sdparse
Qu' est - ce qu' un délinquant ? \n What is an offender?
root(ROOT-0,Qu'-1)
cop(Qu',est)
expl(Qu',ce)
mwe(ce,qu')
nsubj(Qu',délinquant)
~~~

~~~ sdparse
Qu' est - ce qu' il a fait ? \n What did he do ?
root(ROOT-0,fait-8)
dobj(fait,Qu')
expl(fait,ce)
mwe(ce,qu')
cop(fait,est)
nsubj(fait,il)
~~~

## Cleft sentences

FrenchSpoken analyzes cleft sentences with [fr-dep/acl:cleft]() when the clefted element is a nominal subject or object. All other clefted elements are analyzed with [fr-dep/ccomp:cleft]().
For cleft sentences constructed with a _c'est_ (or _ce sont_, _c'était_ etc.), the clefted element is the head or the whole cleft sentence and the syntactical subject _c'_ receives a [fr-dep/nsubj:expl]() link.

~~~ sdparse
Notre jardin est vraiment magnifique. C' est notre jardinier qui a tout fait seul ! \n Our garden is truly beautiful. It's our gardener who did everything on his own!
nsubj:expl(jardinier,C')
acl:cleft(jardinier,fait)
nsubj(fait,qui)
~~~

~~~ sdparse
Les temps sont durs. C' est en faisant des compromis qu' on s'en sortira. \n Times are tough. That's by making compromises that we will be able to find a way out of misery.
nusbj:expl(faisant,C')
cop(faisant,est)
ccomp:cleft(faisant,sortira.)
advcl(sortira.,qu')
~~~

~~~ sdparse
Je n'entends pas la télévision. Il y a mon père qui passe l'aspirateur. \n I can't hear the television. My father is vaccuuming the room.
nsubj:expl(a,Il)
advmod(a,y)
obj(a,père)
acl:cleft(père,passe)
nsubj(passe,qui)
~~~ 

N.B.: Presentative constructions must not be mistaken for cleft sentences. FrenchSpoken annotates those two constructions differently.
In a presentative construction the pronoun _c'_ has an antecedent whereas the _c'_ in a cleft sentence does not have one. The _c'_ of a presentative will thus be annotated with a standard [fr-dep/nsubj]() relation and the _c'_ of a cleft sentence will be annotated with the `nsubj:expl` subrelation (see above).
In the following example, _C'_ has an obvious antecedent: _notre jardinier_. The relative clause of the presentative construction is governed by _lui_ with a [fr-dep/acl:relcl]() relation (and not an `acl:cleft` relation).

~~~ sdparse
Notre jardinier est excellent. C' est lui qui a fait tout ce merveilleux travail. \n Our gardener is excellent. He is the one who did all this wonderful work.
nsubj(lui,C')
acl:relcl(lui,fait)
nsubj(fait,qui)
~~~ 


## Pseudo-cleft sentences

To stay consistent with the analysis made for the cleft sentences, and thus to show the similarities between the two types of constructions, the head of a pseudo-cleft sentence is the element that follows the _c'est_ (or _c'était_ etc.) and the pronoun _c'_ is annotated with [fr-dep/nsubj:expl](). 
This head governs the left part of the pseudo-cleft construction with a [fr-dep/dislocated:cleft]() link. 
The pronoun _ce_ is the head of the left part of the pseudo-cleft and governs the relative clause with a standard [fr-dep/acl:relcl]() link.

~~~ sdparse
Ce que j' aime , c' est le chocolat. \n Chocolate is what I like.
cop(chocolat.,est)
nsubj:expl(chocolat.,c')
dislocated:cleft(chocolat.,Ce)
acl:relcl(Ce,aime)
~~~

~~~ sdparse
Ce qui me fait peur, c' est que tu te casses une jambe. \n What scares me is that you break your leg.
mark(casses,que)
cop(casses,est)
nsubj:expl(casses,c')
dislocated:cleft(casses,Ce)
acl:relcl(Ce,fait)
~~~





