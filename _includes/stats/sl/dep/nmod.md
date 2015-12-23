

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

20217 nodes (14%) are attached to their parents as `nmod`.

15047 instances of `nmod` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.6887273087006.

The following 42 pairs of parts of speech are connected with `nmod`: [sl-pos/NOUN]()-[sl-pos/NOUN]() (7919; 39% instances), [sl-pos/VERB]()-[sl-pos/NOUN]() (6884; 34% instances), [sl-pos/NOUN]()-[sl-pos/PROPN]() (1517; 8% instances), [sl-pos/ADJ]()-[sl-pos/NOUN]() (1006; 5% instances), [sl-pos/VERB]()-[sl-pos/PRON]() (949; 5% instances), [sl-pos/VERB]()-[sl-pos/PROPN]() (447; 2% instances), [sl-pos/VERB]()-[sl-pos/ADJ]() (239; 1% instances), [sl-pos/PROPN]()-[sl-pos/PROPN]() (237; 1% instances), [sl-pos/ADJ]()-[sl-pos/PRON]() (209; 1% instances), [sl-pos/NOUN]()-[sl-pos/PRON]() (199; 1% instances), [sl-pos/ADV]()-[sl-pos/NOUN]() (95; 0% instances), [sl-pos/ADJ]()-[sl-pos/PROPN]() (78; 0% instances), [sl-pos/NOUN]()-[sl-pos/X]() (78; 0% instances), [sl-pos/PROPN]()-[sl-pos/NOUN]() (72; 0% instances), [sl-pos/PRON]()-[sl-pos/NOUN]() (58; 0% instances), [sl-pos/PRON]()-[sl-pos/PRON]() (52; 0% instances), [sl-pos/PROPN]()-[sl-pos/X]() (30; 0% instances), [sl-pos/ADJ]()-[sl-pos/ADJ]() (27; 0% instances), [sl-pos/X]()-[sl-pos/X]() (24; 0% instances), [sl-pos/NOUN]()-[sl-pos/ADJ]() (10; 0% instances), [sl-pos/VERB]()-[sl-pos/ADP]() (10; 0% instances), [sl-pos/ADV]()-[sl-pos/PRON]() (9; 0% instances), [sl-pos/NUM]()-[sl-pos/PRON]() (9; 0% instances), [sl-pos/ADV]()-[sl-pos/PROPN]() (7; 0% instances), [sl-pos/NUM]()-[sl-pos/NOUN]() (7; 0% instances), [sl-pos/X]()-[sl-pos/PROPN]() (7; 0% instances), [sl-pos/VERB]()-[sl-pos/X]() (6; 0% instances), [sl-pos/NOUN]()-[sl-pos/ADP]() (5; 0% instances), [sl-pos/PRON]()-[sl-pos/PROPN]() (4; 0% instances), [sl-pos/X]()-[sl-pos/NOUN]() (4; 0% instances), [sl-pos/PROPN]()-[sl-pos/PRON]() (3; 0% instances), [sl-pos/ADJ]()-[sl-pos/X]() (2; 0% instances), [sl-pos/ADV]()-[sl-pos/ADJ]() (2; 0% instances), [sl-pos/DET]()-[sl-pos/PRON]() (2; 0% instances), [sl-pos/NUM]()-[sl-pos/PROPN]() (2; 0% instances), [sl-pos/VERB]()-[sl-pos/INTJ]() (2; 0% instances), [sl-pos/ADJ]()-[sl-pos/ADP]() (1; 0% instances), [sl-pos/ADV]()-[sl-pos/X]() (1; 0% instances), [sl-pos/PUNCT]()-[sl-pos/X]() (1; 0% instances), [sl-pos/VERB]()-[sl-pos/NUM]() (1; 0% instances), [sl-pos/VERB]()-[sl-pos/SCONJ]() (1; 0% instances), [sl-pos/X]()-[sl-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nmod	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nmod	color:blue
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
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 nmod	color:blue
1	V	v	ADP	Sl	Case=Loc	3	case	_	Dep=3|Rel=Atr
2	tem	ta	DET	Pd-msl	Case=Loc|Gender=Masc|Number=Sing|PronType=Dem	3	det	_	Dep=3|Rel=Atr
3	trenutku	trenutek	NOUN	Ncmsl	Case=Loc|Gender=Masc|Number=Sing	5	nmod	_	Dep=4|Rel=AdvO
4	je	biti	VERB	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	Dep=0|Rel=Root
5	bistveno	bistven	ADJ	Agpnsn	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	Dep=4|Rel=Atr
6	nerešeno	nerešen	ADJ	Agpnsn	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	7	amod	_	Dep=7|Rel=Atr
7	vprašanje	vprašanje	NOUN	Ncnsn	Case=Nom|Gender=Neut|Number=Sing	5	nsubj	_	Dep=4|Rel=Sb
8	odnosa	odnos	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	Dep=7|Rel=Atr
9	do	do	ADP	Sg	Case=Gen	11	case	_	Dep=11|Rel=Atr
10	AM	AM	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	11	nmod	_	Dep=11|Rel=Atr
11	BUS-a	BUS	PROPN	Npmsg	Case=Gen|Gender=Masc|Number=Sing	8	nmod	_	SpaceAfter=No|Dep=8|Rel=Atr
12	.	.	PUNCT	Z	_	5	punct	_	Dep=0|Rel=Root

~~~


