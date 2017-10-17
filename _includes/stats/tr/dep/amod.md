

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Turkish)

This relation is universal.

2884 nodes (6%) are attached to their parents as `amod`.

2818 instances of `amod` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.98404993065187.

The following 16 pairs of parts of speech are connected with `amod`: [tr-pos/NOUN]()-[tr-pos/ADJ]() (1562; 54% instances), [tr-pos/VERB]()-[tr-pos/ADJ]() (957; 33% instances), [tr-pos/ADJ]()-[tr-pos/ADJ]() (246; 9% instances), [tr-pos/PROPN]()-[tr-pos/ADJ]() (35; 1% instances), [tr-pos/NUM]()-[tr-pos/ADJ]() (23; 1% instances), [tr-pos/PRON]()-[tr-pos/ADJ]() (16; 1% instances), [tr-pos/ADV]()-[tr-pos/ADJ]() (11; 0% instances), [tr-pos/CCONJ]()-[tr-pos/ADJ]() (11; 0% instances), [tr-pos/NOUN]()-[tr-pos/NUM]() (9; 0% instances), [tr-pos/ADP]()-[tr-pos/ADJ]() (4; 0% instances), [tr-pos/PUNCT]()-[tr-pos/ADJ]() (3; 0% instances), [tr-pos/DET]()-[tr-pos/ADJ]() (2; 0% instances), [tr-pos/VERB]()-[tr-pos/NUM]() (2; 0% instances), [tr-pos/CCONJ]()-[tr-pos/NUM]() (1; 0% instances), [tr-pos/PROPN]()-[tr-pos/NUM]() (1; 0% instances), [tr-pos/PUNCT]()-[tr-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 amod	color:blue
1	Daha	daha	ADV	Adverb	_	2	advmod:emph	_	_
2	etkin	etkin	ADJ	Adj	_	4	amod	_	_
3	bir	bir	NUM	ANum	NumType=Card	4	det	_	_
4	denetim	denetim	NOUN	Noun	Case=Nom|Number=Sing|Person=3	0	root	_	_
5	yapacağız	yap	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Fut	4	compound:lvc	_	SpaceAfter=No
6	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 amod	color:blue
1	Rolü	rol	NOUN	Noun	Case=Acc|Number=Sing|Person=3	3	obj	_	_
2	başkasına	başka	ADJ	NAdj	Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	3	amod	_	_
3	vermişlerdi	ver	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pqp	0	root	_	SpaceAfter=No
4	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 amod	color:blue
1	O	o	PRON	Demons	Case=Nom|Number=Sing|Person=3|PronType=Dem	10	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	Punc	_	10	punct	_	_
3	değişik	değişik	ADJ	Adj	_	4	amod	_	_
4	renkleri	renk	NOUN	Noun	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	8	nmod	_	_
5	ve	ve	CCONJ	Conj	_	7	cc	_	_
6	yandan	yan	ADJ	NAdj	Case=Abl|Number=Sing|Person=3	7	amod	_	_
7	ışıkları	ışık	NOUN	Noun	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	4	conj	_	_
8	ile	ile	CCONJ	Conj	_	10	nmod	_	_
9	karşımda	karşı	ADJ	NAdj	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	10	amod	_	_
10	hazır	hazır	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	0	root	_	_
11	dır	i	AUX	Zero	Aspect=Perf|Mood=Gen|Number=Sing|Person=3|Tense=Pres	10	cop	_	_
12	.	.	PUNCT	Punc	_	10	punct	_	_

~~~


