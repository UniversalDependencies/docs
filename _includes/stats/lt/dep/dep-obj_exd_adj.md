

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

2 nodes (0%) are attached to their parents as `dep:obj_exd_adj`.

2 instances of `dep:obj_exd_adj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.5.

The following 1 pairs of parts of speech are connected with `dep:obj_exd_adj`: [lt-pos/VERB]()-[lt-pos/ADJ]() (2; 100% instances).


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 28 24 dep:obj_exd_adj	color:blue
1	Situacija	situacija	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
2	kaip	kaip	CCONJ	Cg	_	3	mark	_	_
3	pasakoj	pasaka	NOUN	Ncfsln-	Case=Loc|Gender=Fem|Number=Sing	1	dep:adj	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	3	punct	_	_
5	kur	kur	ADV	Rgp	Degree=Pos	9	dep:adj	_	_
6	broliai	brolis	NOUN	Ncmpnn-	Case=Nom|Gender=Masc|Number=Plur	9	dep:sub	_	_
7	prieina	prieiti	VERB	Vgmp3p--n--ni-	Mood=Imp|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	9	dep:pred_atr_co	_	_
8	kryžkelę	kryžkelė	NOUN	Ncfsan-	Case=Acc|Gender=Fem|Number=Sing	7	obj	_	_
9	ir	ir	CCONJ	Cg	_	3	cc	_	_
10	turi	turėti	VERB	Vgmp3p--n--ni-	Mood=Imp|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	9	dep:pred_atr_co	_	_
11	rinktis	rinktis	VERB	Vgi-----n--y--	Mood=Ind|Polarity=Pos|VerbForm=Fin	10	dep:predv	_	SpaceAfter=No
12	,	,	PUNCT	PUNCT	_	15	punct	_	_
13	kuriuo	kuris	PRON	Pgmsin	Case=Nom|PronType=Tot	14	nmod	_	_
14	keliu	kelias	NOUN	Ncmsin-	Case=Ins|Gender=Masc|Number=Sing	15	obj	_	_
15	eis	eiti	VERB	Vgmf3p--n--ni-	Mood=Imp|Number=Plur|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	11	dep:pred_obj	_	SpaceAfter=No
16	:	:	PUNCT	PUNCT	_	14	punct	_	_
17	jei	jei	CCONJ	Cg	_	18	mark	_	_
18	dešiniuoju	dešinys	ADJ	Agpmsiy	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	21	dep:obj_exd_adj	_	_
19	–	–	PUNCT	PUNCT	_	18	punct	_	_
20	laimę	laimė	NOUN	Ncfsan-	Case=Acc|Gender=Fem|Number=Sing	21	obj	_	_
21	suras	surasti	VERB	Vgmf3p--n--ni-	Mood=Imp|Number=Plur|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	22	dep:pred_atr_co	_	SpaceAfter=No
22	,	,	PUNCT	PUNCT	_	16	punct	_	_
23	jei	jei	CCONJ	Cg	_	24	mark	_	_
24	kairiuoju	kairys	ADJ	Agpmsiy	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	28	dep:obj_exd_adj	_	_
25	–	–	PUNCT	PUNCT	_	24	punct	_	_
26	į	į	ADP	Sga	AdpType=Prep	27	case	_	_
27	bėdą	bėda	NOUN	Ncfsan-	Case=Acc|Gender=Fem|Number=Sing	28	obj	_	_
28	paklius	pakliūti	VERB	Vgmf3p--n--ni-	Mood=Imp|Number=Plur|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	22	dep:pred_atr_co	_	SpaceAfter=No
29	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


