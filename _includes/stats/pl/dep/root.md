

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This relation is universal.

8227 nodes (10%) are attached to their parents as `root`.

8227 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.53749848061262.

The following 8 pairs of parts of speech are connected with `root`: [pl-pos/ROOT]()-[pl-pos/VERB]() (7501; 91% instances), [pl-pos/ROOT]()-[pl-pos/ADJ]() (354; 4% instances), [pl-pos/ROOT]()-[pl-pos/NOUN]() (331; 4% instances), [pl-pos/ROOT]()-[pl-pos/AUX]() (22; 0% instances), [pl-pos/ROOT]()-[pl-pos/ADV]() (13; 0% instances), [pl-pos/ROOT]()-[pl-pos/NUM]() (4; 0% instances), [pl-pos/ROOT]()-[pl-pos/PART]() (1; 0% instances), [pl-pos/ROOT]()-[pl-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	Myślę	myśleć	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	,	,	PUNCT	interp:_	_	4	punct	_	_
3	że	że	SCONJ	comp:_	_	4	mark	_	_
4	mogą	móc	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	1	ccomp	_	_
5	.	.	PUNCT	interp:_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 5 root	color:blue
1	Ich	on	PRON	ppron3:pl:gen:m1:ter:akc:npraep	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	2	nmod	_	_
2	rodzice	rodzic	NOUN	subst:pl:nom:m1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	5	nsubj	_	_
3	nie	nie	PART	qub:_	_	5	neg	_	_
4	są	być	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	rozwiedzeni	rozwiedziony	ADJ	adj:pl:nom:m1:pos	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	0	root	_	_
6	.	.	PUNCT	interp:_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
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


