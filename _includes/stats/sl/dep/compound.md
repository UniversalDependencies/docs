

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

114 nodes (0%) are attached to their parents as `compound`.

107 instances of `compound` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.07894736842105.

The following 2 pairs of parts of speech are connected with `compound`: [sl-pos/NOUN]()-[sl-pos/NUM]() (80; 70% instances), [sl-pos/NUM]()-[sl-pos/NUM]() (34; 30% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 compound	color:blue
1	Stala	stati	VERB	Vmpp-sf	Aspect=Imp|Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	Dep=0|Rel=Root
2	je	biti	AUX	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	aux	_	Dep=1|Rel=PPart
3	milijardo	milijarda	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	1	nmod	_	Dep=1|Rel=AdvM
4	tolarjev	tolar	NOUN	Ncmpg	Case=Gen|Gender=Masc|Number=Plur	3	nmod	_	Dep=3|Rel=Atr
5	in	in	CONJ	Cc	_	3	cc	_	Dep=8|Rel=Conj
6	dvesto	dvesto	NUM	Mlc-pa	Case=Acc|Number=Plur|NumForm=Word|NumType=Card	8	compound	_	Dep=8|Rel=Atr
7	petdeset	petdeset	NUM	Mlc-pa	Case=Acc|Number=Plur|NumForm=Word|NumType=Card	8	compound	_	Dep=8|Rel=Atr
8	milijonov	milijon	NOUN	Ncmpg	Case=Gen|Gender=Masc|Number=Plur	3	conj	_	SpaceAfter=No|Dep=3|Rel=Coord
9	.	.	PUNCT	Z	_	1	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 compound	color:blue
1	Lastnik	lastnik	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	Dep=4|Rel=Sb
2	iz	iz	ADP	Sg	Case=Gen	3	case	_	Dep=3|Rel=Atr
3	Ljubljane	Ljubljana	PROPN	Npfsg	Case=Gen|Gender=Fem|Number=Sing	1	nmod	_	Dep=1|Rel=Atr
4	ima	imeti	VERB	Vmpr3s-n	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Dep=0|Rel=Root
5	za	za	ADP	Sa	Case=Acc	9	case	_	Dep=9|Rel=Atr
6	približno	približno	ADV	Rgp	Degree=Pos	7	advmod	_	Dep=7|Rel=Atr
7	300	300	NUM	Mdc	NumForm=Digit|NumType=Card	8	compound	_	Dep=8|Rel=Atr
8	tisoč	tisoč	NUM	Mlc-pa	Case=Acc|Number=Plur|NumForm=Word|NumType=Card	9	nummod	_	Dep=9|Rel=Atr
9	tolarjev	tolar	NOUN	Ncmpg	Case=Gen|Gender=Masc|Number=Plur	4	xcomp	_	Dep=4|Rel=Obj
10	škode	škoda	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	9	nmod	_	SpaceAfter=No|Dep=9|Rel=Atr
11	.	.	PUNCT	Z	_	4	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~


