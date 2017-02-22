

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

2 nodes (0%) are attached to their parents as `dep:predv_obj_co`.

2 instances of `dep:predv_obj_co` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.5.

The following 1 pairs of parts of speech are connected with `dep:predv_obj_co`: [lt-pos/VERB]()-[lt-pos/VERB]() (2; 100% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 dep:predv_obj_co	color:blue
1	Nežinau	nežinoti	VERB	Vgmp1s--y--ni-	Mood=Imp|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	4	punct	_	_
3	kaip	kaip	CCONJ	Cg	_	4	mark	_	_
4	įjungti	įjungti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	1	dep:predv_obj_co	_	_
5	arba	arba	CCONJ	Cg	_	4	mark	_	_
6	išjungti	išjungti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	4	dep:predv_obj_co	_	_
7	Dievą	dievas	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	4	obj	_	_
8	jis	jis	PRON	Pgmsnn	Case=Nom|PronType=Tot	12	dep:sub	_	_
9	man	aš	PRON	Pg-sdn	Case=Nom|Number=Dual|PronType=Tot	12	obj	_	_
10	taip	taip	ADV	Rgp	Degree=Pos	12	dep:adj	_	_
11	ir	ir	PART	Qg	_	10	advmod:emph	_	_
12	liko	likti	VERB	Vgma3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|VerbForm=Fin	1	dep:pred_co	_	_
13	tarp	tarp	ADP	Sgg	AdpType=Prep	15	case	_	_
14	daikto	daiktas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	15	dep:adj_co	_	_
15	ir	ir	CCONJ	Cg	_	12	cc	_	_
16	reiškinio	reiškinys	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	15	dep:adj_co	_	SpaceAfter=No
17	,	,	PUNCT	PUNCT	_	21	punct	_	_
18	nors	nors	CCONJ	Cg	_	21	mark	_	_
19	abu	abu	NUM	Mcm-nl-	Case=Nom|Gender=Masc|NumForm=Word|NumType=Card	20	nummod	_	_
20	jie	jis	PRON	Pgmpnn	Case=Nom|PronType=Tot	21	dep:sub	_	_
21	svarbūs	svarbus	ADJ	Agpmpnn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	12	dep:predn_adj	_	SpaceAfter=No
22	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


