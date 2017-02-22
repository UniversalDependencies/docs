

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Turkish)

This relation is universal.

3688 nodes (8%) are attached to their parents as `obl`.

3479 instances of `obl` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.07700650759219.

The following 23 pairs of parts of speech are connected with `obl`: [tr-pos/VERB]()-[tr-pos/NOUN]() (2637; 72% instances), [tr-pos/VERB]()-[tr-pos/PRON]() (398; 11% instances), [tr-pos/ADJ]()-[tr-pos/NOUN]() (281; 8% instances), [tr-pos/VERB]()-[tr-pos/PROPN]() (194; 5% instances), [tr-pos/ADJ]()-[tr-pos/PRON]() (49; 1% instances), [tr-pos/ADV]()-[tr-pos/NOUN]() (34; 1% instances), [tr-pos/NUM]()-[tr-pos/NOUN]() (25; 1% instances), [tr-pos/ADJ]()-[tr-pos/PROPN]() (18; 0% instances), [tr-pos/ADV]()-[tr-pos/PRON]() (13; 0% instances), [tr-pos/ADP]()-[tr-pos/NOUN]() (7; 0% instances), [tr-pos/DET]()-[tr-pos/NOUN]() (5; 0% instances), [tr-pos/PUNCT]()-[tr-pos/NOUN]() (5; 0% instances), [tr-pos/CCONJ]()-[tr-pos/NOUN]() (4; 0% instances), [tr-pos/ADP]()-[tr-pos/PRON]() (3; 0% instances), [tr-pos/NUM]()-[tr-pos/PRON]() (3; 0% instances), [tr-pos/ADP]()-[tr-pos/PROPN]() (2; 0% instances), [tr-pos/ADV]()-[tr-pos/PROPN]() (2; 0% instances), [tr-pos/CCONJ]()-[tr-pos/PRON]() (2; 0% instances), [tr-pos/NUM]()-[tr-pos/PROPN]() (2; 0% instances), [tr-pos/NOUN]()-[tr-pos/PRON]() (1; 0% instances), [tr-pos/PUNCT]()-[tr-pos/PRON]() (1; 0% instances), [tr-pos/VERB]()-[tr-pos/VERB]() (1; 0% instances), [tr-pos/X]()-[tr-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 obl	color:blue
1	Orada	ora	NOUN	Noun	Case=Loc|Number=Sing|Person=3	3	obl	_	_
2	ki	ki	ADP	Rel	_	1	case	_	_
3	tartışma	tartış	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Vnoun	5	nsubj	_	_
4	hayli	hayli	ADV	Adverb	_	5	advmod	_	_
5	zengin	zengin	ADJ	Adj	_	0	root	_	SpaceAfter=No
6	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 obl	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obl	color:blue
1	tüm	tüm	DET	Det	_	2	det	_	_
2	haşmetiyle	haşmet	NOUN	Noun	Case=Ins|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	3	obl	_	_
3	ortaya	orta	ADJ	NAdj	Case=Dat|Number=Sing|Person=3	0	root	_	_
4	çıkıyor	çık	VERB	Verb	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Polite=Infm|Tense=Pres	3	compound	_	SpaceAfter=No
5	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


