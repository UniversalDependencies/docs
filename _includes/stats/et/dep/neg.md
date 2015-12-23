

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

27 nodes (0%) are attached to their parents as `neg`.

27 instances of `neg` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.44444444444444.

The following 1 pairs of parts of speech are connected with `neg`: [et-pos/VERB]()-[et-pos/AUX]() (27; 100% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 neg	color:blue
1	-	--	PUNCT	punc/--	_	6	punct	_	_
2	Raha	raha+0	NOUN	n/com,sg,gen,%cap	Case=Gen|Number=Sing	6	nmod	_	_
3	taga	taga+0	ADP	prp/post,%gen	AdpType=Post	2	case	_	_
4	asi	asi+0	NOUN	n/com,sg,nom	Case=Nom|Number=Sing	6	nsubj	_	_
5	ei	ei+0	AUX	v/aux,neg	Negative=Neg	6	neg	_	_
6	seisa	seis+0	VERB	v/main,indic,pres,ps,neg	Mood=Ind|Negative=Neg|Tense=Pres|VerbForm=Fin	9	dep	_	_
7	,	--	PUNCT	punc/--	_	6	punct	_	_
8	-	--	PUNCT	punc/--	_	6	punct	_	_
9	omandab	omanda+b	VERB	v/main,indic,pres,ps3,sg,ps,af	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
10	Paltsi	Palts+0	PROPN	prop/prop,sg,gen,%cap	Case=Gen|Number=Sing	11	nmod	_	_
11	jutt	jutt+0	NOUN	n/com,sg,nom	Case=Nom|Number=Sing	9	nsubj	_	_
12	laia	lai+0	ADJ	adj/pos,sg,gen	Case=Gen|Degree=Pos|Number=Sing	13	amod	_	_
13	joone	joon+0	NOUN	n/com,sg,gen	Case=Gen|Number=Sing	9	dobj	_	_
14	.	--	PUNCT	punc/--	_	9	punct	_	_

~~~


