---
layout: base
title:  'Statistics of acl in UD_Danish-DDT'
udver: '2'
---

## Treebank Statistics: UD_Danish-DDT: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="da_ddt-dep-acl-relcl.html">acl:relcl</a></tt>.

3 nodes (0%) are attached to their parents as `acl`.

3 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.33333333333333.

The following 3 pairs of parts of speech are connected with `acl`: <tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da_ddt-pos-NUM.html">NUM</a></tt> (1; 33% instances), <tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da_ddt-pos-VERB.html">VERB</a></tt> (1; 33% instances), <tt><a href="da_ddt-pos-PRON.html">PRON</a></tt>-<tt><a href="da_ddt-pos-VERB.html">VERB</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 45	bgColor:blue
# visual-style 45	fgColor:white
# visual-style 40	bgColor:blue
# visual-style 40	fgColor:white
# visual-style 40 45 acl	color:blue
1	Den	den	DET	_	Gender=Com|Number=Sing|PronType=Dem	7	det	_	_
2	slanke	slank	ADJ	_	Definite=Def|Degree=Pos|Number=Sing	7	amod	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	velbyggede	velbygget	ADJ	_	Definite=Def|Degree=Pos|Number=Sing	7	amod	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	blonde	blond	ADJ	_	Definite=Def|Degree=Pos|Number=Sing	7	amod	_	_
7	væbner	væbner	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	12	nsubj	_	_
8	var	være	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	12	cop	_	_
9	som	som	ADP	_	PartType=Inf	12	case	_	_
10	et	en	DET	_	Gender=Neut|Number=Sing|PronType=Ind	12	det	_	_
11	friskt	frisk	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	12	amod	_	_
12	pust	pust	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	0	root	_	_
13	fra	fra	ADP	_	AdpType=Prep	15	case	_	_
14	de	den	DET	_	Number=Plur|PronType=Dem	15	det	_	_
15	bjerge	bjerg	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	12	nmod	_	SpaceAfter=No
16	,	,	PUNCT	_	_	18	punct	_	_
17	han	han	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=3|PronType=Prs	18	nsubj	_	_
18	kom	komme	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	15	advcl	_	_
19	fra	fra	ADP	_	AdpType=Prep	18	obl:lmod	_	SpaceAfter=No
20	,	,	PUNCT	_	_	38	punct	_	_
21	og	og	CCONJ	_	_	38	cc	_	_
22	ligesom	ligesom	SCONJ	_	_	27	case	_	_
23	sin	sin	DET	_	Gender=Com|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes	27	det	_	_
24	et	en	DET	_	Gender=Neut|Number=Sing|PronType=Ind	25	det	_	_
25	år	år	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	26	obl	_	_
26	ældre	gammel	ADJ	_	Degree=Cmp	27	amod	_	_
27	bror	bror	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	38	obl	_	SpaceAfter=No
28	,	,	PUNCT	_	_	29	punct	_	_
29	Aslac	Aslac	PROPN	_	_	27	nmod	_	SpaceAfter=No
30	,	,	PUNCT	_	_	29	punct	_	_
31	havde	have	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	38	aux	_	_
32	han	han	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=3|PronType=Prs	38	nsubj	_	_
33	-	-	PUNCT	_	_	32	punct	_	_
34	imod	imod	ADP	_	AdpType=Prep	36	case	_	_
35	al	al	ADJ	_	Degree=Pos|Gender=Com|Number=Sing	36	amod	_	_
36	sædvane	sædvane	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	38	obl	_	_
37	-	-	PUNCT	_	_	36	punct	_	_
38	tilbragt	tilbringe	VERB	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part	12	conj	_	_
39	sin	sin	DET	_	Gender=Com|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes	40	det	_	_
40	pagetid	pagetid	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	38	obj	_	_
41	-	-	PUNCT	_	_	45	punct	_	_
42	fra	fra	SCONJ	_	_	45	mark	_	_
43	han	han	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=3|PronType=Prs	45	nsubj	_	_
44	var	være	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	45	cop	_	_
45	7	7	NUM	_	NumType=Card	40	acl	_	SpaceAfter=No
46	,	,	PUNCT	_	_	49	punct	_	_
47	til	til	SCONJ	_	_	49	mark	_	_
48	han	han	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=3|PronType=Prs	49	nsubj	_	_
49	blev	blive	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	45	advcl	_	_
50	15	15	NUM	_	NumType=Card	49	xcomp	_	_
51	-	-	PUNCT	_	_	49	punct	_	_
52	hjemme	hjemme	ADV	_	_	38	advmod:lmod	_	_
53	hos	hos	ADP	_	AdpType=Prep	55	case	_	_
54	sin	sin	DET	_	Gender=Com|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes	55	det	_	_
55	far	far	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	52	obl	_	_
56	på	på	ADP	_	AdpType=Prep	57	case	_	_
57	Tor	Tor	PROPN	_	_	52	obl	_	_
58	Cantir	Cantir	PROPN	_	_	57	flat	_	_
59	ved	ved	ADP	_	AdpType=Prep	62	case	_	_
60	det	den	DET	_	Gender=Neut|Number=Sing|PronType=Dem	62	det	_	_
61	vigtige	vigtig	ADJ	_	Definite=Def|Degree=Pos|Number=Sing	62	amod	_	_
62	Dale-Pas	Dale-Pas	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	57	nmod	_	_
63	i	i	ADP	_	AdpType=Prep	64	case	_	_
64	Tol-Bjergene	Tol-bjerg	NOUN	_	Definite=Def|Gender=Neut|Number=Plur	62	nmod	_	SpaceAfter=No
65	.	.	PUNCT	_	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 25 acl	color:blue
1	Min	min	DET	_	Gender=Com|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	2	det	_	_
2	veninde	veninde	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	6	nsubj	_	_
3	og	og	CCONJ	_	_	4	cc	_	_
4	jeg	jeg	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=1|PronType=Prs	2	conj	_	_
5	havde	have	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	6	aux	_	_
6	besluttet	beslutte	VERB	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
7	,	,	PUNCT	_	_	11	punct	_	_
8	at	at	SCONJ	_	_	11	mark	_	_
9	vi	vi	PRON	_	Case=Nom|Gender=Com|Number=Plur|Person=1|PronType=Prs	11	nsubj	_	_
10	ville	ville	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	11	aux	_	_
11	drage	drage	VERB	_	VerbForm=Inf|Voice=Act	6	ccomp	_	_
12	til	til	ADP	_	AdpType=Prep	13	case	_	_
13	København	København	PROPN	_	_	11	obl	_	_
14	med	med	ADP	_	AdpType=Prep	17	case	_	_
15	vore	vores	DET	_	Number=Plur|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs|Style=Form	17	det	_	_
16	fire	fire	NUM	_	NumType=Card	17	nummod	_	_
17	børn	barn	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	11	obl	_	SpaceAfter=No
18	,	,	PUNCT	_	_	22	punct	_	_
19	så	så	SCONJ	_	_	22	mark	_	_
20	de	de	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	22	nsubj	_	_
21	kunne	kunne	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	22	aux	_	_
22	få	få	VERB	_	VerbForm=Inf|Voice=Act	11	advcl	_	_
23	lov	lov	NOUN	_	_	22	obj	_	_
24	at	at	PART	_	PartType=Inf	25	mark	_	_
25	se	se	VERB	_	VerbForm=Inf|Voice=Act	23	acl	_	_
26	storbyens	storby	NOUN	_	Case=Gen|Definite=Def|Gender=Com|Number=Sing	27	nmod:poss	_	_
27	stråleglans	stråleglans	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	25	obj	_	SpaceAfter=No
28	...	...	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 11 acl	color:blue
1	"	"	PUNCT	_	_	3	punct	_	SpaceAfter=No
2	Mange	mange	ADJ	_	Degree=Pos|Number=Plur	3	nsubj	_	_
3	syntes	synes	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	7	punct	_	_
5	det	det	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
6	var	være	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	7	cop	_	_
7	underligt	underlig	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	3	ccomp	_	SpaceAfter=No
8	,	,	PUNCT	_	_	11	punct	_	_
9	at	at	SCONJ	_	_	11	mark	_	_
10	jeg	jeg	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=1|PronType=Prs	11	nsubj	_	_
11	blev	blive	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	5	acl	_	_
12	ved	ved	ADV	_	_	11	xcomp	_	_
13	med	med	ADP	_	AdpType=Prep	15	mark	_	_
14	at	at	PART	_	PartType=Inf	15	mark	_	_
15	tage	tage	VERB	_	VerbForm=Inf|Voice=Act	11	advcl	_	_
16	rundt	rundt	ADV	_	_	15	advmod:lmod	_	_
17	med	med	ADP	_	AdpType=Prep	19	case	_	_
18	min	min	DET	_	Gender=Com|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	19	det	_	_
19	familie	familie	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	15	obl	_	_
20	til	til	SCONJ	_	_	22	mark	_	_
21	jeg	jeg	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=1|PronType=Prs	22	nsubj	_	_
22	blev	blive	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	15	obl	_	_
23	25	25	NUM	_	NumType=Card	24	nummod	_	_
24	år	år	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	22	xcomp	_	SpaceAfter=No
25	.	.	PUNCT	_	_	3	punct	_	_

~~~


