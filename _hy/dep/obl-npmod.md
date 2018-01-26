---
layout: relation
title:  'obl:npmod'
shortdef: 'noun phrase as oblique modifier'
udver: '2'
---

This relation is a subtype of the `obl` relation, which captures the cases where something syntactically a noun phrase is used as an oblique modifier in a sentence.

~~~ sdparse
Ղրիմում/PROPN[Case=Loc] կատարած/ADJ[VerbForm=Part] իր/DET[Poss=Yes] շրջագայության/NOUN[Case=Dat] ժամանակ/NOUN[Case=Nom] առատ/ADJ[Degree=Pos] հունձ/NOUN[Case=Nom] էր/AUX ունեցել/VERB ։ \n
obj(ունեցել, հունձ)
amod(հունձ, առատ)
aux(ունեցել, էր)
obl:npmod(ունեցել, ժամանակ)
nmod:poss(ժամանակ, շրջագայության)
det:poss(շրջագայության, իր)
amod(շրջագայության, կատարած)
obl(կատարած, Ղրիմում)
~~~
