

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Turkish)

This relation is universal.
There are 2 language-specific subtypes of `compound`: [compound:lvc](), [compound:redup]().

264 nodes (0%) are attached to their parents as `compound`.

264 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.14015151515152.

The following 19 pairs of parts of speech are connected with `compound`: [tr-pos/NUM]()-[tr-pos/NUM]() (157; 59% instances), [tr-pos/NOUN]()-[tr-pos/NOUN]() (56; 21% instances), [tr-pos/NOUN]()-[tr-pos/ADJ]() (12; 5% instances), [tr-pos/NOUN]()-[tr-pos/PROPN]() (9; 3% instances), [tr-pos/VERB]()-[tr-pos/NOUN]() (6; 2% instances), [tr-pos/ADJ]()-[tr-pos/NOUN]() (4; 2% instances), [tr-pos/NOUN]()-[tr-pos/VERB]() (4; 2% instances), [tr-pos/PROPN]()-[tr-pos/NOUN]() (3; 1% instances), [tr-pos/PROPN]()-[tr-pos/PROPN]() (2; 1% instances), [tr-pos/VERB]()-[tr-pos/VERB]() (2; 1% instances), [tr-pos/ADJ]()-[tr-pos/ADJ]() (1; 0% instances), [tr-pos/ADJ]()-[tr-pos/NUM]() (1; 0% instances), [tr-pos/ADJ]()-[tr-pos/PROPN]() (1; 0% instances), [tr-pos/ADJ]()-[tr-pos/VERB]() (1; 0% instances), [tr-pos/ADV]()-[tr-pos/NOUN]() (1; 0% instances), [tr-pos/NOUN]()-[tr-pos/PRON]() (1; 0% instances), [tr-pos/NUM]()-[tr-pos/NOUN]() (1; 0% instances), [tr-pos/NUM]()-[tr-pos/PROPN]() (1; 0% instances), [tr-pos/PROPN]()-[tr-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound	color:blue
1	Memo	Memo	PROPN	Prop	Case=Nom|Number=Sing|Person=3	8	nsubj	_	_
2	elinde	el	NOUN	Noun	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	6	nmod	_	_
3	ki	ki	ADP	Rel	_	2	case	_	_
4	yüz	yüz	NUM	ANum	NumType=Card	5	compound	_	_
5	bin	bin	NUM	ANum	NumType=Card	6	nummod	_	_
6	liraya	lira	NOUN	Noun	Case=Dat|Number=Sing|Person=3	8	nmod	_	_
7	şaşkınlıkla	şaşkınlık	NOUN	Noun	Case=Ins|Number=Sing|Person=3	8	nmod	_	_
8	bakıyordu	bak	VERB	Verb	Aspect=Prog|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Register=Inf|Tense=Past	0	root	_	_
9	.	.	PUNCT	Punc	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound	color:blue
1	Hostes	hostes	NOUN	Noun	Case=Nom|Number=Sing|Person=3	2	compound	_	_
2	abla	abla	NOUN	Noun	Case=Nom|Number=Sing|Person=3	5	nsubj	_	_
3	kardeşinin	kardeş	NOUN	Noun	Case=Gen|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	4	nmod:poss	_	_
4	ölümüne	ölüm	NOUN	Noun	Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	5	nmod	_	_
5	inanamadı	inan	VERB	Verb	Aspect=Perf|Mood=Abil|Negative=Neg|Number=Sing|Person=3|Tense=Past	0	root	_	_
6	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 compound	color:blue
1	Yunan	Yunan	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	4	compound	_	_
2	lı	li	ADP	With	_	1	case	_	_
3	ların	_	ADP	Zero	Case=Gen|Number=Plur|Person=3	1	case	_	_
4	savaşım	savaşım	NOUN	Noun	Case=Nom|Number=Sing|Person=3	5	nmod:poss	_	_
5	verdikleri	ver	VERB	Verb	Aspect=Perf|Mood=Ind|Negative=Pos|Number[psor]=Plur|Person[psor]=3|Tense=Past|VerbForm=Part	6	acl	_	_
6	konulardan	konu	NOUN	Noun	Case=Abl|Number=Plur|Person=3	7	nmod:poss	_	_
7	biri	biri	PRON	Quant	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|PronType=Ind	9	nsubj	_	_
8	de	de	CONJ	Conj	_	7	advmod:emph	_	_
9	bu	bu	PRON	Demons	Case=Nom|Number=Sing|Person=3|PronType=Dem	0	root	_	_
10	dur	i	AUX	Zero	Aspect=Perf|Mood=Gen|Number=Sing|Person=3|Tense=Pres	9	cop	_	_
11	.	.	PUNCT	Punc	_	9	punct	_	_

~~~


