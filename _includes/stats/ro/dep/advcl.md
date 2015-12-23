

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.
There are 2 language-specific subtypes of `advcl`: [advcl:tcl](), [advcl:tmod]().

175 nodes (1%) are attached to their parents as `advcl`.

125 instances of `advcl` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.75428571428571.

The following 11 pairs of parts of speech are connected with `advcl`: [ro-pos/VERB]()-[ro-pos/VERB]() (128; 73% instances), [ro-pos/NOUN]()-[ro-pos/VERB]() (12; 7% instances), [ro-pos/ADJ]()-[ro-pos/VERB]() (11; 6% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (7; 4% instances), [ro-pos/NOUN]()-[ro-pos/ADJ]() (6; 3% instances), [ro-pos/ADV]()-[ro-pos/VERB]() (4; 2% instances), [ro-pos/VERB]()-[ro-pos/ADV]() (2; 1% instances), [ro-pos/VERB]()-[ro-pos/NOUN]() (2; 1% instances), [ro-pos/ADJ]()-[ro-pos/ADJ]() (1; 1% instances), [ro-pos/ADJ]()-[ro-pos/NOUN]() (1; 1% instances), [ro-pos/NUM]()-[ro-pos/VERB]() (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 advcl	color:blue
1	O	un	DET	Tifsr	Case=Nom|Gender=Fem|Number=Sing|PronType=Ind	2	det	_	_
2	explozie	explozie	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	10	nsubj	_	_
3	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	4	case	_	_
4	râs	râs	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	2	nmod	_	_
5	,	,	PUNCT	COMMA	_	7	punct	_	_
6	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	7	mark	_	_
7	răsunară	răsuna	VERB	Vmis3p	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	10	advcl	_	_
8	pereții	perete	NOUN	Ncmpry	Case=Nom|Definite=Def|Gender=Masc|Number=Plur	7	nsubj	_	_
9	,	,	PUNCT	COMMA	_	7	punct	_	_
10	izbucni	izbucni	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
11	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	12	case	_	_
12	clasă	clasă	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	10	nmod	_	_
13	.	.	PUNCT	PERIOD	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 advcl	color:blue
1	Dintre	Dintre	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	_
2	domnitorii	domnitorii	NOUN	Ncmpry	Case=Nom|Definite=Def|Gender=Masc|Number=Plur	13	iobj	_	_
3	ce	ce	PRON	Pw3--r	Case=Nom|Person=3|PronType=Int,Rel	5	nsubj	_	_
4	au	au	AUX	Va--3p	Number=Plur|Person=3	5	aux	_	_
5	avut	avut	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	2	advcl	_	_
6	un	un	DET	Timsr	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	7	det	_	_
7	rol	rol	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	5	dobj	_	_
8	mai	mai	ADV	Rp	_	9	advmod	_	_
9	important	important	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	7	amod	_	_
10	,	,	PUNCT	COMMA	_	2	punct	_	_
11	pot	pot	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	13	aux	_	_
12	fi	fi	AUX	Vanp	Tense=Pres|VerbForm=Inf	13	auxpass	_	_
13	amintiți	aminti	VERB	Vmp--pm	Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	_
14	:	:	PUNCT	COLON	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 13 advcl	color:blue
1	Era	fi	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	cop	_	_
2	un	un	DET	Timsr	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	3	det	_	_
3	băiet	băiet	NOUN	Ncmsrn	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
4	ochios	ochios	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	3	amod	_	_
5	,	,	PUNCT	COMMA	_	4	punct	_	_
6	sprâncenat	sprâncenat	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	4	conj	_	_
7	și	și	CONJ	Crssp	Negative=Pos	4	cc	_	_
8	frumușel	frumușel	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	4	conj	_	_
9	de	de	SCONJ	Csssp	Negative=Pos	13	mark	_	_
10	nu	nu	PART	Qz	Negative=Neg	13	neg	_	_
11	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	13	expl:pv	_	_
12	mai	mai	ADV	Rp	_	13	advmod	_	_
13	poate	putea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	advcl	_	_
14	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


