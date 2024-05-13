---
layout: base
title:  'Statistics of flat:name in UD_Italian-MarkIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-MarkIT: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="it_markit-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="it_markit-dep-flat-foreign.html">flat:foreign</a></tt>.

196 nodes (0%) are attached to their parents as `flat:name`.

196 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.19387755102041.

The following 4 pairs of parts of speech are connected with `flat:name`: <tt><a href="it_markit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_markit-pos-PROPN.html">PROPN</a></tt> (191; 97% instances), <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-PROPN.html">PROPN</a></tt> (3; 2% instances), <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="it_markit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 flat:name	color:blue
1	Lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	obj	_	_
2	affermò	affermare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	anche	anche	ADV	B	_	2	advmod	_	_
4	,	[PUNCT]	PUNCT	FF	_	2	punct	_	_
5	in	in	ADP	E	_	7	case	_	_
6	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	intervento	intervento	NOUN	S	Gender=Masc|Number=Sing	2	obl	_	_
8	,	[PUNCT]	PUNCT	FF	_	2	punct	_	_
9	Vittorio	Vittorio	PROPN	SP	_	2	nsubj	_	_
10	Sgarbi	Sgarbi	PROPN	SP	_	9	flat:name	_	_
11	:	[PUNCT]	PUNCT	FC	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 flat:name	color:blue
1	Da	da	ADP	E	_	2	mark	_	_
2	considerare	considerare	VERB	V	VerbForm=Inf	6	csubj	_	_
3	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
4	anche	anche	ADV	B	_	6	advmod	_	_
5	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	riflessione	riflessione	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
7	fatta	fare	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	6	acl	_	_
8	da	da	ADP	E	_	10	case	_	_
9	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	Papa	papa	NOUN	S	Gender=Masc|Number=Sing	7	obl:agent	_	_
11	Giovanni	Giovanni	PROPN	SP	_	10	flat:name	_	_
12	Paolo	Paolo	PROPN	SP	_	10	flat:name	_	_
13	II	II	PROPN	SP	_	10	flat:name	_	_
14	a	a	ADP	E	_	15	case	_	_
15	proposito	proposito	NOUN	S	Gender=Masc|Number=Sing	7	obl	_	_
16	di	di	ADP	E	_	18	case	_	_
17	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	18	det	_	_
18	Europa	Europa	PROPN	SP	_	15	nmod	_	_
19	,	[PUNCT]	PUNCT	FF	_	23	punct	_	_
20	in	in	ADP	E	_	21	case	_	_
21	cui	cui	PRON	PR	Number=Plur|Person=3|PronType=Rel	23	obl	_	_
22	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	23	aux	_	_
23	espresso	esprimere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	6	acl:relcl	_	_
24	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	25	det	_	_
25	concetto	concetto	NOUN	S	Gender=Masc|Number=Sing	23	obj	_	_
26	secondo	secondo	ADP	E	_	27	case	_	_
27	cui	cui	PRON	PR	Number=Plur|Person=3|PronType=Rel	41	obl	_	_
28	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	29	det	_	_
29	radici	radice	NOUN	S	Gender=Fem|Number=Plur	41	nsubj	_	_
30	su	su	ADP	E	_	31	case	_	_
31	cui	cui	PRON	PR	Number=Plur|Person=3|PronType=Rel	35	obl	_	_
32	l'	il	DET	RD	_	33	det	_	_
33	Europa	Europa	PROPN	SP	_	35	nsubj	_	_
34	deve	dovere	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	35	aux	_	_
35	fondar	fondare	VERB	V	VerbForm=Inf	29	acl:relcl	_	_
36	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	35	obj	_	_
37	,	[PUNCT]	PUNCT	FF	_	41	punct	_	_
38	devono	dovere	AUX	VM	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	41	aux	_	_
39	essere	essere	AUX	V	VerbForm=Inf	41	cop	_	_
40	fondamentalmente	fondamentalmente	ADV	B	_	41	advmod	_	_
41	cristiane	cristiano	ADJ	A	Gender=Fem|Number=Plur	25	acl:relcl	_	_
42	,	[PUNCT]	PUNCT	FF	_	47	punct	_	_
43	dove	dove	ADV	B	_	47	mark	_	_
44	ciò	ciò	PRON	PD	Gender=Masc|Number=Sing|Person=3|PronType=Dem	47	nsubj	_	_
45	però	però	ADV	B	_	47	advmod	_	_
46	non	non	ADV	BN	PronType=Neg	47	advmod	_	_
47	pregiudica	pregiudicare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	41	acl:relcl	_	_
48	assolutamente	assolutamente	ADV	B	_	47	advmod	_	_
49	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	50	det	_	_
50	rispetto	rispetto	NOUN	S	Gender=Masc|Number=Sing	47	obj	_	_
51	in	in	ADP	E	_	53	case	_	_
52	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	53	det	_	_
53	confronti	confronto	NOUN	S	Gender=Masc|Number=Plur	50	nmod	_	_
54	di	di	ADP	E	_	56	case	_	_
55	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	56	det	_	_
56	minoranze	minoranza	NOUN	S	Gender=Fem|Number=Plur	53	nmod	_	_
57	,	[PUNCT]	PUNCT	FF	_	56	punct	_	_
58	che	che	PRON	PR	_	63	nsubj	_	_
59	in	in	ADP	E	_	60	case	_	_
60	Europa	Europa	PROPN	SP	_	63	obl	_	_
61	sono	essere	AUX	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	63	cop	_	_
62	tutt'	tutto	ADJ	A	Gender=Masc|Number=Sing	63	amod	_	_
63	altro	altro	PRON	PI	Gender=Masc|Number=Sing|Person=3|PronType=Ind	56	acl:relcl	_	_
64	che	che	SCONJ	CS	_	66	mark	_	_
65	"	[PUNCT]	PUNCT	FB	_	66	punct	_	_
66	minoranze	minoranza	NOUN	S	Gender=Fem|Number=Plur	63	ccomp	_	_
67	"	[PUNCT]	PUNCT	FB	_	66	punct	_	_
68	,	[PUNCT]	PUNCT	FF	_	66	punct	_	_
69	considerando	considerare	VERB	V	VerbForm=Ger	63	advcl	_	_
70	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	72	det	_	_
71	massiccia	massiccio	ADJ	A	Gender=Fem|Number=Sing	72	amod	_	_
72	presenza	presenza	NOUN	S	Gender=Fem|Number=Sing	69	obj	_	_
73	di	di	ADP	E	_	74	case	_	_
74	culture	cultura	NOUN	S	Gender=Fem|Number=Plur	72	nmod	_	_
75	extraeuropee	extraeuropeo	ADJ	A	Gender=Fem|Number=Plur	74	amod	_	_
76	.	[PUNCT]	PUNCT	FS	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 21 flat:name	color:blue
1	Il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	fatto	fatto	NOUN	S	Gender=Masc|Number=Sing	7	nsubj	_	_
3	più	più	ADV	B	_	4	advmod	_	_
4	preoccupante	preoccupare	VERB	V	Number=Sing|Tense=Pres|VerbForm=Part	2	acl	_	_
5	fu	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	cop	_	_
6	l'	il	DET	RD	_	7	det	_	_
7	omicidio	omicidio	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
8	politico	politico	ADJ	A	Gender=Masc|Number=Sing	7	amod	_	_
9	che	che	PRON	PR	_	10	nsubj	_	_
10	stette	stare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	acl:relcl	_	_
11	a	a	ADP	E	_	13	case	_	_
12	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	base	base	NOUN	S	Gender=Fem|Number=Sing	10	obl	_	_
14	di	di	ADP	E	_	16	case	_	_
15	lo	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	scoppio	scoppio	NOUN	S	Gender=Masc|Number=Sing	13	nmod	_	_
17	di	di	ADP	E	_	20	case	_	_
18	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	20	det	_	_
19	Prima	primo	ADJ	NO	Gender=Fem|Number=Sing|NumType=Ord	20	amod	_	_
20	Guerra	guerra	NOUN	S	Gender=Fem|Number=Sing	16	nmod	_	_
21	Mondiale	mondiale	NOUN	S	Gender=Fem|Number=Sing	20	flat:name	_	_
22	.	.	PUNCT	FS	_	7	punct	_	_

~~~


