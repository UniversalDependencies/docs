

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Turkish)

This relation is universal.

743 nodes (2%) are attached to their parents as `flat`.

735 instances of `flat` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.54912516823688.

The following 28 pairs of parts of speech are connected with `flat`: [tr-pos/PROPN]()-[tr-pos/PROPN]() (200; 27% instances), [tr-pos/NUM]()-[tr-pos/NUM]() (137; 18% instances), [tr-pos/PROPN]()-[tr-pos/NOUN]() (85; 11% instances), [tr-pos/NOUN]()-[tr-pos/NOUN]() (65; 9% instances), [tr-pos/NUM]()-[tr-pos/NOUN]() (60; 8% instances), [tr-pos/ADJ]()-[tr-pos/NOUN]() (59; 8% instances), [tr-pos/NOUN]()-[tr-pos/PROPN]() (51; 7% instances), [tr-pos/PROPN]()-[tr-pos/ADJ]() (13; 2% instances), [tr-pos/ADJ]()-[tr-pos/PROPN]() (11; 1% instances), [tr-pos/NOUN]()-[tr-pos/ADJ]() (11; 1% instances), [tr-pos/ADJ]()-[tr-pos/VERB]() (7; 1% instances), [tr-pos/NUM]()-[tr-pos/ADP]() (7; 1% instances), [tr-pos/NOUN]()-[tr-pos/NUM]() (6; 1% instances), [tr-pos/ADJ]()-[tr-pos/NUM]() (4; 1% instances), [tr-pos/NUM]()-[tr-pos/ADJ]() (4; 1% instances), [tr-pos/NUM]()-[tr-pos/PROPN]() (4; 1% instances), [tr-pos/ADJ]()-[tr-pos/ADJ]() (3; 0% instances), [tr-pos/NOUN]()-[tr-pos/CCONJ]() (3; 0% instances), [tr-pos/NOUN]()-[tr-pos/VERB]() (3; 0% instances), [tr-pos/ADJ]()-[tr-pos/CCONJ]() (2; 0% instances), [tr-pos/ADJ]()-[tr-pos/ADP]() (1; 0% instances), [tr-pos/DET]()-[tr-pos/ADP]() (1; 0% instances), [tr-pos/DET]()-[tr-pos/NOUN]() (1; 0% instances), [tr-pos/PRON]()-[tr-pos/NOUN]() (1; 0% instances), [tr-pos/PRON]()-[tr-pos/NUM]() (1; 0% instances), [tr-pos/PROPN]()-[tr-pos/VERB]() (1; 0% instances), [tr-pos/VERB]()-[tr-pos/NOUN]() (1; 0% instances), [tr-pos/VERB]()-[tr-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat	color:blue
1	Şahinbaş	Şahinbaş	PROPN	Prop	Case=Nom|Number=Sing|Person=3	5	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	Punc	_	5	punct	_	_
3	Tabip	tabip	NOUN	Noun	Case=Nom|Number=Sing|Person=3	5	nmod	_	_
4	Üsteğmen	üsteğmen	NOUN	Noun	Case=Nom|Number=Sing|Person=3	5	nmod	_	_
5	Vahdettin	Vahdettin	PROPN	Prop	Case=Nom|Number=Sing|Person=3	0	root	_	_
6	Bayram	Bayram	PROPN	Prop	Case=Nom|Number=Sing|Person=3	5	flat	_	SpaceAfter=No
7	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 flat	color:blue
1	Üç	üç	NUM	ANum	NumType=Card	5	nummod	_	SpaceAfter=No
2	-	-	PUNCT	Punc	_	6	punct	_	SpaceAfter=No
3	dört	dört	NUM	ANum	NumType=Card	1	flat	_	_
4	kız	kız	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	5	nmod:poss	_	_
5	başı	baş	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	6	nsubj	_	_
6	göründü	görün	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
7	.	.	PUNCT	Punc	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat	color:blue
1	Orası	ora	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	2	nsubj	_	_
2	Subay	Subay	PROPN	Prop	Case=Nom|Number=Sing|Person=3	0	root	_	_
3	Evleri	ev	NOUN	Noun	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	2	flat	_	_
4	ya	ya	INTJ	Interj	_	2	discourse	_	SpaceAfter=No
5	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


