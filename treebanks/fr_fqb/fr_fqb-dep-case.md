---
layout: base
title:  'Statistics of case in UD_French-FQB'
udver: '2'
---

## Treebank Statistics: UD_French-FQB: Relations: `case`

This relation is universal.

2684 nodes (11%) are attached to their parents as `case`.

2684 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.67064083457526.

The following 10 pairs of parts of speech are connected with `case`: <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-ADP.html">ADP</a></tt> (1781; 66% instances), <tt><a href="fr_fqb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_fqb-pos-ADP.html">ADP</a></tt> (727; 27% instances), <tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_fqb-pos-ADP.html">ADP</a></tt> (62; 2% instances), <tt><a href="fr_fqb-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_fqb-pos-ADP.html">ADP</a></tt> (59; 2% instances), <tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_fqb-pos-ADP.html">ADP</a></tt> (25; 1% instances), <tt><a href="fr_fqb-pos-X.html">X</a></tt>-<tt><a href="fr_fqb-pos-ADP.html">ADP</a></tt> (13; 0% instances), <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt> (11; 0% instances), <tt><a href="fr_fqb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_fqb-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 case	color:blue
1	Qu'	que	PRON	_	PronType=Int	0	root	_	SpaceAfter=No
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	SpaceAfter=No
3	-ce	ce	PRON	_	_	1	nsubj	_	_
4	qu'	que	SCONJ	_	_	6	mark	_	SpaceAfter=No
5	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	aide	aide	NOUN	_	Number=Sing	1	dislocated	_	_
7	à	à	ADP	_	_	9	case	_	_
8	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	logement	logement	NOUN	_	Gender=Masc|Number=Sing	6	nmod	_	_
10	?	?	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 case	color:blue
1	Je	il	PRON	_	Number=Sing|Person=1	2	nsubj	_	_
2	vais	aller	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	partir	partir	VERB	_	VerbForm=Inf	2	xcomp	_	_
4	en	en	ADP	_	_	5	case	_	_
5	stage	stage	NOUN	_	Gender=Masc|Number=Sing	3	obl:mod	_	_
6	en	en	ADP	_	_	7	case	_	_
7	France	France	PROPN	_	Gender=Masc|Number=Sing	3	obl:mod	_	_
8	ou	ou	CCONJ	_	_	9	cc	_	_
9	à	à_l'étranger	ADP	_	_	7	conj	_	EXTPOS=ADV
10	l'	_	DET	_	_	9	fixed	_	SpaceAfter=No
11	étranger	_	NOUN	_	_	9	fixed	_	SpaceAfter=No
12	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 case	color:blue
1	À	à	ADP	_	_	2	case	_	_
2	qui	qui	PRON	_	PronType=Int	7	obl:arg	_	_
3	Shostakovitch	Shostakovitch	PROPN	_	_	7	nsubj	_	_
4	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux:tense	_	SpaceAfter=No
5	-t	t	PART	_	_	6	dep	_	SpaceAfter=No
6	-il	il	PRON	_	Gender=Masc|Number=Sing|Person=3	7	expl:subj	_	_
7	dédié	dédier	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
8	son	son	DET	_	Number=Sing|Poss=Yes	9	det	_	_
9	quatuor	quatuor	NOUN	_	Gender=Masc|Number=Sing	7	obj	_	_
10	à	à	ADP	_	_	11	case	_	_
11	cordes	corde	NOUN	_	Gender=Fem|Number=Plur	9	nmod	_	_
12	no	no	NOUN	_	_	9	nmod	_	_
13	8	8	NUM	_	NumType=Card	12	nummod	_	_
14	?	?	PUNCT	_	_	7	punct	_	_

~~~


