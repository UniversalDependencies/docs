

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

44 nodes (0%) are attached to their parents as `dep:predn_obj`.

43 instances of `dep:predn_obj` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.61363636363636.

The following 19 pairs of parts of speech are connected with `dep:predn_obj`: [lt-pos/VERB]()-[lt-pos/VERB]() (10; 23% instances), [lt-pos/VERB]()-[lt-pos/ADJ]() (8; 18% instances), [lt-pos/NOUN]()-[lt-pos/VERB]() (4; 9% instances), [lt-pos/PROPN]()-[lt-pos/VERB]() (4; 9% instances), [lt-pos/VERB]()-[lt-pos/NOUN]() (3; 7% instances), [lt-pos/NOUN]()-[lt-pos/ADJ]() (2; 5% instances), [lt-pos/ADV]()-[lt-pos/ADV]() (1; 2% instances), [lt-pos/CCONJ]()-[lt-pos/ADV]() (1; 2% instances), [lt-pos/NOUN]()-[lt-pos/ADV]() (1; 2% instances), [lt-pos/NOUN]()-[lt-pos/NOUN]() (1; 2% instances), [lt-pos/PART]()-[lt-pos/ADJ]() (1; 2% instances), [lt-pos/PART]()-[lt-pos/VERB]() (1; 2% instances), [lt-pos/PRON]()-[lt-pos/ADJ]() (1; 2% instances), [lt-pos/PRON]()-[lt-pos/NOUN]() (1; 2% instances), [lt-pos/PROPN]()-[lt-pos/NOUN]() (1; 2% instances), [lt-pos/PUNCT]()-[lt-pos/NOUN]() (1; 2% instances), [lt-pos/PUNCT]()-[lt-pos/PROPN]() (1; 2% instances), [lt-pos/VERB]()-[lt-pos/ADV]() (1; 2% instances), [lt-pos/VERB]()-[lt-pos/PRON]() (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 dep:predn_obj	color:blue
1	dar	dar	PART	Qg	_	2	advmod:emph	_	_
2	sakydavo	sakyti	VERB	Vgmq3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|VerbForm=Fin	0	root	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	5	punct	_	_
4	kad	kad	CCONJ	Cg	_	5	mark	_	_
5	aukojąs	aukoti	VERB	Vgpp-smannnn-p	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	2	dep:predn_obj	_	_
6	tam	tas	PRON	Pgmsdn	Case=Nom|Number=Dual|PronType=Tot	5	iobj	_	_
7	savo	savęs	PRON	Pg--gn	Case=Nom|PronType=Tot	9	nmod	_	_
8	brangų	brangus	ADJ	Agpmsan	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	9	amod	_	_
9	laiką	laikas	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	5	obj	_	SpaceAfter=No
10	!	!	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 dep:predn_obj	color:blue
1	nedaug kas	nedaug kas	PRON	Pg--nn	Case=Nom|PronType=Tot	2	dep:sub	_	_
2	susimąsto	susimąstyti	VERB	Vgmp3---n--yi-	Mood=Imp|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	7	punct	_	_
4	ar	ar	CCONJ	Cg	_	7	mark	_	_
5	tai	tas	PRON	Pgn--n	Case=Nom|PronType=Tot	7	dep:sub	_	_
6	tikrai	tikrai	ADV	Rgp	Degree=Pos	7	dep:adj	_	_
7	sveika	sveikas	ADJ	Agpn--n	Degree=Pos|Gender=Neut	2	dep:predn_obj	_	SpaceAfter=No
8	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 dep:predn_obj	color:blue
1	Tiesa	tiesa	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	1	punct	_	_
3	vyriausybė	vyriausybė	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	1	dep:sub	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	8	punct	_	_
5	kad	kad	CCONJ	Cg	_	8	mark	_	_
6	transportininkų	transportininkas	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	7	nmod	_	_
7	algas	alga	NOUN	Ncfpan-	Case=Acc|Gender=Fem|Number=Plur	10	obj	_	_
8	numatoma	numatyti	VERB	Vgpp--npnn-n-p	Gender=Neut|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	1	dep:predn_obj	_	_
9	šiek tiek	šiek tiek	ADV	Rgp	Degree=Pos	10	dep:adj	_	_
10	pakelti	pakelti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	8	ccomp	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


