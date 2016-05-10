

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is universal.

1817 nodes (2%) are attached to their parents as `advcl`.

1339 instances of `advcl` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.71986791414419.

The following 33 pairs of parts of speech are connected with `advcl`: [sv-pos/VERB]()-[sv-pos/VERB]() (1128; 62% instances), [sv-pos/ADJ]()-[sv-pos/VERB]() (157; 9% instances), [sv-pos/VERB]()-[sv-pos/ADJ]() (114; 6% instances), [sv-pos/VERB]()-[sv-pos/NOUN]() (95; 5% instances), [sv-pos/NOUN]()-[sv-pos/VERB]() (83; 5% instances), [sv-pos/VERB]()-[sv-pos/ADV]() (66; 4% instances), [sv-pos/ADJ]()-[sv-pos/NOUN]() (52; 3% instances), [sv-pos/ADJ]()-[sv-pos/ADJ]() (18; 1% instances), [sv-pos/VERB]()-[sv-pos/PRON]() (14; 1% instances), [sv-pos/ADJ]()-[sv-pos/ADV]() (13; 1% instances), [sv-pos/NOUN]()-[sv-pos/ADJ]() (11; 1% instances), [sv-pos/ADJ]()-[sv-pos/PRON]() (6; 0% instances), [sv-pos/ADP]()-[sv-pos/VERB]() (6; 0% instances), [sv-pos/NOUN]()-[sv-pos/NOUN]() (6; 0% instances), [sv-pos/ADV]()-[sv-pos/VERB]() (5; 0% instances), [sv-pos/NOUN]()-[sv-pos/ADV]() (5; 0% instances), [sv-pos/PRON]()-[sv-pos/VERB]() (5; 0% instances), [sv-pos/ADJ]()-[sv-pos/PROPN]() (4; 0% instances), [sv-pos/ADV]()-[sv-pos/ADJ]() (4; 0% instances), [sv-pos/ADV]()-[sv-pos/NOUN]() (3; 0% instances), [sv-pos/PRON]()-[sv-pos/NOUN]() (3; 0% instances), [sv-pos/VERB]()-[sv-pos/ADP]() (3; 0% instances), [sv-pos/VERB]()-[sv-pos/NUM]() (3; 0% instances), [sv-pos/VERB]()-[sv-pos/PROPN]() (3; 0% instances), [sv-pos/NUM]()-[sv-pos/VERB]() (2; 0% instances), [sv-pos/ADJ]()-[sv-pos/ADP]() (1; 0% instances), [sv-pos/ADJ]()-[sv-pos/DET]() (1; 0% instances), [sv-pos/DET]()-[sv-pos/VERB]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/INTJ]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/PRON]() (1; 0% instances), [sv-pos/PRON]()-[sv-pos/ADV]() (1; 0% instances), [sv-pos/PRON]()-[sv-pos/INTJ]() (1; 0% instances), [sv-pos/VERB]()-[sv-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 advcl	color:blue
1	Har	ha	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	vi	vi	PRON	PN|UTR|PLU|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Plur|PronType=Prs	1	nsubj	_	_
3	råd	råd	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	1	dobj	_	_
4	att	att	PART	IE	_	5	mark	_	_
5	avstå	avstå	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	1	advcl	_	_
6	från	från	ADP	PP	_	8	case	_	_
7	denna	denna	DET	DT|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing|PronType=Dem	8	det	_	_
8	period	period	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	5	nmod	_	_
9	tillsammans	tillsammans	ADV	AB	_	10	advmod	_	_
10	med	med	ADP	PP	_	12	case	_	_
11	våra	vi	DET	PS|UTR/NEU|PLU|DEF	Definite=Def|Number=Plur|Poss=Yes|PronType=Prs	12	nmod:poss	_	_
12	barn	barn	NOUN	NN|NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	8	nmod	_	_
13	?	?	PUNCT	MAD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 advcl	color:blue
1	Allt	all	PRON	PN|NEU|SIN|IND|SUB/OBJ	Definite=Ind|Gender=Neut|Number=Sing|PronType=Tot	5	nsubj	_	_
2	var	vara	VERB	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	5	cop	_	_
3	alltså	alltså	ADV	AB	_	5	advmod	_	_
4	ganska	ganska	ADV	AB	_	5	advmod	_	_
5	bra	bra	ADJ	JJ|POS|UTR/NEU|SIN/PLU|IND/DEF|NOM	Case=Nom|Degree=Pos	0	root	_	_
6	tills	tills	SCONJ	SN	_	8	mark	_	_
7	vi	vi	PRON	PN|UTR|PLU|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Plur|PronType=Prs	8	nsubj	_	_
8	skilde	skilja	VERB	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	5	advcl	_	_
9	oss	vi	PRON	PN|UTR|PLU|DEF|OBJ	Case=Acc|Definite=Def|Gender=Com|Number=Plur|PronType=Prs	8	dobj	_	_
10	...	...	PUNCT	MAD	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 advcl	color:blue
1	Det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	3	nsubj	_	_
2	har	ha	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	_	_
3	blivit	bli	VERB	VB|SUP|AKT	VerbForm=Sup|Voice=Act	0	root	_	_
4	så	så	ADV	AB	_	3	advmod	_	_
5	att	att	SCONJ	SN	_	8	mark	_	_
6	kvinnorna	kvinna	NOUN	NN|UTR|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Plur	8	nsubj	_	_
7	är	vara	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	_
8	livlösa	livlös	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Degree=Pos|Number=Plur	3	advcl	_	_
9	.	.	PUNCT	MAD	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish-LinES)

