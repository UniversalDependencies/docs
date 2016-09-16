

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Turkish)

This relation is universal.

731 nodes (1%) are attached to their parents as `nummod`.

727 instances of `nummod` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.32421340629275.

The following 10 pairs of parts of speech are connected with `nummod`: [tr-pos/NOUN]()-[tr-pos/NUM]() (554; 76% instances), [tr-pos/ADJ]()-[tr-pos/NUM]() (90; 12% instances), [tr-pos/VERB]()-[tr-pos/NUM]() (54; 7% instances), [tr-pos/PROPN]()-[tr-pos/NUM]() (12; 2% instances), [tr-pos/ADP]()-[tr-pos/NUM]() (11; 2% instances), [tr-pos/PRON]()-[tr-pos/NUM]() (5; 1% instances), [tr-pos/CONJ]()-[tr-pos/NUM]() (2; 0% instances), [tr-pos/ADV]()-[tr-pos/NUM]() (1; 0% instances), [tr-pos/NUM]()-[tr-pos/NUM]() (1; 0% instances), [tr-pos/X]()-[tr-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	Yedi	yedi	NUM	ANum	NumType=Card	2	nummod	_	_
2	yıl	yıl	NOUN	Noun	Case=Nom|Number=Sing|Person=3	6	nmod	_	_
3	boyunca	boyunca	ADP	PCNom	_	2	case	_	_
4	çocuk	çocuk	NOUN	Noun	Case=Nom|Number=Sing|Person=3	5	nmod:poss	_	_
5	hasretiyle	hasret	NOUN	Noun	Case=Ins|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	6	nmod	_	_
6	yanıp	yan	VERB	Verb	Aspect=Perf|Mood=Ind|Negative=Pos|Tense=Pres|VerbForm=Trans	7	advcl	_	_
7	tutuşuyorlardı	tutuş	VERB	Verb	Aspect=Prog|Mood=Ind|Negative=Pos|Number=Plur|Person=3|Register=Inf|Tense=Past	0	root	_	_
8	.	.	PUNCT	Punc	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	Annem	anne	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	9	nsubj	_	_
2	bir	bir	NUM	ANum	NumType=Card	3	nummod	_	_
3	tek	tek	ADJ	Adj	_	5	amod	_	_
4	halamın	hala	NOUN	Noun	Case=Gen|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	5	nmod:poss	_	_
5	çocuklarının	çocuk	NOUN	Noun	Case=Gen|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	7	nmod	_	_
6	da	da	CONJ	Conj	_	5	advmod:emph	_	_
7	gelmesinde	gel	VERB	Verb	Aspect=Perf|Case=Loc|Mood=Ind|Negative=Pos|Number[psor]=Sing|Person[psor]=3|Tense=Pres|VerbForm=Ger	9	ccomp	_	_
8	ısrar	ısrar	NOUN	Noun	Case=Nom|Number=Sing|Person=3	9	compound:lvc	_	_
9	etti	et	VERB	Verb	Aspect=Perf|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Past	0	root	_	_
10	.	.	PUNCT	Punc	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nummod	color:blue
1	70'lere	70	NUM	NNum	Case=Dat|Number=Plur|NumType=Card|Person=3	3	nummod	_	_
2	kadar	kadar	ADP	PCDat	_	1	case	_	_
3	gidebildim	git	VERB	Verb	Aspect=Perf|Mood=Abil|Negative=Pos|Number=Sing|Person=1|Tense=Past	0	root	_	_
4	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


