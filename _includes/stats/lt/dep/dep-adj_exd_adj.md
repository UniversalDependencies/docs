

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

1 nodes (0%) are attached to their parents as `dep:adj_exd_adj`.

1 instances of `dep:adj_exd_adj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 20.

The following 1 pairs of parts of speech are connected with `dep:adj_exd_adj`: [lt-pos/PUNCT]()-[lt-pos/NOUN]() (1; 100% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 2 dep:adj_exd_adj	color:blue
1	jeigu	jeigu	CCONJ	Cg	_	2	mark	_	_
2	ertmėje	ertmė	NOUN	Ncfsln-	Case=Loc|Gender=Fem|Number=Sing	22	dep:adj_exd_adj	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	2	punct	_	_
4	tai	tai	PART	Qg	_	5	advmod:emph	_	_
5	kas	kas	PRON	Pg--nn	Case=Nom|PronType=Tot	7	dep:sub	_	_
6	ją	jis	PRON	Pgfsan	Case=Nom|PronType=Tot	7	obj	_	_
7	paliko	palikti	VERB	Vgma3---n--ni-	Mood=Imp|Person=3|Polarity=Pos|VerbForm=Fin	22	dep:pred_co	_	_
8	tarp	tarp	ADP	Sgg	AdpType=Prep	12	case	_	_
9	dienos	diena	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	10	dep:atr_co	_	_
10	ir	ir	CCONJ	Cg	_	12	cc	_	_
11	nakties	naktis	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	10	dep:atr_co	_	_
12	būdravimo	būdravimas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	7	obj	_	SpaceAfter=No
13	,	,	PUNCT	PUNCT	_	22	punct	_	_
14	koks	koks	PRON	Pgmsnn	Case=Nom|PronType=Tot	15	nmod	_	_
15	meteoritas	meteoritas	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	16	dep:sub	_	_
16	išmušė	išmušti	VERB	Vgma3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|VerbForm=Fin	22	dep:pred_co	_	_
17	vidurnakčio	vidurnaktis	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	18	nmod	_	_
18	tyloje	tyla	NOUN	Ncfsln-	Case=Loc|Gender=Fem|Number=Sing	20	dep:adj	_	_
19	skaudžiai	skaudžiai	ADV	Rgp	Degree=Pos	20	dep:adj	_	_
20	spengiančią	spengti	VERB	Vgpp-sfannan-p	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	21	acl	_	_
21	skylę	skylė	NOUN	Ncfsan-	Case=Acc|Gender=Fem|Number=Sing	16	obj	_	SpaceAfter=No
22	,	,	PUNCT	PUNCT	_	0	root	_	_
23	iš	iš	ADP	Sgg	AdpType=Prep	24	case	_	_
24	kur	kur	ADV	Rgp	Degree=Pos	26	dep:adj	_	_
25	jis	jis	PRON	Pgmsnn	Case=Nom|PronType=Tot	27	dep:sub	_	_
26	atskrido	atskristi	VERB	Vgma3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|VerbForm=Fin	27	dep:pred_co	_	_
27	ir	ir	CCONJ	Cg	_	22	cc	_	_
28	kur	kur	ADV	Rgp	Degree=Pos	29	dep:adj	_	_
29	nukrito	nukristi	VERB	Vgma3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|VerbForm=Fin	27	dep:pred_co	_	SpaceAfter=No
30	?	?	PUNCT	PUNCT	_	22	punct	_	_

~~~


