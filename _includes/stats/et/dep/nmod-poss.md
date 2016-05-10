

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is a language-specific subtype of [nmod]().

864 nodes (0%) are attached to their parents as `nmod:poss`.

864 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.28009259259259.

The following 5 pairs of parts of speech are connected with `nmod:poss`: [et-pos/NOUN]()-[et-pos/PRON]() (843; 98% instances), [et-pos/PRON]()-[et-pos/PRON]() (7; 1% instances), [et-pos/PROPN]()-[et-pos/PRON]() (7; 1% instances), [et-pos/NUM]()-[et-pos/PRON]() (6; 1% instances), [et-pos/ADV]()-[et-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:poss	color:blue
1	Iseenesest	ise_enese	PRON	P	Case=Ela|Degree=Pos|Number=Sing|PronType=Prs|Reflex=Yes	2	nmod	_	_
2	kerkisid	kerkima	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	mu	mina	PRON	P	Case=Gen|Number=Sing|Person=1|PronType=Prs	4	nmod:poss	_	_
4	teele	tee	NOUN	S	Case=All|Number=Sing	2	nmod	_	_
5	kesklinna	kesk_linn	NOUN	S	Case=Gen|Number=Sing	6	nmod	_	_
6	juveelipoed	juveeli_pood	NOUN	S	Case=Nom|Number=Plur	2	nsubj	_	_
7	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	Tema	tema	PRON	P	Case=Gen|Number=Sing|Person=3|PronType=Prs	2	nmod:poss	_	_
2	oma	oma	PRON	P	Case=Nom|Number=Sing|Poss=Yes|PronType=Prs	4	nsubj:cop	_	_
3	oli	olema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	cop	_	_
4	69	69	NUM	N	Case=Nom|Number=Sing|NumForm=Digit|NumType=Card	0	root	_	_
5	,	,	PUNCT	Z	_	4	punct	_	_
6	otse	otse	ADV	D	_	8	advmod	_	_
7	selle	see	PRON	P	Case=Gen|Number=Sing|PronType=Dem	9	nmod	_	_
8	kõrval	kõrval	ADP	K	AdpType=Post	7	case	_	_
9	70	70	NUM	N	NumForm=Digit|NumType=Card	4	conj	_	_
10	.	.	PUNCT	Z	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 nmod:poss	color:blue
1	Su	sina	PRON	P	Case=Gen|Number=Sing|Person=2|PronType=Prs	2	nmod:poss	_	_
2	rüppe	rüpp	NOUN	S	Case=Add|Number=Sing	3	nmod	_	_
3	heidan	heitma	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	unele	uni	NOUN	S	Case=All|Number=Sing	3	nmod	_	_
5	,	,	PUNCT	Z	_	8	punct	_	_
6	mu	mina	PRON	P	Case=Gen|Number=Sing|Person=1|PronType=Prs	8	nmod:poss	_	_
7	püha	püha	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	8	amod	_	_
8	Eestimaa	Eesti_maa	PROPN	S	Case=Nom|Number=Sing	3	vocative	_	_
9	!	!	PUNCT	Z	_	3	punct	_	_
10	"	"	PUNCT	Z	_	3	punct	_	_

~~~


