---
layout: base
title:  'Statistics of discourse in UD_Hebrew-IAHLTwiki'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-IAHLTwiki: Relations: `discourse`

This relation is universal.

5 nodes (0%) are attached to their parents as `discourse`.

5 instances of `discourse` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.6.

The following 3 pairs of parts of speech are connected with `discourse`: <tt><a href="he_iahltwiki-pos-PROPN.html">PROPN</a></tt>-<tt><a href="he_iahltwiki-pos-INTJ.html">INTJ</a></tt> (3; 60% instances), <tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltwiki-pos-INTJ.html">INTJ</a></tt> (1; 20% instances), <tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 discourse	color:blue
1	ה	ה	DET	DET	Definite=Def|PronType=Art	2	det	_	_
2	שיר	שיר	NOUN	NOUN	Gender=Masc|Number=Sing	3	nsubj	_	_
3	נכלל	נכלל	VERB	VERB	Gender=Masc|HebBinyan=NIFAL|Number=Sing|Person=3|Tense=Past|Voice=Mid	0	root	_	_
4	ב	ב	ADP	ADP	Definite=Def|PronType=Art	5	case	_	_
5	אלבום	אלבום	NOUN	NOUN	Gender=Masc|Number=Sing	3	obl	_	_
6	"	"	PUNCT	PUNCT	_	9	punct	_	SpaceAfter=No
7	שלום	שלום	INTJ	INTJ	_	9	discourse	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	7	punct	_	_
9	חבר	חבר	PROPN	PROPN	_	5	appos	_	SpaceAfter=No
10	"	"	PUNCT	PUNCT	_	9	punct	_	SpaceAfter=No
11	,	,	PUNCT	PUNCT	_	13	punct	_	_
12	ש	ש	SCONJ	SCONJ	_	13	mark	_	_
13	יצא	יצא	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Past|Voice=Act	5	acl:relcl	_	_
14	זמן	זמן	NOUN	NOUN	Gender=Masc|Number=Sing	13	obl:tmod	_	_
15	קצר	קצר	ADJ	ADJ	Gender=Masc|Number=Sing	14	amod	_	_
16	לאחר	לאחר	ADP	ADP	_	18	case	_	_
17	ה	ה	DET	DET	Definite=Def|PronType=Art	18	det	_	_
18	רצח	רצח	NOUN	NOUN	Gender=Masc|Number=Sing	13	obl	_	_
19	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 24 discourse	color:blue
1	בין	בין	ADP	ADP	_	3	case	_	_
2	ה	ה	DET	DET	Definite=Def|PronType=Art	3	det	_	_
3	שירים	שיר	NOUN	NOUN	Gender=Masc|Number=Plur	8	obl	_	_
4	ה	ה	DET	DET	Definite=Def|PronType=Art	5	det	_	_
5	חדשים	חדש	ADJ	ADJ	Gender=Masc|Number=Plur	3	amod	_	_
6	היו	היה	AUX	AUX	Gender=Masc|HebBinyan=PAAL|Number=Plur|Person=3|Polarity=Pos|Tense=Past	8	cop	_	_
7	ה	ה	DET	DET	Definite=Def|PronType=Art	8	det	_	_
8	דואטים	דואט	NOUN	NOUN	Gender=Masc|Number=Plur	0	root	_	_
9	עם	עם	ADP	ADP	_	10	case	_	_
10	יהודית	יהודית	PROPN	PROPN	_	8	nmod	_	_
11	רביץ	רביץ	PROPN	PROPN	_	10	flat	_	_
12	"	"	PUNCT	PUNCT	_	13	punct	_	SpaceAfter=No
13	קרה	קרה	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Past|Voice=Act	8	appos	_	_
14	זה	זה	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Dem	13	nsubj	_	_
15	רק	רק	ADV	ADV	_	16	advmod	_	_
16	הפעם	הפעם	ADV	ADV	_	13	advmod	_	SpaceAfter=No
17	"	"	PUNCT	PUNCT	_	13	punct	_	_
18	ו	ו	CCONJ	CCONJ	_	20	cc	_	_
19	עם	עם	ADP	ADP	_	20	case	_	_
20	איילה	איילה	PROPN	PROPN	_	10	conj	_	_
21	אשרוב	אשרוב	PROPN	PROPN	_	20	flat	_	_
22	"	"	PUNCT	PUNCT	_	25	punct	_	SpaceAfter=No
23	אל	אל	ADV	ADV	_	25	advmod	_	_
24	נא	נא	INTJ	INTJ	_	25	discourse	_	_
25	תאמר	אמר	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=2|Tense=Fut|Voice=Act	13	conj	_	_
26	ל	ל	ADP	ADP	_	27	case	_	_
27	י	הוא	PRON	PRON	Number=Sing|Person=1|PronType=Prs	25	obl	_	_
28	שלום	שלום	PROPN	PROPN	_	25	obj	_	SpaceAfter=No
29	"	"	PUNCT	PUNCT	_	25	punct	_	SpaceAfter=No
30	.	.	PUNCT	PUNCT	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 discourse	color:blue
1	רוצה	רצה	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Pres|VerbForm=Part|Voice=Act	4	discourse	_	_
2	לומר	אמר	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	1	xcomp	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	1	punct	_	_
4	אין	אין	VERB	VERB	_	0	root	_	_
5	די	די	ADV	ADV	_	4	nsubj	_	_
6	ב	ב	ADP	ADP	_	7	case	_	_
7	כך	כך	PRON	PRON	_	4	obl	_	_
8	ש	ש	SCONJ	SCONJ	_	12	mark	_	_
9	הליך	הליך	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	12	nsubj:pass	_	_
10	ה	ה	DET	DET	Definite=Def|PronType=Art	11	det	_	_
11	חקיקה	חקיקה	NOUN	NOUN	Gender=Fem|Number=Sing	9	compound	_	_
12	יעוצב	עוצב	VERB	VERB	Gender=Masc|HebBinyan=PUAL|Number=Sing|Person=3|Tense=Fut|Voice=Pass	7	acl	_	_
13	כך	כך	ADV	ADV	_	15	mark	_	_
14	ש	ש	SCONJ	SCONJ	_	13	fixed	_	_
15	תינתן	ניתן	VERB	VERB	Gender=Fem|HebBinyan=NIFAL|Number=Sing|Person=3|Tense=Fut|Voice=Pass	12	advcl	_	_
16	ל	ל	ADP	ADP	_	17	case	_	_
17	חברי	חבר	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Plur	15	obl	_	_
18	ה	ה	DET	DET	Definite=Def|PronType=Art	19	det	_	_
19	כנסת	כנסת	PROPN	PROPN	_	17	compound	_	_
20	ה	ה	DET	DET	Definite=Def|PronType=Art	21	det	_	_
21	אפשרות	אפשרות	NOUN	NOUN	Gender=Fem|Number=Sing	15	nsubj:pass	_	_
22	'	'	PUNCT	PUNCT	_	23	punct	_	SpaceAfter=No
23	לדעת	ידע	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	21	acl	_	_
24	על	על	ADP	ADP	_	25	case	_	_
25	מה	מה	PRON	PRON	_	23	obl	_	_
26	הם	הוא	PRON	PRON	Gender=Masc|Number=Plur|Person=3|PronType=Prs	27	nsubj	_	_
27	מצביעים	הצביע	VERB	VERB	Gender=Masc|HebBinyan=HIFIL|Number=Plur|Person=3|Tense=Pres|VerbForm=Part|Voice=Act	25	acl:relcl	_	SpaceAfter=No
28	'	'	PUNCT	PUNCT	_	23	punct	_	_
29	–	–	PUNCT	PUNCT	_	30	punct	_	_
30	לקרוא	קרא	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	23	parataxis	_	_
31	את	את	ADP	ADP	_	32	case	_	_
32	הצעת	הצעה	NOUN	NOUN	Definite=Cons|Gender=Fem|Number=Sing	30	obj	_	_
33	ה	ה	DET	DET	Definite=Def|PronType=Art	34	det	_	_
34	חוק	חוק	NOUN	NOUN	Gender=Masc|Number=Sing	32	compound	_	_
35	,	,	PUNCT	PUNCT	_	36	punct	_	_
36	לשמוע	שמע	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	30	conj	_	_
37	על	על	ADP	ADP	_	39	case	_	_
38	אודותי	אודות	ADP	ADP	_	37	fixed	_	_
39	ה	הוא	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Prs	36	obl	_	_
40	ו	ו	CCONJ	CCONJ	_	41	cc	_	_
41	להבין	הבין	VERB	VERB	HebBinyan=HIFIL|VerbForm=Inf|Voice=Act	30	conj	_	_
42	ב	ב	ADP	ADP	_	43	case	_	_
43	אופן	אופן	NOUN	NOUN	Gender=Masc|Number=Sing	41	obl	_	_
44	שטחי	שטחי	ADJ	ADJ	Gender=Masc|Number=Sing	43	amod	_	_
45	את	את	ADP	ADP	_	47	case	_	_
46	ה	ה	DET	DET	Definite=Def|PronType=Art	47	det	_	_
47	חוק	חוק	NOUN	NOUN	Gender=Masc|Number=Sing	41	obj	_	_
48	ה	ה	SCONJ	SCONJ	_	49	mark	_	_
49	עומד	עמד	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Pres|VerbForm=Part|Voice=Act	47	acl:relcl	_	_
50	ל	ל	ADP	ADP	_	51	case	_	_
51	הצבעה	הצבעה	NOUN	NOUN	Gender=Fem|Number=Sing	49	obl	_	_
52	;	;	PUNCT	PUNCT	_	57	punct	_	_
53	הליך	הליך	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	57	nsubj	_	_
54	ה	ה	DET	DET	Definite=Def|PronType=Art	55	det	_	_
55	חקיקה	חקיקה	NOUN	NOUN	Gender=Fem|Number=Sing	53	compound	_	_
56	צריך	צריך	AUX	AUX	Gender=Masc|Number=Sing|Person=3	57	aux	_	_
57	לאפשר	אפשר	VERB	VERB	HebBinyan=PIEL|VerbForm=Inf|Voice=Act	4	parataxis	_	_
58	ל	ל	ADP	ADP	_	59	case	_	_
59	חברי	חבר	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Plur	57	obl	_	_
60	ה	ה	DET	DET	Definite=Def|PronType=Art	61	det	_	_
61	כנסת	כנסת	PROPN	PROPN	_	59	compound	_	_
62	לגבש	גיבש	VERB	VERB	HebBinyan=PIEL|VerbForm=Inf|Voice=Act	57	xcomp	_	_
63	עמדה	עמדה	NOUN	NOUN	Gender=Fem|Number=Sing	62	obj	_	_
64	מהותית	מהותי	ADJ	ADJ	Gender=Fem|Number=Sing	63	amod	_	SpaceAfter=No
65	,	,	PUNCT	PUNCT	_	69	punct	_	_
66	ו	ו	CCONJ	CCONJ	_	67	cc	_	_
67	לוּ	לוּ	ADV	ADV	_	69	advmod	_	_
68	ב	ב	ADP	ADP	Definite=Def|PronType=Art	69	case	_	_
69	אופן	אופן	NOUN	NOUN	Gender=Masc|Number=Sing	62	obl	_	_
70	ה	ה	DET	DET	Definite=Def|PronType=Art	71	det	_	_
71	מצומצם	מצומצם	ADJ	ADJ	Gender=Masc|Number=Sing	69	amod	_	_
72	ביותר	ביותר	ADV	ADV	_	71	advmod	_	SpaceAfter=No
73	,	,	PUNCT	PUNCT	_	76	punct	_	_
74	בנוגע	בנוגע	ADP	ADP	_	76	case	_	_
75	ל	ל	ADP	ADP	_	74	fixed	_	_
76	הצעת	הצעה	NOUN	NOUN	Definite=Cons|Gender=Fem|Number=Sing	62	obl	_	_
77	ה	ה	DET	DET	Definite=Def|PronType=Art	78	det	_	_
78	חוק	חוק	NOUN	NOUN	Gender=Masc|Number=Sing	76	compound	_	_
79	ה	ה	SCONJ	SCONJ	_	80	mark	_	_
80	מונחת	הונח	VERB	VERB	Gender=Fem|HebBinyan=HUFAL|Number=Sing|Person=3|Tense=Pres|VerbForm=Part|Voice=Pass	76	acl:relcl	_	_
81	לפני	לפני	ADP	ADP	_	82	case	_	_
82	הם	הוא	PRON	PRON	Gender=Masc|Number=Plur|Person=3|PronType=Prs	80	obl	_	_
83	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


