

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

2 nodes (0%) are attached to their parents as `dep:predn_atr_par`.

2 instances of `dep:predn_atr_par` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.

The following 1 pairs of parts of speech are connected with `dep:predn_atr_par`: [lt-pos/NOUN]()-[lt-pos/VERB]() (2; 100% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 14 dep:predn_atr_par	color:blue
1	Dabar	dabar	ADV	Rgp	Degree=Pos	0	root	_	_
2	valstybės	valstybė	NOUN	Ncfpnn-	Case=Nom|Gender=Fem|Number=Plur	1	dep:sub	_	_
3	narės	narė	NOUN	Ncfpnn-	Case=Nom|Gender=Fem|Number=Plur	2	nmod	_	_
4	skirti	skirti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	1	dep:predv	_	_
5	kelių	keli	PRON	Pgfpgn	Case=Nom|PronType=Tot	7	nmod	_	_
6	skirtingų	skirtingas	ADJ	Agpfpgn	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur	7	amod	_	_
7	rūšių	rūšis	NOUN	Ncfpgn-	Case=Gen|Gender=Fem|Number=Plur	9	nmod	_	_
8	valstybės	valstybė	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	9	nmod	_	_
9	pagalbą	pagalba	NOUN	Ncfsan-	Case=Acc|Gender=Fem|Number=Sing	4	obj	_	_
10	inovacijoms	inovacija	NOUN	Ncfpdn-	Case=Dat|Gender=Fem|Number=Plur	9	obj	_	_
11	(	(	PUNCT	PUNCT	_	14	punct	_	SpaceAfter=No
12	dėl	dėl	ADP	Sgg	AdpType=Prep	13	case	_	_
13	kurios	kuris	PRON	Pgfsgn	Case=Nom|PronType=Tot	14	obj	_	_
14	patiriama	patirti	VERB	Vgpp-sfpnnnn-p	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	9	dep:predn_atr_par	_	_
15	nedidelė	nedidelis	ADJ	Agpfsnn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	17	amod	_	_
16	administracinė	administracinis	ADJ	Agpfsnn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	17	amod	_	_
17	našta	našta	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	14	dep:sub	_	SpaceAfter=No
18	)	)	PUNCT	PUNCT	_	14	punct	_	SpaceAfter=No
19	,	,	PUNCT	PUNCT	_	20	punct	_	_
20	neprivalėdamos	neprivalėti	VERB	Vgh--pf-y--n--	Gender=Fem|Number=Plur|Polarity=Neg	4	dep:adj	_	_
21	apie	apie	ADP	Sga	AdpType=Prep	22	case	_	_
22	priemones	priemonė	NOUN	Ncfpan-	Case=Acc|Gender=Fem|Number=Plur	23	obj	_	_
23	pranešti	pranešti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	20	ccomp	_	_
24	Komisijai	komisija	NOUN	Ncfsdn-	Case=Dat|Gender=Fem|Number=Sing	23	obj	_	SpaceAfter=No
25	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


