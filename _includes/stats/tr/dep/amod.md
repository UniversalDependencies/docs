

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Turkish)

This relation is universal.

3822 nodes (7%) are attached to their parents as `amod`.

3750 instances of `amod` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.68942961800105.

The following 16 pairs of parts of speech are connected with `amod`: [tr-pos/NOUN]()-[tr-pos/ADJ]() (1958; 51% instances), [tr-pos/VERB]()-[tr-pos/ADJ]() (1375; 36% instances), [tr-pos/ADJ]()-[tr-pos/ADJ]() (338; 9% instances), [tr-pos/PROPN]()-[tr-pos/ADJ]() (51; 1% instances), [tr-pos/PRON]()-[tr-pos/ADJ]() (20; 1% instances), [tr-pos/NUM]()-[tr-pos/ADJ]() (19; 0% instances), [tr-pos/NOUN]()-[tr-pos/NUM]() (18; 0% instances), [tr-pos/ADV]()-[tr-pos/ADJ]() (15; 0% instances), [tr-pos/CONJ]()-[tr-pos/ADJ]() (11; 0% instances), [tr-pos/ADP]()-[tr-pos/ADJ]() (5; 0% instances), [tr-pos/PUNCT]()-[tr-pos/ADJ]() (5; 0% instances), [tr-pos/VERB]()-[tr-pos/NUM]() (3; 0% instances), [tr-pos/DET]()-[tr-pos/ADJ]() (1; 0% instances), [tr-pos/PROPN]()-[tr-pos/NUM]() (1; 0% instances), [tr-pos/PUNCT]()-[tr-pos/NUM]() (1; 0% instances), [tr-pos/X]()-[tr-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 amod	color:blue
1	Rokfor'un	Rokfor	PROPN	Prop	Case=Gen|Number=Sing|Person=3	2	nmod:poss	_	_
2	efsanesi	efsane	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	9	conj	_	_
3	:	:	PUNCT	Punc	_	2	punct	_	_
4	Vaktiyle	vakit	NOUN	Noun	Case=Ins|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	9	nmod	_	_
5	,	,	PUNCT	Punc	_	9	punct	_	_
6	genç	genç	ADJ	Adj	_	8	amod	_	_
7	bir	bir	NUM	ANum	NumType=Card	8	det	_	_
8	çoban	çoban	NOUN	Noun	Case=Nom|Number=Sing|Person=3	9	nsubj	_	_
9	var	var	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	0	root	_	_
10	mış	i	AUX	Zero	Aspect=Perf|Evidentiality=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	9	cop	_	_
11	.	.	PUNCT	Punc	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 amod	color:blue
1	NA	Na	PROPN	Prop	Case=Nom|Number=Sing|Person=3	2	nmod:poss	_	_
2	toplantılarında	toplantı	NOUN	Noun	Case=Loc|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	6	nmod	_	_
3	ilk	ilk	ADJ	Adj	_	4	amod	_	_
4	kez	kez	NOUN	Noun	Case=Nom|Number=Sing|Person=3	6	nmod	_	_
5	başkalarına	başka	ADJ	NAdj	Case=Dat|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	6	amod	_	_
6	yöneldim	yönel	VERB	Verb	Aspect=Perf|Mood=Ind|Negative=Pos|Number=Sing|Person=1|Tense=Past	0	root	_	_
7	.	.	PUNCT	Punc	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 amod	color:blue
1	O	o	PRON	Demons	Case=Nom|Number=Sing|Person=3|PronType=Dem	10	nsubj	_	_
2	,	,	PUNCT	Punc	_	10	punct	_	_
3	değişik	değişik	ADJ	Adj	_	4	amod	_	_
4	renkleri	renk	NOUN	Noun	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	7	conj	_	_
5	ve	ve	CONJ	Conj	_	7	cc	_	_
6	yandan	yan	ADJ	NAdj	Case=Abl|Number=Sing|Person=3	7	amod	_	_
7	ışıkları	ışık	NOUN	Noun	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	8	nmod	_	_
8	ile	ile	CONJ	Conj	_	10	cc	_	_
9	karşımda	karşı	ADJ	NAdj	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	10	amod	_	_
10	hazır	hazır	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	0	root	_	_
11	dır	i	AUX	Zero	Aspect=Perf|Mood=Gen|Number=Sing|Person=3|Tense=Pres	10	cop	_	_
12	.	.	PUNCT	Punc	_	10	punct	_	_

~~~


