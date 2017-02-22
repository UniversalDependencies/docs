

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

3 nodes (0%) are attached to their parents as `dep:obj_exd_sub_co`.

2 instances of `dep:obj_exd_sub_co` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.33333333333333.

The following 2 pairs of parts of speech are connected with `dep:obj_exd_sub_co`: [lt-pos/CCONJ]()-[lt-pos/NOUN]() (2; 67% instances), [lt-pos/ADJ]()-[lt-pos/NOUN]() (1; 33% instances).


~~~ conllu
# visual-style 35	bgColor:blue
# visual-style 35	fgColor:white
# visual-style 33	bgColor:blue
# visual-style 33	fgColor:white
# visual-style 33 35 dep:obj_exd_sub_co	color:blue
1	O	o	CCONJ	Cg	_	0	root	_	_
2	meilės	meilė	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	6	obj	_	_
3	kiekvienam	kiekvienas	PRON	Pgmsln	Case=Nom|PronType=Tot	4	nmod	_	_
4	seriale	serialas	NOUN	Ncmsln-	Case=Loc|Gender=Masc|Number=Sing	6	dep:adj	_	_
5	paprastai	paprastas	ADV	Rgp	Degree=Pos	6	dep:adj	_	_
6	būna	būti	VERB	Vgmp3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	dep:pred_co	_	_
7	tiek	tiek	ADV	Rgp	Degree=Pos	6	dep:adj	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	11	punct	_	_
9	kiek	kiek	ADV	Rgp	Degree=Pos	11	dep:adj	_	_
10	vonioj	vonia	NOUN	Ncfsln-	Case=Loc|Gender=Fem|Number=Sing	11	dep:adj	_	_
11	putų	puta	NOUN	Ncfpgn-	Case=Gen|Gender=Fem|Number=Plur	7	dep:predn_adj	_	SpaceAfter=No
12	,	,	PUNCT	PUNCT	_	1	punct	_	_
13	aš	aš	PRON	Pg-snn	Case=Nom|PronType=Tot	16	dep:sub	_	_
14	nuo	nuo	ADP	Sgg	AdpType=Prep	15	case	_	_
15	to	tas	PRON	Pgmsgn	Case=Nom|PronType=Tot	16	obj	_	_
16	nepasidarau	nepasidaryti	VERB	Vgmp1s--y--yi-	Mood=Imp|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin	26	dep:pred_co	_	_
17	geresnė	geras	ADJ	Agcfsnn	Case=Nom|Degree=Cmp|Gender=Fem|Number=Sing	16	dep:predn	_	SpaceAfter=No
18	,	,	PUNCT	PUNCT	_	19	punct	_	_
19	atvirkščiai	atvirkščiai	ADV	Rgp	Degree=Pos	22	dep:par	_	SpaceAfter=No
20	,	,	PUNCT	PUNCT	_	19	punct	_	_
21	mane	aš	PRON	Pg-san	Case=Nom|PronType=Tot	22	obj	_	_
22	ima	imti	VERB	Vgmp3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	26	dep:pred_co	_	_
23	smaugti	smaugti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	22	dep:predv	_	_
24	neapykanta	neapykanta	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	22	dep:sub	_	SpaceAfter=No
25	,	,	PUNCT	PUNCT	_	1	punct	_	_
26	ir	ir	CCONJ	Cg	_	1	cc	_	_
27	baisiausia	baisus	ADJ	Agsn--n	Degree=Sup|Gender=Neut	26	dep:predn_co	_	SpaceAfter=No
28	,	,	PUNCT	PUNCT	_	40	punct	_	_
29	kad	kad	CCONJ	Cg	_	40	mark	_	_
30	ne	ne	PART	Qg	_	31	advmod:emph	_	_
31	serialo	serialas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	32	nmod	_	_
32	herojams	herojus	NOUN	Ncmpdn-	Case=Dat|Gender=Masc|Number=Plur	33	dep:obj_exd_sub_co	_	_
33	ir	ir	CCONJ	Cg	_	40	cc	_	_
34	ne	ne	PART	Qg	_	35	advmod:emph	_	_
35	prodiuseriui	prodiuseris	NOUN	Ncmsdn-	Case=Dat|Gender=Masc|Number=Sing	33	dep:obj_exd_sub_co	_	SpaceAfter=No
36	,	,	PUNCT	PUNCT	_	40	punct	_	_
37	o	o	CCONJ	Cg	_	40	mark	_	_
38	niekuo	niekas	PRON	Pg--in	Case=Nom|PronType=Tot	39	obj	_	_
39	dėtiems	dėti	VERB	Vgps-pmpnndn-p	Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	40	acl	_	_
40	padarams	padaras	NOUN	Ncmpdn-	Case=Dat|Gender=Masc|Number=Plur	27	dep:obj_exd_sub_co	_	SpaceAfter=No
41	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 40	bgColor:blue
# visual-style 40	fgColor:white
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 27 40 dep:obj_exd_sub_co	color:blue
1	O	o	CCONJ	Cg	_	0	root	_	_
2	meilės	meilė	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	6	obj	_	_
3	kiekvienam	kiekvienas	PRON	Pgmsln	Case=Nom|PronType=Tot	4	nmod	_	_
4	seriale	serialas	NOUN	Ncmsln-	Case=Loc|Gender=Masc|Number=Sing	6	dep:adj	_	_
5	paprastai	paprastas	ADV	Rgp	Degree=Pos	6	dep:adj	_	_
6	būna	būti	VERB	Vgmp3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	dep:pred_co	_	_
7	tiek	tiek	ADV	Rgp	Degree=Pos	6	dep:adj	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	11	punct	_	_
9	kiek	kiek	ADV	Rgp	Degree=Pos	11	dep:adj	_	_
10	vonioj	vonia	NOUN	Ncfsln-	Case=Loc|Gender=Fem|Number=Sing	11	dep:adj	_	_
11	putų	puta	NOUN	Ncfpgn-	Case=Gen|Gender=Fem|Number=Plur	7	dep:predn_adj	_	SpaceAfter=No
12	,	,	PUNCT	PUNCT	_	1	punct	_	_
13	aš	aš	PRON	Pg-snn	Case=Nom|PronType=Tot	16	dep:sub	_	_
14	nuo	nuo	ADP	Sgg	AdpType=Prep	15	case	_	_
15	to	tas	PRON	Pgmsgn	Case=Nom|PronType=Tot	16	obj	_	_
16	nepasidarau	nepasidaryti	VERB	Vgmp1s--y--yi-	Mood=Imp|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin	26	dep:pred_co	_	_
17	geresnė	geras	ADJ	Agcfsnn	Case=Nom|Degree=Cmp|Gender=Fem|Number=Sing	16	dep:predn	_	SpaceAfter=No
18	,	,	PUNCT	PUNCT	_	19	punct	_	_
19	atvirkščiai	atvirkščiai	ADV	Rgp	Degree=Pos	22	dep:par	_	SpaceAfter=No
20	,	,	PUNCT	PUNCT	_	19	punct	_	_
21	mane	aš	PRON	Pg-san	Case=Nom|PronType=Tot	22	obj	_	_
22	ima	imti	VERB	Vgmp3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	26	dep:pred_co	_	_
23	smaugti	smaugti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	22	dep:predv	_	_
24	neapykanta	neapykanta	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	22	dep:sub	_	SpaceAfter=No
25	,	,	PUNCT	PUNCT	_	1	punct	_	_
26	ir	ir	CCONJ	Cg	_	1	cc	_	_
27	baisiausia	baisus	ADJ	Agsn--n	Degree=Sup|Gender=Neut	26	dep:predn_co	_	SpaceAfter=No
28	,	,	PUNCT	PUNCT	_	40	punct	_	_
29	kad	kad	CCONJ	Cg	_	40	mark	_	_
30	ne	ne	PART	Qg	_	31	advmod:emph	_	_
31	serialo	serialas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	32	nmod	_	_
32	herojams	herojus	NOUN	Ncmpdn-	Case=Dat|Gender=Masc|Number=Plur	33	dep:obj_exd_sub_co	_	_
33	ir	ir	CCONJ	Cg	_	40	cc	_	_
34	ne	ne	PART	Qg	_	35	advmod:emph	_	_
35	prodiuseriui	prodiuseris	NOUN	Ncmsdn-	Case=Dat|Gender=Masc|Number=Sing	33	dep:obj_exd_sub_co	_	SpaceAfter=No
36	,	,	PUNCT	PUNCT	_	40	punct	_	_
37	o	o	CCONJ	Cg	_	40	mark	_	_
38	niekuo	niekas	PRON	Pg--in	Case=Nom|PronType=Tot	39	obj	_	_
39	dėtiems	dėti	VERB	Vgps-pmpnndn-p	Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	40	acl	_	_
40	padarams	padaras	NOUN	Ncmpdn-	Case=Dat|Gender=Masc|Number=Plur	27	dep:obj_exd_sub_co	_	SpaceAfter=No
41	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


