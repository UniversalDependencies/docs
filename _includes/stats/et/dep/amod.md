

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

406 nodes (4%) are attached to their parents as `amod`.

403 instances of `amod` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.22660098522167.

The following 3 pairs of parts of speech are connected with `amod`: [et-pos/NOUN]()-[et-pos/ADJ]() (388; 96% instances), [et-pos/PROPN]()-[et-pos/ADJ]() (17; 4% instances), [et-pos/PRON]()-[et-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 amod	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	66-aastane	66-aastane+0	ADJ	adj/pos,sg,nom	Case=Nom|Degree=Pos|Number=Sing	2	amod	_	_
2	Heino	Heino+0	PROPN	prop/prop,sg,nom,.cap	Case=Nom|Number=Sing	3	nsubj	_	_
3	sisenes	sisene+s	VERB	v-fin/main,indic,impf,ps3,sg,ps,af,.FinV	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
4	Küütri	Küütri+0	PROPN	prop/prop,sg,gen,.cap,.?	Case=Gen|Number=Sing	5	nmod	_	_
5	tänavas	tänav+s	NOUN	n/com,sg,in	Case=Ine|Number=Sing	3	nmod	_	_
6	oma	oma+0	PRON	pron-poss/pos,det,refl,sg,gen	Case=Gen|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	7	nmod	_	_
7	kodumaja	kodu-maja+0	NOUN	n/com,sg,gen	Case=Gen|Number=Sing	8	nmod	_	_
8	trepikotta	trepi-koda+0	NOUN	n/com,sg,adit	Case=Add|Number=Sing	3	nmod	_	_
9	.	.	PUNCT	punc/Fst	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 11 amod	color:blue
1	see	see+0	PRON	pron-dem/dem,sg,nom	Case=Nom|Number=Sing|PronType=Dem	2	nsubj	_	_
2	on	ole+0	VERB	v-fin/main,indic,pres,ps3,sg,ps,af,.FinV,.Intr	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	ta	tema+0	PRON	pron-pers/pers,ps3,sg,nom	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
4	pidi	pida+i	VERB	v-fin/main,indic,impf,ps3,sg,ps,af,.FinV,.NGP-P	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	2	conj	_	_
5	see	see+0	PRON	pron-dem/dem,sg,nom	Case=Nom|Number=Sing|PronType=Dem	2	conj	_	_
6	mis	mis+0	PRON	pron-rel/rel,sg,nom	Case=Nom|Number=Sing|PronType=Rel	5	nmod	_	_
7	sealt	sealt+0	ADV	adv/--	_	11	advmod	_	_
8	külje	külg+0	NOUN	n/com,sg,gen	Case=Gen|Number=Sing	10	nmod	_	_
9	pealt	pealt+0	ADP	pst/post,.gen	AdpType=Post|Case=Gen	8	case	_	_
10	eest	eest+0	ADV	adv/--	_	11	advmod	_	_
11	laetav	lae=tav+0	ADJ	adj/pos,sg,nom,partic,.tav	Case=Nom|Degree=Pos|Number=Sing|VerbForm=Part	6	amod	_	_
12	,	--	PUNCT	punc/--	_	2	punct	_	_
13	noh	noh+0	PART	b/--	_	15	cc	_	_
14	sa	sina+0	PRON	pron-pers/pers,ps2,sg,nom	Case=Nom|Number=Sing|Person=2|PronType=Prs	15	nsubj	_	_
15	tead	tead+d	VERB	v-fin/main,indic,pres,ps2,sg,ps,af,.FinV,.NGP-P,.InfP	Mood=Ind|Negative=Pos|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	2	conj	_	_

~~~


