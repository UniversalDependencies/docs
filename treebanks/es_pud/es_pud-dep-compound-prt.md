---
layout: base
title:  'Statistics of compound:prt in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="es_pud-dep-compound.html">compound</a></tt>.

313 nodes (1%) are attached to their parents as `compound:prt`.

276 instances of `compound:prt` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.29073482428115.

The following 3 pairs of parts of speech are connected with `compound:prt`: <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-PRON.html">PRON</a></tt> (298; 95% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-PRON.html">PRON</a></tt> (8; 3% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-PRON.html">PRON</a></tt> (7; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 compound:prt	color:blue
1	Su	_	PRON	DTP$	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	2	det	_	_
2	voz	voz	NOUN	NN	Gender=Fem|Number=Sing	4	nsubj:pass	_	_
3	se	él	PRON	SE	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	4	compound:prt	_	_
4	escuchó	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
5	literalmente	literalmente	ADV	RB	_	4	advmod	_	_
6	por	por	ADP	IN	_	9	case	_	_
7	todo	todo	DET	PDT	Gender=Masc|Number=Sing|PronType=Tot	9	det	_	_
8	el	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	mundo	mundo	NOUN	NN	Gender=Masc|Number=Sing	4	obl	_	SpaceAfter=No
10	,	,	PUNCT	,	_	11	punct	_	_
11	dijo	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	parataxis	_	_
12	Leive	Leive	PROPN	NNP	Gender=Fem|Number=Sing	11	nsubj	_	SpaceAfter=No
13	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 9 compound:prt	color:blue
1	En	en	ADP	IN	_	3	case	_	_
2	el	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	caso	caso	NOUN	NN	Gender=Masc|Number=Sing	13	obl	_	_
4	de	de	ADP	IN	_	6	case	_	_
5	la	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	Familia	familia	NOUN	NN	Gender=Fem|Number=Sing	3	nmod	_	_
7	Imperial	_	ADJ	JJ	Gender=Fem|Number=Sing	6	amod	_	SpaceAfter=No
8	,	,	PUNCT	,	_	3	punct	_	_
9	se	él	PRON	SE	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	13	compound:prt	_	_
10	considera	ser	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	13	cop	_	_
11	extremadamente	extremadamente	ADV	RB	_	12	advmod	_	_
12	poco	poco	ADV	RB	_	13	advmod	_	_
13	apropiado	apropiado	ADJ	JJ	Gender=Masc|Number=Sing	0	root	_	_
14	usar	usar	VERB	VB	VerbForm=Inf	13	csubj	_	_
15	el	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	nombre	nombre	NOUN	NN	Gender=Masc|Number=Sing	14	obj	_	_
17	de	de	ADP	IN	_	18	case	_	_
18	pila	pila	NOUN	NN	Gender=Fem|Number=Sing	16	nmod	_	SpaceAfter=No
19	.	.	PUNCT	.	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 compound:prt	color:blue
1	Danevirke	Danevirke	PROPN	NNP	Number=Sing	5	nsubj	_	_
2	se	él	PRON	SE	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	5	compound:prt	_	_
3	ha	haber	AUX	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	aux	_	_
4	mantenido	_	AUX	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	5	cop	_	_
5	parte	parte	NOUN	NN	Gender=Fem|Number=Sing	0	root	_	_
6	de	de	ADP	IN	_	7	case	_	_
7	Alemania	Alemania	PROPN	NNP	Number=Sing	5	nmod	_	_
8	desde	desde	ADP	IN	_	9	case	_	_
9	entonces	entonces	ADV	RB	_	5	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	.	_	5	punct	_	_

~~~


