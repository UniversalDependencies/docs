

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is universal.
There are 1 language-specific subtypes of `flat`: [flat:name]().

20 nodes (0%) are attached to their parents as `flat`.

20 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.2.

The following 3 pairs of parts of speech are connected with `flat`: [ga-pos/PROPN]()-[ga-pos/PROPN]() (17; 85% instances), [ga-pos/NOUN]()-[ga-pos/X]() (2; 10% instances), [ga-pos/X]()-[ga-pos/X]() (1; 5% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 flat	color:blue
1	Faisean	faisean	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	0	root	_	_
2	le	le	ADP	Simp	_	3	case	_	_
3	Úna	Úna	PROPN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	1	nmod	_	_
4	Ní	ní	PART	Pat	PartType=Pat	3	flat:name	_	_
5	Bhrannagáin	Bhrannagáin	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	3	flat:name	_	_
6	Ná	ná	PART	Vb	Mood=Imp|PartType=Vb	7	mark:prt	_	_
7	híocaigí	híoc	VERB	Imper	Mood=Imp|Number=Plur|Person=2	1	ccomp	_	_
8	na	na	DET	Art	Definite=Def|Number=Plur|PronType=Art	9	det	_	_
9	táillí	táille	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Fem|Number=Plur	7	obj	_	_
10	-	-	PUNCT	Punct	_	11	punct	_	_
11	Fahey	Fahey	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	7	vocative	_	_
12	Brú	Brú	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	1	nmod	_	_
13	Tráchta	trácht	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	12	compound	_	_
14	i	i	ADP	Simp	_	15	case	_	_
15	Maigh	Maigh	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	12	nmod	_	_
16	Eo	Eo	PROPN	Noun	_	15	flat	_	SpaceAfter=No
17	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 45	bgColor:blue
# visual-style 45	fgColor:white
# visual-style 42	bgColor:blue
# visual-style 42	fgColor:white
# visual-style 42 45 flat	color:blue
1	Laistigh	laistigh	ADV	Loc	_	3	case	_	_
2	de	de	ADP	Simp	_	3	case	_	_
3	bhalla	balla	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	23	obl	_	_
4	cois	cois	ADP	Simp	_	5	case	_	_
5	bóthair	bóthar	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	_
6	ar	ar	ADP	Simp	_	7	case	_	_
7	fhearann	fearann	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	3	nmod	_	_
8	na	na	DET	Art	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	heaglaise	eaglais	NOUN	Noun	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	7	compound	_	_
10	a	a	PART	Vb	PartType=Vb|PronType=Rel	11	obl	_	_
11	raibh	bí	VERB	PastInd	Form=Ecl|Mood=Ind|Tense=Past	9	acl:relcl	_	_
12	athair	athair	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	11	nsubj	_	_
13	Dhúbhglais	Dhúbhglais	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	12	compound	_	_
14	de	de	ADP	Simp	_	13	flat:name	_	_
15	h-Íde	Íde	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	13	flat:name	_	_
16	ina	i	ADP	Poss	Gender=Masc|Number=Sing|Person=3|Poss=Yes	17	case	_	_
17	mhinistéir	mhinistéir	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	11	xcomp:pred	_	_
18	inti	i	ADP	Prep	Gender=Fem|Number=Sing|Person=3	17	obl:prep	_	_
19	ar	ar	ADP	Simp	_	21	case	_	_
20	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	21	det	_	_
21	Phortach	portach	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	11	obl	_	_
22	Ard	ard	ADJ	Adj	Case=NomAcc|Gender=Masc|Number=Sing	21	amod	_	_
23	tá	bí	VERB	PresInd	Mood=Ind|Tense=Pres	0	root	_	_
24	fógra	fógra	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	23	nsubj	_	_
25	anois	anois	ADV	Gn	_	23	advmod	_	SpaceAfter=No
26	:	:	PUNCT	Punct	_	28	punct	_	_
27	'	'	PUNCT	Punct	_	28	punct	_	SpaceAfter=No
28	Ceiliúrlann	ceiliúrl	VERB	PresInd	Mood=Ind|Tense=Pres	23	parataxis	_	_
29	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	30	det	_	_
30	Chraoibhín	craobh	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Fem|Number=Sing	28	nsubj	_	_
31	/	/	PUNCT	Punct	_	32	punct	_	_
32	Dr	Dr	X	Abr	Abbr=Yes	34	compound	_	_
33	Douglas	Douglas	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	34	compound	_	_
34	Hyde	Hyde	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	30	nmod	_	_
35	Centre	Centre	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	34	compound	_	_
36	ar	ar	ADP	Simp	_	37	case	_	_
37	oscailt	oscailt	NOUN	Noun	VerbForm=Inf	28	xcomp	_	_
38	/	/	PUNCT	Punct	_	40	punct	_	_
39	open	open	X	Noun	Case=NomAcc|Foreign=Yes|Gender=Fem|Number=Sing	37	flat	_	_
40	Bealtaine	Bealtaine	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	37	nmod	_	_
41	-	-	PUNCT	Punct	_	42	punct	_	_
42	Meán	meán	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	40	nmod	_	_
43	Fómhair	fómhar	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	42	compound	_	_
44	/	/	PUNCT	Punct	_	45	punct	_	_
45	May	May	X	Foreign	Foreign=Yes	42	flat	_	_
46	-	-	PUNCT	Punct	_	47	punct	_	_
47	September	September	X	Foreign	Foreign=Yes	45	flat	_	SpaceAfter=No
48	...	...	PUNCT	Punct	_	50	punct	_	SpaceAfter=No
49	'	'	PUNCT	Punct	_	50	punct	_	_
50	Tá	bí	VERB	PresInd	Mood=Ind|Tense=Pres	23	ccomp	_	_
51	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	52	det	_	_
52	t-údar	údar	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	50	nsubj	_	_
53	agus	agus	CCONJ	Coord	_	55	cc	_	_
54	An	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	55	det	_	_
55	Gúm	gúm	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	52	conj	_	_
56	le	le	ADP	Simp	_	57	case	_	_
57	moladh	moladh	NOUN	Noun	VerbForm=Inf	50	xcomp:pred	_	_
58	as	as	ADP	Simp	_	65	case	_	_
59	tabhairt	tabhairt	NOUN	Noun	VerbForm=Inf	65	obj	_	_
60	faoina	faoi	ADP	Poss	Gender=Masc|Number=Sing|Person=3|Poss=Yes	61	case	_	_
61	leithéid	leithéid	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	59	nmod	_	_
62	d'	de	ADP	Simp	_	63	case	_	SpaceAfter=No
63	áis	áis	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	59	nmod	_	_
64	a	a	PART	Inf	PartType=Inf	65	mark	_	_
65	chur	cur	NOUN	Noun	Form=Len|VerbForm=Inf	50	xcomp	_	_
66	ar	ar	ADP	Simp	_	67	case	_	_
67	fáil	fáil	NOUN	Noun	VerbForm=Inf	65	xcomp	_	_
68	-	-	PUNCT	Punct	_	69	punct	_	_
69	thiocfadh	tar	VERB	VI	Form=Len|Mood=Cnd	50	parataxis	_	_
70	gurbh	is	AUX	Cop	Form=VF|Tense=Past|VerbForm=Cop	71	cop	_	_
71	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	69	ccomp	_	_
72	seo	seo	DET	Det	PronType=Dem	71	det	_	_
73	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	75	det	_	_
74	chéad	céad	NUM	Num	Form=Len|NumType=Ord	75	nummod	_	_
75	chéim	céim	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Fem|Number=Sing	71	nsubj	_	_
76	i	i	ADP	Simp	_	77	case	_	_
77	dtreo	treo	NOUN	Noun	Case=NomAcc|Form=Ecl|Gender=Fem|Number=Sing	75	nmod	_	_
78	ciclipéid	ciclipéid	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	77	compound	_	_
79	eolaíochta	eolaíocht	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	78	compound	_	_
80	as	as	ADP	Simp	_	81	case	_	_
81	Gaeilge	Gaeilge	PROPN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	78	nmod	_	_

~~~


~~~ conllu
# visual-style 47	bgColor:blue
# visual-style 47	fgColor:white
# visual-style 45	bgColor:blue
# visual-style 45	fgColor:white
# visual-style 45 47 flat	color:blue
1	Laistigh	laistigh	ADV	Loc	_	3	case	_	_
2	de	de	ADP	Simp	_	3	case	_	_
3	bhalla	balla	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	23	obl	_	_
4	cois	cois	ADP	Simp	_	5	case	_	_
5	bóthair	bóthar	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	_
6	ar	ar	ADP	Simp	_	7	case	_	_
7	fhearann	fearann	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	3	nmod	_	_
8	na	na	DET	Art	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	heaglaise	eaglais	NOUN	Noun	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	7	compound	_	_
10	a	a	PART	Vb	PartType=Vb|PronType=Rel	11	obl	_	_
11	raibh	bí	VERB	PastInd	Form=Ecl|Mood=Ind|Tense=Past	9	acl:relcl	_	_
12	athair	athair	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	11	nsubj	_	_
13	Dhúbhglais	Dhúbhglais	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	12	compound	_	_
14	de	de	ADP	Simp	_	13	flat:name	_	_
15	h-Íde	Íde	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	13	flat:name	_	_
16	ina	i	ADP	Poss	Gender=Masc|Number=Sing|Person=3|Poss=Yes	17	case	_	_
17	mhinistéir	mhinistéir	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	11	xcomp:pred	_	_
18	inti	i	ADP	Prep	Gender=Fem|Number=Sing|Person=3	17	obl:prep	_	_
19	ar	ar	ADP	Simp	_	21	case	_	_
20	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	21	det	_	_
21	Phortach	portach	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	11	obl	_	_
22	Ard	ard	ADJ	Adj	Case=NomAcc|Gender=Masc|Number=Sing	21	amod	_	_
23	tá	bí	VERB	PresInd	Mood=Ind|Tense=Pres	0	root	_	_
24	fógra	fógra	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	23	nsubj	_	_
25	anois	anois	ADV	Gn	_	23	advmod	_	SpaceAfter=No
26	:	:	PUNCT	Punct	_	28	punct	_	_
27	'	'	PUNCT	Punct	_	28	punct	_	SpaceAfter=No
28	Ceiliúrlann	ceiliúrl	VERB	PresInd	Mood=Ind|Tense=Pres	23	parataxis	_	_
29	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	30	det	_	_
30	Chraoibhín	craobh	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Fem|Number=Sing	28	nsubj	_	_
31	/	/	PUNCT	Punct	_	32	punct	_	_
32	Dr	Dr	X	Abr	Abbr=Yes	34	compound	_	_
33	Douglas	Douglas	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	34	compound	_	_
34	Hyde	Hyde	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	30	nmod	_	_
35	Centre	Centre	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	34	compound	_	_
36	ar	ar	ADP	Simp	_	37	case	_	_
37	oscailt	oscailt	NOUN	Noun	VerbForm=Inf	28	xcomp	_	_
38	/	/	PUNCT	Punct	_	40	punct	_	_
39	open	open	X	Noun	Case=NomAcc|Foreign=Yes|Gender=Fem|Number=Sing	37	flat	_	_
40	Bealtaine	Bealtaine	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	37	nmod	_	_
41	-	-	PUNCT	Punct	_	42	punct	_	_
42	Meán	meán	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	40	nmod	_	_
43	Fómhair	fómhar	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	42	compound	_	_
44	/	/	PUNCT	Punct	_	45	punct	_	_
45	May	May	X	Foreign	Foreign=Yes	42	flat	_	_
46	-	-	PUNCT	Punct	_	47	punct	_	_
47	September	September	X	Foreign	Foreign=Yes	45	flat	_	SpaceAfter=No
48	...	...	PUNCT	Punct	_	50	punct	_	SpaceAfter=No
49	'	'	PUNCT	Punct	_	50	punct	_	_
50	Tá	bí	VERB	PresInd	Mood=Ind|Tense=Pres	23	ccomp	_	_
51	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	52	det	_	_
52	t-údar	údar	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	50	nsubj	_	_
53	agus	agus	CCONJ	Coord	_	55	cc	_	_
54	An	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	55	det	_	_
55	Gúm	gúm	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	52	conj	_	_
56	le	le	ADP	Simp	_	57	case	_	_
57	moladh	moladh	NOUN	Noun	VerbForm=Inf	50	xcomp:pred	_	_
58	as	as	ADP	Simp	_	65	case	_	_
59	tabhairt	tabhairt	NOUN	Noun	VerbForm=Inf	65	obj	_	_
60	faoina	faoi	ADP	Poss	Gender=Masc|Number=Sing|Person=3|Poss=Yes	61	case	_	_
61	leithéid	leithéid	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	59	nmod	_	_
62	d'	de	ADP	Simp	_	63	case	_	SpaceAfter=No
63	áis	áis	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	59	nmod	_	_
64	a	a	PART	Inf	PartType=Inf	65	mark	_	_
65	chur	cur	NOUN	Noun	Form=Len|VerbForm=Inf	50	xcomp	_	_
66	ar	ar	ADP	Simp	_	67	case	_	_
67	fáil	fáil	NOUN	Noun	VerbForm=Inf	65	xcomp	_	_
68	-	-	PUNCT	Punct	_	69	punct	_	_
69	thiocfadh	tar	VERB	VI	Form=Len|Mood=Cnd	50	parataxis	_	_
70	gurbh	is	AUX	Cop	Form=VF|Tense=Past|VerbForm=Cop	71	cop	_	_
71	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	69	ccomp	_	_
72	seo	seo	DET	Det	PronType=Dem	71	det	_	_
73	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	75	det	_	_
74	chéad	céad	NUM	Num	Form=Len|NumType=Ord	75	nummod	_	_
75	chéim	céim	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Fem|Number=Sing	71	nsubj	_	_
76	i	i	ADP	Simp	_	77	case	_	_
77	dtreo	treo	NOUN	Noun	Case=NomAcc|Form=Ecl|Gender=Fem|Number=Sing	75	nmod	_	_
78	ciclipéid	ciclipéid	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	77	compound	_	_
79	eolaíochta	eolaíocht	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	78	compound	_	_
80	as	as	ADP	Simp	_	81	case	_	_
81	Gaeilge	Gaeilge	PROPN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	78	nmod	_	_

~~~


