---
layout: base
title:  'Statistics of compound in UD_Finnish-FTB'
udver: '2'
---

## Treebank Statistics: UD_Finnish-FTB: Relations: `compound`

This relation is universal.
There are 2 language-specific subtypes of `compound`: <tt><a href="fi_ftb-dep-compound-nn.html">compound:nn</a></tt>, <tt><a href="fi_ftb-dep-compound-prt.html">compound:prt</a></tt>.

1 nodes (0%) are attached to their parents as `compound`.

1 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `compound`: <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound	color:blue
1	Sata-Häme	sata-häme	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	2	nsubj	_	_
2	soi	soida	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	compound	_	Alt=compound|Missed-Rel=attr
3	-tapahtuman	-tapahtuma	NOUN	N,Sg,Gen,Suffix	Case=Gen|Number=Sing	4	nmod	_	Missed-POSITION=SUFFIX
4	järjestäjät	järjestäjä	NOUN	N,Pl,Nom	Case=Nom|Number=Plur	5	nsubj	_	_
5	saivat	saada	VERB	V,Act,Ind,Past,Pl3	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	ylimääräisiä	ylimääräinen	ADJ	A,Pl,Par	Case=Par|Number=Plur	7	amod	_	_
7	sydämentykytyksiä	sydämentykytys	NOUN	N,Pl,Par	Case=Par|Number=Plur	5	obj	_	_
8	seuratessaan	seurata	VERB	V,Act,InfE,Ine,Px3	Case=Ine|InfForm=2|Person[psor]=3|VerbForm=Inf|Voice=Act	5	advcl	_	_
9	puhelimitse	puhelimitse	ADV	Adv	_	8	advmod	_	_
10	texmex-kuningas	texmex-kuningas	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	11	compound:nn	_	Alt=compound:nn
11	Flaco	flaco	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	15	nmod	_	Alt=name
12	Jimenezin	jimenez	PROPN	N,Prop,Sg,Gen	Case=Gen|Number=Sing	11	flat	_	_
13	ja	ja	CCONJ	Pcle,CC	_	14	cc	_	_
14	orkesterinsa	orkesteri	NOUN	N,Sg,Gen,Px3	Case=Gen|Number=Sing|Person[psor]=3	11	conj	_	_
15	matkaa	matka	NOUN	N,Sg,Par	Case=Par|Number=Sing	8	obj	_	_
16	kohti	kohti	ADP	Adp	_	17	case	_	_
17	Ikaalisia	ikaalinen	PROPN	N,Prop,Pl,Par	Case=Par|Number=Plur	15	nmod	_	_
18	.	.	PUNCT	Pun	_	17	punct	_	_

~~~


