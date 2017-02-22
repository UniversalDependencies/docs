

--------------------------------------------------------------------------------

## Treebank Statistics (UD_German)

This relation is universal.

147 nodes (0%) are attached to their parents as `fixed`.

147 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.55102040816327.

The following 38 pairs of parts of speech are connected with `fixed`: [de-pos/ADV]()-[de-pos/ADV]() (22; 15% instances), [de-pos/NOUN]()-[de-pos/ADP]() (18; 12% instances), [de-pos/ADP]()-[de-pos/ADP]() (14; 10% instances), [de-pos/ADV]()-[de-pos/ADP]() (13; 9% instances), [de-pos/NOUN]()-[de-pos/PART]() (8; 5% instances), [de-pos/PROPN]()-[de-pos/ADP]() (8; 5% instances), [de-pos/ADV]()-[de-pos/CCONJ]() (7; 5% instances), [de-pos/NOUN]()-[de-pos/ADV]() (7; 5% instances), [de-pos/CCONJ]()-[de-pos/ADV]() (6; 4% instances), [de-pos/PROPN]()-[de-pos/PART]() (4; 3% instances), [de-pos/ADP]()-[de-pos/ADV]() (3; 2% instances), [de-pos/ADV]()-[de-pos/PART]() (3; 2% instances), [de-pos/PRON]()-[de-pos/PART]() (3; 2% instances), [de-pos/VERB]()-[de-pos/ADP]() (3; 2% instances), [de-pos/ADJ]()-[de-pos/ADP]() (2; 1% instances), [de-pos/ADP]()-[de-pos/PRON]() (2; 1% instances), [de-pos/NUM]()-[de-pos/ADP]() (2; 1% instances), [de-pos/NUM]()-[de-pos/PART]() (2; 1% instances), [de-pos/ADJ]()-[de-pos/ADV]() (1; 1% instances), [de-pos/ADP]()-[de-pos/CCONJ]() (1; 1% instances), [de-pos/ADP]()-[de-pos/PROPN]() (1; 1% instances), [de-pos/ADP]()-[de-pos/VERB]() (1; 1% instances), [de-pos/ADV]()-[de-pos/ADJ]() (1; 1% instances), [de-pos/ADV]()-[de-pos/NOUN]() (1; 1% instances), [de-pos/ADV]()-[de-pos/PRON]() (1; 1% instances), [de-pos/ADV]()-[de-pos/SCONJ]() (1; 1% instances), [de-pos/ADV]()-[de-pos/VERB]() (1; 1% instances), [de-pos/CCONJ]()-[de-pos/ADP]() (1; 1% instances), [de-pos/CCONJ]()-[de-pos/CCONJ]() (1; 1% instances), [de-pos/DET]()-[de-pos/ADJ]() (1; 1% instances), [de-pos/DET]()-[de-pos/ADV]() (1; 1% instances), [de-pos/DET]()-[de-pos/NUM]() (1; 1% instances), [de-pos/NOUN]()-[de-pos/VERB]() (1; 1% instances), [de-pos/PRON]()-[de-pos/PRON]() (1; 1% instances), [de-pos/PROPN]()-[de-pos/ADV]() (1; 1% instances), [de-pos/PROPN]()-[de-pos/PROPN]() (1; 1% instances), [de-pos/SCONJ]()-[de-pos/ADV]() (1; 1% instances), [de-pos/SCONJ]()-[de-pos/CCONJ]() (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 fixed	color:blue
1	Produziert	produzieren	VERB	VVPP	VerbForm=Part	0	root	_	_
2	wird	werden	AUX	VAFIN	Mood=Ind|Tense=Pres|VerbForm=Fin	1	aux:pass	_	_
3	nach	nach	ADV	APPR	_	1	advmod	_	_
4	wie	wie	ADV	KOUS	_	3	fixed	_	_
5	vor	vor	ADV	APPR	_	3	fixed	_	_
6	in	in	ADP	APPR	_	7	case	_	_
7	Würzburg	Würzburg	PROPN	NE	_	1	obl	_	SpaceAfter=No
8	.	.	PUNCT	$.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 fixed	color:blue
1	Auf	auf	ADP	APPR	_	3	case	_	_
2	Brittas	Brittas	PROPN	NE	_	3	nmod	_	_
3	Wunsch	Wunsch	NOUN	NN	_	5	obl	_	_
4	hin	hin	ADP	APZR	_	3	fixed	_	_
5	halten	halten	VERB	VVFIN	Number=Plur|Person=3|VerbForm=Fin	0	root	_	_
6	beide	beide	PRON	PIS	Case=Nom|NumType=Card|PronType=Tot	5	nsubj	_	_
7	ihre	ihr	DET	PPOSAT	Person=3|Poss=Yes|PronType=Prs	8	det:poss	_	_
8	Beziehung	Beziehung	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	5	obj	_	_
9	jedoch	jedoch	ADV	ADV	_	5	advmod	_	_
10	geheim	geheim	ADV	ADJD	_	5	mark	_	SpaceAfter=No
11	.	.	PUNCT	$.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	Bis	bis	ADP	KON	_	3	advmod	_	_
2	zu	zu	ADP	APPR	_	1	fixed	_	_
3	200	200	NUM	CARD	NumType=Card	4	nummod	_	_
4	Menschen	Mensch	NOUN	NN	Case=Nom|Number=Plur	5	nsubj	_	_
5	starben	sterben	VERB	VVFIN	Number=Plur|Person=3|VerbForm=Fin	0	root	_	_
6	während	während	ADP	APPR	_	8	case	_	_
7	der	der	DET	ART	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	Razzia	Razzia	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	5	obl	_	SpaceAfter=No
9	.	.	PUNCT	$.	_	5	punct	_	_

~~~


