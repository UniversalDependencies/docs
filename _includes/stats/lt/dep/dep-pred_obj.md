

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

240 nodes (1%) are attached to their parents as `dep:pred_obj`.

237 instances of `dep:pred_obj` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.02916666666667.

The following 11 pairs of parts of speech are connected with `dep:pred_obj`: [lt-pos/VERB]()-[lt-pos/VERB]() (154; 64% instances), [lt-pos/NOUN]()-[lt-pos/VERB]() (30; 13% instances), [lt-pos/PRON]()-[lt-pos/VERB]() (24; 10% instances), [lt-pos/PROPN]()-[lt-pos/VERB]() (12; 5% instances), [lt-pos/ADV]()-[lt-pos/VERB]() (7; 3% instances), [lt-pos/PART]()-[lt-pos/VERB]() (5; 2% instances), [lt-pos/PUNCT]()-[lt-pos/VERB]() (4; 2% instances), [lt-pos/ADJ]()-[lt-pos/VERB]() (1; 0% instances), [lt-pos/CCONJ]()-[lt-pos/VERB]() (1; 0% instances), [lt-pos/INTJ]()-[lt-pos/VERB]() (1; 0% instances), [lt-pos/NUM]()-[lt-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 dep:pred_obj	color:blue
1	visa tai	visa tai	PRON	Pgn--n	Case=Nom|PronType=Tot	2	dep:sub	_	_
2	nereiškia	nereikšti	VERB	Vgmp3---y--ni-	Mood=Imp|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	6	punct	_	_
4	kad	kad	CCONJ	Cg	_	6	mark	_	_
5	ištikimybė	ištikimybė	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	6	dep:sub	_	_
6	neegzistuoja	neegzistuoti	VERB	Vgmp3s--y--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	2	dep:pred_obj	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 dep:pred_obj	color:blue
1	§	§	PUNCT	PUNCT	_	2	punct	_	_
2	Gidė	gidė	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	7	punct	_	_
4	kad	kad	CCONJ	Cg	_	7	mark	_	_
5	akcijos	akcija	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	6	nmod	_	_
6	tikslas	tikslas	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	7	dep:sub	_	_
7	nebuvo	nebūti	VERB	Vgma3s--y--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin	2	dep:pred_obj	_	_
8	surinkti	surinkti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	7	dep:predv	_	_
9	kuo	kuo	PART	Qg	_	10	advmod:emph	_	_
10	daugiau	daug	ADV	Rgc	Degree=Cmp	8	dep:adj	_	_
11	pinigų	pinigai	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	10	nmod	_	SpaceAfter=No
12	:	:	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 dep:pred_obj	color:blue
1	Dabar	dabar	ADV	Rgp	Degree=Pos	0	root	_	_
2	į	į	ADP	Sga	AdpType=Prep	3	case	_	_
3	tai	tas	PRON	Pgn--n	Case=Nom|PronType=Tot	1	obj	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	6	punct	_	_
5	ką	kas	PRON	Pg--an	Case=Nom|PronType=Tot	6	obj	_	_
6	turime	turėti	VERB	Vgmp1p--n--ni-	Mood=Imp|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	dep:pred_obj	_	_
7	šiandien	šiandien	ADV	Rgp	Degree=Pos	6	dep:adj	_	SpaceAfter=No
8	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


