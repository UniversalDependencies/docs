

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

67 nodes (1%) are attached to their parents as `mark`.

64 instances of `mark` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.80597014925373.

The following 7 pairs of parts of speech are connected with `mark`: [et-pos/VERB]()-[et-pos/SCONJ]() (43; 64% instances), [et-pos/NOUN]()-[et-pos/SCONJ]() (13; 19% instances), [et-pos/ADJ]()-[et-pos/SCONJ]() (4; 6% instances), [et-pos/VERB]()-[et-pos/CONJ]() (3; 4% instances), [et-pos/PRON]()-[et-pos/SCONJ]() (2; 3% instances), [et-pos/ADV]()-[et-pos/SCONJ]() (1; 1% instances), [et-pos/PROPN]()-[et-pos/SCONJ]() (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 mark	color:blue
1	Teisipäeval	teisi_päev+l	NOUN	n/com,sg,ad,%cap	Case=Ade|Number=Sing	3	nmod	_	_
2	aga	aga+0	ADV	adv/--	_	3	advmod	_	_
3	selgus	selgu+s	VERB	v/main,indic,impf,ps3,sg,ps,af	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
4	,	--	PUNCT	punc/--	_	8	punct	_	_
5	et	et+0	SCONJ	conj-s/sub	_	8	mark	_	_
6	kolmandat	kolmas+t	NUM	num/ord,sg,part,l	Case=Par|Number=Sing|NumForm=Word|NumType=Ord	7	nummod	_	_
7	kandidaati	kandidaat+0	NOUN	n/com,sg,part	Case=Par|Number=Sing	8	nsubj	_	_
8	polegi	ole+gi	VERB	v/main,indic,pres,ps,neg	Mood=Ind|Negative=Neg|Tense=Pres|VerbForm=Fin	3	csubj	_	_
9	.	--	PUNCT	punc/--	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 mark	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 mark	color:blue
1	Mitte	mitte+0	ADV	adv/%cap	_	6	advmod	_	_
2	et	et+0	SCONJ	conj-s/sub	_	6	mark	_	_
3	Rootsi	Rootsi+0	PROPN	prop/prop,sg,gen,%cap	Case=Gen|Number=Sing	4	nmod	_	_
4	kapital	kapital+0	NOUN	n/com,sg,nom	Case=Nom|Number=Sing	6	nsubj	_	_
5	on	ole+0	VERB	v/main,indic,pres,ps3,sg,ps,af	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
6	halb	halb+0	ADJ	adj/pos,sg,nom	Case=Nom|Degree=Pos|Number=Sing	0	root	_	_
7	.	--	PUNCT	punc/--	_	6	punct	_	_

~~~


