

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is a language-specific subtype of [nmod]().
There are also 2 other language-specific subtypes of `nmod`: [nmod:agent](), [nmod:tmod]().

1534 nodes (1%) are attached to their parents as `nmod:pmod`.

1437 instances of `nmod:pmod` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.08539765319426.

The following 28 pairs of parts of speech are connected with `nmod:pmod`: [ro-pos/VERB]()-[ro-pos/NOUN]() (1050; 68% instances), [ro-pos/NOUN]()-[ro-pos/NOUN]() (134; 9% instances), [ro-pos/ADJ]()-[ro-pos/NOUN]() (117; 8% instances), [ro-pos/VERB]()-[ro-pos/PRON]() (88; 6% instances), [ro-pos/VERB]()-[ro-pos/PROPN]() (59; 4% instances), [ro-pos/VERB]()-[ro-pos/NUM]() (15; 1% instances), [ro-pos/ADV]()-[ro-pos/NOUN]() (11; 1% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (11; 1% instances), [ro-pos/ADJ]()-[ro-pos/PRON]() (8; 1% instances), [ro-pos/ADV]()-[ro-pos/PRON]() (5; 0% instances), [ro-pos/NOUN]()-[ro-pos/PROPN]() (5; 0% instances), [ro-pos/ADJ]()-[ro-pos/PROPN]() (4; 0% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (3; 0% instances), [ro-pos/PRON]()-[ro-pos/NOUN]() (3; 0% instances), [ro-pos/VERB]()-[ro-pos/VERB]() (3; 0% instances), [ro-pos/ADJ]()-[ro-pos/NUM]() (2; 0% instances), [ro-pos/AUX]()-[ro-pos/NOUN]() (2; 0% instances), [ro-pos/NUM]()-[ro-pos/NOUN]() (2; 0% instances), [ro-pos/VERB]()-[ro-pos/ADP]() (2; 0% instances), [ro-pos/VERB]()-[ro-pos/ADV]() (2; 0% instances), [ro-pos/ADJ]()-[ro-pos/ADJ]() (1; 0% instances), [ro-pos/ADJ]()-[ro-pos/VERB]() (1; 0% instances), [ro-pos/ADP]()-[ro-pos/NOUN]() (1; 0% instances), [ro-pos/ADV]()-[ro-pos/NUM]() (1; 0% instances), [ro-pos/DET]()-[ro-pos/NOUN]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/NUM]() (1; 0% instances), [ro-pos/PRON]()-[ro-pos/PRON]() (1; 0% instances), [ro-pos/PROPN]()-[ro-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 nmod:pmod	color:blue
1	Execuția	execuție	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	3	nsubj	_	_
2	programului	program	NOUN	Ncmsoy	Case=Dat,Gen|Definite=Def|Gender=Masc|Number=Sing	1	nmod	_	_
3	începe	începe	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	5	case	_	_
5	main	main	NOUN	Nc	_	3	nmod:pmod	_	_
6	(	(	PUNCT	LPAR	_	5	punct	_	_
7	)	)	PUNCT	RPAR	_	5	punct	_	_
8	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 nmod:pmod	color:blue
1	A	a	PART	Qn	PartType=Inf	3	mark	_	_
2	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	3	expl:pv	_	_
3	feri	feri	VERB	Vmnp	Tense=Pres|VerbForm=Inf	0	root	_	_
4	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	5	case	_	_
5	căldură	căldură	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	3	nmod:pmod	_	_
6	excesivă	excesiv	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	5	amod	_	_
7	și	și	CONJ	Crssp	Negative=Pos	5	cc	_	_
8	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	_
9	expunerea	expunere	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	5	conj	_	_
10	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	_
11	soare	soare	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	9	nmod:pmod	_	_
12	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 nmod:pmod	color:blue
1	Firma	firmă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	4	nsubjpass	_	_
2	a	avea	AUX	Va--3s	Number=Sing|Person=3	3	aux	_	_
3	fost	fi	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	4	auxpass	_	_
4	amendată	amendat	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	_
5	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	_
6	un	un	DET	Timsr	Case=Acc,Nom|Gender=Masc|Number=Sing|PronType=Ind	7	det	_	_
7	total	total	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	4	nmod:pmod	_	_
8	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	_
9	2.437ý	2.437ý	NUM	M	_	7	nummod	_	_
10	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


