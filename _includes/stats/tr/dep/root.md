

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Turkish)

This relation is universal.

5635 nodes (10%) are attached to their parents as `root`.

5635 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.83247559893523.

The following 13 pairs of parts of speech are connected with `root`: [tr-pos/ROOT]()-[tr-pos/VERB]() (4342; 77% instances), [tr-pos/ROOT]()-[tr-pos/NOUN]() (605; 11% instances), [tr-pos/ROOT]()-[tr-pos/ADJ]() (441; 8% instances), [tr-pos/ROOT]()-[tr-pos/PRON]() (73; 1% instances), [tr-pos/ROOT]()-[tr-pos/ADV]() (64; 1% instances), [tr-pos/ROOT]()-[tr-pos/PUNCT]() (39; 1% instances), [tr-pos/ROOT]()-[tr-pos/PROPN]() (35; 1% instances), [tr-pos/ROOT]()-[tr-pos/ADP]() (16; 0% instances), [tr-pos/ROOT]()-[tr-pos/NUM]() (8; 0% instances), [tr-pos/ROOT]()-[tr-pos/CONJ]() (6; 0% instances), [tr-pos/ROOT]()-[tr-pos/DET]() (3; 0% instances), [tr-pos/ROOT]()-[tr-pos/X]() (2; 0% instances), [tr-pos/ROOT]()-[tr-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
1	Bir	bir	NUM	ANum	NumType=Card	2	det	_	_
2	taksi	taksi	NOUN	Noun	Case=Nom|Number=Sing|Person=3	3	dobj	_	_
3	bulduk	bul	VERB	Verb	Aspect=Perf|Mood=Ind|Negative=Pos|Number=Plur|Person=1|Tense=Past	0	root	_	_
4	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
1	Bir	bir	NUM	ANum	NumType=Card	2	det	_	_
2	yasaklamanın	yasakla	VERB	Verb	Aspect=Perf|Case=Gen|Mood=Ind|Negative=Pos|Tense=Pres|VerbForm=Ger	3	nmod	_	_
3	içinde	içinde	NOUN	Noun	Case=Nom|Number=Sing|Person=3	0	root	_	_
4	ydik	i	AUX	Zero	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Past	3	cop	_	_
5	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 9 root	color:blue
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


