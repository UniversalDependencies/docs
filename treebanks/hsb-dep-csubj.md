---
layout: base
title:  'Statistics of csubj in UD_Upper_Sorbian'
udver: '2'
---

## Treebank Statistics: UD_Upper_Sorbian: Relations: `csubj`

This relation is universal.

10 nodes (0%) are attached to their parents as `csubj`.

10 instances of `csubj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.3.

The following 4 pairs of parts of speech are connected with `csubj`: <tt><a href="hsb-pos-VERB.html">VERB</a></tt>-<tt><a href="hsb-pos-VERB.html">VERB</a></tt> (5; 50% instances), <tt><a href="hsb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hsb-pos-VERB.html">VERB</a></tt> (2; 20% instances), <tt><a href="hsb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hsb-pos-VERB.html">VERB</a></tt> (2; 20% instances), <tt><a href="hsb-pos-ADV.html">ADV</a></tt>-<tt><a href="hsb-pos-VERB.html">VERB</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 16 csubj	color:blue
1	Wot	wot	ADP	_	_	4	case	_	_
2	10	10	NUM	_	NumType=Card	4	nummod	_	SpaceAfter=No
3	.	.	PUNCT	_	_	2	punct	_	_
4	lěttysaca	lěttysac	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	11	obl	_	_
5	př	před	ADP	_	Abbr=Yes	9	case	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_
7	n	naš	DET	_	Abbr=Yes|Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	9	det	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_
9	l	lětoličba	NOUN	_	Abbr=Yes|Case=Ins|Gender=Fem|Number=Sing	4	nmod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	9	punct	_	_
11	hodźa	hodźeć	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
12	so	so	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	11	expl:pv	_	_
13	wumodelowane	wumodelowany	ADJ	_	Case=Nom|Gender=Fem|Number=Plur|VerbForm=Part|Voice=Pass	15	amod	_	_
14	žónske	žónski	ADJ	_	Case=Nom|Gender=Fem|Number=Plur	15	amod	_	_
15	figuriny	figurina	NOUN	_	Case=Nom|Gender=Fem|Number=Plur	16	nsubj	_	_
16	namakać	namakać	VERB	_	VerbForm=Inf	11	csubj	_	SpaceAfter=No
17	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 csubj	color:blue
1	Planowane	planowany	ADJ	_	Case=Nom|Number=Plur|VerbForm=Part|Voice=Pass	0	root	_	_
2	je	być	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	tež	tež	ADV	_	_	6	advmod	_	_
4	pytansku	pytanski	ADJ	_	Case=Acc|Gender=Fem|Number=Sing	5	amod	_	_
5	funkciju	funkcija	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	6	obj	_	_
6	integrować	integrować	VERB	_	VerbForm=Inf	1	csubj	_	SpaceAfter=No
7	,	,	PUNCT	_	_	10	punct	_	_
8	kiž	kiž	PRON	_	Case=Nom|PronType=Rel	10	nsubj	_	_
9	wužiwarjej	wužiwar	NOUN	_	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing	10	iobj	_	_
10	dowoli	dowollić	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	advcl	_	SpaceAfter=No
11	,	,	PUNCT	_	_	15	punct	_	_
12	wopak	wopak	ADV	_	Degree=Pos	13	advmod	_	_
13	pisane	pisany	ADJ	_	Case=Acc|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	14	amod	_	_
14	słowo	słowo	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	15	obj	_	_
15	namakać	namakać	VERB	_	VerbForm=Inf	10	xcomp	_	SpaceAfter=No
16	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 14 csubj	color:blue
1	Jednora	jednory	ADJ	_	Case=Nom|Gender=Fem|Number=Sing	6	amod	_	_
2	ale	ale	CCONJ	_	_	3	cc	_	_
3	wažna	wažny	ADJ	_	Case=Nom|Gender=Fem|Number=Sing	1	conj	_	_
4	a	a	CCONJ	_	_	5	cc	_	_
5	jónkróćna	jónkróćny	ADJ	_	Case=Nom|Gender=Fem|Number=Sing	1	conj	_	_
6	kajkosć	kajkosć	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
7	wody	woda	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	6	nmod	_	_
8	je	być	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	SpaceAfter=No
9	,	,	PUNCT	_	_	14	punct	_	_
10	zo	zo	SCONJ	_	_	14	mark	_	_
11	jeje	jeje	DET	_	Gender[psor]=Fem|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	13	det	_	_
12	kruta	kruty	ADJ	_	Case=Nom|Gender=Fem|Number=Sing	13	amod	_	_
13	forma	forma	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	14	nsubj	_	_
14	płuwa	płuwać	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	csubj	_	_
15	na	na	ADP	_	_	16	case	_	_
16	kapalnej	kapalny	ADJ	_	Case=Loc|Gender=Fem|Number=Sing	14	obl	_	SpaceAfter=No
17	.	.	PUNCT	_	_	6	punct	_	_

~~~


