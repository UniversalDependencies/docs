

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

1 nodes (0%) are attached to their parents as `dep:auxz_exd_adj`.

1 instances of `dep:auxz_exd_adj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 1 pairs of parts of speech are connected with `dep:auxz_exd_adj`: [lt-pos/VERB]()-[lt-pos/PART]() (1; 100% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 dep:auxz_exd_adj	color:blue
1	jei	jei	CCONJ	Cg	_	2	mark	_	_
2	ne	ne	PART	Qg	_	4	dep:auxz_exd_adj	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	2	punct	_	_
4	būsim	būti	VERB	Vgmf1p--n--ni-	Mood=Imp|Number=Plur|Person=1|Polarity=Pos|Tense=Fut|VerbForm=Fin	0	root	_	_
5	praleidę	praleisti	VERB	Vgpa-pmannnn-p	Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Act	4	dep:predn	_	_
6	daugybę	daugybė	NOUN	Ncfsan-	Case=Acc|Gender=Fem|Number=Sing	5	dep:adj	_	_
7	gražių	gražus	ADJ	Agpfpgn	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur	8	amod	_	_
8	naktų	naktis	NOUN	Ncfpgn-	Case=Gen|Gender=Fem|Number=Plur	6	nmod	_	_
9	prie	prie	ADP	Sgg	AdpType=Prep	11	case	_	_
10	savo	savęs	PRON	Pg--gn	Case=Nom|PronType=Tot	11	nmod	_	_
11	langų	langas	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	5	dep:adj	_	SpaceAfter=No
12	,	,	PUNCT	PUNCT	_	17	punct	_	_
13	tarp	tarp	ADP	Sgg	AdpType=Prep	14	case	_	_
14	kurių	kuris	PRON	Pgmpgn	Case=Nom|PronType=Tot	17	obj	_	_
15	stiklinėm	stiklinis	ADJ	Agpfpin	Case=Ins|Degree=Pos|Gender=Fem|Number=Plur	16	amod	_	_
16	kojom	koja	NOUN	Ncfpin-	Case=Ins|Gender=Fem|Number=Plur	17	obj	_	_
17	bėginės	bėginėti	VERB	Vgmf3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	11	dep:pred_atr	_	_
18	lietus	lietus	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	17	dep:sub	_	SpaceAfter=No
19	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


