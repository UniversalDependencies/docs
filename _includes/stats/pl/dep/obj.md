

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This relation is universal.

6762 nodes (9%) are attached to their parents as `obj`.

5488 instances of `obj` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.04717539189589.

The following 26 pairs of parts of speech are connected with `obj`: [pl-pos/VERB]()-[pl-pos/NOUN]() (4401; 65% instances), [pl-pos/VERB]()-[pl-pos/PRON]() (987; 15% instances), [pl-pos/ADJ]()-[pl-pos/NOUN]() (437; 6% instances), [pl-pos/NOUN]()-[pl-pos/NOUN]() (238; 4% instances), [pl-pos/VERB]()-[pl-pos/PROPN]() (233; 3% instances), [pl-pos/VERB]()-[pl-pos/NUM]() (174; 3% instances), [pl-pos/VERB]()-[pl-pos/DET]() (66; 1% instances), [pl-pos/ADJ]()-[pl-pos/PRON]() (56; 1% instances), [pl-pos/ADJ]()-[pl-pos/PROPN]() (42; 1% instances), [pl-pos/ADJ]()-[pl-pos/NUM]() (30; 0% instances), [pl-pos/NOUN]()-[pl-pos/PRON]() (22; 0% instances), [pl-pos/VERB]()-[pl-pos/ADJ]() (19; 0% instances), [pl-pos/AUX]()-[pl-pos/NOUN]() (11; 0% instances), [pl-pos/NOUN]()-[pl-pos/PROPN]() (8; 0% instances), [pl-pos/PART]()-[pl-pos/NOUN]() (8; 0% instances), [pl-pos/ADJ]()-[pl-pos/DET]() (6; 0% instances), [pl-pos/ADJ]()-[pl-pos/X]() (5; 0% instances), [pl-pos/ADJ]()-[pl-pos/ADJ]() (4; 0% instances), [pl-pos/ADV]()-[pl-pos/NOUN]() (4; 0% instances), [pl-pos/ADV]()-[pl-pos/PRON]() (2; 0% instances), [pl-pos/AUX]()-[pl-pos/PROPN]() (2; 0% instances), [pl-pos/NOUN]()-[pl-pos/NUM]() (2; 0% instances), [pl-pos/PART]()-[pl-pos/PRON]() (2; 0% instances), [pl-pos/ADJ]()-[pl-pos/ADP]() (1; 0% instances), [pl-pos/PART]()-[pl-pos/PROPN]() (1; 0% instances), [pl-pos/VERB]()-[pl-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 obj	color:blue
1	Dorota	Dorota	PROPN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
2	z	z	ADP	prep:inst:nwok	AdpType=Prep|Case=Ins|Variant=Short	3	case	_	_
3	trudem	trud	NOUN	subst:sg:inst:m3	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	4	obl	_	_
4	przepchnęła	przepchnąć	VERB	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
5	słowa	słowo	NOUN	subst:pl:acc:n	Case=Acc|Gender=Neut|Number=Plur	4	obj	_	_
6	przez	przez	ADP	prep:acc:nwok	AdpType=Prep|Case=Acc|Variant=Short	8	case	_	_
7	zaciśnięte	zaciśnięty	ADJ	ppas:sg:acc:n:perf:aff	Aspect=Perf|Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	8	amod	_	_
8	gardło	gardło	NOUN	subst:sg:acc:n	Case=Acc|Gender=Neut|Number=Sing	4	iobj	_	SpaceAfter=No
9	.	.	PUNCT	interp	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 obj	color:blue
1	Po	po	ADP	prep:loc	AdpType=Prep|Case=Loc	2	case	_	_
2	bieganiu	bieganie	NOUN	ger:sg:loc:n:imperf:aff	Aspect=Imp|Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	8	obl	_	_
3	coś	coś	PRON	subst:sg:nom:n	Case=Nom|Gender=Neut|Number=Sing|PronType=Ind	8	nsubj	_	_
4	się	się	PRON	qub	PronType=Prs|Reflex=Yes	8	expl:pv	_	_
5	wam	wy	PRON	ppron12:pl:dat:f:sec	Case=Dat|Gender=Fem|Number=Plur|Person=2|PronType=Prs	8	obj	_	_
6	od	od	ADP	prep:gen:nwok	AdpType=Prep|Case=Gen|Variant=Short	7	case	_	_
7	życia	życie	NOUN	subst:sg:gen:n	Case=Gen|Gender=Neut|Number=Sing	8	obl	_	_
8	należy	należeć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
9	.	.	PUNCT	interp	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obj	color:blue
1	Poszkodowanego	poszkodowany	NOUN	subst:sg:acc:m1	Animacy=Hum|Case=Acc|Gender=Masc|Number=Sing	2	obj	_	_
2	poddano	poddany	ADJ	imps:perf	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	_	_
3	operacji	operacja	NOUN	subst:sg:dat:f	Case=Dat|Gender=Fem|Number=Sing	2	obj	_	_
4	w	w	ADP	prep:loc:nwok	AdpType=Prep|Case=Loc|Variant=Short	6	case	_	_
5	miejscowym	miejscowy	ADJ	adj:sg:loc:m3:pos	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	6	amod	_	_
6	szpitalu	szpital	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	2	obl	_	SpaceAfter=No
7	.	.	PUNCT	interp	_	2	punct	_	_

~~~


