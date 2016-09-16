

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This relation is universal.

422 nodes (1%) are attached to their parents as `appos`.

422 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.64928909952607.

The following 15 pairs of parts of speech are connected with `appos`: [pl-pos/NOUN]()-[pl-pos/PROPN]() (222; 53% instances), [pl-pos/NOUN]()-[pl-pos/NOUN]() (110; 26% instances), [pl-pos/PROPN]()-[pl-pos/NOUN]() (23; 5% instances), [pl-pos/X]()-[pl-pos/PROPN]() (21; 5% instances), [pl-pos/X]()-[pl-pos/ADJ]() (19; 5% instances), [pl-pos/NOUN]()-[pl-pos/ADJ]() (7; 2% instances), [pl-pos/NOUN]()-[pl-pos/X]() (6; 1% instances), [pl-pos/PRON]()-[pl-pos/NOUN]() (4; 1% instances), [pl-pos/NOUN]()-[pl-pos/NUM]() (3; 1% instances), [pl-pos/X]()-[pl-pos/NOUN]() (2; 0% instances), [pl-pos/NOUN]()-[pl-pos/PRON]() (1; 0% instances), [pl-pos/PRON]()-[pl-pos/PROPN]() (1; 0% instances), [pl-pos/PROPN]()-[pl-pos/NUM]() (1; 0% instances), [pl-pos/PROPN]()-[pl-pos/PROPN]() (1; 0% instances), [pl-pos/X]()-[pl-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 appos	color:blue
1	Po	po	ADP	prep:loc	AdpType=Prep|Case=Loc	2	case	_	_
2	nim	on	PRON	ppron3:sg:loc:m1:ter:akc:praep	Animacy=Anim|Case=Loc|Gender=Masc|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs|Variant=Long	3	nmod	_	_
3	zabierze	zabrać	VERB	fin:sg:ter:perf	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	głos	głos	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	3	dobj	_	_
5	pan	pan	NOUN	subst:sg:nom:m1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
6	poseł	poseł	NOUN	subst:sg:nom:m1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	5	appos	_	_
7	Maciej	Maciej	PROPN	subst:sg:nom:m1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	6	appos	_	_
8	Manicki	Manicki	PROPN	subst:sg:nom:m1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	7	nmod	_	_
9	.	.	PUNCT	interp:_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 appos	color:blue
1	Proszę	prosić	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	bardzo	bardzo	ADV	adv:pos	Degree=Pos	1	advmod	_	_
3	,	,	PUNCT	interp:_	_	4	punct	_	_
4	panie	pan	NOUN	subst:sg:voc:m1	Animacy=Anim|Case=Voc|Gender=Masc|Number=Sing	1	nmod	_	_
5	ministrze	minister	NOUN	subst:sg:voc:m1	Animacy=Anim|Case=Voc|Gender=Masc|Number=Sing	4	appos	_	_
6	.	.	PUNCT	interp:_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 appos	color:blue
1	Henryk	Henryk	PROPN	subst:sg:nom:m1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	_
2	Sadurski	Sadurski	PROPN	subst:sg:nom:m1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	1	nmod	_	_
3	,	,	PUNCT	interp:_	_	4	punct	_	_
4	inżynier	inżynier	NOUN	subst:sg:nom:m1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	1	appos	_	_
5	metalurg	metalurg	NOUN	subst:sg:nom:m1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	4	appos	_	_
6	,	,	PUNCT	interp:_	_	4	punct	_	_
7	nie	nie	PART	qub:_	_	8	neg	_	_
8	ma	mieć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	pracy	praca	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	8	dobj	_	_
10	od	od	ADP	prep:gen:nwok	AdpType=Prep|Case=Gen|Variant=Short	12	case	_	_
11	kilku	kilka	DET	num:pl:gen:m3:congr	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|NumType=Card|PronType=Ind	12	det:numgov	_	_
12	lat	rok	NOUN	subst:pl:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	8	advmod	_	_
13	.	.	PUNCT	interp:_	_	8	punct	_	_

~~~


