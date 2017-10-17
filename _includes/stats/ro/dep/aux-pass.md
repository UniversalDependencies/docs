

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is a language-specific subtype of [aux]().

1491 nodes (1%) are attached to their parents as `aux:pass`.

1488 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.11066398390342.

The following 5 pairs of parts of speech are connected with `aux:pass`: [ro-pos/VERB]()-[ro-pos/AUX]() (1392; 93% instances), [ro-pos/VERB]()-[ro-pos/VERB]() (61; 4% instances), [ro-pos/ADJ]()-[ro-pos/VERB]() (28; 2% instances), [ro-pos/ADJ]()-[ro-pos/AUX]() (6; 0% instances), [ro-pos/NOUN]()-[ro-pos/VERB]() (4; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux:pass	color:blue
1	În	în	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	_
2	dosarele	dosar	NOUN	Ncfpry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur	6	obl	_	_
3	poliției	poliție	NOUN	Ncfsoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Sing	2	nmod	_	_
4	geneveze	genevez	ADJ	Afpfson	Case=Dat,Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	3	amod	_	_
5	era	fi	AUX	Vaii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	6	aux:pass	_	_
6	notat	nota	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
7	ca	ca	ADV	Rc	_	9	advmod	_	_
8	„	„	PUNCT	DBLQ	_	9	punct	_	SpaceAfter=No
9	dangereux	dangereux	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	6	xcomp	_	_
10	”	”	PUNCT	DBLQ	_	9	punct	_	SpaceAfter=No
11	.	.	PUNCT	PERIOD	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 aux:pass	color:blue
1	Dar	dar	CCONJ	Ccssp	Polarity=Pos	5	cc	_	_
2	au	avea	AUX	Va--3p	Number=Plur|Person=3	5	aux	_	_
3	fost	fi	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	5	aux:pass	_	_
4	deja	deja	ADV	Rgp	Degree=Pos	5	advmod	_	_
5	puse	pune	VERB	Vmp--pf	Gender=Fem|Number=Plur|VerbForm=Part	0	root	_	_
6	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	_
7	circulație	circulație	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	5	obl	_	_
8	câteva	câtva	DET	Di3fpr	Case=Acc,Nom|Gender=Fem|Number=Plur|Person=3|PronType=Ind	9	det	_	_
9	exemplare	exemplar	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	5	nsubj:pass	_	SpaceAfter=No
10	.	.	PUNCT	PERIOD	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 aux:pass	color:blue
1	Conducătorii	conducător	NOUN	Ncmpry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Plur	7	nsubj:pass	_	_
2	locali	local	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	1	amod	_	_
3	au	avea	AUX	Va--3p	Number=Plur|Person=3	7	aux	_	_
4	fost	fi	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	7	aux:pass	_	_
5	și	și	CCONJ	Crssp	Polarity=Pos	6	advmod	_	_
6	ei	el	PRON	Pp3mpr--------s	Case=Acc,Nom|Gender=Masc|Number=Plur|Person=3|PronType=Prs|Strength=Strong	7	expl	_	_
7	menținuți	menținut	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	0	root	_	SpaceAfter=No
8	.	.	PUNCT	PERIOD	_	7	punct	_	_

~~~


