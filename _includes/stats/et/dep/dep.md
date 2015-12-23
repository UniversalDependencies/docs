

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

9 nodes (0%) are attached to their parents as `dep`.

8 instances of `dep` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.55555555555556.

The following 5 pairs of parts of speech are connected with `dep`: [et-pos/VERB]()-[et-pos/VERB]() (5; 56% instances), [et-pos/ADV]()-[et-pos/X]() (1; 11% instances), [et-pos/NOUN]()-[et-pos/VERB]() (1; 11% instances), [et-pos/PROPN]()-[et-pos/PROPN]() (1; 11% instances), [et-pos/VERB]()-[et-pos/NOUN]() (1; 11% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 dep	color:blue
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


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 dep	color:blue
1	Mare	Mare+0	PROPN	prop/prop,sg,nom,.cap	Case=Nom|Number=Sing	2	nsubj	_	_
2	on	ole+0	VERB	v-fin/main,indic,pres,ps3,sg,ps,af,.FinV,.Intr	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	dep	_	_
3	Mare	Mare+0	PROPN	prop/prop,sg,nom,.cap	Case=Nom|Number=Sing	6	nsubj	_	_
4	on	ole+0	VERB	v-fin/main,indic,pres,ps3,sg,ps,af,.FinV,.Intr	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
5	nigu	nigu+0	PART	b/--	_	6	cc	_	_
6	tehnikaekspert	tehnika-ekspert+0	NOUN	n/com,sg,nom	Case=Nom|Number=Sing	0	root	_	_
7	,	--	PUNCT	punc/--	_	6	punct	_	_
8	mõtsime	mõtle+sime	VERB	v-fin/main,indic,impf,ps1,pl,ps,af,.FinV,.NGP-P,.InfP,.El,.All	Mood=Ind|Negative=Pos|Number=Plur|Person=1|Tense=Imp|VerbForm=Fin	6	conj	_	_
9	et	et+0	SCONJ	conj-c/sub	_	10	mark	_	_
10	pöördume	pöördu+me	VERB	v-fin/main,indic,pres,ps1,pl,ps,af,.FinV,.Intr	Mood=Ind|Negative=Pos|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	8	ccomp	_	_
11	nagu	nagu+0	PART	b/--	_	10	cc	_	_
12	tehnilistes	tehniline+tes	ADJ	adj/pos,pl,in	Case=Ine|Degree=Pos|Number=Plur	13	amod	_	_
13	küsimustes	küsimus+tes	NOUN	n/com,pl,in	Case=Ine|Number=Plur	10	nmod	_	_
14	tema	tema+0	PRON	pron-pers/pers,ps3,sg,gen	Case=Gen|Number=Sing|Person=3|PronType=Prs	10	nmod	_	_
15	poole	poole+0	ADP	pst/post,.gen	AdpType=Post|Case=Gen	14	case	_	_
16	.	--	PUNCT	punc/--	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 20 dep	color:blue
1	jah	jah+0	PART	b/--	_	2	cc	_	_
2	jaa	jaa+0	PART	b/--	_	0	root	_	_
3	ja	ja+0	CONJ	conj-c/crd	_	2	cc	_	_
4	Mare	Mare+0	PROPN	prop/prop,sg,nom,.cap	Case=Nom|Number=Sing	5	nsubj	_	_
5	ütleb	ütle+b	VERB	v-fin/main,indic,pres,ps3,sg,ps,af,.FinV,.NGP-P	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	conj	_	_
6	et	et+0	SCONJ	conj-s/sub	_	8	mark	_	_
7	ei	ei+0	AUX	v/aux,neg	Negative=Neg	8	neg	_	_
8	saa	saa+0	VERB	v-fin/main,indic,pres,ps,neg,.FinV,.NGP-P	Mood=Ind|Negative=Neg|Tense=Pres|VerbForm=Fin	5	ccomp	_	_
9	kuivaks	kuiv+ks	ADJ	adj/pos,sg,tr	Case=Tra|Degree=Pos|Number=Sing	8	advmod	_	_
10	pesu	pesu+0	NOUN	n/com,sg,part	Case=Par|Number=Sing	8	dobj	_	_
11	et	et+0	SCONJ	conj-c/sub	_	13	mark	_	_
12	tema	tema+0	PRON	pron-pers/pers,ps3,sg,nom	Case=Nom|Number=Sing|Person=3|PronType=Prs	13	nsubj	_	_
13	teeb	tege+b	VERB	v-fin/main,indic,pres,ps3,sg,ps,af,.FinV,.NGP-P	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	ccomp	_	_
14	hh	hh+0	PART	b/--	_	13	cc	_	_
15	kaks	kaks+0	NUM	num/card,sg,nom,l	Case=Nom|Number=Sing|NumForm=Word|NumType=Card	13	advmod	_	_
16	korda	kord+0	NOUN	n/com,sg,part	Case=Par|Number=Sing	15	nmod	_	_
17	noh	noh+0	PART	b/--	_	18	cc	_	_
18	laseb	lask+b	VERB	v-fin/main,indic,pres,ps3,sg,ps,af,.FinV,.NGP-P,.InfP	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	ccomp	_	_
19	uuesti	uuesti+0	ADV	adv/--	_	18	advmod	_	_
20	ta-	ta	X	x/--	_	21	dep	_	_
21	tagasi	tagasi+0	ADV	adv/--	_	18	advmod	_	_
22	.	--	PUNCT	punc/--	_	2	punct	_	_

~~~


