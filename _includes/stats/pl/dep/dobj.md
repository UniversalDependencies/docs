

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This relation is universal.

7672 nodes (9%) are attached to their parents as `dobj`.

6251 instances of `dobj` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.04340458811262.

The following 22 pairs of parts of speech are connected with `dobj`: [pl-pos/VERB]()-[pl-pos/NOUN]() (5497; 72% instances), [pl-pos/VERB]()-[pl-pos/PRON]() (1251; 16% instances), [pl-pos/VERB]()-[pl-pos/PROPN]() (292; 4% instances), [pl-pos/NOUN]()-[pl-pos/NOUN]() (277; 4% instances), [pl-pos/VERB]()-[pl-pos/NUM]() (235; 3% instances), [pl-pos/NOUN]()-[pl-pos/PRON]() (26; 0% instances), [pl-pos/VERB]()-[pl-pos/ADJ]() (19; 0% instances), [pl-pos/ADJ]()-[pl-pos/NOUN]() (13; 0% instances), [pl-pos/AUX]()-[pl-pos/NOUN]() (13; 0% instances), [pl-pos/PART]()-[pl-pos/NOUN]() (11; 0% instances), [pl-pos/NOUN]()-[pl-pos/PROPN]() (8; 0% instances), [pl-pos/VERB]()-[pl-pos/X]() (7; 0% instances), [pl-pos/ADV]()-[pl-pos/NOUN]() (5; 0% instances), [pl-pos/ADJ]()-[pl-pos/PRON]() (4; 0% instances), [pl-pos/VERB]()-[pl-pos/ADP]() (3; 0% instances), [pl-pos/ADV]()-[pl-pos/PRON]() (2; 0% instances), [pl-pos/AUX]()-[pl-pos/PROPN]() (2; 0% instances), [pl-pos/NOUN]()-[pl-pos/NUM]() (2; 0% instances), [pl-pos/PART]()-[pl-pos/PRON]() (2; 0% instances), [pl-pos/ADJ]()-[pl-pos/NUM]() (1; 0% instances), [pl-pos/NOUN]()-[pl-pos/X]() (1; 0% instances), [pl-pos/PART]()-[pl-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 dobj	color:blue
1	Niestety	niestety	PART	qub:_	_	3	advmod	_	_
2	nie	nie	PART	qub:_	_	3	neg	_	_
3	możemy	móc	VERB	fin:pl:pri:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	brać	brać	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf	3	xcomp	_	_
5	w	w	ADP	prep:loc:nwok	AdpType=Prep|Case=Loc|Variant=Short	6	case	_	_
6	niej	on	PRON	ppron3:sg:loc:f:ter:akc:praep	Case=Loc|Gender=Fem|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs|Variant=Long	7	nmod	_	_
7	udziału	udział	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	dobj	_	_
8	.	.	PUNCT	interp:_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 dobj	color:blue
1	Może	może	PART	qub:_	_	4	advmod	_	_
2	będą	być	AUX	bedzie:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	4	aux	_	_
3	mi	ja	PRON	ppron12:sg:dat:m1:pri:nakc	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing|Person=1|PronType=Prs|Variant=Short	4	dobj	_	_
4	dokuczać	dokuczać	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf	0	root	_	_
5	?	?	PUNCT	interp:_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 dobj	color:blue
1	Ostatecznie	ostatecznie	ADV	adv:pos	Degree=Pos	2	advmod	_	_
2	ma	mieć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	on	on	PRON	ppron3:sg:nom:m3:ter:akc:npraep	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	2	nsubj	_	_
4	stanąć	stanąć	VERB	inf:perf	Aspect=Perf|VerbForm=Inf	2	xcomp	_	_
5	w	w	ADP	prep:loc:nwok	AdpType=Prep|Case=Loc|Variant=Short	6	case	_	_
6	Popielowie	Popielów	PROPN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	4	dobj	_	_
7	.	.	PUNCT	interp:_	_	2	punct	_	_

~~~


