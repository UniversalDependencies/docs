

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

2 nodes (0%) are attached to their parents as `dep:obj_atr`.

1 instances of `dep:obj_atr` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `dep:obj_atr`: [lt-pos/CCONJ]()-[lt-pos/NOUN]() (2; 100% instances).


~~~ conllu
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 30 31 dep:obj_atr	color:blue
1	Lyg	lyg	CCONJ	Cg	_	4	mark	_	_
2	kokie	koks	PRON	Pgmpnn	Case=Nom|PronType=Tot	4	nmod	_	_
3	paraleliniai	paralelinis	ADJ	Agpmpnn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	4	amod	_	_
4	bėgiai	bėgis	NOUN	Ncmpnn-	Case=Nom|Gender=Masc|Number=Plur	6	dep:adj	_	_
5	jos	jis	PRON	Pgfpnn	Case=Nom|PronType=Tot	6	dep:sub	_	_
6	driekiasi	driektis	VERB	Vgmp3p--n--yi-	Mood=Imp|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
7	šalia	šalia	ADP	Sgg	AdpType=Prep	10	case	_	_
8	tikrojo	tikras	ADJ	Agpmsgy	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	9	amod	_	_
9	gyvenimo	gyvenimas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	10	nmod	_	_
10	geležinkelio	geležinkelis	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	6	obj	_	SpaceAfter=No
11	,	,	PUNCT	PUNCT	_	6	punct	_	_
12	niekas	niekas	PRON	Pg--nn	Case=Nom|PronType=Tot	14	dep:sub	_	_
13	dar	dar	PART	Qg	_	14	advmod:emph	_	_
14	nematė	nematyti	VERB	Vgma3---y--ni-	Mood=Imp|Person=3|Polarity=Neg|VerbForm=Fin	25	dep:pred_co	_	_
15	jais	jis	PRON	Pgmpin	Case=Nom|PronType=Tot	16	obj	_	_
16	važiuojančio	važiuoti	VERB	Vgpp-smanngn-p	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	17	acl	_	_
17	traukinio	traukinys	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	14	obj	_	SpaceAfter=No
18	,	,	PUNCT	PUNCT	_	6	punct	_	_
19	niekas	niekas	PRON	Pg--nn	Case=Nom|PronType=Tot	20	dep:sub	_	_
20	nepaliko	nepalikti	VERB	Vgma3---y--ni-	Mood=Imp|Person=3|Polarity=Neg|VerbForm=Fin	25	dep:pred_co	_	_
21	tarp	tarp	ADP	Sgg	AdpType=Prep	22	case	_	_
22	bėgių	bėgis	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	20	dep:adj	_	_
23	garuojančios	garuoti	VERB	Vgpp-sfanngn-p	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	24	acl	_	_
24	krūvelės	krūvelė	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	20	obj	_	_
25	ir	ir	CCONJ	Cg	_	6	cc	_	_
26	neišmetė	neišmesti	VERB	Vgma3---y--ni-	Mood=Imp|Person=3|Polarity=Neg|VerbForm=Fin	25	dep:pred_co	_	_
27	iš	iš	ADP	Sgg	AdpType=Prep	28	case	_	_
28	tambūro	tambūras	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	26	obj	_	_
29	butelio	butelis	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	30	dep:obj_atr	_	_
30	ar	ar	CCONJ	Cg	_	26	advmod	_	_
31	palydovo	palydovas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	30	dep:obj_atr	_	SpaceAfter=No
32	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


