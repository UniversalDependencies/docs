

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Turkish)

This relation is universal.

813 nodes (1%) are attached to their parents as `advcl`.

780 instances of `advcl` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.1980319803198.

The following 9 pairs of parts of speech are connected with `advcl`: [tr-pos/VERB]()-[tr-pos/VERB]() (755; 93% instances), [tr-pos/NOUN]()-[tr-pos/VERB]() (29; 4% instances), [tr-pos/ADJ]()-[tr-pos/VERB]() (19; 2% instances), [tr-pos/ADP]()-[tr-pos/VERB]() (2; 0% instances), [tr-pos/NOUN]()-[tr-pos/NUM]() (2; 0% instances), [tr-pos/NUM]()-[tr-pos/VERB]() (2; 0% instances), [tr-pos/PRON]()-[tr-pos/VERB]() (2; 0% instances), [tr-pos/PROPN]()-[tr-pos/VERB]() (1; 0% instances), [tr-pos/VERB]()-[tr-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 advcl	color:blue
1	Uzanıp	uza	VERB	Verb	Aspect=Perf|Mood=Ind|Negative=Pos|Tense=Pres|VerbForm=Trans|Voice=Pass	3	advcl	_	_
2	mektubu	mektup	NOUN	Noun	Case=Acc|Number=Sing|Person=3	3	dobj	_	_
3	aldı	al	VERB	Verb	Aspect=Perf|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Past	0	root	_	_
4	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 advcl	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 advcl	color:blue
1	Olayın	olay	NOUN	Noun	Case=Gen|Number=Sing|Person=3	3	nmod:poss	_	_
2	ilk	ilk	ADJ	Adj	_	3	amod	_	_
3	günü	gün	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	7	nmod	_	_
4	böyle	böyle	ADJ	Adj	_	6	det	_	_
5	bir	bir	NUM	ANum	NumType=Card	6	det	_	_
6	neticeye	netice	NOUN	Noun	Case=Dat|Number=Sing|Person=3	7	nmod	_	_
7	varmak	var	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Negative=Pos|Tense=Pres|VerbForm=Ger	11	advcl	_	_
8	için	için	ADP	PCNom	_	7	case	_	_
9	kahin	kahin	NOUN	Noun	Case=Nom|Number=Sing|Person=3	10	nsubj	_	_
10	olmak	ol	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Negative=Pos|Tense=Pres|VerbForm=Ger	11	ccomp	_	_
11	lazım	lazım	ADJ	Adj	_	0	root	_	_
12	.	.	PUNCT	Punc	_	11	punct	_	_

~~~


