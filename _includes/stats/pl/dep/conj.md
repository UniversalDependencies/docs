

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This relation is universal.

2681 nodes (3%) are attached to their parents as `conj`.

2681 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.00074599030213.

The following 27 pairs of parts of speech are connected with `conj`: [pl-pos/VERB]()-[pl-pos/VERB]() (1297; 48% instances), [pl-pos/NOUN]()-[pl-pos/NOUN]() (917; 34% instances), [pl-pos/ADJ]()-[pl-pos/ADJ]() (187; 7% instances), [pl-pos/ADJ]()-[pl-pos/VERB]() (79; 3% instances), [pl-pos/VERB]()-[pl-pos/NOUN]() (48; 2% instances), [pl-pos/NOUN]()-[pl-pos/VERB]() (45; 2% instances), [pl-pos/VERB]()-[pl-pos/ADJ]() (45; 2% instances), [pl-pos/NUM]()-[pl-pos/NUM]() (18; 1% instances), [pl-pos/NUM]()-[pl-pos/NOUN]() (7; 0% instances), [pl-pos/VERB]()-[pl-pos/AUX]() (6; 0% instances), [pl-pos/PRON]()-[pl-pos/NOUN]() (5; 0% instances), [pl-pos/NOUN]()-[pl-pos/NUM]() (4; 0% instances), [pl-pos/ADJ]()-[pl-pos/NOUN]() (3; 0% instances), [pl-pos/X]()-[pl-pos/X]() (3; 0% instances), [pl-pos/AUX]()-[pl-pos/VERB]() (2; 0% instances), [pl-pos/NOUN]()-[pl-pos/ADJ]() (2; 0% instances), [pl-pos/NOUN]()-[pl-pos/PRON]() (2; 0% instances), [pl-pos/PRON]()-[pl-pos/PRON]() (2; 0% instances), [pl-pos/ADJ]()-[pl-pos/AUX]() (1; 0% instances), [pl-pos/ADJ]()-[pl-pos/SCONJ]() (1; 0% instances), [pl-pos/ADV]()-[pl-pos/VERB]() (1; 0% instances), [pl-pos/NOUN]()-[pl-pos/ADV]() (1; 0% instances), [pl-pos/PART]()-[pl-pos/VERB]() (1; 0% instances), [pl-pos/VERB]()-[pl-pos/ADV]() (1; 0% instances), [pl-pos/VERB]()-[pl-pos/NUM]() (1; 0% instances), [pl-pos/VERB]()-[pl-pos/SCONJ]() (1; 0% instances), [pl-pos/VERB]()-[pl-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 conj	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 conj	color:blue
1	Wyczuwało	wyczuwać	VERB	praet:sg:n:imperf	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
2	się	się	PRON	qub:_	PronType=Prs|Reflex=Yes	1	expl	_	_
3	napięcie	napięcie	NOUN	subst:sg:acc:n	Case=Acc|Gender=Neut|Number=Sing	1	dobj	_	_
4	,	,	PUNCT	interp:_	_	3	punct	_	_
5	oczekiwanie	oczekiwanie	NOUN	subst:sg:acc:n	Case=Acc|Gender=Neut|Number=Sing	3	conj	_	_
6	.	.	PUNCT	interp:_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 conj	color:blue
1	-	-	PUNCT	interp:_	_	3	punct	_	_
2	Jakub	Jakub	NOUN	subst:sg:nom:m1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
3	starał	starać	VERB	praet:sg:m1:imperf	Animacy=Anim|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
4	się	się	PRON	qub:_	PronType=Prs|Reflex=Yes	3	expl	_	_
5	być	być	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf	6	cop	_	_
6	spokojny	spokojny	ADJ	adj:sg:nom:m1:pos	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	3	xcomp	_	_
7	i	i	CONJ	conj:_	_	6	cc	_	_
8	uprzejmy	uprzejmy	ADJ	adj:sg:nom:m1:pos	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	6	conj	_	_
9	.	.	PUNCT	interp:_	_	3	punct	_	_

~~~


