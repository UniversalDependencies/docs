

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Turkish)

This relation is universal.

8460 nodes (18%) are attached to their parents as `punct`.

5658 instances of `punct` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.84302600472813.

The following 14 pairs of parts of speech are connected with `punct`: [tr-pos/VERB]()-[tr-pos/PUNCT]() (5398; 64% instances), [tr-pos/NOUN]()-[tr-pos/PUNCT]() (1789; 21% instances), [tr-pos/ADJ]()-[tr-pos/PUNCT]() (714; 8% instances), [tr-pos/PROPN]()-[tr-pos/PUNCT]() (163; 2% instances), [tr-pos/ADV]()-[tr-pos/PUNCT]() (133; 2% instances), [tr-pos/PRON]()-[tr-pos/PUNCT]() (108; 1% instances), [tr-pos/NUM]()-[tr-pos/PUNCT]() (58; 1% instances), [tr-pos/INTJ]()-[tr-pos/PUNCT]() (25; 0% instances), [tr-pos/CCONJ]()-[tr-pos/PUNCT]() (24; 0% instances), [tr-pos/ADP]()-[tr-pos/PUNCT]() (18; 0% instances), [tr-pos/PUNCT]()-[tr-pos/PUNCT]() (18; 0% instances), [tr-pos/DET]()-[tr-pos/PUNCT]() (10; 0% instances), [tr-pos/AUX]()-[tr-pos/PUNCT]() (1; 0% instances), [tr-pos/X]()-[tr-pos/PUNCT]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 punct	color:blue
1	Ama	ama	CCONJ	Conj	_	4	conj	_	_
2	annemin	anne	NOUN	Noun	Case=Gen|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	3	nmod:poss	_	_
3	şartları	şart	NOUN	Noun	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	4	nsubj	_	_
4	vardı	var	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
5	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 punct	color:blue
1	(	(	PUNCT	Punc	_	2	punct	_	SpaceAfter=No
2	İzninizle	izin	NOUN	Noun	Case=Ins|Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=2	5	conj	_	SpaceAfter=No
3	,	,	PUNCT	Punc	_	5	punct	_	_
4	neden	ne	PRON	Ques	Case=Abl|Number=Sing|Person=3	5	obl	_	_
5	olmasın	ol	VERB	Verb	Aspect=Perf|Mood=Imp|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	0	root	_	SpaceAfter=No
6	...	...	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 punct	color:blue
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


