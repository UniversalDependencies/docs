

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

203 nodes (0%) are attached to their parents as `csubj`.

191 instances of `csubj` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.7192118226601.

The following 18 pairs of parts of speech are connected with `csubj`: [hr-pos/VERB]()-[hr-pos/VERB]() (47; 23% instances), [hr-pos/ADJ]()-[hr-pos/VERB]() (42; 21% instances), [hr-pos/ADV]()-[hr-pos/VERB]() (39; 19% instances), [hr-pos/NOUN]()-[hr-pos/VERB]() (27; 13% instances), [hr-pos/VERB]()-[hr-pos/ADJ]() (12; 6% instances), [hr-pos/ADV]()-[hr-pos/ADJ]() (5; 2% instances), [hr-pos/ADJ]()-[hr-pos/ADJ]() (4; 2% instances), [hr-pos/ADJ]()-[hr-pos/AUX]() (4; 2% instances), [hr-pos/ADV]()-[hr-pos/NOUN]() (3; 1% instances), [hr-pos/NOUN]()-[hr-pos/ADJ]() (3; 1% instances), [hr-pos/NOUN]()-[hr-pos/ADV]() (3; 1% instances), [hr-pos/NOUN]()-[hr-pos/AUX]() (3; 1% instances), [hr-pos/VERB]()-[hr-pos/AUX]() (3; 1% instances), [hr-pos/VERB]()-[hr-pos/NOUN]() (3; 1% instances), [hr-pos/ADJ]()-[hr-pos/NOUN]() (2; 1% instances), [hr-pos/AUX]()-[hr-pos/NOUN]() (1; 0% instances), [hr-pos/PRON]()-[hr-pos/AUX]() (1; 0% instances), [hr-pos/PRON]()-[hr-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 csubj	color:blue
1	Očekuje	očekivati	VERB	_	Number=Sing|Person=3|Tense=Pres	0	root	_	_
2	se	sebe	PRON	_	Case=Acc|Number=Sing|Reflex=Yes	1	compound	_	_
3	kako	kako	SCONJ	_	_	7	mark	_	_
4	će	htjeti	AUX	_	Number=Plur|Person=3|Tense=Pres	7	aux	_	_
5	suđenja	suđenje	NOUN	_	Case=Nom|Gender=Neut|Number=Plur	7	nsubj	_	_
6	osumnjičenima	osumnjičen	ADJ	_	Case=Dat|Degree=Pos|Gender=Masc|Number=Plur	5	nmod	_	_
7	započeti	započeti	VERB	_	VerbForm=Inf	1	csubj	_	_
8	sredinom	sredina	NOUN	_	Case=Ins|Gender=Fem|Number=Sing	7	nmod	_	_
9	rujna	rujan	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	8	nmod	_	_
10	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 csubj	color:blue
1	"	"	PUNCT	_	_	7	punct	_	_
2	Povlačiti	povlačiti	VERB	_	VerbForm=Inf	7	csubj	_	_
3	paralele	paralela	NOUN	_	Case=Acc|Gender=Fem|Number=Plur	2	dobj	_	_
4	među	među	ADP	_	Case=Ins	5	case	_	_
5	njima	oni	PRON	_	Case=Ins|Number=Plur|Person=3|PronType=Prs	3	nmod	_	_
6	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	7	cop	_	_
7	pogrešno	pogrešan	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
8	"	"	PUNCT	_	_	7	punct	_	_
9	,	,	PUNCT	_	_	10	punct	_	_
10	rekao	reći	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	7	parataxis	_	_
11	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	10	aux	_	_
12	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj	color:blue
1	Bolje	dobro	ADV	_	Degree=Cmp	0	root	_	_
2	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	1	cop	_	_
3	zaustaviti	zaustaviti	VERB	_	VerbForm=Inf	1	csubj	_	_
4	sukobe	sukob	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	3	dobj	_	_
5	i	i	CONJ	_	_	3	cc	_	_
6	razviti	razviti	VERB	_	VerbForm=Inf	3	conj	_	_
7	poslovanje	poslovanje	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	6	dobj	_	_
8	"	"	PUNCT	_	_	1	punct	_	_
9	.	.	PUNCT	_	_	1	punct	_	_

~~~


