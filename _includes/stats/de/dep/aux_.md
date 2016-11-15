

--------------------------------------------------------------------------------

## Treebank Statistics (UD_German)

This relation is universal.

3397 nodes (1%) are attached to their parents as `aux`.

2283 instances of `aux` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.20164851339417.

The following 10 pairs of parts of speech are connected with `aux`: [de-pos/VERB]()-[de-pos/AUX]() (3352; 99% instances), [de-pos/PROPN]()-[de-pos/PROPN]() (11; 0% instances), [de-pos/VERB]()-[de-pos/ADP]() (11; 0% instances), [de-pos/ADJ]()-[de-pos/PART]() (8; 0% instances), [de-pos/AUX]()-[de-pos/AUX]() (6; 0% instances), [de-pos/VERB]()-[de-pos/PART]() (4; 0% instances), [de-pos/VERB]()-[de-pos/VERB]() (2; 0% instances), [de-pos/ADJ]()-[de-pos/AUX]() (1; 0% instances), [de-pos/NOUN]()-[de-pos/AUX]() (1; 0% instances), [de-pos/NOUN]()-[de-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 aux	color:blue
1	Habe	haben	AUX	VAFIN	Mood=Ind|Tense=Pres|VerbForm=Fin	6	aux	_	_
2	die	der	DET	ART	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
3	bestellten	bestellt	ADJ	ADJA	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	4	amod	_	_
4	Artikel	Artikel	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	6	dobj	_	_
5	prompt	prompt	ADV	ADJD	_	6	advmod	_	_
6	erhalten	erhalten	VERB	VVPP	VerbForm=Part	0	root	_	_
7	.	.	PUNCT	$.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 5 aux	color:blue
1	Sie	Sie|sie	PRON	PPER	Case=Nom|Person=2|Polite=Pol|PronType=Prs	4	nsubj	_	_
2	haben	haben	AUX	VAFIN	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	_
3	alles	alle	PRON	PIS	Case=Acc|PronType=Tot	4	dobj	_	_
4	unternommen	unternehmen	VERB	VVPP	VerbForm=Part	0	root	_	_
5	um	um	ADP	APPR	_	11	aux	_	_
6	uns	wir	PRON	PPER	Case=Dat|Number=Plur|Person=1|PronType=Prs	11	iobj	_	_
7	einen	ein	DET	ART	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
8	tollen	toll	ADJ	ADJA	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	9	amod	_	_
9	Urlaub	Urlaub	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	11	dobj	_	_
10	zu	zu	PART	PTKZU	_	11	mark	_	_
11	bereiten	bereiten	VERB	VVINF	VerbForm=Inf	4	advcl	_	_
12	.	.	PUNCT	$.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 aux	color:blue
1	Es	es	PRON	PPER	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	erschien	erscheinen	VERB	VVFIN	Number=Plur|Person=3|VerbForm=Fin	0	root	_	_
3	auf	auf	ADP	APPR	_	5	case	_	_
4	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Masc,Neut|Number=Sing|PronType=Art	5	det	_	_
5	Album	Album	NOUN	NN	Case=Dat|Gender=Masc,Neut|Number=Sing	2	nmod	_	_
6	Why	Why	PROPN	NE	_	9	advmod	_	_
7	Do	Do	PROPN	NE	_	9	aux	_	_
8	Fools	Fools	PROPN	NN	Case=Nom|Number=Sing	9	nsubj	_	_
9	Fall	Fall	PROPN	NN	_	5	appos	_	_
10	in	in	PROPN	APPR	_	11	case	_	_
11	Love	Love	PROPN	NN	_	9	nmod	_	_
12	.	.	PUNCT	$.	_	2	punct	_	_

~~~


