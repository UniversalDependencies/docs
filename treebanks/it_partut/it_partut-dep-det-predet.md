---
layout: base
title:  'Statistics of det:predet in UD_Italian-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ParTUT: Relations: `det:predet`

This relation is a language-specific subtype of <tt><a href="it_partut-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="it_partut-dep-det-poss.html">det:poss</a></tt>.

90 nodes (0%) are attached to their parents as `det:predet`.

90 instances of `det:predet` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.1.

The following 5 pairs of parts of speech are connected with `det:predet`: <tt><a href="it_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_partut-pos-DET.html">DET</a></tt> (85; 94% instances), <tt><a href="it_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_partut-pos-DET.html">DET</a></tt> (2; 2% instances), <tt><a href="it_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_partut-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="it_partut-pos-NUM.html">NUM</a></tt>-<tt><a href="it_partut-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="it_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="it_partut-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 det:predet	color:blue
1	Generano	generare	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	3	det	_	SpaceAfter=No
3	humus	humus	NOUN	S	_	1	obj	_	_
4	in	in	ADP	E	_	6	case	_	_
5	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	6	det	_	_
6	terre	terra	NOUN	S	Gender=Fem|Number=Plur	1	obl	_	_
7	emerse	emergere	VERB	V	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	6	acl	_	_
8	di	di	ADP	E	_	11	case	_	_
9	tutta	tutto	DET	T	Gender=Fem|Number=Sing|PronType=Tot	11	det:predet	_	_
10	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	terra	terra	NOUN	S	Gender=Fem|Number=Sing	6	nmod	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 19 det:predet	color:blue
1	Deploriamo	deplorare	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	che	che	SCONJ	CS	_	10	mark	_	_
3	quelle	quello	DET	DD	Gender=Fem|Number=Plur|PronType=Dem	4	det	_	_
4	cifre	cifra	NOUN	S	Gender=Fem|Number=Plur	10	nsubj:pass	_	_
5	in	in	ADP	E	_	7	case	_	_
6	qualche	qualche	DET	DI	Number=Sing|PronType=Ind	7	det	_	_
7	modo	modo	NOUN	S	Gender=Masc|Number=Sing	10	obl	_	_
8	siano	essere	AUX	VA	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	10	aux:pass	_	_
9	state	essere	AUX	VA	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	10	aux:pass	_	_
10	nascoste	nascondere	VERB	V	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	1	ccomp	_	_
11	a	a	ADP	E	_	13	case	_	_
12	l'	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	interno	interno	NOUN	S	Gender=Masc|Number=Sing	10	obl	_	_
14	di	di	ADP	E	_	16	case	_	_
15	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	16	det	_	_
16	dati	dato	NOUN	S	Gender=Masc|Number=Plur	13	nmod	_	_
17	relativi	relativo	ADJ	A	Gender=Masc|Number=Plur	16	amod	_	_
18	a	a	ADP	E	_	21	case	_	_
19	tutto	tutto	DET	T	Gender=Masc|Number=Sing|PronType=Tot	21	det:predet	_	_
20	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	21	det	_	_
21	Regno	Regno	PROPN	SP	_	17	obl	_	_
22	Unito	Unito	PROPN	SP	_	21	flat:name	_	SpaceAfter=No
23	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 det:predet	color:blue
1	Devi	dovere	AUX	VM	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	2	aux	_	_
2	mantenere	mantenere	VERB	V	VerbForm=Inf	0	root	_	_
3	intatte	intatto	ADJ	A	Gender=Fem|Number=Plur	2	xcomp	_	_
4	tutte	tutto	DET	T	Gender=Fem|Number=Plur|PronType=Tot	6	det:predet	_	_
5	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	6	det	_	_
6	informative	informativo	ADJ	A	Gender=Fem|Number=Plur	2	obj	_	_
7	che	che	PRON	PR	PronType=Rel	9	nsubj	_	_
8	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	9	expl	_	_
9	riferiscono	riferire	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	acl:relcl	_	_
10	a	a	ADP	E	_	13	case	_	_
11	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
12	presente	presente	ADJ	A	Number=Sing	13	amod	_	_
13	licenza	licenza	NOUN	S	Gender=Fem|Number=Sing	9	obl	_	_
14	ed	e	CCONJ	CC	_	17	cc	_	_
15	a	a	ADP	E	_	17	case	_	_
16	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	17	det	_	_
17	esclusione	esclusione	NOUN	S	Gender=Fem|Number=Sing	13	conj	_	_
18	di	di	ADP	E	_	20	case	_	_
19	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	20	det	_	_
20	garanzie	garanzia	NOUN	S	Gender=Fem|Number=Plur	17	nmod	_	SpaceAfter=No
21	.	.	PUNCT	FS	_	2	punct	_	_

~~~


