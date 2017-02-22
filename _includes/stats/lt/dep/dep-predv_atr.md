

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

7 nodes (0%) are attached to their parents as `dep:predv_atr`.

7 instances of `dep:predv_atr` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.

The following 2 pairs of parts of speech are connected with `dep:predv_atr`: [lt-pos/NOUN]()-[lt-pos/VERB]() (6; 86% instances), [lt-pos/PUNCT]()-[lt-pos/VERB]() (1; 14% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 dep:predv_atr	color:blue
1	judėti	judėti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	3	dep:predv_co	_	_
2	toliau	toli	ADV	Rgc	Degree=Cmp	1	dep:adj	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	0	root	_	_
4	rasti	rasti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	3	dep:predv_co	_	_
5	būdų	būdas	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	4	obj	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	8	punct	_	_
7	kaip	kaip	CCONJ	Cg	_	8	mark	_	_
8	išgyventi	išgyventi	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	5	dep:predv_atr	_	_
9	šią	šis	PRON	Pgfsan	Case=Nom|PronType=Tot	11	nmod	_	_
10	santykių	santykis	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	11	nmod	_	_
11	krizę	krizė	NOUN	Ncfsan-	Case=Acc|Gender=Fem|Number=Sing	8	obj	_	SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 dep:predv_atr	color:blue
1	Iš esmės	iš esmės	ADV	Rgp	Degree=Pos	0	root	_	_
2	jokių	joks	PRON	Pgmpgn	Case=Nom|PronType=Tot	4	nmod	_	_
3	realių	realus	ADJ	Agpmpgn	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	4	amod	_	_
4	žingsnių	žingsnis	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	5	dep:obj_co	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	1	punct	_	_
6	realių	realus	ADJ	Agpfpgn	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur	7	amod	_	_
7	programų	programa	NOUN	Ncfpgn-	Case=Gen|Gender=Fem|Number=Plur	5	dep:obj_co	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	10	punct	_	_
9	kaip	kaip	CCONJ	Cg	_	10	mark	_	_
10	padaryti	padaryti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	5	dep:predv_atr	_	SpaceAfter=No
11	,	,	PUNCT	PUNCT	_	14	punct	_	_
12	kad	kad	CCONJ	Cg	_	14	mark	_	_
13	ekonomika	ekonomika	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	14	dep:sub	_	_
14	atsigautų	atsigauti	VERB	Vgm-3s--n--ys-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|VerbForm=Fin	10	dep:pred_obj_co	_	_
15	ir	ir	CCONJ	Cg	_	14	mark	_	_
16	prasidėtų	prasidėti	VERB	Vgm-3p--n--ys-	Mood=Imp|Number=Plur|Person=3|Polarity=Pos|VerbForm=Fin	14	dep:pred_obj_co	_	_
17	priešingi	priešingas	ADJ	Agpmpnn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	18	amod	_	_
18	dalykai	dalykas	NOUN	Ncmpnn-	Case=Nom|Gender=Masc|Number=Plur	16	dep:sub	_	SpaceAfter=No
19	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


