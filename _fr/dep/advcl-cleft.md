---
layout: relation
title: 'advcl:cleft'
shortdef: 'cleft adverbial clause modifier'
udver: '2'
---

The `advcl:cleft` relation is used in four corpora.
It is used to link the clefted element and the clause of the cleft sentence.
This link is used for every type of cleft element (nominal phrase, prepositional phrase etc.).

~~~ sdparse
Les vendanges commencent aujourd'hui. C' est un vigneron du coin qui me l'a dit . \n Harvest starts today. It's a wine-grower who told me so.
nsubj:expl(vigneron, C')
advcl:cleft(vigneron, dit)
nsubj(dit, qui)
~~~

~~~ sdparse
Il y a Marie qui danse dans la pièce. \n Marie dances in the room.
nsubj(a,Il)
advmod(a,y)
obj(a,Marie)
advcl:cleft(Marie,danse)
~~~


~~~ sdparse
J' ai le mari de ma voisine qui est réparateur de voiture. \n I've got a neighbour whose husband is a car repairer.
nsubj(ai,J')
obj(ai,mari)
advcl:cleft(mari,réparateur)
~~~

~~~ sdparse
Juliette n'est pas ma confidente. C' est à Camille que je raconte tout. \n Juliette isn't my confidante. I tell everything to Camille.
advcl:cleft(Camille,raconte)
nsubj:expl(Camille,C')
~~~

~~~ sdparse
Il y a longtemps que j' habite ici. \n I've lived here for a long time.
advcl:cleft(longtemps, habite)
nsubj:expl(a,Il)
advmod(a,y)
obj(a,longtemps)
~~~

~~~ sdparse
Nager avec les dauphins ne me fait pas rêver. C' est explorer la forêt tropicale qui m' intéresse. \n Swimming with the dolphins isn't my dream. It's exploring the rainforest that interests me.
advcl:cleft(explorer, intéresse.)
nsubj:expl(explorer,C')
~~~
<!-- Interlanguage links updated Út zář 29 20:23:16 CEST 2020 -->
