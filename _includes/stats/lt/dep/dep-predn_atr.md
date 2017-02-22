

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

64 nodes (0%) are attached to their parents as `dep:predn_atr`.

64 instances of `dep:predn_atr` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.765625.

The following 9 pairs of parts of speech are connected with `dep:predn_atr`: [lt-pos/NOUN]()-[lt-pos/VERB]() (51; 80% instances), [lt-pos/NOUN]()-[lt-pos/ADJ]() (3; 5% instances), [lt-pos/NOUN]()-[lt-pos/NUM]() (2; 3% instances), [lt-pos/PRON]()-[lt-pos/VERB]() (2; 3% instances), [lt-pos/X]()-[lt-pos/VERB]() (2; 3% instances), [lt-pos/ADJ]()-[lt-pos/ADJ]() (1; 2% instances), [lt-pos/PART]()-[lt-pos/ADJ]() (1; 2% instances), [lt-pos/PRON]()-[lt-pos/PRON]() (1; 2% instances), [lt-pos/PROPN]()-[lt-pos/ADJ]() (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 dep:predn_atr	color:blue
1	Dokumentui	dokumentas	NOUN	Ncmsdn-	Case=Dat|Gender=Masc|Number=Sing	0	root	_	_
2	peržengti	peržengti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	1	dep:predv	_	_
3	paskutinį	paskutinis	ADJ	Agpmsan	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	4	amod	_	_
4	laiptelį	laiptelis	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	2	obj	_	_
5	-	-	PUNCT	PUNCT	_	6	punct	_	_
6	priėmimą	priėmimas	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	4	nmod	_	SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	9	punct	_	_
8	kuris	kuris	PRON	Pgmsnn	Case=Nom|PronType=Tot	9	dep:sub	_	_
9	planuojamas	planuoti	VERB	Vgpp-smpnnnn-p	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	6	dep:predn_atr	_	_
10	gruodį	gruodis	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	9	dep:adj	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 15 dep:predn_atr	color:blue
1	Tad	tad	ADV	Rgp	Degree=Pos	0	root	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	4	punct	_	_
3	prieš	prieš	ADP	Sga	AdpType=Prep	4	mark	_	_
4	nuspręsdamas	nuspręsti	VERB	Vgh--sm-n--n--	Gender=Masc|Number=Sing|Polarity=Pos	1	dep:adj	_	_
5	dirbti	dirbti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	4	ccomp	_	_
6	namuose	namai	NOUN	Ncmpln-	Case=Loc|Gender=Masc|Number=Plur	5	dep:adj	_	SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	4	punct	_	_
8	sau	savęs	PRON	Pg--dn	Case=Nom|Number=Dual|PronType=Tot	9	obj	_	_
9	atsakyti	atsakyti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	1	dep:predv	_	_
10	į	į	ADP	Sga	AdpType=Prep	11	case	_	_
11	klausimą	klausimas	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	9	obj	_	SpaceAfter=No
12	,	,	PUNCT	PUNCT	_	15	punct	_	_
13	kiek	kiek	ADV	Rgp	Degree=Pos	15	dep:adj	_	_
14	jums	tu	PRON	Pg-pdn	Case=Nom|Number=Dual|PronType=Tot	15	obj	_	_
15	svarbi	svarbus	ADJ	Agpfsnn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	11	dep:predn_atr	_	_
16	kitų	kitas	PRON	Pgmpgn	Case=Nom|PronType=Tot	17	nmod	_	_
17	žmonių	žmogus	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	18	nmod	_	_
18	draugija	draugija	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	15	dep:sub	_	SpaceAfter=No
19	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 20 dep:predn_atr	color:blue
1	Ne	ne	PART	Qg	_	2	advmod:emph	_	_
2	šventvagišką	šventvagiškas	ADJ	Agpmsan	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	16	dep:atr_co	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	5	punct	_	_
4	kurį	kuris	PRON	Pgmsan	Case=Nom|PronType=Tot	5	obj	_	_
5	jaučia	jausti	VERB	Vgmp3p--n--ni-	Mood=Imp|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
6	giminės	giminė	NOUN	Nccpnn-	Case=Nom|Number=Plur	5	dep:sub	_	_
7	numirus	numirti	VERB	Vgaa----n--n--	Polarity=Pos	5	dep:adj	_	_
8	ilgai	ilgai	ADV	Rgp	Degree=Pos	9	dep:adj	_	_
9	marintam	marinti	VERB	Vgps-smpnndn-p	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	10	dep:atr_co	_	SpaceAfter=No
10	,	,	PUNCT	PUNCT	_	14	punct	_	_
11	kančios	kančia	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	12	nmod	_	_
12	guolyje	guolis	NOUN	Ncmsln-	Case=Loc|Gender=Masc|Number=Sing	13	dep:adj	_	_
13	besiblaškančiam	besiblaškyti	VERB	Vgpp-smanndy-p	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	10	dep:atr_co	_	_
14	artimui	artimas	NOUN	Ncmsdn-	Case=Dat|Gender=Masc|Number=Sing	7	obj	_	SpaceAfter=No
15	,	,	PUNCT	PUNCT	_	5	punct	_	_
16	bet	bet	CCONJ	Cg	_	5	cc	_	_
17	tokį	toks	PRON	Pgmsan	Case=Nom|PronType=Tot	16	dep:atr_co	_	SpaceAfter=No
18	,	,	PUNCT	PUNCT	_	20	punct	_	_
19	koks	koks	PRON	Pgmsnn	Case=Nom|PronType=Tot	20	dep:sub	_	_
20	juntamas	justi	VERB	Vgpp-smpnnnn-p	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	17	dep:predn_atr	_	_
21	pasveikus	pasveikti	VERB	Vgaa----n--n--	Polarity=Pos	20	dep:adj	_	SpaceAfter=No
22	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


