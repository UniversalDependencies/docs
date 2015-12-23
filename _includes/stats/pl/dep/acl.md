

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This relation is universal.

1453 nodes (2%) are attached to their parents as `acl`.

1043 instances of `acl` (72%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.66964900206469.

The following 8 pairs of parts of speech are connected with `acl`: [pl-pos/NOUN]()-[pl-pos/VERB]() (1383; 95% instances), [pl-pos/NUM]()-[pl-pos/VERB]() (28; 2% instances), [pl-pos/NOUN]()-[pl-pos/NOUN]() (22; 2% instances), [pl-pos/NOUN]()-[pl-pos/ADJ]() (10; 1% instances), [pl-pos/ADP]()-[pl-pos/VERB]() (7; 0% instances), [pl-pos/NOUN]()-[pl-pos/AUX]() (1; 0% instances), [pl-pos/PRON]()-[pl-pos/VERB]() (1; 0% instances), [pl-pos/X]()-[pl-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 acl	color:blue
1	W	w	ADP	prep:loc:nwok	AdpType=Prep|Case=Loc|Variant=Short	2	case	_	_
2	Lubuskiem	Lubuskie	NOUN	subst:sg:loc:n	Case=Loc|Gender=Neut|Number=Sing	3	nmod	_	_
3	dotyczy	dotyczyć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	to	to	NOUN	subst:sg:nom:n	Case=Nom|Gender=Neut|Number=Sing	3	nsubj	_	_
5	39	39	NUM	num:pl:gen:m3:congr	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	3	dobj	_	_
6	tys	tysiąc	X	brev:pun	Abbr=Yes	5	case	_	_
7	.	.	PUNCT	interp:_	_	6	punct	_	_
8	ubezpieczonych	ubezpieczyć	VERB	ppas:pl:gen:f:perf:aff	Aspect=Perf|Case=Gen|Gender=Fem|Negative=Pos|Number=Plur|VerbForm=Part|Voice=Pass	9	acl	_	_
9	kobiet	kobieta	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	5	nmod	_	_
10	w	w	ADP	prep:loc:nwok	AdpType=Prep|Case=Loc|Variant=Short	11	case	_	_
11	LRKCh	LRKCh	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	9	nmod	_	_
12	.	.	PUNCT	interp:_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 acl	color:blue
1	Zatrzymano	zatrzymać	VERB	imps:perf	Aspect=Perf|Case=Nom|Gender=Neut|Negative=Pos|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
2	dwóch	dwa	NUM	num:pl:acc:m1:rec	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur	1	dobj	_	_
3	mężczyzn	mężczyzna	NOUN	subst:pl:gen:m1	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	2	nmod	_	_
4	,	,	PUNCT	interp:_	_	7	punct	_	_
5	u	u	ADP	prep:gen	AdpType=Prep|Case=Gen	6	case	_	_
6	których	który	ADJ	adj:pl:gen:m1:pos	Animacy=Anim|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	7	iobj	_	_
7	znaleziono	znaleźć	VERB	imps:perf	Aspect=Perf|Case=Nom|Gender=Neut|Negative=Pos|Number=Sing|VerbForm=Part|Voice=Pass	2	acl	_	_
8	starodruki	starodruk	NOUN	subst:pl:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	7	dobj	_	_
9	.	.	PUNCT	interp:_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 acl	color:blue
1	Pewnie	pewnie	ADV	adv:pos	Degree=Pos	2	advmod	_	_
2	doszli	dojść	VERB	praet:pl:m1:perf	Animacy=Anim|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	0	root	_	_
3	do	do	NOUN	subst:sg:gen:n	Case=Gen|Gender=Neut|Number=Sing	2	dobj	_	_
4	wniosku	wniosek	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	_
5	,	,	PUNCT	interp:_	_	10	punct	_	_
6	że	że	SCONJ	comp:_	_	10	case	_	_
7	to	ten	ADJ	adj:sg:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	8	amod	_	_
8	wszystko	wszystko	NOUN	subst:sg:nom:n	Case=Nom|Gender=Neut|Number=Sing	10	nsubj	_	_
9	to	to	VERB	pred:_	_	10	cop	_	_
10	matrix	matrix	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	acl	_	_
11	.	.	PUNCT	interp:_	_	2	punct	_	_

~~~


