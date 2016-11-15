

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
2	گفت	گفت#گو	VERB	V_PA	Number=Sing|Person=3|Tense=Past	0	root	_	_
3	:	:	PUNCT	DELM	_	2	punct	_	_
4	قلوبنا	_	X	FW	_	2	ccomp	_	_
5	لیست	لیست	X	FW	_	4	foreign	_	_
6	بیدک	_	X	FW	_	5	foreign	_	_
7	معاویه	معاویه	X	FW	_	6	foreign	_	_
8	.	.	PUNCT	DELM	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 49	bgColor:blue
# visual-style 49	fgColor:white
# visual-style 58	bgColor:blue
# visual-style 58	fgColor:white
# visual-style 58 49 foreign	color:blue
1	این	این	DET	DET	_	3	det	_	_
2	دو	دو	NUM	NUM	NumType=Card	3	nummod	_	_
3	تفسیر	تفسیر	NOUN	N_SING	Number=Sing	8	dobj	_	_
4	را	را	PART	CLITIC	_	3	case	_	_
5	این	این	DET	DET	_	6	det	_	_
6	گونه	گونه	NOUN	N_SING	Number=Sing	8	nmod	_	_
7	معرفی	معرفی	NOUN	N_SING	Number=Sing	8	compound:lvc	_	_
8	کرده	کرد#کن	VERB	V_PP	Number=Sing|Person=3|VerbForm=Part	0	root	_	_
9	است	است	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	8	aux	_	_
10	:	:	PUNCT	DELM	_	8	punct	_	_
11	گروهی	گروه	NOUN	N_SING	Number=Sing	8	dep	_	_
12	که	که	SCONJ	CON	_	17	mark	_	_
13	نه	نه	ADV	ADV_NEG	Negative=Neg	14	neg	_	_
14	انقلاب	انقلاب	NOUN	N_SING	Number=Sing	17	dobj	_	_
15	را	را	PART	CLITIC	_	14	case	_	_
16	قبول	قبول	ADJ	ADJ	Degree=Pos	17	compound:lvc	_	_
17	دارند	داشت#دار	VERB	V_PRS	Number=Plur|Person=3|Tense=Pres	11	acl:relcl	_	_
18	و	و	CONJ	CON	_	14	cc	_	_
19	نه	نه	ADV	ADV_NEG	Negative=Neg	21	neg	_	_
20	دوم	دوم	ADJ	ADJ	Degree=Pos	21	nummod	_	_
21	خرداد	خرداد	NOUN	N_SING	Number=Sing	14	conj	_	_
22	را	را	PART	CLITIC	_	21	case	_	_
23	و	و	CONJ	CON	_	17	cc	_	_
24	آن	آن	PRON	PRO	Number=Sing|PronType=Dem	26	nsubj	_	_
25	را	را	PART	CLITIC	_	24	case	_	_
26	انقلابی	انقلاب	NOUN	N_SING	Number=Sing	41	xcomp	_	_
27	در	در	ADP	P	_	28	case	_	_
28	جهت	جهت	NOUN	N_SING	Number=Sing	26	nmod	_	_
29	مخالفت	مخالفت	NOUN	N_SING	Number=Sing	28	nmod:poss	_	_
30	با	با	ADP	P	_	31	case	_	_
31	انقلاب	انقلاب	NOUN	N_SING	Number=Sing	29	nmod	_	_
32	اسلامی	اسلامی	ADJ	ADJ	Degree=Pos	31	amod	_	_
33	و	و	CONJ	CON	_	26	cc	_	_
34	حرکتی	_	NOUN	N_SING	Number=Sing	26	conj	_	_
35	برای	برای	ADP	P	_	36	case	_	_
36	نفی	_	NOUN	N_SING	Number=Sing	34	nmod	_	_
37	دستاوردهای	دستاورد	NOUN	N_PL	Number=Plur	36	nmod:poss	_	_
38	انقلاب	انقلاب	NOUN	N_SING	Number=Sing	37	nmod:poss	_	_
39	شکوهمند	شکوهمند	ADJ	ADJ	Degree=Pos	38	amod	_	_
40	اسلامی	اسلامی	ADJ	ADJ	Degree=Pos	38	amod	_	_
41	می‌خوانند	خواند#خوان	VERB	V_PRS	Number=Plur|Person=3|Tense=Pres	17	conj	_	_
42	و	و	CONJ	CON	_	41	cc	_	_
43	می‌خواهند	خواست#خواه	VERB	V_PRS	Number=Plur|Person=3|Tense=Pres	41	conj	_	_
44	،	،	PUNCT	DELM	_	43	punct	_	_
45	و	و	CONJ	CON	_	43	cc	_	_
46	گروه	گروه	NOUN	N_SING	Number=Sing	43	conj	_	_
47	دیگر	دیگر	ADJ	ADJ	Degree=Pos	46	amod	_	_
48	که	که	SCONJ	CON	_	58	mark	_	_
49	مع‌الاسف	_	X	FW	_	58	foreign	_	_
50	با	با	ADP	P	_	51	case	_	_
51	شعار	شعار	NOUN	N_SING	Number=Sing	58	nmod	_	_
52	دین‌خواهی	_	NOUN	N_SING	Number=Sing	51	nmod:poss	_	_
53	و	و	CONJ	CON	_	52	cc	_	_
54	پاسداری	پاسداری	NOUN	N_SING	Number=Sing	52	conj	_	_
55	ارزشها	ارزش	NOUN	N_PL	Number=Plur	54	nmod:poss	_	_
56	به	به	ADP	P	_	57	case	_	_
57	میدان	میدان	NOUN	N_SING	Number=Sing	58	nmod	_	_
58	آمده‌اند	آمد#آ	VERB	V_PP	Number=Plur|Person=3|VerbForm=Part	46	acl:relcl	_	_
59	و	و	CONJ	CON	_	58	cc	_	_
60	تصریحاً	تصریحاً	ADV	ADV	_	68	advmod	_	_
61	یا	یا	CONJ	CON	_	60	cc	_	_
62	تلویحاً	_	ADV	ADV	_	60	conj	_	_
63	به	به	ADP	P	_	64	case	_	_
64	مخالفت	مخالفت	NOUN	N_SING	Number=Sing	68	nmod	_	_
65	با	با	ADP	P	_	67	case	_	_
66	دوم	دوم	ADJ	ADJ	Degree=Pos	67	nummod	_	_
67	خرداد	خرداد	NOUN	N_SING	Number=Sing	64	nmod	_	_
68	می‌پردازند	پرداخت#پرداز	VERB	V_PRS	Number=Plur|Person=3|Tense=Pres	58	conj	_	_
69	و	و	CONJ	CON	_	68	cc	_	_
70	این	این	DET	DET	_	71	det	_	_
71	حادثه	حادثه	NOUN	N_SING	Number=Sing	74	nsubj	_	_
72	عظیم	عظیم	ADJ	ADJ	Degree=Pos	71	amod	_	_
73	را	را	PART	CLITIC	_	71	case	_	_
74	حرکتی	_	NOUN	N_SING	Number=Sing	85	xcomp	_	_
75	ضد	ضد	ADP	P	_	76	case	_	_
76	دینی	دینی	ADJ	ADJ	Degree=Pos	74	advcl	_	_
77	و	و	CONJ	CON	_	75	cc	_	_
78	حاصل	حاصل	NOUN	N_SING	Number=Sing	75	conj	_	_
79	توطئه	_	NOUN	N_SING	Number=Sing	78	nmod:poss	_	_
80	دشمنان	دشمن	NOUN	N_PL	Number=Plur	79	nmod:poss	_	_
81	و	و	CONJ	CON	_	80	cc	_	_
82	مخالف	مخالف	ADJ	ADJ	Degree=Pos	80	conj	_	_
83	ارزشها	ارزش	NOUN	N_PL	Number=Plur	82	nmod:poss	_	_
84	تلقی	تلقی	NOUN	N_SING	Number=Sing	85	compound:lvc	_	_
85	می‌کنند	کرد#کن	VERB	V_PRS	Number=Plur|Person=3|Tense=Pres	68	conj	_	_
86	.	.	PUNCT	DELM	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 31 32 foreign	color:blue
1	احمدالحسن	احمدالحسن	NOUN	N_SING	Number=Sing	2	nsubj	_	_
2	گفت	گفت#گو	VERB	V_PA	Number=Sing|Person=3|Tense=Past	0	root	_	_
3	:	:	PUNCT	DELM	_	2	punct	_	_
4	این	این	PRON	PRO	Number=Sing|PronType=Dem	6	nsubj	_	_
5	یک	یک	NUM	NUM	NumType=Card	6	nummod	_	_
6	روش	روش	NOUN	N_SING	Number=Sing	2	ccomp	_	_
7	تهذیب	تهذیب	NOUN	N_SING	Number=Sing	6	nmod:poss	_	_
8	نفس	نفس	NOUN	N_SING	Number=Sing	7	nmod:poss	_	_
9	و	و	CONJ	CON	_	7	cc	_	_
10	ایثار	ایثار	NOUN	N_SING	Number=Sing	7	conj	_	_
11	به	به	ADP	P	_	12	case	_	_
12	نفس	نفس	NOUN	N_SING	Number=Sing	10	nmod	_	_
13	و	و	CONJ	CON	_	10	cc	_	_
14	گذشت	گذشت	NOUN	N_SING	Number=Sing	10	conj	_	_
15	عارفانه	عارفانه	ADJ	ADJ	Degree=Pos	14	amod	_	_
16	است	است	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	6	cop	_	_
17	،	،	PUNCT	DELM	_	6	punct	_	_
18	و	و	CONJ	CON	_	6	cc	_	_
19	بعد	بعد	ADV	ADV_TIME	Case=Tem	25	advmod	_	_
20	به	به	ADP	P	_	21	case	_	_
21	مناسبت	مناسب	NOUN	N_SING	Number=Sing	25	nmod	_	_
22	شعر	شعر	NOUN	N_SING	Number=Sing	25	dobj	_	_
23	متنبی	متنبی	ADJ	ADJ	Degree=Pos	22	amod	_	_
24	را	را	PART	CLITIC	_	22	case	_	_
25	خواند	خواند#خوان	VERB	V_PA	Number=Sing|Person=3|Tense=Past	6	conj	_	_
26	که	که	SCONJ	CON	_	25	dep	_	_
27	:	:	PUNCT	DELM	_	25	punct	_	_
28	کل	کل	X	FW	_	25	ccomp	_	_
29	یرید	یرید	X	FW	_	28	foreign	_	_
30	رجاله	رجاله	X	FW	_	29	foreign	_	_
31	لحیاته	لحیاته	X	FW	_	30	foreign	_	_
32	یا	یا	CONJ	CON	_	31	foreign	_	_
33	من	من	X	FW	_	32	foreign	_	_
34	یرید	یرید	X	FW	_	33	foreign	_	_
35	حیاته	حیاته	X	FW	_	34	foreign	_	_
36	لرجاله	لرجاله	X	FW	_	35	foreign	_	_
37	.	.	PUNCT	DELM	_	2	punct	_	_

~~~


