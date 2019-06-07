---
layout: base
title:  'Statistics of acl in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="es_pud-dep-acl-relcl.html">acl:relcl</a></tt>.

109 nodes (0%) are attached to their parents as `acl`.

103 instances of `acl` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.71559633027523.

The following 9 pairs of parts of speech are connected with `acl`: <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (94; 86% instances), <tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (5; 5% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="es_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="es_pud-pos-DET.html">DET</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="es_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 acl	color:blue
1	El	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	máximo	_	NOUN	NN	Gender=Masc|Number=Sing	4	nsubj	_	_
3	permitido	_	VERB	VBN	Gender=Masc|Number=Sing|VerbForm=Fin	2	acl	_	_
4	es	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	de	_	ADP	IN	_	7	case	_	_
6	5 000	_	NUM	CD	Gender=Masc|NumType=Card	7	nummod	_	OrigForm=5000
7	$	_	NOUN	NN	Gender=Masc|Number=Plur	4	obl	_	_
8	por	_	ADP	IN	_	9	case	_	_
9	persona	_	NOUN	NN	Gender=Fem|Number=Sing	7	nmod	_	SpaceAfter=No
10	.	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 acl	color:blue
1	En	_	ADP	IN	_	2	case	_	_
2	2007	_	NUM	CD	Gender=Masc|NumType=Card	4	obl	_	_
3	la	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	película	_	NOUN	NN	Gender=Fem|Number=Sing	0	root	_	_
5	más	_	ADV	RBR	Degree=Cmp	6	advmod	_	_
6	exitosa	_	ADJ	JJ	Gender=Fem|Number=Sing	4	amod	_	_
7	fue	ser	AUX	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	cop	_	_
8	"	_	PUNCT	``	_	10	punct	_	SpaceAfter=No
9	El	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	Proper=True
10	Greco	_	PROPN	NNP	Gender=Masc|Number=Sing	4	nsubj	_	SpaceAfter=No
11	"	_	PUNCT	''	_	10	punct	_	SpaceAfter=No
12	,	_	PUNCT	,	_	13	punct	_	_
13	dirigida	_	VERB	VBN	Gender=Fem|Number=Sing|VerbForm=Fin	10	acl	_	_
14	por	_	ADP	IN	_	15	case	_	_
15	Yannis	_	PROPN	NNP	Gender=Masc|Number=Sing	13	obl	_	_
16	Smaragdis	_	PROPN	NNP	Gender=Masc|Number=Sing	15	flat:name	_	SpaceAfter=No
17	.	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 13 acl	color:blue
1	El	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	estudio	_	NOUN	NN	Gender=Masc|Number=Sing	8	nsubj	_	_
3	de	_	ADP	IN	_	5	case	_	_
4	los	el	DET	DT	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	5	det	_	_
5	volcanes	_	NOUN	NN	Gender=Masc|Number=Plur	2	nmod	_	_
6	se	él	PRON	SE	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	8	compound:prt	_	_
7	llama	_	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	_
8	vulcanología	_	NOUN	NN	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
9	,	_	PUNCT	,	_	13	punct	_	_
10	a	_	ADP	IN	_	13	advmod	_	_
11	veces	_	NOUN	NN	Gender=Fem|Number=Plur	10	fixed	_	_
12	escrito	_	AUX	VBN	Gender=Masc|Number=Sing|VerbForm=Fin	13	cop	_	_
13	volcanología	_	NOUN	NN	Gender=Fem|Number=Sing	8	acl	_	SpaceAfter=No
14	.	_	PUNCT	.	_	8	punct	_	_

~~~


