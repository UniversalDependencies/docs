

--------------------------------------------------------------------------------

## Treebank Statistics (UD_German)

This relation is universal.

15894 nodes (5%) are attached to their parents as `root`.

15894 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.46231282244872.

The following 13 pairs of parts of speech are connected with `root`: [de-pos/ROOT]()-[de-pos/VERB]() (11658; 73% instances), [de-pos/ROOT]()-[de-pos/NOUN]() (2228; 14% instances), [de-pos/ROOT]()-[de-pos/ADJ]() (1550; 10% instances), [de-pos/ROOT]()-[de-pos/PROPN]() (276; 2% instances), [de-pos/ROOT]()-[de-pos/PRON]() (69; 0% instances), [de-pos/ROOT]()-[de-pos/ADV]() (31; 0% instances), [de-pos/ROOT]()-[de-pos/AUX]() (22; 0% instances), [de-pos/ROOT]()-[de-pos/NUM]() (21; 0% instances), [de-pos/ROOT]()-[de-pos/X]() (18; 0% instances), [de-pos/ROOT]()-[de-pos/ADP]() (11; 0% instances), [de-pos/ROOT]()-[de-pos/PART]() (7; 0% instances), [de-pos/ROOT]()-[de-pos/CONJ]() (2; 0% instances), [de-pos/ROOT]()-[de-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
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
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 5 root	color:blue
1	Manasse	Manasse	PROPN	NN	Case=Nom|Number=Sing	5	nsubj	_	_
2	ist	sein	VERB	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	ein	ein	DET	ART	Definite=Ind|PronType=Art	5	det	_	_
4	einzigartiger	einzigartig	ADJ	ADJA	Degree=Cmp,Pos	5	amod	_	_
5	Parfümeur	Parfümeur	NOUN	NN	_	0	root	_	_
6	.	.	PUNCT	$.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
1	Es	es	PRON	PPER	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	ist	sein	VERB	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	unbeschreiblich	unbeschreiblich	ADJ	ADJD	Degree=Pos	0	root	_	_
4	.	.	PUNCT	$.	_	3	punct	_	_

~~~


