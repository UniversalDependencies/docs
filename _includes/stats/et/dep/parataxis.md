

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

289 nodes (1%) are attached to their parents as `parataxis`.

277 instances of `parataxis` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.55709342560554.

The following 21 pairs of parts of speech are connected with `parataxis`: [et-pos/VERB]()-[et-pos/VERB]() (160; 55% instances), [et-pos/NOUN]()-[et-pos/VERB]() (35; 12% instances), [et-pos/ADV]()-[et-pos/VERB]() (19; 7% instances), [et-pos/ADJ]()-[et-pos/VERB]() (12; 4% instances), [et-pos/VERB]()-[et-pos/NOUN]() (10; 3% instances), [et-pos/NOUN]()-[et-pos/PROPN]() (9; 3% instances), [et-pos/VERB]()-[et-pos/ADJ]() (9; 3% instances), [et-pos/PRON]()-[et-pos/VERB]() (8; 3% instances), [et-pos/VERB]()-[et-pos/PRON]() (6; 2% instances), [et-pos/NOUN]()-[et-pos/NOUN]() (5; 2% instances), [et-pos/PROPN]()-[et-pos/VERB]() (3; 1% instances), [et-pos/NOUN]()-[et-pos/ADV]() (2; 1% instances), [et-pos/PRON]()-[et-pos/NOUN]() (2; 1% instances), [et-pos/VERB]()-[et-pos/PROPN]() (2; 1% instances), [et-pos/ADJ]()-[et-pos/ADV]() (1; 0% instances), [et-pos/ADJ]()-[et-pos/NOUN]() (1; 0% instances), [et-pos/ADJ]()-[et-pos/PRON]() (1; 0% instances), [et-pos/NOUN]()-[et-pos/ADJ]() (1; 0% instances), [et-pos/PRON]()-[et-pos/PRON]() (1; 0% instances), [et-pos/PROPN]()-[et-pos/PROPN]() (1; 0% instances), [et-pos/VERB]()-[et-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 parataxis	color:blue
1	Kurat	kurat	INTJ	I	_	5	discourse	_	SpaceAfter=No
2	,	,	PUNCT	Z	_	5	punct	_	_
3	mis	mis	PRON	P	Case=Nom|Number=Sing|PronType=Int	5	obj	_	_
4	ma	mina	PRON	P	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
5	teen	tegema	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	7	parataxis	_	SpaceAfter=No
6	,	,	PUNCT	Z	_	7	punct	_	_
7	mõtles	mõtlema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
8	ta	tema	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
9	jahmunult	jahmunult	ADV	D	_	7	advmod	_	SpaceAfter=No
10	.	.	PUNCT	Z	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 11 parataxis	color:blue
1	"	"	PUNCT	Z	_	5	punct	_	SpaceAfter=No
2	Jah	jah	ADV	D	_	5	advmod	_	SpaceAfter=No
3	,	,	PUNCT	Z	_	5	punct	_	_
4	või	või	ADV	D	_	5	advmod	_	_
5	tõde	tõde	NOUN	S	Case=Par|Number=Sing	0	root	_	_
6	sulle	sina	PRON	P	Case=All|Number=Sing|Person=2|PronType=Prs	5	nmod	_	_
7	veel	veel	ADV	D	_	5	advmod	_	_
8	tarvis	tarvis	ADV	D	_	5	advmod	_	SpaceAfter=No
9	!	!	PUNCT	Z	_	5	punct	_	SpaceAfter=No
10	"	"	PUNCT	Z	_	5	punct	_	_
11	pilkas	pilkama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	parataxis	_	_
12	Ott	Ott	PROPN	S	Case=Nom|Number=Sing	11	nsubj	_	SpaceAfter=No
13	.	.	PUNCT	Z	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 parataxis	color:blue
1	"	"	PUNCT	Z	_	2	punct	_	SpaceAfter=No
2	Muidugi	muidugi	ADV	D	_	0	root	_	SpaceAfter=No
3	,	,	PUNCT	Z	_	2	punct	_	SpaceAfter=No
4	"	"	PUNCT	Z	_	2	punct	_	_
5	soostus	soostuma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	parataxis	_	_
6	Aune	Aune	PROPN	S	Case=Nom|Number=Sing	5	nsubj	_	_
7	meelsasti	meelsasti	ADV	D	_	5	advmod	_	SpaceAfter=No
8	.	.	PUNCT	Z	_	2	punct	_	_

~~~


