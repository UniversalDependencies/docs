

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Turkish)

This relation is universal.

11 nodes (0%) are attached to their parents as `parataxis`.

10 instances of `parataxis` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.09090909090909.

The following 4 pairs of parts of speech are connected with `parataxis`: [tr-pos/VERB]()-[tr-pos/VERB]() (6; 55% instances), [tr-pos/NOUN]()-[tr-pos/VERB]() (3; 27% instances), [tr-pos/ADJ]()-[tr-pos/VERB]() (1; 9% instances), [tr-pos/ADP]()-[tr-pos/VERB]() (1; 9% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 19 parataxis	color:blue
1	O	o	PRON	Pers	Case=Nom|Number=Sing|Person=3|PronType=Prs	15	nsubj	_	_
2	da	da	CONJ	Conj	_	1	advmod:emph	_	_
3	,	,	PUNCT	Punc	_	15	punct	_	_
4	sizin	siz	PRON	Pers	Case=Gen|Number=Plur|Person=2|PronType=Prs	6	nmod	_	_
5	onu	o	PRON	Pers	Case=Acc|Number=Sing|Person=3|PronType=Prs	6	dobj	_	_
6	sevdiğiniz	sev	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Negative=Pos|Number[psor]=Plur|Person[psor]=2|Tense=Past|VerbForm=Part	10	acl	_	_
7	kadar	kadar	ADP	PCNom	_	6	case	_	_
8	,	,	PUNCT	Punc	_	6	punct	_	_
9	sizi	siz	PRON	Pers	Case=Acc|Number=Plur|Person=2|PronType=Prs	10	dobj	_	_
10	seviyorsa	sev	VERB	Verb	Aspect=Prog|Mood=Cnd|Negative=Pos|Number=Sing|Person=3|Register=Inf|Tense=Pres	15	nmod	_	_
11	,	,	PUNCT	Punc	_	10	punct	_	_
12	yarısını	yarı	ADJ	NAdj	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	13	dobj	_	_
13	kesip	kes	VERB	Verb	Aspect=Perf|Mood=Ind|Negative=Pos|Tense=Pres|VerbForm=Trans	15	advcl	_	_
14	size	siz	PRON	Pers	Case=Dat|Number=Plur|Person=2|PronType=Prs	15	nmod	_	_
15	verir	ver	VERB	Verb	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Aor	0	root	_	_
16	(	(	PUNCT	Punc	_	15	punct	_	_
17	Karım	karı	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	19	nsubj	_	_
18	böyle	böyle	ADV	Adverb	_	19	advmod	_	_
19	yapar	yap	VERB	Verb	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Aor	15	parataxis	_	_
20	)	)	PUNCT	Punc	_	19	punct	_	_
21	.	.	PUNCT	Punc	_	19	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 11 parataxis	color:blue
1	Yedi	yedi	NUM	ANum	NumType=Card	2	nummod	_	_
2	saat	saat	NOUN	Noun	Case=Nom|Number=Sing|Person=3	4	nmod	_	_
3	lik	lik	ADP	Ness	Case=Nom|Number=Sing|Person=3	2	case	_	_
4	yolculuk	yolculuk	NOUN	Noun	Case=Nom|Number=Sing|Person=3	18	nmod	_	_
5	boyunca	boyunca	ADP	PCNom	_	4	case	_	_
6	-	-	PUNCT	Punc	_	18	punct	_	_
7	ki	ki	CONJ	Conj	_	11	cc	_	_
8	yetmiş	yetmiş	NUM	NNum	Case=Nom|Number=Sing|NumType=Card|Person=3	9	nummod	_	_
9	kilometre	kilometre	NOUN	Noun	Case=Nom|Number=Sing|Person=3	11	dobj	_	_
10	kat	kat	NOUN	Noun	Case=Nom|Number=Sing|Person=3	11	compound:lvc	_	_
11	edecektik	et	VERB	Verb	Aspect=Perf|Mood=Ind|Negative=Pos|Number=Plur|Person=1|Tense=FutPast	4	parataxis	_	_
12	-	-	PUNCT	Punc	_	11	punct	_	_
13	bir	bir	NUM	ANum	NumType=Card	14	nummod	_	_
14	tek	tek	ADJ	Adj	_	15	amod	_	_
15	eve	ev	NOUN	Noun	Case=Dat|Number=Sing|Person=3	16	nmod	_	_
16	rastlamanın	rastla	VERB	Verb	Aspect=Perf|Case=Gen|Mood=Ind|Negative=Pos|Tense=Pres|VerbForm=Ger	18	csubj	_	_
17	mümkün	mümkün	ADJ	Adj	_	18	compound:lvc	_	_
18	olmadığı	ol	VERB	Verb	Aspect=Perf|Mood=Ind|Negative=Neg|Number[psor]=Sing|Person[psor]=3|Tense=Past|VerbForm=Part	20	acl	_	_
19	bir	bir	NUM	ANum	NumType=Card	20	det	_	_
20	coğrafya	coğrafya	NOUN	Noun	Case=Nom|Number=Sing|Person=3	0	root	_	_
21	.	.	PUNCT	Punc	_	20	punct	_	_

~~~


~~~ conllu
# visual-style 38	bgColor:blue
# visual-style 38	fgColor:white
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 31 38 parataxis	color:blue
1	İnsanları	insan	NOUN	Noun	Case=Acc|Number=Plur|Person=3	3	dobj	_	_
2	ikiye	iki	NUM	NNum	Case=Dat|Number=Sing|NumType=Card|Person=3	3	nummod	_	_
3	ayırıyor	ayır	VERB	Verb	Aspect=Prog|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Register=Inf|Tense=Pres	15	conj	_	_
4	annem	anne	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	3	nsubj	_	_
5	(	(	PUNCT	Punc	_	3	punct	_	_
6	sayacağı	say	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Negative=Pos|Number[psor]=Sing|Person[psor]=3|Tense=Fut|VerbForm=Part	10	nsubj	_	_
7	iki	iki	NUM	ANum	NumType=Card	8	nummod	_	_
8	kalem	kalem	NOUN	Noun	Case=Nom|Number=Sing|Person=3	10	nmod	_	_
9	de	de	CONJ	Conj	_	8	advmod:emph	_	_
10	olsa	ol	VERB	Verb	Aspect=Perf|Mood=Des|Negative=Pos|Number=Sing|Person=3|Tense=Pres	15	nmod	_	_
11	mutlaka	mutlaka	ADV	Adverb	_	14	advmod	_	_
12	parmaklarını	parmak	NOUN	Noun	Case=Acc|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=2	14	dobj	_	_
13	avucuna	avuç	NOUN	Noun	Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	14	nmod	_	_
14	kapatarak	kapa	VERB	Verb	Aspect=Perf|Mood=Ind|Negative=Pos|Tense=Pres|VerbForm=Trans|Voice=Cau	15	advcl	_	_
15	sayacak	say	VERB	Verb	Aspect=Perf|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Fut	0	root	_	_
16	;	;	PUNCT	Punc	_	15	punct	_	_
17	birincisi	birinci	NUM	NNum	Case=Nom|Number=Sing|Number[psor]=Sing|NumType=Ord|Person=3|Person[psor]=3	18	amod	_	_
18	yaşayan	yaşa	VERB	Verb	Aspect=Perf|Mood=Ind|Negative=Pos|Tense=Pres|VerbForm=Part	30	conj	_	_
19	lar	_	ADP	Zero	Case=Nom|Number=Plur|Person=3	18	case	_	_
20	(	(	PUNCT	Punc	_	18	punct	_	_
21	bunlar	bu	PRON	Demons	Case=Nom|Number=Plur|Person=3|PronType=Dem	24	nsubj	_	_
22	başkalarını	başka	ADJ	NAdj	Case=Acc|Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=3	24	dobj	_	_
23	da	da	CONJ	Conj	_	22	advmod:emph	_	_
24	yaşatıyor	yaşa	VERB	Verb	Aspect=Prog|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Register=Inf|Tense=Pres|Voice=Cau	18	parataxis	_	_
25	)	)	PUNCT	Punc	_	24	punct	_	_
26	,	,	PUNCT	Punc	_	24	punct	_	_
27	ikincisi	ikinci	NUM	NNum	Case=Nom|Number=Sing|Number[psor]=Sing|NumType=Ord|Person=3|Person[psor]=3	30	amod	_	_
28	yaşayan	yaşa	VERB	Verb	Aspect=Perf|Mood=Ind|Negative=Pos|Tense=Pres|VerbForm=Part	30	dobj	_	_
29	ları	_	ADP	Zero	Case=Acc|Number=Plur|Person=3	28	case	_	_
30	seyreden	seyret	VERB	Verb	Aspect=Perf|Mood=Ind|Negative=Pos|Tense=Pres|VerbForm=Part	15	nsubj	_	_
31	ler	_	ADP	Zero	Case=Nom|Number=Plur|Person=3	30	case	_	_
32	(	(	PUNCT	Punc	_	30	punct	_	_
33	bunlar	bu	PRON	Demons	Case=Nom|Number=Plur|Person=3|PronType=Dem	38	nsubj	_	_
34	da	da	CONJ	Conj	_	33	advmod:emph	_	_
35	başkalarının	başka	ADJ	NAdj	Case=Gen|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	36	nmod:poss	_	_
36	sırtına	sırt	NOUN	Noun	Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	37	nmod	_	_
37	yük	yük	NOUN	Noun	Case=Nom|Number=Sing|Person=3	38	compound:lvc	_	_
38	oluyorlar	ol	VERB	Verb	Aspect=Prog|Mood=Ind|Negative=Pos|Number=Plur|Person=3|Register=Inf|Tense=Pres	31	parataxis	_	_
39	)	)	PUNCT	Punc	_	38	punct	_	_
40	.	.	PUNCT	Punc	_	38	punct	_	_

~~~


