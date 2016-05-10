

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

2283 nodes (1%) are attached to their parents as `parataxis`.

2116 instances of `parataxis` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.5562855891371.

The following 43 pairs of parts of speech are connected with `parataxis`: [et-pos/VERB]()-[et-pos/VERB]() (1204; 53% instances), [et-pos/VERB]()-[et-pos/NOUN]() (202; 9% instances), [et-pos/NOUN]()-[et-pos/VERB]() (188; 8% instances), [et-pos/ADJ]()-[et-pos/VERB]() (139; 6% instances), [et-pos/NOUN]()-[et-pos/NOUN]() (72; 3% instances), [et-pos/VERB]()-[et-pos/ADJ]() (64; 3% instances), [et-pos/VERB]()-[et-pos/PROPN]() (62; 3% instances), [et-pos/NOUN]()-[et-pos/PROPN]() (45; 2% instances), [et-pos/ADV]()-[et-pos/VERB]() (38; 2% instances), [et-pos/PROPN]()-[et-pos/VERB]() (36; 2% instances), [et-pos/PRON]()-[et-pos/VERB]() (30; 1% instances), [et-pos/ADJ]()-[et-pos/NOUN]() (25; 1% instances), [et-pos/PROPN]()-[et-pos/PROPN]() (24; 1% instances), [et-pos/VERB]()-[et-pos/NUM]() (19; 1% instances), [et-pos/VERB]()-[et-pos/PRON]() (18; 1% instances), [et-pos/ADJ]()-[et-pos/ADJ]() (17; 1% instances), [et-pos/PROPN]()-[et-pos/NOUN]() (15; 1% instances), [et-pos/NOUN]()-[et-pos/ADJ]() (13; 1% instances), [et-pos/ADJ]()-[et-pos/PROPN]() (12; 1% instances), [et-pos/NOUN]()-[et-pos/ADP]() (12; 1% instances), [et-pos/NUM]()-[et-pos/NOUN]() (7; 0% instances), [et-pos/PRON]()-[et-pos/NOUN]() (6; 0% instances), [et-pos/ADJ]()-[et-pos/NUM]() (4; 0% instances), [et-pos/ADV]()-[et-pos/NOUN]() (4; 0% instances), [et-pos/ADP]()-[et-pos/NOUN]() (3; 0% instances), [et-pos/ADV]()-[et-pos/PROPN]() (2; 0% instances), [et-pos/NOUN]()-[et-pos/ADV]() (2; 0% instances), [et-pos/NOUN]()-[et-pos/SYM]() (2; 0% instances), [et-pos/PROPN]()-[et-pos/ADJ]() (2; 0% instances), [et-pos/PROPN]()-[et-pos/NUM]() (2; 0% instances), [et-pos/VERB]()-[et-pos/ADV]() (2; 0% instances), [et-pos/ADJ]()-[et-pos/PRON]() (1; 0% instances), [et-pos/ADP]()-[et-pos/NUM]() (1; 0% instances), [et-pos/ADV]()-[et-pos/ADP]() (1; 0% instances), [et-pos/ADV]()-[et-pos/ADV]() (1; 0% instances), [et-pos/ADV]()-[et-pos/PRON]() (1; 0% instances), [et-pos/AUX]()-[et-pos/ADJ]() (1; 0% instances), [et-pos/NOUN]()-[et-pos/NUM]() (1; 0% instances), [et-pos/NOUN]()-[et-pos/PRON]() (1; 0% instances), [et-pos/NOUN]()-[et-pos/X]() (1; 0% instances), [et-pos/NUM]()-[et-pos/VERB]() (1; 0% instances), [et-pos/PRON]()-[et-pos/ADV]() (1; 0% instances), [et-pos/PROPN]()-[et-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 parataxis	color:blue
1	"	"	PUNCT	Z	_	5	punct	_	_
2	See	see	PRON	P	Case=Nom|Number=Sing|PronType=Dem	4	det	_	_
3	üllas	üllas	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	4	amod	_	_
4	rüütel	rüütel	NOUN	S	Case=Nom|Number=Sing	5	nsubj	_	_
5	elas	elama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	ilusa	ilus	ADJ	A	Case=Gen|Degree=Pos|Number=Sing	7	amod	_	_
7	elu	elu	NOUN	S	Case=Gen|Number=Sing	5	dobj	_	_
8	!	!	PUNCT	Z	_	5	punct	_	_
9	"	"	PUNCT	Z	_	5	punct	_	_
10	ütles	ütlema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	parataxis	_	_
11	viimaks	viimaks	ADV	D	_	10	advmod	_	_
12	sir	sir	NOUN	S	Case=Nom|Number=Sing	13	appos	_	_
13	Galahad	Galahad	PROPN	S	Case=Nom|Number=Sing	10	nsubj	_	_
14	.	.	PUNCT	Z	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 parataxis	color:blue
1	Vigurivänt	viguri_vänt	NOUN	S	Case=Nom|Number=Sing	5	parataxis	_	_
2	see	see	PRON	P	Case=Nom|Number=Sing|PronType=Dem	3	det	_	_
3	paps	paps	NOUN	S	Case=Nom|Number=Sing	1	nsubj:cop	_	_
4	--	--	PUNCT	Z	Hyph=Yes	5	punct	_	_
5	tuleb	tulema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	välja	välja	ADV	D	_	5	compound:prt	_	_
7	!	!	PUNCT	Z	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 11 parataxis	color:blue
1	"	"	PUNCT	Z	_	5	punct	_	_
2	Jah	jah	ADV	D	_	5	advmod	_	_
3	,	,	PUNCT	Z	_	5	punct	_	_
4	või	või	ADV	D	_	5	advmod	_	_
5	tõde	tõde	NOUN	S	Case=Par|Number=Sing	0	root	_	_
6	sulle	sina	PRON	P	Case=All|Number=Sing|Person=2|PronType=Prs	5	nmod	_	_
7	veel	veel	ADV	D	_	5	advmod	_	_
8	tarvis	tarvis	ADV	D	_	5	advmod	_	_
9	!	!	PUNCT	Z	_	5	punct	_	_
10	"	"	PUNCT	Z	_	5	punct	_	_
11	pilkas	pilkama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	parataxis	_	_
12	Ott	Ott	PROPN	S	Case=Nom|Number=Sing	11	nsubj	_	_
13	.	.	PUNCT	Z	_	5	punct	_	_

~~~


