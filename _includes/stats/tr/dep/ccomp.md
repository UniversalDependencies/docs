

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Turkish)

This relation is universal.

336 nodes (1%) are attached to their parents as `ccomp`.

329 instances of `ccomp` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.70238095238095.

The following 11 pairs of parts of speech are connected with `ccomp`: [tr-pos/VERB]()-[tr-pos/VERB]() (271; 81% instances), [tr-pos/NOUN]()-[tr-pos/VERB]() (16; 5% instances), [tr-pos/ADJ]()-[tr-pos/VERB]() (14; 4% instances), [tr-pos/VERB]()-[tr-pos/ADJ]() (12; 4% instances), [tr-pos/VERB]()-[tr-pos/NOUN]() (12; 4% instances), [tr-pos/VERB]()-[tr-pos/PRON]() (5; 1% instances), [tr-pos/ADV]()-[tr-pos/VERB]() (2; 1% instances), [tr-pos/CONJ]()-[tr-pos/VERB]() (1; 0% instances), [tr-pos/NOUN]()-[tr-pos/PRON]() (1; 0% instances), [tr-pos/PRON]()-[tr-pos/ADJ]() (1; 0% instances), [tr-pos/VERB]()-[tr-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 ccomp	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 ccomp	color:blue
1	Korku	korku	NOUN	Noun	Case=Nom|Number=Sing|Person=3	2	nmod:poss	_	_
2	içinde	iç	ADJ	NAdj	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	3	amod	_	_
3	ölmek	öl	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Negative=Pos|Tense=Pres|VerbForm=Ger	4	ccomp	_	_
4	zorunda	zorun	NOUN	Noun	Case=Loc|Number=Sing|Person=3	0	root	_	_
5	sın	i	AUX	Zero	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Pres	4	cop	_	_
6	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 ccomp	color:blue
1	Olayın	olay	NOUN	Noun	Case=Gen|Number=Sing|Person=3	3	nmod:poss	_	_
2	ilk	ilk	ADJ	Adj	_	3	amod	_	_
3	günü	gün	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	7	nmod	_	_
4	böyle	böyle	ADJ	Adj	_	6	det	_	_
5	bir	bir	NUM	ANum	NumType=Card	6	det	_	_
6	neticeye	netice	NOUN	Noun	Case=Dat|Number=Sing|Person=3	7	nmod	_	_
7	varmak	var	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Negative=Pos|Tense=Pres|VerbForm=Ger	11	advcl	_	_
8	için	için	ADP	PCNom	_	7	case	_	_
9	kahin	kahin	NOUN	Noun	Case=Nom|Number=Sing|Person=3	10	nsubj	_	_
10	olmak	ol	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Negative=Pos|Tense=Pres|VerbForm=Ger	11	ccomp	_	_
11	lazım	lazım	ADJ	Adj	_	0	root	_	_
12	.	.	PUNCT	Punc	_	11	punct	_	_

~~~


