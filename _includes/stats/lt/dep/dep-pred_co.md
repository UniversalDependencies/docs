

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

1039 nodes (3%) are attached to their parents as `dep:pred_co`.

823 instances of `dep:pred_co` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.85466794995188.

The following 12 pairs of parts of speech are connected with `dep:pred_co`: [lt-pos/VERB]()-[lt-pos/VERB]() (356; 34% instances), [lt-pos/CCONJ]()-[lt-pos/VERB]() (281; 27% instances), [lt-pos/PUNCT]()-[lt-pos/VERB]() (161; 15% instances), [lt-pos/NOUN]()-[lt-pos/VERB]() (103; 10% instances), [lt-pos/ADV]()-[lt-pos/VERB]() (43; 4% instances), [lt-pos/PRON]()-[lt-pos/VERB]() (26; 3% instances), [lt-pos/ADJ]()-[lt-pos/VERB]() (24; 2% instances), [lt-pos/NUM]()-[lt-pos/VERB]() (15; 1% instances), [lt-pos/PART]()-[lt-pos/VERB]() (10; 1% instances), [lt-pos/PROPN]()-[lt-pos/VERB]() (10; 1% instances), [lt-pos/X]()-[lt-pos/VERB]() (6; 1% instances), [lt-pos/ADP]()-[lt-pos/VERB]() (4; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 dep:pred_co	color:blue
1	"	"	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No
2	Dabar	dabar	ADV	Rgp	Degree=Pos	4	dep:adj	_	_
3	ji	jis	PRON	Pgfsnn	Case=Nom|PronType=Tot	4	dep:sub	_	_
4	yra	būti	VERB	Vgmp3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
5	įskilusi	įskilti	VERB	Vgpa-sfannnn-p	Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Act	4	dep:predn	_	_
6	žioji	žiojėti	VERB	Vgmp3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	dep:pred_co	_	_
7	maždaug	maždaug	ADV	Rgp	Degree=Pos	8	dep:adj	_	_
8	5	5	NUM	M----d-	NumForm=Digit	9	nummod	_	_
9	cm	cm	X	Ys	Abbr=Yes	10	nmod	_	_
10	plyšys	plyšys	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	6	dep:sub	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 dep:pred_co	color:blue
1	,	,	PUNCT	PUNCT	_	2	punct	_	_
2	matyt	matyt	PART	Qg	_	5	dep:par	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	2	punct	_	_
4	nenori	nenorėti	VERB	Vgmp3p--y--ni-	Mood=Imp|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	5	dep:pred_co	_	_
5	ar	ar	CCONJ	Cg	_	7	cc	_	_
6	nesugeba	nesugebėti	VERB	Vgmp3p--y--ni-	Mood=Imp|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	5	dep:pred_co	_	SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	0	root	_	_
8	todėl	todėl	ADV	Rgp	Degree=Pos	11	dep:adj	_	_
9	jie	jis	PRON	Pgmpnn	Case=Nom|PronType=Tot	11	dep:sub	_	_
10	dar	dar	PART	Qg	_	11	advmod:emph	_	_
11	pavojingesni	pavojingas	ADJ	Agcmpnn	Case=Nom|Degree=Cmp|Gender=Masc|Number=Plur	7	dep:predn_co	_	SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 dep:pred_co	color:blue
1	Rankas	ranka	NOUN	Ncfpan-	Case=Acc|Gender=Fem|Number=Plur	2	dep:obj_co	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	4	punct	_	_
3	kojas	koja	NOUN	Ncfpan-	Case=Acc|Gender=Fem|Number=Plur	2	dep:obj_co	_	_
4	kapotų	kapoti	VERB	Vgm-3---n--ns-	Mood=Imp|Person=3|Polarity=Pos|VerbForm=Fin	5	dep:pred_co	_	_
5	–	–	PUNCT	PUNCT	_	10	punct	_	_
6	necyptelėtum	necyptelėti	VERB	Vgm-2s--y--ns-	Mood=Imp|Number=Sing|Person=2|Polarity=Neg|VerbForm=Fin	5	dep:pred_co	_	SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	10	punct	_	_
8	čia	čia	ADV	Rgp	Degree=Pos	10	dep:adj	_	_
9	tik	tik	PART	Qg	_	10	advmod:emph	_	_
10	adata	adata	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
11	...	...	PUNCT	PUNCT	_	10	punct	_	_

~~~


