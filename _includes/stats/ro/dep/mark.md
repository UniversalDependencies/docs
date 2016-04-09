

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

335 nodes (3%) are attached to their parents as `mark`.

329 instances of `mark` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.3044776119403.

The following 17 pairs of parts of speech are connected with `mark`: [ro-pos/VERB]()-[ro-pos/PART]() (186; 56% instances), [ro-pos/VERB]()-[ro-pos/SCONJ]() (82; 24% instances), [ro-pos/ADV]()-[ro-pos/ADP]() (14; 4% instances), [ro-pos/VERB]()-[ro-pos/ADP]() (13; 4% instances), [ro-pos/VERB]()-[ro-pos/CONJ]() (10; 3% instances), [ro-pos/VERB]()-[ro-pos/ADV]() (9; 3% instances), [ro-pos/ADJ]()-[ro-pos/SCONJ]() (6; 2% instances), [ro-pos/ADV]()-[ro-pos/SCONJ]() (3; 1% instances), [ro-pos/ADJ]()-[ro-pos/ADP]() (2; 1% instances), [ro-pos/ADJ]()-[ro-pos/ADV]() (2; 1% instances), [ro-pos/VERB]()-[ro-pos/AUX]() (2; 1% instances), [ro-pos/ADJ]()-[ro-pos/PART]() (1; 0% instances), [ro-pos/ADV]()-[ro-pos/ADV]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/SCONJ]() (1; 0% instances), [ro-pos/PRON]()-[ro-pos/ADP]() (1; 0% instances), [ro-pos/PRON]()-[ro-pos/SCONJ]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 mark	color:blue
1	Era	fi	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	cop	_	_
2	o	un	DET	Tifsr	Case=Nom|Gender=Fem|Number=Sing|PronType=Ind	3	det	_	_
3	plăcere	plăcere	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	0	root	_	_
4	să	să	PART	Qs	Mood=Sub	5	mark	_	_
5	asiști	asista	VERB	Vmip2s	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	3	csubj	_	_
6	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	_
7	o	un	DET	Tifsr	Case=Nom|Gender=Fem|Number=Sing|PronType=Ind	8	det	_	_
8	examinare	examinare	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	5	nmod:pmod	_	_
9	a	al	DET	Tsfs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	10	det	_	_
10	lui	lui	DET	Ds3---s	Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	8	nmod	_	_
11	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 mark	color:blue
1	Se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	2	expl:pv	_	_
2	înfurie	înfuria	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	mai	mai	ADV	Rp	_	4	advmod	_	_
4	rău	rău	ADV	Rz	PronType=Neg	2	advmod	_	_
5	că	că	SCONJ	Csssp	Negative=Pos	9	mark	_	_
6	nu	nu	PART	Qz	Negative=Neg	8	neg	_	_
7	-și	sine	PRON	Px3--d--------w	Case=Dat|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	9	expl:pv	_	_
8	putea	putea	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	9	aux	_	_
9	aduce_aminte	aduce_aminte	VERB	Vmnp	Tense=Pres|VerbForm=Inf	2	advcl	_	_
10	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 mark	color:blue
1	Am	avea	AUX	Vaip1p	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	2	aux	_	_
2	putut	putea	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
3	să	să	PART	Qs	Mood=Sub	4	mark	_	_
4	văd	vedea	VERB	Vmsp1s	Mood=Sub|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
5	de	de	ADP	Sp	AdpType=Prep	6	mark	_	_
6	aproape	aproape	ADV	Rgp	Degree=Pos	4	advmod	_	_
7	zbuciumul	zbucium	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	4	dobj	_	_
8	și	și	CONJ	Crssp	Negative=Pos	7	cc	_	_
9	luptele	luptă	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	7	conj	_	_
10	scriitorului	scriitor	NOUN	Ncmsoy	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	7	nmod	_	_
11	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


