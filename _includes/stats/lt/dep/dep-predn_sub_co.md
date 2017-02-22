

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

7 nodes (0%) are attached to their parents as `dep:predn_sub_co`.

4 instances of `dep:predn_sub_co` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.14285714285714.

The following 6 pairs of parts of speech are connected with `dep:predn_sub_co`: [lt-pos/PUNCT]()-[lt-pos/NOUN]() (2; 29% instances), [lt-pos/CCONJ]()-[lt-pos/NOUN]() (1; 14% instances), [lt-pos/CCONJ]()-[lt-pos/VERB]() (1; 14% instances), [lt-pos/PRON]()-[lt-pos/VERB]() (1; 14% instances), [lt-pos/PUNCT]()-[lt-pos/ADJ]() (1; 14% instances), [lt-pos/PUNCT]()-[lt-pos/VERB]() (1; 14% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 dep:predn_sub_co	color:blue
1	O	o	PART	Qg	_	0	root	_	_
2	kas	kas	PRON	Pg--nn	Case=Nom|PronType=Tot	1	dep:sub	_	_
3	gi	gi	PART	Qg	_	2	advmod:emph	_	_
4	daugiau	daug	ADV	Rgc	Degree=Cmp	1	dep:adj	_	_
5	Lietuvą	Lietuva	PROPN	Npfsang	Case=Acc|Gender=Fem|Number=Sing	1	obj	_	_
6	pasaulyje	pasaulis	NOUN	Ncmsln-	Case=Loc|Gender=Masc|Number=Sing	1	dep:adj	_	SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	9	punct	_	_
8	jei	jei	CCONJ	Cg	_	9	mark	_	_
9	ne	ne	PART	Qg	_	2	advmod:emph	_	_
10	tokie	toks	PRON	Pgmpnn	Case=Nom|PronType=Tot	12	nmod	_	_
11	absurdiški	absurdiškas	ADJ	Agpmpnn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	12	amod	_	_
12	projektai	projektas	NOUN	Ncmpnn-	Case=Nom|Gender=Masc|Number=Plur	13	dep:predn_sub_co	_	SpaceAfter=No
13	,	,	PUNCT	PUNCT	_	9	punct	_	_
14	milijonų	milijonas	NUM	Mcmpgl-	Case=Gen|Gender=Masc|Number=Plur|NumForm=Word|NumType=Card	15	obj	_	_
15	taškymas	taškymas	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	13	dep:predn_sub_co	_	_
16	sunkmečio	sunkmetis	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	17	nmod	_	_
17	metu	metas	NOUN	Ncmsin-	Case=Ins|Gender=Masc|Number=Sing	15	dep:adj	_	SpaceAfter=No
18	?	?	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 55	bgColor:blue
# visual-style 55	fgColor:white
# visual-style 57	bgColor:blue
# visual-style 57	fgColor:white
# visual-style 57 55 dep:predn_sub_co	color:blue
1	Girdžiu	girdėti	VERB	Vgmp1s--n--ni-	Mood=Imp|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	dep:pred_co	_	_
2	šalia	šalia	ADV	Rgp	Degree=Pos	3	dep:adj	_	_
3	miegančio	kas	VERB	Vgpp-smanngn-p	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	4	acl	_	_
4	žmogaus	žmogus	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	_
5	atodūsius	atodūsis	NOUN	Ncmpan-	Case=Acc|Gender=Masc|Number=Plur	1	obj	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	38	punct	_	_
7	girdžiu	girdėti	VERB	Vgmp1s--n--ni-	Mood=Imp|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	dep:pred_co	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	24	punct	_	_
9	kaip	kaip	CCONJ	Cg	_	24	mark	_	_
10	iš	iš	ADP	Sgg	AdpType=Prep	11	case	_	_
11	paežerės	paežerė	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	13	dep:adj_co	_	SpaceAfter=No
12	,	,	PUNCT	PUNCT	_	13	punct	_	_
13	o	o	CCONJ	Cg	_	24	advmod	_	_
14	man	aš	PRON	Pg-sdn	Case=Nom|Number=Dual|PronType=Tot	15	obj	_	_
15	atrodo	atrodyti	VERB	Vgmp3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	13	dep:pred_par	_	SpaceAfter=No
16	,	,	PUNCT	PUNCT	_	18	punct	_	_
17	kad	kad	CCONJ	Cg	_	18	mark	_	_
18	kažkur	kažkur	ADV	Rgp	Degree=Pos	15	dep:adj_co	_	_
19	iš	iš	ADP	Sgg	AdpType=Prep	22	case	_	_
20	mano	aš	PRON	Pg-sgn	Case=Nom|PronType=Tot	21	nmod	_	_
21	gelmių	gelmė	NOUN	Ncfpgn-	Case=Gen|Gender=Fem|Number=Plur	22	nmod	_	_
22	dugno	dugnas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	18	dep:adj	_	SpaceAfter=No
23	,	,	PUNCT	PUNCT	_	18	punct	_	_
24	atsklinda	atsklisti	VERB	Vgmp3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	dep:pred_obj	_	_
25	kaimynų	kaimynas	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	26	nmod	_	_
26	kalės	kalė	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	29	nmod	_	_
27	žemas	žemas	ADJ	Agpmsnn	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	29	amod	_	_
28	duslus	duslus	ADJ	Agpmsnn	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	29	amod	_	_
29	amtelėjimas	amtelėjimas	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	24	dep:sub	_	SpaceAfter=No
30	,	,	PUNCT	PUNCT	_	38	punct	_	_
31	ji	jis	PRON	Pgfsnn	Case=Nom|PronType=Tot	38	dep:sub	_	_
32	laimėjo	laimėti	VERB	Vgma3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|VerbForm=Fin	38	dep:pred_co	_	_
33	gražiausios	gražus	ADJ	Agsfsgn	Case=Gen|Degree=Sup|Gender=Fem|Number=Sing	35	amod	_	_
34	Lietuvos	Lietuva	PROPN	Npfsgng	Case=Gen|Gender=Fem|Number=Sing	35	nmod	_	_
35	niufaunlendės	niufaunlendė	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	36	nmod	_	_
36	titulą	titulas	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	32	obj	_	SpaceAfter=No
37	,	,	PUNCT	PUNCT	_	38	punct	_	_
38	bet	bet	CCONJ	Cg	_	0	root	_	_
39	niekada	niekada	ADV	Rgp	Degree=Pos	40	dep:adj	_	_
40	neatsives	neatsivesti	VERB	Vgmf3s--y--yi-	Mood=Imp|Number=Sing|Person=3|Polarity=Neg|Tense=Fut|VerbForm=Fin	38	dep:pred_co	_	_
41	tokių pat	toks pat	PRON	Pgmpgn	Case=Nom|PronType=Tot	43	nmod	_	_
42	gražių	gražus	ADJ	Agpmpgn	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	43	amod	_	_
43	šunyčių	šunytis	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	40	obj	_	SpaceAfter=No
44	,	,	PUNCT	PUNCT	_	49	punct	_	_
45	nes	nes	CCONJ	Cg	_	49	mark	_	_
46	po	po	ADP	Sgg	AdpType=Prep	48	case	_	_
47	nuodugnių	nuodugnus	ADJ	Agpmpgn	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	48	amod	_	_
48	tyrimų	tyrimas	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	49	dep:adj	_	_
49	išaiškėjo	išaiškėti	VERB	Vgma3---n--ni-	Mood=Imp|Person=3|Polarity=Pos|VerbForm=Fin	40	dep:pred_adj	_	SpaceAfter=No
50	,	,	PUNCT	PUNCT	_	51	punct	_	_
51	kad	kad	CCONJ	Cg	_	49	mark	_	_
52	dubens	dubuo	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	53	nmod	_	_
53	kaulai	kaulas	NOUN	Ncmpnn-	Case=Nom|Gender=Masc|Number=Plur	55	dep:sub	_	_
54	nepakankamai	nepakankamai	ADV	Rgp	Degree=Pos	55	dep:adj	_	_
55	patvarūs	patvarus	ADJ	Agpmpnn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	57	dep:predn_sub_co	_	SpaceAfter=No
56	,	,	PUNCT	PUNCT	_	57	punct	_	_
57	–	–	PUNCT	PUNCT	_	51	punct	_	_
58	gražuolė	gražuolė	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	59	dep:sub	_	_
59	brokuota	brokuoti	VERB	Vgps-sfpnnnn-p	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	57	dep:predn_sub_co	_	SpaceAfter=No
60	...	...	PUNCT	PUNCT	_	38	punct	_	_

~~~


~~~ conllu
# visual-style 59	bgColor:blue
# visual-style 59	fgColor:white
# visual-style 57	bgColor:blue
# visual-style 57	fgColor:white
# visual-style 57 59 dep:predn_sub_co	color:blue
1	Girdžiu	girdėti	VERB	Vgmp1s--n--ni-	Mood=Imp|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	dep:pred_co	_	_
2	šalia	šalia	ADV	Rgp	Degree=Pos	3	dep:adj	_	_
3	miegančio	kas	VERB	Vgpp-smanngn-p	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	4	acl	_	_
4	žmogaus	žmogus	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	_
5	atodūsius	atodūsis	NOUN	Ncmpan-	Case=Acc|Gender=Masc|Number=Plur	1	obj	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	38	punct	_	_
7	girdžiu	girdėti	VERB	Vgmp1s--n--ni-	Mood=Imp|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	dep:pred_co	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	24	punct	_	_
9	kaip	kaip	CCONJ	Cg	_	24	mark	_	_
10	iš	iš	ADP	Sgg	AdpType=Prep	11	case	_	_
11	paežerės	paežerė	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	13	dep:adj_co	_	SpaceAfter=No
12	,	,	PUNCT	PUNCT	_	13	punct	_	_
13	o	o	CCONJ	Cg	_	24	advmod	_	_
14	man	aš	PRON	Pg-sdn	Case=Nom|Number=Dual|PronType=Tot	15	obj	_	_
15	atrodo	atrodyti	VERB	Vgmp3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	13	dep:pred_par	_	SpaceAfter=No
16	,	,	PUNCT	PUNCT	_	18	punct	_	_
17	kad	kad	CCONJ	Cg	_	18	mark	_	_
18	kažkur	kažkur	ADV	Rgp	Degree=Pos	15	dep:adj_co	_	_
19	iš	iš	ADP	Sgg	AdpType=Prep	22	case	_	_
20	mano	aš	PRON	Pg-sgn	Case=Nom|PronType=Tot	21	nmod	_	_
21	gelmių	gelmė	NOUN	Ncfpgn-	Case=Gen|Gender=Fem|Number=Plur	22	nmod	_	_
22	dugno	dugnas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	18	dep:adj	_	SpaceAfter=No
23	,	,	PUNCT	PUNCT	_	18	punct	_	_
24	atsklinda	atsklisti	VERB	Vgmp3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	dep:pred_obj	_	_
25	kaimynų	kaimynas	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	26	nmod	_	_
26	kalės	kalė	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	29	nmod	_	_
27	žemas	žemas	ADJ	Agpmsnn	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	29	amod	_	_
28	duslus	duslus	ADJ	Agpmsnn	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	29	amod	_	_
29	amtelėjimas	amtelėjimas	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	24	dep:sub	_	SpaceAfter=No
30	,	,	PUNCT	PUNCT	_	38	punct	_	_
31	ji	jis	PRON	Pgfsnn	Case=Nom|PronType=Tot	38	dep:sub	_	_
32	laimėjo	laimėti	VERB	Vgma3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|VerbForm=Fin	38	dep:pred_co	_	_
33	gražiausios	gražus	ADJ	Agsfsgn	Case=Gen|Degree=Sup|Gender=Fem|Number=Sing	35	amod	_	_
34	Lietuvos	Lietuva	PROPN	Npfsgng	Case=Gen|Gender=Fem|Number=Sing	35	nmod	_	_
35	niufaunlendės	niufaunlendė	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	36	nmod	_	_
36	titulą	titulas	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	32	obj	_	SpaceAfter=No
37	,	,	PUNCT	PUNCT	_	38	punct	_	_
38	bet	bet	CCONJ	Cg	_	0	root	_	_
39	niekada	niekada	ADV	Rgp	Degree=Pos	40	dep:adj	_	_
40	neatsives	neatsivesti	VERB	Vgmf3s--y--yi-	Mood=Imp|Number=Sing|Person=3|Polarity=Neg|Tense=Fut|VerbForm=Fin	38	dep:pred_co	_	_
41	tokių pat	toks pat	PRON	Pgmpgn	Case=Nom|PronType=Tot	43	nmod	_	_
42	gražių	gražus	ADJ	Agpmpgn	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	43	amod	_	_
43	šunyčių	šunytis	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	40	obj	_	SpaceAfter=No
44	,	,	PUNCT	PUNCT	_	49	punct	_	_
45	nes	nes	CCONJ	Cg	_	49	mark	_	_
46	po	po	ADP	Sgg	AdpType=Prep	48	case	_	_
47	nuodugnių	nuodugnus	ADJ	Agpmpgn	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	48	amod	_	_
48	tyrimų	tyrimas	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	49	dep:adj	_	_
49	išaiškėjo	išaiškėti	VERB	Vgma3---n--ni-	Mood=Imp|Person=3|Polarity=Pos|VerbForm=Fin	40	dep:pred_adj	_	SpaceAfter=No
50	,	,	PUNCT	PUNCT	_	51	punct	_	_
51	kad	kad	CCONJ	Cg	_	49	mark	_	_
52	dubens	dubuo	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	53	nmod	_	_
53	kaulai	kaulas	NOUN	Ncmpnn-	Case=Nom|Gender=Masc|Number=Plur	55	dep:sub	_	_
54	nepakankamai	nepakankamai	ADV	Rgp	Degree=Pos	55	dep:adj	_	_
55	patvarūs	patvarus	ADJ	Agpmpnn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	57	dep:predn_sub_co	_	SpaceAfter=No
56	,	,	PUNCT	PUNCT	_	57	punct	_	_
57	–	–	PUNCT	PUNCT	_	51	punct	_	_
58	gražuolė	gražuolė	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	59	dep:sub	_	_
59	brokuota	brokuoti	VERB	Vgps-sfpnnnn-p	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	57	dep:predn_sub_co	_	SpaceAfter=No
60	...	...	PUNCT	PUNCT	_	38	punct	_	_

~~~


