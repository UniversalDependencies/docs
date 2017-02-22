

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

25 nodes (0%) are attached to their parents as `dep:predn_obj_co`.

14 instances of `dep:predn_obj_co` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.52.

The following 14 pairs of parts of speech are connected with `dep:predn_obj_co`: [lt-pos/CCONJ]()-[lt-pos/VERB]() (3; 12% instances), [lt-pos/PUNCT]()-[lt-pos/ADJ]() (3; 12% instances), [lt-pos/PUNCT]()-[lt-pos/VERB]() (3; 12% instances), [lt-pos/CCONJ]()-[lt-pos/PRON]() (2; 8% instances), [lt-pos/NOUN]()-[lt-pos/PRON]() (2; 8% instances), [lt-pos/PRON]()-[lt-pos/NOUN]() (2; 8% instances), [lt-pos/PUNCT]()-[lt-pos/ADV]() (2; 8% instances), [lt-pos/VERB]()-[lt-pos/ADJ]() (2; 8% instances), [lt-pos/CCONJ]()-[lt-pos/ADJ]() (1; 4% instances), [lt-pos/CCONJ]()-[lt-pos/ADV]() (1; 4% instances), [lt-pos/PRON]()-[lt-pos/ADV]() (1; 4% instances), [lt-pos/PRON]()-[lt-pos/VERB]() (1; 4% instances), [lt-pos/VERB]()-[lt-pos/ADV]() (1; 4% instances), [lt-pos/VERB]()-[lt-pos/VERB]() (1; 4% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 dep:predn_obj_co	color:blue
1	Imu	imti	VERB	Vgmp1s--n--ni-	Mood=Imp|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
2	aiškinti	aiškinti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	1	dep:predv	_	_
3	aiškinu	aiškinti	VERB	Vgmp1s--n--ni-	Mood=Imp|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	dep:pred_co	_	_
4	ligi šiolei	ligi šiolei	ADV	Rgp	Degree=Pos	3	dep:adj	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	10	punct	_	_
6	kad	kad	CCONJ	Cg	_	7	mark	_	_
7	neįmanoma	neįmanyti	VERB	Vgpp--npyn-n-p	Gender=Neut|Polarity=Neg|Tense=Pres|VerbForm=Part|Voice=Pass	10	dep:predn_obj_co	_	_
8	pasaulio	pasaulis	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	9	obj	_	_
9	perdažyti	perdažyti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	7	dep:predv	_	SpaceAfter=No
10	,	,	PUNCT	PUNCT	_	3	punct	_	_
11	kad	kad	CCONJ	Cg	_	14	mark	_	_
12	jame	jis	PRON	Pgmsln	Case=Nom|PronType=Tot	14	dep:adj	_	_
13	visada	visada	ADV	Rgp	Degree=Pos	14	dep:adj	_	_
14	buvo	būti	VERB	Vgma3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|VerbForm=Fin	10	dep:pred_obj_co	_	_
15	daugiausia	daug	ADV	Rgs	Degree=Sup	14	dep:adj	_	_
16	sukrešėjusio	sukrešėti	VERB	Vgpa-smanngn-p	Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Act	17	acl	_	_
17	kraujo	kraujas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	18	nmod	_	_
18	spalvos	spalva	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	15	nmod	_	SpaceAfter=No
19	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 dep:predn_obj_co	color:blue
1	,	,	PUNCT	PUNCT	_	3	punct	_	_
2	kad	kad	CCONJ	Cg	_	3	mark	_	_
3	gerai	gerai	ADV	Rgp	Degree=Pos	0	root	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	7	punct	_	_
5	jog	jog	CCONJ	Cg	_	7	mark	_	_
6	Vyriausybė	vyriausybė	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	7	dep:sub	_	_
7	daro	daryti	VERB	Vgmp3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	dep:pred_sub	_	_
8	tai	tas	PRON	Pgn--n	Case=Nom|PronType=Tot	7	obj	_	SpaceAfter=No
9	,	,	PUNCT	PUNCT	_	8	punct	_	_
10	ką	kas	PRON	Pg--an	Case=Nom|PronType=Tot	14	obj	_	_
11	galima	galėti	VERB	Vgpp--npnn-n-p	Gender=Neut|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	12	dep:predn_obj_co	_	_
12	ir	ir	CCONJ	Cg	_	8	cc	_	_
13	reikia	reikėti	VERB	Vgmp3---n--ni-	Mood=Imp|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	12	dep:pred_obj_co	_	_
14	daryti	daryti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	12	dep:predv	_	_
15	šiandien	šiandien	ADV	Rgp	Degree=Pos	14	dep:adj	_	_
16	neatidėliodama	neatidėlioti	VERB	Vgh--sf-y--n--	Gender=Fem|Number=Sing|Polarity=Neg	7	dep:adj	_	SpaceAfter=No
17	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 25 dep:predn_obj_co	color:blue
1	Pavyzdžiui	pavyzdys	NOUN	Ncmsdn-	Case=Dat|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	1	punct	_	_
3	pirmoji	pirmas	ADJ	Mofsnly	Case=Nom|Gender=Fem|Number=Sing|NumForm=Word|NumType=Ord	11	dep:sub	_	_
4	žvelgdama	žvelgti	VERB	Vgh--sf-n--n--	Gender=Fem|Number=Sing|Polarity=Pos	11	dep:adj	_	_
5	į	į	ADP	Sga	AdpType=Prep	7	case	_	_
6	papilnėjusias	papilnėti	VERB	Vgpa-pfannan-p	Gender=Fem|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Act	7	acl	_	_
7	šlaunis	šlaunis	NOUN	Ncfpan-	Case=Acc|Gender=Fem|Number=Plur	4	obj	_	_
8	su	su	ADP	Sgi	AdpType=Prep	9	case	_	_
9	pasibaisėjimu	pasibaisėjimas	NOUN	Ncmsin-	Case=Ins|Gender=Masc|Number=Sing	11	dep:adj	_	_
10	sau	savęs	PRON	Pg-sdn	Case=Nom|Number=Dual|PronType=Tot	11	obj	_	_
11	sakytų	sakyti	VERB	Vgm-3s--n--ns-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|VerbForm=Fin	1	dep:pred_co	_	_
12	"	"	PUNCT	PUNCT	_	14	punct	_	SpaceAfter=No
13	kokios	koks	PRON	Pgfpnn	Case=Nom|PronType=Tot	14	nmod	_	_
14	storos	storas	ADJ	Agpfpnn	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	11	dep:predn_obj	_	_
15	mano	aš	PRON	Pg-sgn	Case=Nom|PronType=Tot	16	nmod	_	_
16	šlaunys	šlaunis	NOUN	Ncfpnn-	Case=Nom|Gender=Fem|Number=Plur	14	dep:sub	_	SpaceAfter=No
17	"	"	PUNCT	PUNCT	_	14	punct	_	SpaceAfter=No
18	,	,	PUNCT	PUNCT	_	1	punct	_	_
19	antroji	antras	ADJ	Mofsnly	Case=Nom|Gender=Fem|Number=Sing|NumForm=Word|NumType=Ord	20	dep:sub	_	_
20	–	–	PUNCT	PUNCT	_	1	punct	_	_
21	"	"	PUNCT	PUNCT	_	24	punct	_	SpaceAfter=No
22	kokios	koks	PRON	Pgfpnn	Case=Nom|PronType=Tot	24	nmod	_	_
23	tvirtos	tvirtas	ADJ	Agpfpnn	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	24	dep:predn_obj_co	_	SpaceAfter=No
24	,	,	PUNCT	PUNCT	_	20	punct	_	_
25	moteriškos	moteriškas	ADJ	Agpfpnn	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	24	dep:predn_obj_co	_	_
26	mano	aš	PRON	Pg-sgn	Case=Nom|PronType=Tot	27	nmod	_	_
27	šlaunys	šlaunis	NOUN	Ncfpnn-	Case=Nom|Gender=Fem|Number=Plur	24	dep:sub	_	SpaceAfter=No
28	"	"	PUNCT	PUNCT	_	24	punct	_	SpaceAfter=No
29	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


