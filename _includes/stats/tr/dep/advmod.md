

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Turkish)

This relation is universal.
There are 1 language-specific subtypes of `advmod`: [advmod:emph]().

1888 nodes (3%) are attached to their parents as `advmod`.

1766 instances of `advmod` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.61122881355932.

The following 11 pairs of parts of speech are connected with `advmod`: [tr-pos/VERB]()-[tr-pos/ADV]() (1175; 62% instances), [tr-pos/ADJ]()-[tr-pos/ADV]() (325; 17% instances), [tr-pos/NOUN]()-[tr-pos/ADV]() (211; 11% instances), [tr-pos/ADV]()-[tr-pos/ADV]() (106; 6% instances), [tr-pos/CONJ]()-[tr-pos/ADV]() (19; 1% instances), [tr-pos/PRON]()-[tr-pos/ADV]() (18; 1% instances), [tr-pos/NUM]()-[tr-pos/ADV]() (11; 1% instances), [tr-pos/PROPN]()-[tr-pos/ADV]() (8; 0% instances), [tr-pos/PUNCT]()-[tr-pos/ADV]() (7; 0% instances), [tr-pos/DET]()-[tr-pos/ADV]() (5; 0% instances), [tr-pos/ADP]()-[tr-pos/ADV]() (3; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod	color:blue
1	Mebrure	Mebrure	PROPN	Prop	Case=Nom|Number=Sing|Person=3	3	nsubj	_	_
2	birden	birden	ADV	Adverb	_	3	advmod	_	_
3	heyecanlanmıştı	heyecanlan	VERB	Verb	Aspect=Perf|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pqp	0	root	_	_
4	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 advmod	color:blue
1	Yürüdüğümüz	yürü	VERB	Verb	Aspect=Perf|Mood=Ind|Negative=Pos|Number[psor]=Plur|Person[psor]=1|Tense=Past|VerbForm=Part	2	acl	_	_
2	yol	yol	NOUN	Noun	Case=Nom|Number=Sing|Person=3	3	nsubj	_	_
3	bitmiş	bit	VERB	Verb	Aspect=Perf|Evidentiality=Nfh|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Past	9	conj	_	_
4	,	,	PUNCT	Punc	_	3	punct	_	_
5	daha	daha	ADV	Adverb	_	6	advmod	_	_
6	dar	dar	ADJ	Adj	_	8	amod	_	_
7	bir	bir	NUM	ANum	NumType=Card	8	det	_	_
8	sokak	sokak	NOUN	Noun	Case=Nom|Number=Sing|Person=3	9	nsubj	_	_
9	açılmıştı	aç	VERB	Verb	Aspect=Perf|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pqp|Voice=Pass	0	root	_	_
10	önümüzde	ön	ADJ	NAdj	Case=Loc|Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=1	9	amod	_	_
11	.	.	PUNCT	Punc	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod	color:blue
1	Buz	buz	NOUN	Noun	Case=Nom|Number=Sing|Person=3	5	conj	_	_
2	lu	li	ADP	With	_	1	case	_	_
3	ve	ve	CONJ	Conj	_	5	cc	_	_
4	çok	çok	ADV	Adverb	_	5	advmod	_	_
5	soda	soda	NOUN	Noun	Case=Nom|Number=Sing|Person=3	0	root	_	_
6	lı	li	ADP	With	_	5	case	_	_
7	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


