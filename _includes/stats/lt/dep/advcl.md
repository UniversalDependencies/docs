

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian)

This relation is universal.

73 nodes (1%) are attached to their parents as `advcl`.

45 instances of `advcl` (62%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.75342465753425.

The following 14 pairs of parts of speech are connected with `advcl`: [lt-pos/VERB]()-[lt-pos/VERB]() (38; 52% instances), [lt-pos/NOUN]()-[lt-pos/VERB]() (11; 15% instances), [lt-pos/ADJ]()-[lt-pos/VERB]() (8; 11% instances), [lt-pos/ADV]()-[lt-pos/VERB]() (3; 4% instances), [lt-pos/ADV]()-[lt-pos/ADJ]() (2; 3% instances), [lt-pos/VERB]()-[lt-pos/ADJ]() (2; 3% instances), [lt-pos/VERB]()-[lt-pos/NOUN]() (2; 3% instances), [lt-pos/ADJ]()-[lt-pos/ADJ]() (1; 1% instances), [lt-pos/ADJ]()-[lt-pos/NOUN]() (1; 1% instances), [lt-pos/ADJ]()-[lt-pos/PART]() (1; 1% instances), [lt-pos/ADV]()-[lt-pos/ADV]() (1; 1% instances), [lt-pos/ADV]()-[lt-pos/NOUN]() (1; 1% instances), [lt-pos/NOUN]()-[lt-pos/PART]() (1; 1% instances), [lt-pos/NOUN]()-[lt-pos/PRON]() (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 advcl	color:blue
1	O	o	CCONJ	CC	_	6	cc	_	and|_
2	ištraukti	ištraukti	VERB	VB	Polarity=Pos|Reflex=No|VerbForm=Inf|Voice=Act	6	xcomp	_	pull out|_
3	nepažeistus	nepažeisti	VERB	VBNL	Case=Acc|Definite=Ind|Gender=Masc|Number=Plur|Polarity=Neg|Reflex=No|Tense=Past|VerbForm=Part|Voice=Act	2	advcl	_	|_
4	–	–	PUNCT	PUNCT	_	6	punct	_	_|_
5	dar	dar	ADV	RB	Degree=Pos|Polarity=Pos	6	advmod	_	yet|_
6	sunkiau	sunkiai	ADV	RBR	Degree=Cmp|Polarity=Pos	0	root	_	with difficulty|_
7	.	.	PUNCT	PUNCT	_	6	punct	_	.|_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 20 advcl	color:blue
1	Be	Be	ADP	UH	_	2	case	_	without|_
2	abejonės	abejonė	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	6	parataxis	_	doubts|_
3	,	,	PUNCT	PUNCT	_	2	punct	_	,|_
4	tada	tada	ADV	RB	Degree=Pos	6	advmod	_	then|_
5	būtų	būti	AUX	VBC	Mood=Cnd|Number=Sing|Polarity=Pos|Reflex=No|VerbForm=Fin|Voice=Act	6	cop	_	be|_
6	tekę	tekti	VERB	VBC	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur|Polarity=Pos|Reflex=No|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	need|_
7	(	(	PUNCT	PUNCT	_	10	punct	_	(|_
8	kad	kad	SCONJ	UH	_	10	mark	_	that|_
9	ir	ir	PART	UH	_	10	advmod	_	and|_
10	nenoromis	nenoromis	ADV	RB	Degree=Pos|Polarity=Neg	6	advmod	_	|_
11	)	)	PUNCT	PUNCT	_	10	punct	_	)|_
12	surengti	surengti	VERB	VB	Polarity=Pos|Reflex=No|VerbForm=Inf|Voice=Act	6	xcomp	_	|_
13	Laikinosios	laikinas	ADJ	JJL	Case=Gen|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	14	amod	_	temporary|_
14	vyriausybės	vyriausybė	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	15	nmod	_	government|_
15	procesą	procesas	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	12	obj	_	process|_
16	,	,	PUNCT	PUNCT	_	20	punct	_	,|_
17	kaip	kaip	SCONJ	UH	_	20	mark	_	how|_
18	Prancūzijoje	Prancūzija	PROPN	NNP	Case=Loc|Gender=Fem|Number=Sing	20	obl	_	France|_
19	buvo	būti	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Past|VerbForm=Fin|Voice=Act	20	aux	_	be|_
20	surengtas	surengti	VERB	VBNL	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|Polarity=Pos|Reflex=No|Tense=Past|VerbForm=Part|Voice=Pass	15	advcl	_	|_
21	Pétaine‘o	pétaine‘as	NOUN	NN	Case=Gen|Gender=Masc|Number=Sing	22	nmod	_	|_
22	procesas	procesas	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	20	nsubj	_	process|_
23	.	.	PUNCT	PUNCT	_	6	punct	_	.|_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 6 advcl	color:blue
1	Paprastai	paprastai	ADV	RB	Degree=Pos|Polarity=Pos	15	advmod	_	usually|_
2	,	,	PUNCT	PUNCT	_	6	punct	_	,|_
3	kai	kai	SCONJ	UH	_	6	advmod	_	when|_
4	į	į	ADP	UH	_	3	fixed	_	to|_
5	lėktuvai	lėktuvas	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur	6	nsubj	_	airplane|_
6	nukrenta	nukristi	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Reflex=No|Tense=Pres	15	advcl	_	drop|_
7	į	į	ADP	UH	_	8	case	_	to|_
8	jūrą	jūra	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	6	obl	_	sea|_
9	,	,	PUNCT	PUNCT	_	6	punct	_	,|_
10	nustatyti	nustatyti	VERB	VB	Polarity=Pos|Reflex=No|VerbForm=Inf|Voice=Act	15	xcomp	_	|_
11	katastrofos	katastrofa	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	12	nmod	_	catastrophy|_
12	priežastis	priežastis	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	10	obj	_	reason|_
13	būna	būti	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Pres	15	aux	_	there is|_
14	ypač	ypač	ADV	RB	Degree=Pos|Polarity=Pos	15	advmod	_	especially|_
15	sunku	sunkus	ADJ	PRED	Definite=Ind|Degree=Pos|Gender=Neut|Polarity=Pos	0	root	_	difficult|_
16	.	.	PUNCT	PUNCT	_	15	punct	_	.|_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is universal.

1 nodes (0%) are attached to their parents as `advcl`.

1 instances of `advcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 1 pairs of parts of speech are connected with `advcl`: [lt-pos/ADV]()-[lt-pos/VERB]() (1; 100% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 advcl	color:blue
1	Pagal	pagal	ADP	Sga	AdpType=Prep	3	case	_	_
2	naująją	naujas	ADJ	Agpfsay	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	3	amod	_	_
3	tvarką	tvarka	NOUN	Ncfsan-	Case=Acc|Gender=Fem|Number=Sing	7	obj	_	_
4	dirbantieji	dirbantysis	NOUN	Ncmpnn-	Case=Nom|Gender=Masc|Number=Plur	7	dep:sub	_	_
5	į	į	ADP	Sga	AdpType=Prep	6	case	_	_
6	pensiją	pensija	NOUN	Ncfsan-	Case=Acc|Gender=Fem|Number=Sing	8	obj	_	_
7	turės	turėti	VERB	Vgmf3p--n--ni-	Mood=Imp|Number=Plur|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	0	root	_	_
8	išeiti	išeiti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	7	dep:predv	_	_
9	2,5	2,5	NUM	M----d-	NumForm=Digit	11	dep:adj	_	_
10	metų	metai	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	9	nmod	_	_
11	vėliau	vėlai	ADV	Rgc	Degree=Cmp	7	dep:adj	_	_
12	nei	nei	CCONJ	Cg	_	13	mark	_	_
13	išeidavo	išeiti	VERB	Vgmq3p--n--ni-	Mood=Imp|Number=Plur|Person=3|Polarity=Pos|VerbForm=Fin	11	advcl	_	_
14	iki šiol	iki šiol	ADV	Rgp	Degree=Pos	13	dep:adj	_	SpaceAfter=No
15	,	,	PUNCT	PUNCT	_	7	punct	_	_
16	valdžia	valdžia	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	19	dep:sub	_	_
17	dėl	dėl	ADP	Sgg	AdpType=Prep	18	case	_	_
18	to	tas	PRON	Pgmsgn	Case=Nom|PronType=Tot	20	obj	_	_
19	sako	sakyti	VERB	Vgmp3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	dep:pred_co	_	_
20	nenusileisianti	nenusileisti	VERB	Vgpf-sfaynvy-p	Gender=Fem|Number=Sing|Polarity=Neg|Tense=Fut|VerbForm=Part|Voice=Act	19	ccomp	_	SpaceAfter=No
21	.	.	PUNCT	PUNCT	_	7	punct	_	_

~~~


