---
layout: base
title:  'Statistics of xcomp in UD_Middle_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Middle_Armenian-ArmTDP: Relations: `xcomp`

This relation is universal.

15 nodes (1%) are attached to their parents as `xcomp`.

11 instances of `xcomp` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.53333333333333.

The following 4 pairs of parts of speech are connected with `xcomp`: <tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt> (9; 60% instances), <tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt> (4; 27% instances), <tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="axm_armtdp-pos-ADJ.html">ADJ</a></tt> (1; 7% instances), <tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="axm_armtdp-pos-PRON.html">PRON</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 xcomp	color:blue
1	Եւ	եւ	CCONJ	_	_	12	cc	_	_
2	որ	որ	SCONJ	_	_	5	mark	_	_
3	գաղտուկ	գաղտուկ	ADJ	_	Degree=Pos	4	amod	_	_
4	մեղանք	մեղանք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Ptan|Style=Arch	5	xcomp	_	_
5	լինի	լինիլ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	12	advcl	_	_
6	յ	ի	ADP	_	AdpType=Prep	7	case	_	_
7	երկիրն	յերկիր	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Def|Number=Sing	5	obl	_	_
8	՝	՝	PUNCT	_	_	12	punct	_	_
9	զ	զ	ADP	_	AdpType=Prep	10	case	_	_
10	այն	այն	PRON	_	Case=Acc|Deixis=Remt|Number=Sing|PronType=Dem	12	obj	_	_
11	խոստովանհայրքն	խոստովանհայր	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Plur|Style=Var	12	nsubj	_	_
12	ուղղեն	ուղղել	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
13	։	։	PUNCT	_	_	12	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 xcomp	color:blue
1	Քրիստոսի	Քրիստոս	PROPN	_	Animacy=Hum|Case=Dat|Definite=Ind|NameType=Prs|Number=Sing	2	nmod:poss	_	_
2	դատաստանին	դատաստան	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	3	nmod:poss	_	_
3	աւրինակովն	աւրինակ	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Def|Number=Sing|Style=Var	4	obl	_	_
4	պարտի	պարտել	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	թագաւորն	թագաւոր	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Sing	4	nsubj	_	_
6	զ	զ	ADP	_	AdpType=Prep	8	case	_	_
7	իր	իր	DET	_	Case=Acc|Number=Sing|Person=3|PronType=Poss|Reflex=Yes	8	det:poss	_	_
8	իրաւունքն	իրաւունք	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Def|Number=Sing	9	obj	_	_
9	տանել	տանել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	4	xcomp	_	_
10	ըղորդ	ըղորդ	ADV	_	_	9	advmod	_	SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	_	_
12	անաչառութեամբ	անաչառութիւն	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Coll	10	conj	_	_
13	եւ	եւ	CCONJ	_	_	15	cc	_	_
14	առանց	առանց	ADP	_	AdpType=Prep	15	case	_	_
15	կաշառոյ	կաշառ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	10	conj	_	_
16	եւ	եւ	CCONJ	_	_	18	cc	_	_
17	առանց	առանց	ADP	_	AdpType=Prep	18	case	_	_
18	ծուլութեան	ծուլութիւն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Coll	10	conj	_	SpaceAfter=No
19	.	.	PUNCT	_	_	28	punct	_	_
20	եւ	եւ	CCONJ	_	_	28	cc	_	_
21	զ	զ	ADP	_	AdpType=Prep	23	case	_	_
22	ամենայն	ամենայն	DET	_	PronType=Tot	23	det	_	_
23	զրկելոցն	զրկել	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Plur	28	obj	_	_
24	եւ	եւ	CCONJ	_	_	26	cc	_	_
25	զ	զ	ADP	_	AdpType=Prep	26	case	_	_
26	գանկտվորացն	գանկտվոր	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Plur	23	conj	_	_
27	դարպաս	դարպաս	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	28	compound:lvc	_	_
28	բռնէ	բռնել	VERB	_	Aspect=Prosp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	4	conj	_	_
29	եւ	եւ	CCONJ	_	_	31	cc	_	_
30	իրաւունք	իրաւունք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	31	compound:lvc	_	_
31	այնէ	այնել	VERB	_	Aspect=Prosp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	4	conj	_	SpaceAfter=No
32	։	։	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 xcomp	color:blue
1	Եւ	եւ	CCONJ	_	_	4	cc	_	_
2	այլ	այլ	DET	_	PronType=Ind	3	det	_	_
3	ազգ	ազգ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	4	nsubj	_	_
4	կայ	կամ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	_
5	ի	ի	ADP	_	AdpType=Prep	7	case	_	_
6	յ	ի	ADP	_	AdpType=Prep	7	case	_	_
7	օձիցն	օձ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Plur	4	obl	_	_
8	,	,	PUNCT	_	_	10	punct	_	_
9	որ	որ	SCONJ	_	_	10	mark	_	_
10	անուանին	անուանիլ	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	7	acl	_	_
11	ծարաւած	ծարաւած	ADJ	_	_	10	xcomp	_	SpaceAfter=No
12	.	.	PUNCT	_	_	23	punct	_	_
13	երբ	երբ	ADV	_	PronType=Rel	17	advmod	_	_
14	այս	այս	DET	_	Deixis=Prox|PronType=Dem	15	det	_	_
15	ազգ	ազգ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	16	nmod	_	_
16	օձս	օձ	NOUN	_	Animacy=Nhum|Case=Nom|Deixis[psor]=Prox|Number=Sing	17	nsubj	_	_
17	խայթէ	խայթել	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	23	advcl:relcl	_	_
18	զ	զ	ADP	_	AdpType=Prep	19	case	_	_
19	մարդն	մարդ	NOUN	_	Animacy=Hum|Case=Acc|Definite=Def|Number=Sing	17	obj	_	_
20	,	,	PUNCT	_	_	23	punct	_	_
21	նայ	նայ	SCONJ	_	Style=Var	23	mark	_	_
22	հանց	հանց	ADV	_	_	23	advmod	_	_
23	ցաւէ	ցաւել	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	4	parataxis	_	_
24	խիստ	խիստ	ADV	_	_	23	advmod	_	SpaceAfter=No
25	,	,	PUNCT	_	_	31	punct	_	_
26	որ	որ	SCONJ	_	_	31	mark	_	_
27	այլազգ	այլազգ	ADJ	_	_	28	amod	_	_
28	օձոյ	օձ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	29	nmod:poss	_	SpaceAfter=No
29	նն	նն	NOUN	_	Animacy=Nhum|Case=Nom|Deixis[psor]=Remt|Number=Sing	31	nsubj	_	_
30	չ	չի	PART	_	Polarity=Neg	31	advmod	_	_
31	ցաւէ	չցաւ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	23	advcl	_	_
32	,	,	PUNCT	_	_	36	punct	_	_
33	եւ	եւ	CCONJ	_	_	36	cc	_	_
34	խայթածէն	խայթած	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Def|Number=Sing	36	obl	_	_
35	արիւն	արիւ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Coll	36	nsubj	_	_
36	ելնէ	ելնել	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	23	conj	_	SpaceAfter=No
37	.	.	PUNCT	_	_	40	punct	_	_
38	եւ	եւ	CCONJ	_	_	40	cc	_	_
39	ինքն	ինք	PRON	_	Case=Nom|Deixis[psor]=Remt|Number=Sing|Person=3|PronType=Prs	40	nsubj	_	_
40	ծարուենայ	ծարուենալ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	4	parataxis	_	_
41	եւ	եւ	CCONJ	_	_	42	cc	_	_
42	բորբոքէ	բորբոքել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	40	conj	_	_
43	միշտ	միշտ	ADV	_	_	42	advmod	_	SpaceAfter=No
44	,	,	PUNCT	_	_	47	punct	_	_
45	եւ	եւ	CCONJ	_	_	47	cc	_	_
46	չ	չի	PART	_	Polarity=Neg	47	advmod	_	_
47	կշտանայ	կշտանալ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	40	conj	_	_
48	ջրով	ջուր	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	47	obl	_	_
49	ի	ի	ADP	_	AdpType=Prep	51	case	_	_
50	յոլով	յոլով	ADJ	_	Degree=Pos	51	amod	_	_
51	տաքութենէն	տաքութիւն	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Def|Number=Coll	47	obl	_	_
52	եւ	եւ	CCONJ	_	_	55	cc	_	_
53	ի	ի	ADP	_	AdpType=Prep	55	case	_	_
54	յոլով	յոլով	ADJ	_	Degree=Pos	55	amod	_	_
55	կրակէն	կրակ	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Def|Number=Sing	51	conj	_	SpaceAfter=No
56	,	,	PUNCT	_	_	60	punct	_	_
57	որ	որ	SCONJ	_	_	60	mark	_	_
58	ի	ի	ADP	_	AdpType=Prep	59	case	_	_
59	թոյնքն	թոյն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	60	obl	_	_
60	կայր	կամ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Imp|VerbForm=Fin|Voice=Mid	51	acl	_	SpaceAfter=No
61	.	.	PUNCT	_	_	65	punct	_	_
62	եւ	եւ	CCONJ	_	_	65	cc	_	_
63	մարդ	մարդ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	65	nsubj	_	_
64	չ	չի	PART	_	Polarity=Neg	65	advmod	_	_
65	ապրի	ապրիլ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	4	parataxis	_	_
66	ի	ի	ADP	_	AdpType=Prep	68	case	_	_
67	նմայ	նա	PRON	_	Case=Dat|Deixis=Remt|Number=Sing|PronType=Dem	68	nmod:poss	_	_
68	խայթածէն	խայթած	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Def|Number=Sing	65	obl	_	SpaceAfter=No
69	:	:	PUNCT	_	_	4	punct	_	_

~~~


