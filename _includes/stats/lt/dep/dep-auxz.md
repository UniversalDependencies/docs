

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

1 nodes (0%) are attached to their parents as `dep:auxz`.

1 instances of `dep:auxz` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `dep:auxz`: [lt-pos/ADJ]()-[lt-pos/PART]() (1; 100% instances).


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 27 dep:auxz	color:blue
1	Kai	kai	CCONJ	Cg	_	3	mark	_	_
2	jis	jis	PRON	Pgmsnn	Case=Nom|PronType=Tot	3	dep:sub	_	_
3	numirė	numirti	VERB	Vgma3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|VerbForm=Fin	10	dep:pred_adj	_	_
4	antrą	antras	ADJ	Momsaln	Case=Acc|Gender=Masc|Number=Sing|NumForm=Word|NumType=Ord	5	amod	_	_
5	sykį	sykis	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	6	dep:adj_co	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	3	punct	_	_
7	jau	jau	ADV	Rgp	Degree=Pos	8	dep:adj	_	_
8	iš tikrųjų	iš tikrųjų	ADV	Rgp	Degree=Pos	6	dep:adj_co	_	SpaceAfter=No
9	,	,	PUNCT	PUNCT	_	3	punct	_	_
10	jaučiau	jausti	VERB	Vgma1s--n--ni-	Mood=Imp|Number=Sing|Person=1|Polarity=Pos|VerbForm=Fin	0	root	_	_
11	banalų	banalus	ADJ	Agpmsan	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	12	dep:atr_co	_	SpaceAfter=No
12	,	,	PUNCT	PUNCT	_	16	punct	_	_
13	visiems	visas	PRON	Pgmpdn	Case=Nom|Number=Dual|PronType=Tot	14	obj	_	_
14	privalomą	privalomas	ADJ	Agpmsan	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	12	dep:atr_co	_	_
15	išgyvenimų	išgyvenimas	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	16	nmod	_	_
16	rinkinį	rinkinys	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	10	obj	_	SpaceAfter=No
17	,	,	PUNCT	PUNCT	_	18	punct	_	_
18	užplūstantį	užplūsti	VERB	Vgpp-smannan-p	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	16	acl	_	_
19	žmogų	žmogus	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	18	obj	_	_
20	tokią	toks	PRON	Pgfsan	Case=Nom|PronType=Tot	21	nmod	_	_
21	akimirką	akimirka	NOUN	Ncfsan-	Case=Acc|Gender=Fem|Number=Sing	18	dep:adj	_	SpaceAfter=No
22	,	,	PUNCT	PUNCT	_	10	punct	_	_
23	kartu	kartu	ADV	Rgp	Degree=Pos	25	dep:adj	_	_
24	tai	tas	PRON	Pgn--n	Case=Nom|PronType=Tot	25	dep:sub	_	_
25	buvo	būti	VERB	Vgma3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|VerbForm=Fin	10	dep:pred_co	_	_
26	panašu	panašus	ADJ	Agpn--n	Degree=Pos|Gender=Neut	25	dep:predn	_	_
27	ir	ir	PART	Qg	_	26	dep:auxz	_	_
28	į	į	ADP	Sga	AdpType=Prep	27	case	_	_
29	palengvėjimą	palengvėjimas	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	27	obj	_	SpaceAfter=No
30	.	.	PUNCT	PUNCT	_	10	punct	_	_

~~~


