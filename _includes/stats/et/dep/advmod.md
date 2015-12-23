

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.
There are 1 language-specific subtypes of `advmod`: [advmod:emph]().

608 nodes (6%) are attached to their parents as `advmod`.

366 instances of `advmod` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.03618421052632.

The following 22 pairs of parts of speech are connected with `advmod`: [et-pos/VERB]()-[et-pos/ADV]() (457; 75% instances), [et-pos/VERB]()-[et-pos/NUM]() (36; 6% instances), [et-pos/VERB]()-[et-pos/ADJ]() (35; 6% instances), [et-pos/ADJ]()-[et-pos/ADV]() (33; 5% instances), [et-pos/ADV]()-[et-pos/ADV]() (11; 2% instances), [et-pos/VERB]()-[et-pos/NOUN]() (10; 2% instances), [et-pos/PRON]()-[et-pos/ADV]() (4; 1% instances), [et-pos/ADJ]()-[et-pos/NUM]() (3; 0% instances), [et-pos/NOUN]()-[et-pos/ADV]() (3; 0% instances), [et-pos/ADJ]()-[et-pos/ADJ]() (2; 0% instances), [et-pos/SCONJ]()-[et-pos/ADV]() (2; 0% instances), [et-pos/VERB]()-[et-pos/INTJ]() (2; 0% instances), [et-pos/ADJ]()-[et-pos/NOUN]() (1; 0% instances), [et-pos/ADJ]()-[et-pos/PRON]() (1; 0% instances), [et-pos/ADJ]()-[et-pos/SCONJ]() (1; 0% instances), [et-pos/ADV]()-[et-pos/ADJ]() (1; 0% instances), [et-pos/ADV]()-[et-pos/NUM]() (1; 0% instances), [et-pos/PRON]()-[et-pos/ADJ]() (1; 0% instances), [et-pos/PRON]()-[et-pos/INTJ]() (1; 0% instances), [et-pos/PROPN]()-[et-pos/ADV]() (1; 0% instances), [et-pos/VERB]()-[et-pos/CONJ]() (1; 0% instances), [et-pos/VERB]()-[et-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 advmod	color:blue
1	Kella	kell+0	NOUN	n/com,sg,gen,.cap	Case=Gen|Number=Sing	4	advmod	_	_
2	kahest	kaks+st	NUM	num/card,sg,el,l	Case=Ela|Number=Sing|NumForm=Word|NumType=Card	1	nummod:gov	_	_
3	viieni	viis+ni	NUM	num/card,sg,term,l	Case=Ter|Number=Sing|NumForm=Word|NumType=Card	4	advmod	_	_
4	sõidutasin	sõiduta+sin	VERB	v-fin/main,indic,impf,ps1,sg,ps,af,.FinV,.NGP-P	Mood=Ind|Negative=Pos|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	0	root	_	_
5	venda	vend+0	NOUN	n/com,sg,part	Case=Par|Number=Sing	4	dobj	_	_
6	mööda	mööda+0	ADP	prp/pre,.part	AdpType=Prep|Case=Par	7	case	_	_
7	linna	linn+0	NOUN	n/com,sg,part	Case=Par|Number=Sing	4	nmod	_	_
8	ringi	ringi+0	ADV	adv/--	_	4	compound:prt	_	_
9	.	.	PUNCT	punc/Fst	PunctType=Peri	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 advmod	color:blue
1	Ta	tema+0	PRON	pron-pers/pers,ps3,sg,nom,.cap	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	liigutas	liiguta+s	VERB	v-fin/main,indic,impf,ps3,sg,ps,af,.FinV,.Part	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
3	end	ise+0	PRON	pron-poss/pos,det,refl,sg,part	Case=Par|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	2	dobj	_	_
4	vabaks	vaba+ks	ADJ	adj/pos,sg,tr	Case=Tra|Degree=Pos|Number=Sing	2	advmod	_	_
5	.	.	PUNCT	punc/Fst	PunctType=Peri	2	punct	_	_

~~~


