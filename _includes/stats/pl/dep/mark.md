

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This relation is universal.

1026 nodes (1%) are attached to their parents as `mark`.

1012 instances of `mark` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.91325536062378.

The following 10 pairs of parts of speech are connected with `mark`: [pl-pos/VERB]()-[pl-pos/SCONJ]() (966; 94% instances), [pl-pos/ADJ]()-[pl-pos/SCONJ]() (24; 2% instances), [pl-pos/VERB]()-[pl-pos/ADP]() (11; 1% instances), [pl-pos/AUX]()-[pl-pos/SCONJ]() (8; 1% instances), [pl-pos/NOUN]()-[pl-pos/SCONJ]() (7; 1% instances), [pl-pos/VERB]()-[pl-pos/PART]() (4; 0% instances), [pl-pos/ADV]()-[pl-pos/SCONJ]() (2; 0% instances), [pl-pos/VERB]()-[pl-pos/NOUN]() (2; 0% instances), [pl-pos/PROPN]()-[pl-pos/SCONJ]() (1; 0% instances), [pl-pos/VERB]()-[pl-pos/CONJ]() (1; 0% instances).


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


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 mark	color:blue
1	Policja	policja	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	_	_
2	odnotowała	odnotować	VERB	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
3	kilka	kilka	DET	num:pl:acc:m3:rec	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|NumType=Card|PronType=Ind	4	det:numgov	_	_
4	napadów	napad	NOUN	subst:pl:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	2	dobj	_	_
5	na	na	ADP	prep:acc	AdpType=Prep|Case=Acc	6	mark	_	_
6	kwestujących	kwestować	VERB	pact:pl:acc:m1:imperf:aff	Animacy=Anim|Aspect=Imp|Case=Acc|Gender=Masc|Negative=Pos|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Act	4	acl	_	_
7	.	.	PUNCT	interp:_	_	2	punct	_	_

~~~


