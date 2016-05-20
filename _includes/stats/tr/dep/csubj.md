

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Turkish)

This relation is universal.

167 nodes (0%) are attached to their parents as `csubj`.

167 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.19760479041916.

The following 10 pairs of parts of speech are connected with `csubj`: [tr-pos/VERB]()-[tr-pos/VERB]() (110; 66% instances), [tr-pos/ADJ]()-[tr-pos/VERB]() (25; 15% instances), [tr-pos/NOUN]()-[tr-pos/VERB]() (17; 10% instances), [tr-pos/ADV]()-[tr-pos/VERB]() (4; 2% instances), [tr-pos/VERB]()-[tr-pos/NOUN]() (4; 2% instances), [tr-pos/PUNCT]()-[tr-pos/VERB]() (2; 1% instances), [tr-pos/VERB]()-[tr-pos/PRON]() (2; 1% instances), [tr-pos/CONJ]()-[tr-pos/VERB]() (1; 1% instances), [tr-pos/PRON]()-[tr-pos/VERB]() (1; 1% instances), [tr-pos/VERB]()-[tr-pos/ADJ]() (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 csubj	color:blue
1	Büyük	büyük	ADJ	Adj	_	2	amod	_	_
2	dayının	dayı	NOUN	Noun	Case=Gen|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=2	4	nmod:poss	_	_
3	aşık	aşık	ADJ	Adj	_	4	compound:lvc	_	_
4	olması	ol	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Negative=Pos|Number[psor]=Sing|Person[psor]=3|Tense=Pres|VerbForm=Ger	8	csubj	_	_
5	ne	ne	ADJ	Adj	_	7	advmod:emph	_	_
6	kadar	kadar	ADP	PCNom	_	5	case	_	_
7	heyecan	heyecan	NOUN	Noun	Case=Nom|Number=Sing|Person=3	8	dobj	_	_
8	ver	ver	VERB	Verb	Aspect=Perf|Mood=Ind|Negative=Pos|Tense=Pres	0	root	_	_
9	ici	ci	ADP	Agt	_	8	case	_	_
10	.	.	PUNCT	Punc	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 csubj	color:blue
1	Kızak	kızak	NOUN	Noun	Case=Nom|Number=Sing|Person=3	2	nmod:poss	_	_
2	yolculuğuna	yolculuk	NOUN	Noun	Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	3	nmod	_	_
3	alışmak	alış	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Negative=Pos|Tense=Pres|VerbForm=Ger	4	csubj	_	_
4	kolay	kolay	ADJ	Adj	_	0	root	_	_
5	değildi	değil	VERB	Neg	Aspect=Perf|Mood=Ind|Negative=Neg|Number=Sing|Person=3|Tense=Past	4	cop	_	_
6	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 csubj	color:blue
1	Bence	ben	PRON	Pers	Case=Equ|Number=Sing|Person=1|PronType=Prs	4	nmod	_	_
2	zamanın	zaman	NOUN	Noun	Case=Gen|Number=Sing|Person=3	3	nmod:poss	_	_
3	geçmesi	geç	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Negative=Pos|Number[psor]=Sing|Person[psor]=3|Tense=Pres|VerbForm=Ger	4	csubj	_	_
4	tehlike	tehlike	NOUN	Noun	Case=Nom|Number=Sing|Person=3	0	root	_	_
5	li	li	ADP	With	_	4	case	_	_
6	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


