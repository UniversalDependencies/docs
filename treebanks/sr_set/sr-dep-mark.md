---
layout: base
title:  'Statistics of mark in UD_Serbian'
udver: '2'
---

## Treebank Statistics: UD_Serbian: Relations: `mark`

This relation is universal.

2850 nodes (3%) are attached to their parents as `mark`.

2848 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.27964912280702.

The following 22 pairs of parts of speech are connected with `mark`: <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-SCONJ.html">SCONJ</a></tt> (2130; 75% instances), <tt><a href="sr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr-pos-SCONJ.html">SCONJ</a></tt> (292; 10% instances), <tt><a href="sr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr-pos-SCONJ.html">SCONJ</a></tt> (179; 6% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-ADV.html">ADV</a></tt> (48; 2% instances), <tt><a href="sr-pos-AUX.html">AUX</a></tt>-<tt><a href="sr-pos-SCONJ.html">SCONJ</a></tt> (44; 2% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-PRON.html">PRON</a></tt> (43; 2% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-ADP.html">ADP</a></tt> (27; 1% instances), <tt><a href="sr-pos-ADV.html">ADV</a></tt>-<tt><a href="sr-pos-SCONJ.html">SCONJ</a></tt> (23; 1% instances), <tt><a href="sr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr-pos-PRON.html">PRON</a></tt> (14; 0% instances), <tt><a href="sr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr-pos-ADP.html">ADP</a></tt> (8; 0% instances), <tt><a href="sr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr-pos-ADV.html">ADV</a></tt> (8; 0% instances), <tt><a href="sr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr-pos-PRON.html">PRON</a></tt> (6; 0% instances), <tt><a href="sr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr-pos-ADV.html">ADV</a></tt> (5; 0% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-CCONJ.html">CCONJ</a></tt> (5; 0% instances), <tt><a href="sr-pos-PRON.html">PRON</a></tt>-<tt><a href="sr-pos-SCONJ.html">SCONJ</a></tt> (4; 0% instances), <tt><a href="sr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr-pos-ADP.html">ADP</a></tt> (3; 0% instances), <tt><a href="sr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sr-pos-SCONJ.html">SCONJ</a></tt> (3; 0% instances), <tt><a href="sr-pos-ADV.html">ADV</a></tt>-<tt><a href="sr-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="sr-pos-AUX.html">AUX</a></tt>-<tt><a href="sr-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="sr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="sr-pos-ADV.html">ADV</a></tt>-<tt><a href="sr-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 mark	color:blue
1	Druga	drugi	NUM	_	Case=Nom|Gender=Fem|Number=Sing|NumType=Ord	2	nummod	_	_
2	dvojica	dvojica	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
3	su	biti	AUX	_	Number=Plur|Person=3|Tense=Pres	4	aux	_	_
4	rekli	reći	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	_
5	da	da	SCONJ	_	_	7	mark	_	_
6	neće	hteti	AUX	_	Number=Sing|Person=3|Tense=Pres	7	aux	_	_
7	prisustvovati	prisustvovati	VERB	_	VerbForm=Inf	4	ccomp	_	SpaceAfter=No
8	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 mark	color:blue
1	Pejović	Pejović	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	kaže	kazati	VERB	_	Number=Sing|Person=3|Tense=Pres	0	root	_	_
3	da	da	SCONJ	_	_	7	mark	_	_
4	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	7	aux	_	_
5	romansa	romansa	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	7	nsubj	_	_
6	bila	biti	AUX	_	Gender=Fem|Number=Sing|VerbForm=Part	7	aux	_	_
7	osuđena	osuditi	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing|VerbForm=Part	2	ccomp	_	_
8	na	na	ADP	_	Case=Acc	9	case	_	_
9	propast	propast	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	7	obl	_	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 mark	color:blue
1	A	a	CCONJ	_	_	8	discourse	_	_
2	ako	ako	SCONJ	_	_	6	mark	_	_
3	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	6	cop	_	_
4	sve	sve	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Ind	6	nsubj	_	_
5	u	u	ADP	_	Case=Loc	6	case	_	_
6	redu	red	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	8	advcl	_	SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	_
8	mogu	moći	VERB	_	Number=Plur|Person=3|Tense=Pres	0	root	_	_
9	da	da	SCONJ	_	_	10	mark	_	_
10	otpočnu	otpočeti	VERB	_	Number=Plur|Person=3|Tense=Pres	8	xcomp	_	_
11	projekat	projekat	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	10	obj	_	_
12	"	"	PUNCT	_	_	8	punct	_	SpaceAfter=No
13	,	,	PUNCT	_	_	14	punct	_	_
14	kaže	kazati	VERB	_	Number=Sing|Person=3|Tense=Pres	8	parataxis	_	_
15	Božinov	Božinov	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	14	nsubj	_	SpaceAfter=No
16	.	.	PUNCT	_	_	8	punct	_	_

~~~


