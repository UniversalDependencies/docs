

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

134 nodes (1%) are attached to their parents as `advcl`.

111 instances of `advcl` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.06716417910448.

The following 6 pairs of parts of speech are connected with `advcl`: [et-pos/VERB]()-[et-pos/VERB]() (119; 89% instances), [et-pos/ADJ]()-[et-pos/VERB]() (6; 4% instances), [et-pos/ADV]()-[et-pos/VERB]() (5; 4% instances), [et-pos/VERB]()-[et-pos/ADJ]() (2; 1% instances), [et-pos/NOUN]()-[et-pos/VERB]() (1; 1% instances), [et-pos/VERB]()-[et-pos/NOUN]() (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 advcl	color:blue
1	Kuldkalad	kuld-kala+d	NOUN	n/com,pl,nom,.cap	Case=Nom|Number=Plur	2	nsubj	_	_
2	ujusid	uju+sid	VERB	v-fin/main,indic,impf,ps3,pl,ps,af,.FinV,.Intr	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
3	nende	tema+de	PRON	pron-pers/pers,ps3,pl,gen	Case=Gen|Number=Plur|Person=3|PronType=Prs	4	nmod	_	_
4	varbaid	varvas+id	NOUN	n/com,pl,part	Case=Par|Number=Plur	5	dobj	_	_
5	uudistama	uudista+ma	VERB	v-inf/main,sup,ps,ill	Case=Ill|VerbForm=Sup	2	advcl	_	_
6	.	.	PUNCT	punc/Fst	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 11 advcl	color:blue
1	Telia	Telia+0	PROPN	prop/prop,sg,nom,%cap	Case=Nom|Number=Sing	2	nmod	_	_
2	kapital	kapital+0	NOUN	n/com,sg,nom	Case=Nom|Number=Sing	4	nsubj	_	_
3	on	ole+0	VERB	v/main,indic,pres,ps3,sg,ps,af	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	halb	halb+0	ADJ	adj/pos,sg,nom	Case=Nom|Degree=Pos|Number=Sing	0	root	_	_
5	,	--	PUNCT	punc/--	_	11	punct	_	_
6	sest	sest+0	SCONJ	conj-s/sub	_	11	mark	_	_
7	ta	tema+0	PRON	pron/pers,ps3,sg,nom	Case=Nom|Number=Sing|Person=3|PronType=Prs	11	nsubj	_	_
8	ei	ei+0	AUX	v/aux,neg	Negative=Neg	11	neg	_	_
9	saa	saa+0	AUX	v/mod,indic,pres,ps,neg	Mood=Ind|Negative=Neg|Tense=Pres|VerbForm=Fin	11	aux	_	_
10	konkurentsi	konkurents+0	NOUN	n/com,sg,part	Case=Par|Number=Sing	11	dobj	_	_
11	luua	loo+a	VERB	v/main,inf	VerbForm=Inf	4	advcl	_	_
12	.	--	PUNCT	punc/--	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 advcl	color:blue
1	Leping	leping+0	NOUN	n/com,sg,nom,%cap	Case=Nom|Number=Sing	2	dobj	_	_
2	sõlmiti	sõlmi+ti	VERB	v/main,indic,impf,imps,af	Mood=Ind|Negative=Pos|Tense=Imp|VerbForm=Fin	0	root	_	_
3	siis	siis+0	ADV	adv/--	_	2	advmod	_	_
4	,	--	PUNCT	punc/--	_	8	punct	_	_
5	kui	kui+0	SCONJ	conj-s/sub	_	8	mark	_	_
6	kroon	kroon+0	NOUN	n/com,sg,nom	Case=Nom|Number=Sing	8	nsubj	_	_
7	oli	ole+i	AUX	v/aux,indic,impf,ps3,sg,ps,af	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	aux	_	_
8	käibinud	käibi+nud	VERB	v/main,partic,past,ps	Tense=Past|VerbForm=Part	3	advcl	_	_
9	kuus	kuus+0	NUM	num/card,sg,nom,l	Case=Nom|Number=Sing|NumForm=Word|NumType=Card	8	advmod	_	_
10	kuud	kuu+d	NOUN	n/com,sg,part	Case=Par|Number=Sing	9	nmod	_	_
11	.	--	PUNCT	punc/--	_	2	punct	_	_

~~~


