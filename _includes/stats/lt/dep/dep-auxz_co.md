

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

3 nodes (0%) are attached to their parents as `dep:auxz_co`.

2 instances of `dep:auxz_co` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.33333333333333.

The following 2 pairs of parts of speech are connected with `dep:auxz_co`: [lt-pos/CCONJ]()-[lt-pos/PART]() (2; 67% instances), [lt-pos/PART]()-[lt-pos/PART]() (1; 33% instances).


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 25 dep:auxz_co	color:blue
1	Be to	be to	PART	Qg	_	0	root	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	1	punct	_	_
3	neprisipažinus	neprisipažinti	VERB	Vgaa----y--y--	Polarity=Neg	1	dep:adj	_	_
4	apie	apie	ADP	Sga	AdpType=Prep	5	case	_	_
5	neištikimybę	neištikimybė	NOUN	Ncfsan-	Case=Acc|Gender=Fem|Number=Sing	3	obj	_	_
6	atsidurti	atsidurti	VERB	Vgi-----n--y--	Mood=Ind|Polarity=Pos|VerbForm=Fin	1	dep:predv	_	_
7	tokiose	toks	PRON	Pgfpln	Case=Nom|PronType=Tot	8	nmod	_	_
8	situacijose	situacija	NOUN	Ncfpln-	Case=Loc|Gender=Fem|Number=Plur	6	dep:adj	_	SpaceAfter=No
9	,	,	PUNCT	PUNCT	_	11	punct	_	_
10	kai	kai	CCONJ	Cg	_	11	mark	_	_
11	teks	tekti	VERB	Vgmf3---n--ni-	Mood=Imp|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	8	dep:pred_atr	_	_
12	išsisukinėti	išsisukinėti	VERB	Vgi-----n--y--	Mood=Ind|Polarity=Pos|VerbForm=Fin	19	dep:predv_co	_	_
13	iš	iš	ADP	Sgg	AdpType=Prep	14	case	_	_
14	padėties	padėtis	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	12	dep:adj	_	SpaceAfter=No
15	,	,	PUNCT	PUNCT	_	19	punct	_	_
16	meluoti	meluoti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	19	dep:predv_co	_	_
17	–	–	PUNCT	PUNCT	_	18	punct	_	_
18	vadinasi	vadintis	VERB	Vgmp3---n--yi-	Mood=Imp|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	20	dep:par	_	SpaceAfter=No
19	,	,	PUNCT	PUNCT	_	11	punct	_	_
20	išduoti	išduoti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	19	dep:predv_co	_	_
21	savo	savęs	PRON	Pg--gn	Case=Nom|PronType=Tot	22	nmod	_	_
22	partnerį	partneris	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	20	obj	_	_
23	dar	dar	PART	Qg	_	24	dep:auxz_co	_	_
24	ir	ir	CCONJ	Cg	_	26	cc	_	_
25	dar	dar	PART	Qg	_	24	dep:auxz_co	_	_
26	kartą	kartas	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	20	dep:adj	_	SpaceAfter=No
27	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 dep:auxz_co	color:blue
1	Ne	ne	PART	Qg	_	2	advmod:emph	_	_
2	tik	tik	PART	Qg	_	0	root	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	5	punct	_	_
4	godotinas	godoti	VERB	Vgp--smnnnvn-p	Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part	5	acl	_	_
5	skaitytojau	skaitytojas	NOUN	Ncmsvn-	Case=Voc|Gender=Masc|Number=Sing	2	dep:par	_	_
6	ne	ne	PART	Qg	_	7	advmod:emph	_	_
7	tik	tik	PART	Qg	_	2	dep:auxz_co	_	_
8	!..	!..	PUNCT	PUNCT	_	2	punct	_	_

~~~


