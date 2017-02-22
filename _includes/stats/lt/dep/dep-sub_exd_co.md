

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:suj]().

1 nodes (0%) are attached to their parents as `dep:sub_exd_co`.

1 instances of `dep:sub_exd_co` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 15.

The following 1 pairs of parts of speech are connected with `dep:sub_exd_co`: [lt-pos/CCONJ]()-[lt-pos/PRON]() (1; 100% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 8 dep:sub_exd_co	color:blue
1	Kai kurie	kai kuris	PRON	Pgmpnn	Case=Nom|PronType=Tot	2	nmod	_	_
2	darbuotojai	darbuotojas	NOUN	Ncmpnn-	Case=Nom|Gender=Masc|Number=Plur	3	dep:sub	_	_
3	stengiasi	stengtis	VERB	Vgmp3p--n--yi-	Mood=Imp|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
4	išvengti	išvengti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	3	dep:predv	_	_
5	dalyvavimo	dalyvavimas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	4	obj	_	_
6	rengiamame	rengti	VERB	Vgpp-smpnnln-p	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	7	acl	_	_
7	vakarėlyje	vakarėlis	NOUN	Ncmsln-	Case=Loc|Gender=Masc|Number=Sing	5	dep:adj	_	_
8	kas	kas	PRON	Pg--nn	Case=Nom|PronType=Tot	23	dep:sub_exd_co	_	_
9	dėl	dėl	ADP	Sgg	AdpType=Prep	10	case	_	_
10	to	tas	PRON	Pgmsgn	Case=Nom|PronType=Tot	8	dep:adj	_	SpaceAfter=No
11	,	,	PUNCT	PUNCT	_	14	punct	_	_
12	kad	kad	CCONJ	Cg	_	14	mark	_	_
13	nejaukiai	nejaukiai	ADV	Rgp	Degree=Pos	14	dep:adj	_	_
14	jaučiasi	jaustis	VERB	Vgmp3s--n--yi-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	10	dep:pred_adj	_	_
15	panašiuose	panašus	ADJ	Agpmpln	Case=Loc|Degree=Pos|Gender=Masc|Number=Plur	16	amod	_	_
16	susibūrimuose	susibūrimas	NOUN	Ncmpln-	Case=Loc|Gender=Masc|Number=Plur	14	dep:adj	_	SpaceAfter=No
17	,	,	PUNCT	PUNCT	_	3	punct	_	_
18	kam	kam	PRON	Pg--dn	Case=Nom|Number=Dual|PronType=Tot	19	obj	_	_
19	sunku	sunkus	ADJ	Agpn--n	Degree=Pos|Gender=Neut	23	dep:predn_co	_	_
20	išsirinkti	išsirinkti	VERB	Vgi-----n--y--	Mood=Ind|Polarity=Pos|VerbForm=Fin	19	dep:predv	_	_
21	aprangą	apranga	NOUN	Ncfsan-	Case=Acc|Gender=Fem|Number=Sing	20	obj	_	SpaceAfter=No
22	,	,	PUNCT	PUNCT	_	3	punct	_	_
23	o	o	CCONJ	Cg	_	3	cc	_	_
24	kas	kas	PRON	Pg--nn	Case=Nom|PronType=Tot	25	dep:sub	_	_
25	nepasitiki	nepasitikėti	VERB	Vgmp3s--y--yi-	Mood=Imp|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	23	dep:pred_co	_	_
26	savimi	savęs	PRON	Pg--in	Case=Nom|PronType=Tot	25	obj	_	SpaceAfter=No
27	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


