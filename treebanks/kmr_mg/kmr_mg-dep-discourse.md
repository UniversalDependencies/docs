---
layout: base
title:  'Statistics of discourse in UD_Kurmanji-MG'
udver: '2'
---

## Treebank Statistics: UD_Kurmanji-MG: Relations: `discourse`

This relation is universal.

28 nodes (0%) are attached to their parents as `discourse`.

26 instances of `discourse` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.

The following 11 pairs of parts of speech are connected with `discourse`: <tt><a href="kmr_mg-pos-VERB.html">VERB</a></tt>-<tt><a href="kmr_mg-pos-INTJ.html">INTJ</a></tt> (9; 32% instances), <tt><a href="kmr_mg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kmr_mg-pos-INTJ.html">INTJ</a></tt> (4; 14% instances), <tt><a href="kmr_mg-pos-VERB.html">VERB</a></tt>-<tt><a href="kmr_mg-pos-NOUN.html">NOUN</a></tt> (3; 11% instances), <tt><a href="kmr_mg-pos-VERB.html">VERB</a></tt>-<tt><a href="kmr_mg-pos-PROPN.html">PROPN</a></tt> (3; 11% instances), <tt><a href="kmr_mg-pos-AUX.html">AUX</a></tt>-<tt><a href="kmr_mg-pos-PART.html">PART</a></tt> (2; 7% instances), <tt><a href="kmr_mg-pos-VERB.html">VERB</a></tt>-<tt><a href="kmr_mg-pos-ADJ.html">ADJ</a></tt> (2; 7% instances), <tt><a href="kmr_mg-pos-AUX.html">AUX</a></tt>-<tt><a href="kmr_mg-pos-INTJ.html">INTJ</a></tt> (1; 4% instances), <tt><a href="kmr_mg-pos-AUX.html">AUX</a></tt>-<tt><a href="kmr_mg-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="kmr_mg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kmr_mg-pos-PART.html">PART</a></tt> (1; 4% instances), <tt><a href="kmr_mg-pos-PRON.html">PRON</a></tt>-<tt><a href="kmr_mg-pos-INTJ.html">INTJ</a></tt> (1; 4% instances), <tt><a href="kmr_mg-pos-VERB.html">VERB</a></tt>-<tt><a href="kmr_mg-pos-PART.html">PART</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 discourse	color:blue
1	Belê	belê	INTJ	ij	_	5	discourse	_	_
2	li	li	X	x	_	3	dep	_	_
3	ber	ber	ADP	pr	AdpType=Prep	4	case	_	_
4	derî	derî	NOUN	n	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	5	nmod	_	_
5	keti bû	ketin	VERB	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Pqp|VerbForm=Fin	0	root	_	_
6	erdê	erd	NOUN	n	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	5	obl:dat	_	SpaceAfter=No
7	.	.	PUNCT	sent	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 discourse	color:blue
1	Holmes	Holmes	PROPN	np	Case=Acc|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
2	:	:	PUNCT	sent	_	7	punct	_	_
3	Belê	belê	INTJ	ij	_	7	discourse	_	_
4	ev	ev	DET	det	Case=Nom|Gender=Fem,Masc|Number=Plur,Sing|PronType=Dem	5	det	_	_
5	gotin	gotin	NOUN	n	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	7	nsubj	_	_
6	di	di	ADP	pr	AdpType=Prep	7	case	_	_
7	cihê	cih	NOUN	n	Case=Con|Definite=Def|Gender=Masc|Number=Sing	1	parataxis	_	_
8	xwe	xwe	PRON	prn	Gender=Fem,Masc|Number=Plur,Sing|PronType=Prs|Reflex=Yes	7	nmod:poss	_	_
9	de	de	ADP	post	AdpType=Post	7	case	_	_
10	ye	bûn	AUX	vbcop	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	SpaceAfter=No
11	;	;	PUNCT	sent	_	12	punct	_	_
12	heye	hebûn	AUX	vbhaver	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	conj	_	_
13	ko	ku	SCONJ	cnjsub	_	12	orphan	_	SpaceAfter=No
14	...	...	PUNCT	sent	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 4 discourse	color:blue
1	Holmes	Holmes	PROPN	np	Case=Acc|Gender=Masc|Number=Sing	2	nsubj	_	_
2	gotê	gotin	VERB	vblex	Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
3	:	:	PUNCT	sent	_	12	punct	_	_
4	Roja	roj	NOUN	n	Case=Con|Definite=Def|Gender=Fem|Number=Sing	12	discourse	_	_
5	te	tu	PRON	prn	Case=Acc|Gender=Fem,Masc|Number=Sing|Person=2|PronType=Prs	4	nmod:poss	_	_
6	xweş	xweş	ADJ	adj	Degree=Pos	4	amod	_	_
7	banû	banû	NOUN	n	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	12	discourse	_	SpaceAfter=No
8	;	;	PUNCT	sent	_	7	punct	_	_
9	tu	tu	PRON	prn	Case=Nom|Gender=Fem,Masc|Number=Sing|Person=2|PronType=Prs	12	nsubj	_	_
10	bi	bi	ADP	pr	AdpType=Prep	11	case	_	_
11	xêr	xêr	NOUN	n	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	12	nmod	_	_
12	hatî	hatin	VERB	vblex	Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin	2	parataxis	_	SpaceAfter=No
13	.	.	PUNCT	sent	_	2	punct	_	_

~~~


