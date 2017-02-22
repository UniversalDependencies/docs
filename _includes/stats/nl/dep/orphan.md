

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This relation is universal.

33 nodes (0%) are attached to their parents as `orphan`.

33 instances of `orphan` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.0909090909091.

The following 6 pairs of parts of speech are connected with `orphan`: [nl-pos/NOUN]()-[nl-pos/NOUN]() (17; 52% instances), [nl-pos/PROPN]()-[nl-pos/PROPN]() (12; 36% instances), [nl-pos/NOUN]()-[nl-pos/X]() (1; 3% instances), [nl-pos/PRON]()-[nl-pos/ADJ]() (1; 3% instances), [nl-pos/PRON]()-[nl-pos/VERB]() (1; 3% instances), [nl-pos/PROPN]()-[nl-pos/X]() (1; 3% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 orphan	color:blue
1	rookvlees	vlees	NOUN	N|soort|ev|neut	Number=Sing	3	cc	_	SpaceAfter=No
2	,	,	PUNCT	Punc|komma	PunctType=Comm	3	punct	_	_
3	rosbief	rosbief	NOUN	N|soort|ev|neut	Number=Sing	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Punc|komma	PunctType=Comm	5	punct	_	_
5	pekelvlees	vlees	NOUN	N|soort|ev|neut	Number=Sing	3	conj	_	SpaceAfter=No
6	,	,	PUNCT	Punc|komma	PunctType=Comm	5	punct	_	_
7	porties	porties	NOUN	N|soort|mv|neut	Number=Plur	5	orphan	_	_
8	leverworst	worst	NOUN	N|soort|ev|neut	Number=Sing	7	nmod	_	SpaceAfter=No
9	.	.	PUNCT	Punc|punt	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 orphan	color:blue
1	Aduard	Aduard	NOUN	N|soort|ev|neut	Number=Sing	3	cc	_	SpaceAfter=No
2	,	,	PUNCT	Punc|komma	PunctType=Comm	3	punct	_	_
3	Aduard	Aduard	PROPN	N|eigen|ev|neut	Number=Sing	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Punc|komma	PunctType=Comm	5	punct	_	_
5	Aduard	Aduard	PROPN	N|eigen|ev|neut	Number=Sing	3	conj	_	SpaceAfter=No
6	,	,	PUNCT	Punc|komma	PunctType=Comm	5	punct	_	_
7	Aduard	Aduard	PROPN	N|eigen|ev|neut	Number=Sing	5	orphan	_	SpaceAfter=No
8	,	,	PUNCT	Punc|komma	PunctType=Comm	5	punct	_	_
9	Aduard	Aduard	PROPN	N|eigen|ev|neut	Number=Sing	5	orphan	_	SpaceAfter=No
10	,	,	PUNCT	Punc|komma	PunctType=Comm	5	punct	_	_
11	Aduard	Aduard	PROPN	N|eigen|ev|neut	Number=Sing	5	orphan	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 orphan	color:blue
1	Oh	Oh	PROPN	Int_N_N_Misc_N	_	0	root	_	MWE=Oh_,_lady_be_good|MWEPOS=X
2	,	,	PUNCT	PUNCT	_	1	punct	_	_
3	lady	lady	PROPN	PROPN	_	1	flat	_	_
4	be	be	PROPN	PROPN	_	3	flat	_	_
5	good	good	PROPN	PROPN	_	3	flat	_	SpaceAfter=No
6	,	,	PUNCT	Punc|komma	PunctType=Comm	7	punct	_	_
7	Honeysuckle	Honeysuckle	PROPN	N_N|eigen|ev|neut_eigen|ev|neut	_	1	conj	_	MWE=Honeysuckle_rose|MWEPOS=X
8	rose	rose	PROPN	PROPN	_	7	flat	_	SpaceAfter=No
9	,	,	PUNCT	Punc|komma	PunctType=Comm	7	punct	_	_
10	One	One	X	Misc_Misc_Punc_N_N	Number=Sing	7	orphan	_	MWE=One_o_'_clock_jump|MWEPOS=X
11	o	o	CCONJ	CCONJ	_	10	compound	_	_
12	'	'	PUNCT	PUNCT	_	10	compound	_	SpaceAfter=No
13	clock	clock	X	X	Number=Sing	10	compound	_	_
14	jump	jump	X	X	Number=Sing	10	compound	_	SpaceAfter=No
15	,	,	PUNCT	Punc|komma	PunctType=Comm	1	punct	_	_
16	enzovoorts	enzovoorts	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	7	cc	_	_
17	(	(	PUNCT	Punc|haakopen	PunctSide=Ini|PunctType=Brck	1	punct	_	SpaceAfter=No
18	Philips	Philips	PROPN	N_Num_N	_	1	dep	_	MWE=Philips_870.002_BFY|MWEPOS=X
19	870.002	870.002	NUM	NUM	NumForm=Digit|NumType=Card	18	nummod	_	_
20	BFY	BFY	PROPN	PROPN	_	18	flat	_	SpaceAfter=No
21	,	,	PUNCT	Punc|komma	PunctType=Comm	1	punct	_	_
22	flo	flo	X	N_Num	Definite=Def|Number=Sing	1	dep	_	MWE=flo_12,80|MWEPOS=X
23	12,80	12,80	NUM	NUM	NumForm=Digit|NumType=Card	22	compound	_	SpaceAfter=No
24	)	)	PUNCT	Punc|haaksluit	PunctSide=Fin|PunctType=Brck	1	punct	_	SpaceAfter=No
25	.	.	PUNCT	Punc|punt	PunctType=Peri	1	punct	_	_

~~~


