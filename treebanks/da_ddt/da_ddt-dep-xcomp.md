---
layout: base
title:  'Statistics of xcomp in UD_Danish-DDT'
udver: '2'
---

## Treebank Statistics: UD_Danish-DDT: Relations: `xcomp`

This relation is universal.

687 nodes (1%) are attached to their parents as `xcomp`.

532 instances of `xcomp` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.10625909752547.

The following 8 pairs of parts of speech are connected with `xcomp`: <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-VERB.html">VERB</a></tt> (494; 72% instances), <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-ADJ.html">ADJ</a></tt> (93; 14% instances), <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt> (63; 9% instances), <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-ADV.html">ADV</a></tt> (18; 3% instances), <tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da_ddt-pos-VERB.html">VERB</a></tt> (8; 1% instances), <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-PRON.html">PRON</a></tt> (6; 1% instances), <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-PROPN.html">PROPN</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 xcomp	color:blue
1	-	-	PUNCT	_	_	5	punct	_	_
2	Et	en	DET	_	Gender=Neut|Number=Sing|PronType=Ind	5	det	_	_
3	rigtigt	rigtig	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	5	amod	_	_
4	romantisk	romantisk	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	5	amod	_	_
5	julebryllup	julebryllup	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	7	obl	_	SpaceAfter=No
6	?	?	PUNCT	_	_	5	punct	_	_
7	fortsatte	fortsætte	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
8	han	han	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
9	spørgende	spørge	VERB	_	Tense=Pres|VerbForm=Part	7	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 xcomp	color:blue
1	Han	han	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	begyndte	begynde	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	at	at	PART	_	PartType=Inf	4	mark	_	_
4	rulle	rulle	VERB	_	VerbForm=Inf|Voice=Act	2	obj	_	_
5	med	med	ADP	_	AdpType=Prep	6	case	_	_
6	øjnene	øje	NOUN	_	Definite=Def|Gender=Neut|Number=Plur	4	obl	_	SpaceAfter=No
7	,	,	PUNCT	_	_	11	punct	_	_
8	og	og	CCONJ	_	_	11	cc	_	_
9	hans	hans	DET	_	Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	10	det	_	_
10	nakke	nakke	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	11	nsubj	_	_
11	blev	blive	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	_
12	slap	slap	ADJ	_	Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	11	xcomp	_	SpaceAfter=No
13	.	.	PUNCT	_	_	2	punct	_	SpaceAfter=No
14	"	"	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 xcomp	color:blue
1	600	600	NUM	_	NumType=Card	2	nummod	_	_
2	Brugser	brugs	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	5	nsubj	_	_
3	har	have	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	_	_
4	ikke	ikke	ADV	_	_	5	advmod	_	_
5	fået	få	VERB	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	lov	lov	NOUN	_	_	5	obj	_	_
7	at	at	PART	_	PartType=Inf	8	mark	_	_
8	blive	blive	VERB	_	VerbForm=Inf|Voice=Act	6	nmod	_	_
9	Super-Brugser	Super-Brugs	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	8	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	_	_	5	punct	_	_

~~~


