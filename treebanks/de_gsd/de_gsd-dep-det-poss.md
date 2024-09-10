---
layout: base
title:  'Statistics of det:poss in UD_German-GSD'
udver: '2'
---

## Treebank Statistics: UD_German-GSD: Relations: `det:poss`

This relation is a language-specific subtype of <tt><a href="de_gsd-dep-det.html">det</a></tt>.

2356 nodes (1%) are attached to their parents as `det:poss`.

2354 instances of `det:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.34762308998302.

The following 6 pairs of parts of speech are connected with `det:poss`: <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-DET.html">DET</a></tt> (2307; 98% instances), <tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_gsd-pos-DET.html">DET</a></tt> (43; 2% instances), <tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_gsd-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="de_gsd-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="de_gsd-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="de_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="de_gsd-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="de_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="de_gsd-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det:poss	color:blue
1	Ich	ich	PRON	PPER	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	hatte	haben	VERB	VAFIN	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	_
3	Gelegenheit	Gelegenheit	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	2	obj	_	_
4	eines	ein	DET	PIS	Case=Acc|Definite=Ind|Gender=Neut|Number=Sing|NumType=Card|PronType=Art	6	det	_	_
5	seiner	sein	DET	PPOSAT	Case=Gen|Gender=Neut|Gender[psor]=Masc,Neut|Number=Plur|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	6	det:poss	_	_
6	Seminare	Seminar	NOUN	NN	Case=Gen|Gender=Neut|Number=Plur	8	obj	_	_
7	zu	zu	PART	PTKZU	_	8	mark	_	_
8	besuchen	besuchen	VERB	VVINF	VerbForm=Inf	3	xcomp	_	SpaceAfter=No
9	.	.	PUNCT	$.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det:poss	color:blue
1	Hab	haben	AUX	VAFIN	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	aux	_	_
2	meinen	mein	DET	PPOSAT	Case=Acc|Gender=Masc|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	3	det:poss	_	_
3	Smart	Smart	PROPN	NE	Case=Acc|Gender=Masc|Number=Sing	5	obj	_	NamedEntity=Yes
4	bekleben	bekleben	VERB	VVINF	VerbForm=Inf	5	xcomp	_	_
5	lassen	lassen	VERB	VVINF	VerbForm=Inf	0	root	_	SpaceAfter=No
6	.	.	PUNCT	$.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 det:poss	color:blue
1	Fesselt	fesseln	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	er	er	PRON	PPER	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	1	nsubj	_	_
3	dennoch	dennoch	ADV	ADV	_	1	advmod	_	_
4	viele	viel	DET	PIAT	Case=Acc|Gender=Masc|Number=Plur|PronType=Ind	5	det	_	_
5	Leser	Leser	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur	1	obj	_	SpaceAfter=No
6	,	,	PUNCT	$,	_	15	punct	_	_
7	dann	dann	ADV	ADV	_	15	advmod	_	_
8	durch	durch	ADP	APPR	_	15	case	_	_
9	seine	sein	DET	PPOSAT	Case=Acc|Gender=Fem|Gender[psor]=Masc,Neut|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	10	det:poss	_	_
10	knappe	knapp	ADJ	ADJA	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	15	amod	_	SpaceAfter=No
11	,	,	PUNCT	$,	_	12	punct	_	_
12	treffende	treffend	ADJ	ADJA	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	10	conj	_	_
13	und	und	CCONJ	KON	_	14	cc	_	_
14	hintergründige	hintergründig	ADJ	ADJA	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	10	conj	_	_
15	Sprache	Sprache	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	1	obl	_	SpaceAfter=No
16	.	.	PUNCT	$.	_	1	punct	_	_

~~~


