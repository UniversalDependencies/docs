

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Bulgarian)

This relation is universal.

4869 nodes (3%) are attached to their parents as `cc`.

3825 instances of `cc` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.65619223659889.

The following 20 pairs of parts of speech are connected with `cc`: [bg-pos/NOUN]()-[bg-pos/CONJ]() (2022; 42% instances), [bg-pos/VERB]()-[bg-pos/CONJ]() (1894; 39% instances), [bg-pos/PROPN]()-[bg-pos/CONJ]() (402; 8% instances), [bg-pos/ADJ]()-[bg-pos/CONJ]() (289; 6% instances), [bg-pos/ADV]()-[bg-pos/CONJ]() (77; 2% instances), [bg-pos/NOUN]()-[bg-pos/ADV]() (54; 1% instances), [bg-pos/PRON]()-[bg-pos/CONJ]() (49; 1% instances), [bg-pos/NUM]()-[bg-pos/CONJ]() (32; 1% instances), [bg-pos/DET]()-[bg-pos/CONJ]() (15; 0% instances), [bg-pos/PART]()-[bg-pos/CONJ]() (8; 0% instances), [bg-pos/ADP]()-[bg-pos/CONJ]() (6; 0% instances), [bg-pos/VERB]()-[bg-pos/ADV]() (4; 0% instances), [bg-pos/ADJ]()-[bg-pos/ADV]() (3; 0% instances), [bg-pos/ADV]()-[bg-pos/ADV]() (3; 0% instances), [bg-pos/VERB]()-[bg-pos/PART]() (3; 0% instances), [bg-pos/VERB]()-[bg-pos/SCONJ]() (3; 0% instances), [bg-pos/NOUN]()-[bg-pos/PART]() (2; 0% instances), [bg-pos/CONJ]()-[bg-pos/CONJ]() (1; 0% instances), [bg-pos/INTJ]()-[bg-pos/CONJ]() (1; 0% instances), [bg-pos/PART]()-[bg-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 cc	color:blue
1	С	с	ADP	R	_	3	case	_	_
2	техния	наш	DET	Pszl-s3mh	Definite=Def|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	3	det	_	_
3	живот	живот	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	8	iobj	_	_
4	и	и	CONJ	Cp	_	3	cc	_	_
5	творчество	творчество	NOUN	Ncnsi	Definite=Ind|Gender=Neut|Number=Sing	3	conj	_	_
6	вече	вече	ADV	Dt	_	8	advmod	_	_
7	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	8	expl	_	_
8	занимава	занимавам-(се)	VERB	Vpitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
9	историята	история	NOUN	Ncfsd	Definite=Def|Gender=Fem|Number=Sing	8	nsubj	_	_
10	.	.	PUNCT	punct	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 cc	color:blue
1	Но	но	CONJ	Cc	_	7	cc	_	_
2	ти	аз	PRON	Ppe-os2	Case=Nom|Number=Sing|Person=2|PronType=Prs	7	nsubj	_	_
3	,	,	PUNCT	punct	_	4	punct	_	_
4	малкият	малък	ADJ	Amsf	Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	7	amod	_	_
5	,	,	PUNCT	punct	_	4	punct	_	_
6	не	не	INTJ	Tn	_	7	neg	_	_
7	мисли	мисля	VERB	Vpitz--2s	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	0	root	_	_
8	,	,	PUNCT	punct	_	12	punct	_	_
9	че	че	SCONJ	Cs	_	12	mark	_	_
10	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	12	expl	_	_
11	е	съм	AUX	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	aux	_	_
12	свършило	свърша-(се)	VERB	Vpptcao-sni	Aspect=Perf|Definite=Ind|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	7	ccomp	_	_
13	.	.	PUNCT	punct	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 cc	color:blue
1	Небесното	небесен	ADJ	Ansd	Definite=Def|Degree=Pos|Gender=Neut|Number=Sing	2	amod	_	_
2	тяло	тяло	NOUN	Ncnsi	Definite=Ind|Gender=Neut|Number=Sing	4	nsubj	_	_
3	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	4	expl	_	_
4	намира	намирам-(се)	VERB	Vpitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	между	между	ADP	R	_	6	case	_	_
6	Уран	уран	PROPN	Npmsi	Definite=Ind|Gender=Masc|Number=Sing	4	iobj	_	_
7	и	и	CONJ	Cp	_	6	cc	_	_
8	Плутон	плутон	PROPN	Npmsi	Definite=Ind|Gender=Masc|Number=Sing	6	conj	_	_

~~~


