

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This relation is universal.

7556 nodes (9%) are attached to their parents as `dobj`.

6150 instances of `dobj` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.04605611434621.

The following 14 pairs of parts of speech are connected with `dobj`: [pl-pos/VERB]()-[pl-pos/NOUN]() (6278; 83% instances), [pl-pos/VERB]()-[pl-pos/PRON]() (852; 11% instances), [pl-pos/VERB]()-[pl-pos/NUM]() (261; 3% instances), [pl-pos/VERB]()-[pl-pos/ADJ]() (99; 1% instances), [pl-pos/AUX]()-[pl-pos/NOUN]() (15; 0% instances), [pl-pos/PART]()-[pl-pos/NOUN]() (14; 0% instances), [pl-pos/ADJ]()-[pl-pos/NOUN]() (13; 0% instances), [pl-pos/VERB]()-[pl-pos/X]() (8; 0% instances), [pl-pos/ADV]()-[pl-pos/NOUN]() (6; 0% instances), [pl-pos/ADJ]()-[pl-pos/PRON]() (4; 0% instances), [pl-pos/VERB]()-[pl-pos/ADP]() (3; 0% instances), [pl-pos/ADJ]()-[pl-pos/NUM]() (1; 0% instances), [pl-pos/ADV]()-[pl-pos/PRON]() (1; 0% instances), [pl-pos/NOUN]()-[pl-pos/PRON]() (1; 0% instances).


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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 dobj	color:blue
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


