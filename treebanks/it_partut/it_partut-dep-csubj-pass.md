---
layout: base
title:  'Statistics of csubj:pass in UD_Italian-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ParTUT: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="it_partut-dep-csubj.html">csubj</a></tt>.

12 nodes (0%) are attached to their parents as `csubj:pass`.

11 instances of `csubj:pass` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.41666666666667.

The following 3 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="it_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="it_partut-pos-VERB.html">VERB</a></tt> (7; 58% instances), <tt><a href="it_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="it_partut-pos-ADJ.html">ADJ</a></tt> (4; 33% instances), <tt><a href="it_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_partut-pos-VERB.html">VERB</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 20 csubj:pass	color:blue
1	Le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	2	det	_	_
2	zanzare	zanzara	NOUN	S	Gender=Fem|Number=Plur	5	nsubj	_	_
3	maschio	maschio	NOUN	S	Gender=Masc|Number=Sing	2	nmod	_	_
4	non	non	ADV	BN	PronType=Neg	5	advmod	_	_
5	mordono	mordere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	quindi	quindi	CCONJ	CC	_	8	cc	_	_
7	non	non	ADV	BN	PronType=Neg	8	advmod	_	_
8	rappresentano	rappresentare	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	conj	_	_
9	alcun	alcuno	DET	DI	Gender=Masc|Number=Sing|PronType=Ind	10	det	_	_
10	rischio	rischio	NOUN	S	Gender=Masc|Number=Sing	8	obj	_	_
11	per	per	ADP	E	_	13	case	_	_
12	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	salute	salute	NOUN	S	Gender=Fem|Number=Sing	10	nmod	_	_
14	e	e	CCONJ	CC	_	25	cc	_	_
15	dato	dare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	25	advcl	_	_
16	che	che	SCONJ	CS	_	20	mark	_	_
17	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	19	det	_	_
18	loro	loro	DET	AP	Poss=Yes|PronType=Prs	19	det:poss	_	_
19	progenie	progenie	NOUN	S	Gender=Fem	20	nsubj	_	_
20	muoiono	morire	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	15	csubj:pass	_	_
21	nessuna	nessuno	DET	DI	Gender=Fem|Number=Sing|PronType=Ind	22	det	_	_
22	zanzara	zanzara	NOUN	S	Gender=Fem|Number=Sing	25	nsubj	_	_
23	geneticamente	geneticamente	ADV	B	_	24	advmod	_	_
24	modificata	modificare	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	22	acl	_	_
25	continua	continuare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	conj	_	_
26	a	a	ADP	E	_	27	mark	_	_
27	vivere	vivere	VERB	V	VerbForm=Inf	25	xcomp	_	_
28	in	in	ADP	E	_	30	case	_	_
29	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	30	det	_	_
30	ambiente	ambiente	NOUN	S	Gender=Masc|Number=Sing	27	obl	_	SpaceAfter=No
31	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 csubj:pass	color:blue
1	Considerato	considerare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
2	che	che	SCONJ	CS	_	4	mark	_	_
3	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	indispensabile	indispensabile	ADJ	A	Number=Sing	1	csubj:pass	_	_
5	promuovere	promuovere	VERB	V	VerbForm=Inf	4	csubj	_	_
6	lo	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	sviluppo	sviluppo	NOUN	S	Gender=Masc|Number=Sing	5	obj	_	_
8	di	di	ADP	E	_	9	case	_	_
9	rapporti	rapporto	NOUN	S	Gender=Masc|Number=Plur	7	nmod	_	_
10	amichevoli	amichevole	ADJ	A	Number=Plur	9	amod	_	_
11	tra	tra	ADP	E	_	13	case	_	_
12	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	13	det	_	_
13	nazioni	nazione	NOUN	S	Gender=Fem|Number=Plur	9	nmod	_	SpaceAfter=No
14	;	;	PUNCT	FC	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 csubj:pass	color:blue
1	Durante	durante	ADP	E	_	3	case	_	_
2	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	preparazione	preparazione	NOUN	S	Gender=Fem|Number=Sing	9	obl	_	_
4	di	di	ADP	E	_	6	case	_	_
5	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	relazione	relazione	NOUN	S	Gender=Fem|Number=Sing	3	nmod	_	_
7	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux:pass	_	_
8	stato	essere	AUX	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	9	cop	_	_
9	interessante	interessante	ADJ	A	Number=Sing	0	root	_	_
10	discutere	discutere	VERB	V	VerbForm=Inf	9	csubj:pass	_	_
11	di	di	ADP	E	_	13	case	_	_
12	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	13	det	_	_
13	temi	tema	NOUN	S	Gender=Masc|Number=Plur	10	obl	_	_
14	generali	generale	ADJ	A	Number=Plur	13	amod	_	_
15	relativi	relativo	ADJ	A	Gender=Masc|Number=Plur	13	amod	_	_
16	a	a	ADP	E	_	18	case	_	_
17	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	18	det	_	_
18	politica	politica	NOUN	S	Gender=Fem|Number=Sing	15	obl	_	_
19	regionale	regionale	ADJ	A	Number=Sing	18	amod	_	_
20	di	di	ADP	E	_	22	case	_	_
21	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	22	det	_	_
22	Unione	Unione	PROPN	SP	_	18	nmod	_	_
23	Europea	Europea	PROPN	SP	_	22	flat:name	_	SpaceAfter=No
24	.	.	PUNCT	FS	_	9	punct	_	_

~~~


