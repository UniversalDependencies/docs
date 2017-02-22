

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

10 nodes (0%) are attached to their parents as `dep:predn_adj_co`.

9 instances of `dep:predn_adj_co` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.7.

The following 6 pairs of parts of speech are connected with `dep:predn_adj_co`: [lt-pos/VERB]()-[lt-pos/VERB]() (5; 50% instances), [lt-pos/NOUN]()-[lt-pos/ADJ]() (1; 10% instances), [lt-pos/NOUN]()-[lt-pos/VERB]() (1; 10% instances), [lt-pos/PART]()-[lt-pos/ADJ]() (1; 10% instances), [lt-pos/PUNCT]()-[lt-pos/ADJ]() (1; 10% instances), [lt-pos/PUNCT]()-[lt-pos/VERB]() (1; 10% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 19 dep:predn_adj_co	color:blue
1	Vakar	vakar	ADV	Rgp	Degree=Pos	0	root	_	_
2	Lietuvos	Lietuva	PROPN	Npfsgng	Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	_
3	energijos	energija	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	4	nmod	_	_
4	vadovas	vadovas	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	1	dep:sub	_	_
5	neketinąs	neketinti	VERB	Vgpp-smaynnn-p	Gender=Masc|Number=Sing|Polarity=Neg|Tense=Pres|VerbForm=Part|Voice=Act	1	dep:predn	_	_
6	atsistatydinti	atsistatydinti	VERB	Vgi-----n--y--	Mood=Ind|Polarity=Pos|VerbForm=Fin	5	dep:predv	_	SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	9	punct	_	_
8	nes	nes	CCONJ	Cg	_	9	mark	_	_
9	esąs	būti	VERB	Vgpp-smannnn-p	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	6	dep:predn_adj_co	_	_
10	visiškai	visiškai	ADV	Rgp	Degree=Pos	11	dep:adj	_	_
11	tikras	tikras	ADJ	Agpmsnn	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	9	dep:predn	_	_
12	dėl	dėl	ADP	Sgg	AdpType=Prep	17	case	_	_
13	savo	savęs	PRON	Pg--gn	Case=Nom|PronType=Tot	14	dep:atr_co	_	_
14	ir	ir	CCONJ	Cg	_	17	cc	_	_
15	savo	savęs	PRON	Pg--gn	Case=Nom|PronType=Tot	16	nmod	_	_
16	komandos	komanda	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	14	dep:atr_co	_	_
17	sprendimų	sprendimas	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	11	obj	_	_
18	bei	bei	CCONJ	Cg	_	9	mark	_	_
19	nebijąs	nebijoti	VERB	Vgpp-smaynnn-p	Gender=Masc|Number=Sing|Polarity=Neg|Tense=Pres|VerbForm=Part|Voice=Act	9	dep:predn_adj_co	_	_
20	premjero	premjeras	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	21	nmod	_	_
21	inicijuotų	inicijuoti	VERB	Vgps-pmpnngn-p	Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	22	acl	_	_
22	patikrinimų	patikrinimas	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	19	obj	_	SpaceAfter=No
23	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 dep:predn_adj_co	color:blue
1	Jeigu	jeigu	CCONJ	Cg	_	2	mark	_	_
2	turite	turėti	VERB	Vgmp2p--n--ni-	Mood=Imp|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	dep:pred_adj_co	_	_
3	galimybę	galimybė	NOUN	Ncfsan-	Case=Acc|Gender=Fem|Number=Sing	2	obj	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	9	punct	_	_
5	užuot	užuot	CCONJ	Cg	_	6	mark	_	_
6	skalbusi	skalbti	VERB	Vgpa-sfannnn-p	Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Act	4	dep:predn_adj_co	_	_
7	užuolaidas	užuolaida	NOUN	Ncfpan-	Case=Acc|Gender=Fem|Number=Plur	6	obj	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	4	punct	_	_
9	neškite	nešti	VERB	Vgm-2p--n--nm-	Mood=Imp|Number=Plur|Person=2|Polarity=Pos|VerbForm=Fin	0	root	_	_
10	jas	jis	PRON	Pgfpan	Case=Nom|PronType=Tot	9	obj	_	_
11	į	į	ADP	Sga	AdpType=Prep	12	case	_	_
12	valyklą	valykla	NOUN	Ncfsan-	Case=Acc|Gender=Fem|Number=Sing	9	obj	_	_
13	švarias	švarus	ADJ	Agpfpan	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	14	dep:atr_exd_co	_	_
14	ir	ir	CCONJ	Cg	_	18	advmod	_	_
15	kvepiančias	kvepėti	VERB	Vgpp-pfannan-p	Gender=Fem|Number=Plur|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	14	dep:atr_exd_co	_	_
16	beliks	belikti	VERB	Vgmf3---n--ni-	Mood=Imp|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	9	dep:pred_co	_	_
17	tik	tik	PART	Qg	_	18	advmod:emph	_	_
18	pakabinti	pakabinti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	16	dep:predv	_	SpaceAfter=No
19	.	.	PUNCT	PUNCT	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 15 dep:predn_adj_co	color:blue
1	Kalbant	kalbėti	VERB	Vgap----n--n--	Polarity=Pos|Tense=Pres	0	root	_	_
2	apie	apie	ADP	Sga	AdpType=Prep	4	case	_	_
3	mergaitės	mergaitė	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	4	nmod	_	_
4	išvaizdą	išvaizda	NOUN	Ncfsan-	Case=Acc|Gender=Fem|Number=Sing	1	obj	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	1	punct	_	_
6	komentuoti	komentuoti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	1	dep:predv	_	_
7	atsargiai	atsargiai	ADV	Rgp	Degree=Pos	6	dep:adj	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	11	punct	_	_
9	nes	nes	CCONJ	Cg	_	11	mark	_	_
10	ypač	ypač	ADV	Rgp	Degree=Pos	11	dep:adj	_	_
11	paauglystėje	paauglystė	NOUN	Ncfsln-	Case=Loc|Gender=Fem|Number=Sing	7	dep:adj	_	_
12	ji	jis	PRON	Pgfsnn	Case=Nom|PronType=Tot	11	dep:sub	_	_
13	tikrai	tikrai	ADV	Rgp	Degree=Pos	15	dep:adj	_	_
14	labai	labai	ADV	Rgp	Degree=Pos	15	dep:adj	_	_
15	jautri	jautrus	ADJ	Agpfsnn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	11	dep:predn_adj_co	_	_
16	kritikai	kritika	NOUN	Ncfsdn-	Case=Dat|Gender=Fem|Number=Sing	15	obj	_	_
17	ir	ir	CCONJ	Cg	_	11	mark	_	_
18	pažeidžiama	pažeisti	VERB	Vgpp-sfpnnnn-p	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	11	dep:predn_adj_co	_	SpaceAfter=No
19	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


