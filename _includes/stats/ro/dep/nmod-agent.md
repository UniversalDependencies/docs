

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is a language-specific subtype of [nmod]().
There are also 2 other language-specific subtypes of `nmod`: [nmod:pmod](), [nmod:tmod]().

523 nodes (0%) are attached to their parents as `nmod:agent`.

522 instances of `nmod:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.78011472275335.

The following 11 pairs of parts of speech are connected with `nmod:agent`: [ro-pos/VERB]()-[ro-pos/NOUN]() (326; 62% instances), [ro-pos/ADJ]()-[ro-pos/NOUN]() (96; 18% instances), [ro-pos/VERB]()-[ro-pos/PROPN]() (49; 9% instances), [ro-pos/VERB]()-[ro-pos/PRON]() (21; 4% instances), [ro-pos/NOUN]()-[ro-pos/NOUN]() (12; 2% instances), [ro-pos/ADJ]()-[ro-pos/PRON]() (7; 1% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (5; 1% instances), [ro-pos/ADJ]()-[ro-pos/PROPN]() (3; 1% instances), [ro-pos/NOUN]()-[ro-pos/PROPN]() (2; 0% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 nmod:agent	color:blue
1	Primele	Primele	NUM	Mofprly	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur|NumForm=Word|NumType=Ord	3	nummod	_	_
2	trei	trei	NUM	Mc-p-l	Number=Plur|NumForm=Word|NumType=Card	3	nummod	_	_
3	cărți	carte	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	6	nsubjpass	_	_
4	au	avea	AUX	Va--3p	Number=Plur|Person=3	6	aux	_	_
5	fost	fi	AUX	Vap--sm	Gender=Masc|Number=Sing|VerbForm=Part	6	auxpass	_	_
6	premiate	premia	VERB	Vmp--pf	Gender=Fem|Number=Plur|VerbForm=Part	0	root	_	_
7	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	_
8	1909	1909	NOUN	Etd	_	6	nmod	_	_
9	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	10	case	_	_
10	Academia	academie	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	6	nmod:agent	_	_
11	Română	român	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	10	amod	_	_
12	.	.	PUNCT	PERIOD	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 nmod:agent	color:blue
1	Îi	el	PRON	Pp3-sd--------w	Case=Dat|Number=Sing|Person=3|PronType=Prs|Strength=Weak	4	iobj	_	_
2	mai	mai	ADV	Rp	_	4	advmod	_	_
3	fusese	fi	VERB	Vmil3s	Mood=Ind|Number=Sing|Person=3|Tense=Pqp|VerbForm=Fin	4	auxpass	_	_
4	sugerat	sugerat	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	_
5	și	și	ADV	Rgp	Degree=Pos	7	advmod	_	_
6	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	_
7	cartea	carte	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	4	nmod:agent	_	_
8	pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	_
9	care	care	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	11	dobj	_	_
10	o	el	PRON	Pp3fsa--------w	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Strength=Weak	11	expl	_	_
11	scosese	scoate	VERB	Vmil3s	Mood=Ind|Number=Sing|Person=3|Tense=Pqp|VerbForm=Fin	7	acl	_	_
12	din	din	ADP	Spsa	AdpType=Prep|Case=Acc	13	case	_	_
13	sertar	sertar	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	11	nmod	_	_
14	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 nmod:agent	color:blue
1	Am	avea	AUX	Va--1	Person=1	2	aux	_	_
2	rămas	rămâne	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
3	,	,	PUNCT	COMMA	_	4	punct	_	_
4	acolo	acolo	ADV	Rgp	Degree=Pos	2	advmod	_	_
5	,	,	PUNCT	COMMA	_	4	punct	_	_
6	bătut	bate	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	2	xcomp	_	_
7	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	_
8	Dumnezeu	Dumnezeu	PROPN	Np	_	6	nmod:agent	_	_
9	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


