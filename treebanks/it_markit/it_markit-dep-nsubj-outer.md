---
layout: base
title:  'Statistics of nsubj:outer in UD_Italian-MarkIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-MarkIT: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="it_markit-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="it_markit-dep-nsubj-pass.html">nsubj:pass</a></tt>.

7 nodes (0%) are attached to their parents as `nsubj:outer`.

5 instances of `nsubj:outer` (71%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.

The following 6 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-PRON.html">PRON</a></tt> (2; 29% instances), <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt> (1; 14% instances), <tt><a href="it_markit-pos-PRON.html">PRON</a></tt>-<tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt> (1; 14% instances), <tt><a href="it_markit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_markit-pos-PROPN.html">PROPN</a></tt> (1; 14% instances), <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt> (1; 14% instances), <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-PRON.html">PRON</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 11 nsubj:outer	color:blue
1	Conoscere	conoscere	VERB	V	VerbForm=Inf	14	csubj	_	_
2	cose	cosa	NOUN	S	Gender=Fem|Number=Plur	1	obj	_	_
3	nuove	nuovo	ADJ	A	Gender=Fem|Number=Plur	2	amod	_	_
4	,	,	PUNCT	FF	_	5	punct	_	_
5	persone	persona	NOUN	S	Gender=Fem|Number=Plur	2	conj	_	_
6	nuove	nuovo	ADJ	A	Gender=Fem|Number=Plur	5	amod	_	_
7	,	,	PUNCT	FF	_	5	punct	_	_
8	luoghi	luogo	NOUN	S	Gender=Masc|Number=Plur	2	conj	_	_
9	nuovi	nuovo	ADJ	A	Gender=Masc|Number=Plur	8	amod	_	_
10	...	...	PUNCT	FF	_	14	punct	_	_
11	questo	questo	PRON	PD	Gender=Masc|Number=Sing|Person=3|PronType=Dem	14	nsubj:outer	_	_
12	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	cop	_	_
13	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	piacere	piacere	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
15	più	più	ADV	B	_	16	advmod	_	_
16	grande	grande	ADJ	A	Gender=Masc|Number=Sing	14	amod	_	_
17	che	che	PRON	PR	_	18	nsubj	_	_
18	accomuna	accomunare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	acl:relcl	_	_
19	in	in	ADP	E	_	21	case	_	_
20	qualche	qualche	DET	DI	Gender=Masc|Number=Sing|PronType=Ind	21	det	_	_
21	modo	modo	NOUN	S	Gender=Masc|Number=Sing	18	obl	_	_
22	tutti	tutto	DET	T	Gender=Masc|Number=Plur|PronType=Tot	24	det:predet	_	_
23	gli	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	24	det	_	_
24	artisti	artista	NOUN	S	Gender=Masc|Number=Plur	18	obj	_	_
25	che	che	PRON	PR	_	27	obj	_	_
26	ho	avere	AUX	VA	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	27	aux	_	_
27	citato	citare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	24	acl:relcl	_	_
28	e	e	CCONJ	CC	_	29	cc	_	_
29	non	non	ADV	BN	PronType=Neg	27	conj	_	_
30	.	.	PUNCT	FS	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 nsubj:outer	color:blue
1	È	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
2	di	di	ADP	E	_	3	case	_	_
3	rilievo	rilievo	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
4	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	discorso	discorso	NOUN	S	Gender=Masc|Number=Sing	3	nsubj:outer	_	_
6	che	che	PRON	PR	_	13	obj	_	_
7	Robert	Robert	PROPN	SP	_	13	nsubj	_	_
8	Kennedy	Kennedy	PROPN	SP	_	7	flat:name	_	_
9	,	,	PUNCT	FF	_	7	punct	_	_
10	ex-senatore	ex-senatore	NOUN	S	Gender=Masc|Number=Sing	7	appos	_	_
11	statunitense	statunitense	ADJ	A	Gender=Masc|Number=Sing	10	amod	_	_
12	,	,	PUNCT	FF	_	7	punct	_	_
13	tenne	tenere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	acl:relcl	_	_
14	in	in	ADP	E	_	16	case	_	_
15	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	1968	1968	NUM	N	_	13	obl	_	_
17	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 nsubj:outer	color:blue
1	Il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	nulla	nulla	NOUN	S	Gender=Masc|Number=Sing	12	parataxis	_	_
3	,	[PUNCT]	PUNCT	FF	_	2	punct	_	_
4	lo	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	stare	stare	VERB	V	VerbForm=Inf	2	conj	_	_
6	soli	solo	ADJ	A	Gender=Masc|Number=Plur	5	xcomp	_	_
7	,	[PUNCT]	PUNCT	FF	_	2	punct	_	_
8	l'	il	DET	RD	_	9	det	_	_
9	indifferenza	indifferenza	NOUN	S	Gender=Fem|Number=Sing	2	conj	_	_
10	,	[PUNCT]	PUNCT	FF	_	12	punct	_	_
11	sono	essere	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
12	queste	questo	PRON	PD	Gender=Fem|Number=Plur|Person=3|PronType=Dem	0	root	_	_
13	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	14	det	_	_
14	cose	cosa	NOUN	S	Gender=Fem|Number=Plur	12	nsubj:outer	_	_
15	che	che	PRON	PR	_	16	nsubj	_	_
16	fanno	fare	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	14	acl:relcl	_	_
17	ammalare	ammalare	VERB	V	VerbForm=Inf	16	xcomp	_	_
18	emotivamente	emotivamente	ADV	B	_	17	advmod	_	_
19	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	20	det	_	_
20	persone	persona	NOUN	S	Gender=Fem|Number=Plur	17	obj	_	_
21	,	[PUNCT]	PUNCT	FF	_	12	punct	_	_
22	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	30	cop	_	_
23	per	per	ADP	E	_	24	case	_	_
24	questo	questo	PRON	PD	Gender=Masc|Number=Sing|Person=3|PronType=Dem	30	obl	_	_
25	che	che	SCONJ	CS	_	30	mark	_	_
26	l'	il	DET	RD	_	27	det	_	_
27	istinto	istinto	NOUN	S	Gender=Masc|Number=Sing	30	nsubj	_	_
28	umano	umano	ADJ	A	Gender=Masc|Number=Sing	27	amod	_	_
29	ci	ci	PRON	PC	Clitic=Yes|Gender=Fem|Number=Plur|Person=1|PronType=Prs	30	obj	_	_
30	porta	portare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	conj	_	_
31	a	a	ADP	E	_	33	case	_	_
32	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	33	det	_	_
33	ricerca	ricerca	NOUN	S	Gender=Fem|Number=Sing	30	obl	_	_
34	di	di	ADP	E	_	35	case	_	_
35	compagnia	compagnia	NOUN	S	Gender=Fem|Number=Sing	33	nmod	_	_
36	,	[PUNCT]	PUNCT	FF	_	30	punct	_	_
37	a	a	ADP	E	_	39	mark	_	_
38	non	non	ADV	BN	PronType=Neg	39	advmod	_	_
39	cadere	cadere	VERB	V	VerbForm=Inf	30	conj	_	_
40	in	in	ADP	E	_	42	case	_	_
41	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	42	det	_	_
42	malessere	malessere	NOUN	S	Gender=Masc|Number=Sing	39	obl	_	_
43	di	di	ADP	E	_	45	case	_	_
44	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	45	det	_	_
45	solitudine	solitudine	NOUN	S	Gender=Fem|Number=Sing	42	nmod	_	_
46	,	[PUNCT]	PUNCT	FF	_	47	punct	_	_
47	citata	citare	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	45	acl	_	_
48	da	da	ADP	E	_	49	case	_	_
49	Leopardi	Leopardi	PROPN	SP	_	47	obl	_	_
50	in	in	ADP	E	_	54	case	_	_
51	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	54	det	_	_
52	"	[PUNCT]	PUNCT	FB	_	54	punct	_	_
53	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	54	det	_	_
54	passero	passero	NOUN	S	Gender=Masc|Number=Sing	47	obl	_	_
55	solitario	solitario	ADJ	A	Gender=Masc|Number=Sing	54	amod	_	_
56	"	[PUNCT]	PUNCT	FB	_	54	punct	_	_
57	.	[PUNCT]	PUNCT	FS	_	12	punct	_	_

~~~


