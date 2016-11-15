

--------------------------------------------------------------------------------

## Treebank Statistics (UD_German)

This relation is universal.

154 nodes (0%) are attached to their parents as `mwe`.

129 instances of `mwe` (84%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.53246753246753.

The following 38 pairs of parts of speech are connected with `mwe`: [de-pos/ADV]()-[de-pos/ADV]() (22; 14% instances), [de-pos/NOUN]()-[de-pos/ADP]() (18; 12% instances), [de-pos/ADP]()-[de-pos/ADP]() (13; 8% instances), [de-pos/ADV]()-[de-pos/ADP]() (12; 8% instances), [de-pos/NOUN]()-[de-pos/PART]() (9; 6% instances), [de-pos/NOUN]()-[de-pos/ADV]() (8; 5% instances), [de-pos/PROPN]()-[de-pos/ADP]() (8; 5% instances), [de-pos/ADV]()-[de-pos/CONJ]() (6; 4% instances), [de-pos/CONJ]()-[de-pos/ADV]() (6; 4% instances), [de-pos/ADP]()-[de-pos/ADV]() (5; 3% instances), [de-pos/VERB]()-[de-pos/ADP]() (5; 3% instances), [de-pos/PROPN]()-[de-pos/PART]() (4; 3% instances), [de-pos/ADV]()-[de-pos/PART]() (3; 2% instances), [de-pos/PRON]()-[de-pos/PART]() (3; 2% instances), [de-pos/ADJ]()-[de-pos/ADP]() (2; 1% instances), [de-pos/ADP]()-[de-pos/CONJ]() (2; 1% instances), [de-pos/ADP]()-[de-pos/PRON]() (2; 1% instances), [de-pos/NUM]()-[de-pos/ADP]() (2; 1% instances), [de-pos/NUM]()-[de-pos/PART]() (2; 1% instances), [de-pos/PRON]()-[de-pos/ADP]() (2; 1% instances), [de-pos/SCONJ]()-[de-pos/ADV]() (2; 1% instances), [de-pos/VERB]()-[de-pos/ADV]() (2; 1% instances), [de-pos/ADJ]()-[de-pos/ADV]() (1; 1% instances), [de-pos/ADJ]()-[de-pos/CONJ]() (1; 1% instances), [de-pos/ADP]()-[de-pos/ADJ]() (1; 1% instances), [de-pos/ADP]()-[de-pos/PROPN]() (1; 1% instances), [de-pos/ADV]()-[de-pos/ADJ]() (1; 1% instances), [de-pos/ADV]()-[de-pos/DET]() (1; 1% instances), [de-pos/ADV]()-[de-pos/PRON]() (1; 1% instances), [de-pos/CONJ]()-[de-pos/ADP]() (1; 1% instances), [de-pos/CONJ]()-[de-pos/CONJ]() (1; 1% instances), [de-pos/DET]()-[de-pos/ADJ]() (1; 1% instances), [de-pos/NUM]()-[de-pos/DET]() (1; 1% instances), [de-pos/PRON]()-[de-pos/PRON]() (1; 1% instances), [de-pos/PROPN]()-[de-pos/ADV]() (1; 1% instances), [de-pos/PROPN]()-[de-pos/PROPN]() (1; 1% instances), [de-pos/SCONJ]()-[de-pos/CONJ]() (1; 1% instances), [de-pos/VERB]()-[de-pos/NOUN]() (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 mwe	color:blue
1	Bin	sein	VERB	VAFIN	Mood=Ind|Tense=Pres|VerbForm=Fin	6	cop	_	_
2	nach	nach	ADP	APPO	_	6	case	_	_
3	wie	wie	ADV	KOKOM	_	2	mwe	_	_
4	vor	vor	ADV	APPR	_	3	mwe	_	_
5	sehr	sehr	ADV	ADV	_	6	advmod	_	_
6	zufrieden	zufrieden	ADJ	ADJD	Degree=Pos	0	root	_	_
7	.	.	PUNCT	$.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 mwe	color:blue
1	Auf	auf	ADP	APPR	_	3	case	_	_
2	Brittas	Brittas	PROPN	NE	_	3	nmod	_	_
3	Wunsch	Wunsch	NOUN	NN	_	5	nmod	_	_
4	hin	hin	ADP	APZR	_	3	mwe	_	_
5	halten	halten	VERB	VVFIN	Number=Plur|Person=3|VerbForm=Fin	0	root	_	_
6	beide	beide	PRON	PIS	Case=Nom|NumType=Card|PronType=Tot	5	nsubj	_	_
7	ihre	ihr	DET	PPOSAT	Person=3|Poss=Yes|PronType=Prs	8	det:poss	_	_
8	Beziehung	Beziehung	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	5	dobj	_	_
9	jedoch	jedoch	ADV	ADV	_	5	advmod	_	_
10	geheim	geheim	ADV	ADJD	_	5	mark	_	_
11	.	.	PUNCT	$.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 mwe	color:blue
1	Bis	bis	ADP	KON	_	3	advmod	_	_
2	zu	zu	ADP	APPR	_	1	mwe	_	_
3	200	200	NUM	CARD	NumType=Card	4	nummod	_	_
4	Menschen	Mensch	NOUN	NN	Case=Nom|Number=Plur	5	nsubj	_	_
5	starben	sterben	VERB	VVFIN	Number=Plur|Person=3|VerbForm=Fin	0	root	_	_
6	während	während	ADP	APPR	_	8	case	_	_
7	der	der	DET	ART	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	Razzia	Razzia	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	5	nmod	_	_
9	.	.	PUNCT	$.	_	5	punct	_	_

~~~


