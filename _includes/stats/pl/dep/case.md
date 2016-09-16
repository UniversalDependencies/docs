

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This relation is universal.

8855 nodes (11%) are attached to their parents as `case`.

8326 instances of `case` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.27995482778091.

The following 46 pairs of parts of speech are connected with `case`: [pl-pos/NOUN]()-[pl-pos/ADP]() (6339; 72% instances), [pl-pos/PROPN]()-[pl-pos/ADP]() (751; 8% instances), [pl-pos/PRON]()-[pl-pos/ADP]() (705; 8% instances), [pl-pos/NUM]()-[pl-pos/ADP]() (203; 2% instances), [pl-pos/ADJ]()-[pl-pos/ADP]() (132; 1% instances), [pl-pos/PART]()-[pl-pos/ADP]() (107; 1% instances), [pl-pos/ADP]()-[pl-pos/NOUN]() (86; 1% instances), [pl-pos/NOUN]()-[pl-pos/NOUN]() (58; 1% instances), [pl-pos/NUM]()-[pl-pos/X]() (51; 1% instances), [pl-pos/ADJ]()-[pl-pos/SCONJ]() (50; 1% instances), [pl-pos/ADV]()-[pl-pos/ADP]() (42; 0% instances), [pl-pos/NOUN]()-[pl-pos/SCONJ]() (40; 0% instances), [pl-pos/ADP]()-[pl-pos/PRON]() (38; 0% instances), [pl-pos/PUNCT]()-[pl-pos/ADJ]() (36; 0% instances), [pl-pos/X]()-[pl-pos/ADP]() (34; 0% instances), [pl-pos/NUM]()-[pl-pos/NOUN]() (30; 0% instances), [pl-pos/ADP]()-[pl-pos/ADJ]() (25; 0% instances), [pl-pos/ADP]()-[pl-pos/ADV]() (22; 0% instances), [pl-pos/NOUN]()-[pl-pos/PART]() (20; 0% instances), [pl-pos/NOUN]()-[pl-pos/ADV]() (14; 0% instances), [pl-pos/PUNCT]()-[pl-pos/NUM]() (10; 0% instances), [pl-pos/PUNCT]()-[pl-pos/NOUN]() (8; 0% instances), [pl-pos/ADJ]()-[pl-pos/NOUN]() (5; 0% instances), [pl-pos/CONJ]()-[pl-pos/ADV]() (5; 0% instances), [pl-pos/ADV]()-[pl-pos/ADV]() (4; 0% instances), [pl-pos/CONJ]()-[pl-pos/CONJ]() (4; 0% instances), [pl-pos/PROPN]()-[pl-pos/NOUN]() (4; 0% instances), [pl-pos/PUNCT]()-[pl-pos/PROPN]() (4; 0% instances), [pl-pos/PRON]()-[pl-pos/SCONJ]() (3; 0% instances), [pl-pos/PROPN]()-[pl-pos/PART]() (3; 0% instances), [pl-pos/X]()-[pl-pos/NOUN]() (3; 0% instances), [pl-pos/ADV]()-[pl-pos/SCONJ]() (2; 0% instances), [pl-pos/DET]()-[pl-pos/ADP]() (2; 0% instances), [pl-pos/NOUN]()-[pl-pos/X]() (2; 0% instances), [pl-pos/PRON]()-[pl-pos/ADV]() (2; 0% instances), [pl-pos/ADP]()-[pl-pos/ADP]() (1; 0% instances), [pl-pos/ADP]()-[pl-pos/PART]() (1; 0% instances), [pl-pos/CONJ]()-[pl-pos/PART]() (1; 0% instances), [pl-pos/NOUN]()-[pl-pos/ADJ]() (1; 0% instances), [pl-pos/NOUN]()-[pl-pos/CONJ]() (1; 0% instances), [pl-pos/NOUN]()-[pl-pos/PRON]() (1; 0% instances), [pl-pos/NUM]()-[pl-pos/ADV]() (1; 0% instances), [pl-pos/PRON]()-[pl-pos/PART]() (1; 0% instances), [pl-pos/PROPN]()-[pl-pos/ADV]() (1; 0% instances), [pl-pos/PROPN]()-[pl-pos/SCONJ]() (1; 0% instances), [pl-pos/X]()-[pl-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 case	color:blue
1	Jerzy	Jerzy	PROPN	subst:sg:nom:m1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
2	badawczym	badawczy	ADJ	adj:sg:inst:m3:pos	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	3	amod	_	_
3	wzrokiem	wzrok	NOUN	subst:sg:inst:m3	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	4	nmod	_	_
4	spojrzał	spojrzeć	VERB	praet:sg:m1:perf	Animacy=Anim|Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
5	na	na	ADP	prep:acc	AdpType=Prep|Case=Acc	6	case	_	_
6	kartę	karta	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	4	dobj	_	_
7	.	.	PUNCT	interp:_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 case	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 case	color:blue
1	Może	może	PART	qub:_	_	4	advmod	_	_
2	coraz	coraz	ADV	adv:_	_	3	advmod	_	_
3	częściej	często	ADV	adv:com	_	4	advmod	_	_
4	mówi	mówić	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	o	o	ADP	prep:loc	AdpType=Prep|Case=Loc	6	case	_	_
6	niej	on	PRON	ppron3:sg:loc:f:ter:akc:praep	Case=Loc|Gender=Fem|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs|Variant=Long	4	dobj	_	_
7	.	.	PUNCT	interp:_	_	4	punct	_	_

~~~


