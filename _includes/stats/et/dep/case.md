

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

1006 nodes (3%) are attached to their parents as `case`.

771 instances of `case` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.2117296222664.

The following 6 pairs of parts of speech are connected with `case`: [et-pos/NOUN]()-[et-pos/ADP]() (857; 85% instances), [et-pos/PRON]()-[et-pos/ADP]() (98; 10% instances), [et-pos/PROPN]()-[et-pos/ADP]() (38; 4% instances), [et-pos/NUM]()-[et-pos/ADP]() (8; 1% instances), [et-pos/ADJ]()-[et-pos/ADP]() (3; 0% instances), [et-pos/ADV]()-[et-pos/ADP]() (2; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 case	color:blue
1	Ernesaks	Ernesaks	PROPN	S	Case=Nom|Number=Sing	2	nsubj	_	_
2	libistas	libistama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	pilgu	pilk	NOUN	S	Case=Gen|Number=Sing	2	obj	_	_
4	üle	üle	ADP	K	AdpType=Post	5	case	_	_
5	toa	tuba	NOUN	S	Case=Gen|Number=Sing	2	obl	_	SpaceAfter=No
6	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 case	color:blue
1	Tema	tema	PRON	P	Case=Gen|Number=Sing|Person=3|PronType=Prs	3	obl	_	_
2	ees	ees	ADP	K	AdpType=Post	1	case	_	_
3	seisis	seisma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	kääbus	kääbus	NOUN	S	Case=Nom|Number=Sing	3	nsubj	_	SpaceAfter=No
5	,	,	PUNCT	Z	_	8	punct	_	_
6	seljas	selg	NOUN	S	Case=Ine|Number=Sing	3	advcl	_	_
7	tilluke	tilluke	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	8	amod	_	_
8	raudrüü	raud_rüü	NOUN	S	Case=Nom|Number=Sing	6	nsubj	_	SpaceAfter=No
9	.	.	PUNCT	Z	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 case	color:blue
1	"	"	PUNCT	Z	_	2	punct	_	SpaceAfter=No
2	Tead	teadma	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	sa	sina	PRON	P	Case=Nom|Number=Sing|Person=2|PronType=Prs	2	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	Z	_	6	punct	_	_
5	viimati	viimati	ADV	D	_	6	advmod	_	_
6	puristasin	puristama	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	_
7	ma	mina	PRON	P	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
8	niimoodi	nii_moodi	ADV	D	_	6	advmod	_	_
9	vist	vist	ADV	D	_	10	advmod	_	_
10	Andropovi	Andropov	PROPN	S	Case=Gen|Number=Sing	6	obl	_	_
11	ajal	ajal	ADP	K	AdpType=Post	10	case	_	SpaceAfter=No
12	!	!	PUNCT	Z	_	2	punct	_	SpaceAfter=No
13	"	"	PUNCT	Z	_	2	punct	_	_

~~~


