

--------------------------------------------------------------------------------

## Treebank Statistics (UD_German)

This relation is universal.

574 nodes (0%) are attached to their parents as `parataxis`.

537 instances of `parataxis` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.6289198606272.

The following 29 pairs of parts of speech are connected with `parataxis`: [de-pos/VERB]()-[de-pos/VERB]() (259; 45% instances), [de-pos/NOUN]()-[de-pos/VERB]() (76; 13% instances), [de-pos/ADJ]()-[de-pos/VERB]() (60; 10% instances), [de-pos/VERB]()-[de-pos/ADJ]() (48; 8% instances), [de-pos/VERB]()-[de-pos/NOUN]() (40; 7% instances), [de-pos/ADJ]()-[de-pos/ADJ]() (13; 2% instances), [de-pos/NOUN]()-[de-pos/NOUN]() (13; 2% instances), [de-pos/PROPN]()-[de-pos/VERB]() (9; 2% instances), [de-pos/NOUN]()-[de-pos/ADJ]() (8; 1% instances), [de-pos/VERB]()-[de-pos/PROPN]() (8; 1% instances), [de-pos/VERB]()-[de-pos/ADP]() (7; 1% instances), [de-pos/ADJ]()-[de-pos/NOUN]() (6; 1% instances), [de-pos/PROPN]()-[de-pos/PROPN]() (6; 1% instances), [de-pos/VERB]()-[de-pos/X]() (4; 1% instances), [de-pos/NOUN]()-[de-pos/PROPN]() (2; 0% instances), [de-pos/X]()-[de-pos/VERB]() (2; 0% instances), [de-pos/ADJ]()-[de-pos/ADP]() (1; 0% instances), [de-pos/ADV]()-[de-pos/VERB]() (1; 0% instances), [de-pos/NOUN]()-[de-pos/ADP]() (1; 0% instances), [de-pos/NOUN]()-[de-pos/PRON]() (1; 0% instances), [de-pos/NUM]()-[de-pos/ADJ]() (1; 0% instances), [de-pos/PART]()-[de-pos/VERB]() (1; 0% instances), [de-pos/PRON]()-[de-pos/VERB]() (1; 0% instances), [de-pos/PRON]()-[de-pos/X]() (1; 0% instances), [de-pos/PROPN]()-[de-pos/ADJ]() (1; 0% instances), [de-pos/VERB]()-[de-pos/ADV]() (1; 0% instances), [de-pos/VERB]()-[de-pos/AUX]() (1; 0% instances), [de-pos/VERB]()-[de-pos/PART]() (1; 0% instances), [de-pos/X]()-[de-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 14 parataxis	color:blue
1	Ich	ich	PRON	PPER	Case=Nom|Number=Sing|Person=1|PronType=Prs	9	nsubj	_	_
2	kann	können	AUX	VMFIN	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	9	aux	_	_
3	es	es	PRON	PPER	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	9	dobj	_	_
4	euch	ihr	PRON	PPER	Case=Dat|Number=Plur|Person=2|Polite=Inf|PronType=Prs	9	iobj	_	_
5	nur	nur	ADV	ADV	_	9	advmod	_	_
6	an	an	ADP	APPR	_	8	case	_	_
7	das	der	DET	ART	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	8	det	_	_
8	Herz	Herz	NOUN	NN	Case=Acc|Gender=Neut|Number=Sing	9	nmod	_	_
9	legen	legen	VERB	VVINF	VerbForm=Inf	0	root	_	_
10	--	--	PUNCT	$(	_	9	punct	_	_
11	Ihr	ihr	PRON	PPER	Case=Nom|Number=Plur|Person=2|Polite=Inf|PronType=Prs	14	nsubj	_	_
12	werdet	werden	AUX	VAFIN	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	14	aux	_	_
13	es	es	PRON	PPER	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	14	dobj	_	_
14	mögen	mögen	VERB	VMFIN	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	9	parataxis	_	_
15	!	!	PUNCT	$.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 parataxis	color:blue
1	Keine	kein	PRON	PIAT	PronType=Neg	2	neg	_	_
2	Playbackveranstaltung	Playbackveranstaltung	NOUN	NN	_	0	root	_	_
3	--	--	PUNCT	$(	_	2	punct	_	_
4	die	der	PRON	PRELS	Case=Nom|PronType=Rel	7	nsubj	_	_
5	können	können	AUX	VMFIN	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
6	live	live	ADV	ADJD	_	7	advmod	_	_
7	spielen	spielen	VERB	VVINF	VerbForm=Inf	2	parataxis	_	_
8	.	.	PUNCT	$.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 parataxis	color:blue
1	Auch	auch	ADV	ADV	_	6	advmod	_	_
2	hier	hier	ADV	ADV	_	6	advmod	_	_
3	sind	sein	VERB	VAFIN	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
4	die	der	DET	ART	Case=Nom|Definite=Def|Gender=Fem|Number=Plur|PronType=Art	5	det	_	_
5	Leistungen	Leistung	NOUN	NN	Case=Nom|Gender=Fem|Number=Plur	6	nsubj	_	_
6	top	top	ADJ	VVFIN	Degree=Pos	0	root	_	_
7	,	,	PUNCT	$,	_	6	punct	_	_
8	hoffe	hoffen	VERB	VVFIN	VerbForm=Fin	6	parataxis	_	_
9	die	der	DET	ART	Definite=Def|PronType=Art	10	det	_	_
10	Regulierung	Regulierung	NOUN	NN	_	8	ccomp	_	_
11	auch	auch	ADV	ADV	_	10	advmod	_	_
12	.	.	PUNCT	$.	_	6	punct	_	_

~~~


