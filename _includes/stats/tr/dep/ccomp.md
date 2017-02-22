

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Turkish)

This relation is universal.

32 nodes (0%) are attached to their parents as `ccomp`.

31 instances of `ccomp` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.46875.

The following 7 pairs of parts of speech are connected with `ccomp`: [tr-pos/VERB]()-[tr-pos/NOUN]() (11; 34% instances), [tr-pos/VERB]()-[tr-pos/ADJ]() (10; 31% instances), [tr-pos/VERB]()-[tr-pos/PRON]() (4; 13% instances), [tr-pos/VERB]()-[tr-pos/VERB]() (4; 13% instances), [tr-pos/NOUN]()-[tr-pos/PRON]() (1; 3% instances), [tr-pos/PRON]()-[tr-pos/ADJ]() (1; 3% instances), [tr-pos/VERB]()-[tr-pos/ADP]() (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 ccomp	color:blue
1	İkimiz	iki	NUM	NNum	Case=Nom|Number=Sing|Number[psor]=Plur|NumType=Card|Person=3|Person[psor]=1	4	nsubj	_	_
2	de	de	CCONJ	Conj	_	1	advmod:emph	_	_
3	aynı	aynı	ADJ	Adj	_	4	amod	_	_
4	durumda	durum	NOUN	Noun	Case=Loc|Number=Sing|Person=3	7	ccomp	_	_
5	yız	i	AUX	Zero	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Pres	4	cop	_	_
6	,	,	PUNCT	Punc	_	7	punct	_	_
7	demişti	de	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pqp	0	root	_	SpaceAfter=No
8	,	,	PUNCT	Punc	_	9	punct	_	_
9	dedi	de	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	7	conj	_	SpaceAfter=No
10	.	.	PUNCT	Punc	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 ccomp	color:blue
1	Ben	ben	PRON	Pers	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	bir	bir	NUM	ANum	NumType=Card	3	det	_	_
3	tutsak	tutsak	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	6	ccomp	_	_
4	ım	i	AUX	Zero	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Pres	3	cop	_	_
5	,	,	PUNCT	Punc	_	6	punct	_	_
6	dedi	de	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
7	.	.	PUNCT	Punc	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 ccomp	color:blue
1	?	kim	PRON	Ques	Case=Nom|Number=Sing|Person=3	4	ccomp	_	_
2	imsiniz	i	AUX	Zero	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Tense=Pres	1	cop	_	_
3	?	?	PUNCT	Punc	_	4	punct	_	_
4	dedi	de	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	_
5	bir	bir	NUM	ANum	NumType=Card	6	det	_	_
6	erkek	erkek	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	7	nmod:poss	_	_
7	sesi	ses	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	4	nsubj	_	SpaceAfter=No
8	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


