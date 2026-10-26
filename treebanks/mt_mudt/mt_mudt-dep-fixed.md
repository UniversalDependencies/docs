---
layout: base
title:  'Statistics of fixed in UD_Maltese-MUDT'
udver: '2'
---

## Treebank Statistics: UD_Maltese-MUDT: Relations: `fixed`

This relation is universal.

186 nodes (0%) are attached to their parents as `fixed`.

186 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 14 pairs of parts of speech are connected with `fixed`: <tt><a href="mt_mudt-pos-ADP.html">ADP</a></tt>-<tt><a href="mt_mudt-pos-SCONJ.html">SCONJ</a></tt> (90; 48% instances), <tt><a href="mt_mudt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="mt_mudt-pos-SCONJ.html">SCONJ</a></tt> (25; 13% instances), <tt><a href="mt_mudt-pos-PRON.html">PRON</a></tt>-<tt><a href="mt_mudt-pos-ADV.html">ADV</a></tt> (13; 7% instances), <tt><a href="mt_mudt-pos-ADV.html">ADV</a></tt>-<tt><a href="mt_mudt-pos-ADV.html">ADV</a></tt> (11; 6% instances), <tt><a href="mt_mudt-pos-ADV.html">ADV</a></tt>-<tt><a href="mt_mudt-pos-PRON.html">PRON</a></tt> (10; 5% instances), <tt><a href="mt_mudt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mt_mudt-pos-ADP.html">ADP</a></tt> (10; 5% instances), <tt><a href="mt_mudt-pos-ADV.html">ADV</a></tt>-<tt><a href="mt_mudt-pos-ADP.html">ADP</a></tt> (6; 3% instances), <tt><a href="mt_mudt-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="mt_mudt-pos-ADV.html">ADV</a></tt> (6; 3% instances), <tt><a href="mt_mudt-pos-ADP.html">ADP</a></tt>-<tt><a href="mt_mudt-pos-PRON.html">PRON</a></tt> (4; 2% instances), <tt><a href="mt_mudt-pos-ADV.html">ADV</a></tt>-<tt><a href="mt_mudt-pos-SCONJ.html">SCONJ</a></tt> (3; 2% instances), <tt><a href="mt_mudt-pos-PRON.html">PRON</a></tt>-<tt><a href="mt_mudt-pos-CCONJ.html">CCONJ</a></tt> (3; 2% instances), <tt><a href="mt_mudt-pos-ADP.html">ADP</a></tt>-<tt><a href="mt_mudt-pos-ADP.html">ADP</a></tt> (2; 1% instances), <tt><a href="mt_mudt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mt_mudt-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="mt_mudt-pos-ADP.html">ADP</a></tt>-<tt><a href="mt_mudt-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 fixed	color:blue
1	Telqet	_	VERB	VERB	_	0	root	_	_
2	bla	_	ADP	PREP	ExtPos=SCONJ	4	mark	_	_
3	ma	_	SCONJ	COMP	_	2	fixed	_	_
4	sellmitilhom	_	VERB	VERB	_	1	advcl	_	SpaceAfter=No
5	.	_	PUNCT	X_PUN	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	Kull	_	SCONJ	QUAN	ExtPos=SCONJ	4	mark	_	_
2	ma	_	SCONJ	COMP	_	1	fixed	_	_
3	huma	_	PRON	PRON_PERS	_	4	cop	_	_
4	iżgħar	_	ADJ	ADJ	_	11	advcl	_	_
5	minni	_	PRON	PREP_PRON	_	4	obl	_	_
6	ftit	_	DET	QUAN	_	7	det	_	_
7	snin	_	NOUN	NOUN	_	4	obl	_	SpaceAfter=No
8	,	_	PUNCT	X_PUN	_	4	punct	_	_
9	u	_	CCONJ	CONJ_CORD	_	11	cc	_	_
10	xorta	_	NOUN	NOUN	_	11	obl	_	_
11	jsejħuli	_	VERB	VERB	_	0	root	_	_
12	mgħallem	_	NOUN	NOUN	_	11	obl:arg	_	SpaceAfter=No
13	.	_	PUNCT	X_PUN	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 fixed	color:blue
1	Żammit	_	PROPN	NOUN_PROP	_	2	nsubj	_	_
2	għandha	_	VERB	VERB_PSEU	_	0	root	_	_
3	esperjenza	_	NOUN	NOUN	_	2	obj	_	_
4	estensiva	_	ADJ	ADJ	_	3	amod	_	_
5	fix-	_	ADP	PREP_DEF	_	6	case:det	_	SpaceAfter=No
6	xogħol	_	NOUN	NOUN	_	3	nmod	_	_
7	mat-	_	ADP	PREP_DEF	_	8	case:det	_	SpaceAfter=No
8	tfal	_	NOUN	NOUN	_	6	nmod	_	_
9	kif	_	PRON	PRON_INT	ExtPos=CCONJ	12	cc	_	_
10	ukoll	_	ADV	FOC	_	9	fixed	_	_
11	fil-	_	ADP	PREP_DEF	_	12	case:det	_	SpaceAfter=No
12	qasam	_	NOUN	NOUN	_	6	conj	_	_
13	tas-	_	ADP	GEN_DEF	_	14	case:det	_	SpaceAfter=No
14	servizzi	_	NOUN	NOUN	_	12	nmod:poss	_	_
15	soċjali	_	ADJ	ADJ	_	14	amod	_	SpaceAfter=No
16	.	_	PUNCT	X_PUN	_	2	punct	_	_

~~~


