

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

10 nodes (0%) are attached to their parents as `csubj`.

9 instances of `csubj` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.

The following 3 pairs of parts of speech are connected with `csubj`: [et-pos/VERB]()-[et-pos/VERB]() (5; 50% instances), [et-pos/ADJ]()-[et-pos/VERB]() (4; 40% instances), [et-pos/NOUN]()-[et-pos/VERB]() (1; 10% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 csubj	color:blue
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
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 12 csubj	color:blue
1	Kui	kui+0	SCONJ	conj-s/sub,%cap	_	3	mark	_	_
2	Arnold	Arnold+0	PROPN	prop/prop,sg,nom,%cap	Case=Nom|Number=Sing	3	nsubj	_	_
3	kõneleb	kõnele+b	VERB	v/main,indic,pres,ps3,sg,ps,af	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	advcl	_	_
4	,	--	PUNCT	punc/--	_	3	punct	_	_
5	siis	siis+0	ADV	adv/--	_	7	advmod	_	_
6	on	ole+0	VERB	v/main,indic,pres,ps3,sg,ps,af	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
7	raske	raske+0	ADJ	adj/pos,sg,nom	Case=Nom|Degree=Pos|Number=Sing	0	root	_	_
8	pikas	pikk+s	ADJ	adj/pos,sg,in	Case=Ine|Degree=Pos|Number=Sing	9	amod	_	_
9	lausetejorus	lause+te_joru+s	NOUN	n/com,sg,in	Case=Ine|Number=Sing	12	nmod	_	_
10	asja	asi+0	NOUN	n/com,sg,gen	Case=Gen|Number=Sing	11	nmod	_	_
11	tuuma	tuum+0	NOUN	n/com,sg,part	Case=Par|Number=Sing	12	dobj	_	_
12	tabada	taba+da	VERB	v/main,inf	VerbForm=Inf	7	csubj	_	_
13	.	--	PUNCT	punc/--	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 4 csubj	color:blue
1	'	--	PUNCT	punc/--	_	4	punct	_	_
2	Suur	suur+0	ADJ	adj/pos,sg,nom,%cap	Case=Nom|Degree=Pos|Number=Sing	3	amod	_	_
3	Vend	vend+0	NOUN	n/com,sg,nom,%cap	Case=Nom|Number=Sing	4	nsubj	_	_
4	valvab	valva+b	VERB	v/main,indic,pres,ps3,sg,ps,af	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	csubj	_	_
5	sind	sina+d	PRON	pron/pers,ps2,sg,part	Case=Par|Number=Sing|Person=2|PronType=Prs	4	dobj	_	_
6	'	--	PUNCT	punc/--	_	4	punct	_	_
7	,	--	PUNCT	punc/--	_	4	punct	_	_
8	oli	ole+i	VERB	v/main,indic,impf,ps3,sg,ps,af	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	11	cop	_	_
9	pildi	pilt+0	NOUN	n/com,sg,gen	Case=Gen|Number=Sing	11	nmod	_	_
10	all	all+0	ADP	prp/post,%gen	AdpType=Post	9	case	_	_
11	kiri	kiri+0	NOUN	n/com,sg,nom	Case=Nom|Number=Sing	0	root	_	_
12	.	--	PUNCT	punc/--	_	11	punct	_	_

~~~


