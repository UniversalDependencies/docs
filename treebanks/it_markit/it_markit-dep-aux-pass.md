---
layout: base
title:  'Statistics of aux:pass in UD_Italian-MarkIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-MarkIT: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="it_markit-dep-aux.html">aux</a></tt>.

132 nodes (0%) are attached to their parents as `aux:pass`.

132 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.0530303030303.

The following 3 pairs of parts of speech are connected with `aux:pass`: <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-AUX.html">AUX</a></tt> (130; 98% instances), <tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_markit-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 aux:pass	color:blue
1	Ma	ma	CCONJ	CC	_	4	cc	_	_
2	sono	essere	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	davvero	davvero	ADV	B	_	4	advmod	_	_
4	loro	loro	PRON	PE	Gender=Fem|Number=Plur|Person=3|PronType=Prs	0	root	_	_
5	a	a	ADP	E	_	8	mark	_	_
6	dover	dovere	AUX	VM	VerbForm=Inf	8	aux	_	_
7	essere	essere	AUX	VA	VerbForm=Inf	8	aux:pass	_	_
8	arrabbiati	arrabbiare	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	4	xcomp	_	_
9	?	?	PUNCT	FS	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 aux:pass	color:blue
1	Il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	perché	perché	NOUN	S	Gender=Masc|Number=Sing	12	dislocated	_	_
3	ci	ci	PRON	PC	Clitic=Yes|Gender=Masc|Number=Plur|Person=1|PronType=Prs	4	iobj	_	_
4	nascondano	nascondere	VERB	V	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
5	queste	questo	DET	DD	Gender=Fem|Number=Plur|PronType=Dem	6	det	_	_
6	verità	verità	NOUN	S	Gender=Fem|Number=Sing	4	obj	_	_
7	ad	ad	ADP	E	_	9	mark	_	_
8	essere	essere	AUX	VA	VerbForm=Inf	9	aux:pass	_	_
9	sincero	sincero	ADJ	A	Gender=Masc|Number=Sing	12	advcl	_	_
10	non	non	ADV	BN	PronType=Neg	12	advmod	_	_
11	lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	obj	_	_
12	so	sapere	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
13	nemmeno	nemmeno	ADV	BN	PronType=Neg	14	advmod	_	_
14	io	io	PRON	PE	Number=Sing|Person=1|PronType=Prs	12	nsubj	_	_
15	,	,	PUNCT	FF	_	29	punct	_	_
16	ma	ma	CCONJ	CC	_	29	cc	_	_
17	tutto	tutto	DET	T	Gender=Masc|Number=Sing|PronType=Tot	19	det:predet	_	_
18	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	19	det	_	_
19	discorso	discorso	NOUN	S	Gender=Masc|Number=Sing	29	nsubj	_	_
20	su	su	ADP	E	_	22	case	_	_
21	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	22	det	_	_
22	insabbiature	insabbiatura	NOUN	S	Gender=Fem|Number=Plur	19	nmod	_	_
23	da	da	ADP	E	_	27	case	_	_
24	parte	parte	NOUN	S	Gender=Fem|Number=Sing	23	fixed	_	_
25	di	di	ADP	E	_	27	case	_	_
26	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	27	det	_	_
27	governi	governo	NOUN	S	Gender=Masc|Number=Plur	22	nmod	_	_
28	mi	mi	PRON	PC	Clitic=Yes|Gender=Fem|Number=Sing|Person=1|PronType=Prs	29	obj	_	_
29	porta	portare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	conj	_	_
30	ad	ad	ADP	E	_	32	case	_	_
31	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	32	det	_	_
32	punto	punto	NOUN	S	Gender=Masc|Number=Sing	29	obl	_	_
33	fondamentale	fondamentale	ADJ	A	Gender=Masc|Number=Sing	32	amod	_	_
34	di	di	ADP	E	_	37	case	_	_
35	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	37	det	_	_
36	mio	mio	DET	AP	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	37	det:poss	_	_
37	pensiero	pensiero	NOUN	S	Gender=Masc|Number=Sing	32	nmod	_	_
38	:	:	PUNCT	FC	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 19 aux:pass	color:blue
1	Ma	ma	CCONJ	CC	_	11	cc	_	_
2	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
3	proprio	proprio	ADV	B	_	8	advmod	_	_
4	a	a	ADP	E	_	8	case	_	_
5	seguito	seguito	NOUN	S	Gender=Masc|Number=Sing	4	fixed	_	_
6	di	di	ADP	E	_	8	case	_	_
7	queste	questo	DET	DD	Gender=Fem|Number=Plur|PronType=Dem	8	det	_	_
8	scoperte	scoperta	NOUN	S	Gender=Fem|Number=Plur	11	obl	_	_
9	che	che	SCONJ	CS	_	11	mark	_	_
10	ci	ci	PRON	PC	Clitic=Yes|Gender=Fem|Number=Plur|Person=1|PronType=Prs	11	expl	_	_
11	viene	venire	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
12	automatico	automatico	ADJ	A	Gender=Masc|Number=Sing	11	xcomp	_	_
13	chieder	chiedere	VERB	V	VerbForm=Inf	11	csubj	_	_
14	ci	ci	PRON	PC	Clitic=Yes|Gender=Fem|Number=Plur|Person=1|PronType=Prs	13	iobj	_	_
15	fino	fino	ADV	B	_	18	case	_	_
16	a	a	ADP	E	_	15	fixed	_	_
17	che	che	DET	DQ	_	18	det	_	_
18	punto	punto	NOUN	S	Gender=Masc|Number=Sing	20	obl	_	_
19	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	aux:pass	_	_
20	lecita	lecito	NOUN	S	Gender=Fem|Number=Sing	13	advcl	_	_
21	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	22	det	_	_
22	ricerca	ricerca	NOUN	S	Gender=Fem|Number=Sing	20	nsubj:pass	_	_
23	scientifica	scientifico	ADJ	A	Gender=Fem|Number=Sing	22	amod	_	_
24	in	in	ADP	E	_	26	case	_	_
25	questa	questo	DET	DD	Gender=Fem|Number=Sing|PronType=Dem	26	det	_	_
26	direzione	direzione	NOUN	S	Gender=Fem|Number=Sing	20	obl	_	_
27	?	?	PUNCT	FS	_	11	punct	_	_

~~~


