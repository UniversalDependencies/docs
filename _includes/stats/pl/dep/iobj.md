

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This relation is universal.

913 nodes (1%) are attached to their parents as `iobj`.

756 instances of `iobj` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.32639649507119.

The following 7 pairs of parts of speech are connected with `iobj`: [pl-pos/VERB]()-[pl-pos/NOUN]() (555; 61% instances), [pl-pos/VERB]()-[pl-pos/PRON]() (281; 31% instances), [pl-pos/VERB]()-[pl-pos/PROPN]() (52; 6% instances), [pl-pos/VERB]()-[pl-pos/ADJ]() (12; 1% instances), [pl-pos/VERB]()-[pl-pos/NUM]() (11; 1% instances), [pl-pos/VERB]()-[pl-pos/ADP]() (1; 0% instances), [pl-pos/VERB]()-[pl-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 iobj	color:blue
1	-	-	PUNCT	interp:_	_	3	punct	_	_
2	Ogórek	Ogórek	PROPN	subst:sg:nom:m1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
3	wkładał	wkładać	VERB	praet:sg:m1:imperf	Animacy=Anim|Aspect=Imp|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
4	do	do	ADP	prep:gen	AdpType=Prep|Case=Gen	5	case	_	_
5	pochwy	pochwa	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	3	iobj	_	_
6	swój	swój	ADJ	adj:sg:acc:m3:pos	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	7	amod	_	_
7	bagnet	bagnet	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	3	dobj	_	_
8	.	.	PUNCT	interp:_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 iobj	color:blue
1	Tego	to	PRON	subst:sg:gen:n	Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	3	iobj	_	_
2	nas	my	PRON	ppron12:pl:acc:m1:pri	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur|Person=1|PronType=Prs	3	dobj	_	_
3	uczy	uczyć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	Boże	boży	ADJ	adj:sg:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	5	amod	_	_
5	Słowo	słowo	NOUN	subst:sg:nom:n	Case=Nom|Gender=Neut|Number=Sing	3	nsubj	_	_
6	.	.	PUNCT	interp:_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 iobj	color:blue
1	Sprawcę	sprawca	NOUN	subst:sg:acc:m1	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	2	dobj	_	_
2	osadzono	osadzić	VERB	imps:perf	Aspect=Perf|Case=Nom|Gender=Neut|Negative=Pos|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
3	w	w	ADP	prep:loc:nwok	AdpType=Prep|Case=Loc|Variant=Short	4	case	_	_
4	PDOZ	PDOZ	PROPN	subst:pl:loc:n	Case=Loc|Gender=Neut|Number=Plur	2	iobj	_	_
5	.	.	PUNCT	interp:_	_	2	punct	_	_

~~~


