

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.
There are 1 language-specific subtypes of `flat`: [flat:foreign]().

2328 nodes (1%) are attached to their parents as `flat`.

2328 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.14218213058419.

The following 27 pairs of parts of speech are connected with `flat`: [hr-pos/PROPN]()-[hr-pos/PROPN]() (1960; 84% instances), [hr-pos/ADJ]()-[hr-pos/NOUN]() (50; 2% instances), [hr-pos/PROPN]()-[hr-pos/CCONJ]() (48; 2% instances), [hr-pos/ADP]()-[hr-pos/ADP]() (45; 2% instances), [hr-pos/NOUN]()-[hr-pos/PROPN]() (41; 2% instances), [hr-pos/ADJ]()-[hr-pos/PROPN]() (32; 1% instances), [hr-pos/PROPN]()-[hr-pos/NOUN]() (24; 1% instances), [hr-pos/NOUN]()-[hr-pos/NOUN]() (20; 1% instances), [hr-pos/ADJ]()-[hr-pos/ADJ]() (19; 1% instances), [hr-pos/PROPN]()-[hr-pos/ADP]() (18; 1% instances), [hr-pos/PROPN]()-[hr-pos/X]() (12; 1% instances), [hr-pos/ADP]()-[hr-pos/PROPN]() (11; 0% instances), [hr-pos/X]()-[hr-pos/PROPN]() (9; 0% instances), [hr-pos/PROPN]()-[hr-pos/ADJ]() (7; 0% instances), [hr-pos/X]()-[hr-pos/X]() (7; 0% instances), [hr-pos/NOUN]()-[hr-pos/ADJ]() (6; 0% instances), [hr-pos/NOUN]()-[hr-pos/NUM]() (6; 0% instances), [hr-pos/VERB]()-[hr-pos/NOUN]() (3; 0% instances), [hr-pos/ADP]()-[hr-pos/NOUN]() (2; 0% instances), [hr-pos/ADP]()-[hr-pos/ADJ]() (1; 0% instances), [hr-pos/DET]()-[hr-pos/CCONJ]() (1; 0% instances), [hr-pos/DET]()-[hr-pos/DET]() (1; 0% instances), [hr-pos/DET]()-[hr-pos/NOUN]() (1; 0% instances), [hr-pos/DET]()-[hr-pos/VERB]() (1; 0% instances), [hr-pos/NOUN]()-[hr-pos/ADP]() (1; 0% instances), [hr-pos/NUM]()-[hr-pos/PROPN]() (1; 0% instances), [hr-pos/PROPN]()-[hr-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	Esat	Esat	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
2	Berisha	Berisha	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	1	flat	_	_
3	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
4	jedan	jedan	NUM	_	Case=Nom|Gender=Masc|Number=Sing|NumType=Card	6	nummod	_	_
5	takav	takav	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	6	det	_	_
6	primjer	primjer	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 flat	color:blue
1	"	"	PUNCT	_	_	4	punct	_	SpaceAfter=No
2	To	taj	DET	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	4	nsubj	_	_
3	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	dokaz	dokaz	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
5	naše	naš	DET	_	Case=Gen|Gender=Fem|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	7	det	_	_
6	dobre	dobar	ADJ	_	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	7	amod	_	_
7	volje	volja	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	4	nmod	_	ToDo=nmod
8	Europskoj	europski	ADJ	_	Case=Dat|Degree=Pos|Gender=Fem|Number=Sing	4	obj	_	_
9	uniji	unija	NOUN	_	Case=Dat|Gender=Fem|Number=Sing	8	flat	_	SpaceAfter=No
10	.	.	PUNCT	_	_	4	punct	_	SpaceAfter=No
11	"	"	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 flat	color:blue
1	Želja	želja	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	7	nsubj	_	_
2	Turske	turski	ADJ	_	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	1	nmod	_	_
3	da	da	SCONJ	_	_	4	mark	_	_
4	postane	postati	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	acl	_	_
5	regionalna	regionalan	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	6	amod	_	_
6	sila	sila	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	4	xcomp	_	_
7	pogodila	pogoditi	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
8	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
9	neke	neki	PRON	_	Case=Acc|Gender=Masc|Number=Plur|PronType=Ind	7	obj	_	_
10	u	u	ADP	_	Case=Loc	11	case	_	_
11	Bosni	Bosna	PROPN	_	Case=Loc|Gender=Fem|Number=Sing	9	nmod	_	_
12	i	i	CCONJ	_	_	11	flat	_	_
13	Hercegovini	Hercegovina	PROPN	_	Case=Loc|Gender=Fem|Number=Sing	11	flat	_	SpaceAfter=No
14	.	.	PUNCT	_	_	7	punct	_	_

~~~


