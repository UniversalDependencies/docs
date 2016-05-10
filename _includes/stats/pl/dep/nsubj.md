

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This relation is universal.

5708 nodes (7%) are attached to their parents as `nsubj`.

4020 instances of `nsubj` (70%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.43097407147863.

The following 29 pairs of parts of speech are connected with `nsubj`: [pl-pos/VERB]()-[pl-pos/NOUN]() (3380; 59% instances), [pl-pos/VERB]()-[pl-pos/PRON]() (736; 13% instances), [pl-pos/VERB]()-[pl-pos/PROPN]() (655; 11% instances), [pl-pos/ADJ]()-[pl-pos/NOUN]() (272; 5% instances), [pl-pos/NOUN]()-[pl-pos/NOUN]() (228; 4% instances), [pl-pos/VERB]()-[pl-pos/NUM]() (179; 3% instances), [pl-pos/ADJ]()-[pl-pos/PRON]() (54; 1% instances), [pl-pos/NOUN]()-[pl-pos/PRON]() (35; 1% instances), [pl-pos/PRON]()-[pl-pos/NOUN]() (35; 1% instances), [pl-pos/NOUN]()-[pl-pos/PROPN]() (33; 1% instances), [pl-pos/ADJ]()-[pl-pos/PROPN]() (25; 0% instances), [pl-pos/VERB]()-[pl-pos/ADJ]() (25; 0% instances), [pl-pos/AUX]()-[pl-pos/NOUN]() (9; 0% instances), [pl-pos/VERB]()-[pl-pos/X]() (9; 0% instances), [pl-pos/ADJ]()-[pl-pos/NUM]() (5; 0% instances), [pl-pos/NOUN]()-[pl-pos/NUM]() (4; 0% instances), [pl-pos/AUX]()-[pl-pos/NUM]() (3; 0% instances), [pl-pos/PRON]()-[pl-pos/PRON]() (3; 0% instances), [pl-pos/PRON]()-[pl-pos/PROPN]() (3; 0% instances), [pl-pos/PROPN]()-[pl-pos/NOUN]() (3; 0% instances), [pl-pos/PROPN]()-[pl-pos/PROPN]() (3; 0% instances), [pl-pos/ADJ]()-[pl-pos/ADJ]() (2; 0% instances), [pl-pos/ADV]()-[pl-pos/PRON]() (1; 0% instances), [pl-pos/AUX]()-[pl-pos/PRON]() (1; 0% instances), [pl-pos/AUX]()-[pl-pos/PROPN]() (1; 0% instances), [pl-pos/NOUN]()-[pl-pos/X]() (1; 0% instances), [pl-pos/NUM]()-[pl-pos/NOUN]() (1; 0% instances), [pl-pos/NUM]()-[pl-pos/PROPN]() (1; 0% instances), [pl-pos/PROPN]()-[pl-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Strzały	strzał	NOUN	subst:pl:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	2	nsubj	_	_
2	milkną	milknąć	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	.	.	PUNCT	interp:_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nsubj	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj	color:blue
1	Jerzy	Jerzy	PROPN	subst:sg:nom:m1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
2	badawczym	badawczy	ADJ	adj:sg:inst:m3:pos	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	3	amod	_	_
3	wzrokiem	wzrok	NOUN	subst:sg:inst:m3	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	4	nmod	_	_
4	spojrzał	spojrzeć	VERB	praet:sg:m1:perf	Animacy=Anim|Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
5	na	na	ADP	prep:acc	AdpType=Prep|Case=Acc	6	case	_	_
6	kartę	karta	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	4	dobj	_	_
7	.	.	PUNCT	interp:_	_	4	punct	_	_

~~~


