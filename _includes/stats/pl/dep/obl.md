

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This relation is universal.

3443 nodes (5%) are attached to their parents as `obl`.

1917 instances of `obl` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.97066511762997.

The following 40 pairs of parts of speech are connected with `obl`: [pl-pos/VERB]()-[pl-pos/NOUN]() (1913; 56% instances), [pl-pos/ADJ]()-[pl-pos/NOUN]() (529; 15% instances), [pl-pos/VERB]()-[pl-pos/PRON]() (201; 6% instances), [pl-pos/VERB]()-[pl-pos/PROPN]() (158; 5% instances), [pl-pos/VERB]()-[pl-pos/NUM]() (100; 3% instances), [pl-pos/VERB]()-[pl-pos/ADJ]() (85; 2% instances), [pl-pos/PART]()-[pl-pos/NOUN]() (77; 2% instances), [pl-pos/ADV]()-[pl-pos/NOUN]() (52; 2% instances), [pl-pos/ADJ]()-[pl-pos/PROPN]() (45; 1% instances), [pl-pos/ADJ]()-[pl-pos/PRON]() (37; 1% instances), [pl-pos/VERB]()-[pl-pos/DET]() (36; 1% instances), [pl-pos/NOUN]()-[pl-pos/NOUN]() (34; 1% instances), [pl-pos/ADJ]()-[pl-pos/ADJ]() (27; 1% instances), [pl-pos/ADJ]()-[pl-pos/NUM]() (26; 1% instances), [pl-pos/ADJ]()-[pl-pos/DET]() (19; 1% instances), [pl-pos/DET]()-[pl-pos/NOUN]() (15; 0% instances), [pl-pos/ADV]()-[pl-pos/PRON]() (9; 0% instances), [pl-pos/AUX]()-[pl-pos/NOUN]() (8; 0% instances), [pl-pos/ADV]()-[pl-pos/ADJ]() (6; 0% instances), [pl-pos/NOUN]()-[pl-pos/PROPN]() (6; 0% instances), [pl-pos/PART]()-[pl-pos/NUM]() (6; 0% instances), [pl-pos/DET]()-[pl-pos/PRON]() (5; 0% instances), [pl-pos/NOUN]()-[pl-pos/ADJ]() (5; 0% instances), [pl-pos/NOUN]()-[pl-pos/NUM]() (5; 0% instances), [pl-pos/NOUN]()-[pl-pos/PRON]() (5; 0% instances), [pl-pos/ADV]()-[pl-pos/NUM]() (4; 0% instances), [pl-pos/ADV]()-[pl-pos/PROPN]() (4; 0% instances), [pl-pos/DET]()-[pl-pos/ADJ]() (4; 0% instances), [pl-pos/PART]()-[pl-pos/ADJ]() (4; 0% instances), [pl-pos/PART]()-[pl-pos/PROPN]() (4; 0% instances), [pl-pos/NOUN]()-[pl-pos/DET]() (3; 0% instances), [pl-pos/ADP]()-[pl-pos/NOUN]() (2; 0% instances), [pl-pos/PRON]()-[pl-pos/NOUN]() (2; 0% instances), [pl-pos/ADV]()-[pl-pos/DET]() (1; 0% instances), [pl-pos/AUX]()-[pl-pos/PRON]() (1; 0% instances), [pl-pos/DET]()-[pl-pos/DET]() (1; 0% instances), [pl-pos/DET]()-[pl-pos/PROPN]() (1; 0% instances), [pl-pos/NUM]()-[pl-pos/PRON]() (1; 0% instances), [pl-pos/PRON]()-[pl-pos/PRON]() (1; 0% instances), [pl-pos/PRON]()-[pl-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 obl	color:blue
1	Poszkodowanego	poszkodowany	NOUN	subst:sg:acc:m1	Animacy=Hum|Case=Acc|Gender=Masc|Number=Sing	2	obj	_	_
2	poddano	poddany	ADJ	imps:perf	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	_	_
3	operacji	operacja	NOUN	subst:sg:dat:f	Case=Dat|Gender=Fem|Number=Sing	2	obj	_	_
4	w	w	ADP	prep:loc:nwok	AdpType=Prep|Case=Loc|Variant=Short	6	case	_	_
5	miejscowym	miejscowy	ADJ	adj:sg:loc:m3:pos	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	6	amod	_	_
6	szpitalu	szpital	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	2	obl	_	SpaceAfter=No
7	.	.	PUNCT	interp	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 obl	color:blue
1	-	-	PUNCT	interp	_	2	punct	_	_
2	Pojedziecie	pojechać	VERB	fin:pl:sec:perf	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
3	z	z	ADP	prep:inst:nwok	AdpType=Prep|Case=Ins|Variant=Short	4	case	_	_
4	nami	my	PRON	ppron12:pl:inst:m1:pri	Animacy=Hum|Case=Ins|Gender=Masc|Number=Plur|Person=1|PronType=Prs	2	obl	_	SpaceAfter=No
5	,	,	PUNCT	interp	_	6	punct	_	_
6	zabawicie	zabawić	VERB	fin:pl:sec:perf	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	2	conj	_	_
7	się	się	PRON	qub	PronType=Prs|Reflex=Yes	6	expl:pv	_	SpaceAfter=No
8	.	.	PUNCT	interp	_	2	punct	_	_

~~~


