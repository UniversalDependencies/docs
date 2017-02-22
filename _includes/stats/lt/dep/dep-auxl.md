

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

35 nodes (0%) are attached to their parents as `dep:auxl`.

34 instances of `dep:auxl` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.02857142857143.

The following 2 pairs of parts of speech are connected with `dep:auxl`: [lt-pos/X]()-[lt-pos/X]() (33; 94% instances), [lt-pos/PROPN]()-[lt-pos/X]() (2; 6% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 dep:auxl	color:blue
1	iš	iš	ADP	Sgg	AdpType=Prep	5	case	_	_
2	banko	bankas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	_
3	DnB	DnB	X	Ya	Abbr=Yes	4	dep:auxl	_	_
4	Nord	Nord	X	Xf	_	2	nmod	_	_
5	leidinio	leidinys	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	0	root	_	_
6	Lietuvos	Lietuva	PROPN	Npfsgng	Case=Gen|Gender=Fem|Number=Sing	7	nmod	_	_
7	ekonomikos	ekonomika	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	_
8	perspektyvos	perspektyva	NOUN	Ncfpnn-	Case=Nom|Gender=Fem|Number=Plur	5	nmod	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 dep:auxl	color:blue
1	Bendrovė	bendrovė	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
2	Via	Via	X	Xf	_	3	dep:auxl	_	_
3	Baltika	Baltika	PROPN	Npfsnn-	Case=Nom|Gender=Fem|Number=Sing	4	nmod	_	_
4	Logistika	logistika	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	1	nmod	_	_
5	į	į	ADP	Sga	AdpType=Prep	9	case	_	_
6	pirmąją	pirmas	ADJ	Mofsaly	Case=Acc|Gender=Fem|Number=Sing|NumForm=Word|NumType=Ord	9	amod	_	_
7	logistikos	logistika	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	_
8	miesto	miestas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	9	nmod	_	_
9	dalį	dalis	NOUN	Ncfsan-	Case=Acc|Gender=Fem|Number=Sing	1	obj	_	_
10	50	50	NUM	M----d-	NumForm=Digit	1	obj	_	_
11	milijonų	milijonas	NUM	Mcmpgln	Case=Gen|Gender=Masc|Number=Plur|NumForm=Word|NumType=Card	12	nummod:gov	_	_
12	litų	litas	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	10	nmod	_	SpaceAfter=No
13	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


