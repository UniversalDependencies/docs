

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-SynTagRus)

This relation is universal.

35 nodes (0%) are attached to their parents as `expl`.

35 instances of `expl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.71428571428571.

The following 5 pairs of parts of speech are connected with `expl`: [ru-pos/VERB]()-[ru-pos/PRON]() (30; 86% instances), [ru-pos/ADJ]()-[ru-pos/PRON]() (2; 6% instances), [ru-pos/NOUN]()-[ru-pos/PRON]() (1; 3% instances), [ru-pos/VERB]()-[ru-pos/NOUN]() (1; 3% instances), [ru-pos/_]()-[ru-pos/PRON]() (1; 3% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 expl	color:blue
1	Это	это	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	4	expl	4:expl	_
2	как	как	ADV	_	Degree=Pos	4	advmod	4:advmod	_
3	кто	кто	PRON	_	Case=Nom	4	nsubj	4:nsubj	_
4	решит	решать	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	для	для	ADP	_	_	6	case	6:case	_
6	себя	себя	PRON	_	Case=Gen	4	obl	4:obl	SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	6:punct	_
8	посмотрев	смотреть	VERB	_	Aspect=Perf|Tense=Past|VerbForm=Conv|Voice=Act	4	advcl	4:advcl	_
9	фильм	фильм	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	8	obj	8:obj	SpaceAfter=No
10	.	.	PUNCT	_	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 9 expl	color:blue
1	А	а	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	5	nsubj	5:nsubj	SpaceAfter=No
2	.	.	PUNCT	_	_	1	punct	1:punct	SpaceAfter=No
3	Улюкаев	улюкаев	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	1	flat:name	1:flat:name	_
4	как-то	как-то	ADV	_	Degree=Pos	5	advmod	5:advmod	_
5	заметил	замечать	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
6	:	:	PUNCT	_	_	5	punct	5:punct	_
7	"	"	PUNCT	_	_	9	punct	5:punct	SpaceAfter=No
8	…	…	PUNCT	_	_	9	punct	9:punct	SpaceAfter=No
9	это	это	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	13	expl	13:expl	_
10	не	не	PART	_	_	11	advmod	11:advmod	_
11	мы	мы	PRON	_	Case=Nom|Number=Plur|Person=1	13	nsubj	13:nsubj	_
12	такие	такой	DET	_	Case=Nom|Number=Plur	13	amod	13:amod	_
13	выдающиеся	выдающийся	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	5	obl	5:obl	_
14	и	и	CCONJ	_	_	15	cc	15:cc	_
15	умные	умный	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	13	conj	13:conj	SpaceAfter=No
16	.	.	PUNCT	_	_	15	punct	15:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 expl	color:blue
1	Это	это	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	7	expl	7:expl	_
2	он	он	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3	7	nsubj	7:nsubj	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	2:punct	_
4	конечно	конечно	ADV	_	Degree=Pos	7	parataxis	7:parataxis	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	4:punct	_
6	темный	темный	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	7	amod	7:amod	_
7	рыцарь	рыцарь	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	0	root	0:root	_
8	в	в	ADP	_	_	9	case	9:case	_
9	фильме	фильм	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	7	nmod	7:nmod	_
10	и	и	CCONJ	_	_	11	cc	11:cc	_
11	проводит	проводить	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	conj	7:conj	_
12	первые	первый	ADJ	_	Animacy=Inan|Case=Acc|Degree=Pos|Number=Plur	13	amod	13:amod	_
13	час	час	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	11	obj	11:obj	_
14	пятьдесят	пятьдесят	NUM	_	Case=Acc	15	nummod:gov	15:nummod:gov	_
15	пять	пять	NUM	_	Case=Acc	16	nummod:gov	16:nummod:gov	_
16	минут	минута	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	13	nmod	13:nmod	_
17	картины	картина	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	16	nmod	16:nmod	_
18	в	в	ADP	_	_	20	case	20:case	_
19	качестве	качество	NOUN	_	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	18	fixed	18:fixed	_
20	антигероя	антигерой	NOUN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	11	obl	11:obl	SpaceAfter=No
21	,	,	PUNCT	_	_	20	punct	20:punct	_
22	но	но	CCONJ	_	_	28	cc	28:cc	_
23	в	в	ADP	_	_	26	case	26:case	_
24	последние	последний	ADJ	_	Animacy=Inan|Case=Acc|Degree=Pos|Number=Plur	25	amod	25:amod	_
25	пять	пять	NUM	_	Case=Acc	26	nummod:gov	26:nummod	_
26	минут	минута	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	28	obl	28:obl	_
27	Марк	марк	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	28	nsubj	28:nsubj	_
28	превращается	превращаться	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	7	conj	7:conj	_
29	в	в	ADP	_	_	31	case	31:case	_
30	трагического	трагический	ADJ	_	Animacy=Anim|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	31	amod	31:amod	_
31	героя	герой	NOUN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	28	obl	28:obl	SpaceAfter=No
32	.	.	PUNCT	_	_	31	punct	31:punct	_

~~~


