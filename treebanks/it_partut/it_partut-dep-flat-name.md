---
layout: base
title:  'Statistics of flat:name in UD_Italian-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ParTUT: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="it_partut-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="it_partut-dep-flat-foreign.html">flat:foreign</a></tt>.

366 nodes (1%) are attached to their parents as `flat:name`.

366 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.16393442622951.

The following 3 pairs of parts of speech are connected with `flat:name`: <tt><a href="it_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_partut-pos-PROPN.html">PROPN</a></tt> (357; 98% instances), <tt><a href="it_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_partut-pos-ADP.html">ADP</a></tt> (7; 2% instances), <tt><a href="it_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_partut-pos-PROPN.html">PROPN</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 flat:name	color:blue
1	Questa	questo	PRON	PD	Gender=Fem|Number=Sing|PronType=Dem	4	nsubj	_	_
2	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	microfotografia	microfotografia	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
5	di	di	ADP	E	_	6	case	_	_
6	Nick	Nick	PROPN	SP	_	4	nmod	_	_
7	Read	Read	PROPN	SP	_	6	flat:name	_	_
8	e	e	CCONJ	CC	_	9	cc	_	_
9	Patrick	Patrick	PROPN	SP	_	6	conj	_	_
10	Higkey	Higkey	PROPN	SP	_	9	flat:name	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 flat:name	color:blue
1	Egli	egli	PRON	PE	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	nacque	nascere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	a	a	ADP	E	_	4	case	_	_
4	Stratford	Stratford	PROPN	SP	_	2	obl	_	SpaceAfter=No
5	-	-	PUNCT	FF	_	4	punct	_	SpaceAfter=No
6	upon	upon	ADP	E	_	4	flat:name	_	SpaceAfter=No
7	-	-	PUNCT	FF	_	4	punct	_	SpaceAfter=No
8	Avon	Avon	PROPN	SP	_	4	flat:name	_	_
9	e	e	CCONJ	CC	_	12	cc	_	_
10	vi	vi	PRON	PC	Clitic=Yes|PronType=Prs	12	nmod	_	_
11	fu	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	12	aux:pass	_	_
12	battezzato	battezzare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	conj	_	_
13	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	26	26	NUM	N	NumType=Card	12	obl	_	_
15	aprile	aprile	NOUN	S	Gender=Masc|Number=Sing	14	flat	_	_
16	1564	1564	NUM	N	NumType=Card	14	flat	_	SpaceAfter=No
17	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 flat:name	color:blue
1	Il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	critico	critico	NOUN	S	Gender=Masc|Number=Sing	6	nsubj	_	_
3	George	George	PROPN	SP	_	2	flat:name	_	_
4	Steiner	Steiner	PROPN	SP	_	2	flat:name	_	_
5	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
6	descritto	descrivere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
7	tutti	tutto	DET	T	Gender=Masc|Number=Plur|PronType=Tot	9	det:predet	_	_
8	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	9	det	_	_
9	drammi	dramma	NOUN	S	Gender=Masc|Number=Plur	6	obj	_	_
10	in	in	ADP	E	_	11	case	_	_
11	versi	verso	NOUN	S	Gender=Masc|Number=Plur	9	nmod	_	_
12	da	da	ADP	E	_	13	case	_	_
13	Coleridge	Coleridge	PROPN	SP	_	9	nmod	_	_
14	a	a	ADP	E	_	15	case	_	_
15	Tennyson	Tennyson	PROPN	SP	_	9	nmod	_	_
16	come	come	ADP	E	_	19	case	_	_
17	"	"	PUNCT	FB	_	19	punct	_	SpaceAfter=No
18	deboli	debole	ADJ	A	Number=Plur	19	amod	_	_
19	variazioni	variazione	NOUN	S	Gender=Fem|Number=Plur	6	obl	_	_
20	su	su	ADP	E	_	22	case	_	_
21	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	22	det	_	_
22	temi	tema	NOUN	S	Gender=Masc|Number=Plur	19	nmod	_	_
23	shakespeariani	shakespeariani	ADJ	A	Gender=Masc|Number=Plur	22	amod	_	SpaceAfter=No
24	"	"	PUNCT	FB	_	19	punct	_	SpaceAfter=No
25	.	.	PUNCT	FS	_	6	punct	_	_

~~~


