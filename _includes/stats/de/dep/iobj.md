

--------------------------------------------------------------------------------

## Treebank Statistics (UD_German)

This relation is universal.

1305 nodes (0%) are attached to their parents as `iobj`.

764 instances of `iobj` (59%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.99693486590038.

The following 17 pairs of parts of speech are connected with `iobj`: [de-pos/VERB]()-[de-pos/NOUN]() (598; 46% instances), [de-pos/VERB]()-[de-pos/PRON]() (499; 38% instances), [de-pos/VERB]()-[de-pos/PROPN]() (140; 11% instances), [de-pos/ADJ]()-[de-pos/NOUN]() (34; 3% instances), [de-pos/ADJ]()-[de-pos/PRON]() (14; 1% instances), [de-pos/ADJ]()-[de-pos/PROPN]() (4; 0% instances), [de-pos/NOUN]()-[de-pos/NOUN]() (3; 0% instances), [de-pos/NOUN]()-[de-pos/PROPN]() (2; 0% instances), [de-pos/PRON]()-[de-pos/NOUN]() (2; 0% instances), [de-pos/PROPN]()-[de-pos/PROPN]() (2; 0% instances), [de-pos/ADV]()-[de-pos/PROPN]() (1; 0% instances), [de-pos/AUX]()-[de-pos/NOUN]() (1; 0% instances), [de-pos/NOUN]()-[de-pos/PRON]() (1; 0% instances), [de-pos/PART]()-[de-pos/NOUN]() (1; 0% instances), [de-pos/PART]()-[de-pos/PRON]() (1; 0% instances), [de-pos/PROPN]()-[de-pos/DET]() (1; 0% instances), [de-pos/VERB]()-[de-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 iobj	color:blue
1	Kann	können	AUX	VMFIN	Mood=Ind|Tense=Pres|VerbForm=Fin	8	aux	_	_
2	mich	ich	PRON	PPER	Case=Acc|Number=Sing|Person=1|PronType=Prs	8	dobj	_	_
3	der	der	DET	ART	Case=Dat|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
4	ersten	erst	ADJ	ADJA	Case=Dat|Degree=Pos|Gender=Fem|Number=Sing|NumType=Ord	5	amod	_	_
5	Bewertung	Bewertung	NOUN	NN	Case=Dat|Gender=Fem|Number=Sing	8	iobj	_	_
6	überhaupt	überhaupt	ADV	ADV	_	7	advmod	_	_
7	nicht	nicht	PART	PTKNEG	_	8	neg	_	_
8	anschließen	anschließen	VERB	VVINF	VerbForm=Inf	0	root	_	_
9	.	.	PUNCT	$.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 9 iobj	color:blue
1	Also	also	ADV	ADV	_	3	advmod	_	_
2	ich	ich	PRON	PPER	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	bin	sein	VERB	VAFIN	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	öfter	öfter	ADV	ADV	_	3	advmod	_	_
5	hier	hier	ADV	ADV	_	3	advmod	_	_
6	,	,	PUNCT	$,	_	3	punct	_	_
7	da	da	SCONJ	KOUS	_	13	mark	_	_
8	es	es	PRON	PPER	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	13	nsubj	_	_
9	mir	ich	PRON	PRF	Case=Dat|Number=Sing|Person=1|PronType=Prs|Reflex=Yes	13	iobj	_	_
10	hier	hier	ADV	ADV	_	13	advmod	_	_
11	sehr	sehr	ADV	ADV	_	12	advmod	_	_
12	gut	gut	ADV	ADJD	_	13	advmod	_	_
13	gefällt	fällen	VERB	VVPP	VerbForm=Part	3	advcl	_	_
14	!	!	PUNCT	$.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 iobj	color:blue
1	Die	der	DET	ART	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	SPD	SPD	PROPN	NE	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
3	begegnet	begegnen	VERB	VVFIN	Number=Sing|Person=3|VerbForm=Fin	0	root	_	_
4	Lafontaine	Lafontaine	PROPN	NE	Case=Dat|Number=Sing	3	iobj	_	_
5	skeptisch	skeptisch	ADV	ADJD	_	3	advmod	_	_
6	.	.	PUNCT	$.	_	3	punct	_	_

~~~


