

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

2 nodes (0%) are attached to their parents as `dep:adj_exd`.

1 instances of `dep:adj_exd` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.5.

The following 2 pairs of parts of speech are connected with `dep:adj_exd`: [lt-pos/ADV]()-[lt-pos/NUM]() (1; 50% instances), [lt-pos/PUNCT]()-[lt-pos/PRON]() (1; 50% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 dep:adj_exd	color:blue
1	Vienoje	vienas	PRON	Pgfsln	Case=Nom|PronType=Tot	2	nmod	_	_
2	kuprinėje	kuprinė	NOUN	Ncfsln-	Case=Loc|Gender=Fem|Number=Sing	3	dep:adj	_	_
3	buvo	būti	VERB	Vgma3---n--ni-	Mood=Imp|Person=3|Polarity=Pos|VerbForm=Fin	0	root	_	_
4	10,5	10,5	NUM	M----d-	NumForm=Digit	3	dep:adj	_	_
5	kg	kg	X	Ys	Abbr=Yes	4	nmod	_	_
6	kitoje	kitas	PRON	Pgfsln	Case=Nom|PronType=Tot	7	dep:adj_exd	_	_
7	-	-	PUNCT	PUNCT	_	3	punct	_	_
8	11,5	11,5	NUM	M----d-	NumForm=Digit	7	dep:adj	_	_
9	kg	kg	X	Ys	Abbr=Yes	8	nmod	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 14 dep:adj_exd	color:blue
1	"	"	PUNCT	PUNCT	_	4	punct	_	SpaceAfter=No
2	vieno	vienas	PRON	Pgmsgn	Case=Nom|PronType=Tot	3	nmod	_	_
3	instituto	institutas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	4	nmod	_	_
4	rektorius	rektorius	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
5	uždirbti	uždirbti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	4	dep:predv	_	_
6	30	30	NUM	M----d-	NumForm=Digit	5	dep:adj	_	_
7	tūkstančių	tūkstantis	NUM	Mcmpgl-	Case=Gen|Gender=Masc|Number=Plur|NumForm=Word|NumType=Card	6	nummod	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	10	punct	_	_
9	kai	kai	CCONJ	Cg	_	10	mark	_	_
10	tuo tarpu	tuo tarpu	ADV	Rgp	Degree=Pos	4	dep:adj	_	_
11	mokslinis	mokslinis	ADJ	Agpmsnn	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	12	amod	_	_
12	darbuotojas	darbuotojas	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	14	dep:sub	_	_
13	vos	vos	PART	Qg	_	14	advmod:emph	_	_
14	tūkstantį	tūkstantis	NUM	Mcmsal-	Case=Acc|Gender=Masc|Number=Sing|NumForm=Word|NumType=Card	10	dep:adj_exd	_	SpaceAfter=No
15	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


