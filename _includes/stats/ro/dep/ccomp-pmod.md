

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is a language-specific subtype of [ccomp]().

196 nodes (0%) are attached to their parents as `ccomp:pmod`.

196 instances of `ccomp:pmod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.38265306122449.

The following 11 pairs of parts of speech are connected with `ccomp:pmod`: [ro-pos/VERB]()-[ro-pos/VERB]() (148; 76% instances), [ro-pos/ADJ]()-[ro-pos/VERB]() (19; 10% instances), [ro-pos/ADV]()-[ro-pos/VERB]() (15; 8% instances), [ro-pos/NOUN]()-[ro-pos/VERB]() (4; 2% instances), [ro-pos/ADV]()-[ro-pos/NOUN]() (2; 1% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (2; 1% instances), [ro-pos/VERB]()-[ro-pos/NOUN]() (2; 1% instances), [ro-pos/ADJ]()-[ro-pos/ADJ]() (1; 1% instances), [ro-pos/ADP]()-[ro-pos/VERB]() (1; 1% instances), [ro-pos/AUX]()-[ro-pos/VERB]() (1; 1% instances), [ro-pos/VERB]()-[ro-pos/ADV]() (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 ccomp:pmod	color:blue
1	A	al	DET	Tsfs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	2	det	_	_
2	doua	doi	NUM	Mofs-l	Gender=Fem|Number=Sing|NumForm=Word|NumType=Ord	3	nummod	_	_
3	zi	zi	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	4	nmod:tmod	_	_
4	avu	avea	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	grijă	grijă	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	4	mwe	_	_
6	să	să	PART	Qs	Mood=Sub	7	mark	_	_
7	sosească	sosi	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	4	ccomp:pmod	_	_
8	printre	printre	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	_
9	primii	prim	NUM	Momprly	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Plur|NumForm=Word|NumType=Ord	7	nummod	_	_
10	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 ccomp:pmod	color:blue
1	Am	avea	AUX	Va--1	Person=1	3	aux	_	_
2	fost	fi	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	3	cop	_	_
3	aprope	aprope	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	0	root	_	_
4	să	să	PART	Qs	Mood=Sub	6	mark	_	_
5	mă	eu	PRON	Pp1-sa--------w	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Weak	6	expl:pv	_	_
6	pun	pune	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	ccomp:pmod	_	_
7	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	_
8	trăsură	trăsură	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	6	nmod	_	_
9	și	și	CONJ	Crssp	Negative=Pos	6	cc	_	_
10	să	să	PART	Qs	Mood=Sub	12	mark	_	_
11	mă	eu	PRON	Pp1-sa--------w	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Weak	12	expl:pv	_	_
12	întorc	întoarce	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	conj	_	_
13	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	14	case	_	_
14	București	București	PROPN	Np	_	12	nmod	_	_
15	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 ccomp:pmod	color:blue
1	Ești	fi	VERB	Vmip2s	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	sigur	sigur	ADV	Rgp	Degree=Pos	0	root	_	_
3	că	că	SCONJ	Csssp	Negative=Pos	4	mark	_	_
4	ții	ține	VERB	Vmip2s	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	2	ccomp:pmod	_	_
5	minte	minte	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	4	mwe	_	_
6	totul	tot	PRON	Pi3msr	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Ind	4	dobj	_	_
7	?	?	PUNCT	QUEST	_	2	punct	_	_

~~~


