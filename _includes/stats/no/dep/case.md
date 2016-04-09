

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian)

This relation is universal.

37351 nodes (12%) are attached to their parents as `case`.

37096 instances of `case` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.74099756365291.

The following 11 pairs of parts of speech are connected with `case`: [no-pos/NOUN]()-[no-pos/ADP]() (24355; 65% instances), [no-pos/PROPN]()-[no-pos/ADP]() (5303; 14% instances), [no-pos/VERB]()-[no-pos/ADP]() (3539; 9% instances), [no-pos/PRON]()-[no-pos/ADP]() (1836; 5% instances), [no-pos/ADJ]()-[no-pos/ADP]() (971; 3% instances), [no-pos/NUM]()-[no-pos/ADP]() (786; 2% instances), [no-pos/DET]()-[no-pos/ADP]() (303; 1% instances), [no-pos/ADV]()-[no-pos/ADP]() (142; 0% instances), [no-pos/ADP]()-[no-pos/ADP]() (102; 0% instances), [no-pos/X]()-[no-pos/ADP]() (11; 0% instances), [no-pos/SYM]()-[no-pos/ADP]() (3; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 case	color:blue
1	Thomassen	Thomassen	PROPN	_	_	4	nsubj	_	_
2	er	være	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	på	på	ADP	_	_	4	case	_	_
4	vei	vei	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
5	til	til	ADP	_	_	8	case	_	_
6	sin	sin	DET	_	Gender=Masc|Number=Sing|Poss=Yes	8	nmod	_	_
7	neste	neste	DET	_	Definite=Def|PronType=Dem	8	det	_	_
8	gjerning	gjerning	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	4	nmod	_	_
9	.	$.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 case	color:blue
1	Det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
2	var	være	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	5	cop	_	_
3	en	en	DET	_	Gender=Masc|Number=Sing	5	det	_	_
4	fremmed	fremmed	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	5	amod	_	_
5	tanke	tanke	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
6	for	for	ADP	_	_	7	case	_	_
7	Borten	Borten	PROPN	_	_	5	nmod	_	_
8	.	$.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 case	color:blue
1	Dette	dette	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	0	root	_	_
2	uaktet	uaktet	ADP	_	_	8	case	_	_
3	at	at	SCONJ	_	_	8	mark	_	_
4	også	også	ADV	_	_	5	nmod	_	_
5	han	han	PRON	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
6	selv	selv	DET	_	_	5	det	_	_
7	har	ha	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	8	aux	_	_
8	underskrevet	underskrive	VERB	_	VerbForm=Part	1	advcl	_	_
9	dommen	dom	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	8	dobj	_	_
10	.	$.	PUNCT	_	_	1	punct	_	_

~~~


