

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Persian)

This relation is universal.

168 nodes (0%) are attached to their parents as `foreign`.

167 instances of `foreign` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.14285714285714.

The following 7 pairs of parts of speech are connected with `foreign`: [fa-pos/X]()-[fa-pos/X]() (162; 96% instances), [fa-pos/ADJ]()-[fa-pos/X]() (1; 1% instances), [fa-pos/CONJ]()-[fa-pos/X]() (1; 1% instances), [fa-pos/VERB]()-[fa-pos/X]() (1; 1% instances), [fa-pos/X]()-[fa-pos/ADJ]() (1; 1% instances), [fa-pos/X]()-[fa-pos/CONJ]() (1; 1% instances), [fa-pos/X]()-[fa-pos/NOUN]() (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 foreign	color:blue
1	عدی	_	NOUN	N_SING	Number=Sing	2	nsubj	_	_
2	گفت	_	VERB	V_PA	Number=Sing|Person=3|Tense=Past	0	root	_	_
3	:	_	PUNCT	DELM	_	2	punct	_	_
4	قلوبنا	_	X	FW	_	2	ccomp	_	_
5	لیست	_	X	FW	_	4	foreign	_	_
6	بیدک	_	X	FW	_	5	foreign	_	_
7	معاویه	_	X	FW	_	6	foreign	_	_
8	.	_	PUNCT	DELM	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 19 foreign	color:blue
1	در	_	ADP	P	_	2	case	_	_
2	خطبه	_	NOUN	N_SING	Number=Sing	7	nmod	_	_
3	معروف	_	ADJ	ADJ	Degree=Pos	2	amod	_	_
4	ش	_	PRON	PRO	Number=Sing|Person=3|PronType=Prs	2	nmod:poss	_	_
5	در	_	ADP	P	_	6	case	_	_
6	کوفه	_	NOUN	N_SING	Number=Sing	7	nmod	_	_
7	گفته	_	VERB	V_PP	Number=Sing|Person=3|VerbForm=Part	0	root	_	_
8	بود	_	VERB	V_PA	Number=Sing|Person=3|Tense=Past	7	aux	_	_
9	:	_	PUNCT	DELM	_	7	punct	_	_
10	نسوسکم	_	X	FW	_	7	ccomp	_	_
11	بسلطان	_	X	FW	_	10	foreign	_	_
12	الله	_	X	FW	_	11	foreign	_	_
13	الذی	_	X	FW	_	12	foreign	_	_
14	اعطانا	_	X	FW	_	13	foreign	_	_
15	و	و	X	FW	_	14	foreign	_	_
16	نذود	_	X	FW	_	15	foreign	_	_
17	عنکم	_	X	FW	_	16	foreign	_	_
18	بفیأ	_	X	FW	_	17	foreign	_	_
19	الله	_	NOUN	N_SING	Number=Sing	18	foreign	_	_
20	خولنا	_	X	FW	_	18	foreign	_	_
21	فلنا	_	X	FW	_	20	foreign	_	_
22	علیکم	_	X	FW	_	21	foreign	_	_
23	السمع	_	X	FW	_	22	foreign	_	_
24	و	و	X	FW	_	23	foreign	_	_
25	الطاعه	_	X	FW	_	24	foreign	_	_
26	فیما	_	X	FW	_	25	foreign	_	_
27	احببنا	_	X	FW	_	26	foreign	_	_
28	و	و	X	FW	_	27	foreign	_	_
29	لکم	_	X	FW	_	28	foreign	_	_
30	علینا	_	X	FW	_	29	foreign	_	_
31	العدل	_	X	FW	_	30	foreign	_	_
32	فیما	_	X	FW	_	31	foreign	_	_
33	ولینا	_	X	FW	_	32	foreign	_	_
34	.	_	PUNCT	DELM	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 49	bgColor:blue
# visual-style 49	fgColor:white
# visual-style 58	bgColor:blue
# visual-style 58	fgColor:white
# visual-style 58 49 foreign	color:blue
1	این	_	DET	DET	_	3	det	_	_
2	دو	_	NUM	NUM	NumType=Card	3	nummod	_	_
3	تفسیر	_	NOUN	N_SING	Number=Sing	8	dobj	_	_
4	را	را	PART	CLITIC	_	3	case	_	_
5	این	_	DET	DET	_	6	det	_	_
6	گونه	_	NOUN	N_SING	Number=Sing	8	nmod	_	_
7	معرفی	_	NOUN	N_SING	Number=Sing	8	compound:lvc	_	_
8	کرده	_	VERB	V_PP	Number=Sing|Person=3|VerbForm=Part	0	root	_	_
9	است	_	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	8	aux	_	_
10	:	_	PUNCT	DELM	_	8	punct	_	_
11	گروهی	_	NOUN	N_SING	Number=Sing	8	dep	_	_
12	که	که	SCONJ	CON	_	17	mark	_	_
13	نه	_	ADV	ADV_NEG	Negative=Neg	14	neg	_	_
14	انقلاب	_	NOUN	N_SING	Number=Sing	17	dobj	_	_
15	را	را	PART	CLITIC	_	14	case	_	_
16	قبول	_	ADJ	ADJ	Degree=Pos	17	compound:lvc	_	_
17	دارند	_	VERB	V_PRS	Number=Plur|Person=3|Tense=Pres	11	acl:relcl	_	_
18	و	و	CONJ	CON	_	14	cc	_	_
19	نه	_	ADV	ADV_NEG	Negative=Neg	21	neg	_	_
20	دوم	_	ADJ	ADJ	Degree=Pos	21	nummod	_	_
21	خرداد	_	NOUN	N_SING	Number=Sing	14	conj	_	_
22	را	را	PART	CLITIC	_	21	case	_	_
23	و	و	CONJ	CON	_	17	cc	_	_
24	آن	_	PRON	PRO	Number=Sing|PronType=Dem	26	nsubj	_	_
25	را	را	PART	CLITIC	_	24	case	_	_
26	انقلابی	_	NOUN	N_SING	Number=Sing	41	xcomp	_	_
27	در	_	ADP	P	_	28	case	_	_
28	جهت	_	NOUN	N_SING	Number=Sing	26	nmod	_	_
29	مخالفت	_	NOUN	N_SING	Number=Sing	28	nmod:poss	_	_
30	با	_	ADP	P	_	31	case	_	_
31	انقلاب	_	NOUN	N_SING	Number=Sing	29	nmod	_	_
32	اسلامی	_	ADJ	ADJ	Degree=Pos	31	amod	_	_
33	و	و	CONJ	CON	_	26	cc	_	_
34	حرکتی	_	NOUN	N_SING	Number=Sing	26	conj	_	_
35	برای	_	ADP	P	_	36	case	_	_
36	نفی	_	NOUN	N_SING	Number=Sing	34	nmod	_	_
37	دستاوردهای	_	NOUN	N_PL	Number=Plur	36	nmod:poss	_	_
38	انقلاب	_	NOUN	N_SING	Number=Sing	37	nmod:poss	_	_
39	شکوهمند	_	ADJ	ADJ	Degree=Pos	38	amod	_	_
40	اسلامی	_	ADJ	ADJ	Degree=Pos	38	amod	_	_
41	می‌خوانند	_	VERB	V_PRS	Number=Plur|Person=3|Tense=Pres	17	conj	_	_
42	و	و	CONJ	CON	_	41	cc	_	_
43	می‌خواهند	_	VERB	V_PRS	Number=Plur|Person=3|Tense=Pres	41	conj	_	_
44	،	_	PUNCT	DELM	_	43	punct	_	_
45	و	و	CONJ	CON	_	43	cc	_	_
46	گروه	_	NOUN	N_SING	Number=Sing	43	conj	_	_
47	دیگر	_	ADJ	ADJ	Degree=Pos	46	amod	_	_
48	که	که	SCONJ	CON	_	58	mark	_	_
49	مع‌الاسف	_	X	FW	_	58	foreign	_	_
50	با	_	ADP	P	_	51	case	_	_
51	شعار	_	NOUN	N_SING	Number=Sing	58	nmod	_	_
52	دین‌خواهی	_	NOUN	N_SING	Number=Sing	51	nmod:poss	_	_
53	و	و	CONJ	CON	_	52	cc	_	_
54	پاسداری	_	NOUN	N_SING	Number=Sing	52	conj	_	_
55	ارزشها	_	NOUN	N_PL	Number=Plur	54	nmod:poss	_	_
56	به	به	ADP	P	_	57	case	_	_
57	میدان	_	NOUN	N_SING	Number=Sing	58	nmod	_	_
58	آمده‌اند	_	VERB	V_PP	Number=Plur|Person=3|VerbForm=Part	46	acl:relcl	_	_
59	و	و	CONJ	CON	_	58	cc	_	_
60	تصریحاً	_	ADV	ADV	_	68	advmod	_	_
61	یا	یا	CONJ	CON	_	60	cc	_	_
62	تلویحاً	_	ADV	ADV	_	60	conj	_	_
63	به	به	ADP	P	_	64	case	_	_
64	مخالفت	_	NOUN	N_SING	Number=Sing	68	nmod	_	_
65	با	_	ADP	P	_	67	case	_	_
66	دوم	_	ADJ	ADJ	Degree=Pos	67	nummod	_	_
67	خرداد	_	NOUN	N_SING	Number=Sing	64	nmod	_	_
68	می‌پردازند	_	VERB	V_PRS	Number=Plur|Person=3|Tense=Pres	58	conj	_	_
69	و	و	CONJ	CON	_	68	cc	_	_
70	این	_	DET	DET	_	71	det	_	_
71	حادثه	_	NOUN	N_SING	Number=Sing	74	nsubj	_	_
72	عظیم	_	ADJ	ADJ	Degree=Pos	71	amod	_	_
73	را	را	PART	CLITIC	_	71	case	_	_
74	حرکتی	_	NOUN	N_SING	Number=Sing	85	xcomp	_	_
75	ضد	_	ADP	P	_	76	case	_	_
76	دینی	_	ADJ	ADJ	Degree=Pos	74	advcl	_	_
77	و	و	CONJ	CON	_	75	cc	_	_
78	حاصل	_	NOUN	N_SING	Number=Sing	75	conj	_	_
79	توطئه	_	NOUN	N_SING	Number=Sing	78	nmod:poss	_	_
80	دشمنان	_	NOUN	N_PL	Number=Plur	79	nmod:poss	_	_
81	و	و	CONJ	CON	_	80	cc	_	_
82	مخالف	_	ADJ	ADJ	Degree=Pos	80	conj	_	_
83	ارزشها	_	NOUN	N_PL	Number=Plur	82	nmod:poss	_	_
84	تلقی	_	NOUN	N_SING	Number=Sing	85	compound:lvc	_	_
85	می‌کنند	_	VERB	V_PRS	Number=Plur|Person=3|Tense=Pres	68	conj	_	_
86	.	_	PUNCT	DELM	_	8	punct	_	_

~~~


