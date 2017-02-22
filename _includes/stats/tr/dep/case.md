

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Turkish)

This relation is universal.

1835 nodes (4%) are attached to their parents as `case`.

1786 instances of `case` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.45776566757493.

The following 16 pairs of parts of speech are connected with `case`: [tr-pos/NOUN]()-[tr-pos/ADP]() (903; 49% instances), [tr-pos/VERB]()-[tr-pos/ADP]() (431; 23% instances), [tr-pos/ADJ]()-[tr-pos/ADP]() (242; 13% instances), [tr-pos/PRON]()-[tr-pos/ADP]() (106; 6% instances), [tr-pos/PROPN]()-[tr-pos/ADP]() (57; 3% instances), [tr-pos/NUM]()-[tr-pos/ADP]() (39; 2% instances), [tr-pos/ADV]()-[tr-pos/ADP]() (21; 1% instances), [tr-pos/DET]()-[tr-pos/ADP]() (18; 1% instances), [tr-pos/CCONJ]()-[tr-pos/ADP]() (4; 0% instances), [tr-pos/ADP]()-[tr-pos/ADP]() (3; 0% instances), [tr-pos/INTJ]()-[tr-pos/ADP]() (3; 0% instances), [tr-pos/NOUN]()-[tr-pos/NUM]() (2; 0% instances), [tr-pos/NUM]()-[tr-pos/NUM]() (2; 0% instances), [tr-pos/VERB]()-[tr-pos/NOUN]() (2; 0% instances), [tr-pos/VERB]()-[tr-pos/ADJ]() (1; 0% instances), [tr-pos/VERB]()-[tr-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 case	color:blue
1	Orada	ora	NOUN	Noun	Case=Loc|Number=Sing|Person=3	3	obl	_	_
2	ki	ki	ADP	Rel	_	1	case	_	_
3	tartışma	tartış	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Vnoun	5	nsubj	_	_
4	hayli	hayli	ADV	Adverb	_	5	advmod	_	_
5	zengin	zengin	ADJ	Adj	_	0	root	_	SpaceAfter=No
6	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 case	color:blue
1	Herkes	herkes	NOUN	Noun	Case=Nom|Number=Sing|Person=3	4	nsubj	_	_
2	istediği	iste	VERB	Verb	Aspect=Perf|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part	4	advmod:emph	_	_
3	gibi	gibi	ADP	PCNom	_	2	case	_	_
4	sevişiyor	seviş	VERB	Verb	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Polite=Infm|Tense=Pres	0	root	_	SpaceAfter=No
5	,	,	PUNCT	Punc	_	8	punct	_	_
6	her	her	DET	Det	_	8	nsubj	_	_
7	şey	şey	NOUN	Noun	Case=Nom|Number=Sing|Person=3	6	compound	_	_
8	serbest	serbest	ADJ	Adj	_	4	conj	_	SpaceAfter=No
9	.	.	PUNCT	Punc	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 case	color:blue
1	Öyle	öyle	ADJ	Adj	_	3	amod	_	_
2	ce	ce	ADP	Ly	_	1	case	_	_
3	yiyin	ye	VERB	Verb	Aspect=Perf|Mood=Imp|Number=Plur|Person=2|Polarity=Pos|Tense=Pres	0	root	_	SpaceAfter=No
4	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


