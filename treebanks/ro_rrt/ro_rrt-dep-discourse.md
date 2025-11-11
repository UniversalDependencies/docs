---
layout: base
title:  'Statistics of discourse in UD_Romanian-RRT'
udver: '2'
---

## Treebank Statistics: UD_Romanian-RRT: Relations: `discourse`

This relation is universal.

20 nodes (0%) are attached to their parents as `discourse`.

14 instances of `discourse` (70%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.65.

The following 11 pairs of parts of speech are connected with `discourse`: <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-INTJ.html">INTJ</a></tt> (5; 25% instances), <tt><a href="ro_rrt-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_rrt-pos-INTJ.html">INTJ</a></tt> (3; 15% instances), <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-CCONJ.html">CCONJ</a></tt> (3; 15% instances), <tt><a href="ro_rrt-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt> (2; 10% instances), <tt><a href="ro_rrt-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="ro_rrt-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ro_rrt-pos-ADV.html">ADV</a></tt> (1; 5% instances), <tt><a href="ro_rrt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_rrt-pos-INTJ.html">INTJ</a></tt> (1; 5% instances), <tt><a href="ro_rrt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-PRON.html">PRON</a></tt> (1; 5% instances), <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-SCONJ.html">SCONJ</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 discourse	color:blue
1	Vai	vai	INTJ	I	_	2	discourse	_	_
2	pare	părea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	aglomerat	aglomerat	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	2	xcomp	_	SpaceAfter=No
4	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 discourse	color:blue
1	Și	și	CCONJ	Crssp	Polarity=Pos	6	cc	_	_
2	iaca	iaca	INTJ	I	_	3	discourse	_	_
3	așa	așa	ADV	Rgp	Degree=Pos	6	advmod	_	_
4	i	el	PRON	Pp3-sd--------w	Case=Dat|Number=Sing|Person=3|PronType=Prs|Strength=Weak	6	expl	_	SpaceAfter=No
5	-a	avea	AUX	Va--3s----y	Number=Sing|Person=3|Variant=Short	6	aux	_	_
6	tras	trage	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
7	o	un	DET	Tifsr	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	8	det	_	_
8	mamă	mamă	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	6	obj	_	_
9	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	10	case	_	_
10	bătaie	bătaie	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	8	nmod	_	_
11	lui	lui	DET	Tf-so	Case=Dat,Gen|Definite=Def|Number=Sing|PronType=Art	12	det	_	_
12	Sfântu	Sfântu	PROPN	Np	_	6	iobj	_	_
13	Petre	Petre	PROPN	Np	_	12	flat	_	SpaceAfter=No
14	.	.	PUNCT	PERIOD	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 1 discourse	color:blue
1	Dar	dar	CCONJ	Ccssp	Polarity=Pos	10	discourse	_	SpaceAfter=No
2	,	,	PUNCT	COMMA	_	4	punct	_	_
3	mă	eu	PRON	Pp1-sa--------w	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Weak	4	expl:pv	_	_
4	rog	ruga	VERB	Vmip1s	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	10	parataxis	_	SpaceAfter=No
5	,	,	PUNCT	COMMA	_	4	punct	_	_
6	pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	_
7	duduca	duducă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	15	obj	_	_
8	Luluța	Luluța	PROPN	Np	_	7	appos	_	_
9	nu	nu	PART	Qz	Polarity=Neg	10	advmod	_	_
10	știți	ști	VERB	Vmip2p	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
11	unde	unde	ADV	Rw	PronType=Int,Rel	15	advmod	_	SpaceAfter=No
12	-aș	avea	AUX	Va--1s----y	Number=Sing|Person=1|Variant=Short	13	aux	_	_
13	putea	putea	VERB	Vmnp	Tense=Pres|VerbForm=Inf	10	ccomp	_	SpaceAfter=No
14	-o	el	PRON	Pp3fsa--y-----w	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Strength=Weak|Variant=Short	15	expl	_	_
15	găsi	găsi	VERB	Vmnp	Tense=Pres|VerbForm=Inf	13	ccomp	_	SpaceAfter=No
16	?	?	PUNCT	QUEST	_	10	punct	_	_

~~~


