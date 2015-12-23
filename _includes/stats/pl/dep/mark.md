

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This relation is universal.

1321 nodes (2%) are attached to their parents as `mark`.

1307 instances of `mark` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.50567751703255.

The following 9 pairs of parts of speech are connected with `mark`: [pl-pos/VERB]()-[pl-pos/SCONJ]() (967; 73% instances), [pl-pos/VERB]()-[pl-pos/ADP]() (299; 23% instances), [pl-pos/ADJ]()-[pl-pos/SCONJ]() (24; 2% instances), [pl-pos/AUX]()-[pl-pos/SCONJ]() (8; 1% instances), [pl-pos/NOUN]()-[pl-pos/SCONJ]() (8; 1% instances), [pl-pos/VERB]()-[pl-pos/NOUN]() (8; 1% instances), [pl-pos/VERB]()-[pl-pos/PART]() (4; 0% instances), [pl-pos/ADV]()-[pl-pos/SCONJ]() (2; 0% instances), [pl-pos/VERB]()-[pl-pos/CONJ]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 mark	color:blue
1	Myślę	myśleć	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	,	,	PUNCT	interp:_	_	4	punct	_	_
3	że	że	SCONJ	comp:_	_	4	mark	_	_
4	mogą	móc	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	1	ccomp	_	_
5	.	.	PUNCT	interp:_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 mark	color:blue
1	Zmusił	zmusić	VERB	praet:sg:m1:perf	Animacy=Anim|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
2	się	się	PRON	qub:_	PronType=Prs|Reflex=Yes	1	expl	_	_
3	do	do	ADP	prep:gen	AdpType=Prep|Case=Gen	4	mark	_	_
4	obejrzenia	obejrzeć	VERB	ger:sg:gen:n:perf:aff	Aspect=Perf|Case=Gen|Gender=Neut|Negative=Pos|Number=Sing|VerbForm=Ger	1	ccomp	_	_
5	.	.	PUNCT	interp:_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 mark	color:blue
1	Jeżeli	jeżeli	SCONJ	comp:_	_	5	mark	_	_
2	twój	twój	ADJ	adj:sg:nom:m1:pos	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	3	amod	_	_
3	gość	gość	NOUN	subst:sg:nom:m1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	_
4	jest	być	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	pewny	pewny	ADJ	adj:sg:nom:m1:pos	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	_
6	?	?	PUNCT	interp:_	_	5	punct	_	_

~~~


