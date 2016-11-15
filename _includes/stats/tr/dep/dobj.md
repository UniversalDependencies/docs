

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Turkish)

This relation is universal.

4469 nodes (8%) are attached to their parents as `dobj`.

4272 instances of `dobj` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.78362049675543.

The following 43 pairs of parts of speech are connected with `dobj`: [tr-pos/VERB]()-[tr-pos/NOUN]() (2676; 60% instances), [tr-pos/VERB]()-[tr-pos/VERB]() (748; 17% instances), [tr-pos/VERB]()-[tr-pos/PRON]() (418; 9% instances), [tr-pos/VERB]()-[tr-pos/ADJ]() (304; 7% instances), [tr-pos/VERB]()-[tr-pos/PROPN]() (86; 2% instances), [tr-pos/ADJ]()-[tr-pos/NOUN]() (51; 1% instances), [tr-pos/NOUN]()-[tr-pos/NOUN]() (43; 1% instances), [tr-pos/VERB]()-[tr-pos/NUM]() (28; 1% instances), [tr-pos/ADV]()-[tr-pos/NOUN]() (20; 0% instances), [tr-pos/NOUN]()-[tr-pos/VERB]() (12; 0% instances), [tr-pos/ADJ]()-[tr-pos/ADJ]() (9; 0% instances), [tr-pos/NOUN]()-[tr-pos/PRON]() (8; 0% instances), [tr-pos/ADJ]()-[tr-pos/VERB]() (6; 0% instances), [tr-pos/ADJ]()-[tr-pos/PRON]() (5; 0% instances), [tr-pos/NOUN]()-[tr-pos/ADJ]() (5; 0% instances), [tr-pos/PRON]()-[tr-pos/NOUN]() (5; 0% instances), [tr-pos/PUNCT]()-[tr-pos/NOUN]() (4; 0% instances), [tr-pos/ADP]()-[tr-pos/NOUN]() (3; 0% instances), [tr-pos/CONJ]()-[tr-pos/NOUN]() (3; 0% instances), [tr-pos/VERB]()-[tr-pos/ADP]() (3; 0% instances), [tr-pos/VERB]()-[tr-pos/CONJ]() (3; 0% instances), [tr-pos/VERB]()-[tr-pos/PUNCT]() (3; 0% instances), [tr-pos/ADV]()-[tr-pos/VERB]() (2; 0% instances), [tr-pos/NOUN]()-[tr-pos/NUM]() (2; 0% instances), [tr-pos/NOUN]()-[tr-pos/PROPN]() (2; 0% instances), [tr-pos/PUNCT]()-[tr-pos/PRON]() (2; 0% instances), [tr-pos/VERB]()-[tr-pos/DET]() (2; 0% instances), [tr-pos/ADJ]()-[tr-pos/PROPN]() (1; 0% instances), [tr-pos/ADP]()-[tr-pos/ADJ]() (1; 0% instances), [tr-pos/ADP]()-[tr-pos/VERB]() (1; 0% instances), [tr-pos/ADV]()-[tr-pos/ADJ]() (1; 0% instances), [tr-pos/ADV]()-[tr-pos/PRON]() (1; 0% instances), [tr-pos/CONJ]()-[tr-pos/VERB]() (1; 0% instances), [tr-pos/DET]()-[tr-pos/NOUN]() (1; 0% instances), [tr-pos/NOUN]()-[tr-pos/ADP]() (1; 0% instances), [tr-pos/NOUN]()-[tr-pos/DET]() (1; 0% instances), [tr-pos/NUM]()-[tr-pos/NOUN]() (1; 0% instances), [tr-pos/PRON]()-[tr-pos/PROPN]() (1; 0% instances), [tr-pos/PRON]()-[tr-pos/VERB]() (1; 0% instances), [tr-pos/PROPN]()-[tr-pos/NOUN]() (1; 0% instances), [tr-pos/PUNCT]()-[tr-pos/ADJ]() (1; 0% instances), [tr-pos/PUNCT]()-[tr-pos/NUM]() (1; 0% instances), [tr-pos/PUNCT]()-[tr-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 dobj	color:blue
1	Bir	bir	NUM	ANum	NumType=Card	2	det	_	_
2	taksi	taksi	NOUN	Noun	Case=Nom|Number=Sing|Person=3	3	dobj	_	_
3	bulduk	bul	VERB	Verb	Aspect=Perf|Mood=Ind|Negative=Pos|Number=Plur|Person=1|Tense=Past	0	root	_	_
4	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 dobj	color:blue
1	Oğlum	oğul	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	7	nsubj	_	_
2	,	,	PUNCT	Punc	_	7	punct	_	_
3	Ne	ne	PRON	Ques	Case=Nom|Number=Sing|Person=3	4	nmod	_	_
4	işe	iş	NOUN	Noun	Case=Dat|Number=Sing|Person=3	5	nmod	_	_
5	yaradığını	yara	VERB	Verb	Aspect=Perf|Case=Acc|Mood=Ind|Negative=Pos|Number[psor]=Sing|Person[psor]=3|Tense=Past|VerbForm=Part	7	dobj	_	_
6	,	,	PUNCT	Punc	_	5	punct	_	_
7	sordu	sor	VERB	Verb	Aspect=Perf|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Past	0	root	_	_
8	.	.	PUNCT	Punc	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 dobj	color:blue
1	Ne	ne	PRON	Ques	Case=Nom|Number=Sing|Person=3	2	dobj	_	_
2	anlatacaktın	anlat	VERB	Verb	Aspect=Perf|Mood=Ind|Negative=Pos|Number=Sing|Person=2|Tense=FutPast	0	root	_	_
3	.	.	PUNCT	Punc	_	2	punct	_	_

~~~


