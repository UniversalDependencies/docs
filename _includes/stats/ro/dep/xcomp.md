

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

83 nodes (1%) are attached to their parents as `xcomp`.

75 instances of `xcomp` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.68674698795181.

The following 8 pairs of parts of speech are connected with `xcomp`: [ro-pos/VERB]()-[ro-pos/NOUN]() (31; 37% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (25; 30% instances), [ro-pos/VERB]()-[ro-pos/VERB]() (18; 22% instances), [ro-pos/ADJ]()-[ro-pos/NOUN]() (3; 4% instances), [ro-pos/VERB]()-[ro-pos/ADV]() (3; 4% instances), [ro-pos/ADJ]()-[ro-pos/PROPN]() (1; 1% instances), [ro-pos/NOUN]()-[ro-pos/VERB]() (1; 1% instances), [ro-pos/VERB]()-[ro-pos/PRON]() (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 xcomp	color:blue
1	Petre	Petre	PROPN	Np	_	4	nsubj	_	_
2	Roman	Roman	PROPN	Np	_	1	name	_	_
3	a	a	AUX	Va--3s	Number=Sing|Person=3	4	aux	_	_
4	devenit	devenit	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
5	prim-	prim-	NUM	Moms-ln	Definite=Ind|Gender=Masc|Number=Sing|NumForm=Word|NumType=Card	6	amod	_	AltTag=NUM-ADJ
6	ministru	ministru	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	4	xcomp	_	_
7	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 xcomp	color:blue
1	Curajul	curaj	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	7	nsubj	_	_
2	meu	meu	DET	Ds1ms-s	Gender=Masc|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	1	det	_	_
3	de	de	ADP	Sp	AdpType=Prep	4	case	_	_
4	atunci	atunci	ADV	Rgp	Degree=Pos	1	advmod	_	_
5	putea	putea	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
6	să	să	PART	Qs	Mood=Sub	7	mark	_	_
7	pară	părea	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	5	csubj	_	_
8	copilăresc	copilăresc	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	7	xcomp	_	_
9	.	.	PUNCT	PERIOD	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	Ziua	zi	ADV	Rp	_	2	advmod:tmod	_	_
2	stă	sta	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	ascuns	ascuns	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	2	xcomp	_	_
4	unde	unde	ADV	Rw	PronType=Int,Rel	5	advmod	_	_
5	poate	putea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	advcl	_	_
6	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


