---
layout: base
title:  'Statistics of flat:foreign in UD_Italian-MarkIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-MarkIT: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="it_markit-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="it_markit-dep-flat-name.html">flat:name</a></tt>.

2 nodes (0%) are attached to their parents as `flat:foreign`.

2 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="it_markit-pos-X.html">X</a></tt>-<tt><a href="it_markit-pos-X.html">X</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 flat:foreign	color:blue
1	L'	il	DET	RD	_	2	det	_	_
2	Italia	Italia	PROPN	SP	_	6	nsubj	_	_
3	in	in	ADP	E	_	5	case	_	_
4	questa	questo	DET	DD	Gender=Fem|Number=Sing|PronType=Dem	5	det	_	_
5	operazione	operazione	NOUN	S	Gender=Fem|Number=Sing	6	obl	_	_
6	è	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	in	in	ADP	E	_	8	case	_	_
8	pole	pole	NOUN	S	Gender=Fem|Number=Plur	6	obl	_	_
9	position	position	NOUN	S	Gender=Fem|Number=Sing	8	flat:foreign	_	_
10	con	con	ADP	E	_	12	case	_	_
11	l'	il	DET	RD	_	12	det	_	_
12	Agenzia	Agenzia	PROPN	SP	_	9	nmod	_	_
13	Spaziale	spaziale	ADJ	A	Gender=Masc|Number=Sing	12	amod	_	_
14	Italiana	italiano	ADJ	A	Gender=Fem|Number=Sing	12	amod	_	_
15	(	[PUNCT]	PUNCT	FB	_	16	punct	_	_
16	Asi	Asi	PROPN	SP	_	12	appos	_	_
17	)	[PUNCT]	PUNCT	FB	_	16	punct	_	_
18	e	e	CCONJ	CC	_	6	cc	_	_
19	può	potere	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	aux	_	_
20	vantare	vantare	VERB	V	VerbForm=Inf	6	conj	_	_
21	in	in	ADP	E	_	24	case	_	_
22	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	24	det	_	_
23	suo	suo	DET	AP	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	24	det:poss	_	_
24	equipaggio	equipaggio	NOUN	S	Gender=Masc|Number=Sing	20	obl	_	_
25	l'	il	DET	RD	_	26	det	_	_
26	esperienza	esperienza	NOUN	S	Gender=Fem|Number=Sing	20	obj	_	_
27	fresca	fresco	ADJ	A	Gender=Fem|Number=Sing	26	amod	_	_
28	e	e	CCONJ	CC	_	29	cc	_	_
29	diretta	diretto	ADJ	A	Gender=Fem|Number=Sing	27	conj	_	_
30	su	su	ADP	E	_	32	case	_	_
31	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	32	det	_	_
32	campo	campo	NOUN	S	Gender=Masc|Number=Sing	26	nmod	_	_
33	di	di	ADP	E	_	34	case	_	_
34	Samantha	Samantha	PROPN	SP	_	26	nmod	_	_
35	Cristoforetti	Cristoforetti	PROPN	SP	_	34	flat:name	_	_
36	,	[PUNCT]	PUNCT	FF	_	34	punct	_	_
37	una	una	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	34	appos	_	_
38	di	di	ADP	E	_	40	case	_	_
39	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	40	det	_	_
40	protagonisti	protagonista	NOUN	S	Gender=Masc|Number=Plur	37	nmod	_	_
41	di	di	ADP	E	_	43	case	_	_
42	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	43	det	_	_
43	missione	missione	NOUN	S	Gender=Fem|Number=Sing	40	nmod	_	_
44	Futura	Futura	PROPN	SP	_	43	nmod	_	_
45	.	[PUNCT]	PUNCT	FS	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 17 flat:foreign	color:blue
1	Famoso	famoso	ADJ	A	Gender=Masc|Number=Sing	3	amod	_	_
2	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	Eminem	Eminem	PROPN	SP	_	0	root	_	_
4	,	,	PUNCT	FF	_	3	punct	_	_
5	che	che	PRON	PR	_	9	nsubj:pass	_	_
6	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux	_	_
7	stato	essere	AUX	VA	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	9	aux:pass	_	_
8	dapprima	dapprima	ADV	B	_	9	advmod	_	_
9	criticato	criticare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	3	acl:relcl	_	_
10	e	e	CCONJ	CC	_	12	cc	_	_
11	poi	poi	ADV	B	_	12	advmod	_	_
12	premiato	premiare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	9	conj	_	_
13	come	come	SCONJ	CS	_	15	case	_	_
14	miglior	migliore	ADJ	A	Degree=Cmp|Number=Sing	15	amod	_	_
15	cantante	cantante	NOUN	S	Gender=Fem|Number=Sing	12	obl	_	_
16	hip	hip	X	SW	_	15	nmod	_	_
17	hop	hop	X	SW	_	16	flat:foreign	_	_
18	a	a	ADP	E	_	20	case	_	_
19	gli	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	20	det	_	_
20	Mtv	Mtv	PROPN	SP	_	12	obl	_	_
21	Europe	Europe	PROPN	SP	_	20	flat:name	_	_
22	Music	Music	PROPN	SP	_	20	flat:name	_	_
23	Awards	Awards	PROPN	SP	_	20	flat:name	_	_
24	tenuti	tenere	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	20	acl	_	_
25	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	24	expl	_	_
26	a	a	ADP	E	_	27	case	_	_
27	Stoccolma	Stoccolma	PROPN	SP	_	24	obl	_	_
28	a	a	ADP	E	_	30	case	_	_
29	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	30	det	_	_
30	fine	fine	NOUN	S	Gender=Fem|Number=Sing	24	obl	_	_
31	di	di	ADP	E	_	34	case	_	_
32	lo	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	34	det	_	_
33	scorso	scorso	ADJ	A	Gender=Masc|Number=Sing	34	amod	_	_
34	anno	anno	NOUN	S	Gender=Masc|Number=Sing	30	nmod	_	_
35	.	.	PUNCT	FS	_	3	punct	_	_

~~~


