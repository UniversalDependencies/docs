

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

43 nodes (0%) are attached to their parents as `csubj`.

38 instances of `csubj` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.90697674418605.

The following 7 pairs of parts of speech are connected with `csubj`: [ro-pos/VERB]()-[ro-pos/VERB]() (30; 70% instances), [ro-pos/ADV]()-[ro-pos/VERB]() (6; 14% instances), [ro-pos/NOUN]()-[ro-pos/VERB]() (2; 5% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (2; 5% instances), [ro-pos/ADJ]()-[ro-pos/VERB]() (1; 2% instances), [ro-pos/PRON]()-[ro-pos/VERB]() (1; 2% instances), [ro-pos/VERB]()-[ro-pos/PRON]() (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 csubj	color:blue
1	Deasupra	deasupra	ADP	Sp	AdpType=Prep	2	case	_	_
2	tuturora	totul	PRON	Pi3-po	Case=Gen|Number=Plur|Person=3|PronType=Ind	4	nmod	_	_
3	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	4	dobj	_	_
4	ridică	ridica	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	cine	cine	PRON	Pw3--r	Case=Nom|Person=3|PronType=Int,Rel	6	nsubj	_	_
6	poate	putea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	csubj	_	_
7	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 csubj	color:blue
1	Poate	putea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	parataxis	_	_
2	de	de	ADP	Sp	AdpType=Prep	3	mark	_	_
3	aci	aci	ADV	Rgp	Degree=Pos	8	advmod	_	_
4	mai	mai	ADV	Rp	_	6	advmod	_	_
5	e	fi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
6	cu_putință	cu_putință	ADV	Rp	_	0	root	_	_
7	să	să	PART	Qs	Mood=Sub	8	mark	_	_
8	vie	veni	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	6	csubj	_	_
9	o	un	DET	Tifsr	Case=Nom|Gender=Fem|Number=Sing|PronType=Ind	10	det	_	_
10	scăpare	scăpare	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	8	nsubj	_	_
11	.	.	PUNCT	PERIOD	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 19 csubj	color:blue
1	Dacă	dacă	SCONJ	Csssp	Negative=Pos	3	mark	_	_
2	pacienta	pacientă	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	3	nsubj	_	_
3	dorește	dori	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	18	advcl	_	_
4	să	să	PART	Qs	Mood=Sub	5	mark	_	_
5	rămână	rămâne	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	3	ccomp	_	_
6	gravidă	gravidă	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	5	xcomp	_	_
7	sau	sau	CONJ	Ccssp	Negative=Pos	3	cc	_	_
8	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	_
9	cazul	caz	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	3	conj	_	_
10	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	_
11	care	care	PRON	Pw3--r	Case=Nom|Person=3|PronType=Int,Rel	12	nmod	_	_
12	survine	surveni	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	acl	_	_
13	sarcina	sarcină	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	12	nsubj	_	_
14	,	,	PUNCT	COMMA	_	3	punct	_	_
15	tratamentul	tratament	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	19	nsubj	_	_
16	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	17	case	_	_
17	AVAGLIM	AVAGLIM	PROPN	Np	_	15	nmod	_	_
18	trebuie	trebui	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
19	întrerupt	întrerupt	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	18	csubj	_	_
20	.	.	PUNCT	PERIOD	_	18	punct	_	_

~~~


