

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.
There are 1 language-specific subtypes of `csubj`: [csubj:pass]().

278 nodes (0%) are attached to their parents as `csubj`.

257 instances of `csubj` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.79856115107914.

The following 24 pairs of parts of speech are connected with `csubj`: [hr-pos/ADJ]()-[hr-pos/VERB]() (68; 24% instances), [hr-pos/VERB]()-[hr-pos/VERB]() (64; 23% instances), [hr-pos/ADV]()-[hr-pos/VERB]() (43; 15% instances), [hr-pos/NOUN]()-[hr-pos/VERB]() (34; 12% instances), [hr-pos/VERB]()-[hr-pos/ADJ]() (13; 5% instances), [hr-pos/ADJ]()-[hr-pos/ADJ]() (7; 3% instances), [hr-pos/ADJ]()-[hr-pos/AUX]() (5; 2% instances), [hr-pos/ADJ]()-[hr-pos/NOUN]() (5; 2% instances), [hr-pos/ADV]()-[hr-pos/ADJ]() (5; 2% instances), [hr-pos/VERB]()-[hr-pos/NOUN]() (5; 2% instances), [hr-pos/ADV]()-[hr-pos/NOUN]() (4; 1% instances), [hr-pos/NOUN]()-[hr-pos/ADJ]() (4; 1% instances), [hr-pos/NOUN]()-[hr-pos/AUX]() (4; 1% instances), [hr-pos/NOUN]()-[hr-pos/ADV]() (3; 1% instances), [hr-pos/NOUN]()-[hr-pos/NOUN]() (3; 1% instances), [hr-pos/VERB]()-[hr-pos/AUX]() (3; 1% instances), [hr-pos/ADP]()-[hr-pos/AUX]() (1; 0% instances), [hr-pos/ADV]()-[hr-pos/AUX]() (1; 0% instances), [hr-pos/AUX]()-[hr-pos/ADJ]() (1; 0% instances), [hr-pos/AUX]()-[hr-pos/NOUN]() (1; 0% instances), [hr-pos/DET]()-[hr-pos/AUX]() (1; 0% instances), [hr-pos/DET]()-[hr-pos/VERB]() (1; 0% instances), [hr-pos/NUM]()-[hr-pos/ADJ]() (1; 0% instances), [hr-pos/PROPN]()-[hr-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 csubj	color:blue
1	"	"	PUNCT	_	_	7	punct	_	SpaceAfter=No
2	Povlačiti	povlačiti	VERB	_	VerbForm=Inf	7	csubj	_	_
3	paralele	paralela	NOUN	_	Case=Acc|Gender=Fem|Number=Plur	2	obj	_	_
4	među	među	ADP	_	Case=Ins	5	case	_	_
5	njima	oni	PRON	_	Case=Ins|Number=Plur|Person=3|PronType=Prs	3	nmod	_	_
6	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
7	pogrešno	pogrešan	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	SpaceAfter=No
8	"	"	PUNCT	_	_	7	punct	_	SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	_
10	rekao	reći	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	7	parataxis	_	_
11	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	SpaceAfter=No
12	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 csubj	color:blue
1	Očekuje	očekivati	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	se	sebe	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	1	expl:pv	_	_
3	kako	kako	SCONJ	_	_	7	mark	_	_
4	će	htjeti	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
5	suđenja	suđenje	NOUN	_	Case=Nom|Gender=Neut|Number=Plur	7	nsubj	_	_
6	osumnjičenima	osumnjičen	ADJ	_	Case=Dat|Degree=Pos|Gender=Masc|Number=Plur	5	nmod	_	_
7	započeti	započeti	VERB	_	VerbForm=Inf	1	csubj	_	_
8	sredinom	sredina	NOUN	_	Case=Ins|Gender=Fem|Number=Sing	7	obl	_	_
9	rujna	rujan	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	8	nmod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj	color:blue
1	Bolje	dobro	ADV	_	Degree=Cmp	0	root	_	_
2	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	zaustaviti	zaustaviti	VERB	_	VerbForm=Inf	1	csubj	_	_
4	sukobe	sukob	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	3	obj	_	_
5	i	i	CCONJ	_	_	6	cc	_	_
6	razviti	razviti	VERB	_	VerbForm=Inf	3	conj	_	_
7	poslovanje	poslovanje	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	6	obj	_	SpaceAfter=No
8	"	"	PUNCT	_	_	1	punct	_	SpaceAfter=No
9	.	.	PUNCT	_	_	1	punct	_	_

~~~


