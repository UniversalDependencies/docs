

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.
There are 1 language-specific subtypes of `cc`: [cc:preconj]().

6478 nodes (3%) are attached to their parents as `cc`.

6217 instances of `cc` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.31028095091077.

The following 38 pairs of parts of speech are connected with `cc`: [ro-pos/NOUN]()-[ro-pos/CONJ]() (2622; 40% instances), [ro-pos/VERB]()-[ro-pos/CONJ]() (2190; 34% instances), [ro-pos/ADJ]()-[ro-pos/CONJ]() (709; 11% instances), [ro-pos/PROPN]()-[ro-pos/CONJ]() (250; 4% instances), [ro-pos/NUM]()-[ro-pos/CONJ]() (170; 3% instances), [ro-pos/VERB]()-[ro-pos/ADV]() (155; 2% instances), [ro-pos/ADV]()-[ro-pos/CONJ]() (99; 2% instances), [ro-pos/NOUN]()-[ro-pos/ADV]() (99; 2% instances), [ro-pos/PRON]()-[ro-pos/CONJ]() (64; 1% instances), [ro-pos/ADP]()-[ro-pos/CONJ]() (41; 1% instances), [ro-pos/DET]()-[ro-pos/CONJ]() (19; 0% instances), [ro-pos/ADJ]()-[ro-pos/ADV]() (14; 0% instances), [ro-pos/AUX]()-[ro-pos/CONJ]() (7; 0% instances), [ro-pos/PROPN]()-[ro-pos/PRON]() (3; 0% instances), [ro-pos/SYM]()-[ro-pos/CONJ]() (3; 0% instances), [ro-pos/VERB]()-[ro-pos/ADP]() (3; 0% instances), [ro-pos/VERB]()-[ro-pos/NOUN]() (3; 0% instances), [ro-pos/VERB]()-[ro-pos/PUNCT]() (3; 0% instances), [ro-pos/ADV]()-[ro-pos/ADV]() (2; 0% instances), [ro-pos/INTJ]()-[ro-pos/CONJ]() (2; 0% instances), [ro-pos/PRON]()-[ro-pos/ADV]() (2; 0% instances), [ro-pos/SCONJ]()-[ro-pos/CONJ]() (2; 0% instances), [ro-pos/ADJ]()-[ro-pos/PRON]() (1; 0% instances), [ro-pos/ADJ]()-[ro-pos/PUNCT]() (1; 0% instances), [ro-pos/ADJ]()-[ro-pos/VERB]() (1; 0% instances), [ro-pos/ADP]()-[ro-pos/ADV]() (1; 0% instances), [ro-pos/AUX]()-[ro-pos/ADV]() (1; 0% instances), [ro-pos/CONJ]()-[ro-pos/ADV]() (1; 0% instances), [ro-pos/CONJ]()-[ro-pos/CONJ]() (1; 0% instances), [ro-pos/CONJ]()-[ro-pos/VERB]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/ADP]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/NOUN]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (1; 0% instances), [ro-pos/NUM]()-[ro-pos/ADV]() (1; 0% instances), [ro-pos/PART]()-[ro-pos/CONJ]() (1; 0% instances), [ro-pos/PROPN]()-[ro-pos/ADV]() (1; 0% instances), [ro-pos/PROPN]()-[ro-pos/NOUN]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 cc	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 cc	color:blue
1	Semăna	semăna	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
2	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	4	case	_	_
3	o	un	DET	Tifsr	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	4	det	_	_
4	oaie	oaie	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	1	nmod:pmod	_	_
5	și	și	CONJ	Crssp	Negative=Pos	1	cc	_	_
6	chiar	chiar	ADV	Rgp	Degree=Pos	9	advmod	_	_
7	și	și	CONJ	Crssp	Negative=Pos	9	advmod	_	_
8	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	_
9	voce	voce	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	10	nmod	_	_
10	avea	avea	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	1	conj	_	_
11	inflexiuni	inflexiune	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	10	dobj	_	_
12	ovine	ovin	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	11	amod	_	_
13	.	.	PUNCT	PERIOD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 cc	color:blue
1	Fălcile	falcă	NOUN	Ncfpry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur	6	nsubj	_	_
2	enorme	enorm	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	1	amod	_	_
3	și	și	CONJ	Crssp	Negative=Pos	2	cc	_	_
4	fleșcăite	fleșcăit	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	2	conj	_	_
5	îi	el	PRON	Pp3-sd--------w	Case=Dat|Number=Sing|Person=3|PronType=Prs|Strength=Weak	6	expl:poss	_	_
6	tremurau	tremura	VERB	Vmii3p	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
7	necontrolat	necontrolat	ADV	Rgp	Degree=Pos	6	advmod	_	_
8	.	.	PUNCT	PERIOD	_	6	punct	_	_

~~~


