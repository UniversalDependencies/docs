---
layout: base
title:  'Statistics of csubj in UD_Italian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Italian-ParlaMint: Relations: `csubj`

This relation is universal.

48 nodes (0%) are attached to their parents as `csubj`.

37 instances of `csubj` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.25.

The following 6 pairs of parts of speech are connected with `csubj`: <tt><a href="it_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt> (24; 50% instances), <tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt> (15; 31% instances), <tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt> (5; 10% instances), <tt><a href="it_parlamint-pos-ADV.html">ADV</a></tt>-<tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="it_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_parlamint-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="it_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 csubj	color:blue
1	È	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	ridicolo	ridicolo	ADJ	A	Gender=Masc|Number=Sing	0	root	_	_
3	scaricare	scaricare	VERB	V	VerbForm=Inf	2	csubj	_	_
4	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	5	det	_	_
5	colpe	colpa	NOUN	S	Gender=Fem|Number=Plur	3	obj	_	_
6	su	su	ADP	E	_	8	case	_	_
7	qualche	qualche	DET	DI	Number=Sing|PronType=Ind	8	det	_	_
8	funzionario	funzionario	NOUN	S	Gender=Masc|Number=Sing	3	obl	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 csubj	color:blue
1	Mi	mi	PRON	PC	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	2	iobj	_	_
2	piace	piacere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	sottolineare	sottolineare	VERB	V	VerbForm=Inf	2	csubj	_	_
4	che	che	SCONJ	CS	_	15	mark	_	_
5	in	in	ADP	E	_	8	case	_	_
6	tutti	tutto	DET	T	Gender=Masc|Number=Plur	8	det	_	_
7	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	8	det	_	_
8	casi	caso	NOUN	S	Gender=Masc|Number=Plur	15	obl	_	_
9	più	più	ADV	B	_	10	advmod	_	_
10	gravi	grave	ADJ	A	Number=Plur	8	amod	_	_
11	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	12	det	_	_
12	istituzioni	istituzione	NOUN	S	Gender=Fem|Number=Plur	15	nsubj	_	_
13	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	15	expl	_	_
14	sono	essere	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	15	aux	_	_
15	dimostrate	dimostrare	VERB	V	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	3	ccomp	_	_
16	compatte	compatto	ADJ	A	Gender=Fem|Number=Plur	15	xcomp	_	SpaceAfter=No
17	:	:	PUNCT	FC	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 1 csubj	color:blue
1	Metter	mettere	VERB	V	VerbForm=Inf	15	csubj	_	_
2	ci	ci	PRON	PC	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	1	expl	_	_
3	di	di	ADP	E	_	4	case	_	_
4	fronte	fronte	NOUN	S	Number=Sing	1	obl	_	_
5	a	a	ADP	E	_	7	case	_	_
6	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	7	det	_	_
7	emergenza	emergenza	NOUN	S	Gender=Fem|Number=Sing	4	nmod	_	_
8	con	con	ADP	E	_	10	case	_	_
9	questo	questo	DET	DD	Gender=Masc|Number=Sing|PronType=Dem	10	det	_	_
10	atteggiamento	atteggiamento	NOUN	S	Gender=Masc|Number=Sing	1	obl	_	_
11	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	cop	_	_
12	per	per	ADP	E	_	13	case	_	_
13	noi	noi	PRON	PE	Number=Plur|Person=1|PronType=Prs	15	obl	_	_
14	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
15	strada	strada	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
16	da	da	ADP	E	_	17	mark	_	_
17	seguire	seguire	VERB	V	VerbForm=Inf	15	acl	_	SpaceAfter=No
18	.	.	PUNCT	FS	_	15	punct	_	_

~~~


