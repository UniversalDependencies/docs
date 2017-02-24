

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.
There are 1 language-specific subtypes of `compound`: [compound:prt]().

25 nodes (0%) are attached to their parents as `compound`.

17 instances of `compound` (68%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.28.

The following 4 pairs of parts of speech are connected with `compound`: [et-pos/NUM]()-[et-pos/NUM]() (18; 72% instances), [et-pos/VERB]()-[et-pos/VERB]() (5; 20% instances), [et-pos/AUX]()-[et-pos/VERB]() (1; 4% instances), [et-pos/VERB]()-[et-pos/AUX]() (1; 4% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound	color:blue
1	Paul	Paul	PROPN	S	Case=Nom|Number=Sing	7	nsubj:cop	_	_
2	Indrikson	Indrikson	PROPN	S	Case=Nom|Number=Sing	1	flat	_	_
3	oli	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	7	cop	_	_
4	juba	juba	ADV	D	_	7	advmod	_	_
5	kolmekümne	kolm_kümmend	NUM	N	Case=Gen|Number=Sing|NumForm=Letter|NumType=Card	6	compound	_	_
6	kahe	kaks	NUM	N	Case=Gen|Number=Sing|NumForm=Letter|NumType=Card	7	nummod	_	_
7	aastane	aastane	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	_	SpaceAfter=No
8	.	.	PUNCT	Z	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 compound	color:blue
1	Hai	hai	NOUN	S	Case=Nom|Number=Sing	2	nsubj	_	_
2	ujus	uju	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	0	root	_	_
3	koos	koos	ADP	K	AdpType=Prep	4	case	_	_
4	konksuga	konks	NOUN	S	Case=Com|Number=Sing	2	obl	_	_
5	rahulikult	rahulikult	ADV	D	_	2	advmod	_	_
6	minema	mine	VERB	V	Case=All|VerbForm=Sup|Voice=Act	2	compound	_	SpaceAfter=No
7	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound	color:blue
1	Temast	tema	PRON	P	Case=Ela|Number=Sing|Person=3|PronType=Prs	3	obl	_	_
2	oli	ole	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	3	compound	_	_
3	tilkunud	tilku	VERB	V	Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
4	verd	veri	NOUN	S	Case=Par|Number=Sing	3	nsubj	_	SpaceAfter=No
5	.	.	PUNCT	Z	_	3	punct	_	_

~~~


