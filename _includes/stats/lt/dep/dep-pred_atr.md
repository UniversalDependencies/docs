

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

227 nodes (1%) are attached to their parents as `dep:pred_atr`.

226 instances of `dep:pred_atr` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.7136563876652.

The following 10 pairs of parts of speech are connected with `dep:pred_atr`: [lt-pos/NOUN]()-[lt-pos/VERB]() (184; 81% instances), [lt-pos/PRON]()-[lt-pos/VERB]() (25; 11% instances), [lt-pos/CCONJ]()-[lt-pos/VERB]() (7; 3% instances), [lt-pos/PROPN]()-[lt-pos/VERB]() (4; 2% instances), [lt-pos/ADJ]()-[lt-pos/VERB]() (2; 1% instances), [lt-pos/ADV]()-[lt-pos/VERB]() (1; 0% instances), [lt-pos/NUM]()-[lt-pos/VERB]() (1; 0% instances), [lt-pos/PART]()-[lt-pos/VERB]() (1; 0% instances), [lt-pos/PUNCT]()-[lt-pos/VERB]() (1; 0% instances), [lt-pos/X]()-[lt-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 dep:pred_atr	color:blue
1	Pavojaus	pavojus	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	4	punct	_	_
3	kai	kai	CCONJ	Cg	_	4	mark	_	_
4	reikia	reikėti	VERB	Vgmp3---n--ni-	Mood=Imp|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	dep:pred_atr	_	_
5	pacientą	pacientas	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	6	obj	_	_
6	siųsti	siųsti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	4	ccomp	_	_
7	pas	pas	ADP	Sga	AdpType=Prep	8	case	_	_
8	specialistą	specialistas	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	6	iobj	_	SpaceAfter=No
9	:	:	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 dep:pred_atr	color:blue
1	tie	tas	PRON	Pgmpnn	Case=Nom|PronType=Tot	7	dep:sub	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	4	punct	_	_
3	kurie	kuris	PRON	Pgmpnn	Case=Nom|PronType=Tot	4	dep:sub	_	_
4	liko	likti	VERB	Vgma3p--n--ni-	Mood=Imp|Number=Plur|Person=3|Polarity=Pos|VerbForm=Fin	1	dep:pred_atr	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	4	punct	_	_
6	apstulbinti	apstulbinti	VERB	Vgps-pmpnnnn-p	Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	7	dep:adj	_	_
7	žvelgė	žvelgti	VERB	Vgma3p--n--ni-	Mood=Imp|Number=Plur|Person=3|Polarity=Pos|VerbForm=Fin	0	root	_	_
8	į	į	ADP	Sga	AdpType=Prep	11	case	_	_
9	mano	aš	PRON	Pg-sgn	Case=Nom|PronType=Tot	11	nmod	_	_
10	pusplikę	pusplikis	ADJ	Agpfsan	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	11	amod	_	_
11	galvą	galva	NOUN	Ncfsan-	Case=Acc|Gender=Fem|Number=Sing	7	obj	_	SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 11 dep:pred_atr	color:blue
1	Naujiems	naujas	ADJ	Agpmpdn	Case=Dat|Degree=Pos|Gender=Masc|Number=Plur	3	amod	_	_
2	skaitmeniniams	skaitmeninis	ADJ	Agpmpdn	Case=Dat|Degree=Pos|Gender=Masc|Number=Plur	3	amod	_	_
3	produktams	produktas	NOUN	Ncmpdn-	Case=Dat|Gender=Masc|Number=Plur	6	dep:obj_co	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	6	punct	_	_
5	paslaugoms	paslauga	NOUN	Ncfpdn-	Case=Dat|Gender=Fem|Number=Plur	6	dep:obj_co	_	_
6	ir	ir	CCONJ	Cg	_	15	advmod	_	_
7	verslo	verslas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	8	nmod	_	_
8	modeliams	modelis	NOUN	Ncmpdn-	Case=Dat|Gender=Masc|Number=Plur	6	dep:obj_co	_	SpaceAfter=No
9	,	,	PUNCT	PUNCT	_	11	punct	_	_
10	kurie	kuris	PRON	Pgmpnn	Case=Nom|PronType=Tot	11	dep:sub	_	_
11	klesti	klestėti	VERB	Vgmp3p--n--ni-	Mood=Imp|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	dep:pred_atr	_	_
12	atviroje	atviras	ADJ	Agpfsln	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	13	amod	_	_
13	erdvėje	erdvė	NOUN	Ncfsln-	Case=Loc|Gender=Fem|Number=Sing	11	dep:adj	_	SpaceAfter=No
14	,	,	PUNCT	PUNCT	_	11	punct	_	_
15	kurti	kurti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	0	root	_	_
16	palanki	palankus	ADJ	Agpfsnn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	17	dep:atr_co	_	_
17	ir	ir	CCONJ	Cg	_	20	cc	_	_
18	nuspėjama	nuspėti	VERB	Vgpp-sfpnnnn-p	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	17	dep:atr_co	_	_
19	teisinė	teisinis	ADJ	Agpfsnn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	20	amod	_	_
20	sistema	sistema	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	15	dep:sub	_	SpaceAfter=No
21	.	.	PUNCT	PUNCT	_	15	punct	_	_

~~~


