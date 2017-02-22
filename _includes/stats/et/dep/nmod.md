

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.
There are 1 language-specific subtypes of `nmod`: [nmod:poss]().

1607 nodes (5%) are attached to their parents as `nmod`.

1360 instances of `nmod` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.42003733665215.

The following 23 pairs of parts of speech are connected with `nmod`: [et-pos/NOUN]()-[et-pos/NOUN]() (821; 51% instances), [et-pos/NOUN]()-[et-pos/PROPN]() (280; 17% instances), [et-pos/NOUN]()-[et-pos/PRON]() (231; 14% instances), [et-pos/PROPN]()-[et-pos/NOUN]() (140; 9% instances), [et-pos/PRON]()-[et-pos/PRON]() (33; 2% instances), [et-pos/PROPN]()-[et-pos/PROPN]() (29; 2% instances), [et-pos/NUM]()-[et-pos/NOUN]() (20; 1% instances), [et-pos/NOUN]()-[et-pos/ADV]() (10; 1% instances), [et-pos/PRON]()-[et-pos/NOUN]() (9; 1% instances), [et-pos/NOUN]()-[et-pos/ADJ]() (7; 0% instances), [et-pos/NUM]()-[et-pos/ADV]() (4; 0% instances), [et-pos/NUM]()-[et-pos/PRON]() (4; 0% instances), [et-pos/PROPN]()-[et-pos/PRON]() (4; 0% instances), [et-pos/NOUN]()-[et-pos/X]() (3; 0% instances), [et-pos/VERB]()-[et-pos/NOUN]() (3; 0% instances), [et-pos/PRON]()-[et-pos/PROPN]() (2; 0% instances), [et-pos/ADJ]()-[et-pos/PROPN]() (1; 0% instances), [et-pos/ADP]()-[et-pos/NOUN]() (1; 0% instances), [et-pos/NOUN]()-[et-pos/DET]() (1; 0% instances), [et-pos/NOUN]()-[et-pos/NUM]() (1; 0% instances), [et-pos/NOUN]()-[et-pos/SYM]() (1; 0% instances), [et-pos/PRON]()-[et-pos/ADV]() (1; 0% instances), [et-pos/PROPN]()-[et-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod	color:blue
1	Hullud	hull	ADJ	A	Case=Nom|Degree=Pos|Number=Plur	2	amod	_	_
2	ideed	idee	NOUN	S	Case=Nom|Number=Plur	6	nsubj:cop	_	_
3	olid	olema	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	cop	_	_
4	selle	see	PRON	P	Case=Gen|Number=Sing|PronType=Dem	5	det	_	_
5	rahva	rahvas	NOUN	S	Case=Gen|Number=Sing	6	nmod	_	_
6	stiihia	stiihia	NOUN	S	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
7	.	.	PUNCT	Z	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod	color:blue
1	Nii	nii	ADV	D	_	5	advmod	_	_
2	see	see	PRON	P	Case=Nom|Number=Sing|PronType=Dem	4	det	_	_
3	Eesti	Eesti	PROPN	S	Case=Gen|Number=Sing	4	nmod	_	_
4	elu	elu	NOUN	S	Case=Nom|Number=Sing	5	nsubj	_	_
5	käis	käima	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	...	...	PUNCT	Z	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nmod	color:blue
1	Sinu	sina	PRON	P	Case=Gen|Number=Sing|Person=2|PronType=Prs	3	nmod	_	_
2	jaoks	jaoks	ADP	K	AdpType=Post	1	case	_	_
3	hea	hea	NOUN	S	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
4	?	?	PUNCT	Z	_	3	punct	_	_

~~~


