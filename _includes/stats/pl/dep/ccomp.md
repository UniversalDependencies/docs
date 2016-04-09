

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This relation is universal.

971 nodes (1%) are attached to their parents as `ccomp`.

948 instances of `ccomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.74047373841401.

The following 10 pairs of parts of speech are connected with `ccomp`: [pl-pos/VERB]()-[pl-pos/VERB]() (862; 89% instances), [pl-pos/VERB]()-[pl-pos/ADJ]() (47; 5% instances), [pl-pos/VERB]()-[pl-pos/NOUN]() (44; 5% instances), [pl-pos/ADJ]()-[pl-pos/VERB]() (7; 1% instances), [pl-pos/VERB]()-[pl-pos/AUX]() (6; 1% instances), [pl-pos/ADJ]()-[pl-pos/NOUN]() (1; 0% instances), [pl-pos/PART]()-[pl-pos/VERB]() (1; 0% instances), [pl-pos/VERB]()-[pl-pos/ADV]() (1; 0% instances), [pl-pos/VERB]()-[pl-pos/NUM]() (1; 0% instances), [pl-pos/VERB]()-[pl-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 ccomp	color:blue
1	Myślę	myśleć	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	,	,	PUNCT	interp:_	_	4	punct	_	_
3	że	że	SCONJ	comp:_	_	4	mark	_	_
4	mogą	móc	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	1	ccomp	_	_
5	.	.	PUNCT	interp:_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 ccomp	color:blue
1	Odpisał	odpisać	VERB	praet:sg:m1:perf	Animacy=Anim|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
2	em	być	AUX	aglt:sg:pri:imperf:wok	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|Variant=Long|VerbForm=Fin	1	aux	_	_
3	więc	więc	CONJ	conj:_	_	1	advmod	_	_
4	,	,	PUNCT	interp:_	_	9	punct	_	_
5	że	że	SCONJ	comp:_	_	9	case	_	_
6	nie	nie	PART	qub:_	_	9	neg	_	_
7	jest	być	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
8	to	to	NOUN	subst:sg:nom:n	Case=Nom|Gender=Neut|Number=Sing	9	nsubj	_	_
9	zgodne	zgodny	ADJ	adj:sg:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	1	ccomp	_	_
10	z	z	ADP	prep:inst:nwok	AdpType=Prep|Case=Ins|Variant=Short	11	case	_	_
11	prawdą	prawda	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	9	nmod	_	_
12	.	.	PUNCT	interp:_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 ccomp	color:blue
1	Dopiero	dopiero	PART	qub:_	_	4	advmod	_	_
2	po	po	ADP	prep:loc	AdpType=Prep|Case=Loc	3	case	_	_
3	chwili	chwila	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	1	nmod	_	_
4	orientuję	orientować	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
5	się	się	PRON	qub:_	PronType=Prs|Reflex=Yes	4	expl	_	_
6	,	,	PUNCT	interp:_	_	9	punct	_	_
7	że	że	SCONJ	comp:_	_	9	case	_	_
8	to	to	VERB	pred:_	_	9	cop	_	_
9	Lucjan	Lucjan	NOUN	subst:sg:nom:m1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	4	ccomp	_	_
10	.	.	PUNCT	interp:_	_	4	punct	_	_

~~~