This relation is universal.

1266 nodes (2%) are attached to their parents as `advcl`.

890 instances of `advcl` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.16824644549763.

The following 18 pairs of parts of speech are connected with `advcl`: [sv-pos/VERB]()-[sv-pos/VERB]() (1123; 89% instances), [sv-pos/ADJ]()-[sv-pos/VERB]() (45; 4% instances), [sv-pos/NOUN]()-[sv-pos/VERB]() (42; 3% instances), [sv-pos/ADV]()-[sv-pos/VERB]() (13; 1% instances), [sv-pos/VERB]()-[sv-pos/AUX]() (13; 1% instances), [sv-pos/AUX]()-[sv-pos/VERB]() (9; 1% instances), [sv-pos/ADP]()-[sv-pos/VERB]() (7; 1% instances), [sv-pos/ADJ]()-[sv-pos/NOUN]() (2; 0% instances), [sv-pos/DET]()-[sv-pos/VERB]() (2; 0% instances), [sv-pos/NOUN]()-[sv-pos/NOUN]() (2; 0% instances), [sv-pos/ADJ]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/ADJ]()-[sv-pos/PROPN]() (1; 0% instances), [sv-pos/INTJ]()-[sv-pos/VERB]() (1; 0% instances), [sv-pos/PART]()-[sv-pos/VERB]() (1; 0% instances), [sv-pos/PRON]()-[sv-pos/VERB]() (1; 0% instances), [sv-pos/SCONJ]()-[sv-pos/VERB]() (1; 0% instances), [sv-pos/VERB]()-[sv-pos/CONJ]() (1; 0% instances), [sv-pos/VERB]()-[sv-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 advcl	color:blue
1	Villkorsstyrda	_	ADJ	POS-PL-IND	_	2	amod	_	_
2	filter	_	NOUN	IND-NOM	_	3	nsubj	_	_
3	fungerar	_	VERB	PRES-ACT	_	0	root	_	_
4	oberoende	_	VERB	NDE	_	3	advcl	_	_
5	av	_	ADP	_	_	6	case	_	_
6	varandra	_	PRON	RCP-PL-ACC	_	4	nmod	_	_
7	.	_	PUNCT	Period	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 advcl	color:blue
1	Det	_	PRON	PERS-P3SG	_	3	nsubj	_	_
2	var	_	VERB	PAST-ACT	_	3	cop	_	_
3	svårt	_	ADJ	POS-SG-IND	_	0	root	_	_
4	.	_	PUNCT	Period	_	2	punct	_	_
5	Hon	_	PRON	PERS-P3SG-NOM	_	6	nsubj	_	_
6	tyckte	_	VERB	PAST-ACT	_	3	advcl	_	_
7	så	_	ADV	_	_	8	advmod	_	_
8	illa	_	ADV	_	_	6	advmod	_	_
9	om	_	ADP	_	_	10	case	_	_
10	arbetet	_	NOUN	SG-DEF-NOM	_	6	nmod	_	_
11	.	_	PUNCT	Period	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 advcl	color:blue
1	Det	_	PRON	EX-P3SG	_	8	expl	_	_
2	var	_	VERB	PAST-ACT	_	8	cop	_	_
3	naturligtvis	_	ADV	_	_	8	advmod	_	_
4	i	_	ADP	_	_	6	advmod	_	_
5	stort	_	ADJ	POS-SG-IND	_	6	amod	_	_
6	sett	_	VERB	AD-SG-IND	_	8	advcl	_	_
7	en	_	DET	SG-IND	_	8	det	_	_
8	artighetsgest	_	NOUN	SG-IND-NOM	_	0	root	_	_
9	.	_	PUNCT	Period	_	8	punct	_	_

~~~


