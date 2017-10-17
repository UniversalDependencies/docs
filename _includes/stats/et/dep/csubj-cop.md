

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is a language-specific subtype of [csubj]().

39 nodes (0%) are attached to their parents as `csubj:cop`.

36 instances of `csubj:cop` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.02564102564103.

The following 4 pairs of parts of speech are connected with `csubj:cop`: [et-pos/ADJ]()-[et-pos/VERB]() (31; 79% instances), [et-pos/NOUN]()-[et-pos/VERB]() (6; 15% instances), [et-pos/ADJ]()-[et-pos/ADJ]() (1; 3% instances), [et-pos/ADJ]()-[et-pos/AUX]() (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 csubj:cop	color:blue
1	Võimalik	võimalik	ADJ	A	_	0	root	_	SpaceAfter=No
2	,	,	PUNCT	Z	_	5	punct	_	_
3	et	et	SCONJ	J	_	5	mark	_	_
4	see	see	PRON	P	Case=Nom|Number=Sing|PronType=Dem	5	nsubj	_	_
5	tähendas	tähendama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	csubj:cop	_	_
6	tema	tema	PRON	P	Case=Gen|Number=Sing|Person=3|PronType=Prs	7	nmod:poss	_	_
7	keeles	keel	NOUN	S	Case=Ine|Number=Sing	5	obl	_	_
8	"	"	PUNCT	Z	_	9	punct	_	SpaceAfter=No
9	tere	tere	INTJ	I	_	5	discourse	_	SpaceAfter=No
10	"	"	PUNCT	Z	_	9	punct	_	SpaceAfter=No
11	.	.	PUNCT	Z	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 4 csubj:cop	color:blue
1	"	"	PUNCT	Z	_	4	punct	_	SpaceAfter=No
2	Suur	suur	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	3	amod	_	_
3	Vend	vend	NOUN	S	Case=Nom|Number=Sing	4	nsubj	_	_
4	valvab	valva	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	csubj:cop	_	_
5	sind	sina	PRON	P	Case=Par|Number=Sing|Person=2|PronType=Prs	4	obj	_	SpaceAfter=No
6	"	"	PUNCT	Z	_	4	punct	_	SpaceAfter=No
7	,	,	PUNCT	Z	_	4	punct	_	_
8	oli	ole	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	11	cop	_	_
9	pildi	pilt	NOUN	S	Case=Gen|Number=Sing	11	nmod	_	_
10	all	all	ADP	K	AdpType=Post	9	case	_	_
11	kiri	kiri	NOUN	S	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
12	.	.	PUNCT	Z	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 csubj:cop	color:blue
1	Imelik	imelik	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	_	SpaceAfter=No
2	,	,	PUNCT	Z	_	7	punct	_	_
3	kuidas	kuidas	ADV	D	PronType=Rel	7	mark	_	_
4	ahastus	ahastus	NOUN	S	Case=Nom|Number=Sing	7	nsubj:cop	_	_
5	saab	saama	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	_	_
6	nii	nii	ADV	D	_	7	advmod	_	_
7	rahulik	rahulik	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	1	csubj:cop	_	_
8	olla	olema	AUX	V	VerbForm=Inf	7	cop	_	SpaceAfter=No
9	.	.	PUNCT	Z	_	1	punct	_	_

~~~


