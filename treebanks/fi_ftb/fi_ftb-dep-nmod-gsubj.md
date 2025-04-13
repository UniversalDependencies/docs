---
layout: base
title:  'Statistics of nmod:gsubj in UD_Finnish-FTB'
udver: '2'
---

## Treebank Statistics: UD_Finnish-FTB: Relations: `nmod:gsubj`

This relation is a language-specific subtype of <tt><a href="fi_ftb-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="fi_ftb-dep-nmod-gobj.html">nmod:gobj</a></tt>, <tt><a href="fi_ftb-dep-nmod-poss.html">nmod:poss</a></tt>.

101 nodes (0%) are attached to their parents as `nmod:gsubj`.

101 instances of `nmod:gsubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.16831683168317.

The following 5 pairs of parts of speech are connected with `nmod:gsubj`: <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (82; 81% instances), <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt> (9; 9% instances), <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt> (8; 8% instances), <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:gsubj	color:blue
1	Esiintyjä	esiintyjä	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	2	nsubj	_	_
2	pelkää	pelätä	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	Jurkan	jurkka	PROPN	N,Prop,Sg,Gen	Case=Gen|Number=Sing	2	nmod	_	_
4	mielestä	mielestä	ADP	Adp	_	3	case	_	_
5	kontrollin	kontrolli	NOUN	N,Sg,Gen	Case=Gen|Number=Sing	6	nmod:gsubj	_	Alt=nmod:gsubj
6	pettämistä	pettäminen	NOUN	N,Sg,Par	Case=Par|Number=Sing	2	obj	_	_
7	.	.	PUNCT	Pun	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nmod:gsubj	color:blue
1	Hänen	hän	PRON	Pron,Pers,Sg3,Gen	Case=Gen|Number=Sing|Person=3|PronType=Prs	3	nmod:gsubj	_	Alt=nmod:gsubj
2	jäihin	jää	NOUN	N,Pl,Ill	Case=Ill|Number=Plur	3	nmod	_	_
3	vajoamisensa	vajoaminen	NOUN	N,Sg,Nom,Px3	Case=Nom|Number=Sing|Person[psor]=3	4	obj	_	_
4	nähtiin	nähdä	VERB	V,Pass,Ind,Past	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
5	rannalta	ranta	NOUN	N,Sg,Abl	Case=Abl|Number=Sing	4	nmod	_	_
6	.	.	PUNCT	Pun	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:gsubj	color:blue
1	Tulevaisuudessa	tulevaisuus	NOUN	N,Sg,Ine	Case=Ine|Number=Sing	5	nmod	_	_
2	uuden	uusi	ADJ	A,Sg,Gen	Case=Gen|Number=Sing	3	amod	_	_
3	Siljan	silja	PROPN	N,Prop,Sg,Gen	Case=Gen|Number=Sing	4	nmod:gsubj	_	Alt=nmod:gsubj
4	menestyminen	menestyminen	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	5	nsubj	_	_
5	on	olla	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	kiinni	kiinni	ADV	Adv	_	5	compound:prt	_	_
7	Itämerestä	itämeri	PROPN	N,Prop,Sg,Ela	Case=Ela|Number=Sing	5	nmod	_	_
8	.	.	PUNCT	Pun	_	7	punct	_	_

~~~


