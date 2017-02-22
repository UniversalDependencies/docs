

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is a language-specific subtype of [obl]().
There are also 1 other language-specific subtypes of `obl`: [obl:npmod]().

616 nodes (0%) are attached to their parents as `obl:tmod`.

492 instances of `obl:tmod` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.35227272727273.

The following 18 pairs of parts of speech are connected with `obl:tmod`: [en-pos/VERB]()-[en-pos/NOUN]() (457; 74% instances), [en-pos/VERB]()-[en-pos/PROPN]() (53; 9% instances), [en-pos/ADJ]()-[en-pos/NOUN]() (33; 5% instances), [en-pos/ADV]()-[en-pos/NOUN]() (27; 4% instances), [en-pos/NOUN]()-[en-pos/NOUN]() (18; 3% instances), [en-pos/VERB]()-[en-pos/NUM]() (8; 1% instances), [en-pos/NOUN]()-[en-pos/PROPN]() (4; 1% instances), [en-pos/VERB]()-[en-pos/ADJ]() (3; 0% instances), [en-pos/ADV]()-[en-pos/NUM]() (2; 0% instances), [en-pos/PROPN]()-[en-pos/NOUN]() (2; 0% instances), [en-pos/VERB]()-[en-pos/ADV]() (2; 0% instances), [en-pos/ADJ]()-[en-pos/ADJ]() (1; 0% instances), [en-pos/ADJ]()-[en-pos/NUM]() (1; 0% instances), [en-pos/ADJ]()-[en-pos/PROPN]() (1; 0% instances), [en-pos/ADV]()-[en-pos/PROPN]() (1; 0% instances), [en-pos/AUX]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/PROPN]()-[en-pos/NUM]() (1; 0% instances), [en-pos/SCONJ]()-[en-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obl:tmod	color:blue
1	i	i	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	am	be	AUX	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	going	go	VERB	VBG	VerbForm=Ger	0	root	_	_
4	out	out	ADV	RB	_	3	advmod	_	_
5	tonight	tonight	NOUN	NN	Number=Sing	3	obl:tmod	_	_
6	to	to	PART	TO	_	8	mark	_	_
7	get	get	VERB	VB	VerbForm=Inf	8	aux	_	_
8	wasted	wasted	ADJ	JJ	Degree=Pos	3	advcl	_	_
9	if	if	SCONJ	IN	_	12	mark	_	_
10	anyone	anyone	PRON	NN	Number=Sing	12	nsubj	_	_
11	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
12	interested	interested	ADJ	JJ	Degree=Pos	3	advcl	_	SpaceAfter=No
13	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 obl:tmod	color:blue
1	Why	why	ADV	WRB	PronType=Int	5	advmod	_	_
2	were	be	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	5	aux:pass	_	_
3	they	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	5	nsubj:pass	_	_
4	suddenly	suddenly	ADV	RB	_	5	advmod	_	_
5	acted	act	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
6	on	on	ADP	IN	_	5	obl	_	_
7	Saturday	Saturday	PROPN	NNP	Number=Sing	5	obl:tmod	_	SpaceAfter=No
8	?	?	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 obl:tmod	color:blue
1	the	the	DET	DT	Definite=Def|PronType=Art	3	det	_	_
2	following	follow	VERB	VBG	VerbForm=Ger	3	amod	_	_
3	weekend	weekend	NOUN	NN	Number=Sing	7	obl:tmod	_	_
4	i	i	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	_
5	will	will	AUX	MD	VerbForm=Fin	7	aux	_	_
6	be	be	AUX	VB	VerbForm=Inf	7	cop	_	_
7	ready	ready	ADJ	JJ	Degree=Pos	0	root	_	_
8	to	to	PART	TO	_	9	mark	_	_
9	rock	rock	VERB	VB	VerbForm=Inf	7	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	.	_	7	punct	_	_

~~~


