

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Turkish)

This relation is a language-specific subtype of [compound]().
There are also 1 other language-specific subtypes of `compound`: [compound:redup]().

471 nodes (1%) are attached to their parents as `compound:lvc`.

470 instances of `compound:lvc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.02547770700637.

The following 8 pairs of parts of speech are connected with `compound:lvc`: [tr-pos/VERB]()-[tr-pos/NOUN]() (379; 80% instances), [tr-pos/VERB]()-[tr-pos/ADJ]() (67; 14% instances), [tr-pos/VERB]()-[tr-pos/VERB]() (15; 3% instances), [tr-pos/VERB]()-[tr-pos/ADP]() (3; 1% instances), [tr-pos/VERB]()-[tr-pos/PRON]() (3; 1% instances), [tr-pos/NOUN]()-[tr-pos/NOUN]() (2; 0% instances), [tr-pos/VERB]()-[tr-pos/NUM]() (1; 0% instances), [tr-pos/VERB]()-[tr-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound:lvc	color:blue
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
# visual-style 4 3 compound:lvc	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound:lvc	color:blue
1	Buyur	buyur	VERB	Verb	Aspect=Perf|Mood=Imp|Negative=Pos|Number=Sing|Person=2|Tense=Pres	2	compound:lvc	_	_
2	etti	et	VERB	Verb	Aspect=Perf|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Past	0	root	_	_
3	.	.	PUNCT	Punc	_	2	punct	_	_

~~~


