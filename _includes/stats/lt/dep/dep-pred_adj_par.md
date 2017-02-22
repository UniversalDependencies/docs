

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

4 nodes (0%) are attached to their parents as `dep:pred_adj_par`.

4 instances of `dep:pred_adj_par` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.25.

The following 1 pairs of parts of speech are connected with `dep:pred_adj_par`: [lt-pos/NOUN]()-[lt-pos/VERB]() (4; 100% instances).


~~~ conllu
# visual-style 50	bgColor:blue
# visual-style 50	fgColor:white
# visual-style 48	bgColor:blue
# visual-style 48	fgColor:white
# visual-style 48 50 dep:pred_adj_par	color:blue
1	"	"	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No
2	Telework	Telework	X	Xf	_	4	nmod	_	SpaceAfter=No
3	"	"	PUNCT	PUNCT	_	2	punct	_	_
4	asociacija	asociacija	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	6	punct	_	_
6	vienijanti	vienyti	VERB	Vgpp-sfannnn-p	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	4	acl	_	_
7	Jungtinės	jungtinis	ADJ	Agpfsgn	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	_
8	Karalystės	karalystė	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	9	nmod	_	_
9	dirbančiuosius	dirbti	VERB	Vgpp-pmanyan-p	Gender=Masc|Number=Plur|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	6	ccomp	_	_
10	namuose	namai	NOUN	Ncmpln-	Case=Loc|Gender=Masc|Number=Plur	9	dep:adj	_	SpaceAfter=No
11	,	,	PUNCT	PUNCT	_	6	punct	_	SpaceAfter=No
12	,	,	PUNCT	PUNCT	_	17	punct	_	_
13	kad	kad	CCONJ	Cg	_	17	mark	_	_
14	toks	toks	PRON	Pgmsnn	Case=Nom|PronType=Tot	16	nmod	_	_
15	darbo	darbas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	16	nmod	_	_
16	stilius	stilius	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	17	dep:sub	_	_
17	yra	būti	VERB	Vgmp3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	dep:pred_obj	_	_
18	ypač	ypač	ADV	Rgp	Degree=Pos	19	dep:adj	_	_
19	naudingas	naudingas	ADJ	Agpmsnn	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	17	dep:predn	_	_
20	žmogui	žmogus	NOUN	Ncmsdn-	Case=Dat|Gender=Masc|Number=Sing	47	dep:obj_co	_	_
21	individualiai	individualiai	ADV	Rgp	Degree=Pos	20	dep:adj	_	_
22	(	(	PUNCT	PUNCT	_	23	punct	_	SpaceAfter=No
23	padeda	padėti	VERB	Vgmp3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	20	dep:pred_adj_par	_	_
24	išlaikyti	išlaikyti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	23	dep:predv	_	_
25	pusiausvyrą	pusiausvyra	NOUN	Ncfsan-	Case=Acc|Gender=Fem|Number=Sing	24	obj	_	_
26	tarp	tarp	ADP	Sgg	AdpType=Prep	28	case	_	_
27	darbo	darbas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	28	dep:obj_co	_	_
28	ir	ir	CCONJ	Cg	_	25	cc	_	_
29	gyvenimo	gyvenimas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	28	dep:obj_co	_	SpaceAfter=No
30	)	)	PUNCT	PUNCT	_	23	punct	_	SpaceAfter=No
31	,	,	PUNCT	PUNCT	_	19	punct	_	_
32	bendruomenei	bendruomenė	NOUN	Ncfsdn-	Case=Dat|Gender=Fem|Number=Sing	47	dep:obj_co	_	_
33	(	(	PUNCT	PUNCT	_	34	punct	_	SpaceAfter=No
34	suteikia	suteikti	VERB	Vgmp3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	32	dep:pred_adj_par	_	_
35	sąlygas	sąlyga	NOUN	Ncfpan-	Case=Acc|Gender=Fem|Number=Plur	34	obj	_	_
36	dažniau	dažnai	ADV	Rgc	Degree=Cmp	37	dep:adj	_	_
37	bendrauti	bendrauti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	35	dep:adj	_	_
38	kaimynams	kaimynas	NOUN	Ncmpdn-	Case=Dat|Gender=Masc|Number=Plur	37	obj	_	SpaceAfter=No
39	)	)	PUNCT	PUNCT	_	34	punct	_	SpaceAfter=No
40	,	,	PUNCT	PUNCT	_	19	punct	_	_
41	visuomenei	visuomenė	NOUN	Ncfsdn-	Case=Dat|Gender=Fem|Number=Sing	47	dep:obj_co	_	_
42	(	(	PUNCT	PUNCT	_	43	punct	_	SpaceAfter=No
43	sutaupo	sutaupyti	VERB	Vgmp3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	41	dep:pred_adj_par	_	_
44	transporto	transportas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	45	nmod	_	_
45	išlaidas	išlaidos	NOUN	Ncfpan-	Case=Acc|Gender=Fem|Number=Plur	43	obj	_	SpaceAfter=No
46	)	)	PUNCT	PUNCT	_	43	punct	_	_
47	bei	bei	CCONJ	Cg	_	19	cc	_	_
48	aplinkai	aplinka	NOUN	Ncfsdn-	Case=Dat|Gender=Fem|Number=Sing	47	dep:obj_co	_	_
49	(	(	PUNCT	PUNCT	_	50	punct	_	SpaceAfter=No
50	sumažėja	sumažėti	VERB	Vgmp3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	48	dep:pred_adj_par	_	_
51	teršalų	teršalai	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	52	nmod	_	_
52	kiekis	kiekis	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	50	dep:sub	_	SpaceAfter=No
53	,	,	PUNCT	PUNCT	_	57	punct	_	_
54	nes	nes	CCONJ	Cg	_	57	mark	_	_
55	žmonės	žmogus	NOUN	Ncmpnn-	Case=Nom|Gender=Masc|Number=Plur	57	dep:sub	_	_
56	rečiau	retai	ADV	Rgc	Degree=Cmp	57	dep:adj	_	_
57	važinėja	važinėti	VERB	Vgmp3p--n--ni-	Mood=Imp|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	50	dep:pred_adj	_	_
58	automobiliais	automobilis	NOUN	Ncmpin-	Case=Ins|Gender=Masc|Number=Plur	57	obj	_	SpaceAfter=No
59	)	)	PUNCT	PUNCT	_	50	punct	_	SpaceAfter=No
60	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


