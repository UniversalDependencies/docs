

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This relation is universal.

98 nodes (0%) are attached to their parents as `csubj`.

54 instances of `csubj` (55%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.90816326530612.

The following 5 pairs of parts of speech are connected with `csubj`: [pl-pos/VERB]()-[pl-pos/VERB]() (46; 47% instances), [pl-pos/NOUN]()-[pl-pos/VERB]() (35; 36% instances), [pl-pos/ADJ]()-[pl-pos/VERB]() (15; 15% instances), [pl-pos/AUX]()-[pl-pos/VERB]() (1; 1% instances), [pl-pos/NOUN]()-[pl-pos/NOUN]() (1; 1% instances).


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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 csubj	color:blue
1	Rozdawanie	rozdawać	VERB	ger:sg:nom:n:imperf:aff	Aspect=Imp|Case=Nom|Gender=Neut|Negative=Pos|Number=Sing|VerbForm=Ger	5	csubj	_	_
2	ulotek	ulotka	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	1	dobj	_	_
3	NIE	nie	PART	qub:_	_	5	neg	_	_
4	JEST	być	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	terroryzmem	terroryzm	NOUN	subst:sg:inst:m3	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	0	root	_	_
6	medialnym	medialny	ADJ	adj:sg:inst:m3:pos	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	5	amod	_	_
7	!	!	PUNCT	interp:_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 csubj	color:blue
1	Użytkowanie	użytkować	VERB	ger:sg:nom:n:imperf:aff	Aspect=Imp|Case=Nom|Gender=Neut|Negative=Pos|Number=Sing|VerbForm=Ger	7	csubj	_	_
2	przez	przez	ADP	prep:acc:nwok	AdpType=Prep|Case=Acc|Variant=Short	3	case	_	_
3	spółdzielnię	spółdzielnia	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	1	dobj	_	_
4	wkładów	wkład	NOUN	subst:pl:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	1	dobj	_	_
5	gruntowych	gruntowy	ADJ	adj:pl:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	4	amod	_	_
6	jest	być	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
7	odpłatne	odpłatny	ADJ	adj:sg:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
8	.	.	PUNCT	interp:_	_	7	punct	_	_

~~~


