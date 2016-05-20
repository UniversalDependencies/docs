

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Turkish)

This relation is universal.

102 nodes (0%) are attached to their parents as `mwe`.

102 instances of `mwe` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.00980392156863.

The following 3 pairs of parts of speech are connected with `mwe`: [tr-pos/NOUN]()-[tr-pos/DET]() (97; 95% instances), [tr-pos/NOUN]()-[tr-pos/PRON]() (4; 4% instances), [tr-pos/NOUN]()-[tr-pos/ADJ]() (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 mwe	color:blue
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


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 mwe	color:blue
1	Hayret	hayret	NOUN	Noun	Case=Nom|Number=Sing|Person=3	5	conj	_	_
2	,	,	PUNCT	Punc	_	5	punct	_	_
3	ne	ne	PRON	Ques	Case=Nom|Number=Sing|Person=3	4	mwe	_	_
4	zaman	zaman	NOUN	Noun	Case=Nom|Number=Sing|Person=3	5	nmod	_	_
5	yazmışım	yaz	VERB	Verb	Aspect=Perf|Evidentiality=Nfh|Mood=Ind|Negative=Pos|Number=Sing|Person=1|Tense=Past	0	root	_	_
6	?	?	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 mwe	color:blue
1	Ne	ne	ADJ	Adj	_	2	mwe	_	_
2	zaman	zaman	NOUN	Noun	Case=Nom|Number=Sing|Person=3	3	nmod	_	_
3	döneceğim	dön	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Negative=Pos|Number[psor]=Sing|Person[psor]=1|Tense=Fut|VerbForm=Part	5	nsubj	_	_
4	de	de	CONJ	Conj	_	3	advmod:emph	_	_
5	belli	belli	ADJ	Adj	_	0	root	_	_
6	değildi	değil	VERB	Neg	Aspect=Perf|Mood=Ind|Negative=Neg|Number=Sing|Person=3|Tense=Past	5	cop	_	_
7	...	...	PUNCT	Punc	_	5	punct	_	_

~~~


