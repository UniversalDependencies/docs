

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

1602 nodes (1%) are attached to their parents as `auxpass`.

1595 instances of `auxpass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.11548064918851.

The following 6 pairs of parts of speech are connected with `auxpass`: [ro-pos/VERB]()-[ro-pos/AUX]() (1489; 93% instances), [ro-pos/VERB]()-[ro-pos/VERB]() (63; 4% instances), [ro-pos/ADJ]()-[ro-pos/VERB]() (32; 2% instances), [ro-pos/NOUN]()-[ro-pos/VERB]() (9; 1% instances), [ro-pos/ADJ]()-[ro-pos/AUX]() (5; 0% instances), [ro-pos/VERB]()-[ro-pos/PRON]() (4; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 auxpass	color:blue
1	Este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	auxpass	_	_
2	născut	naște	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
3	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	4	case	_	_
4	1962	1962	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	2	nummod	_	_
5	,	,	PUNCT	COMMA	_	2	punct	_	_
6	căsătorit	căsătorit	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	2	conj	_	_
7	,	,	PUNCT	COMMA	_	2	punct	_	_
8	are	avea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	conj	_	_
9	un	unu	NUM	Mcmsrl	Case=Acc,Nom|Gender=Masc|Number=Sing|NumForm=Word|NumType=Card	10	nummod	_	_
10	copil	copil	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	8	dobj	_	_
11	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 auxpass	color:blue
1	Dar	dar	CONJ	Ccssp	Negative=Pos	5	cc	_	_
2	au	avea	AUX	Va--3p	Number=Plur|Person=3	5	aux	_	_
3	fost	fi	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	5	auxpass	_	_
4	deja	deja	ADV	Rgp	Degree=Pos	5	advmod	_	_
5	puse	pune	VERB	Vmp--pf	Gender=Fem|Number=Plur|VerbForm=Part	0	root	_	_
6	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	_
7	circulație	circulație	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	5	nmod	_	_
8	câteva	câtva	DET	Di3fpr	Case=Acc,Nom|Gender=Fem|Number=Plur|Person=3|PronType=Ind	9	det	_	_
9	exemplare	exemplar	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	5	nsubjpass	_	_
10	.	.	PUNCT	PERIOD	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 auxpass	color:blue
1	Conducătorii	conducător	NOUN	Ncmpry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Plur	7	nsubjpass	_	_
2	locali	local	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	1	amod	_	_
3	au	avea	AUX	Va--3p	Number=Plur|Person=3	7	aux	_	_
4	fost	fi	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	7	auxpass	_	_
5	și	și	CONJ	Crssp	Negative=Pos	6	advmod	_	_
6	ei	el	PRON	Pp3mpr--------s	Case=Acc,Nom|Gender=Masc|Number=Plur|Person=3|PronType=Prs|Strength=Strong	7	expl	_	_
7	menținuți	menținut	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	0	root	_	_
8	.	.	PUNCT	PERIOD	_	7	punct	_	_

~~~


