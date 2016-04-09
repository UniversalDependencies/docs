

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is universal.

1618 nodes (2%) are attached to their parents as `cop`.

1455 instances of `cop` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.33498145859085.

The following 10 pairs of parts of speech are connected with `cop`: [sv-pos/ADJ]()-[sv-pos/AUX]() (957; 59% instances), [sv-pos/NOUN]()-[sv-pos/AUX]() (560; 35% instances), [sv-pos/PRON]()-[sv-pos/AUX]() (60; 4% instances), [sv-pos/ADV]()-[sv-pos/AUX]() (13; 1% instances), [sv-pos/NUM]()-[sv-pos/AUX]() (10; 1% instances), [sv-pos/ADP]()-[sv-pos/AUX]() (7; 0% instances), [sv-pos/VERB]()-[sv-pos/AUX]() (4; 0% instances), [sv-pos/DET]()-[sv-pos/AUX]() (3; 0% instances), [sv-pos/PROPN]()-[sv-pos/AUX]() (3; 0% instances), [sv-pos/NOUN]()-[sv-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cop	color:blue
1	Man	man	PRON	PN|UTR|SIN|IND|SUB	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	nsubj	_	_
2	har	ha	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	anledning	anledning	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	dobj	_	_
4	att	att	PART	IE	_	6	mark	_	_
5	vara	vara	AUX	VB|INF|AKT	VerbForm=Inf|Voice=Act	6	cop	_	_
6	pessimistisk	pessimistisk	ADJ	JJ|POS|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	3	acl	_	_
7	.	.	PUNCT	MAD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 cop	color:blue
1	Sakta	sakta	ADJ	JJ|POS|UTR/NEU|SIN/PLU|IND/DEF|NOM	Case=Nom|Degree=Pos	10	nsubj	_	_
2	och	och	CONJ	KN	_	1	cc	_	_
3	kanske	kanske	ADV	AB	_	6	advmod	_	_
4	rent	ren	ADV	AB|POS	Degree=Pos	6	advmod	_	_
5	av	av	ADP	PP	_	4	mwe	_	_
6	avsaktande	avsaktande	ADJ	JJ|POS|UTR/NEU|SIN/PLU|IND/DEF|NOM	Case=Nom|Degree=Pos	1	conj	_	_
7	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	_	_
8	det	en	DET	DT|NEU|SIN|DEF	Definite=Def|Gender=Neut|Number=Sing	10	det	_	_
9	rätta	rätt	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Number=Sing	10	det	_	_
10	ordet	ord	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	0	root	_	_
11	.	.	PUNCT	MAD	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 cop	color:blue
1	Annat	annan	PRON	PN|NEU|SIN|IND|SUB/OBJ	Definite=Ind|Gender=Neut|Number=Sing	0	root	_	_
2	var	vara	AUX	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	1	cop	_	_
3	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	1	nsubj	_	_
4	i	i	ADP	PP	_	5	case	_	_
5	bondesamhället	bondesamhälle	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	1	nmod	_	_
6	.	.	PUNCT	MAD	_	1	punct	_	_

~~~


