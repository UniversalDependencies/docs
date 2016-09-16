

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This relation is universal.

757 nodes (1%) are attached to their parents as `ccomp`.

749 instances of `ccomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.41743725231176.

The following 10 pairs of parts of speech are connected with `ccomp`: [pl-pos/VERB]()-[pl-pos/VERB]() (648; 86% instances), [pl-pos/VERB]()-[pl-pos/ADJ]() (44; 6% instances), [pl-pos/VERB]()-[pl-pos/NOUN]() (37; 5% instances), [pl-pos/VERB]()-[pl-pos/PRON]() (10; 1% instances), [pl-pos/ADJ]()-[pl-pos/VERB]() (7; 1% instances), [pl-pos/VERB]()-[pl-pos/AUX]() (6; 1% instances), [pl-pos/VERB]()-[pl-pos/PROPN]() (2; 0% instances), [pl-pos/ADJ]()-[pl-pos/NOUN]() (1; 0% instances), [pl-pos/PART]()-[pl-pos/VERB]() (1; 0% instances), [pl-pos/VERB]()-[pl-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 ccomp	color:blue
1	Myślę	myśleć	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	,	,	PUNCT	interp:_	_	4	punct	_	_
3	że	że	SCONJ	comp:_	_	4	mark	_	_
4	mogą	móc	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	1	ccomp	_	_
5	.	.	PUNCT	interp:_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 ccomp	color:blue
1	Odpisał	odpisać	VERB	praet:sg:m1:perf	Animacy=Anim|Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
2	em	być	AUX	aglt:sg:pri:imperf:wok	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|Variant=Long|VerbForm=Fin	1	aux	_	_
3	więc	więc	CONJ	conj:_	_	1	advmod	_	_
4	,	,	PUNCT	interp:_	_	9	punct	_	_
5	że	że	SCONJ	comp:_	_	9	case	_	_
6	nie	nie	PART	qub:_	_	9	neg	_	_
7	jest	być	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
8	to	to	PRON	subst:sg:nom:n	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	9	nsubj	_	_
9	zgodne	zgodny	ADJ	adj:sg:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	1	ccomp	_	_
10	z	z	ADP	prep:inst:nwok	AdpType=Prep|Case=Ins|Variant=Short	11	case	_	_
11	prawdą	prawda	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	9	nmod	_	_
12	.	.	PUNCT	interp:_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 ccomp	color:blue
1	–	–	PUNCT	interp:_	_	2	punct	_	_
2	Powiedz	powiedzieć	VERB	impt:sg:sec:perf	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	0	root	_	_
3	,	,	PUNCT	interp:_	_	6	punct	_	_
4	kto	kto	PRON	subst:sg:nom:m1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|PronType=Int,Rel	6	nsubj	_	_
5	jest	być	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
6	królową	królowa	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	2	ccomp	_	_
7	loteryjki	loteryjka	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	6	nmod	_	_
8	?	?	PUNCT	interp:_	_	2	punct	_	_

~~~


