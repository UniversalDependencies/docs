

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is a language-specific subtype of [nummod]().

18 nodes (0%) are attached to their parents as `nummod:gov`.

10 instances of `nummod:gov` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.16666666666667.

The following 2 pairs of parts of speech are connected with `nummod:gov`: [et-pos/NOUN]()-[et-pos/NUM]() (15; 83% instances), [et-pos/PRON]()-[et-pos/NUM]() (3; 17% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nummod:gov	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nummod:gov	color:blue
1	Ja	ja+0	CONJ	conj-c/crd,.cap	_	8	cc	_	_
2	nii	nii+0	ADV	adv/--	_	8	advmod	_	_
3	nende	see+de	PRON	pron-dem/dem,pl,gen	Case=Gen|Number=Plur|PronType=Dem	6	advmod	_	_
4	kahest	kaks+st	NUM	num/card,sg,el,l	Case=Ela|Number=Sing|NumForm=Word|NumType=Card	3	nummod:gov	_	_
5	vankrist	vanker+st	NOUN	n/com,sg,el	Case=Ela|Number=Sing	4	nmod	_	_
6	koosnev	koosne=v+0	ADJ	adj/pos,sg,nom,.v,partic	Case=Nom|Degree=Pos|Number=Sing|VerbForm=Part	7	amod	_	_
7	killavoor	killa-voor+0	NOUN	n/com,sg,nom	Case=Nom|Number=Sing	8	nsubj	_	_
8	liikuski	liiku+ski	VERB	v-fin/main,indic,impf,ps3,sg,ps,af,.FinV,.Intr	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
9	.	.	PUNCT	punc/Fst	PunctType=Peri	8	punct	_	_

~~~


