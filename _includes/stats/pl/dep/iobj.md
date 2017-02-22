

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This relation is universal.

708 nodes (1%) are attached to their parents as `iobj`.

597 instances of `iobj` (84%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.3361581920904.

The following 7 pairs of parts of speech are connected with `iobj`: [pl-pos/VERB]()-[pl-pos/NOUN]() (420; 59% instances), [pl-pos/VERB]()-[pl-pos/PRON]() (215; 30% instances), [pl-pos/VERB]()-[pl-pos/PROPN]() (40; 6% instances), [pl-pos/VERB]()-[pl-pos/ADJ]() (12; 2% instances), [pl-pos/VERB]()-[pl-pos/DET]() (10; 1% instances), [pl-pos/VERB]()-[pl-pos/NUM]() (10; 1% instances), [pl-pos/VERB]()-[pl-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 iobj	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 iobj	color:blue
1	Uświadomiła	uświadomić	VERB	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
2	sobie	siebie	PRON	siebie:dat	Case=Dat|PronType=Prs|Reflex=Yes	1	iobj	_	SpaceAfter=No
3	,	,	PUNCT	interp	_	6	punct	_	_
4	że	że	SCONJ	comp	_	6	case	_	_
5	kilkadziesiąt	kilkadziesiąt	DET	num:pl:nom:f:rec	Case=Nom|Gender=Fem|Number=Plur|NumType=Card|PronType=Ind	6	det:numgov	_	_
6	sekund	sekunda	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	1	ccomp	_	_
7	to	to	AUX	pred	_	6	cop	_	_
8	całe	cały	ADJ	adj:pl:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	9	amod	_	_
9	wieki	wiek	NOUN	subst:pl:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	6	nsubj	_	SpaceAfter=No
10	.	.	PUNCT	interp	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 iobj	color:blue
1	Na	na	ADP	prep:acc	AdpType=Prep|Case=Acc	2	case	_	_
2	Litwę	Litwa	PROPN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	3	iobj	_	_
3	eksportujemy	eksportować	VERB	fin:pl:pri:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	głównie	głównie	PART	qub	_	5	nmod	_	_
5	produkty	produkt	NOUN	subst:pl:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	3	obj	_	_
6	przemysłu	przemysł	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	_
7	chemicznego	chemiczny	ADJ	adj:sg:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	6	amod	_	SpaceAfter=No
8	.	.	PUNCT	interp	_	3	punct	_	_

~~~


