

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

42 nodes (0%) are attached to their parents as `dep:predn_adj`.

33 instances of `dep:predn_adj` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.23809523809524.

The following 18 pairs of parts of speech are connected with `dep:predn_adj`: [lt-pos/VERB]()-[lt-pos/VERB]() (9; 21% instances), [lt-pos/VERB]()-[lt-pos/ADJ]() (5; 12% instances), [lt-pos/ADV]()-[lt-pos/NOUN]() (3; 7% instances), [lt-pos/ADV]()-[lt-pos/VERB]() (3; 7% instances), [lt-pos/VERB]()-[lt-pos/ADV]() (3; 7% instances), [lt-pos/ADJ]()-[lt-pos/ADJ]() (2; 5% instances), [lt-pos/NOUN]()-[lt-pos/ADJ]() (2; 5% instances), [lt-pos/NOUN]()-[lt-pos/VERB]() (2; 5% instances), [lt-pos/PRON]()-[lt-pos/PRON]() (2; 5% instances), [lt-pos/PRON]()-[lt-pos/VERB]() (2; 5% instances), [lt-pos/VERB]()-[lt-pos/NOUN]() (2; 5% instances), [lt-pos/ADJ]()-[lt-pos/ADV]() (1; 2% instances), [lt-pos/ADJ]()-[lt-pos/NOUN]() (1; 2% instances), [lt-pos/ADJ]()-[lt-pos/VERB]() (1; 2% instances), [lt-pos/ADV]()-[lt-pos/ADJ]() (1; 2% instances), [lt-pos/PUNCT]()-[lt-pos/ADJ]() (1; 2% instances), [lt-pos/PUNCT]()-[lt-pos/ADV]() (1; 2% instances), [lt-pos/VERB]()-[lt-pos/PRON]() (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 5 dep:predn_adj	color:blue
1	,	,	PUNCT	PUNCT	_	5	punct	_	_
2	kai	kai	CCONJ	Cg	_	5	mark	_	_
3	kantrybės	kantrybė	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	4	nmod	_	_
4	taurė	taurė	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	5	dep:sub	_	_
5	perpildoma	perpildyti	VERB	Vgpp-sfpnnnn-p	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	14	dep:predn_adj	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	5	punct	_	_
7	toks	toks	PRON	Pgmsnn	Case=Nom|PronType=Tot	10	nmod	_	_
8	"	"	PUNCT	PUNCT	_	10	punct	_	SpaceAfter=No
9	darbštuolis	darbštuolis	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	10	nmod	_	_
10	tylenis	tylenis	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	14	dep:sub	_	SpaceAfter=No
11	"	"	PUNCT	PUNCT	_	10	punct	_	_
12	emociškai	emociškai	ADV	Rgp	Degree=Pos	14	dep:adj	_	_
13	"	"	PUNCT	PUNCT	_	14	punct	_	SpaceAfter=No
14	sprogsta	sprogti	VERB	Vgmp3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
15	"	"	PUNCT	PUNCT	_	14	punct	_	SpaceAfter=No
16	.	.	PUNCT	PUNCT	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 21 dep:predn_adj	color:blue
1	Nežinau	nežinoti	VERB	Vgmp1s--y--ni-	Mood=Imp|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	4	punct	_	_
3	kaip	kaip	CCONJ	Cg	_	4	mark	_	_
4	įjungti	įjungti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	1	dep:predv_obj_co	_	_
5	arba	arba	CCONJ	Cg	_	4	mark	_	_
6	išjungti	išjungti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	4	dep:predv_obj_co	_	_
7	Dievą	dievas	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	4	obj	_	_
8	jis	jis	PRON	Pgmsnn	Case=Nom|PronType=Tot	12	dep:sub	_	_
9	man	aš	PRON	Pg-sdn	Case=Nom|Number=Dual|PronType=Tot	12	obj	_	_
10	taip	taip	ADV	Rgp	Degree=Pos	12	dep:adj	_	_
11	ir	ir	PART	Qg	_	10	advmod:emph	_	_
12	liko	likti	VERB	Vgma3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|VerbForm=Fin	1	dep:pred_co	_	_
13	tarp	tarp	ADP	Sgg	AdpType=Prep	15	case	_	_
14	daikto	daiktas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	15	dep:adj_co	_	_
15	ir	ir	CCONJ	Cg	_	12	cc	_	_
16	reiškinio	reiškinys	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	15	dep:adj_co	_	SpaceAfter=No
17	,	,	PUNCT	PUNCT	_	21	punct	_	_
18	nors	nors	CCONJ	Cg	_	21	mark	_	_
19	abu	abu	NUM	Mcm-nl-	Case=Nom|Gender=Masc|NumForm=Word|NumType=Card	20	nummod	_	_
20	jie	jis	PRON	Pgmpnn	Case=Nom|PronType=Tot	21	dep:sub	_	_
21	svarbūs	svarbus	ADJ	Agpmpnn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	12	dep:predn_adj	_	SpaceAfter=No
22	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 dep:predn_adj	color:blue
1	Nesvarbu	nesvarbus	ADJ	Agpn--n	Degree=Pos|Gender=Neut	0	root	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	5	punct	_	_
3	kokie	koks	PRON	Pgmpnn	Case=Nom|PronType=Tot	4	nmod	_	_
4	sprendimai	sprendimas	NOUN	Ncmpnn-	Case=Nom|Gender=Masc|Number=Plur	5	dep:sub	_	_
5	bus	būti	VERB	Vgmf3p--n--ni-	Mood=Imp|Number=Plur|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	1	dep:pred_sub	_	_
6	priimti	priimti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	5	dep:predv	_	_
7	po	po	ADP	Sgg	AdpType=Prep	8	case	_	_
8	to	tas	PRON	Pgmsgn	Case=Nom|PronType=Tot	6	dep:adj	_	_
9	niekas	niekas	PRON	Pg--nn	Case=Nom|PronType=Tot	10	dep:sub	_	_
10	neliks	nelikti	VERB	Vgmf3---y--ni-	Mood=Imp|Person=3|Polarity=Neg|Tense=Fut|VerbForm=Fin	1	dep:pred_co	_	_
11	taip	taip	ADV	Rgp	Degree=Pos	10	dep:adj	_	_
12	kaip	kaip	CCONJ	Cg	_	13	mark	_	_
13	buvę	būti	VERB	Vgpa--nann-n-p	Gender=Neut|Polarity=Pos|VerbForm=Part|Voice=Act	11	dep:predn_adj	_	SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


