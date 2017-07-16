---
layout: relation
title: 'acl:cleft'
shortdef: 'cleft clause modifier'
udver: '2'
---

FrenchSpoken uses the `acl:cleft` relation to link the clefted nominal element (i.e. the head of the cleft construction) and the clause of the cleft sentence.
The [nsubj:expl]() relation is used to annotate the syntactical subject of the cleft construction.

~~~ sdparse
Les vendanges commencent aujourd'hui. C' est un vigneron du coin qui me l'a dit .
nsubj:expl(vigneron, C')
acl:cleft(vigneron, dit)
nsubj(dit, qui)
~~~

~~~ sdparse
Il y a Marie qui danse dans la pièce. \n Marie dances in the room.
nsubj:expl(a,Il)
advmod(a,y)
obj(a,Marie)
acl:cleft(Marie,danse)
~~~ 

~~~ sdparse
J' ai le mari de ma voisine qui est réparteur de voiture. \n I've got a neighbour whose husband is a car repairer.
nsubj(ai,J')
obj(ai,mari)
acl:cleft(mari,réparateur)
~~~ 

N.B.: `acl:cleft` is only used for clefted nominal subjects or objects. All other cases are annotated with the [ccomp:cleft]() relation (for example when the clefted element is a verb or an adverb). Also see the [fr-overview/specific-syntax]() page.
