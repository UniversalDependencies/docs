---
layout: base
title:  'Statistics of det:predet in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `det:predet`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-det.html">det</a></tt>.

58 nodes (0%) are attached to their parents as `det:predet`.

58 instances of `det:predet` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.22413793103448.

The following 4 pairs of parts of speech are connected with `det:predet`: <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (51; 88% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (5; 9% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="en_gum-pos-DET.html">DET</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 det:predet	color:blue
1	Why	why	SCONJ	WRB	PronType=Int	4	advmod	_	_
2	should	should	AUX	MD	VerbForm=Fin	4	aux	_	_
3	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
4	bother	bother	VERB	VB	VerbForm=Inf	0	root	_	_
5	my	my	PRON	PRP$	Number=Sing|Person=1|Poss=Yes|PronType=Prs	6	nmod:poss	_	_
6	children	child	NOUN	NNS	Number=Plur	4	obj	_	_
7	with	with	ADP	IN	_	10	case	_	_
8	all	all	PRON	PDT	_	10	det:predet	_	_
9	this	this	DET	DT	Number=Sing|PronType=Dem	10	det	_	_
10	nonsense	nonsense	NOUN	NN	Number=Sing	4	obl	_	SpaceAfter=No
11	?	?	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 det:predet	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	2	det	_	_
2	land	land	NOUN	NN	Number=Sing	13	dep	_	SpaceAfter=No
3	,	,	PUNCT	,	_	6	punct	_	_
4	the	the	DET	DT	Definite=Def|PronType=Art	6	det	_	_
5	natural	natural	ADJ	JJ	Degree=Pos	6	amod	_	_
6	resources	resource	NOUN	NNS	Number=Plur	2	conj	_	SpaceAfter=No
7	,	,	PUNCT	,	_	9	punct	_	_
8	the	the	DET	DT	Definite=Def|PronType=Art	9	det	_	_
9	markets	market	NOUN	NNS	Number=Plur	2	conj	_	SpaceAfter=No
10	,	,	PUNCT	,	_	2	punct	_	_
11	all	all	PRON	PDT	_	12	det:predet	_	_
12	these	these	PRON	DT	Number=Plur|PronType=Dem	13	nsubj	_	_
13	go	go	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
14	together	together	ADV	RB	_	13	advmod	_	SpaceAfter=No
15	.	.	PUNCT	.	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 det:predet	color:blue
1	All	all	ADV	RB	_	4	det:predet	_	_
2	of	of	ADP	IN	_	4	case	_	_
3	a	a	DET	DT	Definite=Ind|PronType=Art	4	det	_	_
4	sudden	sudden	ADV	RB	_	8	advcl	_	_
5	a	a	DET	DT	Definite=Ind|PronType=Art	7	det	_	_
6	terrible	terrible	ADJ	JJ	Degree=Pos	7	amod	_	_
7	wind	wind	NOUN	NN	Number=Sing	8	nsubj	_	_
8	blew	blow	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
9	up	up	ADP	RP	_	8	compound:prt	_	SpaceAfter=No
10	,	,	PUNCT	,	_	12	punct	_	_
11	so	so	ADV	RB	_	12	advmod	_	_
12	strong	strong	ADJ	JJ	Degree=Pos	8	advmod	_	_
13	that	that	SCONJ	IN	_	17	mark	_	_
14	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	17	nsubj	_	_
15	thought	think	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	17	acl:relcl	_	_
16	the	the	DET	DT	Definite=Def|PronType=Art	17	det	_	_
17	hill	hill	NOUN	NN	Number=Sing	12	ccomp	_	_
18	my	my	PRON	PRP$	Number=Sing|Person=1|Poss=Yes|PronType=Prs	20	nmod:poss	_	_
19	little	little	ADJ	JJ	Degree=Pos	20	amod	_	_
20	house	house	NOUN	NN	Number=Sing	22	nsubj:pass	_	_
21	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	22	aux:pass	_	_
22	built	build	VERB	VBN	Tense=Past|VerbForm=Part	17	ccomp	_	_
23	on	on	ADP	IN	_	22	obl	_	_
24	would	would	AUX	MD	VerbForm=Fin	26	aux	_	_
25	be	be	AUX	VB	VerbForm=Inf	26	aux:pass	_	_
26	blown	blow	VERB	VBN	Tense=Past|VerbForm=Part	17	ccomp	_	_
27	apart	apart	ADV	RB	_	26	advmod	_	_
28	–	–	PUNCT	:	_	32	punct	_	_
29	but	but	CCONJ	CC	_	32	cc	_	_
30	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	32	nsubj	_	SpaceAfter=No
31	’d	have	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	32	aux	_	_
32	seen	see	VERB	VBN	Tense=Past|VerbForm=Part	8	conj	_	_
33	the	the	DET	DT	Definite=Def|PronType=Art	34	det	_	_
34	Devil	Devil	PROPN	NNP	Number=Sing	35	nsubj	_	_
35	do	do	VERB	VB	VerbForm=Inf	32	ccomp	_	_
36	things	thing	NOUN	NNS	Number=Plur	35	obj	_	_
37	as	as	ADP	IN	_	38	case	_	_
38	bad	bad	ADJ	JJ	Degree=Pos	35	obl	_	_
39	as	as	ADP	IN	_	40	case	_	_
40	this	this	PRON	DT	Number=Sing|PronType=Dem	38	obl	_	_
41	before	before	ADV	RB	_	32	advmod	_	_
42	(	(	PUNCT	-LRB-	_	47	punct	_	SpaceAfter=No
43	the	the	DET	DT	Definite=Def|PronType=Art	44	det	_	_
44	Devil	Devil	PROPN	NNP	Number=Sing	47	nsubj	_	_
45	had	have	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	47	aux	_	_
46	often	often	ADV	RB	_	47	advmod	_	_
47	tried	try	VERB	VBN	Tense=Past|VerbForm=Part	31	parataxis	_	_
48	to	to	PART	TO	_	49	mark	_	_
49	harm	harm	VERB	VB	VerbForm=Inf	47	xcomp	_	_
50	me	me	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	49	obj	_	SpaceAfter=No
51	)	)	PUNCT	-RRB-	_	47	punct	_	SpaceAfter=No
52	,	,	PUNCT	,	_	55	punct	_	_
53	so	so	ADV	RB	_	55	advmod	_	_
54	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	55	nsubj	_	_
55	took	take	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	32	ccomp	_	_
56	heart	heart	NOUN	NN	Number=Sing	55	obj	_	_
57	and	and	CCONJ	CC	_	58	cc	_	_
58	went	go	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	55	conj	_	_
59	on	on	SCONJ	IN	_	60	mark	_	_
60	meditating	meditate	VERB	VBG	VerbForm=Ger	58	advcl	_	SpaceAfter=No
61	.	.	PUNCT	.	_	8	punct	_	_

~~~


