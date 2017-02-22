

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

111 nodes (0%) are attached to their parents as `dep:pred_obj_co`.

80 instances of `dep:pred_obj_co` (72%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.28828828828829.

The following 6 pairs of parts of speech are connected with `dep:pred_obj_co`: [lt-pos/CCONJ]()-[lt-pos/VERB]() (33; 30% instances), [lt-pos/VERB]()-[lt-pos/VERB]() (32; 29% instances), [lt-pos/PUNCT]()-[lt-pos/VERB]() (27; 24% instances), [lt-pos/NOUN]()-[lt-pos/VERB]() (11; 10% instances), [lt-pos/PRON]()-[lt-pos/VERB]() (7; 6% instances), [lt-pos/ADV]()-[lt-pos/VERB]() (1; 1% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 dep:pred_obj_co	color:blue
1	Pastarasis	pastaras	ADJ	Agpmsny	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	4	punct	_	_
3	nors	nors	CCONJ	Cg	_	4	mark	_	_
4	blaivininkas	blaivininkas	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	1	dep:predn_adj	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	6	punct	_	_
6	manau	manyti	VERB	Vgmp1s--n--ni-	Mood=Imp|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	dep:par	_	SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	6	punct	_	_
8	pamatęs	pamatyti	VERB	Vgpa-smannnn-p	Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Act	1	dep:adj	_	SpaceAfter=No
9	,	,	PUNCT	PUNCT	_	8	punct	_	_
10	kur	kur	ADV	Rgp	Degree=Pos	11	dep:adj	_	_
11	stovi	stovėti	VERB	Vgmp3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	12	dep:pred_obj_co	_	_
12	ir	ir	CCONJ	Cg	_	8	advmod	_	_
13	kaip	kaip	ADV	Rgp	Degree=Pos	14	dep:adj	_	_
14	atrodo	atrodyti	VERB	Vgmp3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	12	dep:pred_obj_co	_	SpaceAfter=No
15	,	,	PUNCT	PUNCT	_	1	punct	_	_
16	ligi	ligi	ADP	Sgg	AdpType=Prep	18	case	_	_
17	žemės	žemė	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	18	nmod	_	_
18	graibymo	graibymas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	1	obj	_	SpaceAfter=No
19	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 14 dep:pred_obj_co	color:blue
1	Jis	jis	PRON	Pgmsnn	Case=Nom|PronType=Tot	0	root	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	6	punct	_	_
3	kad	kad	CCONJ	Cg	_	6	mark	_	_
4	koncernų	koncernas	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	5	nmod	_	_
5	akcininkai	akcininkas	NOUN	Ncmpnn-	Case=Nom|Gender=Masc|Number=Plur	6	dep:sub	_	_
6	bus	būti	VERB	Vgmf3p--n--ni-	Mood=Imp|Number=Plur|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	1	dep:pred_obj_co	_	_
7	suinteresuoti	suinteresuoti	VERB	Vgps-pmpnnnn-p	Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	6	dep:predn	_	_
8	finansiniu	finansinis	ADJ	Agpmsin	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	9	amod	_	_
9	rezultatu	rezultatas	NOUN	Ncmsin-	Case=Ins|Gender=Masc|Number=Sing	7	obj	_	SpaceAfter=No
10	,	,	PUNCT	PUNCT	_	6	punct	_	_
11	o	o	CCONJ	Cg	_	6	mark	_	_
12	ilgalaikis	ilgalaikis	ADJ	Agpmsnn	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	13	amod	_	_
13	bendradarbiavimas	bendradarbiavimas	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	14	dep:sub	_	_
14	nenutrūks	nenutrūkti	VERB	Vgmf3s--y--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Neg|Tense=Fut|VerbForm=Fin	6	dep:pred_obj_co	_	SpaceAfter=No
15	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 17 dep:pred_obj_co	color:blue
1	Tada	tada	ADV	Rgp	Degree=Pos	0	root	_	_
2	vaikai	vaikas	NOUN	Ncmpnn-	Case=Nom|Gender=Masc|Number=Plur	1	dep:sub	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	13	punct	_	_
4	ką	kas	PRON	Pg--an	Case=Nom|PronType=Tot	5	obj	_	_
5	jaučia	jausti	VERB	Vgmp3p--n--ni-	Mood=Imp|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	13	dep:pred_obj_co	_	_
6	jų	jis	PRON	Pgmpgn	Case=Nom|PronType=Tot	7	nmod	_	_
7	tėvai	tėvai	NOUN	Ncmpnn-	Case=Nom|Gender=Masc|Number=Plur	5	dep:sub	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	13	punct	_	_
9	koks	koks	PRON	Pgmsnn	Case=Nom|PronType=Tot	10	nmod	_	_
10	elgesys	elgesys	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	11	dep:sub	_	_
11	yra	būti	VERB	Vgmp3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	13	dep:pred_obj_co	_	_
12	netoleruojamas	netoleruoti	VERB	Vgpp-smpynnn-p	Gender=Masc|Number=Sing|Polarity=Neg|Tense=Pres|VerbForm=Part|Voice=Pass	11	dep:predn	_	SpaceAfter=No
13	,	,	PUNCT	PUNCT	_	1	punct	_	_
14	kad	kad	CCONJ	Cg	_	17	mark	_	_
15	jų	jis	PRON	Pgmpgn	Case=Nom|PronType=Tot	16	nmod	_	_
16	jausmai	jausmas	NOUN	Ncmpnn-	Case=Nom|Gender=Masc|Number=Plur	17	dep:sub	_	_
17	yra	būti	VERB	Vgmp3p--n--ni-	Mood=Imp|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	13	dep:pred_obj_co	_	_
18	priimami	priimti	VERB	Vgpp-pmpnnnn-p	Gender=Masc|Number=Plur|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	17	dep:predn	_	SpaceAfter=No
19	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


