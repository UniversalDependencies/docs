

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This relation is universal.

965 nodes (1%) are attached to their parents as `cop`.

730 instances of `cop` (76%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.8.

The following 12 pairs of parts of speech are connected with `cop`: [pl-pos/ADJ]()-[pl-pos/VERB]() (441; 46% instances), [pl-pos/NOUN]()-[pl-pos/VERB]() (441; 46% instances), [pl-pos/VERB]()-[pl-pos/VERB]() (23; 2% instances), [pl-pos/NOUN]()-[pl-pos/AUX]() (21; 2% instances), [pl-pos/ADJ]()-[pl-pos/AUX]() (17; 2% instances), [pl-pos/ADV]()-[pl-pos/VERB]() (8; 1% instances), [pl-pos/NUM]()-[pl-pos/VERB]() (5; 1% instances), [pl-pos/ADV]()-[pl-pos/AUX]() (3; 0% instances), [pl-pos/PRON]()-[pl-pos/VERB]() (3; 0% instances), [pl-pos/NOUN]()-[pl-pos/NOUN]() (1; 0% instances), [pl-pos/NUM]()-[pl-pos/AUX]() (1; 0% instances), [pl-pos/X]()-[pl-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cop	color:blue
1	Ich	on	PRON	ppron3:pl:gen:m1:ter:akc:npraep	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	2	nmod	_	_
2	rodzice	rodzic	NOUN	subst:pl:nom:m1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	5	nsubj	_	_
3	nie	nie	PART	qub:_	_	5	neg	_	_
4	są	być	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	rozwiedzeni	rozwiedziony	ADJ	adj:pl:nom:m1:pos	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	0	root	_	_
6	.	.	PUNCT	interp:_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 cop	color:blue
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


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 cop	color:blue
1	Zadziwiająca	zadziwiać	VERB	pact:sg:nom:f:imperf:aff	Aspect=Imp|Case=Nom|Gender=Fem|Negative=Pos|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	0	root	_	_
2	była	być	VERB	praet:sg:f:imperf	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	1	cop	_	_
3	koncepcja	koncepcja	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	1	nsubj	_	_
4	dzielenia	dzielenie	NOUN	subst:sg:gen:n	Case=Gen|Gender=Neut|Number=Sing	3	nmod	_	_
5	,	,	PUNCT	interp:_	_	4	punct	_	_
6	a	a	CONJ	conj:_	_	4	cc	_	_
7	nie	nie	PART	qub:_	_	4	case	_	_
8	wyboru	wybór	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	conj	_	_
9	.	.	PUNCT	interp:_	_	1	punct	_	_

~~~


