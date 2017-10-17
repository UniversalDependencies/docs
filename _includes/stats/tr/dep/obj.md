

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Turkish)

This relation is universal.

3533 nodes (7%) are attached to their parents as `obj`.

3369 instances of `obj` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.13274837248797.

The following 50 pairs of parts of speech are connected with `obj`: [tr-pos/VERB]()-[tr-pos/NOUN]() (1728; 49% instances), [tr-pos/VERB]()-[tr-pos/VERB]() (670; 19% instances), [tr-pos/VERB]()-[tr-pos/PRON]() (303; 9% instances), [tr-pos/VERB]()-[tr-pos/ADJ]() (267; 8% instances), [tr-pos/NOUN]()-[tr-pos/NOUN]() (134; 4% instances), [tr-pos/NOUN]()-[tr-pos/VERB]() (61; 2% instances), [tr-pos/VERB]()-[tr-pos/PROPN]() (60; 2% instances), [tr-pos/ADJ]()-[tr-pos/NOUN]() (54; 2% instances), [tr-pos/VERB]()-[tr-pos/NUM]() (46; 1% instances), [tr-pos/NOUN]()-[tr-pos/PRON]() (35; 1% instances), [tr-pos/ADJ]()-[tr-pos/VERB]() (29; 1% instances), [tr-pos/VERB]()-[tr-pos/DET]() (22; 1% instances), [tr-pos/ADV]()-[tr-pos/NOUN]() (21; 1% instances), [tr-pos/NOUN]()-[tr-pos/ADJ]() (13; 0% instances), [tr-pos/ADJ]()-[tr-pos/PRON]() (10; 0% instances), [tr-pos/ADJ]()-[tr-pos/ADJ]() (9; 0% instances), [tr-pos/NOUN]()-[tr-pos/PROPN]() (8; 0% instances), [tr-pos/VERB]()-[tr-pos/CCONJ]() (6; 0% instances), [tr-pos/NOUN]()-[tr-pos/NUM]() (5; 0% instances), [tr-pos/NUM]()-[tr-pos/NOUN]() (4; 0% instances), [tr-pos/PRON]()-[tr-pos/NOUN]() (4; 0% instances), [tr-pos/ADJ]()-[tr-pos/PROPN]() (3; 0% instances), [tr-pos/ADP]()-[tr-pos/NOUN]() (3; 0% instances), [tr-pos/CCONJ]()-[tr-pos/VERB]() (3; 0% instances), [tr-pos/PROPN]()-[tr-pos/NOUN]() (3; 0% instances), [tr-pos/ADV]()-[tr-pos/ADJ]() (2; 0% instances), [tr-pos/ADV]()-[tr-pos/PRON]() (2; 0% instances), [tr-pos/ADV]()-[tr-pos/PROPN]() (2; 0% instances), [tr-pos/CCONJ]()-[tr-pos/NOUN]() (2; 0% instances), [tr-pos/PUNCT]()-[tr-pos/NOUN]() (2; 0% instances), [tr-pos/PUNCT]()-[tr-pos/PRON]() (2; 0% instances), [tr-pos/VERB]()-[tr-pos/ADP]() (2; 0% instances), [tr-pos/ADJ]()-[tr-pos/DET]() (1; 0% instances), [tr-pos/ADP]()-[tr-pos/ADJ]() (1; 0% instances), [tr-pos/ADP]()-[tr-pos/VERB]() (1; 0% instances), [tr-pos/ADV]()-[tr-pos/CCONJ]() (1; 0% instances), [tr-pos/ADV]()-[tr-pos/NUM]() (1; 0% instances), [tr-pos/ADV]()-[tr-pos/VERB]() (1; 0% instances), [tr-pos/DET]()-[tr-pos/NOUN]() (1; 0% instances), [tr-pos/INTJ]()-[tr-pos/NOUN]() (1; 0% instances), [tr-pos/NOUN]()-[tr-pos/ADP]() (1; 0% instances), [tr-pos/NOUN]()-[tr-pos/DET]() (1; 0% instances), [tr-pos/NUM]()-[tr-pos/VERB]() (1; 0% instances), [tr-pos/PRON]()-[tr-pos/PROPN]() (1; 0% instances), [tr-pos/PRON]()-[tr-pos/VERB]() (1; 0% instances), [tr-pos/PUNCT]()-[tr-pos/ADJ]() (1; 0% instances), [tr-pos/PUNCT]()-[tr-pos/NUM]() (1; 0% instances), [tr-pos/PUNCT]()-[tr-pos/VERB]() (1; 0% instances), [tr-pos/VERB]()-[tr-pos/PUNCT]() (1; 0% instances), [tr-pos/VERB]()-[tr-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obj	color:blue
1	Bir	bir	NUM	ANum	NumType=Card	2	det	_	_
2	ihtimal	ihtimal	NOUN	Noun	Case=Nom|Number=Sing|Person=3	6	obl	_	_
3	olarak	olarak	ADP	PCNom	_	2	case	_	_
4	bu	bu	DET	Det	_	5	det	_	_
5	hususu	husus	NOUN	Noun	Case=Acc|Number=Sing|Person=3	6	obj	_	_
6	belirtiyorlar	belir	VERB	Verb	Aspect=Prog|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Polite=Infm|Tense=Pres|Voice=Cau	0	root	_	SpaceAfter=No
7	.	.	PUNCT	Punc	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 obj	color:blue
1	Oğlunun	oğul	NOUN	Noun	Case=Gen|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	4	nmod:poss	_	_
2	neden	ne	PRON	Ques	Case=Abl|Number=Sing|Person=3	4	obl	_	_
3	eroinman	eroinman	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	4	obj	_	_
4	olduğunu	ol	VERB	Verb	Aspect=Perf|Case=Acc|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part	5	obj	_	_
5	anlayamaması	anla	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Pot|Number[psor]=Sing|Person[psor]=3|Polarity=Neg|Tense=Pres|VerbForm=Vnoun	7	nsubj	_	_
6	çok	çok	ADV	Adverb	_	7	advmod	_	_
7	doğal	doğal	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	0	root	_	_
8	dı	i	AUX	Zero	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	7	cop	_	_
9	.	.	PUNCT	Punc	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obj	color:blue
1	Ne	ne	PRON	Ques	Case=Nom|Number=Sing|Person=3	2	obj	_	_
2	anlatacaktın	anlat	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Polarity=Pos|Tense=FutPast	0	root	_	SpaceAfter=No
3	.	.	PUNCT	Punc	_	2	punct	_	_

~~~


