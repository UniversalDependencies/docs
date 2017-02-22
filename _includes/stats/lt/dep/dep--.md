

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is universal.

8 nodes (0%) are attached to their parents as `dep:-`.

6 instances of `dep:-` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.875.

The following 6 pairs of parts of speech are connected with `dep:-`: [lt-pos/VERB]()-[lt-pos/ADJ]() (3; 38% instances), [lt-pos/ADJ]()-[lt-pos/ADJ]() (1; 13% instances), [lt-pos/NOUN]()-[lt-pos/ADJ]() (1; 13% instances), [lt-pos/NOUN]()-[lt-pos/PRON]() (1; 13% instances), [lt-pos/VERB]()-[lt-pos/CCONJ]() (1; 13% instances), [lt-pos/VERB]()-[lt-pos/PRON]() (1; 13% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 dep:-	color:blue
1	Jeigu	jeigu	CCONJ	Cg	_	3	mark	_	_
2	koplyčios	koplyčia	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	3	obj	_	_
3	nesustiprinsime	nesustiprinti	VERB	Vgmf1p--y--ni-	Mood=Imp|Number=Plur|Person=1|Polarity=Neg|Tense=Fut|VerbForm=Fin	7	dep:pred_adj	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	3	punct	_	_
5	ji	jis	PRON	Pgfsnn	Case=Nom|PronType=Tot	7	dep:sub	_	_
6	tuoj	tuoj	ADV	Rgp	Degree=Pos	7	dep:adj	_	_
7	nugrius	nugriūti	VERB	Vgmf3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	0	root	_	SpaceAfter=No
8	”	”	ADJ	Aux	_	7	dep:-	_	SpaceAfter=No
9	,	,	PUNCT	PUNCT	_	7	punct	_	_
10	pabrėžė	pabrėžti	VERB	Vgma3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|VerbForm=Fin	7	dep:pred_co	_	_
11	D	D.	X	Ys	Abbr=Yes	13	nmod	_	SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	11	punct	_	_
13	Čornij	Čornij	PROPN	Npfsnns	Case=Nom|Gender=Fem|Number=Sing	10	dep:sub	_	SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 dep:-	color:blue
1	§	§	PUNCT	PUNCT	_	3	punct	_	_
2	Jis	jis	PRON	Pgmsnn	Case=Nom|PronType=Tot	3	dep:sub	_	_
3	sakydavo	sakyti	VERB	Vgmq3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|VerbForm=Fin	0	root	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	6	punct	_	_
5	kad	kad	CCONJ	Cg	_	6	mark	_	_
6	yra	būti	VERB	Vgmp3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	dep:pred_obj	_	_
7	mano	aš	PRON	Pg-sgn	Case=Nom|PronType=Tot	8	nmod	_	_
8	uošvis	uošvis	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	6	dep:predn	_	SpaceAfter=No
9	,	,	PUNCT	PUNCT	_	3	punct	_	_
10	aš	aš	PRON	Pg-snn	Case=Nom|PronType=Tot	12	dep:sub	_	_
11	tuo	tas	PRON	Pgmsin	Case=Nom|PronType=Tot	12	dep:-	_	_
12	netikiu	netikėti	VERB	Vgmp1s--y--ni-	Mood=Imp|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin	3	dep:pred_co	_	SpaceAfter=No
13	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 dep:-	color:blue
1	Valstybės	valstybė	NOUN	Ncfpnn-	Case=Nom|Gender=Fem|Number=Plur	3	dep:sub_co	_	_
2	narės	narė	NOUN	Ncfpnn-	Case=Nom|Gender=Fem|Number=Plur	1	nmod	_	_
3	ir	ir	CCONJ	Cg	_	6	advmod	_	_
4	jų	jis	PRON	Pgmpgn	Case=Nom|PronType=Tot	5	dep:-	_	_
5	regionai	regionas	NOUN	Ncmpnn-	Case=Nom|Gender=Masc|Number=Plur	3	dep:sub_co	_	_
6	buvo	būti	VERB	Vgma3p--n--ni-	Mood=Imp|Number=Plur|Person=3|Polarity=Pos|VerbForm=Fin	0	root	_	_
7	skatinami	skatinti	VERB	Vgpp-pmpnnnn-p	Gender=Masc|Number=Plur|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	6	dep:predn	_	_
8	gerinti	gerinti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	11	dep:predv_co	_	_
9	inovacijų	inovacija	NOUN	Ncfpgn-	Case=Gen|Gender=Fem|Number=Plur	10	nmod	_	_
10	politiką	politika	NOUN	Ncfsan-	Case=Acc|Gender=Fem|Number=Sing	8	obj	_	_
11	ir	ir	CCONJ	Cg	_	18	cc	_	_
12	įgyvendinti	įgyvendinti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	11	dep:predv_co	_	_
13	nacionalines	nacionalinis	ADJ	Agpfpan	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	14	dep:atr_co	_	_
14	bei	bei	CCONJ	Cg	_	17	cc	_	_
15	regionų	regionas	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	14	dep:atr_co	_	_
16	inovacijų	inovacija	NOUN	Ncfpgn-	Case=Gen|Gender=Fem|Number=Plur	17	nmod	_	_
17	strategijas	strategija	NOUN	Ncfpan-	Case=Acc|Gender=Fem|Number=Plur	12	obj	_	SpaceAfter=No
18	,	,	PUNCT	PUNCT	_	7	punct	_	_
19	taip pat	taip pat	PART	Qg	_	20	advmod:emph	_	_
20	tobulinti	tobulinti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	18	dep:predv_co	_	_
21	vertinimą	vertinimas	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	20	obj	_	SpaceAfter=No
22	,	,	PUNCT	PUNCT	_	6	punct	_	_
23	vykdant	vykdyti	VERB	Vgap----n--n--	Polarity=Pos|Tense=Pres	28	dep:adj	_	_
24	šią	šis	PRON	Pgfsan	Case=Nom|PronType=Tot	25	nmod	_	_
25	veiklą	veikla	NOUN	Ncfsan-	Case=Acc|Gender=Fem|Number=Sing	23	obj	_	_
26	jiems	jis	PRON	Pgmpdn	Case=Nom|Number=Dual|PronType=Tot	28	obj	_	_
27	buvo	būti	VERB	Vgma3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|VerbForm=Fin	6	dep:pred_co	_	_
28	teikiama	teikti	VERB	Vgpp-sfpnnnn-p	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	27	dep:predn	_	_
29	pagalba	pagalba	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	27	dep:sub	_	_
30	(	(	PUNCT	PUNCT	_	32	punct	_	SpaceAfter=No
31	pirmiausia	pirma	ADV	Rgs	Degree=Sup	32	dep:adj	_	_
32	taikant	taikyti	VERB	Vgap----n--n--	Polarity=Pos|Tense=Pres	28	dep:adj	_	_
33	sanglaudos	sanglauda	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	34	nmod	_	_
34	politiką	politika	NOUN	Ncfsan-	Case=Acc|Gender=Fem|Number=Sing	32	obj	_	SpaceAfter=No
35	)	)	PUNCT	PUNCT	_	32	punct	_	SpaceAfter=No
36	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


