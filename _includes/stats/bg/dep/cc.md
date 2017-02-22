

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Bulgarian)

This relation is universal.

4398 nodes (3%) are attached to their parents as `cc`.

4393 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.25011368804002.

The following 20 pairs of parts of speech are connected with `cc`: [bg-pos/NOUN]()-[bg-pos/CCONJ]() (1951; 44% instances), [bg-pos/VERB]()-[bg-pos/CCONJ]() (1561; 35% instances), [bg-pos/ADJ]()-[bg-pos/CCONJ]() (331; 8% instances), [bg-pos/PROPN]()-[bg-pos/CCONJ]() (313; 7% instances), [bg-pos/ADV]()-[bg-pos/CCONJ]() (91; 2% instances), [bg-pos/NOUN]()-[bg-pos/ADV]() (47; 1% instances), [bg-pos/PRON]()-[bg-pos/CCONJ]() (36; 1% instances), [bg-pos/NUM]()-[bg-pos/CCONJ]() (23; 1% instances), [bg-pos/DET]()-[bg-pos/CCONJ]() (10; 0% instances), [bg-pos/ADP]()-[bg-pos/CCONJ]() (7; 0% instances), [bg-pos/PART]()-[bg-pos/CCONJ]() (7; 0% instances), [bg-pos/VERB]()-[bg-pos/ADV]() (5; 0% instances), [bg-pos/ADV]()-[bg-pos/ADV]() (4; 0% instances), [bg-pos/VERB]()-[bg-pos/PART]() (3; 0% instances), [bg-pos/ADJ]()-[bg-pos/ADV]() (2; 0% instances), [bg-pos/INTJ]()-[bg-pos/CCONJ]() (2; 0% instances), [bg-pos/NOUN]()-[bg-pos/PART]() (2; 0% instances), [bg-pos/NUM]()-[bg-pos/SCONJ]() (1; 0% instances), [bg-pos/PART]()-[bg-pos/ADV]() (1; 0% instances), [bg-pos/PROPN]()-[bg-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc	color:blue
1	С	с	ADP	R	_	3	case	_	_
2	техния	наш	DET	Pszl-s3mh	Definite=Def|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	3	det	_	_
3	живот	живот	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	8	iobj	_	_
4	и	и	CCONJ	Cp	_	5	cc	_	_
5	творчество	творчество	NOUN	Ncnsi	Definite=Ind|Gender=Neut|Number=Sing	3	conj	_	_
6	вече	вече	ADV	Dt	Degree=Pos	8	advmod	_	_
7	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	8	expl	_	_
8	занимава	занимавам-(се)	VERB	Vpitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
9	историята	история	NOUN	Ncfsd	Definite=Def|Gender=Fem|Number=Sing	8	nsubj	_	SpaceAfter=No
10	.	.	PUNCT	punct	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 cc	color:blue
1	Но	но	CCONJ	Cc	_	7	cc	_	_
2	ти	аз	PRON	Ppe-os2	Case=Nom|Number=Sing|Person=2|PronType=Prs	7	nsubj	_	SpaceAfter=No
3	,	,	PUNCT	punct	_	4	punct	_	_
4	малкият	малък	ADJ	Amsf	Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	7	amod	_	SpaceAfter=No
5	,	,	PUNCT	punct	_	4	punct	_	_
6	не	не	PART	Tn	Polarity=Neg	7	advmod	_	_
7	мисли	мисля	VERB	Vpitz--2s	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	0	root	_	SpaceAfter=No
8	,	,	PUNCT	punct	_	12	punct	_	_
9	че	че	SCONJ	Cs	_	12	mark	_	_
10	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	12	expl	_	_
11	е	съм	AUX	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	aux	_	_
12	свършило	свърша-(се)	VERB	Vpptcao-sni	Aspect=Perf|Definite=Ind|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	7	ccomp	_	SpaceAfter=No
13	.	.	PUNCT	punct	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cc	color:blue
1	В	в	ADP	R	_	3	case	_	_
2	чистата	чист	ADJ	Afsd	Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	3	amod	_	_
3	тишина	тишина	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	5	obl	_	_
4	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	5	expl	_	_
5	носеше	нося-(се)	VERB	Vpitf-m3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	0	root	_	_
6	равният	равен	ADJ	Amsf	Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	9	amod	_	_
7	и	и	CCONJ	Cp	_	8	cc	_	_
8	самотен	самотен	ADJ	Amsi	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	6	conj	_	_
9	глас	глас	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	5	nsubj	_	_
10	на	на	ADP	R	_	11	case	_	_
11	кукувицата	кукувица	NOUN	Ncfsd	Definite=Def|Gender=Fem|Number=Sing	9	nmod	_	SpaceAfter=No
12	.	.	PUNCT	punct	_	5	punct	_	_

~~~


