

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

15 nodes (0%) are attached to their parents as `dep:predn_atr_co`.

8 instances of `dep:predn_atr_co` (53%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 6 pairs of parts of speech are connected with `dep:predn_atr_co`: [lt-pos/CCONJ]()-[lt-pos/ADJ]() (6; 40% instances), [lt-pos/CCONJ]()-[lt-pos/VERB]() (4; 27% instances), [lt-pos/PUNCT]()-[lt-pos/ADJ]() (2; 13% instances), [lt-pos/NOUN]()-[lt-pos/VERB]() (1; 7% instances), [lt-pos/PUNCT]()-[lt-pos/VERB]() (1; 7% instances), [lt-pos/VERB]()-[lt-pos/ADJ]() (1; 7% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 dep:predn_atr_co	color:blue
1	tokiu	toks	PRON	Pgmsin	Case=Nom|PronType=Tot	2	nmod	_	_
2	atveju	atvejis	NOUN	Ncmsin-	Case=Ins|Gender=Masc|Number=Sing	13	dep:adj	_	_
3	frazes	frazė	NOUN	Ncfpan-	Case=Acc|Gender=Fem|Number=Plur	14	obj	_	_
4	„	„	PUNCT	PUNCT	_	6	punct	_	SpaceAfter=No
5	aš	aš	PRON	Pg-snn	Case=Nom|PronType=Tot	6	dep:sub	_	_
6	stora	storas	ADJ	Agpfsnn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	8	dep:predn_atr_co	_	_
7	“	“	PUNCT	PUNCT	_	6	punct	_	SpaceAfter=No
8	ar	ar	CCONJ	Cg	_	3	cc	_	_
9	„	„	PUNCT	PUNCT	_	11	punct	_	SpaceAfter=No
10	aš	aš	PRON	Pg-snn	Case=Nom|PronType=Tot	11	dep:sub	_	_
11	liesa	liesas	ADJ	Agpfsnn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	8	dep:predn_atr_co	_	_
12	"	"	PUNCT	PUNCT	_	11	punct	_	SpaceAfter=No
13	vertėtų	vertėti	VERB	Vgm-3---n--ns-	Mood=Imp|Person=3|Polarity=Pos|VerbForm=Fin	0	root	_	_
14	pataisyti	pataisyti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	13	dep:predv	_	SpaceAfter=No
15	:	:	PUNCT	PUNCT	_	13	punct	_	_
16	„	„	PUNCT	PUNCT	_	18	punct	_	SpaceAfter=No
17	Tu	tu	PRON	Pg-snn	Case=Nom|PronType=Tot	18	dep:sub	_	_
18	manai	manyti	VERB	Vgmp2s--n--ni-	Mood=Imp|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	13	appos	_	SpaceAfter=No
19	,	,	PUNCT	PUNCT	_	24	punct	_	_
20	kad	kad	CCONJ	Cg	_	24	mark	_	_
21	šis	šis	PRON	Pgmsnn	Case=Nom|PronType=Tot	22	nmod	_	_
22	rūbas	rūbas	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	24	dep:sub	_	_
23	tau	tu	PRON	Pg-sdn	Case=Nom|Number=Dual|PronType=Tot	24	obj	_	_
24	netinka	netikti	VERB	Vgmp3s--y--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	18	dep:pred_obj	_	SpaceAfter=No
25	?	?	PUNCT	PUNCT	_	18	punct	_	_
26	“	“	PUNCT	PUNCT	_	18	punct	_	SpaceAfter=No
27	(	(	PUNCT	PUNCT	_	31	punct	_	SpaceAfter=No
28	vietoj	vietoj	ADP	Sgg	AdpType=Prep	31	mark	_	_
29	„	„	PUNCT	PUNCT	_	31	punct	_	SpaceAfter=No
30	Tu	tu	PRON	Pg-snn	Case=Nom|PronType=Tot	31	dep:sub	_	_
31	manai	manyti	VERB	Vgmp2s--n--ni-	Mood=Imp|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	18	dep:pred_obj_par	_	SpaceAfter=No
32	,	,	PUNCT	PUNCT	_	37	punct	_	_
33	kad	kad	CCONJ	Cg	_	37	mark	_	_
34	su	su	ADP	Sgi	AdpType=Prep	36	case	_	_
35	šiuo	šis	PRON	Pgmsin	Case=Nom|PronType=Tot	36	nmod	_	_
36	rūbu	rūbas	NOUN	Ncmsin-	Case=Ins|Gender=Masc|Number=Sing	37	obj	_	_
37	atrodai	atrodyti	VERB	Vgmp2s--n--ni-	Mood=Imp|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	31	dep:pred_obj	_	_
38	stora	storas	ADJ	Agpfsnn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	37	dep:predn	_	SpaceAfter=No
39	?	?	PUNCT	PUNCT	_	31	punct	_	_
40	“	“	PUNCT	PUNCT	_	31	punct	_	SpaceAfter=No
41	)	)	PUNCT	PUNCT	_	31	punct	_	SpaceAfter=No
42	.	.	PUNCT	PUNCT	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 18 dep:predn_atr_co	color:blue
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


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 22 dep:predn_atr_co	color:blue
1	Taip	taip	ADV	Rgp	Degree=Pos	0	root	_	_
2	vaikai	vaikas	NOUN	Ncmpnn-	Case=Nom|Gender=Masc|Number=Plur	1	dep:sub	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	7	punct	_	_
4	kad	kad	CCONJ	Cg	_	7	mark	_	_
5	intymūs	intymus	ADJ	Agpmpnn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	6	amod	_	_
6	santykiai	santykis	NOUN	Ncmpnn-	Case=Nom|Gender=Masc|Number=Plur	7	dep:sub	_	_
7	yra	būti	VERB	Vgmp3p--n--ni-	Mood=Imp|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	dep:pred_obj	_	_
8	dalykas	dalykas	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	7	dep:predn	_	SpaceAfter=No
9	,	,	PUNCT	PUNCT	_	8	punct	_	_
10	kuris	kuris	PRON	Pgmsnn	Case=Nom|PronType=Tot	11	dep:sub	_	_
11	egzistuoja	egzistuoti	VERB	Vgmp3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	13	dep:pred_atr_co	_	SpaceAfter=No
12	,	,	PUNCT	PUNCT	_	8	punct	_	_
13	tačiau	tačiau	CCONJ	Cg	_	8	cc	_	_
14	apie	apie	ADP	Sga	AdpType=Prep	15	case	_	_
15	kurį	kuris	PRON	Pgmsan	Case=Nom|PronType=Tot	17	obj	_	_
16	nepadoru	nepadorus	ADJ	Agpn--n	Degree=Pos|Gender=Neut	18	dep:predn_atr_co	_	_
17	kalbėtis	kalbėtis	VERB	Vgi-----n--y--	Mood=Ind|Polarity=Pos|VerbForm=Fin	16	dep:predv	_	SpaceAfter=No
18	,	,	PUNCT	PUNCT	_	8	punct	_	_
19	kitaip	kitaip	ADV	Rgp	Degree=Pos	20	dep:adj	_	_
20	tariant	tarti	VERB	Vgap----n--n--	Polarity=Pos|Tense=Pres	22	dep:par	_	SpaceAfter=No
21	,	,	PUNCT	PUNCT	_	20	punct	_	_
22	padoru	padorus	ADJ	Agpn--n	Degree=Pos|Gender=Neut	18	dep:predn_atr_co	_	_
23	tylomis	tylomis	ADV	Rgp	Degree=Pos	25	dep:adj	_	_
24	tą	tas	PRON	Pgmsan	Case=Nom|PronType=Tot	25	obj	_	_
25	daryti	daryti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	22	dep:predv	_	SpaceAfter=No
26	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


