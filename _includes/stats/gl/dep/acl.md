

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Galician-TreeGal)

This relation is universal.

402 nodes (3%) are attached to their parents as `acl`.

398 instances of `acl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.50497512437811.

The following 15 pairs of parts of speech are connected with `acl`: [gl-pos/NOUN]()-[gl-pos/VERB]() (289; 72% instances), [gl-pos/PRON]()-[gl-pos/VERB]() (58; 14% instances), [gl-pos/NOUN]()-[gl-pos/NOUN]() (13; 3% instances), [gl-pos/PROPN]()-[gl-pos/VERB]() (11; 3% instances), [gl-pos/NOUN]()-[gl-pos/ADJ]() (8; 2% instances), [gl-pos/VERB]()-[gl-pos/VERB]() (8; 2% instances), [gl-pos/NOUN]()-[gl-pos/PRON]() (3; 1% instances), [gl-pos/PRON]()-[gl-pos/NOUN]() (3; 1% instances), [gl-pos/ADJ]()-[gl-pos/VERB]() (2; 0% instances), [gl-pos/PRON]()-[gl-pos/ADJ]() (2; 0% instances), [gl-pos/DET]()-[gl-pos/VERB]() (1; 0% instances), [gl-pos/NOUN]()-[gl-pos/PROPN]() (1; 0% instances), [gl-pos/NUM]()-[gl-pos/VERB]() (1; 0% instances), [gl-pos/PRON]()-[gl-pos/PRON]() (1; 0% instances), [gl-pos/VERB]()-[gl-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl	color:blue
1	Son	ser	AUX	Vpi30p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
2	só	só	ADV	Wn	_	3	advmod	_	_
3	consultas	consulta	NOUN	Scfp	Gender=Fem|Number=Plur	0	root	_	_
4	que	que	PRON	Tnfp	Gender=Fem|Number=Plur|PronType=Rel	5	nsubj	_	_
5	responden	responder	VERB	Vpi30p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	acl	_	_
6	a	a	ADP	P	AdpType=Prep	8	case	_	_
7	outras	outro	DET	Idfp	Gender=Fem|Number=Plur|PronType=Ind	8	det	_	_
8	consultas	consulta	NOUN	Scfp	Gender=Fem|Number=Plur	5	obj	_	_
9	previas	previo	ADJ	A0fp	Gender=Fem|Number=Plur	8	amod	_	SpaceAfter=No
10	.	.	PUNCT	Q.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 acl	color:blue
1	Dicía	dicir	VERB	Vii30s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
2	Jean	jean	PROPN	Spm0	Gender=Masc	1	nsubj	_	_
3	Cocteau	cocteau	PROPN	Spm0	Gender=Masc	2	flat:name	_	_
4	que	que	SCONJ	Cs	_	10	mark	_	_
5	a	o	DET	Ddfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	moda	moda	NOUN	Scfs	Gender=Fem|Number=Sing	8	nsubj	_	_
7	é	ser	AUX	Vpi30s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
8	o	o	PRON	Ddms	Gender=Masc|Number=Sing|Person=3|PronType=Art	1	ccomp	_	_
9	que	que	PRON	Tnms	Gender=Masc|Number=Sing|PronType=Rel	10	nsubj	_	_
10	pasa	pasar	VERB	Vpi30s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	acl	_	_
11	de	de	ADP	P	AdpType=Prep	12	case	_	_
12	moda	moda	NOUN	Scfs	Gender=Fem|Number=Sing	10	obl	_	SpaceAfter=No
13	.	.	PUNCT	Q.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 acl	color:blue
1	En	en	ADP	P	AdpType=Prep	3	case	_	_
2	calquera	calquera	DET	Idms	Gender=Masc|Number=Sing|PronType=Ind	3	det	_	_
3	grupo	grupo	NOUN	Scms	Gender=Masc|Number=Sing	18	obl	_	_
4	de	de	ADP	P	AdpType=Prep	5	case	_	_
5	goberno	goberno	NOUN	Scms	Gender=Masc|Number=Sing	3	nmod	_	SpaceAfter=No
6	,	,	PUNCT	Q,	_	3	punct	_	_
7	sexa	ser	AUX	Vps30s	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
8	de	de	ADP	P	AdpType=Prep	9	case	_	_
9	coalición	coalición	NOUN	Scfs	Gender=Fem|Number=Sing	3	acl	_	_
10	ou	ou	CCONJ	Cc	_	14	cc	_	_
11	de	de	ADP	P	AdpType=Prep	14	case	_	_
12	unha	un	DET	Difs	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
13	soa	só	ADJ	A0fs	Gender=Fem|Number=Sing	14	amod	_	_
14	cor	cor	NOUN	Scfs	Gender=Fem|Number=Sing	9	conj	_	SpaceAfter=No
15	,	,	PUNCT	Q,	_	18	punct	_	_
16	ten	ter	AUX	Vpi30s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	18	aux	_	_
17	que	que	SCONJ	Cs	_	18	mark	_	_
18	haber	haber	VERB	V0f000	VerbForm=Inf	0	root	_	_
19	disensión	disensión	NOUN	Scfs	Gender=Fem|Number=Sing	18	obj	_	SpaceAfter=No
20	.	.	PUNCT	Q.	_	18	punct	_	_

~~~


