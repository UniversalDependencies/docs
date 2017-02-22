

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

1 nodes (0%) are attached to their parents as `dep:predv_sub`.

1 instances of `dep:predv_sub` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.

The following 1 pairs of parts of speech are connected with `dep:predv_sub`: [lt-pos/ADJ]()-[lt-pos/VERB]() (1; 100% instances).


~~~ conllu
# visual-style 34	bgColor:blue
# visual-style 34	fgColor:white
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 29 34 dep:predv_sub	color:blue
1	Tėvas	tėvas	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	2	dep:sub	_	_
2	pradingo	pradingti	VERB	Vgma3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|VerbForm=Fin	0	root	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	2	punct	_	_
4	Mažuolis	Mažuolis	PROPN	Npmsnns	Case=Nom|Gender=Masc|Number=Sing	6	dep:sub	_	_
5	mėgaudamasis	mėgautis	VERB	Vgh--sm-n--y--	Gender=Masc|Number=Sing|Polarity=Pos	6	dep:adj	_	_
6	pradėjo	pradėti	VERB	Vgma3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|VerbForm=Fin	2	dep:pred_co	_	_
7	man	aš	PRON	Pg-sdn	Case=Nom|Number=Dual|PronType=Tot	8	obj	_	_
8	pasakoti	pasakoti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	6	ccomp	_	SpaceAfter=No
9	,	,	PUNCT	PUNCT	_	17	punct	_	_
10	kaip	kaip	CCONJ	Cg	_	17	mark	_	_
11	jį	jis	PRON	Pgmsan	Case=Nom|PronType=Tot	17	obj	_	SpaceAfter=No
12	,	,	PUNCT	PUNCT	_	13	punct	_	_
13	mažytį	mažytis	ADJ	Agpmsan	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	11	amod	_	SpaceAfter=No
14	,	,	PUNCT	PUNCT	_	13	punct	_	_
15	kitados	kitados	ADV	Rgp	Degree=Pos	17	dep:adj	_	_
16	irgi	irgi	PART	Qg	_	17	advmod:emph	_	_
17	kankindavo	kankinti	VERB	Vgmq3---n--ni-	Mood=Imp|Person=3|Polarity=Pos|VerbForm=Fin	8	dep:pred_obj	_	_
18	avikirpėm	avikirpis	ADJ	Agpfpin	Case=Ins|Degree=Pos|Gender=Fem|Number=Plur	19	amod	_	_
19	žirklėm	žirklės	NOUN	Ncfpin-	Case=Ins|Gender=Fem|Number=Plur	17	obj	_	SpaceAfter=No
20	,	,	PUNCT	PUNCT	_	24	punct	_	_
21	ant	ant	ADP	Sgg	AdpType=Prep	22	case	_	_
22	galvos	galva	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	24	dep:adj	_	_
23	dar	dar	PART	Qg	_	24	advmod:emph	_	_
24	užvožę	užvožti	VERB	Vgpa-pmannnn-p	Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Act	17	dep:adj	_	_
25	dubenėlį	dubenėlis	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	24	obj	_	SpaceAfter=No
26	,	,	PUNCT	PUNCT	_	28	punct	_	_
27	kad	kad	CCONJ	Cg	_	28	mark	_	_
28	būtų	būti	VERB	Vgm-3---n--ns-	Mood=Imp|Person=3|Polarity=Pos|VerbForm=Fin	24	dep:pred_adj	_	_
29	aišku	aiškus	ADJ	Agpn--n	Degree=Pos|Gender=Neut	28	dep:predn	_	SpaceAfter=No
30	,	,	PUNCT	PUNCT	_	34	punct	_	_
31	iki	iki	ADP	Sgg	AdpType=Prep	33	case	_	_
32	kurios	kuris	PRON	Pgfsgn	Case=Nom|PronType=Tot	33	nmod	_	_
33	vietos	vieta	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	34	dep:adj	_	_
34	kirpti	kirpti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	29	dep:predv_sub	_	SpaceAfter=No
35	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


