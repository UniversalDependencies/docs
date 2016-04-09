

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This relation is universal.

155 nodes (0%) are attached to their parents as `iobj`.

144 instances of `iobj` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.69032258064516.

The following 5 pairs of parts of speech are connected with `iobj`: [da-pos/VERB]()-[da-pos/PRON]() (104; 67% instances), [da-pos/VERB]()-[da-pos/NOUN]() (42; 27% instances), [da-pos/VERB]()-[da-pos/PROPN]() (5; 3% instances), [da-pos/VERB]()-[da-pos/ADJ]() (3; 2% instances), [da-pos/ADJ]()-[da-pos/PROPN]() (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 iobj	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 iobj	color:blue
1	Mærk	mærke	VERB	_	Mood=Imp|VerbForm=Fin	0	root	_	_
2	kuverten	kuvert	NOUN	_	Definite=Def|Gender=Com|Number=Sing	1	iobj	_	_
3	"	"	PUNCT	_	_	4	punct	_	_
4	DUPLO	Duplo	PROPN	_	_	1	dobj	_	_
5	legetøj	legetøj	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	4	name	_	_
6	"	"	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 iobj	color:blue
1	Emballagesektoren	emballagesektor	NOUN	_	Definite=Def|Gender=Com|Number=Sing	2	nsubj	_	_
2	volder	volde	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	Danisco	Danisco	PROPN	_	_	2	iobj	_	_
4	betydelige	betydelig	ADJ	_	Degree=Pos|Number=Plur	5	amod	_	_
5	problemer	problem	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	2	dobj	_	_
6	.	.	PUNCT	_	_	2	punct	_	_

~~~


