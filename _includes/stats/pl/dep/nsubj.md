

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: [nsubj:pass]().

4995 nodes (7%) are attached to their parents as `nsubj`.

3524 instances of `nsubj` (71%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.43663663663664.

The following 35 pairs of parts of speech are connected with `nsubj`: [pl-pos/VERB]()-[pl-pos/NOUN]() (2977; 60% instances), [pl-pos/VERB]()-[pl-pos/PROPN]() (567; 11% instances), [pl-pos/VERB]()-[pl-pos/PRON]() (420; 8% instances), [pl-pos/ADJ]()-[pl-pos/NOUN]() (253; 5% instances), [pl-pos/VERB]()-[pl-pos/DET]() (207; 4% instances), [pl-pos/NOUN]()-[pl-pos/NOUN]() (201; 4% instances), [pl-pos/VERB]()-[pl-pos/NUM]() (151; 3% instances), [pl-pos/ADJ]()-[pl-pos/PRON]() (41; 1% instances), [pl-pos/VERB]()-[pl-pos/ADJ]() (28; 1% instances), [pl-pos/NOUN]()-[pl-pos/PROPN]() (25; 1% instances), [pl-pos/NOUN]()-[pl-pos/PRON]() (24; 0% instances), [pl-pos/ADJ]()-[pl-pos/PROPN]() (20; 0% instances), [pl-pos/PRON]()-[pl-pos/NOUN]() (17; 0% instances), [pl-pos/DET]()-[pl-pos/NOUN]() (11; 0% instances), [pl-pos/VERB]()-[pl-pos/X]() (8; 0% instances), [pl-pos/ADJ]()-[pl-pos/NUM]() (6; 0% instances), [pl-pos/AUX]()-[pl-pos/NOUN]() (6; 0% instances), [pl-pos/ADJ]()-[pl-pos/DET]() (4; 0% instances), [pl-pos/NOUN]()-[pl-pos/DET]() (4; 0% instances), [pl-pos/AUX]()-[pl-pos/NUM]() (3; 0% instances), [pl-pos/PROPN]()-[pl-pos/NOUN]() (3; 0% instances), [pl-pos/PROPN]()-[pl-pos/PROPN]() (3; 0% instances), [pl-pos/NOUN]()-[pl-pos/NUM]() (2; 0% instances), [pl-pos/PRON]()-[pl-pos/PRON]() (2; 0% instances), [pl-pos/PRON]()-[pl-pos/PROPN]() (2; 0% instances), [pl-pos/ADJ]()-[pl-pos/ADJ]() (1; 0% instances), [pl-pos/ADV]()-[pl-pos/PRON]() (1; 0% instances), [pl-pos/AUX]()-[pl-pos/PRON]() (1; 0% instances), [pl-pos/AUX]()-[pl-pos/PROPN]() (1; 0% instances), [pl-pos/DET]()-[pl-pos/DET]() (1; 0% instances), [pl-pos/DET]()-[pl-pos/PROPN]() (1; 0% instances), [pl-pos/NOUN]()-[pl-pos/X]() (1; 0% instances), [pl-pos/NUM]()-[pl-pos/NOUN]() (1; 0% instances), [pl-pos/NUM]()-[pl-pos/PROPN]() (1; 0% instances), [pl-pos/PROPN]()-[pl-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 nsubj	color:blue
1	-	-	PUNCT	interp	_	3	punct	_	_
2	A	a	CCONJ	conj	_	3	advmod	_	_
3	to	to	VERB	pred	_	0	root	_	_
4	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux	_	_
5	nieprawda	nieprawda	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	SpaceAfter=No
6	.	.	PUNCT	interp	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 nsubj	color:blue
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


