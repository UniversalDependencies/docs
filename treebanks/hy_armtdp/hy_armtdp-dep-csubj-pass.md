---
layout: base
title:  'Statistics of csubj:pass in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="hy_armtdp-dep-csubj.html">csubj</a></tt>.

17 nodes (0%) are attached to their parents as `csubj:pass`.

17 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 11.1176470588235.

The following 3 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (15; 88% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 csubj:pass	color:blue
1	Հայկը	Հայկ	PROPN	_	Animacy=Hum|Case=Nom|Definite=Def|NameType=Giv|Number=Sing	9	nsubj	_	Translit=Haykë|LTranslit=Hayk|SpaceAfter=No
2	,	,	PUNCT	_	_	5	punct	_	Translit=,|LTranslit=,
3	թող	թող	PART	_	_	5	discourse	_	Translit=t’oġ|LTranslit=t’oġ
4	թույլ	թույլ	X	_	_	5	compound:lvc	_	Translit=t’owyl|LTranslit=t’owyl
5	տրվի	տալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Pass	9	parataxis	_	Translit=trvi|LTranslit=tal
6	ասել	ասել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	5	csubj:pass	_	Translit=asel|LTranslit=asel|SpaceAfter=No
7	,	,	PUNCT	_	_	5	punct	_	Translit=,|LTranslit=,
8	համը	համ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	9	compound:lvc	_	Translit=hamë|LTranslit=ham
9	հանել	հանել	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	Translit=hanel|LTranslit=hanel
10	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	9	aux	_	Translit=ē|LTranslit=em
11	ուղղակի	ուղղակի	ADV	_	_	9	advmod	_	Translit=owġġaki|LTranslit=owġġaki|SpaceAfter=No
12	:	:	PUNCT	_	_	9	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 45	bgColor:blue
# visual-style 45	fgColor:white
# visual-style 41	bgColor:blue
# visual-style 41	fgColor:white
# visual-style 41 45 csubj:pass	color:blue
1	Բայց	բայց	CCONJ	_	_	13	cc	_	Translit=Bayc’|LTranslit=bayc’
2	նախքան	նախքան	ADP	_	AdpType=Prep	11	case	_	Translit=naxk’an|LTranslit=naxk’an
3	ճանապարհների	ճանապարհ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Plur	4	nmod:poss	_	Translit=č̣anaparhneri|LTranslit=č̣anaparh
4	երկարության	երկարություն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	11	obl	_	Translit=erkarowt’yan|LTranslit=erkarowt’yown
5	ու	ու	CCONJ	_	_	6	cc	_	Translit=ow|LTranslit=ow
6	դժվարության	դժվարություն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	4	conj	_	Translit=džvarowt’yan|LTranslit=džvarowt’yown
7	և	և	CCONJ	_	_	9	cc	_	Translit=ew|LTranslit=ew
8	ընդհանրապես	ընդհանրապես	ADV	_	_	9	advmod:emph	_	Translit=ëndhanrapes|LTranslit=ëndhanrapes
9	ճանապարհների	ճանապարհ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Plur	4	conj	_	Translit=č̣anaparhneri|LTranslit=č̣anaparh
10	մասին	մասին	ADP	_	AdpType=Post	4	case	_	Translit=masin|LTranslit=masin
11	մտածելը	մտածել	VERB	_	Case=Nom|Definite=Def|Number=Coll|Polarity=Pos|Subcat=Tran|VerbForm=Gdv|Voice=Act	13	advcl	_	Translit=mtaçelë|LTranslit=mtaçel|SpaceAfter=No
12	,	,	PUNCT	_	_	13	punct	_	Translit=,|LTranslit=,
13	նայում	նայել	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	0	root	_	Translit=nayowm|LTranslit=nayel
14	էինք	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Imp|VerbForm=Fin	13	aux	_	Translit=ēink’|LTranslit=em
15	մենք	մենք	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	13	nsubj	_	Translit=menk’|LTranslit=menk’
16	նրանց	նա	PRON	_	Case=Dat|Number=Plur|Person=3|PronType=Prs	13	obj	_	Translit=nranc’|LTranslit=na
17	ու	ու	CCONJ	_	_	58	cc	_	Translit=ow|LTranslit=ow
18	թեև	թեև	SCONJ	_	_	23	mark	_	Translit=t’eew|LTranslit=t’eew
19	երկուսից	երկուս	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Ind|Number=Sing	21	nmod:npmod	_	Translit=erkowsic’|LTranslit=erkows
20	միայն	միայն	ADV	_	_	21	advmod:emph	_	Translit=miayn|LTranslit=miayn
21	մեկին	մեկը	PRON	_	Case=Dat|PronType=Ind	23	obj	_	Translit=mekin|LTranslit=mekë
22	էինք	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Imp|VerbForm=Fin	23	aux	_	Translit=ēink’|LTranslit=em
23	ճանաչում	ճանաչել	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Act	58	advcl	_	Translit=č̣anačowm|LTranslit=č̣anačel|SpaceAfter=No
24	՝	՝	PUNCT	_	_	25	punct	_	Translit=,|LTranslit=,
25	Մարտինին	Մարտին	PROPN	_	Animacy=Hum|Case=Dat|Definite=Def|NameType=Giv|Number=Sing	21	appos	_	Translit=Martinin|LTranslit=Martin|SpaceAfter=No
26	,	,	PUNCT	_	_	32	punct	_	Translit=,|LTranslit=,
27	իսկ	իսկ	CCONJ	_	_	32	cc	_	Translit=isk|LTranslit=isk
28	մյուսին	մյուս	PRON	_	Case=Dat|Definite=Def|Distance=Dist|Number=Sing|PronType=Dem	32	obj	_	Translit=myowsin|LTranslit=myows|SpaceAfter=No
29	՝	՝	PUNCT	_	_	30	punct	_	Translit=,|LTranslit=,
30	կնոջը	կին	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Sing	28	appos	_	Translit=knoǰë|LTranslit=kin|SpaceAfter=No
31	,	,	PUNCT	_	_	32	punct	_	Translit=,|LTranslit=,
32	տեսնում	տեսնել	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	23	conj	_	Translit=tesnowm|LTranslit=tesnel
33	էինք	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Imp|VerbForm=Fin	32	aux	_	Translit=ēink’|LTranslit=em
34	առաջին	առաջին	ADJ	_	Degree=Pos|NumForm=Word|NumType=Ord	35	amod	_	Translit=aṙaǰin|LTranslit=aṙaǰin
35	անգամ	անգամ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	32	obl	_	Translit=angam|LTranslit=angam|SpaceAfter=No
36	,	,	PUNCT	_	_	41	punct	_	Translit=,|LTranslit=,
37	վրան	վրա	ADP	_	AdpType=Post|Case=Nom|Number[psor]=Sing|Person[psor]=3	41	obl	_	Translit=vran|LTranslit=vra
38	էլ	էլ	ADV	_	_	37	advmod	_	Translit=ēl|LTranslit=ēl
39	ոտքից	ոտք	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Ind|Number=Sing	41	obl	_	Translit=otk’ic’|LTranslit=otk’
40	գլուխ	գլուխ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	39	compound	_	Translit=glowx|LTranslit=glowx
41	գրված	գրել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Pass	32	conj	_	Translit=grvaç|LTranslit=grel
42	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	41	aux	_	Translit=ēr|LTranslit=em|SpaceAfter=No
43	՝	՝	PUNCT	_	_	45	punct	_	Translit=,|LTranslit=,
44	այն	այն	DET	_	Distance=Dist|PronType=Dem	45	det	_	Translit=ayn|LTranslit=ayn
45	տեղերից	տեղ	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Ind|Number=Plur	41	csubj:pass	_	Translit=teġeric’|LTranslit=teġ
46	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	45	cop	_	Translit=ē|LTranslit=em|SpaceAfter=No
47	,	,	PUNCT	_	_	54	punct	_	Translit=,|LTranslit=,
48	որտեղ	որտեղ	ADV	_	PronType=Rel	54	advmod	_	Translit=orteġ|LTranslit=orteġ
49	5-րդ	5-րդ	ADJ	_	NumForm=Digit|NumType=Ord	50	amod	_	Translit=5-rd|LTranslit=5-rd
50	փողոցի	փողոց	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	51	nmod:poss	_	Translit=p’oġoc’i|LTranslit=p’oġoc’
51	անունն	անուն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	54	obj	_	Translit=anownn|LTranslit=anown
52	անգամ	անգամ	ADV	_	_	51	advmod:emph	_	Translit=angam|LTranslit=angam
53	չպիտի	պիտի	AUX	_	Polarity=Neg	54	aux	_	Translit=čpiti|LTranslit=piti
54	լսած	լսել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Tran|VerbForm=Part|Voice=Act	45	acl:relcl	_	Translit=lsaç|LTranslit=lsel
55	լինեն	լինել	AUX	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	54	aux	_	Translit=linen|LTranslit=linel|SpaceAfter=No
56	,	,	PUNCT	_	_	58	punct	_	Translit=,|LTranslit=,
57	մենք	մենք	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	58	nsubj	_	Translit=menk’|LTranslit=menk’
58	նայում	նայել	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	13	conj	_	Translit=nayowm|LTranslit=nayel
59	էինք	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Imp|VerbForm=Fin	58	aux	_	Translit=ēink’|LTranslit=em
60	մեզ	մենք	PRON	_	Case=Dat|Number=Plur|Person=1|PronType=Prs	62	obl	_	Translit=mez|LTranslit=menk’
61	քաջ	քաջ	ADV	_	_	62	advmod	_	Translit=k’aǰ|LTranslit=k’aǰ
62	ծանոթ	ծանոթ	ADJ	_	Degree=Pos	63	amod	_	Translit=çanot’|LTranslit=çanot’
63	Մարտին	Մարտին	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	58	obj	_	Translit=Martin|LTranslit=Martin
64	Սահակյանին	Սահակյան	PROPN	_	Animacy=Hum|Case=Dat|Definite=Def|NameType=Sur|Number=Sing	63	flat	_	Translit=Sahakyanin|LTranslit=Sahakyan
65	ու	ու	CCONJ	_	_	66	cc	_	Translit=ow|LTranslit=ow
66	թվում	թվալ	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	58	conj	_	Translit=t’vowm|LTranslit=t’val
67	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	66	aux	_	Translit=ēr|LTranslit=em|SpaceAfter=No
68	,	,	PUNCT	_	_	73	punct	_	Translit=,|LTranslit=,
69	նրան	նա	PRON	_	Case=Dat|Definite=Def|Number=Sing|Person=3|PronType=Prs	73	obj	_	Translit=nran|LTranslit=na
70	առաջին	առաջին	ADJ	_	Degree=Pos|NumForm=Word|NumType=Ord	71	amod	_	Translit=aṙaǰin|LTranslit=aṙaǰin
71	անգամ	անգամ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	73	obl	_	Translit=angam|LTranslit=angam
72	ենք	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	73	aux	_	Translit=enk’|LTranslit=em
73	տեսնում	տեսնել	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	66	csubj	_	Translit=tesnowm|LTranslit=tesnel|SpaceAfter=No
74	,	,	PUNCT	_	_	75	punct	_	Translit=,|LTranslit=,
75	նայում	նայել	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	13	conj	_	Translit=nayowm|LTranslit=nayel
76	էինք	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Imp|VerbForm=Fin	75	aux	_	Translit=ēink’|LTranslit=em
77	այդ	այդ	DET	_	Distance=Med|PronType=Dem	79	det	_	Translit=ayd|LTranslit=ayd
78	անծանոթ	անծանոթ	ADJ	_	Degree=Pos	79	amod	_	Translit=ançanot’|LTranslit=ançanot’
79	կնոջը	կին	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Sing	75	obj	_	Translit=knoǰë|LTranslit=kin
80	ու	ու	CCONJ	_	_	81	cc	_	Translit=ow|LTranslit=ow
81	թվում	թվալ	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	75	conj	_	Translit=t’vowm|LTranslit=t’val
82	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	81	aux	_	Translit=ēr|LTranslit=em|SpaceAfter=No
83	,	,	PUNCT	_	_	85	punct	_	Translit=,|LTranslit=,
84	լավ	լավ	ADV	_	Degree=Pos	85	advmod	_	Translit=lav|LTranslit=lav
85	գիտենք	գիտել	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	81	csubj	_	Translit=gitenk’|LTranslit=gitel
86	նրան	նա	PRON	_	Case=Dat|Definite=Def|Number=Sing|Person=3|PronType=Prs	85	obj	_	Translit=nran|LTranslit=na|SpaceAfter=No
87	,	,	PUNCT	_	_	99	punct	_	Translit=,|LTranslit=,
88	նա	նա	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	99	nsubj	_	Translit=na|LTranslit=na
89	էլ	էլ	ADV	_	_	88	advmod:emph	_	Translit=ēl|LTranslit=ēl
90	մեր	մենք	DET	_	Case=Gen|Number=Plur|Person=1|Poss=Yes|PronType=Prs	91	det:poss	_	Translit=mer|LTranslit=menk’
91	փողոցի	փողոց	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	93	obl	_	Translit=p’oġoc’i|LTranslit=p’oġoc’
92	մասին	մասին	ADP	_	AdpType=Post	91	case	_	Translit=masin|LTranslit=masin
93	մտածելուց	մտածել	VERB	_	Case=Abl|Definite=Ind|Number=Coll|Polarity=Pos|Subcat=Tran|VerbForm=Gdv|Voice=Act	99	obl	_	Translit=mtaçelowc’|LTranslit=mtaçel
94	բացի	բացի	ADP	_	AdpType=Prep	93	case	_	Translit=bac’i|LTranslit=bac’i|SpaceAfter=No
95	,	,	PUNCT	_	_	99	punct	_	Translit=,|LTranslit=,
96	այլ	այլ	DET	_	PronType=Ind	97	det	_	Translit=ayl|LTranslit=ayl
97	բան	բան	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	99	obj	_	Translit=ban|LTranslit=ban
98	չի	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	99	aux	_	Translit=či|LTranslit=em
99	արել	անել	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Act	85	conj	_	Translit=arel|LTranslit=anel
100	կյանքում	կյանք	NOUN	_	Animacy=Nhum|Case=Loc|Definite=Ind|Number=Sing	99	obl	_	Translit=kyank’owm|LTranslit=kyank’|SpaceAfter=No
101	։	։	PUNCT	_	_	13	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 csubj:pass	color:blue
1	Ցուցանակի	ցուցանակ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	3	obl	_	Translit=C’owc’anaki|LTranslit=c’owc’anak
2	վրա	վրա	ADP	_	AdpType=Post|Case=Nom	1	case	_	Translit=vra|LTranslit=vra
3	նշված	նշել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Pass	0	root	_	Translit=nšvaç|LTranslit=nšel
4	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	aux	_	Translit=ē|LTranslit=em|SpaceAfter=No
5	՝	՝	PUNCT	_	_	7	punct	_	Translit=,|LTranslit=,
6	«	«	PUNCT	_	_	7	punct	_	Translit=«|LTranslit=«|SpaceAfter=No
7	Զաբել	Զաբել	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	3	csubj:pass	_	Translit=Zabel|LTranslit=Zabel
8	Եսայան	Եսայան	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Sur|Number=Sing	7	flat	_	Translit=Esayan|LTranslit=Esayan|SpaceAfter=No
9	.	.	PUNCT	_	_	10	punct	_	Translit=.|LTranslit=.
10	1878	1878	NUM	_	NumForm=Digit|NumType=Card	7	parataxis	_	Translit=1878|LTranslit=1878|SpaceAfter=No
11	-	-	PUNCT	_	_	12	punct	_	Translit=-|LTranslit=-|SpaceAfter=No
12	1943	1943	NUM	_	NumForm=Digit|NumType=Card	10	conj	_	Translit=1943|LTranslit=1943|SpaceAfter=No
13	.	.	PUNCT	_	_	16	punct	_	Translit=.|LTranslit=.
14	հայ	հայ	ADJ	_	Degree=Pos	16	amod	_	Translit=hay|LTranslit=hay
15	կին	կին	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	16	nmod	_	Translit=kin|LTranslit=kin
16	գրող	գրող	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	7	appos	_	Translit=groġ|LTranslit=groġ|SpaceAfter=No
17	,	,	PUNCT	_	_	20	punct	_	Translit=,|LTranslit=,
18	մարդու	մարդ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Sing	19	nmod:poss	_	Translit=mardow|LTranslit=mard
19	իրավունքների	իրավունք	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Plur	20	nmod:poss	_	Translit=iravownk’neri|LTranslit=iravownk’
20	ակտիվիստ	ակտիվիստ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	16	conj	_	Translit=aktivist|LTranslit=aktivist|SpaceAfter=No
21	»	»	PUNCT	_	_	7	punct	_	Translit=»|LTranslit=»|SpaceAfter=No
22	։	։	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.

~~~


