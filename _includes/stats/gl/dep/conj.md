

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Galician-TreeGal)

This relation is universal.

1009 nodes (4%) are attached to their parents as `conj`.

1006 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.50346878097126.

The following 39 pairs of parts of speech are connected with `conj`: [gl-pos/NOUN]()-[gl-pos/NOUN]() (363; 36% instances), [gl-pos/VERB]()-[gl-pos/VERB]() (209; 21% instances), [gl-pos/PROPN]()-[gl-pos/PROPN]() (125; 12% instances), [gl-pos/ADJ]()-[gl-pos/ADJ]() (116; 11% instances), [gl-pos/ADJ]()-[gl-pos/VERB]() (26; 3% instances), [gl-pos/NOUN]()-[gl-pos/VERB]() (23; 2% instances), [gl-pos/PROPN]()-[gl-pos/NOUN]() (19; 2% instances), [gl-pos/VERB]()-[gl-pos/NOUN]() (19; 2% instances), [gl-pos/NUM]()-[gl-pos/NUM]() (17; 2% instances), [gl-pos/VERB]()-[gl-pos/ADJ]() (12; 1% instances), [gl-pos/NOUN]()-[gl-pos/PRON]() (10; 1% instances), [gl-pos/NOUN]()-[gl-pos/PROPN]() (9; 1% instances), [gl-pos/NOUN]()-[gl-pos/ADJ]() (8; 1% instances), [gl-pos/PRON]()-[gl-pos/PRON]() (6; 1% instances), [gl-pos/ADV]()-[gl-pos/ADV]() (5; 0% instances), [gl-pos/PRON]()-[gl-pos/NOUN]() (5; 0% instances), [gl-pos/ADJ]()-[gl-pos/NOUN]() (4; 0% instances), [gl-pos/VERB]()-[gl-pos/PRON]() (4; 0% instances), [gl-pos/NOUN]()-[gl-pos/X]() (3; 0% instances), [gl-pos/VERB]()-[gl-pos/ADV]() (3; 0% instances), [gl-pos/ADV]()-[gl-pos/VERB]() (2; 0% instances), [gl-pos/NOUN]()-[gl-pos/ADV]() (2; 0% instances), [gl-pos/PRON]()-[gl-pos/VERB]() (2; 0% instances), [gl-pos/PROPN]()-[gl-pos/PRON]() (2; 0% instances), [gl-pos/ADP]()-[gl-pos/NOUN]() (1; 0% instances), [gl-pos/ADV]()-[gl-pos/ADJ]() (1; 0% instances), [gl-pos/ADV]()-[gl-pos/NOUN]() (1; 0% instances), [gl-pos/DET]()-[gl-pos/ADJ]() (1; 0% instances), [gl-pos/DET]()-[gl-pos/NOUN]() (1; 0% instances), [gl-pos/NOUN]()-[gl-pos/CONJ]() (1; 0% instances), [gl-pos/NOUN]()-[gl-pos/DET]() (1; 0% instances), [gl-pos/NOUN]()-[gl-pos/SYM]() (1; 0% instances), [gl-pos/PRON]()-[gl-pos/ADV]() (1; 0% instances), [gl-pos/PRON]()-[gl-pos/PROPN]() (1; 0% instances), [gl-pos/PROPN]()-[gl-pos/ADV]() (1; 0% instances), [gl-pos/PROPN]()-[gl-pos/VERB]() (1; 0% instances), [gl-pos/PROPN]()-[gl-pos/X]() (1; 0% instances), [gl-pos/VERB]()-[gl-pos/ADP]() (1; 0% instances), [gl-pos/VERB]()-[gl-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 conj	color:blue
1	liberdade	liberdade	NOUN	Scfs	Gender=Fem|Number=Sing	0	root	_	_
2	,	,	PUNCT	Q,	_	1	punct	_	_
3	xustiza	xustiza	NOUN	Scfs	Gender=Fem|Number=Sing	1	conj	_	_
4	,	,	PUNCT	Q,	_	1	punct	_	_
5	benestar	benestar	NOUN	Scms	Gender=Masc|Number=Sing	1	conj	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 conj	color:blue
1	por	por	ADP	P	AdpType=Prep	2	mark	_	_
2	emocionar	emocionar	VERB	V0f000	VerbForm=Inf	0	root	_	_
3	nos	nos	PRON	Raa1ap	Case=Acc|Gender=Com|Number=Plur|Person=1|PronType=Clit	2	dobj	_	_
4	e	e	CONJ	Cc	_	2	cc	_	_
5	facer	facer	VERB	V0f000	VerbForm=Inf	2	conj	_	_
6	nos	nos	PRON	Raa1ap	Case=Acc|Gender=Com|Number=Plur|Person=1|PronType=Clit	5	dobj	_	_
7	sentir	sentir	VERB	V0f000	VerbForm=Inf	5	xcomp	_	_
8	.	.	PUNCT	Q.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 conj	color:blue
1	Santi	Santi	PROPN	Spm0	Gender=Masc	0	root	_	_
2	(	(	PUNCT	Q(	_	3	punct	_	_
3	Los_Limones	Los_Limones	PROPN	Sp00	_	1	nmod	_	_
4	)	)	PUNCT	Q)	_	3	punct	_	_
5	,	,	PUNCT	Q,	_	1	punct	_	_
6	Susana_Seivane	Susana_Seivane	PROPN	Spf0	Gender=Fem	1	conj	_	_
7	e	e	CONJ	Cc	_	1	cc	_	_
8	Bieito_Romero	Bieito_Romero	PROPN	Spm0	Gender=Masc	1	conj	_	_
9	.	.	PUNCT	Q.	_	1	punct	_	_

~~~


