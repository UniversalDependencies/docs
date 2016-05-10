

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This relation is universal.
There are 2 language-specific subtypes of `det`: [det:numgov](), [det:nummod]().

955 nodes (1%) are attached to their parents as `det`.

887 instances of `det` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.18638743455497.

The following 3 pairs of parts of speech are connected with `det`: [pl-pos/NOUN]()-[pl-pos/DET]() (931; 97% instances), [pl-pos/PRON]()-[pl-pos/DET]() (18; 2% instances), [pl-pos/PROPN]()-[pl-pos/DET]() (6; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 det	color:blue
1	Tutaj	tutaj	ADV	adv:_	_	2	advmod	_	_
2	weszli	wejść	VERB	praet:pl:m1:perf	Animacy=Anim|Aspect=Perf|Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
3	do	do	ADP	prep:gen	AdpType=Prep|Case=Gen	6	case	_	_
4	jakiejś	jakiś	DET	adj:sg:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|PronType=Ind	6	det	_	_
5	małej	mały	ADJ	adj:sg:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	6	amod	_	_
6	restauracji	restauracja	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	2	dobj	_	_
7	.	.	PUNCT	interp:_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	To	ten	DET	adj:sg:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|PronType=Dem	2	det	_	_
2	wszystko	wszystko	PRON	subst:sg:nom:n	Case=Nom|Gender=Neut|Number=Sing|PronType=Tot	4	nsubj	_	_
3	było	być	VERB	praet:sg:n:imperf	Aspect=Imp|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	4	cop	_	_
4	nowe	nowy	ADJ	adj:sg:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
5	.	.	PUNCT	interp:_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
1	Tu	tu	ADV	adv:_	_	3	advmod	_	_
2	nie	nie	PART	qub:_	_	3	neg	_	_
3	ma	mieć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	żadnego	żaden	DET	adj:sg:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|PronType=Neg	5	det	_	_
5	Legolandu	Legoland	PROPN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	3	dobj	_	_
6	.	.	PUNCT	interp:_	_	3	punct	_	_

~~~


