

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This relation is universal.

585 nodes (1%) are attached to their parents as `ccomp`.

579 instances of `ccomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.48376068376068.

The following 12 pairs of parts of speech are connected with `ccomp`: [pl-pos/VERB]()-[pl-pos/VERB]() (486; 83% instances), [pl-pos/VERB]()-[pl-pos/ADJ]() (43; 7% instances), [pl-pos/VERB]()-[pl-pos/NOUN]() (30; 5% instances), [pl-pos/VERB]()-[pl-pos/PRON]() (7; 1% instances), [pl-pos/VERB]()-[pl-pos/AUX]() (6; 1% instances), [pl-pos/ADJ]()-[pl-pos/VERB]() (5; 1% instances), [pl-pos/ADJ]()-[pl-pos/NOUN]() (2; 0% instances), [pl-pos/VERB]()-[pl-pos/PROPN]() (2; 0% instances), [pl-pos/ADJ]()-[pl-pos/ADJ]() (1; 0% instances), [pl-pos/PART]()-[pl-pos/VERB]() (1; 0% instances), [pl-pos/VERB]()-[pl-pos/ADV]() (1; 0% instances), [pl-pos/VERB]()-[pl-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 ccomp	color:blue
1	-	-	PUNCT	interp	_	3	punct	_	_
2	Nie	nie	PART	qub	_	3	advmod	_	_
3	wiem	wiedzieć	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
4	,	,	PUNCT	interp	_	6	punct	_	_
5	jak	jak	ADV	adv	_	6	advmod	_	_
6	zrodziła	zrodzić	VERB	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	3	ccomp	_	_
7	się	się	PRON	qub	PronType=Prs|Reflex=Yes	6	expl:pv	_	_
8	ta	ten	DET	adj:sg:nom:f:pos	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	9	det	_	_
9	inicjatywa	inicjatywa	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	_	SpaceAfter=No
10	.	.	PUNCT	interp	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 ccomp	color:blue
1	Tylko	tylko	PART	qub	_	3	advmod	_	_
2	kto	kto	PRON	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing|PronType=Int,Rel	3	nsubj	_	_
3	powiedział	powiedzieć	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
4	,	,	PUNCT	interp	_	8	punct	_	_
5	że	że	SCONJ	comp	_	8	case	_	_
6	życie	życie	NOUN	subst:sg:nom:n	Case=Nom|Gender=Neut|Number=Sing	8	nsubj	_	_
7	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
8	sprawiedliwe	sprawiedliwy	ADJ	adj:sg:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	3	ccomp	_	SpaceAfter=No
9	?	?	PUNCT	interp	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 ccomp	color:blue
1	Uświadomiła	uświadomić	VERB	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
2	sobie	siebie	PRON	siebie:dat	Case=Dat|PronType=Prs|Reflex=Yes	1	iobj	_	SpaceAfter=No
3	,	,	PUNCT	interp	_	6	punct	_	_
4	że	że	SCONJ	comp	_	6	case	_	_
5	kilkadziesiąt	kilkadziesiąt	DET	num:pl:nom:f:rec	Case=Nom|Gender=Fem|Number=Plur|NumType=Card|PronType=Ind	6	det:numgov	_	_
6	sekund	sekunda	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	1	ccomp	_	_
7	to	to	AUX	pred	_	6	cop	_	_
8	całe	cały	ADJ	adj:pl:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	9	amod	_	_
9	wieki	wiek	NOUN	subst:pl:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	6	nsubj	_	SpaceAfter=No
10	.	.	PUNCT	interp	_	1	punct	_	_

~~~


