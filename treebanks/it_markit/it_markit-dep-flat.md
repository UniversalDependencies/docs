---
layout: base
title:  'Statistics of flat in UD_Italian-MarkIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-MarkIT: Relations: `flat`

This relation is universal.
There are 2 language-specific subtypes of `flat`: <tt><a href="it_markit-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="it_markit-dep-flat-name.html">flat:name</a></tt>.

25 nodes (0%) are attached to their parents as `flat`.

25 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.48.

The following 6 pairs of parts of speech are connected with `flat`: <tt><a href="it_markit-pos-NUM.html">NUM</a></tt>-<tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt> (10; 40% instances), <tt><a href="it_markit-pos-NUM.html">NUM</a></tt>-<tt><a href="it_markit-pos-NUM.html">NUM</a></tt> (9; 36% instances), <tt><a href="it_markit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_markit-pos-PROPN.html">PROPN</a></tt> (3; 12% instances), <tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_markit-pos-NUM.html">NUM</a></tt> (1; 4% instances), <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-NUM.html">NUM</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 21 flat	color:blue
1	Questa	questo	PRON	PD	Gender=Fem|Number=Sing|Person=3|PronType=Dem	4	nsubj	_	_
2	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	descrizione	descrizione	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
5	che	che	PRON	PR	_	6	nsubj	_	_
6	emerge	emergere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	acl:relcl	_	_
7	da	da	ADP	E	_	9	case	_	_
8	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	giornale	giornale	NOUN	S	Gender=Masc|Number=Sing	6	obl	_	_
10	"	"	PUNCT	FB	_	12	punct	_	_
11	Il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	Sole	Sole	PROPN	SP	_	9	nmod	_	_
13	24	24	PROPN	SP	_	12	flat:name	_	_
14	ore	ora	PROPN	SP	_	12	flat:name	_	_
15	Sanità	sanità	PROPN	SP	_	12	flat:name	_	_
16	"	"	PUNCT	FB	_	12	punct	_	_
17	,	,	PUNCT	FF	_	19	punct	_	_
18	in	in	ADP	E	_	19	case	_	_
19	data	data	NOUN	S	Gender=Fem|Number=Sing	6	obl	_	_
20	28	28	NUM	N	_	19	nmod	_	_
21	gennaio	gennaio	NOUN	S	Gender=Masc|Number=Sing	20	flat	_	_
22	2013	2013	NUM	N	_	20	flat	_	_
23	.	.	PUNCT	FS	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 22 flat	color:blue
1	Questa	questo	PRON	PD	Gender=Fem|Number=Sing|Person=3|PronType=Dem	4	nsubj	_	_
2	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	descrizione	descrizione	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
5	che	che	PRON	PR	_	6	nsubj	_	_
6	emerge	emergere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	acl:relcl	_	_
7	da	da	ADP	E	_	9	case	_	_
8	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	giornale	giornale	NOUN	S	Gender=Masc|Number=Sing	6	obl	_	_
10	"	"	PUNCT	FB	_	12	punct	_	_
11	Il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	Sole	Sole	PROPN	SP	_	9	nmod	_	_
13	24	24	PROPN	SP	_	12	flat:name	_	_
14	ore	ora	PROPN	SP	_	12	flat:name	_	_
15	Sanità	sanità	PROPN	SP	_	12	flat:name	_	_
16	"	"	PUNCT	FB	_	12	punct	_	_
17	,	,	PUNCT	FF	_	19	punct	_	_
18	in	in	ADP	E	_	19	case	_	_
19	data	data	NOUN	S	Gender=Fem|Number=Sing	6	obl	_	_
20	28	28	NUM	N	_	19	nmod	_	_
21	gennaio	gennaio	NOUN	S	Gender=Masc|Number=Sing	20	flat	_	_
22	2013	2013	NUM	N	_	20	flat	_	_
23	.	.	PUNCT	FS	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 15 flat	color:blue
1	Emblematico	emblematico	ADJ	A	Gender=Masc|Number=Sing	0	root	_	_
2	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	fatto	fatto	NOUN	S	Gender=Masc|Number=Sing	1	nsubj	_	_
4	che	che	SCONJ	CS	_	16	mark	_	_
5	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	dichiarazione	dichiarazione	NOUN	S	Gender=Fem|Number=Sing	16	nsubj	_	_
7	di	di	ADP	E	_	8	case	_	_
8	indipendenza	indipendenza	NOUN	S	Gender=Fem|Number=Sing	6	nmod	_	_
9	di	di	ADP	E	_	12	case	_	_
10	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	12	det	_	_
11	13	13	NUM	N	_	12	nummod	_	_
12	Stati	Stati	PROPN	SP	_	8	nmod	_	_
13	Uniti	Uniti	PROPN	SP	_	12	flat	_	_
14	d'	di	ADP	E	_	15	case	_	_
15	America	America	PROPN	SP	_	12	flat	_	_
16	citi	citare	VERB	V	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	acl	_	_
17	tra	tra	ADP	E	_	19	case	_	_
18	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	19	det	_	_
19	diritti	diritto	NOUN	S	Gender=Masc|Number=Plur	16	obl	_	_
20	inalienabili	inalienabile	ADJ	A	Gender=Masc|Number=Plur	19	amod	_	_
21	proprio	proprio	ADV	B	_	23	advmod	_	_
22	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	23	det	_	_
23	perseguimento	perseguimento	NOUN	S	Gender=Masc|Number=Sing	16	obj	_	_
24	di	di	ADP	E	_	26	case	_	_
25	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	26	det	_	_
26	felicità	felicità	NOUN	S	Gender=Fem|Number=Sing	23	nmod	_	_
27	.	.	PUNCT	FS	_	1	punct	_	_

~~~


