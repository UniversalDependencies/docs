

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is a language-specific subtype of [det]().
There are also 1 other language-specific subtypes of `det`: [det:def]().

40 nodes (0%) are attached to their parents as `det:quant`.

40 instances of `det:quant` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.525.

The following 4 pairs of parts of speech are connected with `det:quant`: [he-pos/NOUN]()-[he-pos/NOUN]() (31; 78% instances), [he-pos/NOUN]()-[he-pos/VERB]() (7; 18% instances), [he-pos/ADJ]()-[he-pos/NOUN]() (1; 3% instances), [he-pos/PRON]()-[he-pos/NOUN]() (1; 3% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 det:quant	color:blue
1	היא	הוא	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	אומרת	אמר	VERB	VERB	Gender=Fem|HebBinyan=PAAL|Number=Sing|Person=1,2,3|VerbForm=Part|Voice=Act	0	root	_	_
3	לעומת	לעומת	ADP	ADP	_	4	case	_	_
4	זאת	זאת	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Dem	2	obl	_	_
5	,	_	PUNCT	PUNCT	_	2	punct	_	_
6	ש	ש	SCONJ	SCONJ	_	13	mark	_	_
7	משהו	משהו	NOUN	NOUN	Gender=Masc|Number=Sing	10	det:quant	_	_
8	מן	מן	ADP	ADP	HebSource=ConvUncertainLabel	10	case	_	_
9	ה	ה	DET	DET	PronType=Art	10	det:def	_	_
10	קסם	קסם	NOUN	NOUN	Gender=Masc|Number=Sing	13	nsubj	_	_
11	של_	של	ADP	ADP	Case=Gen	12	case:gen	_	_
12	_הוא	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	nmod:poss	_	_
13	אבד	אבד	VERB	VERB	Gender=Masc|Number=Sing|Person=3|Tense=Past	2	ccomp	_	_
14	.	_	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 10 det:quant	color:blue
1	ה	ה	DET	DET	PronType=Art	2	det:def	_	_
2	מקורות	מקור	NOUN	NOUN	Gender=Masc|Number=Plur	5	nsubj	_	_
3	ה	ה	DET	DET	PronType=Art	4	det:def	_	_
4	פלשתיניים	פלסטיני	ADJ	ADJ	Gender=Masc|Number=Plur	2	amod	_	_
5	הוסיפו	הוסיף	VERB	VERB	Gender=Fem,Masc|HebBinyan=HIFIL|Number=Plur|Person=3|Tense=Past|Voice=Act	0	root	_	_
6	כי	כי	SCONJ	SCONJ	_	9	mark	_	_
7	כוחות	כוח	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Plur	9	nsubj	_	_
8	צה"ל	צה"ל	PROPN	PROPN	Abbr=Yes	7	compound:smixut	_	_
9	עצרו	עצר	VERB	VERB	Gender=Fem,Masc|HebBinyan=PAAL|Number=Plur|Person=3|Tense=Past|Voice=Act	5	ccomp	_	_
10	רבים	רב	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Plur|Person=1,2,3|VerbForm=Part|Voice=Act	13	det:quant	_	_
11	מן	מן	ADP	ADP	HebSource=ConvUncertainLabel	13	case	_	_
12	ה	ה	DET	DET	PronType=Art	13	det:def	_	_
13	מתפרעים	מתפרע	NOUN	NOUN	Gender=Masc|Number=Plur	9	obj	_	_
14	.	_	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 det:quant	color:blue
1	מחיר	מחיר	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	10	nsubj	_	_
2	חומר	חומר	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	1	compound:smixut	_	_
3	ה	ה	DET	DET	PronType=Art	4	det:def	_	_
4	גלם	גלם	NOUN	NOUN	Gender=Masc|Number=Sing	2	compound:smixut	_	_
5	של_	של	ADP	ADP	Case=Gen	2	nmod:poss	_	_
6	_הוא	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	dep	_	_
7	כ	כ	ADP	ADP	_	10	det	_	_
8	שליש	שליש	NOUN	NOUN	Gender=Masc|Number=Sing	10	det:quant	_	_
9	מ	מ	ADP	ADP	HebSource=ConvUncertainLabel	10	case	_	_
10	זה	זה	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	0	root	_	_
11	של	של	PART	PART	Case=Gen	12	case:gen	_	_
12	עץ	עץ	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	10	nmod:poss	_	_
13	אלון	אלון	NOUN	NOUN	Gender=Masc|Number=Sing	12	compound:smixut	_	_
14	.	_	PUNCT	PUNCT	_	10	punct	_	_

~~~


