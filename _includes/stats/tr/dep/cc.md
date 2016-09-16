

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Turkish)

This relation is universal.

1077 nodes (2%) are attached to their parents as `cc`.

974 instances of `cc` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.80129990714949.

The following 25 pairs of parts of speech are connected with `cc`: [tr-pos/VERB]()-[tr-pos/CONJ]() (418; 39% instances), [tr-pos/NOUN]()-[tr-pos/CONJ]() (396; 37% instances), [tr-pos/ADJ]()-[tr-pos/CONJ]() (137; 13% instances), [tr-pos/PROPN]()-[tr-pos/CONJ]() (43; 4% instances), [tr-pos/PRON]()-[tr-pos/CONJ]() (12; 1% instances), [tr-pos/ADV]()-[tr-pos/CONJ]() (11; 1% instances), [tr-pos/DET]()-[tr-pos/CONJ]() (6; 1% instances), [tr-pos/NUM]()-[tr-pos/CONJ]() (6; 1% instances), [tr-pos/VERB]()-[tr-pos/ADJ]() (6; 1% instances), [tr-pos/VERB]()-[tr-pos/PUNCT]() (6; 1% instances), [tr-pos/VERB]()-[tr-pos/NOUN]() (5; 0% instances), [tr-pos/VERB]()-[tr-pos/VERB]() (5; 0% instances), [tr-pos/ADP]()-[tr-pos/CONJ]() (4; 0% instances), [tr-pos/ADJ]()-[tr-pos/PUNCT]() (3; 0% instances), [tr-pos/NOUN]()-[tr-pos/ADJ]() (3; 0% instances), [tr-pos/NOUN]()-[tr-pos/NOUN]() (3; 0% instances), [tr-pos/PUNCT]()-[tr-pos/CONJ]() (3; 0% instances), [tr-pos/PROPN]()-[tr-pos/ADP]() (2; 0% instances), [tr-pos/VERB]()-[tr-pos/PRON]() (2; 0% instances), [tr-pos/ADV]()-[tr-pos/PUNCT]() (1; 0% instances), [tr-pos/CONJ]()-[tr-pos/CONJ]() (1; 0% instances), [tr-pos/CONJ]()-[tr-pos/PUNCT]() (1; 0% instances), [tr-pos/INTJ]()-[tr-pos/CONJ]() (1; 0% instances), [tr-pos/NOUN]()-[tr-pos/PUNCT]() (1; 0% instances), [tr-pos/VERB]()-[tr-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cc	color:blue
1	Cumhurbaşkanı	cumhurbaşkanı	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	2	nmod	_	_
2	ile	ile	CONJ	Conj	_	3	cc	_	_
3	sürtüşen	sürtüş	VERB	Verb	Aspect=Perf|Mood=Ind|Negative=Pos|Tense=Pres|VerbForm=Part	5	acl	_	_
4	bir	bir	NUM	ANum	NumType=Card	5	det	_	_
5	iktidar	iktidar	NOUN	Noun	Case=Nom|Number=Sing|Person=3	6	compound:lvc	_	_
6	olmak	ol	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Negative=Pos|Tense=Pres|VerbForm=Ger	7	ccomp	_	_
7	istemiyoruz	iste	VERB	Verb	Aspect=Prog|Mood=Ind|Negative=Neg|Number=Plur|Person=1|Register=Inf|Tense=Pres	0	root	_	_
8	.	.	PUNCT	Punc	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 cc	color:blue
1	Buz	buz	NOUN	Noun	Case=Nom|Number=Sing|Person=3	5	conj	_	_
2	lu	li	ADP	With	_	1	case	_	_
3	ve	ve	CONJ	Conj	_	5	cc	_	_
4	çok	çok	ADV	Adverb	_	5	advmod	_	_
5	soda	soda	NOUN	Noun	Case=Nom|Number=Sing|Person=3	0	root	_	_
6	lı	li	ADP	With	_	5	case	_	_
7	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 cc	color:blue
1	Ulusal	ulusal	ADJ	Adj	_	8	conj	_	_
2	,	,	PUNCT	Punc	_	9	punct	_	_
3	arsıulusal	arsıulusal	ADJ	Adj	_	8	conj	_	_
4	,	,	PUNCT	Punc	_	9	punct	_	_
5	ama	ama	CONJ	Conj	_	8	cc	_	_
6	her	her	DET	Det	_	7	mwe	_	_
7	zaman	zaman	NOUN	Noun	Case=Nom|Number=Sing|Person=3	9	nmod	_	_
8	parasal	parasal	ADJ	Adj	_	9	amod	_	_
9	danışmalar	danışma	NOUN	Noun	Case=Nom|Number=Plur|Person=3	0	root	_	_
10	.	.	PUNCT	Punc	_	9	punct	_	_

~~~


