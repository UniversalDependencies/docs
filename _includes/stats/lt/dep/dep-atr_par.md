

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

3 nodes (0%) are attached to their parents as `dep:atr_par`.

3 instances of `dep:atr_par` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 13.

The following 2 pairs of parts of speech are connected with `dep:atr_par`: [lt-pos/CCONJ]()-[lt-pos/NOUN]() (2; 67% instances), [lt-pos/NOUN]()-[lt-pos/NOUN]() (1; 33% instances).


~~~ conllu
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 30 dep:atr_par	color:blue
1	Naujausiomis	naujas	ADJ	Agsfpin	Case=Ins|Degree=Sup|Gender=Fem|Number=Plur	3	amod	_	_
2	politikos	politika	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	_
3	iniciatyvomis	iniciatyva	NOUN	Ncfpin-	Case=Ins|Gender=Fem|Number=Plur	0	root	_	_
4	sukurti	sukurti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	3	ccomp	_	_
5	žinių	žinios	NOUN	Ncfpgn-	Case=Gen|Gender=Fem|Number=Plur	7	nmod	_	_
6	vidaus	vidus	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	_
7	rinką	rinka	NOUN	Ncfsan-	Case=Acc|Gender=Fem|Number=Sing	4	obj	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	9	punct	_	_
9	remiant	remti	VERB	Vgap----n--n--	Polarity=Pos|Tense=Pres	4	dep:adj	_	_
10	tyrėjų	tyrėjas	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	11	nmod	_	_
11	judumą	judumas	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	12	dep:obj_co	_	_
12	ir	ir	CCONJ	Cg	_	9	advmod	_	_
13	geresnių	geras	ADJ	Agcfpgn	Case=Gen|Degree=Cmp|Gender=Fem|Number=Plur	14	amod	_	_
14	sąlygų	sąlyga	NOUN	Ncfpgn-	Case=Gen|Gender=Fem|Number=Plur	26	obj	_	_
15	žinioms	žinios	NOUN	Ncfpdn-	Case=Dat|Gender=Fem|Number=Plur	16	dep:obj_co	_	_
16	ir	ir	CCONJ	Cg	_	18	advmod	_	_
17	technologijoms	technologija	NOUN	Ncfpdn-	Case=Dat|Gender=Fem|Number=Plur	16	dep:obj_co	_	_
18	gauti	gauti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	19	dep:adj_co	_	_
19	bei	bei	CCONJ	Cg	_	14	cc	_	_
20	jas	jis	PRON	Pgfpan	Case=Nom|PronType=Tot	24	obj	_	_
21	skleisti	skleisti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	24	dep:adj_co	_	SpaceAfter=No
22	,	,	PUNCT	PUNCT	_	19	punct	_	_
23	perduoti	perduoti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	24	dep:adj_co	_	_
24	ir	ir	CCONJ	Cg	_	19	cc	_	_
25	naudoti	naudoti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	24	dep:adj_co	_	_
26	kūrimą	kūrimas	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	12	dep:obj_co	_	_
27	(	(	PUNCT	PUNCT	_	30	punct	_	SpaceAfter=No
28	vadinamoji	vadinti	VERB	Vgpp-sfpnynn-p	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	30	acl	_	_
29	penktoji	penktas	ADJ	Mofsnly	Case=Nom|Gender=Fem|Number=Sing|NumForm=Word|NumType=Ord	30	amod	_	_
30	laisvė	laisvė	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	12	dep:atr_par	_	SpaceAfter=No
31	)	)	PUNCT	PUNCT	_	30	punct	_	SpaceAfter=No
32	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 dep:atr_par	color:blue
1	§	§	PUNCT	PUNCT	_	2	punct	_	_
2	2.1.4	2.1.4	NUM	M----d-	NumForm=Digit	0	root	_	SpaceAfter=No
3	.	.	PUNCT	PUNCT	_	2	punct	_	_
4	pagal	pagal	ADP	Sga	AdpType=Prep	10	case	_	_
5	vertinimo	vertinimas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	10	nmod	_	_
6	(	(	PUNCT	PUNCT	_	8	punct	_	SpaceAfter=No
7	2.1.3.6	2.1.3.6	NUM	M----d-	NumForm=Digit	8	nummod	_	_
8	punktas	punktas	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	5	dep:atr_par	_	SpaceAfter=No
9	)	)	PUNCT	PUNCT	_	8	punct	_	_
10	rezultatus	rezultatas	NOUN	Ncmpan-	Case=Acc|Gender=Masc|Number=Plur	11	iobj	_	_
11	parengti	parengti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	2	dep:predv_co	_	_
12	Geros	geras	ADJ	Agpfsgn	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	14	amod	_	_
13	ūkininkavimo	ūkininkavimas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	14	nmod	_	_
14	praktikos	praktika	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	15	nmod	_	_
15	reikalavimų	reikalavimas	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	18	obj	_	_
16	aplinkosaugos	aplinkosauga	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	17	nmod	_	_
17	srityje	sritis	NOUN	Ncfsln-	Case=Loc|Gender=Fem|Number=Sing	18	dep:adj	_	_
18	laikymosi	laikymasis	NOUN	Ncmsgy-	Case=Gen|Gender=Masc|Number=Sing	19	obj	_	_
19	įvertinimo	įvertinimas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	20	nmod	_	_
20	pažymų	pažyma	NOUN	Ncfpgn-	Case=Gen|Gender=Fem|Number=Plur	21	nmod	_	_
21	projektus	projektas	NOUN	Ncmpan-	Case=Acc|Gender=Masc|Number=Plur	11	obj	_	_
22	juos	jis	PRON	Pgmpan	Case=Nom|PronType=Tot	23	obj	_	_
23	pateikti	pateikti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	2	dep:predv_co	_	_
24	atitinkamoms	atitinkamas	ADJ	Agpfpdn	Case=Dat|Degree=Pos|Gender=Fem|Number=Plur	27	amod	_	_
25	RAAD	RAAD	X	Ya	Abbr=Yes	27	nmod	_	_
26	rajonų	rajonas	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	27	nmod	_	_
27	agentūroms	agentūra	NOUN	Ncfpdn-	Case=Dat|Gender=Fem|Number=Plur	23	obj	_	SpaceAfter=No
28	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


