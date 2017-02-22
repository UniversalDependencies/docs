

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

3 nodes (0%) are attached to their parents as `dep:predv_obj`.

3 instances of `dep:predv_obj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.66666666666667.

The following 2 pairs of parts of speech are connected with `dep:predv_obj`: [lt-pos/VERB]()-[lt-pos/VERB]() (2; 67% instances), [lt-pos/NOUN]()-[lt-pos/VERB]() (1; 33% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 dep:predv_obj	color:blue
1	reikia	reikėti	VERB	Vgmp3---n--ni-	Mood=Imp|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
2	galvoti	galvoti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	1	ccomp	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	5	punct	_	_
4	kaip	kaip	CCONJ	Cg	_	5	mark	_	_
5	išsaugoti	išsaugoti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	2	dep:predv_obj	_	_
6	darbo	darbas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	_
7	vietas	vieta	NOUN	Ncfpan-	Case=Acc|Gender=Fem|Number=Plur	5	obj	_	SpaceAfter=No
8	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 dep:predv_obj	color:blue
1	Vaikai	vaikas	NOUN	Ncmpnn-	Case=Nom|Gender=Masc|Number=Plur	0	root	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	5	punct	_	_
3	kaip	kaip	CCONJ	Cg	_	5	mark	_	_
4	konstruktyviai	konstruktyviai	ADV	Rgp	Degree=Pos	5	dep:adj	_	_
5	reikšti	reikšti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	1	dep:predv_obj	_	_
6	pyktį	pyktis	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	5	obj	_	SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	12	punct	_	_
8	nes	nes	CCONJ	Cg	_	12	mark	_	_
9	jiems	jis	PRON	Pgmpdn	Case=Nom|Number=Dual|PronType=Tot	12	obj	_	_
10	daug	daug	ADV	Rgp	Degree=Pos	12	dep:adj	_	_
11	kartų	kartas	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	10	nmod	_	_
12	tenka	tekti	VERB	Vgmp3---n--ni-	Mood=Imp|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	dep:pred_adj	_	_
13	suvaidinti	suvaidinti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	17	dep:predv_co	_	_
14	įprasto	įprastas	ADJ	Agpmsgn	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	15	amod	_	_
15	gyvenimo	gyvenimas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	16	nmod	_	_
16	situacijas	situacija	NOUN	Ncfpan-	Case=Acc|Gender=Fem|Number=Plur	13	obj	_	SpaceAfter=No
17	,	,	PUNCT	PUNCT	_	12	punct	_	_
18	kalbėti	kalbėti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	17	dep:predv_co	_	_
19	apie	apie	ADP	Sga	AdpType=Prep	20	case	_	_
20	tai	tas	PRON	Pgn--n	Case=Nom|PronType=Tot	18	obj	_	SpaceAfter=No
21	,	,	PUNCT	PUNCT	_	33	punct	_	_
22	dėl	dėl	ADP	Sgg	AdpType=Prep	23	case	_	_
23	ko	kas	PRON	Pg--gn	Case=Nom|PronType=Tot	24	dep:adj	_	_
24	kilo	kilti	VERB	Vgma3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|VerbForm=Fin	33	dep:pred_obj_co	_	_
25	pyktis	pyktis	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	24	dep:sub	_	SpaceAfter=No
26	,	,	PUNCT	PUNCT	_	33	punct	_	_
27	ką	kas	PRON	Pg--an	Case=Nom|PronType=Tot	28	obj	_	_
28	pagalvojo	pagalvoti	VERB	Vgma3p--n--ni-	Mood=Imp|Number=Plur|Person=3|Polarity=Pos|VerbForm=Fin	33	dep:pred_obj_co	_	SpaceAfter=No
29	,	,	PUNCT	PUNCT	_	33	punct	_	_
30	ką	kas	PRON	Pg--an	Case=Nom|PronType=Tot	32	obj	_	_
31	tada	tada	ADV	Rgp	Degree=Pos	32	dep:adj	_	_
32	darė	daryti	VERB	Vgma3p--n--ni-	Mood=Imp|Number=Plur|Person=3|Polarity=Pos|VerbForm=Fin	33	dep:pred_obj_co	_	SpaceAfter=No
33	,	,	PUNCT	PUNCT	_	20	punct	_	_
34	kokios	koks	PRON	Pgfpnn	Case=Nom|PronType=Tot	35	dep:predn	_	_
35	buvo	būti	VERB	Vgma3p--n--ni-	Mood=Imp|Number=Plur|Person=3|Polarity=Pos|VerbForm=Fin	33	dep:pred_obj_co	_	_
36	pasekmės	pasekmė	NOUN	Ncfpnn-	Case=Nom|Gender=Fem|Number=Plur	35	dep:sub	_	SpaceAfter=No
37	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


