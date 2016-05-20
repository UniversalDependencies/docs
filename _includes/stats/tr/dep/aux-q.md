

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Turkish)

This relation is a language-specific subtype of [aux]().

223 nodes (0%) are attached to their parents as `aux:q`.

223 instances of `aux:q` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.17937219730942.

The following 8 pairs of parts of speech are connected with `aux:q`: [tr-pos/VERB]()-[tr-pos/AUX]() (118; 53% instances), [tr-pos/NOUN]()-[tr-pos/AUX]() (39; 17% instances), [tr-pos/ADJ]()-[tr-pos/AUX]() (37; 17% instances), [tr-pos/ADV]()-[tr-pos/AUX]() (12; 5% instances), [tr-pos/PRON]()-[tr-pos/AUX]() (12; 5% instances), [tr-pos/NUM]()-[tr-pos/AUX]() (2; 1% instances), [tr-pos/PROPN]()-[tr-pos/AUX]() (2; 1% instances), [tr-pos/CONJ]()-[tr-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 aux:q	color:blue
1	-	-	PUNCT	Punc	_	4	conj	_	_
2	Çiziyor	çiz	VERB	Verb	Aspect=Prog|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Register=Inf|Tense=Pres	0	root	_	_
3	musun	mu	AUX	Ques	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Pres	2	aux:q	_	_
4	yani	yani	CONJ	Conj	_	2	conj	_	_
5	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 aux:q	color:blue
1	Senin	sen	PRON	Pers	Case=Gen|Number=Sing|Person=2|PronType=Prs	4	nsubj	_	_
2	ki	ki	ADP	Rel	Case=Nom|Number=Sing|Person=3	1	case	_	_
3	tatlı	tatlı	ADJ	Adj	_	4	amod	_	_
4	can	can	NOUN	Noun	Case=Nom|Number=Sing|Person=3	6	nmod	_	_
5	da	da	CONJ	Conj	_	4	cc	_	_
6	benim	ben	PRON	Pers	Case=Gen|Number=Sing|Person=1|PronType=Prs	8	nsubj	_	_
7	ki	ki	ADP	Rel	Case=Nom|Number=Sing|Person=3	6	case	_	_
8	patlıcan	patlıcan	NOUN	Noun	Case=Nom|Number=Sing|Person=3	0	root	_	_
9	mı	mı	AUX	Ques	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres	8	aux:q	_	_
10	.	.	PUNCT	Punc	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 aux:q	color:blue
1	Baban	baba	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=2	5	nsubj	_	_
2	sana	sen	PRON	Pers	Case=Dat|Number=Sing|Person=2|PronType=Prs	9	conj	_	_
3	rağmen	rağmen	ADP	PCDat	_	2	case	_	_
4	mi	mi	AUX	Ques	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	aux:q	_	_
5	astı	as	VERB	Verb	Aspect=Perf|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Past	6	nmod	_	_
6	kendini	kendi	PRON	Reflex	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|Reflex=Yes	9	nmod	_	_
7	,	,	PUNCT	Punc	_	9	punct	_	_
8	sana	sen	PRON	Pers	Case=Dat|Number=Sing|Person=2|PronType=Prs	9	nmod	_	_
9	bağlı	bağlı	ADJ	Adj	_	0	root	_	_
10	olarak	olarak	ADP	PCNom	_	9	case	_	_
11	mı	mı	AUX	Ques	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres	9	aux:q	_	_
12	.	.	PUNCT	Punc	_	9	punct	_	_

~~~


