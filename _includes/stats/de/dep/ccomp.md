

--------------------------------------------------------------------------------

## Treebank Statistics (UD_German)

This relation is universal.

882 nodes (0%) are attached to their parents as `ccomp`.

682 instances of `ccomp` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.3174603174603.

The following 25 pairs of parts of speech are connected with `ccomp`: [de-pos/VERB]()-[de-pos/VERB]() (587; 67% instances), [de-pos/VERB]()-[de-pos/ADJ]() (85; 10% instances), [de-pos/NOUN]()-[de-pos/VERB]() (70; 8% instances), [de-pos/VERB]()-[de-pos/NOUN]() (52; 6% instances), [de-pos/ADJ]()-[de-pos/VERB]() (38; 4% instances), [de-pos/NOUN]()-[de-pos/ADJ]() (14; 2% instances), [de-pos/VERB]()-[de-pos/PRON]() (5; 1% instances), [de-pos/ADV]()-[de-pos/VERB]() (4; 0% instances), [de-pos/PRON]()-[de-pos/VERB]() (4; 0% instances), [de-pos/VERB]()-[de-pos/ADP]() (4; 0% instances), [de-pos/ADJ]()-[de-pos/ADJ]() (3; 0% instances), [de-pos/NOUN]()-[de-pos/NOUN]() (2; 0% instances), [de-pos/PROPN]()-[de-pos/VERB]() (2; 0% instances), [de-pos/ADJ]()-[de-pos/ADP]() (1; 0% instances), [de-pos/ADJ]()-[de-pos/ADV]() (1; 0% instances), [de-pos/ADJ]()-[de-pos/NOUN]() (1; 0% instances), [de-pos/ADV]()-[de-pos/ADJ]() (1; 0% instances), [de-pos/NOUN]()-[de-pos/ADP]() (1; 0% instances), [de-pos/PART]()-[de-pos/VERB]() (1; 0% instances), [de-pos/PROPN]()-[de-pos/PROPN]() (1; 0% instances), [de-pos/VERB]()-[de-pos/ADV]() (1; 0% instances), [de-pos/VERB]()-[de-pos/AUX]() (1; 0% instances), [de-pos/VERB]()-[de-pos/PROPN]() (1; 0% instances), [de-pos/VERB]()-[de-pos/X]() (1; 0% instances), [de-pos/X]()-[de-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 ccomp	color:blue
1	Dieses	dies	PRON	PDAT	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	2	det	_	_
2	Zentrum	Zentrum	NOUN	NN	Case=Nom|Gender=Neut|Number=Sing	3	nsubj	_	_
3	hält	halten	VERB	VVFIN	Number=Sing|Person=3|VerbForm=Fin	0	root	_	_
4	was	was	PRON	PIS	Case=Acc|PronType=Ind	6	dobj	_	_
5	es	es	PRON	PPER	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	_
6	verspricht	versprechen	VERB	VVFIN	Number=Sing|Person=3|VerbForm=Fin	3	ccomp	_	_
7	.	.	PUNCT	$.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 ccomp	color:blue
1	Für	für	ADP	APPR	_	3	case	_	_
2	die	der	DET	ART	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	Werkstatt	Werkstatt	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	4	nmod	_	_
4	spricht	sprechen	VERB	VVFIN	VerbForm=Fin	0	root	_	_
5	dass	dass	SCONJ	KOUS	_	8	mark	_	_
6	sie	sie	PRON	PPER	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
7	sehr	sehr	ADV	ADV	_	8	advmod	_	_
8	günstig	günstig	ADJ	ADJD	Degree=Pos	4	ccomp	_	_
9	ist	sein	VERB	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
10	.	.	PUNCT	$.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 ccomp	color:blue
1	Nur	nur	ADV	ADV	_	4	advmod	_	_
2	mit	mit	ADP	APPR	_	4	case	_	_
3	dem	der	DET	ART	Definite=Def|PronType=Art	4	det	_	_
4	Unterschied	Unterschied	NOUN	NN	_	0	root	_	_
5	,	,	PUNCT	$,	_	4	punct	_	_
6	dass	dass	SCONJ	KOUS	_	10	mark	_	_
7	die	der	PRON	ART	Case=Nom|PronType=Dem	10	nsubj	_	_
8	kaum	kaum	ADV	ADV	_	10	advmod	_	_
9	zu	zu	PART	PTKZU	_	10	mark	_	_
10	nutzen	nutzen	VERB	VVINF	VerbForm=Inf	4	ccomp	_	_
11	waren	sein	AUX	VAFIN	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	10	aux	_	_
12	.	.	PUNCT	$.	_	4	punct	_	_

~~~


