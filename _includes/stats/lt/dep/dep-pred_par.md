

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

16 nodes (0%) are attached to their parents as `dep:pred_par`.

12 instances of `dep:pred_par` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.375.

The following 6 pairs of parts of speech are connected with `dep:pred_par`: [lt-pos/VERB]()-[lt-pos/VERB]() (8; 50% instances), [lt-pos/CCONJ]()-[lt-pos/VERB]() (3; 19% instances), [lt-pos/NOUN]()-[lt-pos/VERB]() (2; 13% instances), [lt-pos/ADJ]()-[lt-pos/VERB]() (1; 6% instances), [lt-pos/ADV]()-[lt-pos/VERB]() (1; 6% instances), [lt-pos/PRON]()-[lt-pos/VERB]() (1; 6% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 dep:pred_par	color:blue
1	,	,	PUNCT	PUNCT	_	2	punct	_	_
2	sutikite	sutikti	VERB	Vgm-2p--n--nm-	Mood=Imp|Number=Plur|Person=2|Polarity=Pos|VerbForm=Fin	7	dep:pred_par	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	2	punct	_	_
4	retai	retai	ADV	Rgp	Degree=Pos	7	dep:adj	_	_
5	tuos	tas	PRON	Pgmpan	Case=Nom|PronType=Tot	6	nmod	_	_
6	pažadus	pažadas	NOUN	Ncmpan-	Case=Acc|Gender=Masc|Number=Plur	7	obj	_	_
7	tesime	tesėti	VERB	Vgmp1p--n--ni-	Mood=Imp|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
8	.	.	PUNCT	PUNCT	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 26 dep:pred_par	color:blue
1	Vadinasi	vadintis	VERB	Vgmp3---n--yi-	Mood=Imp|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	1	punct	_	_
3	jis	jis	PRON	Pgmsnn	Case=Nom|PronType=Tot	1	dep:sub	_	_
4	nuolat	nuolat	ADV	Rgp	Degree=Pos	1	dep:adj	_	_
5	kažkaip	kažkaip	ADV	Rgp	Degree=Pos	1	dep:adj	_	_
6	(	(	PUNCT	PUNCT	_	10	punct	_	SpaceAfter=No
7	ką	kas	PRON	Pg--an	Case=Nom|PronType=Tot	10	obj	_	_
8	tėvai	tėvai	NOUN	Ncmpnn-	Case=Nom|Gender=Masc|Number=Plur	10	dep:sub	_	_
9	ir	ir	PART	Qg	_	10	advmod:emph	_	_
10	pastebi	pastebėti	VERB	Vgmp3p--n--ni-	Mood=Imp|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	5	dep:pred_par	_	SpaceAfter=No
11	)	)	PUNCT	PUNCT	_	10	punct	_	SpaceAfter=No
12	,	,	PUNCT	PUNCT	_	13	punct	_	_
13	priklausomai	priklausomai	ADV	Rgp	Degree=Pos	1	dep:adj	_	_
14	nuo	nuo	ADP	Sgg	AdpType=Prep	15	case	_	_
15	to	tas	PRON	Pgmsgn	Case=Nom|PronType=Tot	13	obj	_	SpaceAfter=No
16	,	,	PUNCT	PUNCT	_	15	punct	_	_
17	kaip	kaip	ADV	Rgp	Degree=Pos	18	dep:adj	_	_
18	jaučiasi	jaustis	VERB	Vgmp3s--n--yi-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	19	dep:pred_obj_co	_	_
19	ir	ir	CCONJ	Cg	_	15	cc	_	_
20	ką	kas	PRON	Pg--an	Case=Nom|PronType=Tot	21	obj	_	_
21	išgyvena	išgyventi	VERB	Vgmp3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	19	dep:pred_obj_co	_	_
22	(	(	PUNCT	PUNCT	_	26	punct	_	SpaceAfter=No
23	apie	apie	ADP	Sga	AdpType=Prep	24	case	_	_
24	tai	tas	PRON	Pgn--n	Case=Nom|PronType=Tot	27	obj	_	_
25	tėvai	tėvai	NOUN	Ncmpnn-	Case=Nom|Gender=Masc|Number=Plur	26	dep:sub	_	_
26	gali	galėti	VERB	Vgmp3p--n--ni-	Mood=Imp|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	19	dep:pred_par	_	_
27	numanyti	numanyti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	26	dep:predv	_	SpaceAfter=No
28	)	)	PUNCT	PUNCT	_	26	punct	_	SpaceAfter=No
29	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 24 dep:pred_par	color:blue
1	Feminizmo 	feminizmas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	2	nmod	_	_
2	ekskursuose	ekskursas	NOUN	Ncmpln-	Case=Loc|Gender=Masc|Number=Plur	0	root	_	_
3	viena	vienas	PRON	Pgfsnn	Case=Nom|PronType=Tot	5	nmod	_	_
4	protinga	protingas	ADJ	Agpfsnn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	5	amod	_	_
5	esybė	esybė	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	2	dep:sub	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	17	punct	_	_
7	kad	kad	CCONJ	Cg	_	17	mark	_	_
8	moters	moteris	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	12	nmod	_	_
9	psichinės	psichinis	ADJ	Agpfsgn	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	10	dep:atr_co	_	_
10	bei	bei	CCONJ	Cg	_	12	cc	_	_
11	fizinės	fizinis	ADJ	Agpfsgn	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	10	dep:atr_co	_	_
12	sandaros	sandara	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	13	nmod	_	_
13	ypatybes	ypatybė	NOUN	Ncfpan-	Case=Acc|Gender=Fem|Number=Plur	14	dep:obj_co	_	_
14	ir	ir	CCONJ	Cg	_	17	advmod	_	_
15	asmenybės	asmenybė	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	16	nmod	_	_
16	kitoniškumą	kitoniškumas	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	14	dep:obj_co	_	_
17	lemia	lemti	VERB	Vgmp3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	2	dep:pred_obj	_	_
18	tam tikrų	tam tikras	PRON	Pgmpgn	Case=Nom|PronType=Tot	19	nmod	_	_
19	organų	organas	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	20	nmod	_	_
20	sankirta	sankirta	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	17	dep:sub	_	_
21	(	(	PUNCT	PUNCT	_	24	punct	_	SpaceAfter=No
22	kokių	koks	PRON	Pgmpgn	Case=Nom|PronType=Tot	24	obj	_	SpaceAfter=No
23	,	,	PUNCT	PUNCT	_	22	punct	_	_
24	nesakysiu	nesakyti	VERB	Vgmf1s--y--ni-	Mood=Imp|Number=Sing|Person=1|Polarity=Neg|Tense=Fut|VerbForm=Fin	19	dep:pred_par	_	SpaceAfter=No
25	,	,	PUNCT	PUNCT	_	27	punct	_	_
26	nes	nes	CCONJ	Cg	_	27	mark	_	_
27	droviuosi	drovėtis	VERB	Vgmp1s--n--yi-	Mood=Imp|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	24	dep:pred_adj	_	_
28	-	-	PUNCT	PUNCT	_	27	punct	_	_
29	užaugau	užaugti	VERB	Vgma1s--n--ni-	Mood=Imp|Number=Sing|Person=1|Polarity=Pos|VerbForm=Fin	28	dep:pred_adj	_	_
30	gėdingo	gėdingas	ADJ	Agpmsgn	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	31	amod	_	_
31	patriarchato	patriarchatas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	32	nmod	_	_
32	sąlygomis	sąlyga	NOUN	Ncfpin-	Case=Ins|Gender=Fem|Number=Plur	29	dep:adj	_	SpaceAfter=No
33	)	)	PUNCT	PUNCT	_	24	punct	_	SpaceAfter=No
34	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


