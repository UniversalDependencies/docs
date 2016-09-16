

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This relation is a language-specific subtype of [nmod]().
There are also 2 other language-specific subtypes of `nmod`: [nmod:poss](), [nmod:tmod]().

611 nodes (1%) are attached to their parents as `nmod:loc`.

584 instances of `nmod:loc` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.02291325695581.

The following 10 pairs of parts of speech are connected with `nmod:loc`: [da-pos/VERB]()-[da-pos/ADV]() (548; 90% instances), [da-pos/VERB]()-[da-pos/NOUN]() (28; 5% instances), [da-pos/VERB]()-[da-pos/ADP]() (18; 3% instances), [da-pos/NOUN]()-[da-pos/ADV]() (9; 1% instances), [da-pos/NOUN]()-[da-pos/VERB]() (3; 0% instances), [da-pos/ADJ]()-[da-pos/ADV]() (1; 0% instances), [da-pos/ADV]()-[da-pos/ADV]() (1; 0% instances), [da-pos/VERB]()-[da-pos/VERB]() (1; 0% instances), [da-pos/VERB]()-[da-pos/X]() (1; 0% instances), [da-pos/X]()-[da-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nmod:loc	color:blue
1	"	"	PUNCT	_	_	2	punct	_	_
2	Se	se	VERB	_	Mood=Imp|VerbForm=Fin	0	root	_	_
3	lige	lige	ADV	_	_	4	advmod	_	_
4	frem	frem	ADV	_	_	2	nmod:loc	_	_
5	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 nmod:loc	color:blue
1	Imens	imens	ADV	_	_	5	advmod	_	_
2	kunne	kunne	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	5	aux	_	_
3	de	den	DET	_	Number=Plur|PronType=Dem	4	det	_	_
4	langtidsledige	langtidsledig	ADJ	_	Degree=Pos|Number=Plur	5	nsubj	_	_
5	se	se	VERB	_	VerbForm=Inf|Voice=Act	0	root	_	_
6	video	video	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	5	dobj	_	_
7	eller	eller	CONJ	_	_	5	cc	_	_
8	gå	gå	VERB	_	VerbForm=Inf|Voice=Act	5	conj	_	_
9	tur	tur	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	8	nmod:loc	_	_
10	med	med	ADP	_	AdpType=Prep	11	case	_	_
11	hunden	hund	NOUN	_	Definite=Def|Gender=Com|Number=Sing	8	nmod	_	_
12	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 nmod:loc	color:blue
1	Det	det	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	dobj	_	_
2	mærkede	mærke	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	vi	vi	PRON	_	Case=Nom|Gender=Com|Number=Plur|Person=1|PronType=Prs	2	nsubj	_	_
4	straks	straks	ADV	_	_	2	advmod	_	_
5	på	på	ADP	_	AdpType=Prep	6	case	_	_
6	stationen	station	NOUN	_	Definite=Def|Gender=Com|Number=Sing	2	nmod	_	_
7	i	i	ADP	_	AdpType=Prep	9	case	_	_
8	den	den	DET	_	Gender=Com|Number=Sing|PronType=Dem	9	det	_	_
9	provinsby	provinsby	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	6	nmod	_	_
10	,	,	PUNCT	_	_	9	punct	_	_
11	vi	vi	PRON	_	Case=Nom|Gender=Com|Number=Plur|Person=1|PronType=Prs	12	nsubj	_	_
12	bor	bo	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	9	advcl	_	_
13	i	i	ADP	_	AdpType=Prep	12	nmod:loc	_	_
14	.	.	PUNCT	_	_	2	punct	_	_

~~~


