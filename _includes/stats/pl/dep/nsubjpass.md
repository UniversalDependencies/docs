

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This relation is universal.

207 nodes (0%) are attached to their parents as `nsubjpass`.

169 instances of `nsubjpass` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.20289855072464.

The following 4 pairs of parts of speech are connected with `nsubjpass`: [pl-pos/VERB]()-[pl-pos/NOUN]() (191; 92% instances), [pl-pos/VERB]()-[pl-pos/ADJ]() (10; 5% instances), [pl-pos/VERB]()-[pl-pos/PRON]() (5; 2% instances), [pl-pos/VERB]()-[pl-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubjpass	color:blue
1	Działania	działanie	NOUN	subst:pl:nom:n	Case=Nom|Gender=Neut|Number=Plur	3	nsubjpass	_	_
2	były	być	AUX	praet:pl:n:imperf	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	3	auxpass	_	_
3	prowadzone	prowadzić	VERB	ppas:pl:nom:n:imperf:aff	Aspect=Imp|Case=Nom|Gender=Neut|Negative=Pos|Number=Plur|VerbForm=Part|Voice=Pass	0	root	_	_
4	na	na	ADP	prep:loc	AdpType=Prep|Case=Loc	5	case	_	_
5	terenie	teren	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	3	nmod	_	_
6	całego	cały	ADJ	adj:sg:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	7	amod	_	_
7	kraju	kraj	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	_
8	.	.	PUNCT	interp:_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 nsubjpass	color:blue
1	Odwołany	odwołać	VERB	ppas:sg:nom:m3:perf:aff	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing|VerbForm=Part|Voice=Pass	2	acl	_	_
2	rząd	rząd	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	13	nsubj	_	_
3	,	,	PUNCT	interp:_	_	8	punct	_	_
4	który	który	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	8	nsubjpass	_	_
5	zostaje	zostawać	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	auxpass	_	_
6	przez	przez	ADP	prep:acc:nwok	AdpType=Prep|Case=Acc|Variant=Short	7	case	_	_
7	Sejm	sejm	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	8	iobj	_	_
8	zmuszony	zmusić	VERB	ppas:sg:nom:m3:perf:aff	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing|VerbForm=Part|Voice=Pass	2	acl	_	_
9	do	do	ADP	prep:gen	AdpType=Prep|Case=Gen	10	mark	_	_
10	rządzenia	rządzić	VERB	ger:sg:gen:n:imperf:aff	Aspect=Imp|Case=Gen|Gender=Neut|Negative=Pos|Number=Sing|VerbForm=Ger	8	ccomp	_	_
11	,	,	PUNCT	interp:_	_	8	punct	_	_
12	zwykle	zwykle	ADV	adv:pos	Degree=Pos	13	advmod	_	_
13	przestaje	przestawać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
14	pracować	pracować	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf	13	xcomp	_	_
15	.	.	PUNCT	interp:_	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nsubjpass	color:blue
1	W	w	ADP	prep:loc:nwok	AdpType=Prep|Case=Loc|Variant=Short	2	case	_	_
2	większości	większość	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	5	nmod	_	_
3	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	auxpass	_	_
4	on	on	PRON	ppron3:sg:nom:m3:ter:akc:npraep	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	5	nsubjpass	_	_
5	przeznaczany	przeznaczać	VERB	ppas:sg:nom:m3:imperf:aff	Animacy=Inan|Aspect=Imp|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
6	na	na	ADP	prep:acc	AdpType=Prep|Case=Acc	7	case	_	_
7	budowę	budowa	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	5	nmod	_	_
8	plastrów	plaster	NOUN	subst:pl:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	7	nmod	_	_
9	.	.	PUNCT	interp:_	_	5	punct	_	_

~~~


