

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

1528 nodes (1%) are attached to their parents as `neg`.

1524 instances of `neg` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.7270942408377.

The following 13 pairs of parts of speech are connected with `neg`: [ro-pos/VERB]()-[ro-pos/PART]() (1342; 88% instances), [ro-pos/ADJ]()-[ro-pos/PART]() (54; 4% instances), [ro-pos/NOUN]()-[ro-pos/PART]() (48; 3% instances), [ro-pos/ADV]()-[ro-pos/PART]() (41; 3% instances), [ro-pos/PRON]()-[ro-pos/PART]() (18; 1% instances), [ro-pos/AUX]()-[ro-pos/PART]() (12; 1% instances), [ro-pos/ADP]()-[ro-pos/PART]() (4; 0% instances), [ro-pos/DET]()-[ro-pos/PART]() (3; 0% instances), [ro-pos/ADJ]()-[ro-pos/ADJ]() (2; 0% instances), [ro-pos/ADJ]()-[ro-pos/PRON]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/ADJ]() (1; 0% instances), [ro-pos/NUM]()-[ro-pos/PART]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 neg	color:blue
1	(	(	PUNCT	LPAR	_	2	punct	_	_
2	e	e	NOUN	Ncm--n	Definite=Ind|Gender=Masc	7	parataxis	_	_
3	)	)	PUNCT	RPAR	_	2	punct	_	_
4	Acordul	acord	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	7	nsubj	_	_
5	să	să	PART	Qs	Mood=Sub	7	mark	_	_
6	nu	nu	PART	Qz	Negative=Neg	7	neg	_	_
7	ducă	duce	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	_
9	alocarea	alocare	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	7	nmod	_	_
10	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	_
11	piețe	piață	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	9	nmod	_	_
12	sau	sau	CONJ	Ccssp	Negative=Pos	11	cc	_	_
13	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	14	case	_	_
14	clienți	client	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	11	conj	_	_
15	;	;	PUNCT	SCOLON	AdpType=Prep	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 neg	color:blue
1	Dar	dar	CONJ	Ccssp	Negative=Pos	6	cc	_	_
2	nu	nu	PART	Qz	Negative=Neg	6	neg	_	_
3	este	fi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
4	nicio	nici_un	DET	Dz3fsr---e	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|Position=Prenom|PronType=Neg	5	det	_	_
5	mânie	mânie	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	6	nsubj	_	_
6	dreaptă	drept	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	_
7	împotriva	împotriva	ADP	Spsg	AdpType=Prep|Case=Gen	8	case	_	_
8	aproapelui	aproape	NOUN	Ncmsoy	Case=Dat,Gen|Definite=Def|Gender=Masc|Number=Sing	5	nmod	_	_
9	.	.	PUNCT	PERIOD	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 neg	color:blue
1	Da'	dar	CONJ	Ccsspy	Negative=Pos|Variant=Short	3	cc	_	_
2	nu	nu	PART	Qz	Negative=Neg	3	neg	_	_
3	Camera	cameră	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	0	root	_	_
4	o	un	DET	Tifsr	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	3	nummod	_	_
5	sută	sută	NUM	Mcfsrln	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing|NumForm=Word|NumType=Card	4	compound	_	_
6	unu	unu	NUM	Mcmsrl	Case=Acc,Nom|Gender=Masc|Number=Sing|NumForm=Word|NumType=Card	4	compound	_	_
7	!	!	PUNCT	EXCL	_	3	punct	_	_

~~~


