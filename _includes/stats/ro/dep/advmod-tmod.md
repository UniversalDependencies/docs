

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is a language-specific subtype of [advmod]().

136 nodes (0%) are attached to their parents as `advmod:tmod`.

103 instances of `advmod:tmod` (76%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.38235294117647.

The following 9 pairs of parts of speech are connected with `advmod:tmod`: [ro-pos/VERB]()-[ro-pos/ADV]() (95; 70% instances), [ro-pos/VERB]()-[ro-pos/ADP]() (16; 12% instances), [ro-pos/VERB]()-[ro-pos/NOUN]() (6; 4% instances), [ro-pos/ADJ]()-[ro-pos/ADV]() (5; 4% instances), [ro-pos/ADV]()-[ro-pos/ADV]() (5; 4% instances), [ro-pos/NOUN]()-[ro-pos/ADV]() (5; 4% instances), [ro-pos/ADP]()-[ro-pos/ADV]() (2; 1% instances), [ro-pos/PRON]()-[ro-pos/ADV]() (1; 1% instances), [ro-pos/VERB]()-[ro-pos/VERB]() (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 advmod:tmod	color:blue
1	Ziua	ziua	ADV	Rgp	Degree=Pos	2	advmod:tmod	_	_
2	stă	sta	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	ascuns	ascunde	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	2	xcomp	_	_
4	unde	unde	ADV	Rw	PronType=Int,Rel	5	advmod	_	_
5	poate	putea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	advcl	_	_
6	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 advmod:tmod	color:blue
1	De	de	ADP	Spsa	AdpType=Prep|Case=Acc	4	advmod:tmod	_	_
2	când	când	ADV	Rw	PronType=Int,Rel	1	mwe	_	_
3	am	avea	AUX	Va--1	Person=1	4	aux	_	_
4	urcat	urca	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	9	advcl:tcl	_	_
5	,	,	PUNCT	COMMA	_	4	punct	_	_
6	n-	nu	PART	Qz-y	Negative=Neg|Variant=Short	9	neg	_	_
7	am	avea	AUX	Va--1	Person=1	9	aux	_	_
8	mai	mai	ADV	Rp	_	9	nmod	_	_
9	coborât	coborî	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
10	.	.	PUNCT	PERIOD	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 advmod:tmod	color:blue
1	Poți	putea	VERB	Vmm-2s	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	0	root	_	_
2	să	să	PART	Qs	Mood=Sub	4	mark	_	_
3	-ți	tu	PRON	Pp2-sd--y-----w	Case=Dat|Number=Sing|Person=2|PronType=Prs|Strength=Weak|Variant=Short	4	iobj	_	_
4	iei	lua	VERB	Vmip2s	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	1	ccomp	_	_
5	liber	liber	ADV	Rgp	Degree=Pos	4	dobj	_	_
6	duminică	duminică	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	4	advmod:tmod	_	_
7	?	?	PUNCT	QUEST	_	1	punct	_	_

~~~


