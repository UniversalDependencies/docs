---
layout: base
title:  'Statistics of appos in UD_Finnish-FTB'
udver: '2'
---

## Treebank Statistics: UD_Finnish-FTB: Relations: `appos`

This relation is universal.

2 nodes (0%) are attached to their parents as `appos`.

2 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `appos`: <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt> (2; 100% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 appos	color:blue
1	Odotuksen	odotus	NOUN	N,Sg,Gen	Case=Gen|Number=Sing	2	nmod	_	_
2	kohteena	kohde	NOUN	N,Sg,Ess	Case=Ess|Number=Sing	3	nmod	_	_
3	ovat	olla	VERB	V,Act,Ind,Pres,Pl3	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	elokuvatähdet	elokuvatähti	NOUN	N,Pl,Nom	Case=Nom|Number=Plur	3	nsubj	_	_
5	Renny	renny	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	4	appos	_	Alt=name
6	Harlin	harlin	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	5	flat	_	Alt=appos
7	,	,	PUNCT	Pun	_	5	punct	_	FTB-rel=phrm
8	Geena	geena	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	5	conj	_	Alt=name
9	Davis	davis	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	8	flat	_	_
10	,	,	PUNCT	Pun	_	5	punct	_	FTB-rel=phrm
11	Bruce	bruce	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	5	conj	_	Alt=name
12	Willis	willis	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	11	flat	_	_
13	ja	ja	CCONJ	Pcle,CC	_	14	cc	_	_
14	Demi	demi	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	5	conj	_	Alt=name
15	Moore	moore	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	14	flat	_	_

~~~


