

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Turkish)

This relation is universal.

2207 nodes (4%) are attached to their parents as `case`.

2162 instances of `case` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.15677390122338.

The following 12 pairs of parts of speech are connected with `case`: [tr-pos/NOUN]()-[tr-pos/ADP]() (1067; 48% instances), [tr-pos/VERB]()-[tr-pos/ADP]() (600; 27% instances), [tr-pos/ADJ]()-[tr-pos/ADP]() (257; 12% instances), [tr-pos/PRON]()-[tr-pos/ADP]() (126; 6% instances), [tr-pos/PROPN]()-[tr-pos/ADP]() (62; 3% instances), [tr-pos/NUM]()-[tr-pos/ADP]() (40; 2% instances), [tr-pos/ADV]()-[tr-pos/ADP]() (24; 1% instances), [tr-pos/DET]()-[tr-pos/ADP]() (19; 1% instances), [tr-pos/ADP]()-[tr-pos/ADP]() (6; 0% instances), [tr-pos/CONJ]()-[tr-pos/ADP]() (3; 0% instances), [tr-pos/AUX]()-[tr-pos/ADP]() (2; 0% instances), [tr-pos/INTJ]()-[tr-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 case	color:blue
1	En	en	ADV	Adverb	_	2	advmod	_	_
2	sonunda	sonunda	ADV	Adverb	_	9	advmod	_	_
3	içeriden	içeri	NOUN	Noun	Case=Abl|Number=Sing|Person=3	9	nmod	_	_
4	gök	gök	NOUN	Noun	Case=Nom|Number=Sing|Person=3	5	nmod:poss	_	_
5	gürültüsü	gürültü	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	8	nmod	_	_
6	gibi	gibi	ADP	PCNom	_	5	case	_	_
7	bir	bir	NUM	ANum	NumType=Card	8	det	_	_
8	ses	ses	NOUN	Noun	Case=Nom|Number=Sing|Person=3	9	nsubj	_	_
9	gelmiş	gel	VERB	Verb	Aspect=Perf|Evidentiality=Nfh|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Past	0	root	_	_
10	.	.	PUNCT	Punc	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 case	color:blue
1	Binamıza	bina	NOUN	Noun	Case=Dat|Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=1	3	nmod	_	_
2	isim	isim	NOUN	Noun	Case=Nom|Number=Sing|Person=3	3	dobj	_	_
3	bulmak	bul	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Negative=Pos|Tense=Pres|VerbForm=Ger	6	advcl	_	_
4	diye	diye	ADP	PCNom	_	3	case	_	_
5	bir	bir	NUM	ANum	NumType=Card	6	det	_	_
6	mesele	mesele	NOUN	Noun	Case=Nom|Number=Sing|Person=3	7	nsubj	_	_
7	çıkmıştı	çık	VERB	Verb	Aspect=Perf|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pqp	0	root	_	_
8	.	.	PUNCT	Punc	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 case	color:blue
1	Kumral	kumral	ADJ	Adj	_	2	amod	_	_
2	saçları	saç	NOUN	Noun	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	5	nsubj	_	_
3	hafif	hafif	ADJ	Adj	_	5	amod	_	_
4	çe	ce	ADP	Ly	_	3	case	_	_
5	karışmıştı	karış	VERB	Verb	Aspect=Perf|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pqp	0	root	_	_
6	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


