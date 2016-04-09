

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is a language-specific subtype of [det]().
There are also 1 other language-specific subtypes of `det`: [det:def]().

50 nodes (0%) are attached to their parents as `det:quant`.

50 instances of `det:quant` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.58.

The following 5 pairs of parts of speech are connected with `det:quant`: [he-pos/NOUN]()-[he-pos/NOUN]() (40; 80% instances), [he-pos/NOUN]()-[he-pos/VERB]() (7; 14% instances), [he-pos/ADJ]()-[he-pos/NOUN]() (1; 2% instances), [he-pos/PRON]()-[he-pos/NOUN]() (1; 2% instances), [he-pos/PROPN]()-[he-pos/NOUN]() (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 det:quant	color:blue
1	היא	_	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	אומרת	_	VERB	VERB	Gender=Fem|HebBinyan=PAAL|Number=Sing|Person=1,2,3|VerbForm=Part	0	root	_	_
3	לעומת	_	ADP	ADP	_	4	case	_	_
4	זאת	_	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Dem	2	nmod	_	_
5	,	_	PUNCT	PUNCT	_	2	punct	_	_
6	ש	_	SCONJ	SCONJ	_	13	mark	_	_
7	משהו	_	NOUN	NOUN	Gender=Masc|Number=Sing	10	det:quant	_	_
8	מן	_	ADP	ADP	HebSource=ConvUncertainLabel	10	case	_	_
9	ה	_	DET	DET	PronType=Art	10	det:def	_	_
10	קסם	_	NOUN	NOUN	Gender=Masc|Number=Sing	13	nsubj	_	_
11	שלו	_	PART	PART	Case=Gen	12	case:gen	_	_
12	הוא_	_	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	nmod:poss	_	_
13	אבד	_	VERB	VERB	Gender=Masc|Number=Sing|Person=3|Tense=Past	2	ccomp	_	_
14	.	_	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 10 det:quant	color:blue
1	ה	_	DET	DET	PronType=Art	2	det:def	_	_
2	מקורות	_	NOUN	NOUN	Gender=Masc|Number=Plur	5	nsubj	_	_
3	ה	_	DET	DET	PronType=Art	4	det:def	_	_
4	פלשתיניים	_	ADJ	ADJ	Gender=Masc|Number=Plur	2	amod	_	_
5	הוסיפו	_	VERB	VERB	Gender=Fem,Masc|HebBinyan=HIFIL|Number=Plur|Person=3|Tense=Past	0	root	_	_
6	כי	_	SCONJ	SCONJ	_	9	mark	_	_
7	כוחות	_	NOUN	NOUN	Definite=Red|Gender=Masc|Number=Plur	9	nsubj	_	_
8	צה"ל	_	PROPN	PROPN	_	7	nmod:smixut	_	_
9	עצרו	_	VERB	VERB	Gender=Fem,Masc|HebBinyan=PAAL|Number=Plur|Person=3|Tense=Past	5	ccomp	_	_
10	רבים	_	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Plur|Person=1,2,3|VerbForm=Part	13	det:quant	_	_
11	מן	_	ADP	ADP	HebSource=ConvUncertainLabel	13	case	_	_
12	ה	_	DET	DET	PronType=Art	13	det:def	_	_
13	מתפרעים	_	NOUN	NOUN	Gender=Masc|Number=Plur	9	dobj	_	_
14	.	_	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 19 det:quant	color:blue
1	ו	_	CONJ	CONJ	_	5	cc	_	_
2	אילו	_	CONJ	CONJ	_	5	advmod	_	_
3	מקורות	_	NOUN	NOUN	Gender=Masc|Number=Plur	5	nsubj	_	_
4	פלשתיניים	_	ADJ	ADJ	Gender=Masc|Number=Plur	3	amod	_	_
5	גורסים	_	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Plur|Person=1,2,3|VerbForm=Part	0	root	_	_
6	כי	_	SCONJ	SCONJ	_	13	mark	_	_
7	כל	_	DET	DET	Definite=Red	9	det	_	_
8	ה	_	DET	DET	PronType=Art	9	det:def	_	_
9	מקרים	_	NOUN	NOUN	Gender=Masc|Number=Plur	13	nsubj:cop	_	_
10	הם	_	VERB	VERB	Gender=Masc|Negative=Pos|Number=Plur|Person=3|VerbForm=Part|VerbType=Cop	13	cop	_	_
11	על	_	ADP	ADP	_	13	case	_	_
12	רקע	_	NOUN	NOUN	Definite=Red|Gender=Masc|Number=Sing	11	mwe	_	_
13	שיתוף	_	NOUN	NOUN	Definite=Red|Gender=Masc|Number=Sing	5	ccomp	_	_
14	פעולה	_	NOUN	NOUN	Gender=Fem|Number=Sing	13	nmod:smixut	_	_
15	,	_	PUNCT	PUNCT	_	13	punct	_	_
16	למרות	_	ADP	ADP	_	22	case	_	_
17	ש	_	SCONJ	SCONJ	_	22	mark	_	_
18	ל	_	ADP	ADP	_	22	case	_	_
19	חלק	_	NOUN	NOUN	Gender=Masc|Number=Sing	22	det:quant	_	_
20	מ	_	ADP	ADP	HebSource=ConvUncertainLabel	22	case	_	_
21	ה	_	DET	DET	PronType=Art	22	det:def	_	_
22	מעורבים	_	ADJ	ADJ	Gender=Masc|Number=Plur	13	nmod	_	_
23	עבר	_	NOUN	NOUN	Gender=Masc|Number=Sing	22	nsubj	_	_
24	פלילי	_	ADJ	ADJ	Gender=Masc|Number=Sing	23	amod	_	_
25	.	_	PUNCT	PUNCT	_	5	punct	_	_

~~~


