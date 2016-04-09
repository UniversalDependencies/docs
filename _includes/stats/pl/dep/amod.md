

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This relation is universal.

6956 nodes (8%) are attached to their parents as `amod`.

5001 instances of `amod` (72%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.12363427257044.

The following 6 pairs of parts of speech are connected with `amod`: [pl-pos/NOUN]()-[pl-pos/ADJ]() (6897; 99% instances), [pl-pos/NUM]()-[pl-pos/ADJ]() (27; 0% instances), [pl-pos/PRON]()-[pl-pos/ADJ]() (14; 0% instances), [pl-pos/X]()-[pl-pos/ADJ]() (13; 0% instances), [pl-pos/PUNCT]()-[pl-pos/ADJ]() (3; 0% instances), [pl-pos/ADP]()-[pl-pos/ADJ]() (2; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	Stary	stary	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	2	amod	_	_
2	park	park	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
3	jest	być	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	zdziczały	zdziczały	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	_
5	i	i	CONJ	conj:_	_	4	cc	_	_
6	przetrzebiony	przetrzebić	VERB	ppas:sg:nom:m3:perf:aff	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing|VerbForm=Part|Voice=Pass	4	conj	_	_
7	.	.	PUNCT	interp:_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 amod	color:blue
1	-	-	PUNCT	interp:_	_	3	punct	_	_
2	Czy	czy	PART	qub:_	_	3	advmod	_	_
3	znasz	znać	VERB	fin:sg:sec:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
4	dziesięciu	dziesięć	NUM	num:pl:acc:m1:rec	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur	3	dobj	_	_
5	sprawiedliwych	sprawiedliwy	ADJ	adj:pl:gen:m1:pos	Animacy=Anim|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	4	amod	_	_
6	w	w	ADP	prep:loc:nwok	AdpType=Prep|Case=Loc|Variant=Short	8	case	_	_
7	tym	ten	ADJ	adj:sg:loc:m3:pos	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	8	amod	_	_
8	grodzie	gród	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	3	nmod	_	_
9	?	?	PUNCT	interp:_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 amod	color:blue
1	To	to	VERB	pred:_	_	0	root	_	_
2	szczęśliwie	szczęśliwie	ADV	adv:pos	Degree=Pos	1	advmod	_	_
3	,	,	PUNCT	interp:_	_	8	punct	_	_
4	że	że	SCONJ	comp:_	_	8	mark	_	_
5	samego	sam	ADJ	adj:sg:gen:m1:pos	Animacy=Anim|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	6	amod	_	_
6	siebie	siebie	PRON	siebie:gen	Case=Gen|PronType=Prs|Reflex=Yes	8	dobj	_	_
7	nie	nie	PART	qub:_	_	8	neg	_	_
8	posłuchał	posłuchać	VERB	praet:sg:m1:perf	Animacy=Anim|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	1	ccomp	_	_
9	.	.	PUNCT	interp:_	_	1	punct	_	_

~~~


