

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This relation is a language-specific subtype of [obl]().
There are also 1 other language-specific subtypes of `obl`: [obl:tmod]().

561 nodes (1%) are attached to their parents as `obl:loc`.

535 instances of `obl:loc` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.05525846702317.

The following 11 pairs of parts of speech are connected with `obl:loc`: [da-pos/VERB]()-[da-pos/ADV]() (500; 89% instances), [da-pos/VERB]()-[da-pos/NOUN]() (26; 5% instances), [da-pos/VERB]()-[da-pos/ADP]() (17; 3% instances), [da-pos/NOUN]()-[da-pos/ADV]() (9; 2% instances), [da-pos/NOUN]()-[da-pos/VERB]() (3; 1% instances), [da-pos/ADJ]()-[da-pos/ADV]() (1; 0% instances), [da-pos/ADV]()-[da-pos/ADV]() (1; 0% instances), [da-pos/VERB]()-[da-pos/ADJ]() (1; 0% instances), [da-pos/VERB]()-[da-pos/VERB]() (1; 0% instances), [da-pos/VERB]()-[da-pos/X]() (1; 0% instances), [da-pos/X]()-[da-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 obl:loc	color:blue
1	"	"	PUNCT	_	_	2	punct	_	_
2	Se	se	VERB	_	Mood=Imp	0	root	_	_
3	lige	lige	ADV	_	_	4	advmod	_	_
4	frem	frem	ADV	_	_	2	obl:loc	_	_
5	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 obl:loc	color:blue
1	Imens	imens	ADV	_	_	5	advmod	_	_
2	kunne	kunne	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	5	aux	_	_
3	de	den	DET	_	Number=Plur|PronType=Dem	4	det	_	_
4	langtidsledige	langtidsledig	ADJ	_	Degree=Pos|Number=Plur	5	nsubj	_	_
5	se	se	VERB	_	VerbForm=Inf|Voice=Act	0	root	_	_
6	video	video	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	5	obj	_	_
7	eller	eller	CCONJ	_	_	8	cc	_	_
8	gå	gå	VERB	_	VerbForm=Inf|Voice=Act	5	conj	_	_
9	tur	tur	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	8	obl:loc	_	_
10	med	med	ADP	_	AdpType=Prep	11	case	_	_
11	hunden	hund	NOUN	_	Definite=Def|Gender=Com|Number=Sing	8	obl	_	_
12	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 obl:loc	color:blue
1	Det	det	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	obj	_	_
2	mærkede	mærke	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	vi	vi	PRON	_	Case=Nom|Gender=Com|Number=Plur|Person=1|PronType=Prs	2	nsubj	_	_
4	straks	straks	ADV	_	_	2	advmod	_	_
5	på	på	ADP	_	AdpType=Prep	6	case	_	_
6	stationen	station	NOUN	_	Definite=Def|Gender=Com|Number=Sing	2	obl	_	_
7	i	i	ADP	_	AdpType=Prep	9	case	_	_
8	den	den	DET	_	Gender=Com|Number=Sing|PronType=Dem	9	det	_	_
9	provinsby	provinsby	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	6	nmod	_	_
10	,	,	PUNCT	_	_	9	punct	_	_
11	vi	vi	PRON	_	Case=Nom|Gender=Com|Number=Plur|Person=1|PronType=Prs	12	nsubj	_	_
12	bor	bo	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	9	advcl	_	_
13	i	i	ADP	_	AdpType=Prep	12	obl:loc	_	_
14	.	.	PUNCT	_	_	2	punct	_	_

~~~


