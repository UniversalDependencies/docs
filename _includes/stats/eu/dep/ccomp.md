

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Basque)

This relation is universal.

1190 nodes (1%) are attached to their parents as `ccomp`.

642 instances of `ccomp` (54%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.98067226890756.

The following 24 pairs of parts of speech are connected with `ccomp`: [eu-pos/VERB]()-[eu-pos/VERB]() (878; 74% instances), [eu-pos/VERB]()-[eu-pos/NOUN]() (118; 10% instances), [eu-pos/VERB]()-[eu-pos/ADJ]() (99; 8% instances), [eu-pos/VERB]()-[eu-pos/ADV]() (17; 1% instances), [eu-pos/VERB]()-[eu-pos/DET]() (15; 1% instances), [eu-pos/NOUN]()-[eu-pos/VERB]() (14; 1% instances), [eu-pos/CONJ]()-[eu-pos/VERB]() (10; 1% instances), [eu-pos/ADJ]()-[eu-pos/VERB]() (8; 1% instances), [eu-pos/VERB]()-[eu-pos/PRON]() (5; 0% instances), [eu-pos/ADV]()-[eu-pos/VERB]() (4; 0% instances), [eu-pos/VERB]()-[eu-pos/X]() (4; 0% instances), [eu-pos/VERB]()-[eu-pos/NUM]() (3; 0% instances), [eu-pos/CONJ]()-[eu-pos/X]() (2; 0% instances), [eu-pos/VERB]()-[eu-pos/AUX]() (2; 0% instances), [eu-pos/VERB]()-[eu-pos/PROPN]() (2; 0% instances), [eu-pos/ADP]()-[eu-pos/VERB]() (1; 0% instances), [eu-pos/ADV]()-[eu-pos/NOUN]() (1; 0% instances), [eu-pos/AUX]()-[eu-pos/VERB]() (1; 0% instances), [eu-pos/DET]()-[eu-pos/VERB]() (1; 0% instances), [eu-pos/NOUN]()-[eu-pos/ADJ]() (1; 0% instances), [eu-pos/NOUN]()-[eu-pos/NOUN]() (1; 0% instances), [eu-pos/PUNCT]()-[eu-pos/NOUN]() (1; 0% instances), [eu-pos/PUNCT]()-[eu-pos/VERB]() (1; 0% instances), [eu-pos/VERB]()-[eu-pos/CONJ]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 ccomp	color:blue
1	Beraz	beraz	CONJ	_	_	8	advmod	_	_
2	,	,	PUNCT	_	_	6	punct	_	_
3	idazten	idatzi	VERB	_	Case=Ine	6	advcl	_	_
4	ere	ere	CONJ	_	_	3	advmod	_	_
5	lehenago	lehenago	ADV	_	_	6	advmod	_	_
6	hasi	hasi	VERB	_	Aspect=Perf|VerbForm=Part	8	ccomp	_	_
7	nintzela	izan	AUX	_	Mood=Ind|Number[abs]=Sing|Person[abs]=1	6	aux	_	_
8	esan	esan	VERB	_	VerbForm=Inf	0	root	_	_
9	liteke	*edin	AUX	_	Mood=Pot|Number[abs]=Sing|Person[abs]=3	8	aux	_	_
10	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 ccomp	color:blue
1	-	-	PUNCT	_	_	3	punct	_	_
2	Nork	nor	PRON	_	PronType=Int	3	nsubj	_	_
3	esan	esan	VERB	_	Aspect=Perf|VerbForm=Part	0	root	_	_
4	du	*edun	AUX	_	Mood=Ind|Number[abs]=Sing|Number[erg]=Sing|Person[abs]=3|Person[erg]=3	3	aux	_	_
5	ezin	ezin	NOUN	_	Animacy=Inan|Case=Abs|Definite=Ind	3	ccomp	_	_
6	gintezkeela	*edin	AUX	_	Mood=Pot|Number[abs]=Plur|Person[abs]=1	5	aux	_	_
7	etor	etorri	VERB	_	VerbForm=Inf	5	xcomp	_	_
8	?	?	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 ccomp	color:blue
1	Ikusiz	ikusi	VERB	_	Case=Ins|Definite=Ind|VerbForm=Part	0	root	_	_
2	,	,	PUNCT	_	_	5	punct	_	_
3	epe	epe	NOUN	_	_	5	nmod	_	_
4	luzean	luze	ADJ	_	Case=Ine|Definite=Def|Number=Sing	3	amod	_	_
5	egiten	egin	VERB	_	Aspect=Imp|VerbForm=Inf	7	acl	_	_
6	diren	izan	AUX	_	Mood=Ind|Number[abs]=Plur|Person[abs]=3	5	aux	_	_
7	amortizamenduak	amortiza+!mendu	NOUN	_	Case=Abs|Definite=Def|Number=Plur	9	nsubj	_	_
8	direla	izan	VERB	_	Aspect=Prog|Mood=Ind|Number[abs]=Plur|Person[abs]=3	9	cop	_	_
9	holakoak	holako	ADJ	_	Case=Abs|Definite=Def|Number=Plur	1	ccomp	_	_
10	.	.	PUNCT	_	_	1	punct	_	_

~~~


