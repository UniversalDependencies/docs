---
layout: base
title:  'Statistics of compound in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="es_pud-dep-compound-prt.html">compound:prt</a></tt>.

15 nodes (0%) are attached to their parents as `compound`.

15 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.4.

The following 8 pairs of parts of speech are connected with `compound`: <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (6; 40% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (2; 13% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt> (2; 13% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (1; 7% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-INTJ.html">INTJ</a></tt> (1; 7% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-NUM.html">NUM</a></tt> (1; 7% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (1; 7% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 22 compound	color:blue
1	Más	más	ADV	RBR	Degree=Cmp	4	advmod	_	_
2	y	y	CCONJ	CC	_	1	fixed	_	_
3	más	más	ADV	RBR	Degree=Cmp	1	fixed	_	_
4	compañías	compañía	NOUN	NN	Gender=Fem|Number=Plur	7	nsubj	_	_
5	de	de	ADP	IN	_	6	case	_	_
6	tecnología	tecnología	NOUN	NN	Gender=Fem|Number=Sing	4	nmod	_	_
7	están	estar	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	a	a	ADP	INDT	_	10	case	_	_
9	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	mando	mando	NOUN	NN	Gender=Masc|Number=Sing	7	obl	_	_
11	más	más	ADV	RBR	Degree=Cmp	7	advmod	_	_
12	que	que	ADP	IN	_	13	case	_	_
13	nunca	nunca	ADV	RB	_	11	advcl	_	_
14	en	en	ADP	IN	_	16	case	_	_
15	Wall	Wall	PROPN	NNP	Foreign=Yes|Number=Sing	16	compound	_	Lang=en
16	Street	street	NOUN	NN	Foreign=Yes|Number=Sing	7	obl	_	Lang=en|SpaceAfter=No|Proper=True
17	,	,	PUNCT	,	PunctType=Comm	19	punct	_	_
18	incluso	incluso	ADV	RB	_	19	advmod	_	_
19	más	más	ADV	RBR	Degree=Cmp	7	conj	_	_
20	que	que	ADP	IN	_	23	case	_	_
21	en	en	ADP	IN	_	23	obl	_	_
22	Silicon	silicon	NOUN	NN	Foreign=Yes|Number=Sing	23	compound	_	Lang=en|Proper=True
23	Valley	valley	NOUN	NN	Foreign=Yes|Number=Sing	19	obl	_	Lang=en|SpaceAfter=No|Proper=True
24	.	.	PUNCT	.	PunctType=Peri	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 compound	color:blue
1	En	en	ADP	IN	_	2	case	_	_
2	julio	julio	NOUN	NN	Gender=Masc|Number=Sing	12	obl	_	_
3	de	de	ADP	IN	_	4	case	_	_
4	1918	1918	NUM	CD	Gender=Masc|NumForm=Digit|NumType=Card	2	nmod	_	SpaceAfter=No
5	,	,	PUNCT	,	PunctType=Comm	2	punct	_	_
6	el	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	tratado	tratado	NOUN	NN	Gender=Masc|Number=Sing	12	nsubj:pass	_	_
8	franco	franco	ADJ	AFX	Hyph=Yes	10	compound	_	SpaceAfter=No|Proper=True
9	-	-	PUNCT	-	PunctType=Dash	8	punct	_	SpaceAfter=No
10	monegasco	monegasco	ADJ	JJ	Gender=Masc|Number=Sing	7	amod	_	Proper=True
11	fue	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	12	aux:pass	_	_
12	firmado	firmar	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
13	,	,	PUNCT	,	PunctType=Comm	14	punct	_	_
14	ofreciendo	ofrecer	VERB	VBG	VerbForm=Ger	12	advcl	_	_
15	limitada	limitado	ADJ	JJ	Gender=Fem|Number=Sing	16	amod	_	_
16	protección	protección	NOUN	NN	Gender=Fem|Number=Sing	14	obj	_	_
17	francesa	franceso	ADJ	JJ	Gender=Fem|Number=Sing	16	amod	_	Proper=True
18	sobre	sobre	ADP	IN	_	19	case	_	_
19	Mónaco	Mónaco	PROPN	NNP	Number=Sing	16	nmod	_	SpaceAfter=No
20	.	.	PUNCT	.	PunctType=Peri	12	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 15 compound	color:blue
1	Más	más	ADV	RBR	Degree=Cmp	4	advmod	_	_
2	y	y	CCONJ	CC	_	1	fixed	_	_
3	más	más	ADV	RBR	Degree=Cmp	1	fixed	_	_
4	compañías	compañía	NOUN	NN	Gender=Fem|Number=Plur	7	nsubj	_	_
5	de	de	ADP	IN	_	6	case	_	_
6	tecnología	tecnología	NOUN	NN	Gender=Fem|Number=Sing	4	nmod	_	_
7	están	estar	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	a	a	ADP	INDT	_	10	case	_	_
9	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	mando	mando	NOUN	NN	Gender=Masc|Number=Sing	7	obl	_	_
11	más	más	ADV	RBR	Degree=Cmp	7	advmod	_	_
12	que	que	ADP	IN	_	13	case	_	_
13	nunca	nunca	ADV	RB	_	11	advcl	_	_
14	en	en	ADP	IN	_	16	case	_	_
15	Wall	Wall	PROPN	NNP	Foreign=Yes|Number=Sing	16	compound	_	Lang=en
16	Street	street	NOUN	NN	Foreign=Yes|Number=Sing	7	obl	_	Lang=en|SpaceAfter=No|Proper=True
17	,	,	PUNCT	,	PunctType=Comm	19	punct	_	_
18	incluso	incluso	ADV	RB	_	19	advmod	_	_
19	más	más	ADV	RBR	Degree=Cmp	7	conj	_	_
20	que	que	ADP	IN	_	23	case	_	_
21	en	en	ADP	IN	_	23	obl	_	_
22	Silicon	silicon	NOUN	NN	Foreign=Yes|Number=Sing	23	compound	_	Lang=en|Proper=True
23	Valley	valley	NOUN	NN	Foreign=Yes|Number=Sing	19	obl	_	Lang=en|SpaceAfter=No|Proper=True
24	.	.	PUNCT	.	PunctType=Peri	7	punct	_	_

~~~


