

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Turkish)

This relation is a language-specific subtype of [nmod]().

2923 nodes (6%) are attached to their parents as `nmod:poss`.

2912 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.81628463906945.

The following 36 pairs of parts of speech are connected with `nmod:poss`: [tr-pos/NOUN]()-[tr-pos/NOUN]() (1416; 48% instances), [tr-pos/ADJ]()-[tr-pos/NOUN]() (291; 10% instances), [tr-pos/VERB]()-[tr-pos/NOUN]() (255; 9% instances), [tr-pos/NOUN]()-[tr-pos/PROPN]() (249; 9% instances), [tr-pos/NOUN]()-[tr-pos/ADJ]() (189; 6% instances), [tr-pos/NOUN]()-[tr-pos/VERB]() (154; 5% instances), [tr-pos/NOUN]()-[tr-pos/PRON]() (87; 3% instances), [tr-pos/VERB]()-[tr-pos/PROPN]() (35; 1% instances), [tr-pos/VERB]()-[tr-pos/PRON]() (30; 1% instances), [tr-pos/ADJ]()-[tr-pos/PRON]() (29; 1% instances), [tr-pos/VERB]()-[tr-pos/VERB]() (25; 1% instances), [tr-pos/PRON]()-[tr-pos/NOUN]() (22; 1% instances), [tr-pos/VERB]()-[tr-pos/ADJ]() (22; 1% instances), [tr-pos/ADJ]()-[tr-pos/ADJ]() (21; 1% instances), [tr-pos/NOUN]()-[tr-pos/NUM]() (20; 1% instances), [tr-pos/ADJ]()-[tr-pos/PROPN]() (17; 1% instances), [tr-pos/ADJ]()-[tr-pos/VERB]() (15; 1% instances), [tr-pos/NUM]()-[tr-pos/NOUN]() (14; 0% instances), [tr-pos/ADJ]()-[tr-pos/NUM]() (5; 0% instances), [tr-pos/PRON]()-[tr-pos/PRON]() (5; 0% instances), [tr-pos/PRON]()-[tr-pos/ADJ]() (3; 0% instances), [tr-pos/ADP]()-[tr-pos/NOUN]() (2; 0% instances), [tr-pos/ADP]()-[tr-pos/VERB]() (2; 0% instances), [tr-pos/VERB]()-[tr-pos/ADP]() (2; 0% instances), [tr-pos/VERB]()-[tr-pos/NUM]() (2; 0% instances), [tr-pos/ADJ]()-[tr-pos/PUNCT]() (1; 0% instances), [tr-pos/ADP]()-[tr-pos/ADJ]() (1; 0% instances), [tr-pos/ADP]()-[tr-pos/PROPN]() (1; 0% instances), [tr-pos/NOUN]()-[tr-pos/CCONJ]() (1; 0% instances), [tr-pos/NUM]()-[tr-pos/NUM]() (1; 0% instances), [tr-pos/NUM]()-[tr-pos/PRON]() (1; 0% instances), [tr-pos/PRON]()-[tr-pos/PROPN]() (1; 0% instances), [tr-pos/PROPN]()-[tr-pos/DET]() (1; 0% instances), [tr-pos/PROPN]()-[tr-pos/NOUN]() (1; 0% instances), [tr-pos/VERB]()-[tr-pos/CCONJ]() (1; 0% instances), [tr-pos/VERB]()-[tr-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:poss	color:blue
1	Ama	ama	CCONJ	Conj	_	4	conj	_	_
2	annemin	anne	NOUN	Noun	Case=Gen|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	3	nmod:poss	_	_
3	şartları	şart	NOUN	Noun	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	4	nsubj	_	_
4	vardı	var	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
5	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:poss	color:blue
1	Alışveriş	alışveriş	NOUN	Noun	Case=Nom|Number=Sing|Person=3	5	nsubj	_	_
2	ise	ise	CCONJ	Conj	_	1	discourse	_	_
3	hayatın	hayat	NOUN	Noun	Case=Gen|Number=Sing|Person=3	4	nmod:poss	_	_
4	temelinde	temel	ADJ	NAdj	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	5	amod	_	_
5	yatar	yat	VERB	Verb	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Aor	0	root	_	SpaceAfter=No
6	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nmod:poss	color:blue
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


