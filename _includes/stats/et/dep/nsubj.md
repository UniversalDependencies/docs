

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

1191 nodes (13%) are attached to their parents as `nsubj`.

943 instances of `nsubj` (79%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.59697732997481.

The following 16 pairs of parts of speech are connected with `nsubj`: [et-pos/VERB]()-[et-pos/NOUN]() (631; 53% instances), [et-pos/VERB]()-[et-pos/PROPN]() (316; 27% instances), [et-pos/VERB]()-[et-pos/PRON]() (193; 16% instances), [et-pos/VERB]()-[et-pos/NUM]() (13; 1% instances), [et-pos/ADJ]()-[et-pos/NOUN]() (10; 1% instances), [et-pos/NOUN]()-[et-pos/PROPN]() (6; 1% instances), [et-pos/ADJ]()-[et-pos/PRON]() (4; 0% instances), [et-pos/NOUN]()-[et-pos/PRON]() (4; 0% instances), [et-pos/ADJ]()-[et-pos/PROPN]() (3; 0% instances), [et-pos/NOUN]()-[et-pos/NOUN]() (3; 0% instances), [et-pos/NUM]()-[et-pos/NOUN]() (2; 0% instances), [et-pos/VERB]()-[et-pos/ADJ]() (2; 0% instances), [et-pos/ADV]()-[et-pos/PROPN]() (1; 0% instances), [et-pos/AUX]()-[et-pos/NOUN]() (1; 0% instances), [et-pos/PRON]()-[et-pos/NUM]() (1; 0% instances), [et-pos/PRON]()-[et-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Lennarti-lood	Lennarti-lood	NOUN	n/com,pl,nom,%cap	Case=Nom|Number=Plur	2	nsubj	_	_
2	on	ole+0	VERB	v/main,indic,pres,ps3,pl,ps,af	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	aga	aga+0	CONJ	conj-s/crd	_	2	mark	_	_
4	nagu	nagu+0	SCONJ	conj-s/sub	_	7	mark	_	_
5	pikantne	pikantne+0	ADJ	adj/pos,sg,nom	Case=Nom|Degree=Pos|Number=Sing	7	amod	_	_
6	prantsuse	prantsuse+0	ADJ	adj-nat/--	NameType=Nat	7	amod	_	_
7	film	film+0	NOUN	n/com,sg,nom	Case=Nom|Number=Sing	2	nmod	_	_
8	.	--	PUNCT	punc/--	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nsubj	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nsubj	color:blue
1	Muist	muist+0	PRON	pron-def/indef,.cap	Poss=Yes|PronType=Ind,Neg	3	dobj	_	_
2	piima	piim+0	NOUN	n/com,sg,part	Case=Par|Number=Sing	1	nmod	_	_
3	valas	vala+s	VERB	v-fin/main,indic,impf,ps3,sg,ps,af,.FinV,.NGP-P	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
4	ta	tema+0	PRON	pron-pers/pers,ps3,sg,nom	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
5	lauda	laut+0	NOUN	n/com,sg,gen	Case=Gen|Number=Sing	3	nmod	_	_
6	taha	taha+0	ADP	pst/post,.gen	AdpType=Post|Case=Gen	5	case	_	_
7	maha	maha+0	ADV	adv/--	_	3	compound:prt	_	_
8	.	.	PUNCT	punc/Fst	PunctType=Peri	3	punct	_	_

~~~


