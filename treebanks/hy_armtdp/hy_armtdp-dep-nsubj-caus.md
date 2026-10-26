---
layout: base
title:  'Statistics of nsubj:caus in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `nsubj:caus`

This relation is a language-specific subtype of <tt><a href="hy_armtdp-dep-nsubj.html">nsubj</a></tt>.
There are also 2 other language-specific subtypes of `nsubj`: <tt><a href="hy_armtdp-dep-nsubj-outer.html">nsubj:outer</a></tt>, <tt><a href="hy_armtdp-dep-nsubj-pass.html">nsubj:pass</a></tt>.

14 nodes (0%) are attached to their parents as `nsubj:caus`.

13 instances of `nsubj:caus` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.92857142857143.

The following 4 pairs of parts of speech are connected with `nsubj:caus`: <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (7; 50% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt> (5; 36% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt> (1; 7% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 nsubj:caus	color:blue
1	Ձեռքի	ձեռք	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	2	nmod:poss	_	Translit=Jeṙk’i|LTranslit=jeṙk’
2	աշխատանքը	աշխատանք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	7	nsubj:caus	_	Translit=ašxatank’ë|LTranslit=ašxatank’
3	շատ	շատ	ADJ	_	Degree=Pos	4	amod	_	Translit=šat|LTranslit=šat
4	տեղերում	տեղ	NOUN	_	Animacy=Nhum|Case=Loc|Definite=Ind|Number=Plur	7	obl	_	Translit=teġerowm|LTranslit=teġ
5	դեռ	դեռ	ADV	_	_	7	advmod	_	Translit=deṙ|LTranslit=deṙ
6	իրեն	ինքը	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Emp|Reflex=Yes	7	iobj:agent	_	Translit=iren|LTranslit=ink’ë
7	զգալ	զգալ	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	0	root	_	Translit=zgal|LTranslit=zgal
8	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	7	aux	_	Translit=ēr|LTranslit=em
9	տալիս	տալ	AUX	_	Aspect=Imp|VerbForm=Part	7	aux:caus	_	Translit=talis|LTranslit=tal|SpaceAfter=No
10	:	:	PUNCT	_	Foreign=Yes	7	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nsubj:caus	color:blue
1	Վիրակապ	վիրակապ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	3	compound:lvc	_	Translit=Virakap|LTranslit=virakap
2	եմ	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	aux	_	Translit=em|LTranslit=em
3	դնում	դնել	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	Translit=dnowm|LTranslit=dnel|SpaceAfter=No
4	`	`	PUNCT	_	Foreign=Yes	7	punct	_	Translit=,|LTranslit=,
5	ինքն	ինքը	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Emp	7	nsubj:caus	_	Translit=ink’n|LTranslit=ink’ë
6	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	aux	_	Translit=ē|LTranslit=em
7	սովորեցրել	սովորել	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Cau	3	parataxis	_	Translit=sovorec’rel|LTranslit=sovorel|SpaceAfter=No
8	:	:	PUNCT	_	Foreign=Yes	3	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nsubj:caus	color:blue
1	Նա	նա	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	Translit=Na|LTranslit=na
2	կարող	կարող	ADJ	_	Degree=Pos	0	root	_	Translit=karoġ|LTranslit=karoġ
3	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	2	cop	_	Translit=ē|LTranslit=em
4	այդպես	այդպես	ADV	_	Deixis=Med|PronType=Dem	5	advmod	_	Translit=aydpes|LTranslit=aydpes
5	հաշվել	հաշվել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	2	xcomp	_	Translit=hašvel|LTranslit=hašvel|SpaceAfter=No
6	.	.	PUNCT	_	Foreign=Yes	9	punct	_	Translit=.|LTranslit=.
7	իսկ	իսկ	CCONJ	_	_	9	cc	_	Translit=isk|LTranslit=isk
8	մենք	մենք	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	9	nsubj:caus	_	Translit=menk’|LTranslit=menk’
9	պարտավոր	պարտավոր	ADJ	_	_	2	conj	_	Translit=partavor|LTranslit=partavor
10	ենք	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	9	cop	_	Translit=enk’|LTranslit=em
11	հասկացնել	հասկանալ	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Cau	9	xcomp	_	Translit=haskac’nel|LTranslit=haskanal
12	նրան	նա	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs	11	iobj:agent	_	Translit=nran|LTranslit=na|SpaceAfter=No
13	,	,	PUNCT	_	_	26	punct	_	Translit=,|LTranslit=,|SpaceAfter=No
14	—	—	PUNCT	_	_	26	punct	_	Translit=—|LTranslit=—
15	եթե	եթե	SCONJ	_	_	23	mark	_	Translit=et’e|LTranslit=et’e
16	ձեր	ձեր	DET	_	Number=Plur|Person=2|Poss=Yes|PronType=Prs	17	det:poss	_	Translit=jer|LTranslit=jer
17	որդու	որդի	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Sing	21	nmod:poss	_	Translit=ordow|LTranslit=ordi|SpaceAfter=No
18	,	,	PUNCT	_	_	20	punct	_	Translit=,|LTranslit=,
19	ձեր	ձեր	DET	_	Number=Plur|Person=2|Poss=Yes|PronType=Prs	20	det:poss	_	Translit=jer|LTranslit=jer
20	զավակի	զավակ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Sing	17	conj	_	Translit=zavaki|LTranslit=zavak
21	աշխատանքը	աշխատանք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	23	nsubj	_	Translit=ašxatank’ë|LTranslit=ašxatank’
22	ձեզ	դուք	PRON	_	Case=Dat|Number=Plur|Person=2|PronType=Prs	23	iobj	_	Translit=jez|LTranslit=dowk’
23	պետք	պետք	ADJ	_	_	26	advcl	_	Translit=petk’|LTranslit=petk’
24	չէ	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	23	cop	_	Translit=čē|LTranslit=em|SpaceAfter=No
25	,	,	PUNCT	_	_	26	punct	_	Translit=,|LTranslit=,
26	պետք	պետք	ADJ	_	_	11	ccomp	_	Translit=petk’|LTranslit=petk’
27	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	26	cop	_	Translit=ē|LTranslit=em
28	բոլորին	բոլորը	PRON	_	Case=Dat|PronType=Tot	26	iobj	_	Translit=bolorin|LTranslit=bolorë|SpaceAfter=No
29	,	,	PUNCT	_	_	33	punct	_	Translit=,|LTranslit=,
30	բացի	բացի	ADP	_	AdpType=Prep	31	case	_	Translit=bac’i|LTranslit=bac’i
31	ձեզանից	դուք	PRON	_	Case=Abl|Number=Plur|Person=2|PronType=Prs	33	nmod:npmod	_	Translit=jezanic’|LTranslit=dowk’|SpaceAfter=No
32	՝	՝	PUNCT	_	_	33	punct	_	Translit=,|LTranslit=,
33	բոլորին	բոլորը	PRON	_	Case=Dat|PronType=Tot	26	dislocated	_	Translit=bolorin|LTranslit=bolorë|SpaceAfter=No
34	,	,	PUNCT	_	_	39	punct	_	Translit=,|LTranslit=,
35	այս	այս	DET	_	Deixis=Prox|PronType=Dem	36	det	_	Translit=ays|LTranslit=ays
36	երկրում	երկիր	NOUN	_	Animacy=Nhum|Case=Loc|Definite=Ind|Number=Sing	39	obl	_	Translit=erkrowm|LTranslit=erkir
37	որքան	որքան	DET	_	PronType=Rel	38	det	_	Translit=ork’an|LTranslit=ork’an
38	մարդ	մարդ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	39	nsubj	_	Translit=mard|LTranslit=mard
39	կա	կամ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	33	conj	_	Translit=ka|LTranslit=kam|SpaceAfter=No
40	...	...	PUNCT	_	_	45	punct	_	Translit=...|LTranslit=...
41	—	—	PUNCT	_	_	45	punct	_	Translit=—|LTranslit=—
42	այդ	այդ	DET	_	Deixis=Med|PronType=Dem	43	det	_	Translit=ayd|LTranslit=ayd
43	դեպքում	դեպք	NOUN	_	Animacy=Nhum|Case=Loc|Definite=Ind|Number=Sing	45	obl	_	Translit=depk’owm|LTranslit=depk’
44	մենք	մենք	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	45	nsubj	_	Translit=menk’|LTranslit=menk’
45	ստիպված	ստիպել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Pass	2	parataxis	_	Translit=stipvaç|LTranslit=stipel
46	կլինենք	լինել	AUX	_	Aspect=Prosp|Mood=Cnd|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	45	aux	_	Translit=klinenk’|LTranslit=linel
47	բացատրել	բացատրել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	45	xcomp	_	Translit=bac’atrel|LTranslit=bac’atrel|SpaceAfter=No
48	,	,	PUNCT	_	_	50	punct	_	Translit=,|LTranslit=,|SpaceAfter=No
49	—	—	PUNCT	_	_	50	punct	_	Translit=—|LTranslit=—
50	պարտադիր	պարտադիր	ADJ	_	_	47	ccomp	_	Translit=partadir|LTranslit=partadir
51	չէ	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	50	cop	_	Translit=čē|LTranslit=em|SpaceAfter=No
52	,	,	PUNCT	_	_	55	punct	_	Translit=,|LTranslit=,
53	որ	որ	SCONJ	_	_	55	mark	_	Translit=or|LTranslit=or
54	պատերազմ	պատերազմ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	55	xcomp	_	Translit=paterazm|LTranslit=paterazm
55	լինի	լինել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	50	csubj	_	Translit=lini|LTranslit=linel
56	և	և	CCONJ	_	_	58	cc	_	Translit=ew|LTranslit=ew
57	նոր	նոր	ADV	_	Degree=Pos	58	advmod	_	Translit=nor|LTranslit=nor
58	հասկանանք	հասկանալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=1|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	55	conj	_	Translit=haskanank’|LTranslit=haskanal|SpaceAfter=No
59	,	,	PUNCT	_	_	70	punct	_	Translit=,|LTranslit=,
60	որ	որ	SCONJ	_	_	70	mark	_	Translit=or|LTranslit=or
61	ամեն	ամեն	DET	_	ExtPos=PRON|PronType=Tot	63	nmod:poss	_	Translit=amen|LTranslit=amen
62	մեկի	մեկը	PRON	_	Case=Gen|PronType=Ind	61	fixed	_	Translit=meki|LTranslit=mekë
63	որդին	որդի	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Sing	70	nsubj	_	Translit=ordin|LTranslit=ordi
64	իր	իր	DET	_	Number=Sing|Person=3|Poss=Yes|PronType=Emp	65	det:poss	_	Translit=ir|LTranslit=ir
65	որդին	որդի	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Sing	66	xcomp	_	Translit=ordin|LTranslit=ordi
66	լինելուց	լինել	VERB	_	Case=Abl|Definite=Ind|Polarity=Pos|Subcat=Intr|VerbForm=Inf|Voice=Mid	70	obl	_	Translit=linelowc’|LTranslit=linel
67	բացի	բացի	ADP	_	AdpType=Prep	66	case	_	Translit=bac’i|LTranslit=bac’i|SpaceAfter=No
68	՝	՝	PUNCT	_	_	70	punct	_	Translit=,|LTranslit=,
69	երկրի	երկիր	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	70	nmod:poss	_	Translit=erkri|LTranslit=erkir
70	զինվորն	զինվոր	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Sing	58	ccomp	_	Translit=zinvorn|LTranslit=zinvor
71	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	70	cop	_	Translit=ē|LTranslit=em|SpaceAfter=No
72	։	։	PUNCT	_	_	2	punct	_	Translit=.|LTranslit=.

~~~


