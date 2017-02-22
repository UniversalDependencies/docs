

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

100 nodes (0%) are attached to their parents as `dep:pred_adj_co`.

79 instances of `dep:pred_adj_co` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.42.

The following 9 pairs of parts of speech are connected with `dep:pred_adj_co`: [lt-pos/VERB]()-[lt-pos/VERB]() (32; 32% instances), [lt-pos/PUNCT]()-[lt-pos/VERB]() (26; 26% instances), [lt-pos/CCONJ]()-[lt-pos/VERB]() (13; 13% instances), [lt-pos/NOUN]()-[lt-pos/VERB]() (13; 13% instances), [lt-pos/PRON]()-[lt-pos/VERB]() (5; 5% instances), [lt-pos/ADV]()-[lt-pos/VERB]() (4; 4% instances), [lt-pos/ADJ]()-[lt-pos/VERB]() (3; 3% instances), [lt-pos/PROPN]()-[lt-pos/VERB]() (3; 3% instances), [lt-pos/PART]()-[lt-pos/VERB]() (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 dep:pred_adj_co	color:blue
1	Ne	ne	PART	Qg	_	0	root	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	5	punct	_	_
3	jei	jei	CCONJ	Cg	_	5	mark	_	_
4	žąsį	žąsis	NOUN	Ncfsan-	Case=Acc|Gender=Fem|Number=Sing	5	obj	_	_
5	nusipirksite	nusipirkti	VERB	Vgmf2p--n--yi-	Mood=Imp|Number=Plur|Person=2|Polarity=Pos|Tense=Fut|VerbForm=Fin	1	dep:pred_adj_co	_	_
6	iš anksto	iš anksto	ADV	Rgp	Degree=Pos	5	dep:adj	_	_
7	ir	ir	CCONJ	Cg	_	5	mark	_	_
8	užšaldysite	užšaldyti	VERB	Vgmf2p--n--ni-	Mood=Imp|Number=Plur|Person=2|Polarity=Pos|Tense=Fut|VerbForm=Fin	5	dep:pred_adj_co	_	SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 dep:pred_adj_co	color:blue
1	Tavo	tu	PRON	Pg-sgn	Case=Nom|PronType=Tot	2	nmod	_	_
2	kalba	kalba	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	3	dep:sub	_	_
3	sukurta	sukurti	VERB	Vgps-sfpnnnn-p	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
4	tam	tam	ADV	Rgp	Degree=Pos	3	dep:adj	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	6	punct	_	_
6	kad	kad	CCONJ	Cg	_	4	mark	_	_
7	aiškintų	aiškinti	VERB	Vgm-3s--n--ns-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|VerbForm=Fin	8	dep:pred_adj_co	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	6	punct	_	_
9	ne	ne	PART	Qg	_	10	advmod:emph	_	_
10	klaidintų	klaidinti	VERB	Vgm-3s--n--ns-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|VerbForm=Fin	8	dep:pred_adj_co	_	_
11	jų	jis	PRON	Pgmpgn	Case=Nom|PronType=Tot	12	nmod	_	_
12	-	-	PUNCT	PUNCT	_	3	punct	_	_
13	priešingai	priešingai	ADV	Rgp	Degree=Pos	12	dep:adj	_	SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 dep:pred_adj_co	color:blue
1	atsiranda	atsirasti	VERB	Vgmp3s--n--yi-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	dep:pred_adj_co	_	_
2	tuoj pat	tuoj pat	ADV	Rgp	Degree=Pos	3	dep:adj	_	_
3	atsikėlus	atsikelti	VERB	Vgaa----n--y--	Polarity=Pos	1	dep:adj	_	_
4	po	po	ADP	Sgg	AdpType=Prep	5	case	_	_
5	miego	miegas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	3	dep:adj	_	_
6	ar	ar	CCONJ	Cg	_	0	root	_	_
7	pažadina	pažadinti	VERB	Vgmp3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	dep:pred_adj_co	_	_
8	iš	iš	ADP	Sgg	AdpType=Prep	9	case	_	_
9	miego	miegas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	7	dep:adj	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


