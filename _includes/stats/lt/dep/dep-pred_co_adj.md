

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

2 nodes (0%) are attached to their parents as `dep:pred_co_adj`.

1 instances of `dep:pred_co_adj` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 1 pairs of parts of speech are connected with `dep:pred_co_adj`: [lt-pos/CCONJ]()-[lt-pos/VERB]() (2; 100% instances).


~~~ conllu
# visual-style 68	bgColor:blue
# visual-style 68	fgColor:white
# visual-style 67	bgColor:blue
# visual-style 67	fgColor:white
# visual-style 67 68 dep:pred_co_adj	color:blue
1	§	§	PUNCT	PUNCT	_	35	punct	_	_
2	Vyras	vyras	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	15	dep:sub	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	4	punct	_	_
4	išgirdęs	išgirsti	VERB	Vgpa-smannnn-p	Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Act	15	dep:adj	_	_
5	mano	aš	PRON	Pg-sgn	Case=Nom|PronType=Tot	7	nmod	_	_
6	sarkastišką	sarkastiškas	ADJ	Agpmsan	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	7	amod	_	_
7	prunkštimą	prunkštimas	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	4	obj	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	4	punct	_	_
9	kartu	kartu	ADV	Rgp	Degree=Pos	12	dep:adj	_	_
10	su	su	ADP	Sgi	AdpType=Prep	9	case	_	_
11	erekcija	erekcija	NOUN	Ncfsin-	Case=Ins|Gender=Fem|Number=Sing	9	obj	_	_
12	praranda	prarasti	VERB	Vgmp3s--n--ni	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	15	dep:pred_co	_	_
13	kretinizmo	kretinizmas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	14	nmod	_	_
14	šarvus	šarvas	NOUN	Ncmpan-	Case=Acc|Gender=Masc|Number=Plur	12	obj	_	SpaceAfter=No
15	,	,	PUNCT	PUNCT	_	35	punct	_	_
16	tampa	tapti	VERB	Vgmp3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	15	dep:pred_co	_	_
17	pažeidžiamas	pažeisti	VERB	Vgpp-smpnnnn-p	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	18	dep:predn_co	_	_
18	ir	ir	CCONJ	Cg	_	20	cc	_	_
19	jaukus	jaukus	ADJ	Agpmsnn	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	18	dep:predn_co	_	SpaceAfter=No
20	,	,	PUNCT	PUNCT	_	16	punct	_	_
21	kartais	kartais	ADV	Rgp	Degree=Pos	23	dep:adj	_	_
22	netgi	netgi	PART	Qg	_	23	advmod:emph	_	_
23	apgailėtinas	apgailėtinas	ADJ	Agpmsnn	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	20	dep:predn_co	_	SpaceAfter=No
24	,	,	PUNCT	PUNCT	_	35	punct	_	_
25	valandėlę	valandėlė	NOUN	Ncfsan-	Case=Acc|Gender=Fem|Number=Sing	29	dep:adj	_	_
26	mudu	aš	PRON	Pg-dnn	Case=Nom|PronType=Tot	29	dep:sub	_	_
27	netgi	netgi	PART	Qg	_	28	advmod:emph	_	_
28	sutariame	sutarti	VERB	Vgmp1p--n--ni-	Mood=Imp|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	29	dep:pred_co	_	SpaceAfter=No
29	,	,	PUNCT	PUNCT	_	35	punct	_	_
30	sutampame	sutapti	VERB	Vgmp1p--n--ni-	Mood=Imp|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	29	dep:pred_co	_	_
31	vienas	vienas	PRON	Pgmsnn	Case=Nom|PronType=Tot	30	dep:adj	_	_
32	su	su	ADP	Sgi	AdpType=Prep	33	case	_	_
33	kitu	kitas	PRON	Pgmsin	Case=Nom|PronType=Tot	31	obj	_	SpaceAfter=No
34	,	,	PUNCT	PUNCT	_	35	punct	_	_
35	bet	bet	CCONJ	Cg	_	0	root	_	_
36	štai	štai	PART	Qg	_	46	advmod:emph	_	_
37	jis	jis	PRON	Pgmsnn	Case=Nom|PronType=Tot	46	dep:sub	_	_
38	ir	ir	PART	Qg	_	39	advmod:emph	_	_
39	vėl	vėl	ADV	Rgp	Degree=Pos	40	dep:adj	_	_
40	ima	imti	VERB	Vgmp3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	46	dep:pred_co	_	_
41	urgzti	urgzti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	44	dep:predv_co	_	SpaceAfter=No
42	,	,	PUNCT	PUNCT	_	44	punct	_	_
43	judėti	judėti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	44	dep:predv_co	_	SpaceAfter=No
44	,	,	PUNCT	PUNCT	_	40	punct	_	_
45	raitytis	raitytis	VERB	Vgi-----n--y--	Mood=Ind|Polarity=Pos|VerbForm=Fin	44	dep:predv_co	_	SpaceAfter=No
46	,	,	PUNCT	PUNCT	_	35	punct	_	_
47	gašliai	gašliai	ADV	Rgp	Degree=Pos	48	dep:adj	_	_
48	pažeminęs	pažeminti	VERB	Vgpa-smannnn-p	Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Act	51	dep:adj	_	_
49	balsą	balsas	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	48	obj	_	_
50	kažką	kažkas	PRON	Pg--an	Case=Nom|PronType=Tot	51	obj	_	_
51	šnabžda	šnabždėti	VERB	Vgmp3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	46	dep:pred_co	_	_
52	partnerei	partnerė	NOUN	Ncfsdn-	Case=Dat|Gender=Fem|Number=Sing	51	obj	_	SpaceAfter=No
53	,	,	PUNCT	PUNCT	_	58	punct	_	_
54	mane	aš	PRON	Pg-san	Case=Nom|PronType=Tot	58	obj	_	_
55	bjauriu	bjaurus	ADJ	Agpmsin	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	57	amod	_	_
56	nuogu	nuogas	ADJ	Agpmsin	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	57	amod	_	_
57	užpakaliu	užpakalis	NOUN	Ncmsin-	Case=Ins|Gender=Masc|Number=Sing	58	obj	_	_
58	stumdamas	stumti	VERB	Vgh--sm-n--n--	Gender=Masc|Number=Sing|Polarity=Pos	51	dep:adj	_	_
59	iš	iš	ADP	Sgg	AdpType=Prep	60	case	_	_
60	lovos	lova	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	58	obj	_	SpaceAfter=No
61	,	,	PUNCT	PUNCT	_	67	punct	_	_
62	kol	kol	ADV	Rgp	Degree=Pos	67	dep:adj	_	_
63	pagaliau	pagaliau	ADV	Rgp	Degree=Pos	64	dep:adj	_	_
64	iškrentu	iškristi	VERB	Vgmp1s--n--ni-	Mood=Imp|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	67	dep:pred_co_adj	_	_
65	iš	iš	ADP	Sgg	AdpType=Prep	66	case	_	_
66	jos	jis	PRON	Pgfsgn	Case=Nom|PronType=Tot	64	obj	_	_
67	ir	ir	CCONJ	Cg	_	58	advmod	_	_
68	netenku	netekti	VERB	Vgmp1s--y--ni-	Mood=Imp|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin	67	dep:pred_co_adj	_	_
69	sąmonės	sąmonė	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	68	obj	_	_
70	iki	iki	ADP	Sgg	AdpType=Prep	71	case	_	_
71	ryto	rytas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	68	dep:adj	_	SpaceAfter=No
72	,	,	PUNCT	PUNCT	_	74	punct	_	_
73	su	su	ADP	Sgi	AdpType=Prep	74	case	_	_
74	viltimi	viltis	NOUN	Ncfsin-	Case=Ins|Gender=Fem|Number=Sing	68	dep:adj	_	SpaceAfter=No
75	,	,	PUNCT	PUNCT	_	80	punct	_	_
76	kad	kad	CCONJ	Cg	_	80	mark	_	_
77	vieną	vienas	PRON	Pgmsan	Case=Nom|PronType=Tot	78	nmod	_	_
78	sykį	sykis	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	80	dep:adj	_	_
79	visa tai	visa tai	PRON	Pgn--n	Case=Nom|PronType=Tot	80	dep:sub	_	_
80	baigsis	baigtis	VERB	Vgmf3s--n--yi-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	74	dep:pred_atr	_	SpaceAfter=No
81	,	,	PUNCT	PUNCT	_	90	punct	_	_
82	nes	nes	CCONJ	Cg	_	90	mark	_	_
83	daiktas	daiktas	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	90	dep:sub	_	SpaceAfter=No
84	,	,	PUNCT	PUNCT	_	85	punct	_	_
85	vadinamas	vadinti	VERB	Vgpp-smpnnnn-p	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	83	acl	_	_
86	vyru	vyras	NOUN	Ncmsin-	Case=Ins|Gender=Masc|Number=Sing	85	obj	_	SpaceAfter=No
87	,	,	PUNCT	PUNCT	_	85	punct	_	_
88	labai	labai	ADV	Rgp	Degree=Pos	89	dep:adj	_	_
89	glaudžiai	glaudžiai	ADV	Rgp	Degree=Pos	90	dep:adj	_	_
90	susijęs	susyti	VERB	Vgpa-smannnn-p	Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Act	80	dep:predn_adj	_	_
91	su	su	ADP	Sgi	AdpType=Prep	92	case	_	_
92	daiktu	daiktas	NOUN	Ncmsin-	Case=Ins|Gender=Masc|Number=Sing	90	obj	_	SpaceAfter=No
93	,	,	PUNCT	PUNCT	_	95	punct	_	_
94	kuris	kuris	PRON	Pgmsnn	Case=Nom|PronType=Tot	95	dep:sub	_	_
95	vadinamas	vadinti	VERB	Vgpp-smpnnnn-p	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	92	dep:predn_atr	_	_
96	kūnu	kūnas	NOUN	Ncmsin-	Case=Ins|Gender=Masc|Number=Sing	95	obj	_	SpaceAfter=No
97	,	,	PUNCT	PUNCT	_	35	punct	_	_
98	juk	juk	PART	Qg	_	99	advmod:emph	_	_
99	nieko	niekas	PRON	Pg--gn	Case=Nom|PronType=Tot	101	obj	_	_
100	pasaulyje	pasaulis	NOUN	Ncmsln-	Case=Loc|Gender=Masc|Number=Sing	102	dep:adj	_	_
101	nėra	nebūti	VERB	Vgmp3---y--ni-	Mood=Imp|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	35	dep:pred_co	_	_
102	paprastesnio	paprastas	ADJ	Agcmsgn	Case=Gen|Degree=Cmp|Gender=Masc|Number=Sing	101	dep:predn	_	_
103	už	už	ADP	Sga	AdpType=Prep	104	case	_	_
104	tiesą	tiesa	NOUN	Ncfsan-	Case=Acc|Gender=Fem|Number=Sing	102	obj	_	SpaceAfter=No
105	,	,	PUNCT	PUNCT	_	109	punct	_	_
106	kad	kad	CCONJ	Cg	_	109	mark	_	_
107	visi	visas	PRON	Pgmpnn	Case=Nom|PronType=Tot	108	nmod	_	_
108	daiktai	daiktas	NOUN	Ncmpnn-	Case=Nom|Gender=Masc|Number=Plur	109	dep:sub	_	_
109	dėvisi	dėvėtis	VERB	Vgmp3p--n--yi-	Mood=Imp|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	104	dep:pred_atr	_	SpaceAfter=No
110	.	.	PUNCT	PUNCT	_	35	punct	_	_

~~~


