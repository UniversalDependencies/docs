

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

3386 nodes (1%) are attached to their parents as `nummod`.

2515 instances of `nummod` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.56379208505611.

The following 9 pairs of parts of speech are connected with `nummod`: [et-pos/NOUN]()-[et-pos/NUM]() (2542; 75% instances), [et-pos/VERB]()-[et-pos/NUM]() (295; 9% instances), [et-pos/PROPN]()-[et-pos/NUM]() (274; 8% instances), [et-pos/NUM]()-[et-pos/NUM]() (156; 5% instances), [et-pos/ADJ]()-[et-pos/NUM]() (68; 2% instances), [et-pos/ADV]()-[et-pos/NUM]() (36; 1% instances), [et-pos/ADP]()-[et-pos/NUM]() (6; 0% instances), [et-pos/SYM]()-[et-pos/NUM]() (6; 0% instances), [et-pos/X]()-[et-pos/NUM]() (3; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nummod	color:blue
1	Jälle	jälle	ADV	D	_	4	advmod	_	_
2	üks	üks	NUM	N	Case=Nom|Number=Sing|NumForm=Letter|NumType=Card	4	nummod	_	_
3	piinarikas	piina_rikas	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	4	amod	_	_
4	öö	öö	NOUN	S	Case=Nom|Number=Sing	0	root	_	_
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
3	oligi	olema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	.	.	PUNCT	Z	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nummod	color:blue
1	NYCOMED	Nycomed	PROPN	S	Case=Nom|Number=Sing	0	root	_	_
2	68,4	68,4	NUM	N	NumForm=Digit|NumType=Card	1	nummod	_	_

~~~


