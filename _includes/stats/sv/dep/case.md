

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is universal.

10221 nodes (11%) are attached to their parents as `case`.

10075 instances of `case` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.89413951668134.

The following 26 pairs of parts of speech are connected with `case`: [sv-pos/NOUN]()-[sv-pos/ADP]() (8307; 81% instances), [sv-pos/VERB]()-[sv-pos/ADP]() (570; 6% instances), [sv-pos/PRON]()-[sv-pos/ADP]() (408; 4% instances), [sv-pos/PROPN]()-[sv-pos/ADP]() (403; 4% instances), [sv-pos/ADJ]()-[sv-pos/ADP]() (198; 2% instances), [sv-pos/NUM]()-[sv-pos/ADP]() (157; 2% instances), [sv-pos/NOUN]()-[sv-pos/ADV]() (46; 0% instances), [sv-pos/NOUN]()-[sv-pos/PUNCT]() (27; 0% instances), [sv-pos/NOUN]()-[sv-pos/ADJ]() (17; 0% instances), [sv-pos/ADV]()-[sv-pos/ADP]() (13; 0% instances), [sv-pos/NUM]()-[sv-pos/PUNCT]() (12; 0% instances), [sv-pos/VERB]()-[sv-pos/ADV]() (12; 0% instances), [sv-pos/DET]()-[sv-pos/ADP]() (11; 0% instances), [sv-pos/NUM]()-[sv-pos/ADV]() (11; 0% instances), [sv-pos/NOUN]()-[sv-pos/PRON]() (7; 0% instances), [sv-pos/VERB]()-[sv-pos/ADJ]() (7; 0% instances), [sv-pos/ADJ]()-[sv-pos/ADV]() (2; 0% instances), [sv-pos/ADP]()-[sv-pos/ADP]() (2; 0% instances), [sv-pos/NOUN]()-[sv-pos/DET]() (2; 0% instances), [sv-pos/NOUN]()-[sv-pos/NOUN]() (2; 0% instances), [sv-pos/PRON]()-[sv-pos/ADV]() (2; 0% instances), [sv-pos/ADP]()-[sv-pos/ADV]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/CONJ]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/PROPN]() (1; 0% instances), [sv-pos/PRON]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/PRON]()-[sv-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 case	color:blue
1	Men	men	CONJ	KN	_	5	cc	_	_
2	för	för	ADP	PP	_	4	case	_	_
3	barnens	barn	NOUN	NN|NEU|PLU|DEF|GEN	Case=Gen|Definite=Def|Gender=Neut|Number=Plur	4	nmod:poss	_	_
4	del	del	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	5	nmod	_	_
5	är	vara	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	5	nsubj	_	_
7	annorlunda	annorlunda	ADV	AB	_	5	advmod	_	_
8	.	.	PUNCT	MAD	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 case	color:blue
1	Nu	nu	ADV	AB	_	2	advmod	_	_
2	har	ha	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	kvinnorna	kvinna	NOUN	NN|UTR|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Plur	2	nsubj	_	_
4	ingenting	ingenting	PRON	PN|NEU|SIN|IND|SUB/OBJ	Definite=Ind|Gender=Neut|Number=Sing	2	dobj	_	_
5	att	att	PART	IE	_	6	mark	_	_
6	hävda	hävda	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	4	acl	_	_
7	sig	sig	PRON	PN|UTR/NEU|SIN/PLU|DEF|OBJ	Case=Acc|Definite=Def	6	dobj	_	_
8	med	med	ADP	PP	_	6	case	_	_
9	.	.	PUNCT	MAD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 case	color:blue
1	Skiljer	skilja	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	de	de	PRON	PN|UTR/NEU|PLU|DEF|SUB	Case=Nom|Definite=Def|Number=Plur	1	nsubj	_	_
3	sig	sig	PRON	PN|UTR/NEU|SIN/PLU|DEF|OBJ	Case=Acc|Definite=Def	1	dobj	_	_
4	från	från	ADP	PP	_	5	case	_	_
5	andra	annan	PRON	PN|UTR/NEU|PLU|IND|SUB/OBJ	Definite=Ind|Number=Plur	1	nmod	_	_
6	och	och	CONJ	KN	_	1	cc	_	_
7	i	i	ADP	PP	_	1	conj	_	_
8	så	så	ADV	AB	_	7	mwe	_	_
9	fall	fall	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	7	mwe	_	_
10	på	på	ADP	PP	_	12	case	_	_
11	vilket	vilken	DET	HD|NEU|SIN|IND	Definite=Ind|Gender=Neut|Number=Sing|PronType=Int,Rel	12	det	_	_
12	sätt	sätt	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	7	nmod	_	_
13	?	?	PUNCT	MAD	_	1	punct	_	_

~~~


