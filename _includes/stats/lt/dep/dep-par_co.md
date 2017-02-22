

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

4 nodes (0%) are attached to their parents as `dep:par_co`.

2 instances of `dep:par_co` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.25.

The following 2 pairs of parts of speech are connected with `dep:par_co`: [lt-pos/CCONJ]()-[lt-pos/NOUN]() (2; 50% instances), [lt-pos/PUNCT]()-[lt-pos/NOUN]() (2; 50% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 dep:par_co	color:blue
1	§	§	PUNCT	PUNCT	_	2	punct	_	_
2	Todėl	todėl	ADV	Rgp	Degree=Pos	0	root	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	2	punct	_	_
4	seserys	sesuo	NOUN	Ncfpvn-	Case=Voc|Gender=Fem|Number=Plur	5	dep:par_co	_	_
5	ir	ir	CCONJ	Cg	_	2	cc	_	_
6	žmonos	žmona	NOUN	Ncfpvn-	Case=Voc|Gender=Fem|Number=Plur	5	dep:par_co	_	SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	2	punct	_	_
8	LG	LG	X	Ya	Abbr=Yes	9	dep:obj_co	_	_
9	beigi	beigi	CCONJ	Cg	_	2	cc	_	_
10	Samsungus	samsungas	NOUN	Ncmpnn-	Case=Nom|Gender=Masc|Number=Plur	9	dep:obj_co	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 dep:par_co	color:blue
1	§	§	PUNCT	PUNCT	_	4	punct	_	_
2	jūs	tu	PRON	Pgmpnn	Case=Nom|PronType=Tot	4	dep:sub	_	_
3	dar	dar	PART	Qg	_	4	advmod:emph	_	_
4	stebitės	stebėtis	VERB	Vgmp2p--n--yi-	Mood=Imp|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	8	punct	_	_
6	feminizmo	feminizmas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	_
7	nekentėjai	nekentėjas	NOUN	Ncmpvn-	Case=Voc|Gender=Masc|Number=Plur	8	dep:par_co	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	2	punct	_	_
9	nykūs	nykus	ADJ	Agpmpnn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	10	amod	_	_
10	pašaipūnai	pašaipūnas	NOUN	Ncmpvn-	Case=Voc|Gender=Masc|Number=Plur	8	dep:par_co	_	SpaceAfter=No
11	,	,	PUNCT	PUNCT	_	13	punct	_	_
12	kad	kad	CCONJ	Cg	_	13	mark	_	_
13	moterys	moteris	NOUN	Ncfpnn-	Case=Nom|Gender=Fem|Number=Plur	17	dep:sub	_	_
14	šiokios	šioks	PRON	Pgfpnn	Case=Nom|PronType=Tot	13	dep:predn_obj_co	_	_
15	ir	ir	CCONJ	Cg	_	13	mark	_	_
16	anokios	anoks	PRON	Pgfpnn	Case=Nom|PronType=Tot	13	dep:predn_obj_co	_	SpaceAfter=No
17	,	,	PUNCT	PUNCT	_	4	punct	_	_
18	kad	kad	CCONJ	Cg	_	19	mark	_	_
19	neturi	neturėti	VERB	Vgmp3p--y--ni-	Mood=Imp|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	17	dep:pred_obj_co	_	_
20	humoro	humoras	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	21	nmod	_	_
21	jausmo	jausmas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	19	obj	_	SpaceAfter=No
22	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


