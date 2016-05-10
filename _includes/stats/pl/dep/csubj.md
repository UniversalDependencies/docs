

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This relation is universal.

10 nodes (0%) are attached to their parents as `csubj`.

6 instances of `csubj` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.2.

The following 2 pairs of parts of speech are connected with `csubj`: [pl-pos/VERB]()-[pl-pos/VERB]() (6; 60% instances), [pl-pos/NOUN]()-[pl-pos/VERB]() (4; 40% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 csubj	color:blue
1	Po	po	ADP	prep:loc	AdpType=Prep|Case=Loc	2	case	_	_
2	mszy	msza	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	4	nmod	_	_
3	zgromadzeni	zgromadzić	VERB	ppas:pl:nom:m1:perf:aff	Animacy=Anim|Aspect=Perf|Case=Nom|Gender=Masc|Negative=Pos|Number=Plur|VerbForm=Part|Voice=Pass	4	csubj	_	_
4	przejdą	przejść	VERB	fin:pl:ter:perf	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	do	do	ADP	prep:gen	AdpType=Prep|Case=Gen	6	case	_	_
6	Szpitala	szpital	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	dobj	_	_
7	Miejskiego	miejski	ADJ	adj:sg:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	6	amod	_	_
8	.	.	PUNCT	interp:_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 csubj	color:blue
1	To	to	VERB	pred:_	_	4	csubj	_	_
2	była	być	VERB	praet:sg:f:imperf	Aspect=Imp|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	4	cop	_	_
3	istna	istny	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	4	amod	_	_
4	makabra	makabra	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
5	!	!	PUNCT	interp:_	_	4	punct	_	_

~~~


