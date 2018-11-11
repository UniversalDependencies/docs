---
layout: base
title:  'Statistics of csubj:pass in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="hy_armtdp-dep-csubj.html">csubj</a></tt>.

9 nodes (0%) are attached to their parents as `csubj:pass`.

9 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.66666666666667.

The following 4 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (6; 67% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt> (1; 11% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (1; 11% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 11 csubj:pass	color:blue
1	Պարզվել	պարզել	VERB	_	Aspect=Perf|Subcat=Intr|VerbForm=Part|Voice=Pass	0	root	_	_
2	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	aux	_	_
3	նաև	նաև	CCONJ	_	ConjType=Comp	1	cc	_	SpaceAfter=No
4	,	,	PUNCT	_	_	11	punct	_	_
5	որ	որ	SCONJ	_	_	11	mark	_	_
6	նման	նման	ADJ	_	Degree=Pos	7	amod	_	_
7	աշխատողներն	աշխատող	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Plur	11	nsubj	_	_
8	ավելի	ավելի	ADV	_	Degree=Cmp	9	advmod	_	_
9	քիչ	քիչ	ADV	_	Degree=Pos	11	advmod	_	_
10	են	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	11	aux	_	_
11	հիվանդանում	հիվանդանալ	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	1	csubj:pass	_	SpaceAfter=No
12	։	։	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 20 csubj:pass	color:blue
1	Ներմուծման	ներմուծում	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	2	nmod:poss	_	_
2	ոլորտում	ոլորտ	NOUN	_	Animacy=Nhum|Case=Loc|Definite=Ind|Number=Sing	4	obl	_	_
3	հետևյալ	հետևյալ	ADJ	_	_	4	amod	_	_
4	պատկերն	պատկեր	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	0	root	_	_
5	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	cop	_	SpaceAfter=No
6	՝	՝	PUNCT	_	_	7	punct	_	_
7	պարզվում	պարզվել	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	4	appos	_	_
8	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	aux	_	SpaceAfter=No
9	,	,	PUNCT	_	_	20	punct	_	_
10	որ	որ	SCONJ	_	_	20	mark	_	_
11	նույն	նույն	DET	_	Distance=Dist|PronType=Dem	13	det	_	_
12	հունվար	հունվար	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	13	nmod	_	_
13	ամսին	ամիս	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	15	obl	_	_
14	Հայաստան	Հայաստան	PROPN	_	Animacy=Nhum|Case=Nom|Definite=Ind|NameType=Geo|Number=Sing	15	obl	_	_
15	ներմուծված	ներմուծել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Pass	17	acl	_	_
16	հանքահումքային	հանքահումքային	ADJ	_	_	17	amod	_	_
17	արտադրանքի	արտադրանք	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	18	nmod:poss	_	_
18	ծավալերն	ծավալ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur|Typo=Yes	20	nsubj	_	_
19	ավելի	ավելի	ADV	_	Degree=Cmp	20	advmod	_	_
20	մեծ	մեծ	ADJ	_	Degree=Pos	7	csubj:pass	_	_
21	են	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	20	cop	_	_
22	եղել	լինել	AUX	_	Aspect=Perf|VerbForm=Part	20	aux	_	SpaceAfter=No
23	,	,	PUNCT	_	_	25	punct	_	_
24	քան	քան	SCONJ	_	_	25	case	_	_
25	արտահանվածը	արտահանված	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	20	obl	_	SpaceAfter=No
26	:	:	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 45	bgColor:blue
# visual-style 45	fgColor:white
# visual-style 41	bgColor:blue
# visual-style 41	fgColor:white
# visual-style 41 45 csubj:pass	color:blue
1	Բայց	բայց	CCONJ	_	_	13	cc	_	_
2	նախքան	նախքան	ADP	_	AdpType=Prep	11	case	_	_
3	ճանապարհների	ճանապարհ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Plur	4	nmod:poss	_	_
4	երկարության	երկարություն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	11	obl	_	_
5	ու	ու	CCONJ	_	_	6	cc	_	_
6	դժվարության	դժվարություն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	4	conj	_	_
7	և	և	CCONJ	_	_	9	cc	_	_
8	ընդհանրապես	ընդհանրապես	ADV	_	_	9	advmod:emph	_	_
9	ճանապարհների	ճանապարհ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Plur	4	conj	_	_
10	մասին	մասին	ADP	_	AdpType=Post	4	case	_	_
11	մտածելը	մտածել	VERB	_	Case=Nom|Definite=Def|Number=Coll|Polarity=Pos|Subcat=Tran|VerbForm=Gdv|Voice=Act	13	advcl	_	SpaceAfter=No
12	,	,	PUNCT	_	_	13	punct	_	_
13	նայում	նայել	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	0	root	_	_
14	էինք	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Imp|VerbForm=Fin	13	aux	_	_
15	մենք	մենք	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	13	nsubj	_	_
16	նրանց	նա	PRON	_	Case=Dat|Number=Plur|Person=3|PronType=Prs	13	obj	_	_
17	ու	ու	CCONJ	_	_	58	cc	_	_
18	թեև	թեև	SCONJ	_	_	23	mark	_	_
19	երկուսից	երկուս	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Ind|Number=Sing	21	nmod:npmod	_	_
20	միայն	միայն	ADV	_	_	21	advmod:emph	_	_
21	մեկին	մեկը	PRON	_	Case=Dat|PronType=Ind	23	obj	_	_
22	էինք	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Imp|VerbForm=Fin	23	aux	_	_
23	ճանաչում	ճանաչել	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Act	58	advcl	_	SpaceAfter=No
24	՝	՝	PUNCT	_	_	25	punct	_	_
25	Մարտինին	Մարտին	PROPN	_	Animacy=Hum|Case=Dat|Definite=Def|NameType=Giv|Number=Sing	21	appos	_	SpaceAfter=No
26	,	,	PUNCT	_	_	32	punct	_	_
27	իսկ	իսկ	CCONJ	_	_	32	cc	_	_
28	մյուսին	մյուս	PRON	_	Case=Dat|Definite=Def|Distance=Dist|Number=Sing|PronType=Dem	32	obj	_	SpaceAfter=No
29	՝	՝	PUNCT	_	_	30	punct	_	_
30	կնոջը	կին	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Sing	28	appos	_	SpaceAfter=No
31	,	,	PUNCT	_	_	32	punct	_	_
32	տեսնում	տեսնել	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	23	conj	_	_
33	էինք	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Imp|VerbForm=Fin	32	aux	_	_
34	առաջին	առաջին	ADJ	_	Degree=Pos|NumForm=Word|NumType=Ord	35	amod	_	_
35	անգամ	անգամ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	32	obl	_	SpaceAfter=No
36	,	,	PUNCT	_	_	41	punct	_	_
37	վրան	վրա	ADP	_	AdpType=Post|Number[psor]=Sing|Person[psor]=3	41	advmod	_	_
38	էլ	էլ	ADV	_	_	37	advmod	_	_
39	ոտքից	ոտք	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Ind|Number=Sing	41	obl	_	_
40	գլուխ	գլուխ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	39	compound	_	_
41	գրված	գրել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Pass	32	conj	_	_
42	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	41	aux	_	SpaceAfter=No
43	՝	՝	PUNCT	_	_	45	punct	_	_
44	այն	այն	DET	_	Distance=Dist|PronType=Dem	45	det	_	_
45	տեղերից	տեղ	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Ind|Number=Plur	41	csubj:pass	_	_
46	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	45	cop	_	SpaceAfter=No
47	,	,	PUNCT	_	_	54	punct	_	_
48	որտեղ	որտեղ	ADV	_	PronType=Rel	54	advmod	_	_
49	5-րդ	5-րդ	ADJ	_	NumForm=Digit|NumType=Ord	50	amod	_	_
50	փողոցի	փողոց	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	51	nmod:poss	_	_
51	անունն	անուն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	54	obj	_	_
52	անգամ	անգամ	ADV	_	_	51	advmod:emph	_	_
53	չպիտի	պիտի	PART	_	Mood=Nec|Polarity=Neg	54	aux	_	_
54	լսած	լսել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Tran|VerbForm=Part|Voice=Act	45	acl:relcl	_	_
55	լինեն	լինել	AUX	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	54	aux	_	SpaceAfter=No
56	,	,	PUNCT	_	_	58	punct	_	_
57	մենք	մենք	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	58	nsubj	_	_
58	նայում	նայել	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	13	conj	_	_
59	էինք	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Imp|VerbForm=Fin	58	aux	_	_
60	մեզ	մենք	PRON	_	Case=Dat|Number=Plur|Person=1|PronType=Prs	62	obl	_	_
61	քաջ	քաջ	ADV	_	_	62	advmod	_	_
62	ծանոթ	ծանոթ	ADJ	_	Degree=Pos	63	amod	_	_
63	Մարտին	Մարտին	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	58	obj	_	_
64	Սահակյանին	Սահակյան	PROPN	_	Animacy=Hum|Case=Dat|Definite=Def|NameType=Sur|Number=Sing	63	flat	_	_
65	ու	ու	CCONJ	_	_	66	cc	_	_
66	թվում	թվալ	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	58	conj	_	_
67	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	66	aux	_	SpaceAfter=No
68	,	,	PUNCT	_	_	73	punct	_	_
69	նրան	նա	PRON	_	Case=Dat|Definite=Def|Number=Sing|Person=3|PronType=Prs	73	obj	_	_
70	առաջին	առաջին	ADJ	_	Degree=Pos|NumForm=Word|NumType=Ord	71	amod	_	_
71	անգամ	անգամ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	73	obl	_	_
72	ենք	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	73	aux	_	_
73	տեսնում	տեսնել	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	66	csubj	_	SpaceAfter=No
74	,	,	PUNCT	_	_	75	punct	_	_
75	նայում	նայել	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	13	conj	_	_
76	էինք	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Imp|VerbForm=Fin	75	aux	_	_
77	այդ	այդ	DET	_	Distance=Med|PronType=Dem	79	det	_	_
78	անծանոթ	անծանոթ	ADJ	_	Degree=Pos	79	amod	_	_
79	կնոջը	կին	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Sing	75	obj	_	_
80	ու	ու	CCONJ	_	_	81	cc	_	_
81	թվում	թվալ	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	75	conj	_	_
82	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	81	aux	_	SpaceAfter=No
83	,	,	PUNCT	_	_	85	punct	_	_
84	լավ	լավ	ADV	_	_	85	advmod	_	_
85	գիտենք	գիտենալ	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	81	csubj	_	_
86	նրան	նա	PRON	_	Case=Dat|Definite=Def|Number=Sing|Person=3|PronType=Prs	85	obj	_	SpaceAfter=No
87	,	,	PUNCT	_	_	99	punct	_	_
88	նա	նա	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	99	nsubj	_	_
89	էլ	էլ	ADV	_	_	88	advmod:emph	_	_
90	մեր	մենք	DET	_	Case=Gen|Number=Plur|Person=1|Poss=Yes|PronType=Prs	91	det:poss	_	_
91	փողոցի	փողոց	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	93	obl	_	_
92	մասին	մասին	ADP	_	AdpType=Post	91	case	_	_
93	մտածելուց	մտածել	VERB	_	Case=Abl|Definite=Ind|Number=Coll|Polarity=Pos|Subcat=Tran|VerbForm=Gdv|Voice=Act	99	obl	_	_
94	բացի	բացի	ADP	_	AdpType=Prep	93	case	_	SpaceAfter=No
95	,	,	PUNCT	_	_	99	punct	_	_
96	այլ	այլ	DET	_	PronType=Ind	97	det	_	_
97	բան	բան	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	99	obj	_	_
98	չի	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	99	aux	_	_
99	արել	անել	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Act	85	conj	_	_
100	կյանքում	կյանք	NOUN	_	Animacy=Nhum|Case=Loc|Definite=Ind|Number=Sing	99	obl	_	SpaceAfter=No
101	։	։	PUNCT	_	_	13	punct	_	_

~~~


