

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This relation is universal.

5014 nodes (5%) are attached to their parents as `dobj`.

4743 instances of `dobj` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.40626246509773.

The following 38 pairs of parts of speech are connected with `dobj`: [da-pos/VERB]()-[da-pos/NOUN]() (3116; 62% instances), [da-pos/VERB]()-[da-pos/PRON]() (982; 20% instances), [da-pos/VERB]()-[da-pos/VERB]() (445; 9% instances), [da-pos/VERB]()-[da-pos/ADJ]() (169; 3% instances), [da-pos/VERB]()-[da-pos/PROPN]() (141; 3% instances), [da-pos/VERB]()-[da-pos/ADV]() (37; 1% instances), [da-pos/VERB]()-[da-pos/NUM]() (19; 0% instances), [da-pos/VERB]()-[da-pos/X]() (19; 0% instances), [da-pos/VERB]()-[da-pos/ADP]() (15; 0% instances), [da-pos/AUX]()-[da-pos/NOUN]() (12; 0% instances), [da-pos/CONJ]()-[da-pos/NOUN]() (10; 0% instances), [da-pos/ADV]()-[da-pos/NOUN]() (7; 0% instances), [da-pos/X]()-[da-pos/NOUN]() (7; 0% instances), [da-pos/X]()-[da-pos/X]() (4; 0% instances), [da-pos/ADJ]()-[da-pos/NOUN]() (2; 0% instances), [da-pos/ADV]()-[da-pos/PRON]() (2; 0% instances), [da-pos/CONJ]()-[da-pos/ADJ]() (2; 0% instances), [da-pos/NOUN]()-[da-pos/NOUN]() (2; 0% instances), [da-pos/PROPN]()-[da-pos/X]() (2; 0% instances), [da-pos/VERB]()-[da-pos/CONJ]() (2; 0% instances), [da-pos/VERB]()-[da-pos/SYM]() (2; 0% instances), [da-pos/ADJ]()-[da-pos/PRON]() (1; 0% instances), [da-pos/ADJ]()-[da-pos/VERB]() (1; 0% instances), [da-pos/ADP]()-[da-pos/NOUN]() (1; 0% instances), [da-pos/ADP]()-[da-pos/PRON]() (1; 0% instances), [da-pos/ADV]()-[da-pos/ADJ]() (1; 0% instances), [da-pos/AUX]()-[da-pos/ADJ]() (1; 0% instances), [da-pos/AUX]()-[da-pos/NUM]() (1; 0% instances), [da-pos/AUX]()-[da-pos/PRON]() (1; 0% instances), [da-pos/CONJ]()-[da-pos/NUM]() (1; 0% instances), [da-pos/CONJ]()-[da-pos/PROPN]() (1; 0% instances), [da-pos/PROPN]()-[da-pos/PROPN]() (1; 0% instances), [da-pos/VERB]()-[da-pos/INTJ]() (1; 0% instances), [da-pos/VERB]()-[da-pos/SCONJ]() (1; 0% instances), [da-pos/X]()-[da-pos/ADV]() (1; 0% instances), [da-pos/X]()-[da-pos/PRON]() (1; 0% instances), [da-pos/X]()-[da-pos/PROPN]() (1; 0% instances), [da-pos/X]()-[da-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 dobj	color:blue
1	"	"	PUNCT	_	_	3	punct	_	_
2	Vi	vi	PRON	_	Case=Nom|Gender=Com|Number=Plur|Person=1|PronType=Prs	3	nsubj	_	_
3	fralægger	fralægge	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	os	vi	PRON	_	Case=Acc|Gender=Com|Number=Plur|Person=1|PronType=Prs	3	iobj	_	_
5	ethvert	enhver	DET	_	Gender=Neut|Number=Sing|PronType=Ind	6	det	_	_
6	ansvar	ansvar	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	3	dobj	_	_
7	for	for	ADP	_	AdpType=Prep	8	case	_	_
8	mordene	mord	NOUN	_	Definite=Def|Gender=Neut|Number=Plur	6	nmod	_	_
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 dobj	color:blue
1	Men	men	CONJ	_	_	6	discourse	_	_
2	man	man	PRON	_	Case=Nom|Gender=Com|PronType=Ind	6	nsubj	_	_
3	ka'	kunne	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux	_	_
4	sgu'	sgu'	ADV	_	_	6	advmod	_	_
5	ikke	ikke	ADV	_	_	6	neg	_	_
6	undvære	undvære	VERB	_	VerbForm=Inf|Voice=Act	0	root	_	_
7	dem	de	PRON	_	Case=Acc|Number=Plur|Person=3|PronType=Prs	6	dobj	_	_
8	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 dobj	color:blue
1	Regningen	regning	NOUN	_	Definite=Def|Gender=Com|Number=Sing	4	nsubj	_	_
2	for	for	ADP	_	AdpType=Prep	3	case	_	_
3	FN-operationen	FN-operation	NOUN	_	Definite=Def|Gender=Com|Number=Sing	1	nmod	_	_
4	ventes	vente	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
5	at	at	PART	_	PartType=Inf	6	mark	_	_
6	overstige	overstige	VERB	_	VerbForm=Inf|Voice=Act	4	dobj	_	_
7	13	13	NUM	_	NumType=Card	8	nummod	_	_
8	mia.	milliard	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	6	dobj	_	_
9	kroner	krone	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	8	nmod	_	_
10	.	.	PUNCT	_	_	4	punct	_	_

~~~


