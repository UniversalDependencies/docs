

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.
There are 1 language-specific subtypes of `compound`: [compound:prt]().

17 nodes (0%) are attached to their parents as `compound`.

13 instances of `compound` (76%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.47058823529412.

The following 5 pairs of parts of speech are connected with `compound`: [et-pos/NUM]()-[et-pos/NUM]() (7; 41% instances), [et-pos/VERB]()-[et-pos/VERB]() (7; 41% instances), [et-pos/ADV]()-[et-pos/VERB]() (1; 6% instances), [et-pos/AUX]()-[et-pos/VERB]() (1; 6% instances), [et-pos/VERB]()-[et-pos/AUX]() (1; 6% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 compound	color:blue
1	Naised	naine+d	NOUN	n/com,pl,nom,.cap	Case=Nom|Number=Plur	2	nsubj	_	_
2	tatsasid	tatsa+sid	VERB	v-fin/main,indic,impf,ps3,pl,ps,af,.FinV,.Intr	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
3	õnneks	õnn+ks	NOUN	n/com,sg,tr	Case=Tra|Number=Sing	2	nmod	_	_
4	minema	mine+ma	VERB	v-inf/main,sup,ps,ill,.Intr,.ill,.all	Case=All|VerbForm=Sup	2	compound	_	_
5	.	.	PUNCT	punc/Fst	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 compound	color:blue
1	Kogu	kogu+0	ADJ	adj/pos,%cap	Degree=Pos	2	amod	_	_
2	projekt	projekt+0	NOUN	n/com,sg,nom	Case=Nom|Number=Sing	3	nsubj	_	_
3	maksab	maks+b	VERB	v/main,indic,pres,ps3,sg,ps,af	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	200	200+0	NUM	num/card,x?,digit	NumForm=Digit|NumType=Card	6	nummod:gov	_	_
5	miljoni	miljon+0	NUM	num/card,sg,gen,l	Case=Gen|Number=Sing|NumForm=Word|NumType=Card	4	compound	_	_
6	krooni	kroon+0	NOUN	n/com,sg,gen	Case=Gen|Number=Sing	3	advmod	_	_
7	ringis	ringis+0	ADP	prp/post,%gen	AdpType=Post	6	case	_	_
8	.	--	PUNCT	punc/--	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound	color:blue
1	Temast	tema+st	PRON	pron-pers/pers,ps3,sg,el,.cap	Case=Ela|Number=Sing|Person=3|PronType=Prs	3	nmod	_	_
2	oli	ole+i	AUX	v-fin/aux,indic,impf,ps3,sg,ps,af,.FinV,.Intr	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	compound	_	_
3	tilkunud	tilku+nud	VERB	v-pcp2/main,partic,past,ps,.Intr	Tense=Past|VerbForm=Part	0	root	_	_
4	verd	veri+0	NOUN	n/com,sg,part	Case=Par|Number=Sing	3	nsubj	_	_
5	.	.	PUNCT	punc/Fst	PunctType=Peri	3	punct	_	_

~~~


