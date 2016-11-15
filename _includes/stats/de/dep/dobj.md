

--------------------------------------------------------------------------------

## Treebank Statistics (UD_German)

This relation is universal.

8840 nodes (3%) are attached to their parents as `dobj`.

4717 instances of `dobj` (53%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.00950226244344.

The following 36 pairs of parts of speech are connected with `dobj`: [de-pos/VERB]()-[de-pos/NOUN]() (5942; 67% instances), [de-pos/VERB]()-[de-pos/PRON]() (2206; 25% instances), [de-pos/VERB]()-[de-pos/PROPN]() (435; 5% instances), [de-pos/PROPN]()-[de-pos/PROPN]() (40; 0% instances), [de-pos/ADP]()-[de-pos/NOUN]() (32; 0% instances), [de-pos/ADJ]()-[de-pos/NOUN]() (29; 0% instances), [de-pos/ADJ]()-[de-pos/PRON]() (25; 0% instances), [de-pos/NOUN]()-[de-pos/NOUN]() (25; 0% instances), [de-pos/NOUN]()-[de-pos/PRON]() (11; 0% instances), [de-pos/VERB]()-[de-pos/NUM]() (11; 0% instances), [de-pos/VERB]()-[de-pos/ADJ]() (9; 0% instances), [de-pos/NOUN]()-[de-pos/PROPN]() (8; 0% instances), [de-pos/VERB]()-[de-pos/VERB]() (7; 0% instances), [de-pos/PROPN]()-[de-pos/NOUN]() (6; 0% instances), [de-pos/ADP]()-[de-pos/PROPN]() (5; 0% instances), [de-pos/AUX]()-[de-pos/NOUN]() (5; 0% instances), [de-pos/ADJ]()-[de-pos/PROPN]() (4; 0% instances), [de-pos/NUM]()-[de-pos/PROPN]() (4; 0% instances), [de-pos/VERB]()-[de-pos/DET]() (4; 0% instances), [de-pos/VERB]()-[de-pos/X]() (4; 0% instances), [de-pos/AUX]()-[de-pos/PRON]() (3; 0% instances), [de-pos/NUM]()-[de-pos/NOUN]() (3; 0% instances), [de-pos/PRON]()-[de-pos/NOUN]() (3; 0% instances), [de-pos/ADP]()-[de-pos/PRON]() (2; 0% instances), [de-pos/ADV]()-[de-pos/NOUN]() (2; 0% instances), [de-pos/NUM]()-[de-pos/NUM]() (2; 0% instances), [de-pos/PART]()-[de-pos/NOUN]() (2; 0% instances), [de-pos/PROPN]()-[de-pos/PRON]() (2; 0% instances), [de-pos/VERB]()-[de-pos/SCONJ]() (2; 0% instances), [de-pos/ADV]()-[de-pos/PRON]() (1; 0% instances), [de-pos/CONJ]()-[de-pos/NOUN]() (1; 0% instances), [de-pos/CONJ]()-[de-pos/PRON]() (1; 0% instances), [de-pos/PRON]()-[de-pos/PRON]() (1; 0% instances), [de-pos/SCONJ]()-[de-pos/NOUN]() (1; 0% instances), [de-pos/VERB]()-[de-pos/ADV]() (1; 0% instances), [de-pos/X]()-[de-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 dobj	color:blue
1	Ich	ich	PRON	PPER	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	hatte	haben	VERB	VAFIN	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	_
3	Gelegenheit	Gelegenheit	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	2	dobj	_	_
4	eines	ein	DET	ART	Case=Acc|Definite=Ind|Number=Plur|PronType=Art	6	det	_	_
5	seiner	sein	PRON	PPOSAT	Case=Acc|Gender[psor]=Masc,Neut|Number=Plur|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	6	det:poss	_	_
6	Seminare	Seminar	NOUN	NN	Case=Acc|Number=Plur	8	dobj	_	_
7	zu	zu	PART	PTKZU	_	8	mark	_	_
8	besuchen	besuchen	VERB	VVINF	VerbForm=Inf	3	xcomp	_	_
9	.	.	PUNCT	$.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 dobj	color:blue
1	Das	der	PRON	PDS	Case=Acc|PronType=Dem	2	dobj	_	_
2	fand	finden	VERB	VVFIN	Number=Sing|Person=1|VerbForm=Fin	0	root	_	_
3	ich	ich	PRON	PPER	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
4	doch	doch	ADV	ADV	_	2	advmod	_	_
5	sehr	sehr	ADV	ADV	_	6	advmod	_	_
6	häftig	häftig	ADJ	ADJD	Degree=Pos	2	xcomp	_	_
7	!	!	PUNCT	$.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 dobj	color:blue
1	Knapp	knapp	ADV	ADJD	_	2	advmod	_	_
2	20	20	NUM	CARD	NumType=Card	3	nummod	_	_
3	Euro	Euro	PROPN	NN	Case=Acc|Number=Sing	8	dobj	_	_
4	hat	haben	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	_
5	je	je	ADV	APPR	_	8	advmod	_	_
6	ein	ein	DET	ART	Case=Nom|Definite=Ind|Gender=Masc,Neut|Number=Sing|PronType=Art	7	det	_	_
7	Teil	Teil	NOUN	NN	Case=Nom|Gender=Masc,Neut|Number=Sing	8	nsubj	_	_
8	gekostet	kosten	VERB	VVPP	VerbForm=Part	0	root	_	_
9	.	.	PUNCT	$.	_	8	punct	_	_

~~~


