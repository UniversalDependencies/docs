---
layout: base
title:  'Statistics of iobj in UD_Catalan-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Catalan-AnCora: Relations: `iobj`

This relation is universal.

1536 nodes (0%) are attached to their parents as `iobj`.

784 instances of `iobj` (51%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.689453125.

The following 10 pairs of parts of speech are connected with `iobj`: <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-PRON.html">PRON</a></tt> (679; 44% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt> (537; 35% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-PROPN.html">PROPN</a></tt> (195; 13% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (114; 7% instances), <tt><a href="ca_ancora-pos-AUX.html">AUX</a></tt>-<tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 iobj	color:blue
1	Ara	ara	ADV	_	_	6	advmod	_	SpaceAfter=No
2	,	,	PUNCT	_	PunctType=Comm	3	punct	_	_
3	però	però	ADV	_	_	6	advmod	_	SpaceAfter=No
4	,	,	PUNCT	_	PunctType=Comm	3	punct	_	_
5	es	ell	PRON	_	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	6	iobj	_	_
6	proposa	proposar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	augmentar	augmentar	VERB	_	VerbForm=Inf	6	xcomp	_	_
8	ne	en	PRON	_	Case=Gen|Person=3|PronType=Prs	7	obj	_	_
9	l'	el	DET	_	Definite=Def|Number=Sing|PronType=Art	10	det	_	SpaceAfter=No
10	ús	ús	NOUN	_	Gender=Masc|Number=Sing	7	obj	_	_
11	social	social	ADJ	_	Number=Sing	10	amod	_	SpaceAfter=No
12	.	.	PUNCT	_	PunctType=Peri	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 iobj	color:blue
1	La	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	peregrinació	peregrinació	NOUN	_	Gender=Fem|Number=Sing	5	iobj	_	_
3	l'	ell	PRON	_	Case=Acc|Gender=Fem,Masc|Number=Sing|Person=3|PronType=Prs	5	obj	_	SpaceAfter=No
4	ha	haver	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
5	organitzat	organitzar	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	sindicat	sindicat	NOUN	_	Gender=Masc|Number=Sing	5	nsubj	_	_
8	Unió	Unió	PROPN	_	_	7	appos	_	MWE=Unió_de_Pagesos|MWEPOS=PROPN
9	de	de	ADP	_	_	10	case	_	_
10	Pagesos	Pagesos	PROPN	_	_	8	flat	_	SpaceAfter=No
11	.	.	PUNCT	_	PunctType=Peri	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 iobj	color:blue
1	"	"	PUNCT	_	PunctType=Quot	6	punct	_	SpaceAfter=No
2	A	a	ADP	_	_	3	case	_	_
3	Dutruel	Dutruel	PROPN	_	_	6	iobj	_	_
4	no	no	ADV	_	Polarity=Neg	6	advmod	_	_
5	el	ell	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	obj	_	_
6	rebran	rebre	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	_
7	amb	amb	ADP	_	_	8	case	_	_
8	aplaudiments	aplaudiment	NOUN	_	Gender=Masc|Number=Plur	6	obl	_	SpaceAfter=No
9	.	.	PUNCT	_	PunctType=Peri	6	punct	_	_

~~~


