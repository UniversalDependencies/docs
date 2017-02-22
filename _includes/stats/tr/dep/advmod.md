

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Turkish)

This relation is universal.
There are 1 language-specific subtypes of `advmod`: [advmod:emph]().

1571 nodes (3%) are attached to their parents as `advmod`.

1400 instances of `advmod` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.49522597071929.

The following 12 pairs of parts of speech are connected with `advmod`: [tr-pos/VERB]()-[tr-pos/ADV]() (847; 54% instances), [tr-pos/ADJ]()-[tr-pos/ADV]() (283; 18% instances), [tr-pos/NOUN]()-[tr-pos/ADV]() (265; 17% instances), [tr-pos/ADV]()-[tr-pos/ADV]() (103; 7% instances), [tr-pos/NUM]()-[tr-pos/ADV]() (25; 2% instances), [tr-pos/PRON]()-[tr-pos/ADV]() (17; 1% instances), [tr-pos/CCONJ]()-[tr-pos/ADV]() (7; 0% instances), [tr-pos/PROPN]()-[tr-pos/ADV]() (7; 0% instances), [tr-pos/PUNCT]()-[tr-pos/ADV]() (6; 0% instances), [tr-pos/DET]()-[tr-pos/ADV]() (5; 0% instances), [tr-pos/ADP]()-[tr-pos/ADV]() (4; 0% instances), [tr-pos/INTJ]()-[tr-pos/ADV]() (2; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 advmod	color:blue
1	Kerem	Kerem	PROPN	Prop	Case=Nom|Number=Sing|Person=3	8	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	Punc	_	8	punct	_	_
3	özgürlüğünü	özgürlük	NOUN	Noun	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	4	obj	_	_
4	teslim	teslim	NOUN	Noun	Case=Nom|Number=Sing|Person=3	8	obl	_	_
5	ettiği	et	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part	4	compound:lvc	_	_
6	için	için	ADP	PCNom	_	4	case	_	_
7	sanki	sanki	ADV	Adverb	_	8	advmod	_	_
8	rahatlamıştı	rahatla	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pqp	0	root	_	SpaceAfter=No
9	.	.	PUNCT	Punc	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod	color:blue
1	Orada	ora	NOUN	Noun	Case=Loc|Number=Sing|Person=3	3	obl	_	_
2	ki	ki	ADP	Rel	_	1	case	_	_
3	tartışma	tartış	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Vnoun	5	nsubj	_	_
4	hayli	hayli	ADV	Adverb	_	5	advmod	_	_
5	zengin	zengin	ADJ	Adj	_	0	root	_	SpaceAfter=No
6	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 advmod	color:blue
1	Ne	ne	ADV	Adverb	_	3	advmod	_	_
2	güzel	güzel	ADJ	Adj	_	3	amod	_	_
3	günler	gün	NOUN	Noun	Case=Nom|Number=Plur|Person=3	0	root	_	_
4	di	i	AUX	Zero	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	3	cop	_	_
5	değil	değil	VERB	Neg	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	3	conj	_	_
6	mi	mi	AUX	Ques	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres	5	aux:q	_	SpaceAfter=No
7	?	?	PUNCT	Punc	_	8	punct	_	_
8	Ah	ah	INTJ	Interj	_	3	discourse	_	SpaceAfter=No
9	,	,	PUNCT	Punc	_	10	punct	_	_
10	ah	ah	INTJ	Interj	_	3	discourse	_	SpaceAfter=No
11	...	...	PUNCT	Punc	_	10	punct	_	_

~~~


