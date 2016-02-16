

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is universal.

4 nodes (0%) are attached to their parents as `discourse`.

4 instances of `discourse` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 2 pairs of parts of speech are connected with `discourse`: [ga-pos/VERB]()-[ga-pos/INTJ]() (3; 75% instances), [ga-pos/NOUN]()-[ga-pos/INTJ]() (1; 25% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 discourse	color:blue
1	'	'	PUNCT	Punct	_	5	punct	_	_
2	'	'	PUNCT	Punct	_	5	punct	_	_
3	Á	á	INTJ	Itj	_	5	discourse	_	_
4	,	,	PUNCT	Punct	_	5	punct	_	_
5	níl	bí	VERB	PresInd	Mood=Ind|Negative=Neg|Tense=Pres	0	root	_	_
6	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	5	nsubj	_	_
7	chomh	chomh	ADV	Its	_	8	advmod	_	_
8	holc	olc	ADJ	Adj	Degree=Pos	5	xcomp:pred	_	_
9	san	sin	X	CM	Dialect=Munster|PronType=Dem	8	det	_	_
10	ar	ar	ADP	Simp	_	11	case	_	_
11	fad	fad	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	8	nmod	_	_
12	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 discourse	color:blue
1	Och	och	INTJ	Itj	_	4	discourse	_	_
2	,	,	PUNCT	Punct	_	4	punct	_	_
3	a	a	PART	Voc	PartType=Voc	4	case:voc	_	_
4	chumannaigh	chumannaigh	NOUN	Noun	Case=Com|Gender=Fem|Number=Sing	0	root	_	_
5	!	!	PUNCT	!	_	4	punct	_	_

~~~


