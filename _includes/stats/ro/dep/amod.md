

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

813 nodes (7%) are attached to their parents as `amod`.

630 instances of `amod` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.25584255842558.

The following 16 pairs of parts of speech are connected with `amod`: [ro-pos/NOUN]()-[ro-pos/ADJ]() (668; 82% instances), [ro-pos/NOUN]()-[ro-pos/DET]() (53; 7% instances), [ro-pos/NOUN]()-[ro-pos/NUM]() (47; 6% instances), [ro-pos/NOUN]()-[ro-pos/VERB]() (10; 1% instances), [ro-pos/PRON]()-[ro-pos/ADJ]() (7; 1% instances), [ro-pos/ADJ]()-[ro-pos/ADJ]() (5; 1% instances), [ro-pos/NOUN]()-[ro-pos/NOUN]() (5; 1% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (4; 0% instances), [ro-pos/PROPN]()-[ro-pos/ADJ]() (4; 0% instances), [ro-pos/NOUN]()-[ro-pos/ADV]() (2; 0% instances), [ro-pos/NOUN]()-[ro-pos/PROPN]() (2; 0% instances), [ro-pos/NUM]()-[ro-pos/ADJ]() (2; 0% instances), [ro-pos/DET]()-[ro-pos/ADJ]() (1; 0% instances), [ro-pos/NUM]()-[ro-pos/NUM]() (1; 0% instances), [ro-pos/PROPN]()-[ro-pos/PROPN]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 amod	color:blue
1	are	are	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	loc	loc	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	1	dobj	_	_
3	retragerea	retragerea	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	1	nsubj	_	_
4	aureliană	aureliană	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	3	amod	_	_
5	.	.	PUNCT	PERIOD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 amod	color:blue
1	România	România	PROPN	Np	_	2	nsubj	_	_
2	beneficiază	beneficiază	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	5	case	_	_
4	toate	toate	DET	Di3fpr	Case=Nom|Gender=Fem|Number=Plur|Person=3|PronType=Ind	5	amod	_	_
5	tipurile	tipurile	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	2	dobj	_	_
6	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	_
7	unități	unități	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	5	nmod	_	_
8	acvatice	acvatice	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	7	amod	_	_
9	:	:	PUNCT	COLON	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 amod	color:blue
1	Petre	Petre	PROPN	Np	_	4	nsubj	_	_
2	Roman	Roman	PROPN	Np	_	1	name	_	_
3	a	a	AUX	Va--3s	Number=Sing|Person=3	4	aux	_	_
4	devenit	devenit	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
5	prim-	prim-	NUM	Moms-ln	Definite=Ind|Gender=Masc|Number=Sing|NumForm=Word|NumType=Card	6	amod	_	AltTag=NUM-ADJ
6	ministru	ministru	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	4	xcomp	_	_
7	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


