

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

5824 nodes (3%) are attached to their parents as `mark`.

5795 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.64732142857143.

The following 47 pairs of parts of speech are connected with `mark`: [ro-pos/VERB]()-[ro-pos/PART]() (2846; 49% instances), [ro-pos/VERB]()-[ro-pos/SCONJ]() (1317; 23% instances), [ro-pos/VERB]()-[ro-pos/ADP]() (844; 14% instances), [ro-pos/VERB]()-[ro-pos/ADV]() (284; 5% instances), [ro-pos/ADJ]()-[ro-pos/SCONJ]() (109; 2% instances), [ro-pos/NOUN]()-[ro-pos/SCONJ]() (75; 1% instances), [ro-pos/ADJ]()-[ro-pos/PART]() (47; 1% instances), [ro-pos/ADJ]()-[ro-pos/ADV]() (42; 1% instances), [ro-pos/ADV]()-[ro-pos/SCONJ]() (39; 1% instances), [ro-pos/NOUN]()-[ro-pos/PART]() (34; 1% instances), [ro-pos/NOUN]()-[ro-pos/ADV]() (27; 0% instances), [ro-pos/ADV]()-[ro-pos/PART]() (16; 0% instances), [ro-pos/ADV]()-[ro-pos/ADV]() (12; 0% instances), [ro-pos/VERB]()-[ro-pos/CCONJ]() (12; 0% instances), [ro-pos/ADJ]()-[ro-pos/ADP]() (11; 0% instances), [ro-pos/NOUN]()-[ro-pos/ADP]() (11; 0% instances), [ro-pos/AUX]()-[ro-pos/PART]() (10; 0% instances), [ro-pos/ADV]()-[ro-pos/ADP]() (9; 0% instances), [ro-pos/PRON]()-[ro-pos/SCONJ]() (8; 0% instances), [ro-pos/NUM]()-[ro-pos/DET]() (7; 0% instances), [ro-pos/SCONJ]()-[ro-pos/VERB]() (7; 0% instances), [ro-pos/NUM]()-[ro-pos/SCONJ]() (6; 0% instances), [ro-pos/PART]()-[ro-pos/VERB]() (6; 0% instances), [ro-pos/PRON]()-[ro-pos/ADV]() (5; 0% instances), [ro-pos/ADP]()-[ro-pos/SCONJ]() (4; 0% instances), [ro-pos/ADP]()-[ro-pos/VERB]() (4; 0% instances), [ro-pos/ADP]()-[ro-pos/PART]() (3; 0% instances), [ro-pos/VERB]()-[ro-pos/DET]() (3; 0% instances), [ro-pos/ADJ]()-[ro-pos/CCONJ]() (2; 0% instances), [ro-pos/ADV]()-[ro-pos/NOUN]() (2; 0% instances), [ro-pos/ADV]()-[ro-pos/VERB]() (2; 0% instances), [ro-pos/NUM]()-[ro-pos/ADV]() (2; 0% instances), [ro-pos/PRON]()-[ro-pos/PART]() (2; 0% instances), [ro-pos/VERB]()-[ro-pos/AUX]() (2; 0% instances), [ro-pos/VERB]()-[ro-pos/NOUN]() (2; 0% instances), [ro-pos/ADJ]()-[ro-pos/DET]() (1; 0% instances), [ro-pos/ADP]()-[ro-pos/ADV]() (1; 0% instances), [ro-pos/AUX]()-[ro-pos/SCONJ]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/CCONJ]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/DET]() (1; 0% instances), [ro-pos/NUM]()-[ro-pos/PART]() (1; 0% instances), [ro-pos/PART]()-[ro-pos/ADV]() (1; 0% instances), [ro-pos/PART]()-[ro-pos/SCONJ]() (1; 0% instances), [ro-pos/PROPN]()-[ro-pos/ADP]() (1; 0% instances), [ro-pos/PROPN]()-[ro-pos/ADV]() (1; 0% instances), [ro-pos/PROPN]()-[ro-pos/PART]() (1; 0% instances), [ro-pos/PROPN]()-[ro-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 mark	color:blue
1	Cum	cum	ADV	Rw	PronType=Int,Rel	2	advmod	_	_
2	puteai	putea	VERB	Vmii2s	Mood=Ind|Number=Sing|Person=2|Tense=Imp|VerbForm=Fin	0	root	_	_
3	să	să	PART	Qs	Mood=Sub	4	mark	_	_
4	comunici	comunica	VERB	Vmip2s	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
5	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	_
6	viitorul	viitor	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	4	obl	_	SpaceAfter=No
7	?	?	PUNCT	QUEST	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 mark	color:blue
1	Se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	2	expl:pv	_	_
2	înfurie	înfuria	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	mai	mai	ADV	Rp	_	4	advmod	_	_
4	rău	rău	ADV	Rgp	Degree=Pos	2	advmod	_	_
5	că	că	SCONJ	Csssp	Polarity=Pos	9	mark	_	_
6	nu	nu	PART	Qz	Polarity=Neg	8	advmod	_	SpaceAfter=No
7	-și	sine	PRON	Px3--d--y-----w	Case=Dat|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak|Variant=Short	9	expl:pv	_	_
8	putea	putea	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	2	advcl	_	_
9	aduce	aduce	VERB	Vmnp	Tense=Pres|VerbForm=Inf	8	obj	_	_
10	aminte	aminte	ADV	Rgp	Degree=Pos	9	fixed	_	SpaceAfter=No
11	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 mark	color:blue
1	N-	nu	PART	Qz-y	Polarity=Neg|Variant=Short	3	advmod	_	SpaceAfter=No
2	ați	avea	AUX	Va--2p	Number=Plur|Person=2	3	aux	_	_
3	auzit	auzi	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
4	ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	6	obj	_	SpaceAfter=No
5	-a	avea	AUX	Va--3s----y	Number=Sing|Person=3|Variant=Short	6	aux	_	_
6	zis	zice	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	3	ccomp	_	_
7	după	după	ADP	Spsa	AdpType=Prep|Case=Acc	11	mark	_	_
8	ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	7	fixed	_	_
9	i-	el	PRON	Pp3mpa--y-----w	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs|Strength=Weak|Variant=Short	11	expl:poss	_	SpaceAfter=No
10	ați	avea	AUX	Va--2p	Number=Plur|Person=2	11	aux	_	_
11	bușit	buși	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	3	advcl:tcl	_	_
12	mutra	mutră	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	11	obj	_	SpaceAfter=No
13	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


