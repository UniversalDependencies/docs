

--------------------------------------------------------------------------------

## Treebank Statistics (UD_German)

This relation is universal.

16797 nodes (6%) are attached to their parents as `obl`.

10165 instances of `obl` (61%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.23801869381437.

The following 14 pairs of parts of speech are connected with `obl`: [de-pos/VERB]()-[de-pos/NOUN]() (11578; 69% instances), [de-pos/VERB]()-[de-pos/PROPN]() (3062; 18% instances), [de-pos/VERB]()-[de-pos/NUM]() (1452; 9% instances), [de-pos/VERB]()-[de-pos/PRON]() (661; 4% instances), [de-pos/AUX]()-[de-pos/NOUN]() (16; 0% instances), [de-pos/VERB]()-[de-pos/X]() (6; 0% instances), [de-pos/AUX]()-[de-pos/NUM]() (5; 0% instances), [de-pos/VERB]()-[de-pos/DET]() (4; 0% instances), [de-pos/AUX]()-[de-pos/PROPN]() (3; 0% instances), [de-pos/PROPN]()-[de-pos/NOUN]() (3; 0% instances), [de-pos/VERB]()-[de-pos/ADJ]() (3; 0% instances), [de-pos/VERB]()-[de-pos/ADV]() (2; 0% instances), [de-pos/AUX]()-[de-pos/X]() (1; 0% instances), [de-pos/VERB]()-[de-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 obl	color:blue
1	Letzte	letzt	ADJ	ADJA	Degree=Pos	2	amod	_	_
2	Woche	Woche	NOUN	NN	_	8	obl	_	_
3	hatte	haben	AUX	VAFIN	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	8	aux	_	_
4	ich	ich	PRON	PPER	Case=Nom|Number=Sing|Person=1|PronType=Prs	8	nsubj	_	_
5	ein	ein	DET	ART	Case=Acc|Definite=Ind|Gender=Masc,Neut|Number=Sing|PronType=Art	7	det	_	_
6	paar	paar	PRON	PIAT	Case=Acc|Gender=Masc,Neut|Number=Sing|PronType=Ind	7	det	_	_
7	Funktionshemden	Funktionshemden	NOUN	NN	Case=Acc|Gender=Masc,Neut|Number=Sing	8	obj	_	_
8	gekauft	kaufen	VERB	VVPP	VerbForm=Part	0	root	_	SpaceAfter=No
9	.	.	PUNCT	$.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 obl	color:blue
1	Auf	auf	ADP	APPR	_	3	case	_	_
2	jeden	jed	PRON	PIAT	Case=Acc|Gender=Masc|Number=Sing|PronType=Tot	3	det	_	_
3	Fall	Fall	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	11	obl	_	_
4	werde	werden	AUX	VAFIN	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	11	aux	_	_
5	ich	ich	PRON	PPER	Case=Nom|Number=Sing|Person=1|PronType=Prs	11	nsubj	_	_
6	jetzt	jetzt	ADV	ADV	_	11	advmod	_	_
7	immer	immer	ADV	ADV	_	11	advmod	_	_
8	zu	zu	ADP	APPR	_	10	case	_	_
9	Dr.	Dr.	NOUN	NN	_	10	compound	_	_
10	Sieben	sieben	PROPN	CARD	Case=Dat|Number=Sing	11	obl	_	_
11	gehen	gehen	VERB	VVINF	VerbForm=Inf	0	root	_	SpaceAfter=No
12	!	!	PUNCT	$.	_	11	punct	_	SpaceAfter=No
13	!	!	PUNCT	$.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obl	color:blue
1	1987	1987	NUM	CARD	NumType=Card	2	obl	_	_
2	häufen	häufen	VERB	VVFIN	Number=Plur|Person=3|VerbForm=Fin	0	root	_	_
3	sich	er|es|sie	PRON	PRF	Case=Acc|Person=3|PronType=Prs|Reflex=Yes	2	obj	_	_
4	jedoch	jedoch	ADV	ADV	_	2	advmod	_	_
5	die	der	DET	ART	Case=Nom|Definite=Def|Number=Plur|PronType=Art	6	det	_	_
6	Fälle	Fall	NOUN	NN	Case=Nom|Number=Plur	2	nsubj	_	SpaceAfter=No
7	.	.	PUNCT	$.	_	2	punct	_	_

~~~


