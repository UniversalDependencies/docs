

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

1438 nodes (12%) are attached to their parents as `case`.

1401 instances of `case` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.26564673157163.

The following 15 pairs of parts of speech are connected with `case`: [ro-pos/NOUN]()-[ro-pos/ADP]() (1094; 76% instances), [ro-pos/NUM]()-[ro-pos/ADP]() (92; 6% instances), [ro-pos/PROPN]()-[ro-pos/ADP]() (86; 6% instances), [ro-pos/PRON]()-[ro-pos/ADP]() (66; 5% instances), [ro-pos/VERB]()-[ro-pos/ADP]() (34; 2% instances), [ro-pos/ADV]()-[ro-pos/ADP]() (25; 2% instances), [ro-pos/NOUN]()-[ro-pos/ADV]() (16; 1% instances), [ro-pos/ADJ]()-[ro-pos/ADP]() (12; 1% instances), [ro-pos/NOUN]()-[ro-pos/VERB]() (5; 0% instances), [ro-pos/DET]()-[ro-pos/ADP]() (2; 0% instances), [ro-pos/PRON]()-[ro-pos/ADV]() (2; 0% instances), [ro-pos/CONJ]()-[ro-pos/ADP]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/ADJ]() (1; 0% instances), [ro-pos/NUM]()-[ro-pos/SCONJ]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/PUNCT]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 case	color:blue
1	Era	fi	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	cop	_	_
2	o	un	DET	Tifsr	Case=Nom|Gender=Fem|Number=Sing|PronType=Ind	3	det	_	_
3	plăcere	plăcere	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	0	root	_	_
4	să	să	PART	Qs	Mood=Sub	5	mark	_	_
5	asiști	asista	VERB	Vmip2s	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	3	csubj	_	_
6	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	_
7	o	un	DET	Tifsr	Case=Nom|Gender=Fem|Number=Sing|PronType=Ind	8	det	_	_
8	examinare	examinare	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	5	nmod:pmod	_	_
9	a	al	DET	Tsfs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	10	det	_	_
10	lui	lui	DET	Ds3---s	Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	8	nmod	_	_
11	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 case	color:blue
1	În	În	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	_
2	1938	1938	NUM	M	NumType=Card	10	nummod	_	_
3	,	,	PUNCT	COMMA	_	2	punct	_	_
4	regele	regele	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	10	nsubj	_	_
5	Carol	Carol	PROPN	Np	_	4	nmod	_	_
6	al	al	DET	Tsms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	7	det	_	_
7	II	II	NUM	Mo-s-r	Number=Sing|NumForm=Roman|NumType=Card	5	nummod	_	AltTag=NUM-ADJ
8	-lea	-lea	DET	Tfms-y	Definite=Def|Gender=Masc|Number=Sing|PronType=Art|Variant=Short	7	det	_	_
9	își	își	PRON	Px3--d--------w	Case=Dat|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	10	expl:pv	_	_
10	asumă	asumă	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
11	puteri	puteri	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	10	dobj	_	_
12	dictatoriale	dictatoriale	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	11	amod	_	_
13	.	.	PUNCT	PERIOD	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 case	color:blue
1	Un	un	DET	Timsr	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	2	det	_	_
2	om	vrea	NOUN	Ncmsrn	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	10	nsubj	_	_
3	ca	ca	ADV	Rc	_	4	case	_	_
4	el	el	PRON	Pp3msr--------s	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Strong	2	nmod	_	_
5	nici	nici	ADV	Rz	PronType=Neg	6	advmod	_	_
6	doi	doi	NUM	Mcmp-l	Gender=Masc|Number=Plur|NumForm=Word|NumType=Card	7	nummod	_	_
7	ani	an	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	10	nmod	_	_
8	n-	nu	PART	Qz	Negative=Neg	10	neg	_	_
9	a	avea	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	_
10	putut	putea	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
11	să	să	PART	Qs	Mood=Sub	12	mark	_	_
12	stea	sta	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	10	ccomp	_	_
13	în	în	ADP	Sp	AdpType=Prep	14	case	_	_
14	Butucani	Butucani	PROPN	Np	_	12	nmod	_	_
15	.	.	PUNCT	PERIOD	_	10	punct	_	_

~~~


