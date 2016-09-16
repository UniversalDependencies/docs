

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This relation is universal.

965 nodes (1%) are attached to their parents as `cop`.

730 instances of `cop` (76%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.80103626943005.

The following 16 pairs of parts of speech are connected with `cop`: [pl-pos/ADJ]()-[pl-pos/VERB]() (423; 44% instances), [pl-pos/NOUN]()-[pl-pos/VERB]() (403; 42% instances), [pl-pos/PRON]()-[pl-pos/VERB]() (52; 5% instances), [pl-pos/NOUN]()-[pl-pos/AUX]() (21; 2% instances), [pl-pos/ADJ]()-[pl-pos/AUX]() (17; 2% instances), [pl-pos/VERB]()-[pl-pos/VERB]() (15; 2% instances), [pl-pos/PROPN]()-[pl-pos/VERB]() (12; 1% instances), [pl-pos/ADV]()-[pl-pos/VERB]() (8; 1% instances), [pl-pos/ADV]()-[pl-pos/AUX]() (3; 0% instances), [pl-pos/NOUN]()-[pl-pos/NOUN]() (3; 0% instances), [pl-pos/NUM]()-[pl-pos/VERB]() (3; 0% instances), [pl-pos/ADJ]()-[pl-pos/NOUN]() (1; 0% instances), [pl-pos/NOUN]()-[pl-pos/PRON]() (1; 0% instances), [pl-pos/NUM]()-[pl-pos/AUX]() (1; 0% instances), [pl-pos/VERB]()-[pl-pos/NOUN]() (1; 0% instances), [pl-pos/X]()-[pl-pos/VERB]() (1; 0% instances).


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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cop	color:blue
1	Jest	być	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
2	że	że	PART	qub:_	_	3	advmod	_	_
3	to	to	PRON	subst:sg:nom:n	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	0	root	_	_
4	próbka	próbka	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
5	matematycznej	matematyczny	ADJ	adj:sg:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	6	amod	_	_
6	ścisłości	ścisłość	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	4	nmod	_	_
7	i	i	CONJ	conj:_	_	6	cc	_	_
8	pewności	pewność	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	6	conj	_	_
9	?	?	PUNCT	interp:_	_	3	punct	_	_

~~~


