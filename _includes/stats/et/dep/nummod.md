

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

318 nodes (1%) are attached to their parents as `nummod`.

265 instances of `nummod` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.61006289308176.

The following 8 pairs of parts of speech are connected with `nummod`: [et-pos/NOUN]()-[et-pos/NUM]() (244; 77% instances), [et-pos/VERB]()-[et-pos/NUM]() (42; 13% instances), [et-pos/PROPN]()-[et-pos/NUM]() (12; 4% instances), [et-pos/ADJ]()-[et-pos/NUM]() (11; 3% instances), [et-pos/NUM]()-[et-pos/NUM]() (5; 2% instances), [et-pos/X]()-[et-pos/NUM]() (2; 1% instances), [et-pos/ADV]()-[et-pos/NUM]() (1; 0% instances), [et-pos/SYM]()-[et-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nummod	color:blue
1	Jälle	jälle	ADV	D	_	4	advmod	_	_
2	üks	üks	NUM	N	Case=Nom|Number=Sing|NumForm=Letter|NumType=Card	4	nummod	_	_
3	piinarikas	piina_rikas	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	4	amod	_	_
4	öö	öö	NOUN	S	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
5	!	!	PUNCT	Z	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nummod	color:blue
1	Kaks	kaks	NUM	N	Case=Nom|Number=Sing|NumForm=Letter|NumType=Card	3	nummod	_	_
2	neid	see	PRON	P	Case=Par|Number=Plur|PronType=Dem	3	nsubj	_	_
3	oligi	olema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
4	.	.	PUNCT	Z	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 nummod	color:blue
1	1.	1.	ADJ	N	Case=Nom|Number=Sing|NumForm=Digit|NumType=Ord	0	root	_	_
2	Janis	Janis	PROPN	S	Case=Nom|Number=Sing	1	nsubj	_	_
3	Preiss	Preiss	PROPN	S	Case=Nom|Number=Sing	2	flat	_	_
4	(	(	PUNCT	Z	_	5	punct	_	SpaceAfter=No
5	LAT-23	LAT-23	NUM	N	Case=Nom|Number=Sing|NumType=Card	2	nummod	_	SpaceAfter=No
6	)	)	PUNCT	Z	_	5	punct	_	_

~~~


