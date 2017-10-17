

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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 orphan	color:blue
1	Door	door	ADP	Prep|voor	AdpType=Prep	3	case	_	_
2	de	de	DET	Art|bep|zijdofmv|neut	Definite=Def|PronType=Art	3	det	_	_
3	stewards	stewards	NOUN	N|soort|mv|neut	Number=Plur	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Punc|komma	PunctType=Comm	6	punct	_	_
5	een	een	DET	Art|onbep|zijdofonzijd|neut	Definite=Ind|Number=Sing|PronType=Art	6	det	_	_
6	team	team	NOUN	N|soort|ev|neut	Number=Sing	3	conj	_	_
7	van	van	ADP	Prep|voor	AdpType=Prep	8	case	_	_
8	doktoren	dokter	NOUN	N|soort|mv|neut	Number=Plur	6	nmod	_	_
9	en	en	CCONJ	Conj|neven	_	6	cc	_	_
10	maatschappelijk	maatschappelijk	X	Adj_N	Degree=Pos|Number=Plur	6	orphan	_	MWE=maatschappelijk_werkers|MWEPOS=X
11	werkers	werkers	X	X	Degree=Pos|Number=Plur	10	compound	_	SpaceAfter=No
12	.	.	PUNCT	Punc|punt	PunctType=Peri	3	punct	_	_

~~~


