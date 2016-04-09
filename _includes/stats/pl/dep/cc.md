

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This relation is universal.

1705 nodes (2%) are attached to their parents as `cc`.

1687 instances of `cc` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.23284457478006.

The following 10 pairs of parts of speech are connected with `cc`: [pl-pos/VERB]()-[pl-pos/CONJ]() (838; 49% instances), [pl-pos/NOUN]()-[pl-pos/CONJ]() (694; 41% instances), [pl-pos/ADJ]()-[pl-pos/CONJ]() (142; 8% instances), [pl-pos/NUM]()-[pl-pos/CONJ]() (18; 1% instances), [pl-pos/PRON]()-[pl-pos/CONJ]() (7; 0% instances), [pl-pos/NOUN]()-[pl-pos/PART]() (2; 0% instances), [pl-pos/ADV]()-[pl-pos/CONJ]() (1; 0% instances), [pl-pos/NOUN]()-[pl-pos/NUM]() (1; 0% instances), [pl-pos/PART]()-[pl-pos/CONJ]() (1; 0% instances), [pl-pos/VERB]()-[pl-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 cc	color:blue
1	Gniewko	Gniewko	NOUN	subst:sg:nom:m1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	ściągnął	ściągnąć	VERB	praet:sg:m1:perf	Animacy=Anim|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
3	wodze	wodze	NOUN	subst:pl:acc:n	Case=Acc|Gender=Neut|Number=Plur	2	dobj	_	_
4	i	i	CONJ	conj:_	_	2	cc	_	_
5	wzrok	wzrok	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	6	dobj	_	_
6	obrócił	obrócić	VERB	praet:sg:m1:perf	Animacy=Anim|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	2	conj	_	_
7	w	w	ADP	prep:acc:nwok	AdpType=Prep|Case=Acc|Variant=Short	8	case	_	_
8	stronę	strona	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	6	iobj	_	_
9	zagrody	zagroda	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	_
10	.	.	PUNCT	interp:_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 cc	color:blue
1	Frytki	frytka	NOUN	subst:pl:nom:f	Case=Nom|Gender=Fem|Number=Plur	4	nsubj	_	_
2	i	i	CONJ	conj:_	_	1	cc	_	_
3	mięso	mięso	NOUN	subst:sg:nom:n	Case=Nom|Gender=Neut|Number=Sing	1	conj	_	_
4	stały	stać	VERB	praet:pl:n:imperf	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	0	root	_	_
5	na	na	ADP	prep:loc	AdpType=Prep|Case=Loc	6	case	_	_
6	stole	stół	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	4	dobj	_	_
7	.	.	PUNCT	interp:_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 cc	color:blue
1	Stary	stary	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	2	amod	_	_
2	park	park	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
3	jest	być	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	zdziczały	zdziczały	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	_
5	i	i	CONJ	conj:_	_	4	cc	_	_
6	przetrzebiony	przetrzebić	VERB	ppas:sg:nom:m3:perf:aff	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing|VerbForm=Part|Voice=Pass	4	conj	_	_
7	.	.	PUNCT	interp:_	_	4	punct	_	_

~~~


