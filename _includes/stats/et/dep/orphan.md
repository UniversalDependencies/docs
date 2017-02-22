

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

2 nodes (0%) are attached to their parents as `orphan`.

2 instances of `orphan` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.5.

The following 2 pairs of parts of speech are connected with `orphan`: [et-pos/NOUN]()-[et-pos/ADV]() (1; 50% instances), [et-pos/VERB]()-[et-pos/NOUN]() (1; 50% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 orphan	color:blue
1	Veini	vein	NOUN	S	Case=Par|Number=Sing	2	obj	_	_
2	tõin	tooma	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
3	,	,	PUNCT	Z	_	4	punct	_	_
4	silmu	silm	NOUN	S	Case=Par|Number=Sing	2	conj	_	_
5	aga	aga	ADV	D	_	6	advmod	_	_
6	mitte	mitte	ADV	D	Polarity=Neg	4	orphan	_	SpaceAfter=No
7	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 20 orphan	color:blue
1	"	"	PUNCT	Z	_	3	punct	_	SpaceAfter=No
2	Ja	ja	CCONJ	J	_	3	cc	_	_
3	pidage	pidama	VERB	V	Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	meeles	meel	NOUN	S	Case=Ine|Number=Sing	3	obl	_	_
5	-	-	PUNCT	Z	_	3	punct	_	_
6	kõigest	kõik	DET	P	Case=Ela|Number=Sing|PronType=Tot	7	det	_	_
7	sellest	see	PRON	P	Case=Ela|Number=Sing|PronType=Dem	20	nmod	_	SpaceAfter=No
8	,	,	PUNCT	Z	_	12	punct	_	_
9	mida	mis	PRON	P	Case=Par|Number=Sing|PronType=Rel	12	obj	_	_
10	te	sina	PRON	P	Case=Nom|Number=Plur|Person=2|PronType=Prs	12	nsubj	_	_
11	siin	siin	ADV	D	_	12	advmod	_	_
12	nägite	nägema	VERB	V	Mood=Ind|Number=Plur|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	7	acl:relcl	_	SpaceAfter=No
13	,	,	PUNCT	Z	_	20	punct	_	_
14	mitte	mitte	ADV	D	Polarity=Neg	15	advmod	_	_
15	kellelegi	keegi	PRON	P	Case=All|Number=Sing|PronType=Ind	20	obl	_	_
16	väljapool	välja_pool	ADP	K	AdpType=Prep	17	case	_	_
17	konservatooriumi	konservatoorium	NOUN	S	Case=Par|Number=Sing	15	nmod	_	_
18	mitte	mitte	ADV	D	Polarity=Neg	19	advmod	_	_
19	ainsatki	ainus	ADJ	A	Case=Par|Degree=Pos|Number=Sing	20	amod	_	_
20	sõna	sõna	NOUN	S	Case=Par|Number=Sing	3	orphan	_	SpaceAfter=No
21	.	.	PUNCT	Z	_	3	punct	_	_

~~~


