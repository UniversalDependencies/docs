

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This relation is universal.

1149 nodes (1%) are attached to their parents as `neg`.

1144 instances of `neg` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.1053089643168.

The following 4 pairs of parts of speech are connected with `neg`: [pl-pos/VERB]()-[pl-pos/PART]() (1037; 90% instances), [pl-pos/ADJ]()-[pl-pos/PART]() (39; 3% instances), [pl-pos/AUX]()-[pl-pos/PART]() (39; 3% instances), [pl-pos/NOUN]()-[pl-pos/PART]() (34; 3% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 neg	color:blue
1	Nie	nie	PART	qub:_	_	2	neg	_	_
2	wiem	wiedzieć	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	,	,	PUNCT	interp:_	_	2	punct	_	_
4	naprawdę	naprawdę	ADV	adv:pos	Degree=Pos	6	advmod	_	_
5	nie	nie	PART	qub:_	_	6	neg	_	_
6	wiem	wiedzieć	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	2	conj	_	_
7	,	,	PUNCT	interp:_	_	10	punct	_	_
8	jak	jak	ADV	adv:_	_	10	advmod	_	_
9	się	się	PRON	qub:_	PronType=Prs|Reflex=Yes	10	expl	_	_
10	zachowają	zachować	VERB	fin:pl:ter:perf	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	ccomp	_	_
11	.	.	PUNCT	interp:_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 neg	color:blue
1	Na	na	ADP	prep:acc	AdpType=Prep|Case=Acc	2	case	_	_
2	siłę	siła	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	4	nmod	_	_
3	nikogo	nikt	NOUN	subst:sg:gen:m1	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	4	dobj	_	_
4	zatrzymywać	zatrzymywać	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf	0	root	_	_
5	nie	nie	PART	qub:_	_	6	neg	_	_
6	będziemy	być	AUX	bedzie:pl:pri:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin	4	aux	_	_
7	.	.	PUNCT	interp:_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 neg	color:blue
1	Ich	on	PRON	ppron3:pl:gen:m1:ter:akc:npraep	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	2	nmod	_	_
2	rodzice	rodzic	NOUN	subst:pl:nom:m1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	5	nsubj	_	_
3	nie	nie	PART	qub:_	_	5	neg	_	_
4	są	być	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	rozwiedzeni	rozwiedziony	ADJ	adj:pl:nom:m1:pos	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	0	root	_	_
6	.	.	PUNCT	interp:_	_	5	punct	_	_

~~~


