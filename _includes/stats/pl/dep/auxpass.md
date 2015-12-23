

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This relation is universal.

302 nodes (0%) are attached to their parents as `auxpass`.

256 instances of `auxpass` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.35761589403974.

The following 2 pairs of parts of speech are connected with `auxpass`: [pl-pos/VERB]()-[pl-pos/AUX]() (301; 100% instances), [pl-pos/VERB]()-[pl-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 auxpass	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 auxpass	color:blue
1	Na	na	ADP	prep:acc	AdpType=Prep|Case=Acc	2	case	_	_
2	koniec	koniec	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	nmod	_	_
3	wyniki	wynik	NOUN	subst:pl:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	4	dobj	_	_
4	podliczono	podliczyć	VERB	imps:perf	Aspect=Perf|Case=Nom|Gender=Neut|Negative=Pos|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
5	by	by	PART	qub:_	_	4	auxpass	_	_
6	w	w	ADP	prep:loc:nwok	AdpType=Prep|Case=Loc|Variant=Short	7	case	_	_
7	blasku	blask	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	4	nmod	_	_
8	jupiterów	jupiter	NOUN	subst:pl:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	7	nmod	_	_
9	na	na	ADP	prep:loc	AdpType=Prep|Case=Loc	11	case	_	_
10	wielkiej	wielki	ADJ	adj:sg:loc:f:pos	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	11	amod	_	_
11	konwencji	konwencja	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	4	nmod	_	_
12	ogólnopolskiej	ogólnopolski	ADJ	adj:sg:loc:f:pos	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	11	amod	_	_
13	.	.	PUNCT	interp:_	_	4	punct	_	_

~~~


