

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Turkish)

This relation is universal.

47 nodes (0%) are attached to their parents as `appos`.

31 instances of `appos` (66%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.21276595744681.

The following 9 pairs of parts of speech are connected with `appos`: [tr-pos/PROPN]()-[tr-pos/NOUN]() (20; 43% instances), [tr-pos/NOUN]()-[tr-pos/NOUN]() (19; 40% instances), [tr-pos/VERB]()-[tr-pos/NOUN]() (2; 4% instances), [tr-pos/ADJ]()-[tr-pos/NOUN]() (1; 2% instances), [tr-pos/NOUN]()-[tr-pos/VERB]() (1; 2% instances), [tr-pos/NUM]()-[tr-pos/NUM]() (1; 2% instances), [tr-pos/PRON]()-[tr-pos/NOUN]() (1; 2% instances), [tr-pos/PROPN]()-[tr-pos/ADJ]() (1; 2% instances), [tr-pos/PROPN]()-[tr-pos/PROPN]() (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 appos	color:blue
1	Ağbisi	ağbi	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	2	appos	_	_
2	Firuz	Firuz	PROPN	Prop	Case=Nom|Number=Sing|Person=3	5	nsubj	_	SpaceAfter=No
3	,	,	PUNCT	Punc	_	5	punct	_	_
4	savcı	savcı	NOUN	Noun	Case=Nom|Number=Sing|Person=3	5	obj	_	_
5	olmuş	ol	VERB	Verb	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
6	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 appos	color:blue
1	Çünkü	çünkü	CCONJ	Conj	_	5	conj	_	_
2	aleme	alem	NOUN	Noun	Case=Dat|Number=Sing|Person=3	5	obl	_	_
3	bir	bir	NUM	ANum	NumType=Card	4	det	_	_
4	ağa	ağa	NOUN	Noun	Case=Nom|Number=Sing|Person=3	5	obl	_	_
5	giriyor	gir	VERB	Verb	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Polite=Infm|Tense=Pres	0	root	_	SpaceAfter=No
6	:	:	PUNCT	Punc	_	5	punct	_	_
7	Soğan	soğan	NOUN	Noun	Case=Nom|Number=Sing|Person=3	4	appos	_	SpaceAfter=No
8	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 appos	color:blue
1	Bu	bu	DET	Det	_	2	det	_	_
2	savların	sav	NOUN	Noun	Case=Gen|Number=Plur|Person=3	3	nmod:poss	_	_
3	hepsinin	hepsi	PRON	Quant	Case=Gen|Number=Plur|Number[psor]=Plur|Person=3|Person[psor]=3|PronType=Ind	4	nmod:poss	_	_
4	yanlışlığı	yanlışlık	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	8	nsubj	_	_
5	(	(	PUNCT	Punc	_	6	punct	_	SpaceAfter=No
6	fallacies	fallacies	NOUN	Noun	Case=Nom|Number=Sing|Person=3	4	appos	_	SpaceAfter=No
7	)	)	PUNCT	Punc	_	6	punct	_	_
8	gösterilmiş	göster	VERB	Verb	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|Voice=Pass	0	root	_	SpaceAfter=No
9	,	,	PUNCT	Punc	_	12	punct	_	_
10	idealist	idealist	ADJ	Adj	_	11	amod	_	_
11	dizgeler	dizge	NOUN	Noun	Case=Nom|Number=Plur|Person=3	12	nsubj	_	_
12	yadsınmıştır	yadsı	VERB	Verb	Aspect=Perf|Evident=Nfh|Mood=Gen|Number=Sing|Person=3|Polarity=Pos|Tense=Past|Voice=Pass	8	conj	_	_
13	(	(	PUNCT	Punc	_	12	punct	_	SpaceAfter=No
14	refuted	refuted	NOUN	Noun	Case=Nom|Number=Sing|Person=3	12	appos	_	SpaceAfter=No
15	)	)	PUNCT	Punc	_	12	punct	_	SpaceAfter=No
16	.	.	PUNCT	Punc	_	12	punct	_	_

~~~


