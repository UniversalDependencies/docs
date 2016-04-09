

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is universal.

1826 nodes (2%) are attached to their parents as `advcl`.

1349 instances of `advcl` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.75903614457831.

The following 33 pairs of parts of speech are connected with `advcl`: [sv-pos/VERB]()-[sv-pos/VERB]() (1137; 62% instances), [sv-pos/ADJ]()-[sv-pos/VERB]() (158; 9% instances), [sv-pos/VERB]()-[sv-pos/ADJ]() (114; 6% instances), [sv-pos/VERB]()-[sv-pos/NOUN]() (94; 5% instances), [sv-pos/NOUN]()-[sv-pos/VERB]() (83; 5% instances), [sv-pos/VERB]()-[sv-pos/ADV]() (66; 4% instances), [sv-pos/ADJ]()-[sv-pos/NOUN]() (52; 3% instances), [sv-pos/ADJ]()-[sv-pos/ADJ]() (18; 1% instances), [sv-pos/VERB]()-[sv-pos/PRON]() (14; 1% instances), [sv-pos/ADJ]()-[sv-pos/ADV]() (13; 1% instances), [sv-pos/NOUN]()-[sv-pos/ADJ]() (11; 1% instances), [sv-pos/ADJ]()-[sv-pos/PRON]() (6; 0% instances), [sv-pos/ADP]()-[sv-pos/VERB]() (6; 0% instances), [sv-pos/NOUN]()-[sv-pos/NOUN]() (6; 0% instances), [sv-pos/ADV]()-[sv-pos/VERB]() (5; 0% instances), [sv-pos/NOUN]()-[sv-pos/ADV]() (5; 0% instances), [sv-pos/PRON]()-[sv-pos/VERB]() (5; 0% instances), [sv-pos/ADJ]()-[sv-pos/PROPN]() (4; 0% instances), [sv-pos/ADV]()-[sv-pos/ADJ]() (4; 0% instances), [sv-pos/ADV]()-[sv-pos/NOUN]() (3; 0% instances), [sv-pos/PRON]()-[sv-pos/NOUN]() (3; 0% instances), [sv-pos/VERB]()-[sv-pos/ADP]() (3; 0% instances), [sv-pos/VERB]()-[sv-pos/NUM]() (3; 0% instances), [sv-pos/VERB]()-[sv-pos/PROPN]() (3; 0% instances), [sv-pos/NUM]()-[sv-pos/VERB]() (2; 0% instances), [sv-pos/ADJ]()-[sv-pos/ADP]() (1; 0% instances), [sv-pos/ADJ]()-[sv-pos/DET]() (1; 0% instances), [sv-pos/DET]()-[sv-pos/VERB]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/INTJ]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/PRON]() (1; 0% instances), [sv-pos/PRON]()-[sv-pos/ADV]() (1; 0% instances), [sv-pos/PRON]()-[sv-pos/INTJ]() (1; 0% instances), [sv-pos/VERB]()-[sv-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 advcl	color:blue
1	Har	ha	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	vi	vi	PRON	PN|UTR|PLU|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Plur	1	nsubj	_	_
3	råd	råd	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	1	dobj	_	_
4	att	att	PART	IE	_	5	mark	_	_
5	avstå	avstå	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	1	advcl	_	_
6	från	från	ADP	PP	_	8	case	_	_
7	denna	denna	DET	DT|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing	8	det	_	_
8	period	period	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	5	nmod	_	_
9	tillsammans	tillsammans	ADV	AB	_	10	advmod	_	_
10	med	med	ADP	PP	_	12	case	_	_
11	våra	vi	DET	PS|UTR/NEU|PLU|DEF	Definite=Def|Number=Plur|Poss=Yes	12	nmod:poss	_	_
12	barn	barn	NOUN	NN|NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	8	nmod	_	_
13	?	?	PUNCT	MAD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 advcl	color:blue
1	Allt	all	PRON	PN|NEU|SIN|IND|SUB/OBJ	Definite=Ind|Gender=Neut|Number=Sing	5	nsubj	_	_
2	var	vara	AUX	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	5	cop	_	_
3	alltså	alltså	ADV	AB	_	5	advmod	_	_
4	ganska	ganska	ADV	AB	_	5	advmod	_	_
5	bra	bra	ADJ	JJ|POS|UTR/NEU|SIN/PLU|IND/DEF|NOM	Case=Nom|Degree=Pos	0	root	_	_
6	tills	tills	SCONJ	SN	_	8	mark	_	_
7	vi	vi	PRON	PN|UTR|PLU|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Plur	8	nsubj	_	_
8	skilde	skilja	VERB	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	5	advcl	_	_
9	oss	vi	PRON	PN|UTR|PLU|DEF|OBJ	Case=Acc|Definite=Def|Gender=Com|Number=Plur	8	dobj	_	_
10	...	...	PUNCT	MAD	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 advcl	color:blue
1	Det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	3	nsubj	_	_
2	har	ha	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	_	_
3	blivit	bli	VERB	VB|SUP|AKT	VerbForm=Sup|Voice=Act	0	root	_	_
4	så	så	ADV	AB	_	3	advmod	_	_
5	att	att	SCONJ	SN	_	8	mark	_	_
6	kvinnorna	kvinna	NOUN	NN|UTR|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Plur	8	nsubj	_	_
7	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	_
8	livlösa	livlös	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Degree=Pos|Number=Plur	3	advcl	_	_
9	.	.	PUNCT	MAD	_	3	punct	_	_

~~~


