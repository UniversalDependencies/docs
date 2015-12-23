

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is a language-specific subtype of [compound]().

169 nodes (2%) are attached to their parents as `compound:prt`.

144 instances of `compound:prt` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.6508875739645.

The following 3 pairs of parts of speech are connected with `compound:prt`: [et-pos/VERB]()-[et-pos/ADV]() (167; 99% instances), [et-pos/VERB]()-[et-pos/ADP]() (1; 1% instances), [et-pos/VERB]()-[et-pos/NOUN]() (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound:prt	color:blue
1	Winston	Winston+0	PROPN	prop/prop,sg,nom,%cap	Case=Nom|Number=Sing	5	nsubj	_	_
2	hakkas	hakka+s	AUX	v/main,indic,impf,ps3,sg,ps,af	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	5	aux	_	_
3	trepist	trepp+st	NOUN	n/com,sg,el	Case=Ela|Number=Sing	5	nmod	_	_
4	üles	üles+0	ADV	adv/--	_	5	compound:prt	_	_
5	minema	mine+ma	VERB	v/main,sup,ps,ill	Case=Ill|VerbForm=Sup	0	root	_	_
6	.	--	PUNCT	punc/--	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 compound:prt	color:blue
1	Nad	tema+d	PRON	pron-pers/pers,ps3,pl,nom,.cap	Case=Nom|Number=Plur|Person=3|PronType=Prs	2	nsubj	_	_
2	sõitsid	sõit+sid	VERB	v-fin/main,indic,impf,ps3,pl,ps,af,.FinV,.Intr	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
3	linna	linn+0	NOUN	n/com,sg,adit	Case=Add|Number=Sing	2	nmod	_	_
4	sisse	sisse+0	ADP	pst/post,.gen	AdpType=Post|Case=Gen	2	compound:prt	_	_
5	lasuurroosa	lasuur-roosa+0	ADJ	adj/pos,sg,gen	Case=Gen|Degree=Pos|Number=Sing	6	amod	_	_
6	taeva	taevas+0	NOUN	n/com,sg,gen	Case=Gen|Number=Sing	2	nmod	_	_
7	all	all+0	ADP	pst/post,.gen	AdpType=Post|Case=Gen	6	case	_	_
8	kirkal	kirgas+l	ADJ	adj/pos,sg,ad	Case=Ade|Degree=Pos|Number=Sing	9	amod	_	_
9	koidutunnil	koidu-tund+l	NOUN	n/com,sg,ad	Case=Ade|Number=Sing	2	nmod	_	_
10	.	.	PUNCT	punc/Fst	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound:prt	color:blue
1	Peeter	Peeter+0	PROPN	prop/prop,sg,nom,.cap	Case=Nom|Number=Sing	2	nsubj	_	_
2	ruttas	rutta+s	VERB	v-fin/main,indic,impf,ps3,sg,ps,af,.FinV,.Intr	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
3	büroost	büroo+st	NOUN	n/com,sg,el	Case=Ela|Number=Sing	2	nmod	_	_
4	lasteaeda	laste-aed+0	NOUN	n/com,sg,adit	Case=Add|Number=Sing	2	nmod	_	_
5	nõu	nõu+0	NOUN	n/com,sg,part	Case=Par|Number=Sing	6	compound:prt	_	_
6	pidama	pida+ma	VERB	v-inf/main,sup,ps,ill,.NGP-P	Case=Ill|VerbForm=Sup	2	advcl	_	_
7	.	.	PUNCT	punc/Fst	PunctType=Peri	2	punct	_	_

~~~


