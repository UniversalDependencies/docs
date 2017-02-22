

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

387 nodes (1%) are attached to their parents as `dep:adj_co`.

206 instances of `dep:adj_co` (53%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.60723514211886.

The following 20 pairs of parts of speech are connected with `dep:adj_co`: [lt-pos/CCONJ]()-[lt-pos/NOUN]() (111; 29% instances), [lt-pos/CCONJ]()-[lt-pos/VERB]() (75; 19% instances), [lt-pos/PUNCT]()-[lt-pos/NOUN]() (51; 13% instances), [lt-pos/CCONJ]()-[lt-pos/ADV]() (42; 11% instances), [lt-pos/PUNCT]()-[lt-pos/VERB]() (27; 7% instances), [lt-pos/PUNCT]()-[lt-pos/NUM]() (14; 4% instances), [lt-pos/PUNCT]()-[lt-pos/X]() (14; 4% instances), [lt-pos/PUNCT]()-[lt-pos/ADV]() (13; 3% instances), [lt-pos/CCONJ]()-[lt-pos/NUM]() (9; 2% instances), [lt-pos/CCONJ]()-[lt-pos/PROPN]() (7; 2% instances), [lt-pos/VERB]()-[lt-pos/VERB]() (7; 2% instances), [lt-pos/CCONJ]()-[lt-pos/ADJ]() (4; 1% instances), [lt-pos/CCONJ]()-[lt-pos/X]() (3; 1% instances), [lt-pos/ADV]()-[lt-pos/NOUN]() (2; 1% instances), [lt-pos/PROPN]()-[lt-pos/NUM]() (2; 1% instances), [lt-pos/PUNCT]()-[lt-pos/PRON]() (2; 1% instances), [lt-pos/ADJ]()-[lt-pos/NOUN]() (1; 0% instances), [lt-pos/NUM]()-[lt-pos/NUM]() (1; 0% instances), [lt-pos/PUNCT]()-[lt-pos/ADJ]() (1; 0% instances), [lt-pos/VERB]()-[lt-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 dep:adj_co	color:blue
1	Būtinai	būtinai	ADV	Rgp	Degree=Pos	0	root	_	_
2	įmonės	įmonė	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	4	nmod	_	_
3	vakarėliuose	vakarėlis	NOUN	Ncmpln-	Case=Loc|Gender=Masc|Number=Plur	4	dep:adj_co	_	_
4	ir	ir	CCONJ	Cg	_	1	cc	_	_
5	susirinkimuose	susirinkimas	NOUN	Ncmpln-	Case=Loc|Gender=Masc|Number=Plur	4	dep:adj_co	_	SpaceAfter=No
6	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 dep:adj_co	color:blue
1	Dalis	dalis	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
2	žmonių	žmogus	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	1	nmod	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	1	punct	_	_
4	supykę	supykti	VERB	Vgpa-pmannnn-p	Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Act	5	dep:adj_co	_	_
5	ar	ar	CCONJ	Cg	_	1	cc	_	_
6	nusivylę	nusivilti	VERB	Vgpa-pmannnn-p	Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Act	5	dep:adj_co	_	SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	1	punct	_	_
8	kaltinti	kaltinti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	9	dep:predv_co	_	_
9	arba	arba	CCONJ	Cg	_	1	cc	_	_
10	gėdinti	gėdinti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	9	dep:predv_co	_	_
11	save	savęs	PRON	Pg--an	Case=Nom|PronType=Tot	9	obj	_	SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 dep:adj_co	color:blue
1	§	§	PUNCT	PUNCT	_	2	punct	_	_
2	Situacija	situacija	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
3	iš principo	iš principo	ADV	Rgp	Degree=Pos	4	dep:adj	_	_
4	bloga	blogas	ADJ	Agpfsnn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	2	dep:predn	_	_
5	ir	ir	PART	Qg	_	7	advmod:emph	_	_
6	pas	pas	ADP	Sga	AdpType=Prep	7	case	_	_
7	mus	aš	PRON	Pg-pan	Case=Nom|PronType=Tot	8	dep:adj_co	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	4	punct	_	_
9	ir	ir	PART	Qg	_	10	advmod:emph	_	_
10	pasaulyje	pasaulis	NOUN	Ncmsln-	Case=Loc|Gender=Masc|Number=Sing	8	dep:adj_co	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


