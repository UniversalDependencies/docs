

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-SynTagRus)

This relation is universal.

34 nodes (0%) are attached to their parents as `expl`.

34 instances of `expl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.67647058823529.

The following 6 pairs of parts of speech are connected with `expl`: [ru-pos/VERB]()-[ru-pos/NOUN]() (28; 82% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (2; 6% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (1; 3% instances), [ru-pos/SCONJ]()-[ru-pos/NOUN]() (1; 3% instances), [ru-pos/VERB]()-[ru-pos/PART]() (1; 3% instances), [ru-pos/VERB]()-[ru-pos/PROPN]() (1; 3% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 expl	color:blue
1	Это	это	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	4	expl	_	_
2	как	как	ADV	_	Degree=Pos	4	advmod	_	_
3	кто	кто	PRON	_	_	4	nsubj	_	_
4	решит	решать	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	_
5	для	для	ADP	_	_	6	case	_	_
6	себя	себя	PRON	_	_	4	nmod	_	_
7	,	,	PUNCT	,	_	6	punct	_	_
8	посмотрев	смотреть	VERB	_	Aspect=Perf|Tense=Past|VerbForm=Trans|Voice=Act	4	advcl	_	_
9	фильм	фильм	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	8	dobj	_	_
10	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 9 expl	color:blue
1	А	а	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	_
2	.	.	PUNCT	.	_	1	punct	_	_
3	Улюкаев	улюкаев	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	1	name	_	_
4	как-то	как-то	ADV	_	Degree=Pos	5	advmod	_	_
5	заметил	замечать	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	:	:	PUNCT	:	_	5	punct	_	_
7	"	"	PUNCT	"	_	9	punct	_	_
8	…	…	PUNCT	…	_	9	punct	_	_
9	это	это	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	13	expl	_	_
10	не	не	PART	_	_	11	neg	_	_
11	мы	мы	PRON	_	_	13	nsubj	_	_
12	такие	такой	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	13	amod	_	_
13	выдающиеся	выдающийся	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	5	nmod	_	_
14	и	и	CONJ	_	_	13	cc	_	_
15	умные	умный	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	13	conj	_	_
16	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 expl	color:blue
1	Это	это	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	7	expl	_	_
2	он	он	PRON	_	_	7	nsubj	_	_
3	,	,	PUNCT	,	_	2	punct	_	_
4	конечно	конечно	ADV	_	Degree=Pos	7	parataxis	_	_
5	,	,	PUNCT	,	_	4	punct	_	_
6	темный	темный	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	7	amod	_	_
7	рыцарь	рыцарь	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
8	в	в	ADP	_	_	9	case	_	_
9	фильме	фильм	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	7	nmod	_	_
10	и	и	CONJ	_	_	7	cc	_	_
11	проводит	проводить	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	conj	_	_
12	первые	первый	ADJ	_	Animacy=Inan|Case=Acc|Degree=Pos|Number=Plur	13	amod	_	_
13	час	час	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	11	dobj	_	_
14	пятьдесят	пятьдесят	NUM	_	Case=Acc	15	nummod:gov	_	_
15	пять	пять	NUM	_	Case=Acc	16	nummod:gov	_	_
16	минут	минута	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	13	nmod	_	_
17	картины	картина	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	16	nmod	_	_
18	в_качестве	в_качестве	ADP	_	_	19	case	_	_
19	антигероя	антигерой	NOUN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	11	nmod	_	_
20	,	,	PUNCT	,	_	19	punct	_	_
21	но	но	CONJ	_	_	7	cc	_	_
22	в	в	ADP	_	_	25	case	_	_
23	последние	последний	ADJ	_	Animacy=Inan|Case=Acc|Degree=Pos|Number=Plur	24	amod	_	_
24	пять	пять	NUM	_	Case=Acc	25	nummod:gov	_	_
25	минут	минута	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	27	nmod	_	_
26	Марк	марк	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	27	nsubj	_	_
27	превращается	превращаться	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	conj	_	_
28	в	в	ADP	_	_	30	case	_	_
29	трагического	трагический	ADJ	_	Animacy=Anim|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	30	amod	_	_
30	героя	герой	NOUN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	27	nmod	_	_
31	.	.	PUNCT	.	_	7	punct	_	_

~~~


