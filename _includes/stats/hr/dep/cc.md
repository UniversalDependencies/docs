

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

6978 nodes (4%) are attached to their parents as `cc`.

6895 instances of `cc` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.32659787904844.

The following 36 pairs of parts of speech are connected with `cc`: [hr-pos/NOUN]()-[hr-pos/CCONJ]() (2757; 40% instances), [hr-pos/VERB]()-[hr-pos/CCONJ]() (1965; 28% instances), [hr-pos/ADJ]()-[hr-pos/CCONJ]() (903; 13% instances), [hr-pos/PROPN]()-[hr-pos/CCONJ]() (624; 9% instances), [hr-pos/ADV]()-[hr-pos/CCONJ]() (154; 2% instances), [hr-pos/VERB]()-[hr-pos/SCONJ]() (121; 2% instances), [hr-pos/NOUN]()-[hr-pos/SCONJ]() (76; 1% instances), [hr-pos/AUX]()-[hr-pos/CCONJ]() (58; 1% instances), [hr-pos/DET]()-[hr-pos/CCONJ]() (44; 1% instances), [hr-pos/ADJ]()-[hr-pos/SCONJ]() (43; 1% instances), [hr-pos/NUM]()-[hr-pos/CCONJ]() (43; 1% instances), [hr-pos/NOUN]()-[hr-pos/ADV]() (35; 1% instances), [hr-pos/PRON]()-[hr-pos/CCONJ]() (31; 0% instances), [hr-pos/VERB]()-[hr-pos/ADV]() (23; 0% instances), [hr-pos/NOUN]()-[hr-pos/PART]() (15; 0% instances), [hr-pos/ADP]()-[hr-pos/CCONJ]() (13; 0% instances), [hr-pos/NOUN]()-[hr-pos/ADP]() (13; 0% instances), [hr-pos/ADJ]()-[hr-pos/ADV]() (11; 0% instances), [hr-pos/PART]()-[hr-pos/CCONJ]() (8; 0% instances), [hr-pos/PROPN]()-[hr-pos/ADV]() (6; 0% instances), [hr-pos/VERB]()-[hr-pos/PART]() (5; 0% instances), [hr-pos/X]()-[hr-pos/CCONJ]() (5; 0% instances), [hr-pos/DET]()-[hr-pos/SCONJ]() (3; 0% instances), [hr-pos/NOUN]()-[hr-pos/NOUN]() (3; 0% instances), [hr-pos/PROPN]()-[hr-pos/ADP]() (3; 0% instances), [hr-pos/PROPN]()-[hr-pos/SCONJ]() (3; 0% instances), [hr-pos/AUX]()-[hr-pos/SCONJ]() (2; 0% instances), [hr-pos/DET]()-[hr-pos/ADV]() (2; 0% instances), [hr-pos/SYM]()-[hr-pos/CCONJ]() (2; 0% instances), [hr-pos/ADJ]()-[hr-pos/PART]() (1; 0% instances), [hr-pos/ADP]()-[hr-pos/ADP]() (1; 0% instances), [hr-pos/NOUN]()-[hr-pos/ADJ]() (1; 0% instances), [hr-pos/NUM]()-[hr-pos/ADP]() (1; 0% instances), [hr-pos/NUM]()-[hr-pos/ADV]() (1; 0% instances), [hr-pos/SCONJ]()-[hr-pos/CCONJ]() (1; 0% instances), [hr-pos/VERB]()-[hr-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cc	color:blue
1	Znanost	znanost	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	6	parataxis	_	_
2	i	i	CCONJ	_	_	3	cc	_	_
3	tehnologija	tehnologija	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	1	conj	_	SpaceAfter=No
4	:	:	PUNCT	_	_	1	punct	_	_
5	Microsoft	Microsoft	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
6	otvorio	otvoriti	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
7	središte	središte	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	6	obj	_	_
8	u	u	ADP	_	Case=Loc	9	case	_	_
9	Ateni	Atena	PROPN	_	Case=Loc|Gender=Fem|Number=Sing	6	obl	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 cc	color:blue
1	A	a	CCONJ	_	_	4	cc	_	_
2	onda	onda	ADV	_	Degree=Pos|PronType=Dem	4	advmod	_	_
3	se	sebe	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	4	obj	_	_
4	dogodila	dogoditi	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
5	recesija	recesija	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	SpaceAfter=No
6	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc	color:blue
1	Moldavci	Moldavac	PROPN	_	Case=Nom|Gender=Masc|Number=Plur	3	nsubj	_	_
2	su	biti	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	umorni	umoran	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	0	root	_	_
4	i	i	CCONJ	_	_	5	cc	_	_
5	zbunjeni	zbunjen	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	3	conj	_	SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	_

~~~


