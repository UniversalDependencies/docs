

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is a language-specific subtype of [nmod]().
There are also 2 other language-specific subtypes of `nmod`: [nmod:agent](), [nmod:pmod]().

711 nodes (0%) are attached to their parents as `nmod:tmod`.

443 instances of `nmod:tmod` (62%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.69620253164557.

The following 14 pairs of parts of speech are connected with `nmod:tmod`: [ro-pos/VERB]()-[ro-pos/NOUN]() (462; 65% instances), [ro-pos/VERB]()-[ro-pos/NUM]() (143; 20% instances), [ro-pos/NOUN]()-[ro-pos/NOUN]() (32; 5% instances), [ro-pos/NOUN]()-[ro-pos/NUM]() (28; 4% instances), [ro-pos/VERB]()-[ro-pos/ADV]() (13; 2% instances), [ro-pos/ADJ]()-[ro-pos/NOUN]() (12; 2% instances), [ro-pos/VERB]()-[ro-pos/PRON]() (7; 1% instances), [ro-pos/VERB]()-[ro-pos/ADP]() (4; 1% instances), [ro-pos/ADJ]()-[ro-pos/NUM]() (3; 0% instances), [ro-pos/NOUN]()-[ro-pos/ADV]() (3; 0% instances), [ro-pos/ADJ]()-[ro-pos/ADV]() (1; 0% instances), [ro-pos/ADV]()-[ro-pos/NOUN]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/PROPN]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nmod:tmod	color:blue
1	În	în	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	_
2	clipa	clipă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	6	nmod:tmod	_	_
3	aceea	acela	DET	Dd3fsr---o	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|Position=Postnom|PronType=Dem	2	det	_	_
4	,	,	PUNCT	COMMA	_	2	punct	_	_
5	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	6	expl:pass	_	_
6	auzi	auzi	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
7	o	un	DET	Tifsr	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	8	det	_	_
8	bufnitură	bufnitură	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	6	nsubj	_	_
9	înspăimântătoare	înspăimântător	ADJ	Afpf--n	Definite=Ind|Degree=Pos|Gender=Fem	8	amod	_	_
10	.	.	PUNCT	PERIOD	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 nmod:tmod	color:blue
1	Primul	prim	NUM	Momsrly	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing|NumForm=Word|NumType=Ord	2	nummod	_	_
2	stagiu	stagiu	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	5	nsubj	_	_
3	va	vrea	AUX	Va--3s	Number=Sing|Person=3	5	aux	_	_
4	fi	fi	AUX	Vanp	Tense=Pres|VerbForm=Inf	5	aux	_	_
5	completat	completa	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
6	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	_
7	2007	2007	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	5	nmod:tmod	_	_
8	.	.	PUNCT	PERIOD	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nmod:tmod	color:blue
1	Dancu	Dancu	PROPN	Np	_	0	root	_	_
2	,	,	PUNCT	COMMA	_	1	punct	_	_
3	Tomești	Tomești	PROPN	Np	_	1	conj	_	_
4	,	,	PUNCT	COMMA	_	1	punct	_	_
5	Ciurea	Ciurea	PROPN	Np	_	1	conj	_	_
6	și	și	CONJ	Crssp	Negative=Pos	1	cc	_	_
7	Lunca	luncă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	1	conj	_	_
8	Cetățuii	cetățuie	NOUN	Ncfsoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Sing	7	nmod:tmod	_	_
9	.	.	PUNCT	PERIOD	_	1	punct	_	_

~~~


