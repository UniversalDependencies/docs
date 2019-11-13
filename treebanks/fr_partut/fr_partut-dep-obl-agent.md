---
layout: base
title:  'Statistics of obl:agent in UD_French-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_French-ParTUT: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="fr_partut-dep-obl.html">obl</a></tt>.

69 nodes (0%) are attached to their parents as `obl:agent`.

68 instances of `obl:agent` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.47826086956522.

The following 2 pairs of parts of speech are connected with `obl:agent`: <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt> (68; 99% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 obl:agent	color:blue
1	À	à	ADP	E	_	3	case	_	_
2	cet	ce	DET	DD	Gender=Masc|Number=Sing|PronType=Dem	3	det	_	_
3	effet	effet	NOUN	S	Gender=Masc|Number=Sing	8	obl	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	3	punct	_	_
5	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	commission	commission	NOUN	S	Gender=Fem|Number=Sing	8	nsubj:pass	_	_
7	est	être	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux:pass	_	_
8	assistée	assistée	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
9	par	par	ADP	E	_	11	case	_	_
10	un	un	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	comité	comité	NOUN	S	Gender=Masc|Number=Sing	8	obl:agent	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 19 obl:agent	color:blue
1	Elle	elle	PRON	PE	Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	contenait	contenir	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
3	200	200	NUM	N	NumType=Card	8	nummod	_	_
4	à	à	ADP	E	_	5	case	_	_
5	300	300	NUM	N	NumType=Card	3	nummod	_	_
6	à	à	ADP	E	_	7	case	_	_
7	400	400	NUM	N	NumType=Card	5	nummod	_	_
8	fois	foi	NOUN	S	Gender=Fem|Number=Plur	11	nmod	_	_
9	plus	plus	ADV	B	_	8	advmod	_	_
10	de	de	ADP	E	_	11	case	_	_
11	produits	produit	NOUN	S	Gender=Masc|Number=Plur	2	obl	_	_
12	toxiques	toxique	ADJ	A	Number=Plur	11	amod	_	_
13	que	que	ADP	E	_	15	case	_	_
14	les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	15	det	_	_
15	taux	taux	NOUN	S	Gender=Masc	8	nmod	_	_
16	autorisés	autoriser	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	15	acl	_	_
17	par	par	ADP	E	_	19	case	_	_
18	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	19	det	_	_
19	EPA	EPA	PROPN	SP	_	16	obl:agent	_	SpaceAfter=No
20	.	.	PUNCT	FS	_	2	punct	_	_

~~~


