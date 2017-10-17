

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is a language-specific subtype of [flat]().

2374 nodes (2%) are attached to their parents as `flat:name`.

2374 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.30454928390901.

The following 19 pairs of parts of speech are connected with `flat:name`: [he-pos/PROPN]()-[he-pos/PROPN]() (1474; 62% instances), [he-pos/NOUN]()-[he-pos/PROPN]() (279; 12% instances), [he-pos/PROPN]()-[he-pos/PUNCT]() (178; 7% instances), [he-pos/PROPN]()-[he-pos/NOUN]() (149; 6% instances), [he-pos/NOUN]()-[he-pos/NOUN]() (124; 5% instances), [he-pos/NOUN]()-[he-pos/PUNCT]() (110; 5% instances), [he-pos/NOUN]()-[he-pos/NUM]() (16; 1% instances), [he-pos/PROPN]()-[he-pos/CCONJ]() (8; 0% instances), [he-pos/NOUN]()-[he-pos/ADJ]() (7; 0% instances), [he-pos/PROPN]()-[he-pos/ADJ]() (6; 0% instances), [he-pos/PROPN]()-[he-pos/PART]() (4; 0% instances), [he-pos/DET]()-[he-pos/PROPN]() (3; 0% instances), [he-pos/NUM]()-[he-pos/PROPN]() (3; 0% instances), [he-pos/PUNCT]()-[he-pos/PROPN]() (3; 0% instances), [he-pos/PUNCT]()-[he-pos/PUNCT]() (3; 0% instances), [he-pos/ADP]()-[he-pos/PROPN]() (2; 0% instances), [he-pos/VERB]()-[he-pos/NOUN]() (2; 0% instances), [he-pos/X]()-[he-pos/PROPN]() (2; 0% instances), [he-pos/PROPN]()-[he-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 flat:name	color:blue
1	"	_	PUNCT	PUNCT	_	2	punct	_	_
2	גורג	גורג	PROPN	PROPN	_	6	nsubj:cop	_	_
3	"	_	PUNCT	PUNCT	_	2	punct	_	_
4	הוא	הוא	VERB	VERB	Gender=Masc|Number=Sing|Person=3|Polarity=Pos|VerbForm=Part|VerbType=Cop	6	cop	_	_
5	כמובן	כמובן	ADV	ADV	_	6	dep	_	_
6	גורג	גורג	PROPN	PROPN	_	0	root	_	_
7	בוש	בוש	PROPN	PROPN	_	6	flat:name	_	_
8	.	_	PUNCT	PUNCT	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 flat:name	color:blue
1	אכן	אכן	ADV	ADV	_	4	advmod	_	_
2	,	_	PUNCT	PUNCT	_	4	punct	_	_
3	כך	כך	ADV	ADV	_	4	advmod	_	_
4	עשתה	עשה	VERB	VERB	Gender=Fem|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	_
5	חטיבת	חטיבה	NOUN	NOUN	Definite=Cons|Gender=Fem|Number=Sing	4	nsubj	_	_
6	"	_	PUNCT	PUNCT	_	7	punct	_	_
7	הראל	הראל	PROPN	PROPN	_	5	flat:name	_	_
8	"	_	PUNCT	PUNCT	_	7	punct	_	_
9	.	_	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 flat:name	color:blue
1	ה	ה	DET	DET	PronType=Art	2	det:def	_	_
2	פצוע	פצוע	NOUN	NOUN	Gender=Masc|Number=Sing	3	nsubj	_	_
3	הועבר	הועבר	VERB	VERB	Gender=Masc|HebBinyan=HUFAL|Number=Sing|Person=3|Tense=Past|Voice=Pass	0	root	_	_
4	ל	ל	ADP	ADP	_	5	case	_	_
5	בית	בית	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	3	iobj	_	_
6	ה	ה	DET	DET	PronType=Art	7	det:def	_	_
7	חולים	חלה	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Plur|Person=1,2,3|VerbForm=Part|Voice=Act	5	compound:smixut	_	_
8	הדסה	הדסה	PROPN	PROPN	_	5	flat:name	_	_
9	עין	עין	NOUN	NOUN	Gender=Fem|Number=Sing	8	flat:name	_	_
10	-	_	PUNCT	PUNCT	_	8	flat:name	_	_
11	כרם	כרם	NOUN	NOUN	Gender=Masc|Number=Sing	8	flat:name	_	_
12	ב	ב	ADP	ADP	_	13	case	_	_
13	ירושלים	ירושלים	PROPN	PROPN	_	5	nmod	_	_
14	.	_	PUNCT	PUNCT	_	3	punct	_	_

~~~


