

--------------------------------------------------------------------------------

## Treebank Statistics (UD_German)

This relation is universal.

3289 nodes (1%) are attached to their parents as `mark`.

3128 instances of `mark` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.57920340529036.

The following 32 pairs of parts of speech are connected with `mark`: [de-pos/VERB]()-[de-pos/SCONJ]() (1547; 47% instances), [de-pos/VERB]()-[de-pos/PART]() (961; 29% instances), [de-pos/VERB]()-[de-pos/ADP]() (240; 7% instances), [de-pos/VERB]()-[de-pos/ADV]() (187; 6% instances), [de-pos/ADJ]()-[de-pos/SCONJ]() (161; 5% instances), [de-pos/NOUN]()-[de-pos/SCONJ]() (76; 2% instances), [de-pos/AUX]()-[de-pos/PART]() (47; 1% instances), [de-pos/VERB]()-[de-pos/PRON]() (14; 0% instances), [de-pos/PROPN]()-[de-pos/SCONJ]() (7; 0% instances), [de-pos/ADP]()-[de-pos/SCONJ]() (6; 0% instances), [de-pos/ADJ]()-[de-pos/ADV]() (5; 0% instances), [de-pos/ADJ]()-[de-pos/ADP]() (4; 0% instances), [de-pos/NOUN]()-[de-pos/ADV]() (4; 0% instances), [de-pos/ADV]()-[de-pos/SCONJ]() (3; 0% instances), [de-pos/NOUN]()-[de-pos/ADP]() (3; 0% instances), [de-pos/ADJ]()-[de-pos/PRON]() (2; 0% instances), [de-pos/AUX]()-[de-pos/SCONJ]() (2; 0% instances), [de-pos/NUM]()-[de-pos/SCONJ]() (2; 0% instances), [de-pos/PROPN]()-[de-pos/ADP]() (2; 0% instances), [de-pos/PROPN]()-[de-pos/PROPN]() (2; 0% instances), [de-pos/VERB]()-[de-pos/NOUN]() (2; 0% instances), [de-pos/X]()-[de-pos/SCONJ]() (2; 0% instances), [de-pos/ADJ]()-[de-pos/VERB]() (1; 0% instances), [de-pos/ADP]()-[de-pos/ADV]() (1; 0% instances), [de-pos/PART]()-[de-pos/SCONJ]() (1; 0% instances), [de-pos/PRON]()-[de-pos/SCONJ]() (1; 0% instances), [de-pos/PUNCT]()-[de-pos/SCONJ]() (1; 0% instances), [de-pos/VERB]()-[de-pos/ADJ]() (1; 0% instances), [de-pos/VERB]()-[de-pos/AUX]() (1; 0% instances), [de-pos/VERB]()-[de-pos/CONJ]() (1; 0% instances), [de-pos/VERB]()-[de-pos/DET]() (1; 0% instances), [de-pos/VERB]()-[de-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 7 mark	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 mark	color:blue
1	Ich	ich	PRON	PPER	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	hatte	haben	VERB	VAFIN	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	_
3	Gelegenheit	Gelegenheit	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	2	dobj	_	_
4	eines	ein	DET	ART	Case=Acc|Definite=Ind|Number=Plur|PronType=Art	6	det	_	_
5	seiner	sein	PRON	PPOSAT	Case=Acc|Gender[psor]=Masc,Neut|Number=Plur|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	6	det:poss	_	_
6	Seminare	Seminar	NOUN	NN	Case=Acc|Number=Plur	8	dobj	_	_
7	zu	zu	PART	PTKZU	_	8	mark	_	_
8	besuchen	besuchen	VERB	VVINF	VerbForm=Inf	3	xcomp	_	_
9	.	.	PUNCT	$.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 mark	color:blue
1	ALLE	alle	NOUN	PIS	Case=Nom|Number=Sing	2	nsubj	_	_
2	waren	sein	VERB	VAFIN	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	nur	nur	ADV	ADV	_	2	advmod	_	_
4	darauf	darauf	ADV	PAV	_	2	advmod	_	_
5	aus	aus	ADP	APPR	_	2	mark	_	_
6	einem	ein	PRON	PIS	Case=Dat|PronType=Ind	11	iobj	_	_
7	ein	ein	DET	ART	Case=Acc|Definite=Ind|Gender=Masc,Neut|Number=Sing|PronType=Art	9	det	_	_
8	neues	neu	ADJ	ADJA	Case=Acc|Degree=Pos|Gender=Masc,Neut|Number=Sing	9	amod	_	_
9	Haarteil	Haarteil	NOUN	NN	Case=Acc|Gender=Masc,Neut|Number=Sing	11	dobj	_	_
10	zu	zu	PART	PTKZU	_	11	mark	_	_
11	verkaufen	verkaufen	VERB	VVINF	VerbForm=Inf	2	xcomp	_	_
12	.	.	PUNCT	$.	_	2	punct	_	_

~~~


