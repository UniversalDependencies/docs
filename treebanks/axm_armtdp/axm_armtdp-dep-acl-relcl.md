---
layout: base
title:  'Statistics of acl:relcl in UD_Middle_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Middle_Armenian-ArmTDP: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="axm_armtdp-dep-acl.html">acl</a></tt>.

7 nodes (1%) are attached to their parents as `acl:relcl`.

7 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.

The following 3 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt> (5; 71% instances), <tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="axm_armtdp-pos-ADP.html">ADP</a></tt> (1; 14% instances), <tt><a href="axm_armtdp-pos-PRON.html">PRON</a></tt>-<tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 21 acl:relcl	color:blue
1	Եւ	եւ	CCONJ	_	_	7	cc	_	_
2	տաճկին	տաճիկ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Sing	3	nmod:poss	_	_
3	գինն	գին	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	7	nsubj	_	_
4	այսոր	այս	PRON	_	Case=Dat|Deixis=Prox|Number=Sing|PronType=Dem	6	nmod:poss	_	_
5	երեք	երեք	NUM	_	NumForm=Word|NumType=Card	6	nummod	_	_
6	բաժնէն	բաժին	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Def|Number=Sing	7	nmod:npmod	_	_
7	մէկն	մէկ	PRON	_	Case=Nom|Definite=Def|PronType=Ind	0	root	_	_
8	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	cop	_	SpaceAfter=No
9	.	.	PUNCT	_	_	14	punct	_	_
10	զ	զ	ADP	_	AdpType=Prep	11	case	_	_
11	այս	այս	PRON	_	Case=Nom|Deixis=Prox|Number=Sing|PronType=Dem	14	obj	_	_
12	այն	այն	DET	_	Deixis=Remt|PronType=Dem	13	det	_	_
13	տաճկին	տաճկ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	14	obl	_	_
14	տան	տալ	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	7	parataxis	_	_
15	գին	գին	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	14	compound:lvc	_	SpaceAfter=No
16	,	,	PUNCT	_	_	21	punct	_	_
17	որ	որ	PRON	_	Case=Nom|Number=Sing|PronType=Rel	21	nsubj	_	_
18	ի	ի	ADP	_	AdpType=Prep	20	case	_	_
19	թագաւորին	թագաւոր	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Sing	20	nmod:poss	_	_
20	երկրին	երկիր	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	21	obl	_	_
21	կենայ	կենալ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	13	acl:relcl	_	SpaceAfter=No
22	։	։	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 18 acl:relcl	color:blue
1	Եւ	եւ	CCONJ	_	_	3	cc	_	_
2	խայթածն	խայթած	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	3	nsubj	_	_
3	ուտի	ուտել	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	աստ	աստ	ADV	_	Deixis=Prox|PronType=Dem	3	advmod	_	_
5	եւ	եւ	CCONJ	_	_	6	cc	_	_
6	անդ	անդ	ADV	_	Deixis=Remt|PronType=Dem	4	conj	_	SpaceAfter=No
7	,	,	PUNCT	_	_	11	punct	_	_
8	եւ	եւ	CCONJ	_	_	11	cc	_	_
9	այն	այն	DET	_	Deixis=Remt|PronType=Dem	10	det	_	_
10	ուտիճն	ուտիճ|ուտիչ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	11	nsubj	_	_
11	հասնի	հասնիլ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	3	conj	_	_
12	ի	ի	ADP	_	AdpType=Prep	15	case	_	_
13	յ	ի	ADP	_	AdpType=Prep	15	case	_	_
14	այլ	այլ	DET	_	PronType=Ind	15	det	_	_
15	անդամսն	անդամ	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Def|Number=Plur	11	obl	_	SpaceAfter=No
16	,	,	PUNCT	_	_	18	punct	_	_
17	որ	որ	PRON	_	Case=Nom|Number=Sing|PronType=Rel	18	nsubj	_	_
18	ի	ի	ADP	_	AdpType=Prep|ExtPos=ADJ	15	acl:relcl	_	_
19	մօտ	մօտ	ADJ	_	_	18	fixed	_	_
20	են	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	18	cop	_	_
21	ի	ի	ADP	_	AdpType=Prep	22	case	_	_
22	խայթածն	խայթած	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	18	obl	_	SpaceAfter=No
23	,	,	PUNCT	_	_	28	punct	_	_
24	եւ	եւ	CCONJ	_	_	28	cc	_	_
25	ընդ	ընդ	ADP	_	AdpType=Prep	26	case	_	_
26	լինդքն	լինդ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	28	obl	_	_
27	արիւն	արիւն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Coll	28	nsubj	_	_
28	երթայ	երթալ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	3	conj	_	_
29	եւ	եւ	CCONJ	_	_	31	cc	_	_
30	արիւն	արիւն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Coll	31	obj	_	_
31	շռէ	շռել	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	SpaceAfter=No
32	:	:	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 55	bgColor:blue
# visual-style 55	fgColor:white
# visual-style 51	bgColor:blue
# visual-style 51	fgColor:white
# visual-style 51 55 acl:relcl	color:blue
1	Եւ	եւ	CCONJ	_	_	15	cc	_	_
2	թէ	թէ	SCONJ	_	_	5	mark	_	_
3	քաղաք	քաղաք	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Ind|Number=Sing	5	obj	_	_
4	լինի	լինիլ	AUX	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Tense=Pres|VerbForm=Fin	5	aux	_	_
5	սղարել	սղարել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Tran|VerbForm=Part|Voice=Act	15	advcl	_	_
6	եւ	եւ	CCONJ	_	_	10	cc	_	_
7	ի	ի	ADP	_	AdpType=Prep	9	case	_	_
8	յ	ի	ADP	_	AdpType=Prep	9	case	_	_
9	առ	առ	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Ind|Number=Coll	10	compound:lvc	_	_
10	ածել	ածել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	5	conj	_	SpaceAfter=No
11	,	,	PUNCT	_	_	15	punct	_	_
12	նա	նա	SCONJ	_	_	15	mark	_	_
13	երեք	երեք	NUM	_	NumForm=Word|NumType=Card	14	nummod	_	_
14	հետ	հետ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	18	obl	_	_
15	պատեհ	պատեհ	ADJ	_	Degree=Pos	0	root	_	_
16	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	15	cop	_	_
17	որ	որ	SCONJ	_	_	18	mark	_	_
18	ձենել	ձենել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	15	csubj	_	_
19	տայ	տալ	AUX	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Cau	18	aux:caus	_	SpaceAfter=No
20	՝	՝	PUNCT	_	_	22	punct	_	_
21	թէ	թէ	SCONJ	_	_	22	mark	_	_
22	եկէք	գալ	VERB	_	Aspect=Prosp|Mood=Imp|Number=Plur|Person=2|Subcat=Intr|VerbForm=Fin|Voice=Mid	18	ccomp	_	_
23	ի	ի	ADP	_	AdpType=Prep	24	case	_	_
24	հնազանդութիւն	հնազանդութիւն	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Ind|Number=Coll	22	obl	_	SpaceAfter=No
25	.	.	PUNCT	_	_	33	punct	_	_
26	թէ	թէ	SCONJ	_	_	27	mark	_	_
27	գան	գալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	33	advcl	_	SpaceAfter=No
28	,	,	PUNCT	_	_	33	punct	_	_
29	նա	նա	SCONJ	_	_	33	mark	_	_
30	զ	զ	ADP	_	AdpType=Prep	31	case	_	_
31	ամէնն	ամէն	PRON	_	Case=Acc|PronType=Tot	33	obj	_	_
32	հնազանդութեամբ	հնազանդութիւն	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Coll	33	obl	_	_
33	բերէ	բերել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	18	parataxis	_	_
34	եւ	եւ	CCONJ	_	_	36	cc	_	_
35	չտայ	տալ	AUX	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Cau	36	aux:caus	_	_
36	սպաննել	սպաննել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	33	conj	_	SpaceAfter=No
37	.	.	PUNCT	_	_	47	punct	_	_
38	եւ	եւ	CCONJ	_	_	47	cc	_	_
39	թէ	թէ	SCONJ	_	_	40	mark	_	_
40	չգան	գալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=3|Polarity=Neg|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	47	advcl	_	SpaceAfter=No
41	,	,	PUNCT	_	_	47	punct	_	_
42	նա	նա	SCONJ	_	_	47	mark	_	_
43	զ	զ	ADP	_	AdpType=Prep	44	case	_	_
44	մեղապարտսն	մեղապարտ	NOUN	_	Animacy=Hum|Case=Acc|Definite=Def|Number=Plur	47	obj	_	_
45	մէն	մէն	ADV	_	_	44	advmod:emph	_	_
46	տայ	տալ	AUX	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Cau	47	aux:caus	_	_
47	սպաննել	սպաննել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	33	conj	_	SpaceAfter=No
48	.	.	PUNCT	_	_	61	punct	_	_
49	եւ	եւ	CCONJ	_	_	61	cc	_	_
50	զ	զ	ADP	_	AdpType=Prep	51	case	_	_
51	այնոք	այնոք	PRON	_	Case=Acc|Deixis=Remt|Number=Plur|PronType=Dem	61	dislocated	_	_
52	որ	որ	PRON	_	Case=Nom|Number=Sing|PronType=Rel	55	nsubj	_	_
53	ի	ի	ADP	_	AdpType=Prep	54	case	_	_
54	մեղայն	մեղայ	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Def|Number=Coll	55	compound:lvc	_	_
55	գան	գալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	51	acl:relcl	_	_
56	եւ	եւ	CCONJ	_	_	58	cc	_	_
57	մեղացուք	մեղացու	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Plur	58	xcomp	_	_
58	լինին	լինիլ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	55	conj	_	SpaceAfter=No
59	,	,	PUNCT	_	_	61	punct	_	_
60	նա	նա	SCONJ	_	_	61	mark	_	_
61	աւերէ	աւերել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	18	parataxis	_	_
62	զ	զ	ADP	_	AdpType=Prep	64	case	_	_
63	իրենց	իր	DET	_	Case=Acc|Number=Plur|Person=3|PronType=Poss	64	det:poss	_	_
64	զաւդվածքն	զաւդված	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Def|Number=Sing|Style=Var	61	obj	_	_
65	եւ	եւ	CCONJ	_	_	66	cc	_	_
66	չսպաննէ	սպաննել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Neg|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	61	conj	_	SpaceAfter=No
67	.	.	PUNCT	_	_	74	punct	_	_
68	եւ	եւ	CCONJ	_	_	74	cc	_	_
69	զ	զ	ADP	_	AdpType=Prep	71	case	_	_
70	պտղաբեր	պտղաբեր	ADJ	_	Degree=Pos	71	amod	_	_
71	ծառք	ծառ	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Ind|Number=Plur	74	obj	_	_
72	երկրին	երկիր	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	71	nmod:poss	_	_
73	չտայ	տալ	AUX	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Cau	74	aux:caus	_	_
74	կտրել	կտրել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	61	conj	_	SpaceAfter=No
75	։	։	PUNCT	_	_	15	punct	_	_

~~~


