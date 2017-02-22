

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

52 nodes (0%) are attached to their parents as `dep:pred_sub`.

52 instances of `dep:pred_sub` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.84615384615385.

The following 6 pairs of parts of speech are connected with `dep:pred_sub`: [lt-pos/PRON]()-[lt-pos/VERB]() (16; 31% instances), [lt-pos/VERB]()-[lt-pos/VERB]() (12; 23% instances), [lt-pos/ADJ]()-[lt-pos/VERB]() (11; 21% instances), [lt-pos/NOUN]()-[lt-pos/VERB]() (8; 15% instances), [lt-pos/ADV]()-[lt-pos/VERB]() (4; 8% instances), [lt-pos/PART]()-[lt-pos/VERB]() (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 dep:pred_sub	color:blue
1	Man	aš	PRON	Pg-sdn	Case=Nom|Number=Dual|PronType=Tot	0	root	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	5	punct	_	_
3	kad	kad	CCONJ	Cg	_	5	mark	_	_
4	tai	tas	PRON	Pgn--n	Case=Nom|PronType=Tot	5	dep:sub	_	_
5	nėra	nebūti	VERB	Vgmp3---y--ni-	Mood=Imp|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	1	dep:pred_sub	_	_
6	moralu	moralus	ADJ	Agpn--n	Degree=Pos|Gender=Neut	5	dep:predn	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 dep:pred_sub	color:blue
1	Gali	galėti	VERB	Vgmp3---n--ni-	Mood=Imp|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
2	netgi	netgi	PART	Qg	_	3	advmod:emph	_	_
3	būti	būti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	1	dep:predv	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	6	punct	_	_
5	kad	kad	CCONJ	Cg	_	6	mark	_	_
6	buvau	būti	VERB	Vgma1s--n--ni-	Mood=Imp|Number=Sing|Person=1|Polarity=Pos|VerbForm=Fin	1	dep:pred_sub	_	_
7	pagiringas	pagiringas	ADJ	Agpmsnn	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	6	dep:predn	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	1	punct	_	_
9	tai	tas	PRON	Pgn--n	Case=Nom|PronType=Tot	11	dep:sub	_	_
10	nieko	nieko	PRON	Pg--gn	Case=Nom|PronType=Tot	11	obj	_	_
11	nereiškia	nereikšti	VERB	Vgmp3---y--ni-	Mood=Imp|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	1	dep:pred_co	_	SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 dep:pred_sub	color:blue
1	akivaizdu	akivaizdus	ADJ	Agpn--n	Degree=Pos|Gender=Neut	0	root	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	5	punct	_	_
3	kad	kad	CCONJ	Cg	_	5	mark	_	_
4	auditoriai	auditorius	NOUN	Ncmpnn-	Case=Nom|Gender=Masc|Number=Plur	5	dep:sub	_	_
5	klydo	klysti	VERB	Vgma3p--n--ni-	Mood=Imp|Number=Plur|Person=3|Polarity=Pos|VerbForm=Fin	1	dep:pred_sub	_	SpaceAfter=No
6	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


