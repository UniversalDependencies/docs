

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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 det:quant	color:blue
1	מחיר	_	NOUN	NOUN	Definite=Red|Gender=Masc|Number=Sing	10	nsubj	_	_
2	חומר	_	NOUN	NOUN	Definite=Red|Gender=Masc|Number=Sing	1	nmod:smixut	_	_
3	ה	_	DET	DET	PronType=Art	4	det:def	_	_
4	גלם	_	NOUN	NOUN	Gender=Masc|Number=Sing	2	nmod:smixut	_	_
5	שלו	_	PART	PART	Case=Gen	2	nmod:poss	_	_
6	הוא_	_	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	dep	_	_
7	כ	_	ADP	ADP	_	10	det	_	_
8	שליש	_	NOUN	NOUN	Gender=Masc|Number=Sing	10	det:quant	_	_
9	מ	_	ADP	ADP	HebSource=ConvUncertainLabel	10	case	_	_
10	זה	_	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	0	root	_	_
11	של	_	PART	PART	Case=Gen	12	case:gen	_	_
12	עץ	_	NOUN	NOUN	Definite=Red|Gender=Masc|Number=Sing	10	nmod:poss	_	_
13	אלון	_	NOUN	NOUN	Gender=Masc|Number=Sing	12	nmod:smixut	_	_
14	.	_	PUNCT	PUNCT	_	10	punct	_	_

~~~


