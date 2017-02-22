

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

133 nodes (0%) are attached to their parents as `dep:par`.

96 instances of `dep:par` (72%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.33834586466165.

The following 36 pairs of parts of speech are connected with `dep:par`: [lt-pos/VERB]()-[lt-pos/PART]() (22; 17% instances), [lt-pos/VERB]()-[lt-pos/NOUN]() (20; 15% instances), [lt-pos/VERB]()-[lt-pos/VERB]() (12; 9% instances), [lt-pos/NOUN]()-[lt-pos/NOUN]() (9; 7% instances), [lt-pos/VERB]()-[lt-pos/ADV]() (7; 5% instances), [lt-pos/VERB]()-[lt-pos/INTJ]() (5; 4% instances), [lt-pos/NOUN]()-[lt-pos/ADV]() (4; 3% instances), [lt-pos/VERB]()-[lt-pos/ADJ]() (4; 3% instances), [lt-pos/ADJ]()-[lt-pos/VERB]() (3; 2% instances), [lt-pos/CCONJ]()-[lt-pos/ADV]() (3; 2% instances), [lt-pos/CCONJ]()-[lt-pos/NOUN]() (3; 2% instances), [lt-pos/NOUN]()-[lt-pos/PART]() (3; 2% instances), [lt-pos/NOUN]()-[lt-pos/X]() (3; 2% instances), [lt-pos/PART]()-[lt-pos/NOUN]() (3; 2% instances), [lt-pos/PUNCT]()-[lt-pos/NOUN]() (3; 2% instances), [lt-pos/VERB]()-[lt-pos/PRON]() (3; 2% instances), [lt-pos/ADJ]()-[lt-pos/PART]() (2; 2% instances), [lt-pos/CCONJ]()-[lt-pos/PART]() (2; 2% instances), [lt-pos/CCONJ]()-[lt-pos/X]() (2; 2% instances), [lt-pos/NOUN]()-[lt-pos/PROPN]() (2; 2% instances), [lt-pos/PART]()-[lt-pos/ADV]() (2; 2% instances), [lt-pos/PUNCT]()-[lt-pos/X]() (2; 2% instances), [lt-pos/ADJ]()-[lt-pos/ADV]() (1; 1% instances), [lt-pos/ADJ]()-[lt-pos/NOUN]() (1; 1% instances), [lt-pos/ADV]()-[lt-pos/NOUN]() (1; 1% instances), [lt-pos/ADV]()-[lt-pos/PART]() (1; 1% instances), [lt-pos/ADV]()-[lt-pos/X]() (1; 1% instances), [lt-pos/CCONJ]()-[lt-pos/VERB]() (1; 1% instances), [lt-pos/NOUN]()-[lt-pos/VERB]() (1; 1% instances), [lt-pos/PART]()-[lt-pos/ADJ]() (1; 1% instances), [lt-pos/PART]()-[lt-pos/VERB]() (1; 1% instances), [lt-pos/PRON]()-[lt-pos/NOUN]() (1; 1% instances), [lt-pos/PROPN]()-[lt-pos/PART]() (1; 1% instances), [lt-pos/PUNCT]()-[lt-pos/ADJ]() (1; 1% instances), [lt-pos/PUNCT]()-[lt-pos/VERB]() (1; 1% instances), [lt-pos/VERB]()-[lt-pos/PROPN]() (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 dep:par	color:blue
1	ankstesni	ankstus	ADJ	Agcmpnn	Case=Nom|Degree=Cmp|Gender=Masc|Number=Plur	2	amod	_	_
2	merai	meras	NOUN	Ncmpnn-	Case=Nom|Gender=Masc|Number=Plur	7	dep:sub	_	_
3	irgi	irgi	ADV	Rgp	Degree=Pos	7	dep:adj	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	5	punct	_	_
5	rodos	rodos	PART	Qg	_	7	dep:par	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	5	punct	_	_
7	tardavosi	tartis	VERB	Vgmq3p--n--yi-	Mood=Imp|Number=Plur|Person=3|Polarity=Pos|VerbForm=Fin	0	root	_	_
8	su	su	ADP	Sgi	AdpType=Prep	7	dep:adj	_	_
9	specialistais	specialistas	NOUN	Ncmpin-	Case=Ins|Gender=Masc|Number=Plur	8	obj	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 dep:par	color:blue
1	§	§	PUNCT	PUNCT	_	6	punct	_	_
2	Viešpatie	viešpats	NOUN	Ncmsvn-	Case=Voc|Gender=Masc|Number=Sing	6	dep:par	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	2	punct	_	_
4	gal	gal	PART	Qg	_	6	advmod:emph	_	_
5	jos	jis	PRON	Pgfpnn	Case=Nom|PronType=Tot	6	dep:sub	_	_
6	budi	budėti	VERB	Vgmp3p--n--ni-	Mood=Imp|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
7	?	?	PUNCT	PUNCT	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 dep:par	color:blue
1	Jeigu	jeigu	CCONJ	Cg	_	2	mark	_	_
2	rengiate	rengti	VERB	Vgmp2p--n--ni-	Mood=Imp|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
3	šventę	šventė	NOUN	Ncfsan-	Case=Acc|Gender=Fem|Number=Sing	2	obj	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	5	punct	_	_
5	vadinasi	vadintis	VERB	Vgmp3p--n--yi-	Mood=Imp|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	2	dep:par	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	5	punct	_	_
7	tais	tas	PRON	Pgmpin	Case=Nom|PronType=Tot	9	nmod	_	_
8	"	"	PUNCT	PUNCT	_	9	punct	_	SpaceAfter=No
9	klijais	klijai	NOUN	Ncmpin-	Case=Ins|Gender=Masc|Number=Plur	2	obj	_	SpaceAfter=No
10	"	"	PUNCT	PUNCT	_	9	punct	_	SpaceAfter=No
11	,	,	PUNCT	PUNCT	_	13	punct	_	_
12	kurie	kuris	PRON	Pgmpnn	Case=Nom|PronType=Tot	13	dep:sub	_	_
13	laikys	laikyti	VERB	Vgmf3p--n--ni-	Mood=Imp|Number=Plur|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	9	dep:pred_atr	_	_
14	visus	visas	PRON	Pgmpan	Case=Nom|PronType=Tot	15	nmod	_	_
15	svečius	svečias	NOUN	Ncmpan-	Case=Acc|Gender=Masc|Number=Plur	13	obj	_	SpaceAfter=No
16	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


