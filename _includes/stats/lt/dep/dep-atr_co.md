

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

1212 nodes (3%) are attached to their parents as `dep:atr_co`.

671 instances of `dep:atr_co` (55%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.81683168316832.

The following 25 pairs of parts of speech are connected with `dep:atr_co`: [lt-pos/CCONJ]()-[lt-pos/NOUN]() (548; 45% instances), [lt-pos/CCONJ]()-[lt-pos/ADJ]() (143; 12% instances), [lt-pos/PUNCT]()-[lt-pos/NOUN]() (138; 11% instances), [lt-pos/CCONJ]()-[lt-pos/VERB]() (87; 7% instances), [lt-pos/PUNCT]()-[lt-pos/ADJ]() (56; 5% instances), [lt-pos/PUNCT]()-[lt-pos/VERB]() (49; 4% instances), [lt-pos/PUNCT]()-[lt-pos/NUM]() (42; 3% instances), [lt-pos/CCONJ]()-[lt-pos/PROPN]() (41; 3% instances), [lt-pos/CCONJ]()-[lt-pos/X]() (22; 2% instances), [lt-pos/CCONJ]()-[lt-pos/PRON]() (19; 2% instances), [lt-pos/PUNCT]()-[lt-pos/PROPN]() (17; 1% instances), [lt-pos/NOUN]()-[lt-pos/NOUN]() (13; 1% instances), [lt-pos/PUNCT]()-[lt-pos/X]() (12; 1% instances), [lt-pos/PUNCT]()-[lt-pos/PRON]() (8; 1% instances), [lt-pos/ADV]()-[lt-pos/NOUN]() (3; 0% instances), [lt-pos/CCONJ]()-[lt-pos/NUM]() (3; 0% instances), [lt-pos/NUM]()-[lt-pos/VERB]() (2; 0% instances), [lt-pos/PART]()-[lt-pos/ADJ]() (2; 0% instances), [lt-pos/ADJ]()-[lt-pos/VERB]() (1; 0% instances), [lt-pos/NOUN]()-[lt-pos/PRON]() (1; 0% instances), [lt-pos/NUM]()-[lt-pos/ADJ]() (1; 0% instances), [lt-pos/PRON]()-[lt-pos/NOUN]() (1; 0% instances), [lt-pos/VERB]()-[lt-pos/ADJ]() (1; 0% instances), [lt-pos/VERB]()-[lt-pos/NOUN]() (1; 0% instances), [lt-pos/VERB]()-[lt-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 dep:atr_co	color:blue
1	2000	2000	NUM	M----d-	NumForm=Digit	2	nummod	_	_
2	m	m.	X	Ys	Abbr=Yes	0	root	_	SpaceAfter=No
3	.	.	PUNCT	PUNCT	_	2	punct	_	_
4	Vilniaus	Vilnius	PROPN	Npmsgng	Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	_
5	arkikatedroje	arkikatedra	NOUN	Ncfsln-	Case=Loc|Gender=Fem|Number=Sing	2	dep:adj	_	_
6	Atgailos	atgaila	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	7	dep:atr_co	_	_
7	ir	ir	CCONJ	Cg	_	9	cc	_	_
8	atsiprašymo	atsiprašymas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	7	dep:atr_co	_	_
9	pamaldos	pamaldos	NOUN	Ncfpnn-	Case=Nom|Gender=Fem|Number=Plur	2	dep:sub	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 dep:atr_co	color:blue
1	Šilainiuose	Šilainiai	PROPN	Npmplng	Case=Loc|Gender=Masc|Number=Plur	0	root	_	_
2	nuo	nuo	ADP	Sgg	AdpType=Prep	7	case	_	_
3	įžūlių	įžūlus	ADJ	Agpmpgn	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	7	amod	_	_
4	kaukėtų	kaukėtas	ADJ	Agpmpgn	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	5	dep:atr_co	_	_
5	ir	ir	CCONJ	Cg	_	7	cc	_	_
6	ginkluotų	ginkluotas	ADJ	Agpmpgn	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	5	dep:atr_co	_	_
7	įsibrovėlių	įsibrovėlis	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	1	obj	_	_
8	dar	dar	PART	Qg	_	9	advmod:emph	_	_
9	viena	vienas	NUM	Mcmsnln	Case=Nom|Gender=Masc|Number=Sing|NumForm=Word|NumType=Card	10	nummod	_	_
10	vaistinė	vaistinė	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	1	dep:sub	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 dep:atr_co	color:blue
1	Juos	jis	PRON	Pgmpan	Case=Nom|PronType=Tot	0	root	_	_
2	žaliosios	žalias	ADJ	Agpfsgy	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	3	amod	_	_
3	arbatos	arbata	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	4	dep:atr_co	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	6	punct	_	_
5	petražolių	petražolė	NOUN	Ncfpgn-	Case=Gen|Gender=Fem|Number=Plur	4	dep:atr_co	_	_
6	kompresai	kompresas	NOUN	Ncmpnn-	Case=Nom|Gender=Masc|Number=Plur	1	dep:sub	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


