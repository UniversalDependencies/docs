

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

9 nodes (0%) are attached to their parents as `dep:obj_exd_co`.

6 instances of `dep:obj_exd_co` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.88888888888889.

The following 7 pairs of parts of speech are connected with `dep:obj_exd_co`: [lt-pos/PUNCT]()-[lt-pos/VERB]() (2; 22% instances), [lt-pos/VERB]()-[lt-pos/NOUN]() (2; 22% instances), [lt-pos/CCONJ]()-[lt-pos/PRON]() (1; 11% instances), [lt-pos/CCONJ]()-[lt-pos/VERB]() (1; 11% instances), [lt-pos/PUNCT]()-[lt-pos/NOUN]() (1; 11% instances), [lt-pos/PUNCT]()-[lt-pos/PRON]() (1; 11% instances), [lt-pos/VERB]()-[lt-pos/PRON]() (1; 11% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 dep:obj_exd_co	color:blue
1	§	§	PUNCT	PUNCT	_	6	punct	_	_
2	Jis	jis	PRON	Pgmsnn	Case=Nom|PronType=Tot	6	dep:sub	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	4	punct	_	_
4	matyt	matyt	PART	Qg	_	6	dep:par	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	4	punct	_	_
6	norėjo	norėti	VERB	Vgma3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|VerbForm=Fin	0	root	_	_
7	pasakyti	pasakyti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	6	ccomp	_	_
8	už	už	ADP	Sga	AdpType=Prep	7	mark	_	_
9	vieną	vienas	NUM	Mcm-aln	Case=Acc|Gender=Masc|NumForm=Word|NumType=Card	12	nummod	_	_
10	pusiau	pusiau	ADV	Rgp	Degree=Pos	11	dep:adj	_	_
11	luptą	lupti	VERB	Vgps-smpnnan-p	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	12	dep:obj_exd_co	_	SpaceAfter=No
12	,	,	PUNCT	PUNCT	_	8	punct	_	_
13	pusiau	pusiau	ADV	Rgp	Degree=Pos	14	dep:adj	_	_
14	skustą	skusti	VERB	Vgps-smpnnan-p	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	12	dep:obj_exd_co	_	SpaceAfter=No
15	,	,	PUNCT	PUNCT	_	6	punct	_	_
16	ką	kas	PRON	Pg--an	Case=Nom|PronType=Tot	6	dep:obj_exd_co	_	_
17	čia	čia	PART	Qg	_	16	advmod:emph	_	SpaceAfter=No
18	!	!	PUNCT	PUNCT	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 dep:obj_exd_co	color:blue
1	Girdžiu	girdėti	VERB	Vgmp1s--n--ni-	Mood=Imp|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
2	ją	jis	PRON	Pgfsan	Case=Nom|PronType=Tot	1	obj	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	1	punct	_	_
4	ne	ne	PART	Qg	_	5	advmod:emph	_	_
5	ausimis	ausis	NOUN	Ncfpin-	Case=Ins|Gender=Fem|Number=Plur	1	dep:obj_exd_co	_	SpaceAfter=No
6	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 16 dep:obj_exd_co	color:blue
1	§	§	PUNCT	PUNCT	_	6	punct	_	_
2	Jis	jis	PRON	Pgmsnn	Case=Nom|PronType=Tot	6	dep:sub	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	4	punct	_	_
4	matyt	matyt	PART	Qg	_	6	dep:par	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	4	punct	_	_
6	norėjo	norėti	VERB	Vgma3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|VerbForm=Fin	0	root	_	_
7	pasakyti	pasakyti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	6	ccomp	_	_
8	už	už	ADP	Sga	AdpType=Prep	7	mark	_	_
9	vieną	vienas	NUM	Mcm-aln	Case=Acc|Gender=Masc|NumForm=Word|NumType=Card	12	nummod	_	_
10	pusiau	pusiau	ADV	Rgp	Degree=Pos	11	dep:adj	_	_
11	luptą	lupti	VERB	Vgps-smpnnan-p	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	12	dep:obj_exd_co	_	SpaceAfter=No
12	,	,	PUNCT	PUNCT	_	8	punct	_	_
13	pusiau	pusiau	ADV	Rgp	Degree=Pos	14	dep:adj	_	_
14	skustą	skusti	VERB	Vgps-smpnnan-p	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	12	dep:obj_exd_co	_	SpaceAfter=No
15	,	,	PUNCT	PUNCT	_	6	punct	_	_
16	ką	kas	PRON	Pg--an	Case=Nom|PronType=Tot	6	dep:obj_exd_co	_	_
17	čia	čia	PART	Qg	_	16	advmod:emph	_	SpaceAfter=No
18	!	!	PUNCT	PUNCT	_	6	punct	_	_

~~~


