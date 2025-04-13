---
layout: base
title:  'Statistics of csubj in UD_Albanian-STAF'
udver: '2'
---

## Treebank Statistics: UD_Albanian-STAF: Relations: `csubj`

This relation is universal.

2 nodes (0%) are attached to their parents as `csubj`.

2 instances of `csubj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.

The following 2 pairs of parts of speech are connected with `csubj`: <tt><a href="sq_staf-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sq_staf-pos-VERB.html">VERB</a></tt> (1; 50% instances), <tt><a href="sq_staf-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_staf-pos-ADJ.html">ADJ</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 csubj	color:blue
1	U	u	PART	_	_	2	nsubj	_	_
2	largova	largoj	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	_	0	root	_	_
3	nga	nga	ADP	_	_	4	case	_	_
4	shtëpia	shtëpi	NOUN	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	_	2	obl	_	SpaceAfter=No
5	,	,	PUNCT	_	_	2	punct	_	_
6	më	unë	ADV	_	_	8	advmod	_	_
7	e	e	DET	Case=Nom|Gender=Fem|Number=Sing|PronType=Art	_	8	det	_	_
8	saktë	saktë	ADJ	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	_	2	parataxis	_	_
9	është	jam	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	_	8	cop	_	_
10	të	të	PART	_	_	11	mark	_	_
11	thuhet	them	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Mid	_	8	csubj	_	_
12	më	më	PRON	Case=Dat|Number=Sing|Person=1|PronType=Prs	_	13	iobj	_	_
13	përzuri	përzur	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	_	11	ccomp	_	_
14	ai	ai	PRON	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	_	13	nsubj	_	SpaceAfter=No
15	,	,	PUNCT	_	_	8	punct	_	_
16	të	të	PART	_	_	17	mark	_	_
17	mos	mos	PART	_	_	19	advmod	_	_
18	e	e	PRON	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	_	19	obj	_	_
19	shkelësh	shkelëj	VERB	Mood=Ind|Number=Sing|Person=2|Tense=Pres|Voice=Act	_	2	parataxis	_	_
20	më	më	ADV	_	_	19	advmod	_	_
21	këtë	ky	PRON	Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	_	22	det	_	_
22	prag	prag	NOUN	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	_	19	obj	_	SpaceAfter=No
23	,	,	PUNCT	_	_	19	punct	_	_
24	më	unë	PRON	Case=Acc|Number=Sing|Person=1|PronType=Prs	_	25	iobj	_	_
25	tha	them	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	_	19	parataxis	_	SpaceAfter=No
26	,	,	PUNCT	_	_	25	punct	_	_
27	shtoi	shtoj	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	_	19	conj	_	_
28	se	se	SCONJ	_	_	30	mark	_	_
29	i	ai	PRON	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	_	30	iobj	_	_
30	vinte	vij	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	_	27	ccomp	_	_
31	ndot	ndot	VERB	PronType=Ind	_	30	xcomp	_	_
32	prej	prej	ADP	_	_	33	case	_	_
33	meje	unë	PRON	Case=Abl|Number=Sing|Person=3|PronType=Prs	_	31	obl	_	SpaceAfter=No
34	,	,	PUNCT	_	_	36	punct	_	_
35	i	ai	PRON	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	_	36	iobj	_	_
36	vinte	vij	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	_	30	conj	_	_
37	turp	turp	ADJ	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	_	36	xcomp	_	SpaceAfter=No
38	,	,	PUNCT	_	_	36	punct	_	_
39	e	e	CCONJ	_	_	40	cc	_	_
40	unë	unë	PRON	_	_	42	nsubj	_	_
41	u	u	AUX	_	_	42	aux	_	_
42	largova	largoj	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Mid	_	2	parataxis	_	_
43	i	i	DET	Case=Nom|Gender=Masc|Number=Sing|PronType=Art	_	44	det	_	_
44	errur	errur	NOUN	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	_	42	obl	_	SpaceAfter=No
45	,	,	PUNCT	_	_	42	punct	_	_
46	pa	pa	PART	_	_	48	mark	_	_
47	asnjë	asnjë	PRON	PronType=Ind	_	48	det	_	_
48	ide	ide	NOUN	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	_	42	obl	_	_
49	se	se	SCONJ	Mood=Ind|Number=Sing|Person=1|Tense=Past|Voice=Act	_	53	mark	_	_
50	ku	ku	ADV	_	_	53	advmod	_	_
51	do	do	PART	_	_	53	mark	_	_
52	të	të	PART	_	_	53	mark	_	_
53	shkoja	shkoj	VERB	Mood=Ind|Number=Sing|Person=1|Tense=Past|Voice=Act	_	48	acl:relcl	_	SpaceAfter=No
54	,	,	PUNCT	_	_	53	punct	_	_
55	mjafton	mjafton	ADV	_	_	58	advmod	_	_
56	të	të	PART	_	_	58	mark	_	_
57	i	ai	PRON	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	_	58	obj	_	_
58	ikja	ikja	VERB	_	_	42	parataxis	_	_
59	prepotencës	prepotencë	NOUN	Case=Abl|Definite=Def|Gender=Fem|Number=Sing	_	58	obl	_	_
60	së	së	PART	_	_	61	case	_	_
61	tij	tij	PRON	Case=Gen|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	_	59	det:poss	_	_
62	imperiale	imperiale	ADJ	Case=Abl|Degree=Pos|Gender=Fem|Number=Sing	_	59	amod	_	SpaceAfter=No
63	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 csubj	color:blue
1	Por	por	CCONJ	_	_	3	cc	_	end_char=2297|start_char=2294
2	më	më	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	3	iobj	_	end_char=2300|start_char=2298
3	duket	dukem	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	end_char=2306|start_char=2301
4	se	se	SCONJ	_	_	8	mark	_	end_char=2309|start_char=2307
5	jam	jam	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|Voice=Act	8	cop	_	end_char=2313|start_char=2310
6	shumë	shumë	ADV	_	AdvType=Deg	8	advmod	_	end_char=2319|start_char=2314
7	i	i	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Art	8	det:adj	_	end_char=2321|start_char=2320
8	kthjellët	kthjellë	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	3	csubj	_	end_char=2331|SpaceAfter=No|start_char=2322
9	.	.	PUNCT	_	_	3	punct	_	end_char=2332|start_char=2331

~~~


