

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

122 nodes (1%) are attached to their parents as `auxpass`.

119 instances of `auxpass` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.13114754098361.

The following 5 pairs of parts of speech are connected with `auxpass`: [ro-pos/VERB]()-[ro-pos/AUX]() (97; 80% instances), [ro-pos/ADJ]()-[ro-pos/VERB]() (11; 9% instances), [ro-pos/VERB]()-[ro-pos/VERB]() (8; 7% instances), [ro-pos/NOUN]()-[ro-pos/VERB]() (5; 4% instances), [ro-pos/NOUN]()-[ro-pos/AUX]() (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 auxpass	color:blue
1	Va	vrea	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	aux	_	_
2	putea	putea	VERB	Vmnp	Tense=Pres|VerbForm=Inf	0	root	_	_
3	să	să	PART	Qs	Mood=Sub	4	mark	_	_
4	fugă	fugi	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
5	din	din	ADP	Sp	AdpType=Prep	6	case	_	_
6	turnul	turn	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	4	nmod	_	_
7	unde	unde	ADV	Rw	PronType=Int,Rel	9	advmod	_	_
8	era	fi	AUX	Vaii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	9	auxpass	_	_
9	închisă	închis	VERB	Vmp--sf	Gender=Fem|Number=Sing|VerbForm=Part	6	acl	_	_
10	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 auxpass	color:blue
1	Firma	firmă	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	4	nsubjpass	_	_
2	a	avea	AUX	Va--3s	Number=Sing|Person=3	3	aux	_	_
3	fost	fi	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	4	auxpass	_	_
4	amendată	amendat	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	_
5	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	_
6	un	un	DET	Timsr	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	7	det	_	_
7	total	total	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	4	nmod:pmod	_	_
8	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	_
9	2.437ý	2.437ý	NUM	M	NumType=Card	7	nummod	_	_
10	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 auxpass	color:blue
1	Primul	Primul	NUM	Momsrly	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|NumForm=Word|NumType=Card	2	amod	_	AltTag=NUM-ADJ
2	stagiu	stagiu	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	5	nsubj	_	_
3	va	va	AUX	Va--3s	Number=Sing|Person=3	5	aux	_	_
4	fi	fi	VERB	Vmnp	Tense=Pres|VerbForm=Inf	5	auxpass	_	_
5	completat	completat	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
6	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	_
7	1938	1938	NUM	M	NumType=Card	5	nmod:tmod	_	_
8	.	.	PUNCT	PERIOD	_	5	punct	_	_

~~~


