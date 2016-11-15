

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.
There are 4 language-specific subtypes of `expl`: [expl:impers](), [expl:pass](), [expl:poss](), [expl:pv]().

498 nodes (0%) are attached to their parents as `expl`.

440 instances of `expl` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.35341365461847.

The following 8 pairs of parts of speech are connected with `expl`: [ro-pos/VERB]()-[ro-pos/PRON]() (484; 97% instances), [ro-pos/ADJ]()-[ro-pos/PRON]() (5; 1% instances), [ro-pos/AUX]()-[ro-pos/PRON]() (3; 1% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (2; 0% instances), [ro-pos/NOUN]()-[ro-pos/ADP]() (1; 0% instances), [ro-pos/PROPN]()-[ro-pos/PRON]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/NOUN]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 expl	color:blue
1	Două	doi	NUM	Mcfp-l	Gender=Fem|Number=Plur|NumForm=Word|NumType=Card	2	nummod	_	_
2	degete	deget	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	8	dobj	_	_
3	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	5	case	_	_
4	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	3	mwe	_	_
5	mâna	mână	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	2	nmod	_	_
6	dreaptă	drept	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	5	amod	_	_
7	le	el	PRON	Pp3fpa--------w	Case=Acc|Gender=Fem|Number=Plur|Person=3|PronType=Prs|Strength=Weak	8	expl	_	_
8	avea	avea	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
9	pătate	păta	VERB	Vmp--pf	Gender=Fem|Number=Plur|VerbForm=Part	8	xcomp	_	_
10	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	_
11	cerneală	cerneală	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	9	nmod	_	_
12	.	.	PUNCT	PERIOD	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 expl	color:blue
1	Conducătorii	conducător	NOUN	Ncmpry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Plur	7	nsubjpass	_	_
2	locali	local	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	1	amod	_	_
3	au	avea	AUX	Va--3p	Number=Plur|Person=3	7	aux	_	_
4	fost	fi	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	7	auxpass	_	_
5	și	și	CONJ	Crssp	Negative=Pos	6	advmod	_	_
6	ei	el	PRON	Pp3mpr--------s	Case=Acc,Nom|Gender=Masc|Number=Plur|Person=3|PronType=Prs|Strength=Strong	7	expl	_	_
7	menținuți	menținut	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	0	root	_	_
8	.	.	PUNCT	PERIOD	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 expl	color:blue
1	Vitaminele	vitamină	NOUN	Ncfpry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur	2	nsubj	_	_
2	au	avea	AUX	Va--3p	Number=Plur|Person=3	0	root	_	_
3	și	și	CONJ	Crssp	Negative=Pos	4	advmod	_	_
4	ele	el	PRON	Pp3fpr--------s	Case=Acc,Nom|Gender=Fem|Number=Plur|Person=3|PronType=Prs|Strength=Strong	2	expl	_	_
5	un	un	DET	Timsr	Case=Acc,Nom|Gender=Masc|Number=Sing|PronType=Ind	6	det	_	_
6	rol	rol	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	2	dobj	_	_
7	foarte	foarte	ADV	Rp	_	8	advmod	_	_
8	important	important	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	6	amod	_	_
9	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


