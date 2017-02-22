

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Turkish)

This relation is universal.

681 nodes (1%) are attached to their parents as `cop`.

680 instances of `cop` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.12922173274596.

The following 14 pairs of parts of speech are connected with `cop`: [tr-pos/NOUN]()-[tr-pos/AUX]() (264; 39% instances), [tr-pos/ADJ]()-[tr-pos/AUX]() (209; 31% instances), [tr-pos/PRON]()-[tr-pos/AUX]() (51; 7% instances), [tr-pos/ADV]()-[tr-pos/AUX]() (44; 6% instances), [tr-pos/VERB]()-[tr-pos/AUX]() (35; 5% instances), [tr-pos/NOUN]()-[tr-pos/VERB]() (21; 3% instances), [tr-pos/ADJ]()-[tr-pos/VERB]() (18; 3% instances), [tr-pos/ADP]()-[tr-pos/AUX]() (15; 2% instances), [tr-pos/PROPN]()-[tr-pos/AUX]() (8; 1% instances), [tr-pos/VERB]()-[tr-pos/VERB]() (6; 1% instances), [tr-pos/NUM]()-[tr-pos/AUX]() (4; 1% instances), [tr-pos/PRON]()-[tr-pos/VERB]() (3; 0% instances), [tr-pos/NUM]()-[tr-pos/VERB]() (2; 0% instances), [tr-pos/ADV]()-[tr-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 cop	color:blue
1	Siz	siz	PRON	Pers	Case=Nom|Number=Plur|Person=2|PronType=Prs	5	nsubj	_	_
2	sektörde	sektör	NOUN	Noun	Case=Loc|Number=Sing|Person=3	5	nmod	_	_
3	ki	ki	ADP	Rel	_	2	case	_	_
4	tek	tek	ADJ	Adj	_	5	amod	_	_
5	antropolog	antropolog	NOUN	Noun	Case=Nom|Number=Sing|Person=3	0	root	_	_
6	sunuz	i	AUX	Zero	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Tense=Pres	5	cop	_	_
7	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 cop	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 cop	color:blue
1	-	-	PUNCT	Punc	_	2	conj	_	SpaceAfter=No
2	?	ne	PRON	Ques	Case=Abl|Number=Sing|Person=3	0	root	_	_
3	edenmiş	i	AUX	Zero	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	2	cop	_	_
4	o	o	PRON	Demons	Case=Nom|Number=Sing|Person=3|PronType=Dem	2	nsubj	_	SpaceAfter=No
5	?	?	PUNCT	Punc	_	2	punct	_	_

~~~


