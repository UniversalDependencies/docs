

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Turkish)

This relation is universal.

155 nodes (0%) are attached to their parents as `discourse`.

81 instances of `discourse` (52%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.50967741935484.

The following 16 pairs of parts of speech are connected with `discourse`: [tr-pos/VERB]()-[tr-pos/INTJ]() (73; 47% instances), [tr-pos/NOUN]()-[tr-pos/CONJ]() (28; 18% instances), [tr-pos/PROPN]()-[tr-pos/CONJ]() (12; 8% instances), [tr-pos/NOUN]()-[tr-pos/INTJ]() (8; 5% instances), [tr-pos/VERB]()-[tr-pos/CONJ]() (8; 5% instances), [tr-pos/ADJ]()-[tr-pos/INTJ]() (6; 4% instances), [tr-pos/ADJ]()-[tr-pos/CONJ]() (4; 3% instances), [tr-pos/INTJ]()-[tr-pos/INTJ]() (4; 3% instances), [tr-pos/PUNCT]()-[tr-pos/INTJ]() (3; 2% instances), [tr-pos/PRON]()-[tr-pos/CONJ]() (2; 1% instances), [tr-pos/PRON]()-[tr-pos/INTJ]() (2; 1% instances), [tr-pos/ADV]()-[tr-pos/INTJ]() (1; 1% instances), [tr-pos/AUX]()-[tr-pos/INTJ]() (1; 1% instances), [tr-pos/CONJ]()-[tr-pos/INTJ]() (1; 1% instances), [tr-pos/NUM]()-[tr-pos/CONJ]() (1; 1% instances), [tr-pos/PROPN]()-[tr-pos/INTJ]() (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 discourse	color:blue
1	O	o	PRON	Demons	Case=Nom|Number=Sing|Person=3|PronType=Dem	2	det	_	_
2	son	son	ADJ	Adj	_	5	amod	_	_
3	a	a	INTJ	Interj	_	5	discourse	_	_
4	Hülya'yı	Hülya	PROPN	Prop	Case=Acc|Number=Sing|Person=3	5	dobj	_	_
5	oturtup	otur	VERB	Verb	Aspect=Perf|Mood=Ind|Negative=Pos|Tense=Pres|VerbForm=Trans|Voice=Cau	9	advcl	_	_
6	kaç	kaç	ADJ	Adj	_	7	amod	_	_
7	gece	gece	NOUN	Noun	Case=Nom|Number=Sing|Person=3	9	nmod	_	_
8	uykumdan	uyku	NOUN	Noun	Case=Abl|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	9	nmod	_	_
9	fırlamıştım	fırla	VERB	Verb	Aspect=Perf|Mood=Ind|Negative=Pos|Number=Sing|Person=1|Tense=Pqp	0	root	_	_
10	.	.	PUNCT	Punc	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 discourse	color:blue
1	Leblebi	leblebi	NOUN	Noun	Case=Nom|Number=Sing|Person=3	3	nsubj	_	_
2	ise	ise	CONJ	Conj	_	1	discourse	_	_
3	figüran	figüran	NOUN	Noun	Case=Nom|Number=Sing|Person=3	0	root	_	_
4	dır	i	AUX	Zero	Aspect=Perf|Mood=Gen|Number=Sing|Person=3|Tense=Pres	3	cop	_	_
5	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 discourse	color:blue
1	Tibet	Tibet	PROPN	Prop	Case=Nom|Number=Sing|Person=3	9	nsubj	_	_
2	ise	ise	CONJ	Conj	_	1	discourse	_	_
3	içine	iç	ADJ	NAdj	Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	4	amod	_	_
4	kapanık	kapanık	ADJ	Adj	_	6	conj	_	_
5	,	,	PUNCT	Punc	_	9	punct	_	_
6	ses	ses	NOUN	Noun	Case=Nom|Number=Sing|Person=3	9	nmod	_	_
7	siz	siz	ADP	Without	_	6	case	_	_
8	bir	bir	NUM	ANum	NumType=Card	9	det	_	_
9	çocuk	çocuk	NOUN	Noun	Case=Nom|Number=Sing|Person=3	0	root	_	_
10	.	.	PUNCT	Punc	_	9	punct	_	_

~~~


