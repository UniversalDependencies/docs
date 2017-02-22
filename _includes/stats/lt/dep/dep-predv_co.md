

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

182 nodes (0%) are attached to their parents as `dep:predv_co`.

98 instances of `dep:predv_co` (54%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.02747252747253.

The following 6 pairs of parts of speech are connected with `dep:predv_co`: [lt-pos/CCONJ]()-[lt-pos/VERB]() (124; 68% instances), [lt-pos/PUNCT]()-[lt-pos/VERB]() (37; 20% instances), [lt-pos/NUM]()-[lt-pos/VERB]() (13; 7% instances), [lt-pos/VERB]()-[lt-pos/VERB]() (4; 2% instances), [lt-pos/ADV]()-[lt-pos/VERB]() (3; 2% instances), [lt-pos/PRON]()-[lt-pos/VERB]() (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 dep:predv_co	color:blue
1	Mes	aš	PRON	Pg-pnn	Case=Nom|PronType=Tot	0	root	_	_
2	nepanikuoti	nepanikuoti	VERB	Vgi-----y--n--	Mood=Ind|Polarity=Neg|VerbForm=Fin	3	dep:predv_co	_	_
3	ir	ir	CCONJ	Cg	_	1	cc	_	_
4	vengti	vengti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	3	dep:predv_co	_	_
5	rizikingų	rizikingas	ADJ	Agpmpgn	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	6	amod	_	_
6	sprendimų	sprendimas	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	4	obj	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 dep:predv_co	color:blue
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
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 13 dep:predv_co	color:blue
1	§	§	PUNCT	PUNCT	_	2	punct	_	_
2	2.4	2.4	NUM	M----d-	NumForm=Digit	0	root	_	SpaceAfter=No
3	.	.	PUNCT	PUNCT	_	2	punct	_	_
4	Teritorinių	teritorinis	ADJ	Agpfpgn	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur	9	amod	_	_
5	valstybinės	valstybinis	ADJ	Agpfsgn	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	7	amod	_	_
6	maisto	maistas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	7	dep:atr_co	_	_
7	ir	ir	CCONJ	Cg	_	9	cc	_	_
8	veterinarijos	veterinarija	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	7	dep:atr_co	_	_
9	tarnybų	tarnyba	NOUN	Ncfpgn-	Case=Gen|Gender=Fem|Number=Plur	10	nmod	_	_
10	inspektorius	inspektorius	NOUN	Ncmpan-	Case=Acc|Gender=Masc|Number=Plur	2	obj	_	_
11	atlikti	atlikti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	2	dep:predv_co	_	_
12	patikras	patikra	NOUN	Ncfpan-	Case=Acc|Gender=Fem|Number=Plur	11	obj	_	_
13	išduoti	išduoti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	2	dep:predv_co	_	_
14	pažymas	pažyma	NOUN	Ncfpan-	Case=Acc|Gender=Fem|Number=Plur	13	obj	_	_
15	apie	apie	ADP	Sga	AdpType=Prep	24	case	_	_
16	Geros	geras	ADJ	Agpfsgn	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	18	amod	_	_
17	ūkininkavimo	ūkininkavimas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	18	nmod	_	_
18	praktikos	praktika	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	19	nmod	_	_
19	reikalavimų	reikalavimas	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	24	obj	_	_
20	gyvūnų	gyvūnas	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	21	obj	_	_
21	laikymo	laikymas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	22	nmod	_	_
22	gerovės	gerovė	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	23	nmod	_	_
23	srityje	sritis	NOUN	Ncfsln-	Case=Loc|Gender=Fem|Number=Sing	24	dep:adj	_	_
24	laikymąsi	laikymasis	NOUN	Ncmsay-	Case=Acc|Gender=Masc|Number=Sing	14	obj	_	SpaceAfter=No
25	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


