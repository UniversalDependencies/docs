---
layout: base
title:  'Statistics of obl:agent in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="es_pud-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="es_pud-dep-obl-tmod.html">obl:tmod</a></tt>.

2 nodes (0%) are attached to their parents as `obl:agent`.

2 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.5.

The following 2 pairs of parts of speech are connected with `obl:agent`: <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 13 obl:agent	color:blue
1	1987	1987	NUM	CD	Gender=Masc|NumType=Card	3	nsubj:pass	_	_
2	fue	ser	AUX	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	3	aux:pass	_	_
3	proclamado	proclamar	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	el	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
5	"	"	PUNCT	``	_	6	punct	_	SpaceAfter=No
6	Año	año	NOUN	NN	Gender=Masc|Number=Sing	3	xcomp	_	_
7	de	de	ADP	INDT	_	9	case	_	_
8	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	río	río	NOUN	NN	Gender=Masc|Number=Sing	6	nmod	_	SpaceAfter=No
10	"	"	PUNCT	''	_	6	punct	_	_
11	por	por	ADP	IN	_	13	case	_	_
12	la	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	alcaldesa	alcaldesa	NOUN	NN	Gender=Fem|Number=Sing	3	obl:agent	_	_
14	de	de	ADP	IN	_	15	case	_	_
15	Brisbane	Brisbane	PROPN	NNP	Number=Sing	13	nmod	_	_
16	en	en	ADP	IN	_	18	case	_	_
17	ese	ese	DET	DT	Gender=Masc|Number=Sing|PronType=Dem	18	det	_	_
18	momento	momento	NOUN	NN	Gender=Masc|Number=Sing	13	nmod	_	SpaceAfter=No
19	,	,	PUNCT	,	_	20	punct	_	_
20	Sallyanne	Sallyanne	PROPN	NNP	Gender=Fem|Number=Sing	13	appos	_	_
21	Atkinson	Atkinson	PROPN	NNP	Gender=Fem|Number=Sing	20	flat:name	_	SpaceAfter=No
22	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 16 obl:agent	color:blue
1	Con	con	ADP	IN	_	3	case	_	_
2	la	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	caída	caída	NOUN	NN	Gender=Fem|Number=Sing	13	obl	_	_
4	de	de	ADP	IN	_	6	case	_	_
5	la	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	dinastía	dinastía	NOUN	NN	Gender=Fem|Number=Sing	3	nmod	_	_
7	Qing	Qing	PROPN	NNP	Number=Sing	6	appos	_	_
8	en	en	ADP	IN	_	9	case	_	_
9	1911	1911	NUM	CD	Gender=Masc|NumType=Card	3	nmod	_	SpaceAfter=No
10	,	,	PUNCT	,	_	3	punct	_	_
11	Mongolia	Mongolia	PROPN	NNP	Number=Sing	14	nsubj:pass	_	_
12	fue	ser	AUX	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	13	aux:pass	_	_
13	declarada	declarar	VERB	VBN	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
14	independiente	independiente	ADJ	JJ	Number=Sing	13	xcomp	_	_
15	por	por	ADP	IN	_	16	case	_	_
16	Bogd	Bogd	PROPN	NNP	Gender=Masc|Number=Sing	13	obl:agent	_	_
17	Khaan	Khaan	PROPN	NNP	Gender=Masc|Number=Sing	16	flat:name	_	SpaceAfter=No
18	.	.	PUNCT	.	_	13	punct	_	_

~~~


