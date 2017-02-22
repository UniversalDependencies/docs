

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

19 nodes (0%) are attached to their parents as `dep:pred_sub_co`.

11 instances of `dep:pred_sub_co` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.89473684210526.

The following 3 pairs of parts of speech are connected with `dep:pred_sub_co`: [lt-pos/PUNCT]()-[lt-pos/VERB]() (12; 63% instances), [lt-pos/VERB]()-[lt-pos/VERB]() (6; 32% instances), [lt-pos/PRON]()-[lt-pos/VERB]() (1; 5% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 dep:pred_sub_co	color:blue
1	Jam	jis	PRON	Pgmsdn	Case=Nom|Number=Dual|PronType=Tot	0	root	_	_
2	turbūt	turbūt	PART	Qg	_	1	advmod:emph	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	8	punct	_	_
4	kad	kad	CCONJ	Cg	_	5	mark	_	_
5	ieškai	ieškoti	VERB	Vgmp2s--n--ni-	Mood=Imp|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	8	dep:pred_sub_co	_	_
6	atspirties	atspirtis	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	7	nmod	_	_
7	taško	taškas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	5	obj	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	1	punct	_	_
9	kad	kad	CCONJ	Cg	_	10	mark	_	_
10	imi	imti	VERB	Vgmp2s--n--ni-	Mood=Imp|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	8	dep:pred_sub_co	_	_
11	svarstyti	svarstyti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	10	dep:predv	_	SpaceAfter=No
12	,	,	PUNCT	PUNCT	_	14	punct	_	_
13	ar	ar	CCONJ	Cg	_	14	mark	_	_
14	esi	būti	VERB	Vgmp2s--n--ni-	Mood=Imp|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	11	dep:pred_obj	_	_
15	erdvėje	erdvė	NOUN	Ncfsln-	Case=Loc|Gender=Fem|Number=Sing	17	dep:adj_co	_	SpaceAfter=No
16	,	,	PUNCT	PUNCT	_	17	punct	_	_
17	ar	ar	CCONJ	Cg	_	14	advmod	_	_
18	tik	tik	PART	Qg	_	23	advmod:emph	_	_
19	juodoje	juodas	ADJ	Agpfsln	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	23	amod	_	_
20	Jo	jis	PRON	Pgmsgn	Case=Nom|PronType=Tot	22	nmod	_	_
21	tuščio	tuščias	ADJ	Agpmsgn	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	22	amod	_	_
22	sodo	sodas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	23	nmod	_	_
23	ertmėje	ertmė	NOUN	Ncfsln-	Case=Loc|Gender=Fem|Number=Sing	17	dep:adj_co	_	SpaceAfter=No
24	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 dep:pred_sub_co	color:blue
1	,	,	PUNCT	PUNCT	_	4	punct	_	_
2	kad	kad	CCONJ	Cg	_	4	mark	_	_
3	vasarai	vasara	NOUN	Ncfsdn-	Case=Dat|Gender=Fem|Number=Sing	4	obj	_	_
4	atėjus	ateiti	VERB	Vgaa----n--n--	Polarity=Pos	0	root	_	_
5	savo	savęs	PRON	Pg--gn	Case=Nom|PronType=Tot	6	nmod	_	_
6	kūno	kūnas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	_
7	proporcijas	proporcija	NOUN	Ncfpan-	Case=Acc|Gender=Fem|Number=Plur	4	obj	_	_
8	nužiūrinėjame	nužiūrinėti	VERB	Vgmp1p--n--ni-	Mood=Imp|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	dep:pred_sub_co	_	_
9	ir	ir	PART	Qg	_	4	mark	_	_
10	vertiname	vertinti	VERB	Vgmp1p--n--ni-	Mood=Imp|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	dep:pred_sub_co	_	_
11	dažniau	dažnai	ADV	Rgc	Degree=Cmp	4	dep:adj	_	_
12	nei	nei	CCONJ	Cg	_	13	mark	_	_
13	bet kada	bet kada	ADV	Rgp	Degree=Pos	11	dep:adj	_	SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 dep:pred_sub_co	color:blue
1	Tai	tas	PRON	Pgn--n	Case=Nom|PronType=Tot	0	root	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	4	punct	_	_
3	kad	kad	CCONJ	Cg	_	4	mark	_	_
4	dirbate	dirbti	VERB	Vgmp2p--n--ni-	Mood=Imp|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	dep:pred_sub_co	_	_
5	namuose	namai	NOUN	Ncmpln-	Case=Loc|Gender=Masc|Number=Plur	4	dep:adj	_	_
6	ir	ir	CCONJ	Cg	_	4	mark	_	_
7	niekas	niekas	PRON	Pg--nn	Case=Nom|PronType=Tot	9	dep:sub	_	_
8	jūsų	tu	PRON	Pg-pgn	Case=Nom|PronType=Tot	9	obj	_	_
9	nemato	nematyti	VERB	Vgmp3---y--ni-	Mood=Imp|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	4	dep:pred_sub_co	_	SpaceAfter=No
10	,	,	PUNCT	PUNCT	_	4	punct	_	SpaceAfter=No
11	,	,	PUNCT	PUNCT	_	13	punct	_	_
12	jog	jog	CCONJ	Cg	_	13	mark	_	_
13	galite	galėti	VERB	Vgmp2p--n--ni-	Mood=Imp|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	dep:pred_obj	_	_
14	dirbti	dirbti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	13	dep:predv	_	_
15	vilkėdamas	vilkėti	VERB	Vgh--sm-n--n--	Gender=Masc|Number=Sing|Polarity=Pos	14	dep:adj	_	_
16	pižamą	pižama	NOUN	Ncfsan-	Case=Acc|Gender=Fem|Number=Sing	15	obj	_	SpaceAfter=No
17	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


