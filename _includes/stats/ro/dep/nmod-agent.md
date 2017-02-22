

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is a language-specific subtype of [nmod]().
There are also 2 other language-specific subtypes of `nmod`: [nmod:pmod](), [nmod:tmod]().

782 nodes (0%) are attached to their parents as `nmod:agent`.

781 instances of `nmod:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.75831202046036.

The following 11 pairs of parts of speech are connected with `nmod:agent`: [ro-pos/VERB]()-[ro-pos/NOUN]() (606; 77% instances), [ro-pos/VERB]()-[ro-pos/PROPN]() (76; 10% instances), [ro-pos/VERB]()-[ro-pos/PRON]() (34; 4% instances), [ro-pos/ADJ]()-[ro-pos/NOUN]() (33; 4% instances), [ro-pos/NOUN]()-[ro-pos/NOUN]() (20; 3% instances), [ro-pos/NOUN]()-[ro-pos/PROPN]() (4; 1% instances), [ro-pos/ADJ]()-[ro-pos/PROPN]() (3; 0% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (2; 0% instances), [ro-pos/VERB]()-[ro-pos/VERB]() (2; 0% instances), [ro-pos/ADJ]()-[ro-pos/PRON]() (1; 0% instances), [ro-pos/ADV]()-[ro-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 nmod:agent	color:blue
1	Îi	el	PRON	Pp3-sd--------w	Case=Dat|Number=Sing|Person=3|PronType=Prs|Strength=Weak	4	iobj	_	_
2	mai	mai	ADV	Rp	_	4	advmod	_	_
3	fusese	fi	AUX	Vail3s	Mood=Ind|Number=Sing|Person=3|Tense=Pqp|VerbForm=Fin	4	aux:pass	_	_
4	sugerat	sugera	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
5	și	și	CCONJ	Crssp	Polarity=Pos	7	advmod	_	_
6	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	_
7	cartea	carte	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	4	nmod:agent	_	_
8	pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	_
9	care	care	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	11	obj	_	_
10	o	el	PRON	Pp3fsa--------w	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Strength=Weak	11	expl	_	_
11	scosese	scoate	VERB	Vmil3s	Mood=Ind|Number=Sing|Person=3|Tense=Pqp|VerbForm=Fin	7	acl	_	_
12	din	din	ADP	Spsa	AdpType=Prep|Case=Acc	13	case	_	_
13	sertar	sertar	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	11	obl	_	SpaceAfter=No
14	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 nmod:agent	color:blue
1	Am	avea	AUX	Va--1	Person=1	2	aux	_	_
2	rămas	rămâne	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	SpaceAfter=No
3	,	,	PUNCT	COMMA	_	4	punct	_	_
4	acolo	acolo	ADV	Rgp	Degree=Pos	2	advmod	_	SpaceAfter=No
5	,	,	PUNCT	COMMA	_	4	punct	_	_
6	bătut	bate	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	2	xcomp	_	_
7	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	_
8	Dumnezeu	Dumnezeu	PROPN	Np	_	6	nmod:agent	_	SpaceAfter=No
9	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 nmod:agent	color:blue
1	Se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	2	expl:pv	_	_
2	găseau	găsi	VERB	Vmii3p	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
3	întotdeauna	întotdeauna	ADV	Rgp	Degree=Pos	2	advmod	_	_
4	alți	alt	DET	Di3mpr---e	Case=Acc,Nom|Gender=Masc|Number=Plur|Person=3|Position=Prenom|PronType=Ind	7	det	_	_
5	și	și	CCONJ	Crssp	Polarity=Pos	6	cc	_	_
6	alți	alt	DET	Di3mpr---e	Case=Acc,Nom|Gender=Masc|Number=Plur|Person=3|Position=Prenom|PronType=Ind	4	conj	_	_
7	naivi	naiv	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	2	nsubj	_	_
8	care	care	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	10	nsubj:pass	_	_
9	erau	fi	AUX	Vaii3p	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	10	aux:pass	_	_
10	seduși	seduce	VERB	Vmp--pm	Gender=Masc|Number=Plur|VerbForm=Part	7	acl	_	_
11	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	12	case	_	_
12	el	el	PRON	Pp3msr--------s	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Strong	10	nmod:agent	_	SpaceAfter=No
13	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


