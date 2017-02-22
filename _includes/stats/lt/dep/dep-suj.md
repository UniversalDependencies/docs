

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co]().

1 nodes (0%) are attached to their parents as `dep:suj`.

1 instances of `dep:suj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 1 pairs of parts of speech are connected with `dep:suj`: [lt-pos/VERB]()-[lt-pos/PRON]() (1; 100% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 11 dep:suj	color:blue
1	Po	po	ADP	Sgg	AdpType=Prep	2	case	_	_
2	to	tas	PRON	Pgmsgn	Case=Nom|PronType=Tot	5	iobj	_	_
3	Vilniaus	Vilnius	PROPN	Npmsgng	Case=Gen|Gender=Masc|Number=Sing	4	nmod	_	_
4	prekyba	prekyba	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	5	dep:sub	_	_
5	apkaltino	apkaltinti	VERB	Vgma3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|VerbForm=Fin	0	root	_	_
6	D	D.	X	Ys	Abbr=Yes	8	nmod	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	6	punct	_	_
8	Mockų	Mockus	PROPN	Npmsans	Case=Acc|Gender=Masc|Number=Sing	5	obj	_	SpaceAfter=No
9	,	,	PUNCT	PUNCT	_	13	punct	_	_
10	kad	kad	PART	Qg	_	13	mark	_	_
11	šis	šis	PRON	Pgmsnn	Case=Nom|PronType=Tot	13	dep:suj	_	_
12	neva	neva	PART	Qg	_	13	advmod:emph	_	_
13	siekia	siekia	VERB	Vgmp3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	5	dep:pred_obj	_	_
14	sužlugdyti	sužlugdyti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	13	ccomp	_	_
15	nacionalinio	nacionalinis	ADJ	Agpmsgn	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	16	amod	_	_
16	investuotojo	investuotojas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	17	nmod	_	_
17	formavimą	formavimas	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	14	obj	_	_
18	pasklido	pasklisti	VERB	Vgma3p--n--ni-	Mood=Imp|Number=Plur|Person=3|Polarity=Pos|VerbForm=Fin	5	dep:pred_co	_	_
19	gandai	gandas	NOUN	Ncmpnn-	Case=Nom|Gender=Masc|Number=Plur	18	dep:sub	_	SpaceAfter=No
20	,	,	PUNCT	PUNCT	_	33	punct	_	_
21	kad	kad	CCONJ	Cg	_	33	mark	_	_
22	„	„	PUNCT	PUNCT	_	24	punct	_	SpaceAfter=No
23	MG	MG	X	Ya	Abbr=Yes	24	nmod	_	_
24	Baltic	Baltic	X	Xf	_	26	obj	_	_
25	“	“	PUNCT	PUNCT	_	24	punct	_	SpaceAfter=No
26	priklausančio	priklausyti	VERB	Vgpp-smanngn-p	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	30	acl	_	_
27	alkoholio	alkoholis	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	28	nmod	_	_
28	gamintojo	gamintojas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	30	nmod	_	_
29	„	„	PUNCT	PUNCT	_	30	punct	_	SpaceAfter=No
30	Stumbro	Stumbras	PROPN	Npmpgng	Case=Gen|Gender=Masc|Number=Plur	32	nmod	_	_
31	“	“	PUNCT	PUNCT	_	30	punct	_	SpaceAfter=No
32	produkcijos	produkcija	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	34	obj	_	_
33	gali	galėti	VERB	Vgmp3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	19	dep:pred_atr	_	_
34	nelikti	nelikti	VERB	Vgi-----y--n--	Mood=Ind|Polarity=Neg|VerbForm=Fin	33	dep:predv	_	_
35	„	„	PUNCT	PUNCT	_	37	punct	_	SpaceAfter=No
36	Vilniaus	Vilnius	PROPN	Npmsgng	Case=Gen|Gender=Masc|Number=Sing	37	nmod	_	_
37	 prekybos	prekyba	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	39	nmod	_	_
38	“	“	PUNCT	PUNCT	_	37	punct	_	SpaceAfter=No
39	tinkle	tinklas	NOUN	Ncmsln-	Case=Loc|Gender=Masc|Number=Sing	34	dep:adj	_	_
40	„	„	PUNCT	PUNCT	_	41	punct	_	SpaceAfter=No
41	Maxima	Maxima	PROPN	Npfsnn-	Case=Nom|Gender=Fem|Number=Sing	39	nmod	_	_
42	“	“	PUNCT	PUNCT	_	41	punct	_	SpaceAfter=No
43	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


