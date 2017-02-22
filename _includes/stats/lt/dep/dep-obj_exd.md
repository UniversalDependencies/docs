

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

6 nodes (0%) are attached to their parents as `dep:obj_exd`.

6 instances of `dep:obj_exd` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.33333333333333.

The following 5 pairs of parts of speech are connected with `dep:obj_exd`: [lt-pos/ADJ]()-[lt-pos/ADJ]() (2; 33% instances), [lt-pos/NUM]()-[lt-pos/VERB]() (1; 17% instances), [lt-pos/PRON]()-[lt-pos/VERB]() (1; 17% instances), [lt-pos/VERB]()-[lt-pos/PRON]() (1; 17% instances), [lt-pos/VERB]()-[lt-pos/VERB]() (1; 17% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 dep:obj_exd	color:blue
1	Nustačius	nustatyti	VERB	Vgaa----n--n--	Polarity=Pos	0	root	_	_
2	naują	naujas	ADJ	Agpmsan	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	4	amod	_	_
3	mokesčio	mokestis	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	4	nmod	_	_
4	dydį	dydis	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	1	obj	_	_
5	(	(	PUNCT	PUNCT	_	8	punct	_	SpaceAfter=No
6	40	40	NUM	M----d-	NumForm=Digit	8	dep:adj	_	_
7	%	%	SYM	Xh	_	6	nmod	_	_
8	mažesnį	mažas	ADJ	Agcmsan	Case=Acc|Degree=Cmp|Gender=Masc|Number=Sing	4	amod	_	_
9	už	už	ADP	Sga	AdpType=Prep	10	case	_	_
10	ankstesnįjį	ankstus	ADJ	Agcmsay	Case=Acc|Degree=Cmp|Gender=Masc|Number=Sing	8	dep:obj_exd	_	SpaceAfter=No
11	)	)	PUNCT	PUNCT	_	8	punct	_	_
12	mokestis	mokestis	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	1	dep:sub	_	_
13	už	už	ADP	Sgg	AdpType=Prep	16	case	_	_
14	prekės	prekė	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	15	nmod	_	_
15	ženklo	ženklas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	16	nmod	_	_
16	apsaugą	apsauga	NOUN	Ncfsan-	Case=Acc|Gender=Fem|Number=Sing	12	obj	_	_
17	visoje	visas	PRON	Pgfsln	Case=Nom|PronType=Tot	18	nmod	_	_
18	ES	ES	X	Ya	Abbr=Yes	1	dep:adj	_	_
19	iki	iki	ADP	Sgg	AdpType=Prep	23	case	_	_
20	mažiausio	mažas	ADJ	Agsmsgn	Case=Gen|Degree=Sup|Gender=Masc|Number=Sing	23	amod	_	_
21	kada nors	kada nors	ADV	Rgp	Degree=Pos	22	dep:adj	_	_
22	buvusio	būti	VERB	Vgpa-smanngn-p	Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Act	23	acl	_	_
23	dydžio	dydis	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	1	obj	_	SpaceAfter=No
24	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 dep:obj_exd	color:blue
1	§	§	PUNCT	PUNCT	_	2	punct	_	_
2	1	1	NUM	M----d-	NumForm=Digit	0	root	_	SpaceAfter=No
3	.	.	PUNCT	PUNCT	_	2	punct	_	_
4	pridedamas	pridėti	VERB	Vgpp-pfpnnan-p	Gender=Fem|Number=Plur|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	2	dep:obj_exd	_	SpaceAfter=No
5	:	:	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 21 dep:obj_exd	color:blue
1	Išėjimas	išėjimas	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	2	dep:sub_co	_	_
2	ir	ir	CCONJ	Cg	_	0	root	_	_
3	grįžimas	grįžimas	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	2	dep:sub_co	_	_
4	iš	iš	ADP	Sgg	AdpType=Prep	5	case	_	_
5	darbo	darbas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	2	dep:adj	_	_
6	tai	tai	PART	Qg	_	2	advmod:emph	_	SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	2	punct	_	_
8	kurio	kuris	PRON	Pgmsgn	Case=Nom|PronType=Tot	9	nmod	_	_
9	metu	metas	NOUN	Ncmsin-	Case=Ins|Gender=Masc|Number=Sing	16	dep:adj	_	_
10	"	"	PUNCT	PUNCT	_	11	punct	_	SpaceAfter=No
11	atsijungiama	atsijungti	VERB	Vgpp--npnn-y-p	Gender=Neut|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	16	dep:predn_atr_co	_	SpaceAfter=No
12	"	"	PUNCT	PUNCT	_	11	punct	_	_
13	nuo	nuo	ADP	Sgg	AdpType=Prep	15	case	_	_
14	vienos	vienas	PRON	Pgfsgn	Case=Nom|PronType=Tot	15	nmod	_	_
15	veiklos	veikla	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	11	obj	_	_
16	ir	ir	CCONJ	Cg	_	2	cc	_	_
17	"	"	PUNCT	PUNCT	_	18	punct	_	SpaceAfter=No
18	įsijungiama	įsijungti	VERB	Vgpp--npnn-y-p	Gender=Neut|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	16	dep:predn_atr_co	_	SpaceAfter=No
19	"	"	PUNCT	PUNCT	_	18	punct	_	_
20	į	į	ADP	Sga	AdpType=Prep	21	case	_	_
21	kitą	kitas	PRON	Pgfsan	Case=Nom|PronType=Tot	18	dep:obj_exd	_	SpaceAfter=No
22	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


