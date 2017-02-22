

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is a language-specific subtype of [advmod]().

124 nodes (0%) are attached to their parents as `advmod:tmod`.

92 instances of `advmod:tmod` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.50806451612903.

The following 10 pairs of parts of speech are connected with `advmod:tmod`: [ro-pos/VERB]()-[ro-pos/ADV]() (83; 67% instances), [ro-pos/VERB]()-[ro-pos/ADP]() (15; 12% instances), [ro-pos/VERB]()-[ro-pos/NOUN]() (6; 5% instances), [ro-pos/ADJ]()-[ro-pos/ADV]() (5; 4% instances), [ro-pos/ADV]()-[ro-pos/ADV]() (5; 4% instances), [ro-pos/NOUN]()-[ro-pos/ADV]() (5; 4% instances), [ro-pos/ADP]()-[ro-pos/ADV]() (2; 2% instances), [ro-pos/AUX]()-[ro-pos/ADV]() (1; 1% instances), [ro-pos/PRON]()-[ro-pos/ADV]() (1; 1% instances), [ro-pos/VERB]()-[ro-pos/VERB]() (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 advmod:tmod	color:blue
1	Acum	acum	ADV	Rgp	Degree=Pos	5	advmod:tmod	_	_
2	nu	nu	PART	Qz	Polarity=Neg	4	advmod	_	_
3	mai	mai	ADV	Rp	_	5	advmod	_	_
4	putea	putea	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
5	gândi	gândi	VERB	Vmnp	Tense=Pres|VerbForm=Inf	4	ccomp	_	_
6	nimic	nimic	PRON	Pz3-sr	Case=Acc,Nom|Number=Sing|Person=3|PronType=Neg	5	obj	_	SpaceAfter=No
7	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 advmod:tmod	color:blue
1	De	de	ADP	Spsa	AdpType=Prep|Case=Acc	4	advmod:tmod	_	_
2	când	când	ADV	Rw	PronType=Int,Rel	1	fixed	_	_
3	am	avea	AUX	Va--1	Person=1	4	aux	_	_
4	urcat	urca	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	9	advcl:tcl	_	SpaceAfter=No
5	,	,	PUNCT	COMMA	_	4	punct	_	_
6	n-	nu	PART	Qz-y	Polarity=Neg|Variant=Short	9	advmod	_	SpaceAfter=No
7	am	avea	AUX	Va--1	Person=1	9	aux	_	_
8	mai	mai	ADV	Rp	_	9	obl	_	_
9	coborât	coborî	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	SpaceAfter=No
10	.	.	PUNCT	PERIOD	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 advmod:tmod	color:blue
1	Poți	putea	VERB	Vmm-2s	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	0	root	_	_
2	să	să	PART	Qs	Mood=Sub	4	mark	_	SpaceAfter=No
3	-ți	tu	PRON	Pp2-sd--y-----w	Case=Dat|Number=Sing|Person=2|PronType=Prs|Strength=Weak|Variant=Short	4	iobj	_	_
4	iei	lua	VERB	Vmip2s	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	1	ccomp	_	_
5	liber	liber	ADV	Rgp	Degree=Pos	4	obj	_	_
6	duminică	duminică	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	4	advmod:tmod	_	SpaceAfter=No
7	?	?	PUNCT	QUEST	_	1	punct	_	_

~~~


