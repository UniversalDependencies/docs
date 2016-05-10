

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is a language-specific subtype of [nmod]().
There are also 2 other language-specific subtypes of `nmod`: [nmod:agent](), [nmod:tmod]().

1188 nodes (1%) are attached to their parents as `nmod:pmod`.

1094 instances of `nmod:pmod` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.29040404040404.

The following 31 pairs of parts of speech are connected with `nmod:pmod`: [ro-pos/VERB]()-[ro-pos/NOUN]() (795; 67% instances), [ro-pos/NOUN]()-[ro-pos/NOUN]() (134; 11% instances), [ro-pos/ADJ]()-[ro-pos/NOUN]() (76; 6% instances), [ro-pos/VERB]()-[ro-pos/PRON]() (59; 5% instances), [ro-pos/VERB]()-[ro-pos/PROPN]() (52; 4% instances), [ro-pos/VERB]()-[ro-pos/NUM]() (10; 1% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (8; 1% instances), [ro-pos/NOUN]()-[ro-pos/PROPN]() (6; 1% instances), [ro-pos/PRON]()-[ro-pos/NOUN]() (6; 1% instances), [ro-pos/ADJ]()-[ro-pos/PRON]() (5; 0% instances), [ro-pos/ADV]()-[ro-pos/NOUN]() (5; 0% instances), [ro-pos/ADV]()-[ro-pos/PRON]() (3; 0% instances), [ro-pos/AUX]()-[ro-pos/NOUN]() (3; 0% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (3; 0% instances), [ro-pos/VERB]()-[ro-pos/ADV]() (3; 0% instances), [ro-pos/ADJ]()-[ro-pos/PROPN]() (2; 0% instances), [ro-pos/NUM]()-[ro-pos/NOUN]() (2; 0% instances), [ro-pos/VERB]()-[ro-pos/ADP]() (2; 0% instances), [ro-pos/VERB]()-[ro-pos/VERB]() (2; 0% instances), [ro-pos/ADJ]()-[ro-pos/ADJ]() (1; 0% instances), [ro-pos/ADJ]()-[ro-pos/VERB]() (1; 0% instances), [ro-pos/ADP]()-[ro-pos/NOUN]() (1; 0% instances), [ro-pos/ADV]()-[ro-pos/NUM]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/ADJ]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/DET]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/NUM]() (1; 0% instances), [ro-pos/PRON]()-[ro-pos/PRON]() (1; 0% instances), [ro-pos/PROPN]()-[ro-pos/NOUN]() (1; 0% instances), [ro-pos/PROPN]()-[ro-pos/PROPN]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/INTJ]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/SYM]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 nmod:pmod	color:blue
1	va	vrea	AUX	Va--3s	Number=Sing|Person=3	2	aux	_	_
2	avea	avea	VERB	Vmnp	Tense=Pres|VerbForm=Inf	0	root	_	_
3	,	,	PUNCT	COMMA	_	2	punct	_	_
4	dar	dar	CONJ	Ccssp	Negative=Pos	2	cc	_	_
5	să	să	PART	Qs	Mood=Sub	7	mark	_	_
6	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	7	expl:pv	_	_
7	păzească	păzi	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	2	conj	_	_
8	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	_
9	ciob	ciob	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	7	nmod:pmod	_	_
10	,	,	PUNCT	COMMA	_	9	punct	_	_
11	candelă	candelă	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	9	conj	_	_
12	și	și	CONJ	Crssp	Negative=Pos	9	cc	_	_
13	icoană	icoană	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	9	conj	_	_
14	.	.	PUNCT	PERIOD	_	2	punct	_	_

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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nmod:pmod	color:blue
1	E	fi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	plin	plin	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	_
3	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	4	case	_	_
4	tele-ecrane	tele-ecran	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	2	nmod:pmod	_	_
5	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


