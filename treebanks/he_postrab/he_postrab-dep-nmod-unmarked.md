---
layout: base
title:  'Statistics of nmod:unmarked in UD_Hebrew-PostRab'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-PostRab: Relations: `nmod:unmarked`

This relation is a language-specific subtype of <tt><a href="he_postrab-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="he_postrab-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="he_postrab-dep-nmod-tmod.html">nmod:tmod</a></tt>.

2 nodes (0%) are attached to their parents as `nmod:unmarked`.

2 instances of `nmod:unmarked` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5.

The following 2 pairs of parts of speech are connected with `nmod:unmarked`: <tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_postrab-pos-NUM.html">NUM</a></tt> (1; 50% instances), <tt><a href="he_postrab-pos-VERB.html">VERB</a></tt>-<tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nmod:unmarked	color:blue
1	ב	ב	ADP	ADP	_	2	case	_	_
2	יום	יום	NOUN	NOUN	Gender=Masc|Number=Sing	5	obl	_	_
3	ראש	ראש	NOUN	NOUN	Gender=Masc|Number=Sing	2	compound:smixut	_	_
4	חודש	חודש	NOUN	NOUN	Gender=Masc|Number=Sing	3	compound:smixut	_	_
5	יכתוב	כתב	VERB	VERB	Gender=Masc|Number=Sing|Person=3|Tense=Fut	0	root	_	_
6	ב	ב	ADP	ADP	_	7	case	_	_
7	יום	יום	NOUN	NOUN	Gender=Masc|Number=Sing	5	obj	_	_
8	אחד	אחת	NUM	NUM	Gender=Masc|Number=Sing	7	nmod:unmarked	_	_
9	ל	ל	ADP	ADP	_	10	case	_	_
10	ירח	ירח	NOUN	NOUN	Gender=Masc|Number=Sing	8	nmod	_	_
11	פלוני	פלוני	NOUN	NOUN	Gender=Masc|Number=Sing	10	compound:smixut	_	_

~~~


