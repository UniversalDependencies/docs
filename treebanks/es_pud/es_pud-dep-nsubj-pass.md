---
layout: base
title:  'Statistics of nsubj:pass in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="es_pud-dep-nsubj.html">nsubj</a></tt>.

165 nodes (1%) are attached to their parents as `nsubj:pass`.

122 instances of `nsubj:pass` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.31515151515152.

The following 8 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (116; 70% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-PRON.html">PRON</a></tt> (25; 15% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt> (15; 9% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-DET.html">DET</a></tt> (5; 3% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:pass	color:blue
1	Su	su	PRON	DTP$	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	2	det	_	_
2	voz	voz	NOUN	NN	Gender=Fem|Number=Sing	4	nsubj:pass	_	_
3	se	él	PRON	SE	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	4	expl:pass	_	_
4	escuchó	escuchar	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	literalmente	literalmente	ADV	RB	_	4	advmod	_	_
6	por	por	ADP	IN	_	9	case	_	_
7	todo	todo	DET	PDT	Gender=Masc|Number=Sing|PronType=Tot	9	det	_	_
8	el	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	mundo	mundo	NOUN	NN	Gender=Masc|Number=Sing	4	obl	_	SpaceAfter=No
10	,	,	PUNCT	,	_	11	punct	_	_
11	dijo	decir	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	parataxis	_	_
12	Leive	Leive	PROPN	NNP	Gender=Fem|Number=Sing	11	nsubj	_	SpaceAfter=No
13	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nsubj:pass	color:blue
1	Hay	haber	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	gente	gente	NOUN	NN	Gender=Fem|Number=Sing	1	obj	_	_
3	que	que	PRON	REL	Gender=Fem|Number=Sing|PronType=Rel	5	nsubj:pass	_	_
4	fue	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	aux:pass	_	_
5	asesinada	asesinar	VERB	VBN	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	2	acl:relcl	_	_
6	allí	allí	ADV	RB	_	5	advmod	_	SpaceAfter=No
7	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Weiss	Weiss	PROPN	NNP	Gender=Masc|Number=Sing	3	nsubj:pass	_	_
2	fue	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	aux:pass	_	_
3	galardonado	galardonar	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	con	con	ADP	IN	_	6	case	_	_
5	los	el	DET	DT	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	6	det	_	_
6	premios	premio	NOUN	NN	Gender=Masc|Number=Plur	3	obl	_	_
7	de	de	ADP	IN	_	8	case	_	_
8	literatura	literatura	NOUN	NN	Gender=Fem|Number=Sing	6	nmod	_	_
9	de	de	ADP	IN	_	11	case	_	_
10	las	el	DET	DT	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	11	det	_	_
11	ciudades	ciudad	NOUN	NN	Gender=Fem|Number=Plur	6	nmod	_	_
12	de	de	ADP	IN	_	13	case	_	_
13	Colonia	Colonia	PROPN	NNP	Number=Sing	11	nmod	_	_
14	y	y	CCONJ	CC	_	15	cc	_	_
15	Bremen	Bremen	PROPN	NNP	Number=Sing	13	conj	_	SpaceAfter=No
16	.	.	PUNCT	.	_	3	punct	_	_

~~~


