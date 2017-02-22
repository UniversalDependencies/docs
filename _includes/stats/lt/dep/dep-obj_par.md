

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

1 nodes (0%) are attached to their parents as `dep:obj_par`.

1 instances of `dep:obj_par` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.

The following 1 pairs of parts of speech are connected with `dep:obj_par`: [lt-pos/NOUN]()-[lt-pos/NOUN]() (1; 100% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 19 dep:obj_par	color:blue
1	§	§	PUNCT	PUNCT	_	2	punct	_	_
2	Man	aš	PRON	Pg-sdn	Case=Nom|Number=Dual|PronType=Tot	0	root	_	_
3	išsmukti	išsmukti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	2	dep:predv	_	_
4	į	į	ADP	Sga	AdpType=Prep	5	case	_	_
5	kiemą	kiemas	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	3	obj	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	11	punct	_	_
7	kur	kur	ADV	Rgp	Degree=Pos	11	dep:adj	_	_
8	balandžių	balandis	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	9	nmod	_	_
9	laikytojai	laikytojas	NOUN	Ncmpnn-	Case=Nom|Gender=Masc|Number=Plur	11	dep:sub	_	_
10	rūkydami	rūkyti	VERB	Vgh--pm-n--n--	Gender=Masc|Number=Plur|Polarity=Pos	11	dep:adj	_	_
11	aptarinėjo	aptarinėti	VERB	Vgma3p--n--ni-	Mood=Imp|Number=Plur|Person=3|Polarity=Pos|VerbForm=Fin	5	dep:pred_atr	_	_
12	savo	savęs	PRON	Pg--gn	Case=Nom|PronType=Tot	14	nmod	_	_
13	vartiklius	vartiklis	NOUN	Ncmpan-	Case=Acc|Gender=Masc|Number=Plur	14	dep:obj_co	_	_
14	ir	ir	CCONJ	Cg	_	11	advmod	_	_
15	dzikarus	dzikaras	NOUN	Ncmpan-	Case=Acc|Gender=Masc|Number=Plur	14	dep:obj_co	_	_
16	(	(	PUNCT	PUNCT	_	19	punct	_	SpaceAfter=No
17	nuo	nuo	ADP	Sgg	AdpType=Prep	19	case	_	_
18	slaviško	slaviškas	ADJ	Agpmsgn	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	19	amod	_	_
19	žodžio	žodis	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	15	dep:obj_par	_	_
20	dikarj	dikarj	X	Xf	_	19	nmod	_	SpaceAfter=No
21	)	)	PUNCT	PUNCT	_	19	punct	_	SpaceAfter=No
22	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


