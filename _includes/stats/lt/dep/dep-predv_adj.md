

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

1 nodes (0%) are attached to their parents as `dep:predv_adj`.

1 instances of `dep:predv_adj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 1 pairs of parts of speech are connected with `dep:predv_adj`: [lt-pos/ADV]()-[lt-pos/VERB]() (1; 100% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 dep:predv_adj	color:blue
1	§	§	PUNCT	PUNCT	_	2	punct	_	_
2	Tada	tada	ADV	Rgp	Degree=Pos	0	root	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	8	punct	_	_
4	kad	kad	CCONJ	Cg	_	8	mark	_	_
5	pamilti	pamilti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	8	dep:predv	_	_
6	literatūrą	literatūra	NOUN	Ncfsan-	Case=Acc|Gender=Fem|Number=Sing	5	obj	_	_
7	daug	daug	ADV	Rgp	Degree=Pos	8	dep:adj	_	_
8	lengviau	lengvai	ADV	Rgc	Degree=Cmp	2	dep:predn_obj	_	SpaceAfter=No
9	,	,	PUNCT	PUNCT	_	11	punct	_	_
10	nei	nei	CCONJ	Cg	_	11	mark	_	_
11	pamilti	pamilti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	8	dep:predv_adj	_	_
12	gyvenimą	gyvenimas	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	11	obj	_	SpaceAfter=No
13	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


