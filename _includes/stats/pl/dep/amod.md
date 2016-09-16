

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This relation is universal.

6019 nodes (7%) are attached to their parents as `amod`.

4161 instances of `amod` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.11380628011298.

The following 10 pairs of parts of speech are connected with `amod`: [pl-pos/NOUN]()-[pl-pos/ADJ]() (5745; 95% instances), [pl-pos/PROPN]()-[pl-pos/ADJ]() (186; 3% instances), [pl-pos/PRON]()-[pl-pos/ADJ]() (28; 0% instances), [pl-pos/NOUN]()-[pl-pos/PRON]() (22; 0% instances), [pl-pos/NUM]()-[pl-pos/ADJ]() (18; 0% instances), [pl-pos/X]()-[pl-pos/ADJ]() (13; 0% instances), [pl-pos/PUNCT]()-[pl-pos/ADJ]() (3; 0% instances), [pl-pos/ADP]()-[pl-pos/ADJ]() (2; 0% instances), [pl-pos/NUM]()-[pl-pos/PRON]() (1; 0% instances), [pl-pos/PRON]()-[pl-pos/PRON]() (1; 0% instances).


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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 amod	color:blue
1	Na	na	ADP	prep:loc	AdpType=Prep|Case=Loc	3	case	_	_
2	Dużym	Duży	ADJ	adj:sg:loc:n:pos	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing	3	amod	_	_
3	Skrzycznem	Skrzyczne	PROPN	subst:sg:loc:n	Case=Loc|Gender=Neut|Number=Sing	6	dobj	_	_
4	w	w	ADP	prep:loc:nwok	AdpType=Prep|Case=Loc|Variant=Short	5	case	_	_
5	Szczyrku	Szczyrk	PROPN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	3	nmod	_	_
6	leży	leżeć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	60	60	NUM	num:pl:nom:m3:rec	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	6	nsubj	_	_
8	cm	centymetr	X	brev:npun	Abbr=Yes	7	nmod	_	_
9	śniegu	śnieg	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	_
10	.	.	PUNCT	interp:_	_	6	punct	_	_

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
8	posłuchał	posłuchać	VERB	praet:sg:m1:perf	Animacy=Anim|Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	1	ccomp	_	_
9	.	.	PUNCT	interp:_	_	1	punct	_	_

~~~


