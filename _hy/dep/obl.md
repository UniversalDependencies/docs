---
layout: relation
title: 'obl'
shortdef: 'oblique argument or adjunct'
udver: '2'
---

The `obl` relation is used for a nominal (noun, pronoun, noun phrase) functioning as a non-core (oblique) argument or adjunct. This means that it functionally corresponds to an adverbial attaching to a verb, adjective or other adverb.

The obl relation can be further specified by the case. In conjunction with the [case]() relation, it provides a uniform analysis for:

* variant forms with case:

~~~ sdparse
Նրա/DET խոսքերը/NOUN[Case=Nom] ազդեցություն/NOUN[Case=Nom] գործեցին/VERB պապի/NOUN[Case=Dat] վրա/ADP[Case=Nom] ։ \n His words had an-impression on grandfather .
det:poss(խոսքերը, Նրա)
nsubj(գործեցին, խոսքերը)
obl:arg(գործեցին, պապի)
obj(գործեցին, ազդեցություն)
case:loc(պապի, վրա)
det:poss(words, His)
nsubj(had, words)
obl:arg(had, grandfather)
obj(had, an-impression)
case:loc(grandfather, on)
~~~

* Dative, ablative, instrumental and locative alternations where the prepositional construction gets a similar analysis to the bare noun phrase:

~~~ sdparse
Երեխաներին/NOUN[Case=Dat] նոր/ADJ հագուստ/NOUN[Case=Nom] գնեց/VERB ։ \n
obj(գնեց, հագուստ)
amod(հագուստ, նոր)
iobj(գնեց, Երեխաներին)
~~~

~~~ sdparse
Երեխաների/NOUN[Case=Dat] համար/ADP նոր/ADJ հագուստ/NOUN[Case=Nom] գնեց/VERB ։ \n
obj(գնեց, հագուստ)
amod(հագուստ, նոր)
obl:arg(գնեց, Երեխաների)
case(Երեխաների, համար)
~~~

~~~ sdparse
Նրանք/PROPN հմտացել/VERB են/AUX այդ/DET աշխատանքում/NOUN[Case=Loc] ։ \n
obj(հմտացել, աշխատանքում)
det(աշխատանքում, այդ)
~~~

~~~ sdparse
Նրանք/PROPN հմտացել/VERB են/AUX այդ/DET աշխատանքի/NOUN[Case=Dat] մեջ/ADP[Case=Nom] ։ \n
obl:arg(հմտացել, աշխատանքի)
case:loc(աշխատանքի, մեջ)
det(աշխատանքի, այդ)
~~~

~~~ sdparse
Նա/PROPN նստած/ADJ էր/AUX քարին/NOUN[Case=Dat] ։ \n He was sitting on-a-stone .
obl(նստած, քարին)
obl(sitting, on-a-stone)
~~~

~~~ sdparse
Նա/PROPN նստած/ADJ էր/AUX քարի/NOUN[Case=Dat] վրա/ADP[Case=Nom] ։ \n He was sitting on the-stone .
obl(նստած, քարի)
case:loc(քարի, վրա)
obl(sitting, the-stone)
case:loc(the-stone, on)
~~~

* `obl` is also used for temporal and locational nominal modifiers as bare nominals or something syntactically a noun phrase in a sentence:

~~~ sdparse
Ամռանը/NOUN[Case=Dat] հանդիպեցի/VERB նրան/PRON[Case=Dat] սրճարանում/NOUN[Case=Loc] ։ \n I-met him in-summer in-the-cafe .
obl(հանդիպեցի, Ամռանը)
obl(հանդիպեցի, սրճարանում)
obl(I-met, in-summer)
obl(I-met, in-the-cafe)
~~~

~~~ sdparse
Ղրիմում/PROPN[Case=Loc] կատարած/ADJ[VerbForm=Part] իր/DET[Poss=Yes] շրջագայության/NOUN[Case=Dat] ժամանակ/NOUN[Case=Nom] առատ/ADJ[Degree=Pos] հունձ/NOUN[Case=Nom] էր/AUX ունեցել/VERB ։ \n
obj(ունեցել, հունձ)
amod(հունձ, առատ)
aux(ունեցել, էր)
obl(ունեցել, ժամանակ)
nmod:poss(ժամանակ, շրջագայության)
det:poss(շրջագայության, իր)
amod(շրջագայության, կատարած)
obl(կատարած, Ղրիմում)
~~~

We use [obl:agent]() for the agent of a passive verbs. Note, that the `obl` relation is used for the oblique arguments instead of [obj]() (i.e., prepositional objects, in Armenian grammar traditionally called _adpositional indirect objects_.) 
