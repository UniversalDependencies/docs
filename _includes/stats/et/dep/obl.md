

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

3669 nodes (11%) are attached to their parents as `obl`.

2300 instances of `obl` (63%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.42954483510493.

The following 22 pairs of parts of speech are connected with `obl`: [et-pos/VERB]()-[et-pos/NOUN]() (2755; 75% instances), [et-pos/VERB]()-[et-pos/PRON]() (369; 10% instances), [et-pos/ADJ]()-[et-pos/NOUN]() (213; 6% instances), [et-pos/VERB]()-[et-pos/PROPN]() (173; 5% instances), [et-pos/ADV]()-[et-pos/NOUN]() (33; 1% instances), [et-pos/ADJ]()-[et-pos/PROPN]() (31; 1% instances), [et-pos/ADJ]()-[et-pos/PRON]() (28; 1% instances), [et-pos/NOUN]()-[et-pos/NOUN]() (17; 0% instances), [et-pos/PRON]()-[et-pos/NOUN]() (14; 0% instances), [et-pos/ADV]()-[et-pos/PRON]() (7; 0% instances), [et-pos/NOUN]()-[et-pos/PRON]() (7; 0% instances), [et-pos/PRON]()-[et-pos/PRON]() (4; 0% instances), [et-pos/VERB]()-[et-pos/ADJ]() (4; 0% instances), [et-pos/PRON]()-[et-pos/PROPN]() (3; 0% instances), [et-pos/AUX]()-[et-pos/NOUN]() (2; 0% instances), [et-pos/NOUN]()-[et-pos/PROPN]() (2; 0% instances), [et-pos/VERB]()-[et-pos/NUM]() (2; 0% instances), [et-pos/ADV]()-[et-pos/ADV]() (1; 0% instances), [et-pos/ADV]()-[et-pos/PROPN]() (1; 0% instances), [et-pos/NUM]()-[et-pos/PRON]() (1; 0% instances), [et-pos/PROPN]()-[et-pos/NOUN]() (1; 0% instances), [et-pos/VERB]()-[et-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 obl	color:blue
1	Muidu	muidu	ADV	D	_	2	advmod	_	_
2	pidas	pidama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	ta	tema	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
4	ennast	ise	PRON	P	Case=Par|Number=Sing|PronType=Prs|Reflex=Yes	2	obj	_	_
5	viimasel	viimane	ADJ	A	Case=Ade|Degree=Pos|Number=Sing	6	amod	_	_
6	ajal	aeg	NOUN	S	Case=Ade|Number=Sing	2	obl	_	_
7	pool-impoks	pool-impo	NOUN	S	Case=Tra|Number=Sing	2	xcomp	_	SpaceAfter=No
8	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 obl	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 obl	color:blue
1	Keset	keset	ADP	K	AdpType=Prep	2	case	_	_
2	tuba	tuba	NOUN	S	Case=Par|Number=Sing	3	obl	_	_
3	seisis	seisma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	näost	nägu	NOUN	S	Case=Ela|Number=Sing	6	obl	_	_
5	kergelt	kergelt	ADV	D	_	6	advmod	_	_
6	õhetav	õhetav	ADJ	A	Case=Nom|Degree=Pos|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	7	acl	_	_
7	Urmo	Urmo	PROPN	S	Case=Nom|Number=Sing	3	nsubj	_	SpaceAfter=No
8	.	.	PUNCT	Z	_	3	punct	_	_

~~~


