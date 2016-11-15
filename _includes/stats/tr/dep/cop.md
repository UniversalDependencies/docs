

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Turkish)

This relation is universal.

864 nodes (1%) are attached to their parents as `cop`.

863 instances of `cop` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.05902777777778.

The following 15 pairs of parts of speech are connected with `cop`: [tr-pos/NOUN]()-[tr-pos/AUX]() (310; 36% instances), [tr-pos/ADJ]()-[tr-pos/AUX]() (256; 30% instances), [tr-pos/PRON]()-[tr-pos/AUX]() (60; 7% instances), [tr-pos/ADV]()-[tr-pos/AUX]() (52; 6% instances), [tr-pos/NOUN]()-[tr-pos/VERB]() (50; 6% instances), [tr-pos/VERB]()-[tr-pos/AUX]() (43; 5% instances), [tr-pos/ADJ]()-[tr-pos/VERB]() (36; 4% instances), [tr-pos/VERB]()-[tr-pos/VERB]() (20; 2% instances), [tr-pos/ADP]()-[tr-pos/AUX]() (18; 2% instances), [tr-pos/PROPN]()-[tr-pos/AUX]() (11; 1% instances), [tr-pos/PRON]()-[tr-pos/VERB]() (3; 0% instances), [tr-pos/ADV]()-[tr-pos/VERB]() (2; 0% instances), [tr-pos/DET]()-[tr-pos/VERB]() (1; 0% instances), [tr-pos/NUM]()-[tr-pos/AUX]() (1; 0% instances), [tr-pos/NUM]()-[tr-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 cop	color:blue
1	Bir	bir	NUM	ANum	NumType=Card	2	det	_	_
2	yasaklamanın	yasakla	VERB	Verb	Aspect=Perf|Case=Gen|Mood=Ind|Negative=Pos|Tense=Pres|VerbForm=Ger	3	nmod	_	_
3	içinde	içinde	NOUN	Noun	Case=Nom|Number=Sing|Person=3	0	root	_	_
4	ydik	i	AUX	Zero	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Past	3	cop	_	_
5	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 cop	color:blue
1	Rokfor'un	Rokfor	PROPN	Prop	Case=Gen|Number=Sing|Person=3	2	nmod:poss	_	_
2	efsanesi	efsane	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	9	conj	_	_
3	:	:	PUNCT	Punc	_	2	punct	_	_
4	Vaktiyle	vakit	NOUN	Noun	Case=Ins|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	9	nmod	_	_
5	,	,	PUNCT	Punc	_	9	punct	_	_
6	genç	genç	ADJ	Adj	_	8	amod	_	_
7	bir	bir	NUM	ANum	NumType=Card	8	det	_	_
8	çoban	çoban	NOUN	Noun	Case=Nom|Number=Sing|Person=3	9	nsubj	_	_
9	var	var	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	0	root	_	_
10	mış	i	AUX	Zero	Aspect=Perf|Evidentiality=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	9	cop	_	_
11	.	.	PUNCT	Punc	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 cop	color:blue
1	Kim	kim	PRON	Ques	Case=Nom|Number=Sing|Person=3	4	ccomp	_	_
2	siniz	i	AUX	Zero	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Tense=Pres	1	cop	_	_
3	?	?	PUNCT	Punc	_	4	punct	_	_
4	dedi	de	VERB	Verb	Aspect=Perf|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Past	0	root	_	_
5	bir	bir	NUM	ANum	NumType=Card	6	det	_	_
6	erkek	erkek	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	7	nmod:poss	_	_
7	sesi	ses	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	4	nsubj	_	_
8	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


