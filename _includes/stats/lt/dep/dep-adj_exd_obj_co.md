

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

2 nodes (0%) are attached to their parents as `dep:adj_exd_obj_co`.

2 instances of `dep:adj_exd_obj_co` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.

The following 2 pairs of parts of speech are connected with `dep:adj_exd_obj_co`: [lt-pos/NOUN]()-[lt-pos/NOUN]() (1; 50% instances), [lt-pos/VERB]()-[lt-pos/NOUN]() (1; 50% instances).


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 23 dep:adj_exd_obj_co	color:blue
1	Esi	būti	VERB	Vgmp2s--n--ni-	Mood=Imp|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
2	nežinai	nežinoti	VERB	Vgmp2s--y--ni-	Mood=Imp|Number=Sing|Person=2|Polarity=Neg|Tense=Pres|VerbForm=Fin	1	dep:pred_co	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	35	punct	_	_
4	ar	ar	CCONJ	Cg	_	8	mark	_	_
5	tai	tai	PART	Qg	_	6	advmod:emph	_	_
6	tave	tu	PRON	Pg-san	Case=Nom|PronType=Tot	8	obj	_	_
7	kas nors	kas nors	PRON	Pg--gn	Case=Nom|PronType=Tot	8	dep:sub	_	_
8	sviedė	sviesti	VERB	Vgma3---n--ni-	Mood=Imp|Person=3|Polarity=Pos|VerbForm=Fin	35	dep:pred_obj_co	_	_
9	iš	iš	ADP	Sgg	AdpType=Prep	10	case	_	_
10	aukštybių	aukštybė	NOUN	Ncfpgn-	Case=Gen|Gender=Fem|Number=Plur	8	dep:adj	_	_
11	(	(	PUNCT	PUNCT	_	12	punct	_	SpaceAfter=No
12	vis dėlto	vis dėlto	CCONJ	Cg	_	8	advmod	_	_
13	norėtųsi	norėtis	VERB	Vgm-3---n--ys-	Mood=Imp|Person=3|Polarity=Pos|VerbForm=Fin	12	dep:pred_co	_	SpaceAfter=No
14	,	,	PUNCT	PUNCT	_	17	punct	_	_
15	kad	kad	CCONJ	Cg	_	17	mark	_	_
16	iš	iš	ADP	Sgg	AdpType=Prep	17	case	_	_
17	aukštybių	aukštybė	NOUN	Ncfpgn-	Case=Gen|Gender=Fem|Number=Plur	13	dep:adj_exd_obj_co	_	SpaceAfter=No
18	,	,	PUNCT	PUNCT	_	17	punct	_	_
19	o	o	CCONJ	Cg	_	17	mark	_	_
20	ne	ne	PART	Qg	_	23	advmod:emph	_	_
21	iš	iš	ADP	Sgg	AdpType=Prep	23	case	_	_
22	tamsos	tamsa	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	23	nmod	_	_
23	gelmių	gelmė	NOUN	Ncfpgn-	Case=Gen|Gender=Fem|Number=Plur	17	dep:adj_exd_obj_co	_	SpaceAfter=No
24	)	)	PUNCT	PUNCT	_	12	punct	_	_
25	netyčia	netyčia	ADV	Rgp	Degree=Pos	27	dep:adj_co	_	SpaceAfter=No
26	,	,	PUNCT	PUNCT	_	27	punct	_	_
27	o	o	CCONJ	Cg	_	8	advmod	_	_
28	gal	gal	PART	Qg	_	29	advmod:emph	_	_
29	tyčia	tyčia	ADV	Rgp	Degree=Pos	27	dep:adj_co	_	SpaceAfter=No
30	,	,	PUNCT	PUNCT	_	8	punct	_	_
31	suardydamas	suardyti	VERB	Vgh--sm-n--n--	Gender=Masc|Number=Sing|Polarity=Pos	8	dep:adj	_	_
32	visus	visas	PRON	Pgmpan	Case=Nom|PronType=Tot	34	nmod	_	_
33	kosmoso	kosmosas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	34	nmod	_	_
34	sluoksnius	sluoksnis	NOUN	Ncmpan-	Case=Acc|Gender=Masc|Number=Plur	31	obj	_	SpaceAfter=No
35	,	,	PUNCT	PUNCT	_	2	punct	_	_
36	ar	ar	CCONJ	Cg	_	38	mark	_	_
37	pats	pats	PRON	Pgmsnn	Case=Nom|PronType=Tot	38	nmod	_	_
38	Visagalis	visagalis	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	35	dep:sub	_	SpaceAfter=No
39	,	,	PUNCT	PUNCT	_	40	punct	_	_
40	užtaisęs	užtaisyti	VERB	Vgpa-smannnn-p	Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Act	38	dep:adj	_	_
41	tavimi	tu	PRON	Pg-sin	Case=Nom|PronType=Tot	40	iobj	_	_
42	savo	savęs	PRON	Pg--gn	Case=Nom|PronType=Tot	43	nmod	_	_
43	patrankėlę	patrankėlė	NOUN	Ncfsan-	Case=Acc|Gender=Fem|Number=Sing	40	obj	_	SpaceAfter=No
44	,	,	PUNCT	PUNCT	_	40	punct	_	_
45	pasismagino	pasismaginti	VERB	Vgma3s--n--yi-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|VerbForm=Fin	38	dep:pred_obj_co	_	_
46	ir	ir	CCONJ	Cg	_	38	mark	_	_
47	dabar	dabar	ADV	Rgp	Degree=Pos	48	dep:adj	_	_
48	stebi	stebėti	VERB	Vgmp3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	38	dep:pred_obj_co	_	SpaceAfter=No
49	,	,	PUNCT	PUNCT	_	52	punct	_	_
50	kaip	kaip	CCONJ	Cg	_	51	mark	_	_
51	plūduriuoji	plūduriuoti	VERB	Vgmp2s--n--ni-	Mood=Imp|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	52	dep:pred_obj_co	_	SpaceAfter=No
52	,	,	PUNCT	PUNCT	_	48	punct	_	_
53	kaip	kaip	CCONJ	Cg	_	54	mark	_	_
54	mėgini	mėginti	VERB	Vgmp2s--n--ni-	Mood=Imp|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	52	dep:pred_obj_co	_	_
55	susigaudyti	susigaudyti	VERB	Vgi-----n--y--	Mood=Ind|Polarity=Pos|VerbForm=Fin	54	dep:predv	_	_
56	spiralinėje	spiralinis	ADJ	Agpfsln	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	59	amod	_	_
57	Jo	jis	PRON	Pgmsgn	Case=Nom|PronType=Tot	58	nmod	_	_
58	galaktikos	galaktika	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	59	nmod	_	_
59	sistemoje	sistema	NOUN	Ncfsln-	Case=Loc|Gender=Fem|Number=Sing	55	dep:adj	_	SpaceAfter=No
60	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 17 dep:adj_exd_obj_co	color:blue
1	Esi	būti	VERB	Vgmp2s--n--ni-	Mood=Imp|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
2	nežinai	nežinoti	VERB	Vgmp2s--y--ni-	Mood=Imp|Number=Sing|Person=2|Polarity=Neg|Tense=Pres|VerbForm=Fin	1	dep:pred_co	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	35	punct	_	_
4	ar	ar	CCONJ	Cg	_	8	mark	_	_
5	tai	tai	PART	Qg	_	6	advmod:emph	_	_
6	tave	tu	PRON	Pg-san	Case=Nom|PronType=Tot	8	obj	_	_
7	kas nors	kas nors	PRON	Pg--gn	Case=Nom|PronType=Tot	8	dep:sub	_	_
8	sviedė	sviesti	VERB	Vgma3---n--ni-	Mood=Imp|Person=3|Polarity=Pos|VerbForm=Fin	35	dep:pred_obj_co	_	_
9	iš	iš	ADP	Sgg	AdpType=Prep	10	case	_	_
10	aukštybių	aukštybė	NOUN	Ncfpgn-	Case=Gen|Gender=Fem|Number=Plur	8	dep:adj	_	_
11	(	(	PUNCT	PUNCT	_	12	punct	_	SpaceAfter=No
12	vis dėlto	vis dėlto	CCONJ	Cg	_	8	advmod	_	_
13	norėtųsi	norėtis	VERB	Vgm-3---n--ys-	Mood=Imp|Person=3|Polarity=Pos|VerbForm=Fin	12	dep:pred_co	_	SpaceAfter=No
14	,	,	PUNCT	PUNCT	_	17	punct	_	_
15	kad	kad	CCONJ	Cg	_	17	mark	_	_
16	iš	iš	ADP	Sgg	AdpType=Prep	17	case	_	_
17	aukštybių	aukštybė	NOUN	Ncfpgn-	Case=Gen|Gender=Fem|Number=Plur	13	dep:adj_exd_obj_co	_	SpaceAfter=No
18	,	,	PUNCT	PUNCT	_	17	punct	_	_
19	o	o	CCONJ	Cg	_	17	mark	_	_
20	ne	ne	PART	Qg	_	23	advmod:emph	_	_
21	iš	iš	ADP	Sgg	AdpType=Prep	23	case	_	_
22	tamsos	tamsa	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	23	nmod	_	_
23	gelmių	gelmė	NOUN	Ncfpgn-	Case=Gen|Gender=Fem|Number=Plur	17	dep:adj_exd_obj_co	_	SpaceAfter=No
24	)	)	PUNCT	PUNCT	_	12	punct	_	_
25	netyčia	netyčia	ADV	Rgp	Degree=Pos	27	dep:adj_co	_	SpaceAfter=No
26	,	,	PUNCT	PUNCT	_	27	punct	_	_
27	o	o	CCONJ	Cg	_	8	advmod	_	_
28	gal	gal	PART	Qg	_	29	advmod:emph	_	_
29	tyčia	tyčia	ADV	Rgp	Degree=Pos	27	dep:adj_co	_	SpaceAfter=No
30	,	,	PUNCT	PUNCT	_	8	punct	_	_
31	suardydamas	suardyti	VERB	Vgh--sm-n--n--	Gender=Masc|Number=Sing|Polarity=Pos	8	dep:adj	_	_
32	visus	visas	PRON	Pgmpan	Case=Nom|PronType=Tot	34	nmod	_	_
33	kosmoso	kosmosas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	34	nmod	_	_
34	sluoksnius	sluoksnis	NOUN	Ncmpan-	Case=Acc|Gender=Masc|Number=Plur	31	obj	_	SpaceAfter=No
35	,	,	PUNCT	PUNCT	_	2	punct	_	_
36	ar	ar	CCONJ	Cg	_	38	mark	_	_
37	pats	pats	PRON	Pgmsnn	Case=Nom|PronType=Tot	38	nmod	_	_
38	Visagalis	visagalis	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	35	dep:sub	_	SpaceAfter=No
39	,	,	PUNCT	PUNCT	_	40	punct	_	_
40	užtaisęs	užtaisyti	VERB	Vgpa-smannnn-p	Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Act	38	dep:adj	_	_
41	tavimi	tu	PRON	Pg-sin	Case=Nom|PronType=Tot	40	iobj	_	_
42	savo	savęs	PRON	Pg--gn	Case=Nom|PronType=Tot	43	nmod	_	_
43	patrankėlę	patrankėlė	NOUN	Ncfsan-	Case=Acc|Gender=Fem|Number=Sing	40	obj	_	SpaceAfter=No
44	,	,	PUNCT	PUNCT	_	40	punct	_	_
45	pasismagino	pasismaginti	VERB	Vgma3s--n--yi-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|VerbForm=Fin	38	dep:pred_obj_co	_	_
46	ir	ir	CCONJ	Cg	_	38	mark	_	_
47	dabar	dabar	ADV	Rgp	Degree=Pos	48	dep:adj	_	_
48	stebi	stebėti	VERB	Vgmp3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	38	dep:pred_obj_co	_	SpaceAfter=No
49	,	,	PUNCT	PUNCT	_	52	punct	_	_
50	kaip	kaip	CCONJ	Cg	_	51	mark	_	_
51	plūduriuoji	plūduriuoti	VERB	Vgmp2s--n--ni-	Mood=Imp|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	52	dep:pred_obj_co	_	SpaceAfter=No
52	,	,	PUNCT	PUNCT	_	48	punct	_	_
53	kaip	kaip	CCONJ	Cg	_	54	mark	_	_
54	mėgini	mėginti	VERB	Vgmp2s--n--ni-	Mood=Imp|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	52	dep:pred_obj_co	_	_
55	susigaudyti	susigaudyti	VERB	Vgi-----n--y--	Mood=Ind|Polarity=Pos|VerbForm=Fin	54	dep:predv	_	_
56	spiralinėje	spiralinis	ADJ	Agpfsln	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	59	amod	_	_
57	Jo	jis	PRON	Pgmsgn	Case=Nom|PronType=Tot	58	nmod	_	_
58	galaktikos	galaktika	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	59	nmod	_	_
59	sistemoje	sistema	NOUN	Ncfsln-	Case=Loc|Gender=Fem|Number=Sing	55	dep:adj	_	SpaceAfter=No
60	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


