---
layout: base
title:  'Statistics of discourse in UD_Danish-DDT'
udver: '2'
---

## Treebank Statistics: UD_Danish-DDT: Relations: `discourse`

This relation is universal.

32 nodes (0%) are attached to their parents as `discourse`.

20 instances of `discourse` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.5625.

The following 5 pairs of parts of speech are connected with `discourse`: <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-INTJ.html">INTJ</a></tt> (24; 75% instances), <tt><a href="da_ddt-pos-ADV.html">ADV</a></tt>-<tt><a href="da_ddt-pos-INTJ.html">INTJ</a></tt> (3; 9% instances), <tt><a href="da_ddt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="da_ddt-pos-INTJ.html">INTJ</a></tt> (3; 9% instances), <tt><a href="da_ddt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="da_ddt-pos-INTJ.html">INTJ</a></tt> (1; 3% instances), <tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da_ddt-pos-INTJ.html">INTJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 discourse	color:blue
1	"	"	PUNCT	_	_	2	punct	_	SpaceAfter=No
2	Ja	ja	INTJ	_	_	5	discourse	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	SpaceAfter=No
4	"	"	PUNCT	_	_	2	punct	_	_
5	siger	sige	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	han	han	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
7	og	og	CCONJ	_	_	8	cc	_	_
8	vender	vende	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	_
9	sig	sig	PRON	_	Case=Acc|Person=3|PronType=Prs|Reflex=Yes	8	obj	_	_
10	om	om	ADV	_	_	8	advmod:lmod	_	_
11	på	på	ADP	_	AdpType=Prep	12	case	_	_
12	siden	side	NOUN	_	Definite=Def|Gender=Com|Number=Sing	10	obl	_	SpaceAfter=No
13	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 discourse	color:blue
1	Så	så	ADV	_	_	0	root	_	_
2	pyt	pyt	INTJ	_	_	1	discourse	_	_
3	med	med	ADP	_	AdpType=Prep	8	mark	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	at	at	SCONJ	_	_	8	mark	_	_
6	gamle	gammel	ADJ	_	Definite=Def|Degree=Pos|Number=Sing	7	amod	_	_
7	Platon	Platon	PROPN	_	_	8	nsubj	_	_
8	videregav	videregive	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	2	parataxis	_	_
9	Atlantis	Atlantis	PROPN	_	_	8	obj	_	_
10	historien	historie	NOUN	_	Definite=Def|Gender=Com|Number=Sing	9	flat	_	_
11	som	som	ADP	_	PartType=Inf	13	case	_	_
12	et	en	DET	_	Gender=Neut|Number=Sing|PronType=Ind	13	det	_	_
13	lærestykke	lærestykke	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	8	obl	_	_
14	om	om	ADP	_	AdpType=Prep	16	case	_	_
15	de	den	DET	_	Number=Plur|PronType=Dem	16	det	_	_
16	ulykker	ulykke	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	13	nmod	_	SpaceAfter=No
17	,	,	PUNCT	_	_	20	punct	_	_
18	der	der	PRON	_	PartType=Inf	20	nsubj	_	_
19	vil	ville	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	20	aux	_	_
20	ske	ske	VERB	_	VerbForm=Inf|Voice=Act	16	acl:relcl	_	SpaceAfter=No
21	,	,	PUNCT	_	_	25	punct	_	_
22	når	når	SCONJ	_	_	25	mark	_	_
23	et	en	DET	_	Gender=Neut|Number=Sing|PronType=Ind	24	det	_	_
24	folk	folk	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	25	nsubj	_	_
25	bliver	blive	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	20	amod	_	_
26	kålhøgent	kålhøgen	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	25	xcomp	_	SpaceAfter=No
27	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 discourse	color:blue
1	Men	men	CCONJ	_	_	2	cc	_	_
2	Anne	Anne	PROPN	_	_	0	root	_	_
3	Linnet	Linnet	PROPN	_	_	2	flat	_	_
4	-	-	PUNCT	_	_	5	punct	_	_
5	oh	oh	INTJ	_	_	2	discourse	_	_
6	la	la	INTJ	_	_	5	list	_	_
7	la	la	INTJ	_	_	6	list	_	SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	_	SpaceAfter=No
9	"	"	PUNCT	_	_	2	punct	_	_

~~~


