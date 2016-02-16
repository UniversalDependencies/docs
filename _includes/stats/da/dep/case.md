

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This relation is universal.

9908 nodes (10%) are attached to their parents as `case`.

9571 instances of `case` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.81550262414211.

The following 18 pairs of parts of speech are connected with `case`: [da-pos/NOUN]()-[da-pos/ADP]() (7415; 75% instances), [da-pos/PROPN]()-[da-pos/ADP]() (1152; 12% instances), [da-pos/PRON]()-[da-pos/ADP]() (458; 5% instances), [da-pos/ADV]()-[da-pos/ADP]() (282; 3% instances), [da-pos/ADJ]()-[da-pos/ADP]() (246; 2% instances), [da-pos/NUM]()-[da-pos/ADP]() (172; 2% instances), [da-pos/CONJ]()-[da-pos/ADP]() (51; 1% instances), [da-pos/X]()-[da-pos/ADP]() (51; 1% instances), [da-pos/ADP]()-[da-pos/ADP]() (38; 0% instances), [da-pos/NOUN]()-[da-pos/VERB]() (27; 0% instances), [da-pos/NOUN]()-[da-pos/SCONJ]() (4; 0% instances), [da-pos/PROPN]()-[da-pos/VERB]() (4; 0% instances), [da-pos/PRON]()-[da-pos/VERB]() (2; 0% instances), [da-pos/SCONJ]()-[da-pos/ADP]() (2; 0% instances), [da-pos/ADJ]()-[da-pos/VERB]() (1; 0% instances), [da-pos/PART]()-[da-pos/ADP]() (1; 0% instances), [da-pos/SYM]()-[da-pos/ADP]() (1; 0% instances), [da-pos/VERB]()-[da-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 case	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 case	color:blue
1	Til	til	ADP	_	AdpType=Prep	2	case	_	_
2	orgie	orgie	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	0	root	_	_
3	hos	hos	ADP	_	AdpType=Prep	4	case	_	_
4	Søren	Søren	PROPN	_	_	2	nmod	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 case	color:blue
1	Han	han	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	kiggede	kigge	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	nysgerrigt	nysgerrigt	ADV	_	Degree=Pos	2	advmod	_	_
4	på	på	ADP	_	AdpType=Prep	5	case	_	_
5	mig	jeg	PRON	_	Case=Acc|Gender=Com|Number=Sing|Person=1|PronType=Prs	2	nmod	_	_
6	.	.	PUNCT	_	_	2	punct	_	_

~~~


