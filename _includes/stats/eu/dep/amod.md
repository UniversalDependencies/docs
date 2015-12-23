

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Basque)

This relation is universal.

4190 nodes (3%) are attached to their parents as `amod`.

3017 instances of `amod` (72%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.07398568019093.

The following 17 pairs of parts of speech are connected with `amod`: [eu-pos/NOUN]()-[eu-pos/ADJ]() (3462; 83% instances), [eu-pos/NOUN]()-[eu-pos/NUM]() (539; 13% instances), [eu-pos/PROPN]()-[eu-pos/ADJ]() (67; 2% instances), [eu-pos/ADJ]()-[eu-pos/ADJ]() (35; 1% instances), [eu-pos/PROPN]()-[eu-pos/NUM]() (28; 1% instances), [eu-pos/ADP]()-[eu-pos/NUM]() (24; 1% instances), [eu-pos/DET]()-[eu-pos/ADJ]() (9; 0% instances), [eu-pos/NUM]()-[eu-pos/NUM]() (6; 0% instances), [eu-pos/CONJ]()-[eu-pos/NUM]() (5; 0% instances), [eu-pos/NUM]()-[eu-pos/ADJ]() (5; 0% instances), [eu-pos/ADJ]()-[eu-pos/NUM]() (3; 0% instances), [eu-pos/PUNCT]()-[eu-pos/NUM]() (2; 0% instances), [eu-pos/ADJ]()-[eu-pos/NOUN]() (1; 0% instances), [eu-pos/ADJ]()-[eu-pos/PROPN]() (1; 0% instances), [eu-pos/DET]()-[eu-pos/NUM]() (1; 0% instances), [eu-pos/SYM]()-[eu-pos/ADJ]() (1; 0% instances), [eu-pos/VERB]()-[eu-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 amod	color:blue
1	Athleticek	Athletic	PROPN	_	Case=Erg|Definite=Def|Number=Sing	5	nsubj	_	_
2	presio	presio	NOUN	_	_	4	dobj	_	_
3	itzela	itzel	ADJ	_	Case=Abs|Definite=Def|Number=Sing	2	amod	_	_
4	pairatu	pairatu	VERB	_	VerbForm=Part	5	xcomp	_	_
5	beharko	behar_izan	VERB	_	_	0	root	_	_
6	du	*edun	AUX	_	Mood=Ind|Number[abs]=Sing|Number[erg]=Sing|Person[abs]=3|Person[erg]=3	5	aux	_	_
7	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	Bigarren	bigarren	NUM	_	NumType=Ord	2	amod	_	_
2	marrazkian	marrazki	NOUN	_	Animacy=Inan|Case=Ine|Definite=Def|Number=Sing	3	nmod	_	_
3	agertzen	agertu	VERB	_	Aspect=Imp|VerbForm=Inf	5	acl	_	_
4	den	izan	AUX	_	Mood=Ind|Number[abs]=Sing|Person[abs]=3	3	aux	_	_
5	muntaia	muntaia	NOUN	_	Case=Abs|Definite=Def|Number=Sing	6	dobj	_	_
6	egizu	egin	VERB	_	Aspect=Prog|Mood=Imp|Number[abs]=Sing|Number[erg]=Plur|Person[abs]=3|Person[erg]=1	0	root	_	_
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 amod	color:blue
1	Bestetik	beste	DET	_	Case=Abl|Definite=Def|Number=Sing	7	advmod	_	_
2	,	,	PUNCT	_	_	6	punct	_	_
3	Ormaetxea	Ormaetxea	PROPN	_	_	6	nsubj	_	_
4	gipuzkoarra	gipuzkoar	ADJ	_	Case=Abs|Definite=Def|Number=Sing	3	amod	_	_
5	oso	oso	ADV	_	_	6	advmod	_	_
6	berria	berri	ADJ	_	Case=Abs|Definite=Def|Number=Sing	0	root	_	_
7	da	izan	VERB	_	Aspect=Prog|Mood=Ind|Number[abs]=Sing|Person[abs]=3	6	cop	_	_
8	.	.	PUNCT	_	_	6	punct	_	_

~~~


