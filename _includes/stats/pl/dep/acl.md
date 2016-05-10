

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This relation is universal.

1215 nodes (1%) are attached to their parents as `acl`.

804 instances of `acl` (66%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.88971193415638.

The following 12 pairs of parts of speech are connected with `acl`: [pl-pos/NOUN]()-[pl-pos/VERB]() (1096; 90% instances), [pl-pos/PROPN]()-[pl-pos/VERB]() (52; 4% instances), [pl-pos/NUM]()-[pl-pos/VERB]() (21; 2% instances), [pl-pos/NOUN]()-[pl-pos/NOUN]() (20; 2% instances), [pl-pos/PRON]()-[pl-pos/VERB]() (11; 1% instances), [pl-pos/NOUN]()-[pl-pos/ADJ]() (7; 1% instances), [pl-pos/NOUN]()-[pl-pos/PRON]() (3; 0% instances), [pl-pos/ADP]()-[pl-pos/VERB]() (1; 0% instances), [pl-pos/NOUN]()-[pl-pos/AUX]() (1; 0% instances), [pl-pos/PRON]()-[pl-pos/NOUN]() (1; 0% instances), [pl-pos/PROPN]()-[pl-pos/ADJ]() (1; 0% instances), [pl-pos/X]()-[pl-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 acl	color:blue
1	W	w	ADP	prep:loc:nwok	AdpType=Prep|Case=Loc|Variant=Short	2	case	_	_
2	Lubuskiem	Lubuskie	PROPN	subst:sg:loc:n	Case=Loc|Gender=Neut|Number=Sing	3	nmod	_	_
3	dotyczy	dotyczyć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	to	to	PRON	subst:sg:nom:n	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	3	nsubj	_	_
5	39	39	NUM	num:pl:gen:m3:congr	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	3	dobj	_	_
6	tys	tysiąc	X	brev:pun	Abbr=Yes	5	case	_	_
7	.	.	PUNCT	interp:_	_	6	punct	_	_
8	ubezpieczonych	ubezpieczyć	VERB	ppas:pl:gen:f:perf:aff	Aspect=Perf|Case=Gen|Gender=Fem|Negative=Pos|Number=Plur|VerbForm=Part|Voice=Pass	9	acl	_	_
9	kobiet	kobieta	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	5	nmod	_	_
10	w	w	ADP	prep:loc:nwok	AdpType=Prep|Case=Loc|Variant=Short	11	case	_	_
11	LRKCh	LRKCh	PROPN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	9	nmod	_	_
12	.	.	PUNCT	interp:_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 acl	color:blue
1	Właścicielką	właścicielka	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	0	root	_	_
2	bagażu	bagaż	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	1	nmod	_	_
3	była	być	VERB	praet:sg:f:imperf	Aspect=Imp|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	1	cop	_	_
4	Polka	Polka	PROPN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	1	nsubj	_	_
5	,	,	PUNCT	interp:_	_	7	punct	_	_
6	która	który	PRON	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|PronType=Int,Rel	7	nsubj	_	_
7	wróciła	wrócić	VERB	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	4	acl	_	_
8	do	do	ADP	prep:gen	AdpType=Prep|Case=Gen	9	case	_	_
9	kraju	kraj	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	7	dobj	_	_
10	z	z	ADP	prep:gen:nwok	AdpType=Prep|Case=Gen|Variant=Short	11	case	_	_
11	USA	USA	PROPN	subst:pl:gen:n	Case=Gen|Gender=Neut|Number=Plur	7	nmod	_	_
12	.	.	PUNCT	interp:_	_	1	punct	_	_

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
6	których	który	PRON	adj:pl:gen:m1:pos	Animacy=Anim|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|PronType=Int,Rel	7	iobj	_	_
7	znaleziono	znaleźć	VERB	imps:perf	Aspect=Perf|Case=Nom|Gender=Neut|Negative=Pos|Number=Sing|VerbForm=Part|Voice=Pass	2	acl	_	_
8	starodruki	starodruk	NOUN	subst:pl:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	7	dobj	_	_
9	.	.	PUNCT	interp:_	_	1	punct	_	_

~~~