~~~ conllu
# visual-style 46	bgColor:blue
# visual-style 46	fgColor:white
# visual-style 44	bgColor:blue
# visual-style 44	fgColor:white
# visual-style 44 46 nmod:unmarked	color:blue
1	מ	מ	ADP	ADP	_	2	case	_	_
2	שרשי	שורש	NOUN	NOUN	Gender=Masc|Number=Plur	0	root	_	_
3	מצוה	מצווה	NOUN	NOUN	Gender=Fem|Number=Sing	2	compound:smixut	_	_
4	זו	זה	PRON	PRON	Gender=Fem|Number=Sing|Person=3	3	det	_	_
5	לדעת	ידע	VERB	VERB	VerbForm=Inf	2	csubj	_	_
6	בני	בן	NOUN	NOUN	Gender=Masc|Number=Plur	5	obl:unmarked	_	_
7	אדם	אדם	NOUN	NOUN	Gender=Masc|Number=Sing	6	compound:smixut	_	_
8	ו	ו	CCONJ	CCONJ	_	9	cc	_	_
9	לקבוע	קבע	VERB	VERB	VerbForm=Inf	5	conj	_	_
10	ב	ב	ADP	ADP	_	11	case	_	_
11	נפשו	נפש	NOUN	NOUN	Gender=Fem|Number=Sing	9	obl	_	_
12	תם	הוא	PRON	PRON	Gender=Masc|Number=Plur|Person=3	11	nmod:poss	_	_
13	ו	ו	CCONJ	CCONJ	_	14	cc	_	_
14	לחזק	חזק	VERB	VERB	VerbForm=Inf	5	conj	_	_
15	ה	ה	DET	DET	_	16	det	_	_
16	אמונה	אמונה	NOUN	NOUN	Gender=Fem|Number=Sing	14	obj	_	_
17	ב	ב	ADP	ADP	_	18	case	_	_
18	לבו	לב	NOUN	NOUN	Gender=Fem|Number=Sing	14	obl	_	_
19	תם	הוא	PRON	PRON	Gender=Masc|Number=Plur|Person=3	18	nmod:poss	_	_
20	כי	כי	SCONJ	SCONJ	_	32	mark	_	_
21	ה	ה	DET	DET	_	22	det	_	_
22	אל	אל	NOUN	NOUN	Gender=Masc|Number=Sing	32	dislocated	_	_
23	ברוך	ברוך	ADJ	ADJ	Gender=Masc|Number=Sing	22	acl:relcl	_	_
24	הוא	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3	23	cop	_	_
25	אשר	אשר	SCONJ	SCONJ	_	27	mark	_	_
26	ב	ב	ADP	ADP	_	27	case	_	_
27	שמים	שמיים	NOUN	NOUN	Gender=Masc|Number=Plur	22	acl:relcl	_	_
28	ממעל	ממעל	ADV	ADV	_	27	advmod	_	_
29	ו	ו	CCONJ	CCONJ	_	30	cc	_	_
30	קיים	קיים	VERB	VERB	Gender=Masc|Number=Sing	27	conj	_	_
31	לעד	לעד	ADV	ADV	_	30	advmod	_	_
32	אין	אין	VERB	VERB	Tense=Pres	5	ccomp	_	_
33	קיום	קיום	NOUN	NOUN	Gender=Masc|Number=Sing	32	nsubj:cop	_	_
34	כ	כ	ADP	ADP	_	35	case	_	_
35	קיומ	קיום	NOUN	NOUN	Gender=Masc|Number=Sing	33	nmod	_	_
36	ו	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3	35	nmod:poss	_	_
37	ו	ו	CCONJ	CCONJ	_	38	cc	_	_
38	ראוי	ראוי	ADJ	ADJ	Gender=Masc|Number=Sing	32	conj	_	_
39	ו	ו	CCONJ	CCONJ	_	40	cc	_	_
40	מחויב	חויב	VERB	VERB	Gender=Masc|Number=Sing	38	conj	_	_
41	עלי	על	ADP	ADP	_	42	case	_	_
42	נו	הוא	PRON	PRON	Gender=Fem,Masc|Number=Plur|Person=1	40	obl	_	_
43	ב	ב	ADP	ADP	_	44	case	_	_
44	זכרי	זכר	VERB	VERB	_	57	obl	_	_
45	נו	הוא	PRON	PRON	Gender=Fem,Masc|Number=Plur|Person=1	44	nmod:poss	_	_
46	שמ	שם	NOUN	NOUN	Gender=Masc|Number=Sing	44	nmod:unmarked	_	_
47	ו	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3	46	nmod:poss	_	_
48	ה	ה	DET	DET	_	49	det	_	_
49	גדול	גדול	ADJ	ADJ	Gender=Masc|Number=Sing	46	amod	_	_
50	על	על	ADP	ADP	_	51	case	_	_
51	מעש	מעשה	NOUN	NOUN	Gender=Masc|Number=Sing	46	nmod	_	_
52	נו	הוא	PRON	PRON	Gender=Masc|Number=Plur|Person=1	51	nmod:poss	_	_
53	ו	ו	CCONJ	CCONJ	_	55	cc	_	_
54	על	על	ADP	ADP	_	55	case	_	_
55	דבורי	דיבור	NOUN	NOUN	Gender=Masc|Number=Plur	51	conj	_	_
56	נו	הוא	PRON	PRON	Gender=Fem,Masc|Number=Plur|Person=1	55	nmod:poss	_	_
57	לזכר	זכר	VERB	VERB	VerbForm=Inf	38	csubj	_	_
58	ו	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3	57	obj	_	_
59	ב	ב	ADP	ADP	_	60	case	_	_
60	אימה	אימה	NOUN	NOUN	Gender=Fem|Number=Sing	57	obl	_	_
61	ב	ב	ADP	ADP	_	62	case	_	_
62	יראה	יראה	NOUN	NOUN	Gender=Fem|Number=Sing	60	conj	_	ConjPush=Yes
63	ב	ב	ADP	ADP	_	64	case	_	_
64	רתת	רתת	NOUN	NOUN	Gender=Masc|Number=Sing	60	conj	_	ConjPush=Yes
65	ו	ו	CCONJ	CCONJ	_	67	cc	_	_
66	ב	ב	ADP	ADP	_	67	case	_	_
67	זיע	זיע	NOUN	NOUN	Gender=Fem|Number=Sing	60	conj	_	ConjPush=Yes
68	ו	ו	CCONJ	CCONJ	_	71	cc	_	_
69	לא	לא	ADV	ADV	_	71	advmod	_	_
70	כ	כ	ADP	ADP	_	71	case	_	_
71	מהתלים	היתל	VERB	VERB	Gender=Masc|Number=Plur	60	conj	_	_
72	ו	ו	CCONJ	CCONJ	_	73	cc	_	_
73	מדברים	דיבר	VERB	VERB	Gender=Masc|Number=Plur|Person=1,2,3|VerbForm=Part	71	conj	_	_
74	ב	ב	ADP	ADP	_	75	case	_	_
75	דבר	דבר	NOUN	NOUN	Gender=Masc|Number=Sing	73	obl	_	Participle=Yes
76	קל	קל	ADJ	ADJ	Gender=Masc|Number=Sing	75	amod	_	_
77	כמו	כמו	ADP	ADP	_	79	case	_	_
78	ה	ה	DET	DET	_	79	det	_	_
79	דברים	דבר	NOUN	NOUN	Gender=Masc|Number=Plur	75	nmod	_	_
80	ה	ה	SCONJ	SCONJ	_	81	mark	_	_
81	הווים	הווה	VERB	VERB	Gender=Masc|Number=Plur|Person=1,2,3|VerbForm=Part	79	acl:relcl	_	_
82	ו	ו	CCONJ	CCONJ	_	83	cc	_	_
83	נפסדים	התפסד	VERB	VERB	Gender=Masc|Number=Plur|Person=1,2,3|VerbForm=Part	81	conj	_	_
84	ו	ו	CCONJ	CCONJ	_	86	cc	_	_
85	אינם	אינו	ADV	ADV	_	86	advmod	_	_
86	נשארים	השאיר	VERB	VERB	Gender=Masc|Number=Plur|Person=1,2,3|VerbForm=Part	81	conj	_	_
87	ב	ב	ADP	ADP	_	88	case	_	_
88	קיומ	קיום	NOUN	NOUN	Gender=Masc|Number=Sing	86	obl	_	_
89	ם	הוא	PRON	PRON	Gender=Masc|Number=Plur|Person=3	88	nmod:poss	_	_
90	כמו	כמו	ADP	ADP	_	91	case	_	_
91	נו	הוא	PRON	PRON	Gender=Fem,Masc|Number=Plur|Person=1	86	obl	_	_
92	אנחנו	הוא	PRON	PRON	Gender=Fem,Masc|Number=Plur|Person=1	91	appos	_	_
93	בני	בן	NOUN	NOUN	Gender=Masc|Number=Plur	91	appos	_	_
94	אדם	אדם	NOUN	NOUN	Gender=Masc|Number=Sing	93	compound:smixut	_	_
95	ו	ו	CCONJ	CCONJ	_	97	cc	_	_
96	שאר	שאר	DET	DET	_	97	det	_	_
97	דברי	דבר	NOUN	NOUN	Gender=Masc|Number=Plur	92	conj	_	_
98	ה	ה	DET	DET	_	99	det	_	_
99	עולם	עולם	NOUN	NOUN	Gender=Masc|Number=Sing	97	compound:smixut	_	_
100	ה	ה	DET	DET	_	101	det	_	_
101	שפל	שפל	ADJ	ADJ	Gender=Masc|Number=Sing	99	amod	_	_

~~~


