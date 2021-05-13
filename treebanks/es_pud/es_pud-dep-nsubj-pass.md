---
layout: base
title:  'Statistics of nsubj:pass in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="es_pud-dep-nsubj.html">nsubj</a></tt>.

165 nodes (1%) are attached to their parents as `nsubj:pass`.

122 instances of `nsubj:pass` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.37575757575758.

The following 9 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (115; 70% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-PRON.html">PRON</a></tt> (25; 15% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt> (13; 8% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-DET.html">DET</a></tt> (5; 3% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:pass	color:blue
1	Su	_	PRON	DTP$	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	2	det	_	_
2	voz	_	NOUN	NN	Gender=Fem|Number=Sing	4	nsubj:pass	_	_
3	se	él	PRON	SE	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	4	compound:prt	_	_
4	escuchó	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
5	literalmente	_	ADV	RB	_	4	advmod	_	_
6	por	_	ADP	IN	_	9	case	_	_
7	todo	_	DET	PDT	Gender=Masc|Number=Sing|PronType=Tot	9	det	_	_
8	el	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	mundo	_	NOUN	NN	Gender=Masc|Number=Sing	4	obl	_	SpaceAfter=No
10	,	_	PUNCT	,	_	11	punct	_	_
11	dijo	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	parataxis	_	_
12	Leive	_	PROPN	NNP	Gender=Fem|Number=Sing	11	nsubj	_	SpaceAfter=No
13	.	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nsubj:pass	color:blue
1	Hay	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	gente	_	NOUN	NN	Gender=Fem|Number=Sing	1	obj	_	_
3	que	_	PRON	REL	Gender=Fem|Number=Sing|PronType=Int,Rel	5	nsubj:pass	_	_
4	fue	ser	AUX	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	5	aux:pass	_	_
5	asesinada	_	VERB	VBN	Gender=Fem|Number=Sing|VerbForm=Fin	2	acl:relcl	_	_
6	allí	_	ADV	RB	_	5	advmod	_	SpaceAfter=No
7	.	_	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Weiss	_	PROPN	NNP	Gender=Masc|Number=Sing	3	nsubj:pass	_	_
2	fue	ser	AUX	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	3	aux:pass	_	_
3	galardonado	_	VERB	VBN	Gender=Masc|Number=Sing|VerbForm=Fin	0	root	_	_
4	con	_	ADP	IN	_	6	case	_	_
5	los	el	DET	DT	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	6	det	_	_
6	premios	_	NOUN	NN	Gender=Masc|Number=Plur	3	obl	_	_
7	de	_	ADP	IN	_	8	case	_	_
8	literatura	_	NOUN	NN	Gender=Fem|Number=Sing	6	nmod	_	_
9	de	_	ADP	IN	_	11	case	_	_
10	las	el	DET	DT	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	11	det	_	_
11	ciudades	_	NOUN	NN	Gender=Fem|Number=Plur	6	nmod	_	_
12	de	_	ADP	IN	_	13	case	_	_
13	Colonia	_	PROPN	NNP	Number=Sing	11	nmod	_	_
14	y	_	CCONJ	CC	_	15	cc	_	_
15	Bremen	_	PROPN	NNP	Number=Sing	13	conj	_	SpaceAfter=No
16	.	_	PUNCT	.	_	3	punct	_	_

~~~


