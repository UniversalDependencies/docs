

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

143 nodes (2%) are attached to their parents as `conj`.

143 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.39160839160839.

The following 19 pairs of parts of speech are connected with `conj`: [et-pos/NOUN]()-[et-pos/NOUN]() (48; 34% instances), [et-pos/VERB]()-[et-pos/VERB]() (40; 28% instances), [et-pos/PROPN]()-[et-pos/PROPN]() (17; 12% instances), [et-pos/ADJ]()-[et-pos/ADJ]() (11; 8% instances), [et-pos/ADV]()-[et-pos/ADV]() (5; 3% instances), [et-pos/ADJ]()-[et-pos/VERB]() (4; 3% instances), [et-pos/VERB]()-[et-pos/ADJ]() (4; 3% instances), [et-pos/NUM]()-[et-pos/NUM]() (2; 1% instances), [et-pos/VERB]()-[et-pos/PRON]() (2; 1% instances), [et-pos/ADJ]()-[et-pos/NOUN]() (1; 1% instances), [et-pos/ADV]()-[et-pos/VERB]() (1; 1% instances), [et-pos/NOUN]()-[et-pos/PRON]() (1; 1% instances), [et-pos/NOUN]()-[et-pos/PROPN]() (1; 1% instances), [et-pos/NOUN]()-[et-pos/VERB]() (1; 1% instances), [et-pos/PART]()-[et-pos/VERB]() (1; 1% instances), [et-pos/PRON]()-[et-pos/PRON]() (1; 1% instances), [et-pos/PROPN]()-[et-pos/NOUN]() (1; 1% instances), [et-pos/PROPN]()-[et-pos/NUM]() (1; 1% instances), [et-pos/VERB]()-[et-pos/X]() (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 conj	color:blue
1	Siis	siis+0	ADV	adv/.cap	_	2	advmod	_	_
2	roniti	roni+ti	VERB	v-fin/main,indic,impf,imps,af,.FinV,.Intr	Mood=Ind|Negative=Pos|Tense=Imp|VerbForm=Fin	0	root	_	_
3	hirmu	hirm+0	NOUN	n/com,sg,gen	Case=Gen|Number=Sing	2	nmod	_	_
4	ja	ja+0	CONJ	conj-c/crd	_	3	cc	_	_
5	valuga	valu+ga	NOUN	n/com,sg,kom	Case=Com|Number=Sing	3	conj	_	_
6	üksteisele	üks-teise+le	PRON	pron/rec,sg,all	Case=All|Number=Sing|PronType=Rcp	2	nmod	_	_
7	kukile	kukile+0	ADV	adv/--	_	2	compound:prt	_	_
8	...	.	PUNCT	punc/Fst	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 conj	color:blue
1	Oli	ole+i	VERB	v/main,indic,impf,ps3,sg,ps,af,%cap	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
2	külm	külm+0	ADJ	adj/pos,sg,nom	Case=Nom|Degree=Pos|Number=Sing	4	amod	_	_
3	selge	selge+0	ADJ	adj/pos,sg,nom	Case=Nom|Degree=Pos|Number=Sing	4	amod	_	_
4	aprillipäev	aprilli_päev+0	NOUN	n/com,sg,nom	Case=Nom|Number=Sing	1	nsubj	_	_
5	,	--	PUNCT	punc/--	_	1	punct	_	_
6	kellad	kell+d	NOUN	n/com,pl,nom	Case=Nom|Number=Plur	7	nsubj	_	_
7	lõid	löö+id	VERB	v/main,indic,impf,ps3,pl,ps,af	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	1	conj	_	_
8	parajasti	parajasti+0	ADV	adv/--	_	7	advmod	_	_
9	kolmteist	kolm_teist+0	NUM	num/card,sg,nom,l	Case=Nom|Number=Sing|NumForm=Word|NumType=Card	7	advmod	_	_
10	.	--	PUNCT	punc/--	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 conj	color:blue
1	Ants	Ants+0	PROPN	prop/prop,sg,nom,.cap	Case=Nom|Number=Sing	4	nsubj	_	_
2	ja	ja+0	CONJ	conj-c/crd	_	1	cc	_	_
3	Valdek	Valdek+0	PROPN	prop/prop,sg,nom,.cap	Case=Nom|Number=Sing	1	conj	_	_
4	sõudsid	sõud+sid	VERB	v-fin/main,indic,impf,ps3,pl,ps,af,.FinV	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
5	püstjate	püstjas+te	ADJ	adj/pos,pl,gen	Case=Gen|Degree=Pos|Number=Plur	6	amod	_	_
6	tõmmetega	tõmme+tega	NOUN	n/com,pl,kom	Case=Com|Number=Plur	4	nmod	_	_
7	läbi	läbi+0	ADP	prp/pre,.gen	AdpType=Prep|Case=Gen	9	case	_	_
8	tumeda	tume+0	ADJ	adj/pos,sg,gen	Case=Gen|Degree=Pos|Number=Sing	9	amod	_	_
9	vee	vesi+0	NOUN	n/com,sg,gen	Case=Gen|Number=Sing	4	nmod	_	_
10	.	.	PUNCT	punc/Fst	PunctType=Peri	4	punct	_	_

~~~


