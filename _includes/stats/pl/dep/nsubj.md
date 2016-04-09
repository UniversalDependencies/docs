

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This relation is universal.

5631 nodes (7%) are attached to their parents as `nsubj`.

3982 instances of `nsubj` (71%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.41502397442728.

The following 19 pairs of parts of speech are connected with `nsubj`: [pl-pos/VERB]()-[pl-pos/NOUN]() (4315; 77% instances), [pl-pos/ADJ]()-[pl-pos/NOUN]() (335; 6% instances), [pl-pos/NOUN]()-[pl-pos/NOUN]() (266; 5% instances), [pl-pos/VERB]()-[pl-pos/ADJ]() (262; 5% instances), [pl-pos/VERB]()-[pl-pos/NUM]() (196; 3% instances), [pl-pos/VERB]()-[pl-pos/PRON]() (179; 3% instances), [pl-pos/NOUN]()-[pl-pos/PRON]() (15; 0% instances), [pl-pos/ADJ]()-[pl-pos/PRON]() (12; 0% instances), [pl-pos/AUX]()-[pl-pos/NOUN]() (10; 0% instances), [pl-pos/VERB]()-[pl-pos/X]() (9; 0% instances), [pl-pos/ADJ]()-[pl-pos/ADJ]() (8; 0% instances), [pl-pos/NOUN]()-[pl-pos/ADJ]() (6; 0% instances), [pl-pos/ADJ]()-[pl-pos/NUM]() (5; 0% instances), [pl-pos/NOUN]()-[pl-pos/NUM]() (4; 0% instances), [pl-pos/AUX]()-[pl-pos/NUM]() (3; 0% instances), [pl-pos/NUM]()-[pl-pos/NOUN]() (3; 0% instances), [pl-pos/ADV]()-[pl-pos/NOUN]() (1; 0% instances), [pl-pos/NOUN]()-[pl-pos/X]() (1; 0% instances), [pl-pos/PRON]()-[pl-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nsubj	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj	color:blue
1	Ich	on	PRON	ppron3:pl:gen:m1:ter:akc:npraep	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	2	nmod	_	_
2	rodzice	rodzic	NOUN	subst:pl:nom:m1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	5	nsubj	_	_
3	nie	nie	PART	qub:_	_	5	neg	_	_
4	są	być	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	rozwiedzeni	rozwiedziony	ADJ	adj:pl:nom:m1:pos	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	0	root	_	_
6	.	.	PUNCT	interp:_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 nsubj	color:blue
1	Opisane	opisać	VERB	ppas:pl:nom:f:perf:aff	Aspect=Perf|Case=Nom|Gender=Fem|Negative=Pos|Number=Plur|VerbForm=Part|Voice=Pass	3	acl	_	_
2	tu	tu	ADV	adv:_	_	1	advmod	_	_
3	postawy	postawa	NOUN	subst:pl:nom:f	Case=Nom|Gender=Fem|Number=Plur	0	root	_	_
4	to	to	VERB	pred:_	_	3	cop	_	_
5	wady	wada	NOUN	subst:pl:nom:f	Case=Nom|Gender=Fem|Number=Plur	3	nsubj	_	_
6	ludzkie	ludzki	ADJ	adj:pl:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	5	amod	_	_
7	znane	znany	ADJ	adj:pl:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	5	amod	_	_
8	od	od	ADP	prep:gen:nwok	AdpType=Prep|Case=Gen|Variant=Short	9	case	_	_
9	pokoleń	pokolenie	NOUN	subst:pl:gen:n	Case=Gen|Gender=Neut|Number=Plur	7	nmod	_	_
10	.	.	PUNCT	interp:_	_	3	punct	_	_

~~~


