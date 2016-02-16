

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

201 nodes (2%) are attached to their parents as `nummod`.

135 instances of `nummod` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.60199004975124.

The following 12 pairs of parts of speech are connected with `nummod`: [ro-pos/NOUN]()-[ro-pos/NUM]() (167; 83% instances), [ro-pos/VERB]()-[ro-pos/NUM]() (12; 6% instances), [ro-pos/NOUN]()-[ro-pos/DET]() (4; 2% instances), [ro-pos/ADV]()-[ro-pos/NUM]() (3; 1% instances), [ro-pos/NUM]()-[ro-pos/NUM]() (3; 1% instances), [ro-pos/PROPN]()-[ro-pos/NUM]() (3; 1% instances), [ro-pos/SYM]()-[ro-pos/NUM]() (3; 1% instances), [ro-pos/PRON]()-[ro-pos/NUM]() (2; 1% instances), [ro-pos/INTJ]()-[ro-pos/DET]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/NOUN]() (1; 0% instances), [ro-pos/PROPN]()-[ro-pos/X]() (1; 0% instances), [ro-pos/X]()-[ro-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
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


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 2 nummod	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	Amândoi	amândoi	DET	Mlmpr	Case=Nom|Gender=Masc|Number=Plur|NumType=Card|PronType=Tot	2	nummod	_	AltTag=NUM-DET
2	soții	soție	NOUN	Ncmpry	Case=Nom|Definite=Def|Gender=Masc|Number=Plur	5	nsubj	_	_
3	nu	nu	PART	Qz	Negative=Neg	5	neg	_	_
4	mai	mai	ADV	Rp	_	5	advmod	_	_
5	puteau	putea	VERB	Vmii3p	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
6	de	de	ADP	Sp	AdpType=Prep	7	case	_	_
7	mândrie	mândrie	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	5	nmod	_	_
8	.	.	PUNCT	PERIOD	_	5	punct	_	_

~~~


