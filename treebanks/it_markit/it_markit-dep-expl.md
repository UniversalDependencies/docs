---
layout: base
title:  'Statistics of expl in UD_Italian-MarkIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-MarkIT: Relations: `expl`

This relation is universal.
There are 2 language-specific subtypes of `expl`: <tt><a href="it_markit-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="it_markit-dep-expl-pass.html">expl:pass</a></tt>.

559 nodes (1%) are attached to their parents as `expl`.

467 instances of `expl` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.28801431127013.

The following 4 pairs of parts of speech are connected with `expl`: <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-PRON.html">PRON</a></tt> (548; 98% instances), <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-PRON.html">PRON</a></tt> (8; 1% instances), <tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_markit-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="it_markit-pos-AUX.html">AUX</a></tt>-<tt><a href="it_markit-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 expl	color:blue
1	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	2	det	_	_
2	miliardi	miliardo	NOUN	S	Gender=Masc|Number=Plur	5	nsubj:outer	_	_
3	che	che	PRON	PR	_	5	nsubj	_	_
4	si	si	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	expl	_	_
5	spenderanno	spendere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	_
6	in	in	ADP	E	_	7	case	_	_
7	musica	musica	NOUN	S	Gender=Fem|Number=Sing	5	obl	_	_
8	virtuale	virtuale	ADJ	A	Gender=Masc|Number=Sing	7	amod	_	_
9	in	in	ADP	E	_	11	case	_	_
10	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	2003	2003	NUM	N	_	5	obl	_	_
12	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 14 expl	color:blue
1	tuttavia	tuttavia	ADV	B	_	7	advmod	_	_
2	dietro	dietro	ADV	B	_	5	case	_	_
3	a	a	ADP	E	_	2	fixed	_	_
4	questa	questo	DET	DD	Gender=Fem|Number=Sing|PronType=Dem	5	det	_	_
5	spiegazione	spiegazione	NOUN	S	Gender=Fem|Number=Sing	7	dislocated	_	_
6	c'	c'	PRON	PC	_	7	expl	_	_
7	è	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	ben	bene	ADV	B	_	9	advmod	_	_
9	altro	altro	ADJ	A	_	7	nsubj	_	_
10	ed	ed	CCONJ	CC	_	17	cc	_	_
11	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	paesaggio	paesaggio	NOUN	S	Gender=Masc|Number=Sing	17	nsubj	_	_
13	italiano	italiano	ADJ	A	Gender=Masc|Number=Sing	12	amod	_	_
14	ne	ne	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	17	expl	_	_
15	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	cop	_	_
16	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	17	det	_	_
17	prova	prova	NOUN	S	Gender=Fem|Number=Sing	9	conj	_	_
18	.	[PUNCT]	PUNCT	FS	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 expl	color:blue
1	Nonostante	nonostante	ADP	E	_	2	case	_	_
2	tutto	tutto	ADV	B	_	9	obl	_	_
3	però	però	ADV	B	_	9	advmod	_	_
4	fra	fra	ADP	E	_	5	case	_	_
5	amici	amico	NOUN	S	Gender=Masc|Number=Plur	9	obl	_	_
6	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	9	expl	_	_
7	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
8	sempre	sempre	ADV	B	_	9	advmod	_	_
9	pronti	pronto	ADJ	A	Gender=Masc|Number=Plur	0	root	_	_
10	ad	ad	ADP	E	_	11	mark	_	_
11	aiutar	aiutare	VERB	V	VerbForm=Inf	9	advcl	_	_
12	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	11	expl	_	_
13	ed	ed	CCONJ	CC	_	24	cc	_	_
14	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	24	cop	_	_
15	proprio	proprio	ADV	B	_	18	advmod	_	_
16	in	in	ADP	E	_	18	case	_	_
17	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	18	det	_	_
18	momento	momento	NOUN	S	Gender=Masc|Number=Sing	24	obl	_	_
19	di	di	ADP	E	_	21	case	_	_
20	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	21	det	_	_
21	bisogno	bisogno	NOUN	S	Gender=Masc|Number=Sing	18	nmod	_	_
22	che	che	SCONJ	CS	_	24	mark	_	_
23	si	si	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	24	expl	_	_
24	vedono	vedere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	9	conj	_	_
25	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	27	det	_	_
26	veri	vero	ADJ	A	Gender=Masc|Number=Plur	27	amod	_	_
27	amici	amico	NOUN	S	Gender=Masc|Number=Plur	24	nsubj	_	_
28	.	.	PUNCT	FS	_	9	punct	_	_

~~~


