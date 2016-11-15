

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.
There are 1 language-specific subtypes of `compound`: [compound:prt]().

362 nodes (0%) are attached to their parents as `compound`.

352 instances of `compound` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.0414364640884.

The following 11 pairs of parts of speech are connected with `compound`: [et-pos/NUM]()-[et-pos/NUM]() (337; 93% instances), [et-pos/NOUN]()-[et-pos/NOUN]() (6; 2% instances), [et-pos/VERB]()-[et-pos/VERB]() (6; 2% instances), [et-pos/SYM]()-[et-pos/NUM]() (3; 1% instances), [et-pos/NOUN]()-[et-pos/NUM]() (2; 1% instances), [et-pos/NUM]()-[et-pos/SYM]() (2; 1% instances), [et-pos/PROPN]()-[et-pos/NOUN]() (2; 1% instances), [et-pos/AUX]()-[et-pos/VERB]() (1; 0% instances), [et-pos/NOUN]()-[et-pos/PROPN]() (1; 0% instances), [et-pos/PROPN]()-[et-pos/PROPN]() (1; 0% instances), [et-pos/VERB]()-[et-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound	color:blue
1	Eelmine	eelmine	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	2	amod	_	_
2	rekord	rekord	NOUN	S	Case=Nom|Number=Sing	6	nsubj:cop	_	_
3	oli	olema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	cop	_	_
4	64	64	NUM	N	NumForm=Digit|NumType=Card	5	compound	_	_
5	000	000	NUM	N	Case=Nom|Number=Sing|NumForm=Digit|NumType=Card	6	nummod	_	_
6	krooni	kroon	NOUN	S	Case=Par|Number=Sing	0	root	_	_
7	.	.	PUNCT	Z	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound	color:blue
1	Uurijad	uurija	NOUN	S	Case=Nom|Number=Plur	2	nsubj	_	_
2	sõitsid	sõit	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	0	root	_	_
3	minema	mine	VERB	V	Case=All|VerbForm=Sup|Voice=Act	2	compound	_	_
4	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound	color:blue
1	Eesti	eesti	ADJ	G	_	2	amod	_	_
2	sotsioloogia	sotsioloogia	NOUN	S	Case=Gen|Number=Sing	5	nmod	_	_
3	grand	grand	NOUN	S	Case=Nom|Number=Sing	4	compound	_	_
4	old	old	NOUN	S	Case=Nom|Number=Sing	5	compound	_	_
5	man	man	NOUN	S	Case=Nom|Number=Sing	6	nsubj	_	_
6	väidab	väitma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	,	,	PUNCT	Z	_	11	punct	_	_
8	et	et	SCONJ	J	_	11	mark	_	_
9	tööga	töö	NOUN	S	Case=Com|Number=Sing	11	nmod	_	_
10	pole	olema	VERB	V	Mood=Ind|Negative=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop	_	_
11	võimalik	võimalik	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	6	ccomp	_	_
12	rikkaks	rikas	ADJ	A	Case=Tra|Degree=Pos|Number=Sing	13	amod	_	_
13	saada	saama	VERB	V	VerbForm=Inf	11	csubj:cop	_	_
14	.	.	PUNCT	Z	_	6	punct	_	_

~~~


