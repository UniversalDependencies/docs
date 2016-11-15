

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

1128 nodes (1%) are attached to their parents as `xcomp`.

1016 instances of `xcomp` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.57446808510638.

The following 23 pairs of parts of speech are connected with `xcomp`: [ro-pos/VERB]()-[ro-pos/NOUN]() (399; 35% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (333; 30% instances), [ro-pos/VERB]()-[ro-pos/VERB]() (233; 21% instances), [ro-pos/VERB]()-[ro-pos/ADV]() (40; 4% instances), [ro-pos/ADJ]()-[ro-pos/NOUN]() (36; 3% instances), [ro-pos/VERB]()-[ro-pos/PRON]() (20; 2% instances), [ro-pos/VERB]()-[ro-pos/PROPN]() (14; 1% instances), [ro-pos/ADJ]()-[ro-pos/VERB]() (10; 1% instances), [ro-pos/ADJ]()-[ro-pos/ADJ]() (9; 1% instances), [ro-pos/VERB]()-[ro-pos/ADP]() (8; 1% instances), [ro-pos/VERB]()-[ro-pos/NUM]() (8; 1% instances), [ro-pos/ADJ]()-[ro-pos/PROPN]() (6; 1% instances), [ro-pos/AUX]()-[ro-pos/VERB]() (2; 0% instances), [ro-pos/ADJ]()-[ro-pos/ADV]() (1; 0% instances), [ro-pos/ADP]()-[ro-pos/VERB]() (1; 0% instances), [ro-pos/ADV]()-[ro-pos/VERB]() (1; 0% instances), [ro-pos/INTJ]()-[ro-pos/ADJ]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/ADJ]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/PROPN]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/VERB]() (1; 0% instances), [ro-pos/PRON]()-[ro-pos/ADV]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/AUX]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/SYM]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 xcomp	color:blue
1	Acolo	acolo	ADV	Rgp	Degree=Pos	7	advmod	_	_
2	,	,	PUNCT	COMMA	_	1	punct	_	_
3	lângă	lângă	ADP	Spsa	AdpType=Prep|Case=Acc	4	case	_	_
4	izvoară	izvoară	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	7	nmod	_	_
5	,	,	PUNCT	COMMA	_	4	punct	_	_
6	iarba	iarbă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	7	nsubj	_	_
7	pare	părea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	_
9	omăt	omăt	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	7	xcomp	_	_
10	.	.	PUNCT	PERIOD	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	fiecare	fiecare	PRON	Pi3-sr	Case=Acc,Nom|Number=Sing|Person=3|PronType=Ind	2	nsubj	_	_
2	pretinde	pretinde	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	singur	singur	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	2	xcomp	_	_
4	întreaga	întreg	ADJ	Afpfsry	Case=Acc,Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	5	amod	_	_
5	moștenire	moștenire	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	2	dobj	_	_
6	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 xcomp	color:blue
1	Țara	țară	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	2	nsubj	_	_
2	arde	arde	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	și	și	CONJ	Crssp	Negative=Pos	2	cc	_	_
4	tu	tu	PRON	Pp2-sn--------s	Case=Nom|Number=Sing|Person=2|PronType=Prs|Strength=Strong	6	nsubj	_	_
5	-mi	eu	PRON	Pp1-sd--y-----w	Case=Dat|Number=Sing|Person=1|PronType=Prs|Strength=Weak|Variant=Short	6	iobj	_	_
6	stai	sta	VERB	Vmii2s	Mood=Ind|Number=Sing|Person=2|Tense=Imp|VerbForm=Fin	2	conj	_	_
7	înfipt	înfige	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	6	xcomp	_	_
8	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	_
9	podele	podea	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	7	nmod	_	_
10	ca	ca	ADV	Rc	_	12	advmod	_	_
11	un	un	DET	Timsr	Case=Acc,Nom|Gender=Masc|Number=Sing|PronType=Ind	12	det	_	_
12	par	par	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	7	nmod	_	_
13	?	?	PUNCT	QUEST	_	2	punct	_	_

~~~


