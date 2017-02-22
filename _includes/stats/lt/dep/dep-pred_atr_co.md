

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

65 nodes (0%) are attached to their parents as `dep:pred_atr_co`.

33 instances of `dep:pred_atr_co` (51%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.24615384615385.

The following 4 pairs of parts of speech are connected with `dep:pred_atr_co`: [lt-pos/CCONJ]()-[lt-pos/VERB]() (44; 68% instances), [lt-pos/PUNCT]()-[lt-pos/VERB]() (15; 23% instances), [lt-pos/NOUN]()-[lt-pos/VERB]() (5; 8% instances), [lt-pos/CCONJ]()-[lt-pos/X]() (1; 2% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 dep:pred_atr_co	color:blue
1	Juos	jis	PRON	Pgmpan	Case=Nom|PronType=Tot	0	root	_	_
2	tam tikra	tam tikra	PRON	Pgfsnn	Case=Nom|PronType=Tot	4	nmod	_	_
3	mąstysena	mąstysena	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	4	dep:sub_co	_	_
4	ir	ir	CCONJ	Cg	_	1	cc	_	_
5	sistema	sistema	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	4	dep:sub_co	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	5	punct	_	_
7	kuri	kuris	PRON	Pgfsnn	Case=Nom|PronType=Tot	10	dep:sub	_	_
8	juos	jis	PRON	Pgmpan	Case=Nom|PronType=Tot	10	obj	_	_
9	varžo	varžyti	VERB	Vgmp3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	10	dep:pred_atr_co	_	_
10	arba	arba	CCONJ	Cg	_	5	cc	_	_
11	skatina	skatinti	VERB	Vgmp3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	10	dep:pred_atr_co	_	_
12	išbandyti	išbandyti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	11	ccomp	_	_
13	nežinomas	nežinomas	ADJ	Agpfpan	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	14	amod	_	_
14	teritorijas	teritorija	NOUN	Ncfpan-	Case=Acc|Gender=Fem|Number=Plur	12	obj	_	SpaceAfter=No
15	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 dep:pred_atr_co	color:blue
1	Paprastai	paprastai	ADV	Rgp	Degree=Pos	0	root	_	_
2	visa	visas	PRON	Pgn--n	Case=Nom|PronType=Tot	1	dep:sub	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	6	punct	_	_
4	kas	kas	PRON	Pg--nn	Case=Nom|PronType=Tot	5	dep:sub	_	_
5	nesuvokiama	nesuvokti	VERB	Vgpp--npyn-n-p	Gender=Neut|Polarity=Neg|Tense=Pres|VerbForm=Part|Voice=Pass	6	dep:predn_atr_co	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	2	punct	_	_
7	ko	kas	PRON	Pg--gn	Case=Nom|PronType=Tot	8	obj	_	_
8	nesugebame	nesugebėti	VERB	Vgmp1p--y--ni-	Mood=Imp|Number=Plur|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin	6	dep:pred_atr_co	_	_
9	aprėpti	aprėpti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	8	dep:predv	_	_
10	protu	protas	NOUN	Ncmsin-	Case=Ins|Gender=Masc|Number=Sing	11	dep:obj_co	_	_
11	ar	ar	CCONJ	Cg	_	9	advmod	_	_
12	pojūčiais	pojūtis	NOUN	Ncmpin-	Case=Ins|Gender=Masc|Number=Plur	11	dep:obj_co	_	SpaceAfter=No
13	,	,	PUNCT	PUNCT	_	6	punct	_	_
14	tamsoje	tamsa	NOUN	Ncfsln-	Case=Loc|Gender=Fem|Number=Sing	1	dep:adj	_	SpaceAfter=No
15	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 12 dep:pred_atr_co	color:blue
1	Esmė	esmė	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	12	punct	_	_
3	kad	kad	CCONJ	Cg	_	12	mark	_	_
4	grožis	grožis	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	5	dep:sub	_	_
5	–	–	PUNCT	PUNCT	_	12	punct	_	_
6	tai	tai	PART	Qg	_	7	advmod:emph	_	_
7	visuma	visuma	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	5	dep:predn	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	12	punct	_	_
9	o	o	CCONJ	Cg	_	12	mark	_	_
10	visuma	visuma	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	12	dep:sub	_	_
11	visada	visada	ADV	Rgp	Degree=Pos	12	dep:adj	_	_
12	pranoksta	pranokti	VERB	Vgmp3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	dep:pred_atr_co	_	_
13	atskirų	atskiras	ADJ	Agpfpgn	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur	14	amod	_	_
14	dalių	dalis	NOUN	Ncfpgn-	Case=Gen|Gender=Fem|Number=Plur	15	nmod	_	_
15	sumą	suma	NOUN	Ncfsan-	Case=Acc|Gender=Fem|Number=Sing	12	obj	_	SpaceAfter=No
16	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


