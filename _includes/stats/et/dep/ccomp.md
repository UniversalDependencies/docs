

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

29 nodes (0%) are attached to their parents as `ccomp`.

19 instances of `ccomp` (66%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.86206896551724.

The following 2 pairs of parts of speech are connected with `ccomp`: [et-pos/VERB]()-[et-pos/VERB]() (28; 97% instances), [et-pos/VERB]()-[et-pos/PRON]() (1; 3% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 ccomp	color:blue
1	Siis	siis+0	ADV	adv/%cap	_	3	advmod	_	_
2	ta	tema+0	PRON	pron/pers,ps3,sg,nom	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
3	küsis	küsi+s	VERB	v/main,indic,impf,ps3,sg,ps,af	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
4	,	--	PUNCT	punc/--	_	3	punct	_	_
5	kas	kas+0	ADV	adv/--	_	7	advmod	_	_
6	ei	ei+0	AUX	v/aux,neg	Negative=Neg	7	neg	_	_
7	saaks	saa+ks	VERB	v/main,cond,pres,ps,neg	Mood=Cnd|Negative=Neg|Tense=Pres|VerbForm=Fin	3	ccomp	_	_
8	tund	tund+0	NOUN	n/com,sg,nom	Case=Nom|Number=Sing	7	dobj	_	_
9	aega	aeg+0	NOUN	n/com,sg,part	Case=Par|Number=Sing	8	nmod	_	_
10	.	--	PUNCT	punc/--	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 ccomp	color:blue
1	müüja	müüja+0	NOUN	n/com,sg,nom	Case=Nom|Number=Sing	3	nsubj	_	_
2	nigu	nigu+0	PART	b/--	_	3	cc	_	_
3	ütles	ütle+s	VERB	v-fin/main,indic,impf,ps3,sg,ps,af,.FinV,.NGP-P	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
4	ka	ka+0	ADV	adv/--	_	3	advmod	_	_
5	et	et+0	SCONJ	conj-s/sub	_	9	mark	_	_
6	noh	noh+0	PART	b/--	_	9	cc	_	_
7	nelisada	neli-sada+0	NUM	num/card,sg,nom,l	Case=Nom|Number=Sing|NumForm=Word|NumType=Card	9	nsubj	_	_
8	on	ole+0	VERB	v-fin/main,indic,pres,ps3,sg,ps,af,.FinV,.Intr	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
9	siuke	siuke+0	PRON	pron-dem/dem,sg,nom	Case=Nom|Number=Sing|PronType=Dem	3	ccomp	_	_
10	nagu	nagu+0	SCONJ	conj-s/sub	_	12	mark	_	_
11	ta	tema+0	PRON	pron-pers/pers,ps3,sg,nom	Case=Nom|Number=Sing|Person=3|PronType=Prs	12	nsubj	_	_
12	on	ole+0	VERB	v-fin/main,indic,pres,ps3,sg,ps,af,.FinV,.Intr	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	acl	_	_
13	et	et+0	SCONJ	conj-c/sub	_	9	mark	_	_
14	,	--	PUNCT	punc/--	_	3	punct	_	_

~~~


