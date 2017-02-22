

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

1 nodes (0%) are attached to their parents as `dep:rgp`.

1 instances of `dep:rgp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.

The following 1 pairs of parts of speech are connected with `dep:rgp`: [lt-pos/CCONJ]()-[lt-pos/ADV]() (1; 100% instances).


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 18 dep:rgp	color:blue
1	Norėti	norėti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	6	dep:sub	_	_
2	būti	būti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	1	ccomp	_	_
3	gražiam	gražus	ADJ	Agpmsdn	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing	4	dep:atr_co	_	_
4	ar	ar	CCONJ	Cg	_	2	advmod	_	_
5	gražiai	gražus	ADJ	Agpfsdn	Case=Dat|Degree=Pos|Gender=Fem|Number=Sing	4	dep:atr_co	_	_
6	yra	būti	VERB	Vgmp3---n--ni-	Mood=Imp|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
7	natūralu	natūralus	ADJ	Agpn--n	Degree=Pos|Gender=Neut	8	dep:predn_co	_	_
8	ir	ir	CCONJ	Cg	_	6	advmod	_	_
9	neginčytina	neginčyti	VERB	Vgp---nnyn-n-p	Gender=Neut|Polarity=Neg|VerbForm=Part	8	dep:predn_co	_	SpaceAfter=No
10	,	,	PUNCT	PUNCT	_	6	punct	_	_
11	jei	jei	CCONJ	Cg	_	13	mark	_	_
12	kūną	kūnas	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	13	obj	_	_
13	vertiname	vertinti	VERB	Vgmp1p--n--ni-	Mood=Imp|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	29	dep:pred_adj	_	_
14	tik	tik	PART	Qg	_	16	advmod:emph	_	_
15	pagal	pagal	ADP	Sga	AdpType=Prep	16	case	_	_
16	tai	tas	PRON	Pgn--n	Case=Nom|PronType=Tot	13	iobj	_	SpaceAfter=No
17	,	,	PUNCT	PUNCT	_	16	punct	_	_
18	kiek	kiek	ADV	Rgp	Degree=Pos	22	dep:rgp	_	_
19	jis	jis	PRON	Pgmsnn	Case=Nom|PronType=Tot	22	dep:sub	_	_
20	atitinka	atitikti	VERB	Vgmp3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	22	dep:pred_obj_co	_	_
21	idealą	idealas	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	20	obj	_	_
22	ar	ar	CCONJ	Cg	_	16	cc	_	_
23	jo	jis	PRON	Pgmsgn	Case=Nom|PronType=Tot	24	obj	_	_
24	neatitinka	neatitikti	VERB	Vgmp3s--y--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	22	dep:pred_obj_co	_	SpaceAfter=No
25	,	,	PUNCT	PUNCT	_	13	punct	_	_
26	jis	jis	PRON	Pgmsnn	Case=Nom|PronType=Tot	29	dep:sub	_	_
27	taip	taip	ADV	Rgp	Degree=Pos	29	dep:adj	_	_
28	ir	ir	PART	Qg	_	29	advmod:emph	_	_
29	liks	likti	VERB	Vgmf3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	6	dep:pred_co	_	_
30	deramai	deramai	ADV	Rgp	Degree=Pos	31	dep:adj	_	_
31	neįvertintas	neįvertinti	VERB	Vgps-smpynnn-p	Gender=Masc|Number=Sing|Polarity=Neg|Tense=Past|VerbForm=Part|Voice=Pass	29	dep:predn	_	SpaceAfter=No
32	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


