---
layout: base
title:  'Statistics of amod in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `amod`

This relation is universal.

1308 nodes (6%) are attached to their parents as `amod`.

910 instances of `amod` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.15290519877676.

The following 7 pairs of parts of speech are connected with `amod`: <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (1244; 95% instances), <tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (57; 4% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="es_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-X.html">X</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 amod	color:blue
1	Le	_	PRON	PRP	Case=Dat|Number=Sing|Person=3	2	iobj	_	_
2	apasiona	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	_
3	la	_	DET	DT	Gender=Fem|Number=Sing	4	det	_	_
4	guitarra	_	NOUN	NN	Gender=Fem|Number=Sing	2	obj	_	_
5	y	_	CCONJ	CC	_	6	cc	_	_
6	dio	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	2	conj	_	_
7	un	_	DET	DT	Gender=Masc|Number=Sing	8	det	_	_
8	concierto	_	NOUN	NN	Gender=Masc|Number=Sing	6	obj	_	_
9	allí	_	ADV	RB	_	6	advmod	_	_
10	ese	_	DET	DT	Gender=Masc|Number=Sing	12	det	_	_
11	mismo	_	ADJ	JJ	Gender=Masc|Number=Sing	12	amod	_	_
12	año	_	NOUN	NN	Gender=Masc|Number=Sing	6	obl:tmod	_	SpaceAfter=No
13	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 amod	color:blue
1	Su	_	PRON	DTP$	Gender=Masc|Number=Sing|Person=3	3	det	_	_
2	primer	_	ADJ	JJ	Gender=Masc|Number=Sing	3	amod	_	_
3	rey	_	NOUN	NN	Gender=Masc|Number=Sing	0	root	_	_
4	fue	_	AUX	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	3	cop	_	_
5	Mojmír	_	PROPN	NNP	Gender=Masc|Number=Sing	3	nsubj	_	_
6	I	_	ADJ	JJ	Gender=Masc|Number=Sing	5	amod	_	Proper=True
7	(	_	PUNCT	(	_	8	punct	_	SpaceAfter=No
8	reinó	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	3	parataxis	_	_
9	de	de	ADP	INDT	_	11	case	_	_
10	el	el	DET	_	Gender=Masc|Number=Sing	11	det	_	_
11	830-846	_	NUM	CD	Gender=Masc	8	obl	_	SpaceAfter=No
12	)	_	PUNCT	)	_	8	punct	_	SpaceAfter=No
13	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 amod	color:blue
1	En	_	ADP	IN	_	2	case	_	_
2	julio	_	NOUN	NN	Gender=Masc|Number=Sing	12	obl	_	_
3	de	_	ADP	IN	_	4	case	_	_
4	1918	_	NUM	CD	Gender=Masc	2	nmod	_	SpaceAfter=No
5	,	_	PUNCT	,	_	2	punct	_	_
6	el	_	DET	DT	Gender=Masc|Number=Sing	7	det	_	_
7	tratado	_	NOUN	NN	Gender=Masc|Number=Sing	12	nsubj:pass	_	_
8	franco	_	X	AFX	_	7	amod	_	Proper=True|SpaceAfter=No
9	-	_	PUNCT	-	_	10	punct	_	SpaceAfter=No
10	monegasco	_	ADJ	JJ	Gender=Masc|Number=Sing	8	goeswith	_	Proper=True
11	fue	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Pass	12	aux:pass	_	_
12	firmado	_	VERB	VBN	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
13	,	_	PUNCT	,	_	14	punct	_	_
14	ofreciendo	_	VERB	VBG	Aspect=Imp|Voice=Act	12	acl	_	_
15	limitada	_	ADJ	JJ	Gender=Fem|Number=Sing	16	amod	_	_
16	protección	_	NOUN	NN	Gender=Fem|Number=Sing	14	obj	_	_
17	francesa	_	ADJ	JJ	Gender=Fem|Number=Sing	16	amod	_	Proper=True
18	sobre	_	ADP	IN	_	19	case	_	_
19	Mónaco	_	PROPN	NNP	Number=Sing	16	nmod	_	SpaceAfter=No
20	.	_	PUNCT	.	_	12	punct	_	_

~~~


