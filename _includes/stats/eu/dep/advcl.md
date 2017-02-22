

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Basque)

This relation is universal.

4232 nodes (4%) are attached to their parents as `advcl`.

2629 instances of `advcl` (62%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.98062381852552.

The following 48 pairs of parts of speech are connected with `advcl`: [eu-pos/VERB]()-[eu-pos/VERB]() (2402; 57% instances), [eu-pos/NOUN]()-[eu-pos/VERB]() (916; 22% instances), [eu-pos/AUX]()-[eu-pos/VERB]() (228; 5% instances), [eu-pos/VERB]()-[eu-pos/ADV]() (195; 5% instances), [eu-pos/VERB]()-[eu-pos/NOUN]() (179; 4% instances), [eu-pos/VERB]()-[eu-pos/CCONJ]() (51; 1% instances), [eu-pos/ADP]()-[eu-pos/VERB]() (38; 1% instances), [eu-pos/VERB]()-[eu-pos/ADJ]() (33; 1% instances), [eu-pos/ADV]()-[eu-pos/VERB]() (20; 0% instances), [eu-pos/AUX]()-[eu-pos/NOUN]() (19; 0% instances), [eu-pos/CCONJ]()-[eu-pos/VERB]() (17; 0% instances), [eu-pos/NOUN]()-[eu-pos/NOUN]() (17; 0% instances), [eu-pos/ADJ]()-[eu-pos/VERB]() (16; 0% instances), [eu-pos/AUX]()-[eu-pos/ADJ]() (14; 0% instances), [eu-pos/PROPN]()-[eu-pos/VERB]() (9; 0% instances), [eu-pos/NUM]()-[eu-pos/VERB]() (8; 0% instances), [eu-pos/VERB]()-[eu-pos/AUX]() (8; 0% instances), [eu-pos/AUX]()-[eu-pos/CCONJ]() (7; 0% instances), [eu-pos/X]()-[eu-pos/VERB]() (6; 0% instances), [eu-pos/AUX]()-[eu-pos/ADV]() (4; 0% instances), [eu-pos/DET]()-[eu-pos/VERB]() (4; 0% instances), [eu-pos/NOUN]()-[eu-pos/ADJ]() (4; 0% instances), [eu-pos/AUX]()-[eu-pos/X]() (3; 0% instances), [eu-pos/VERB]()-[eu-pos/INTJ]() (3; 0% instances), [eu-pos/ADV]()-[eu-pos/NOUN]() (2; 0% instances), [eu-pos/AUX]()-[eu-pos/AUX]() (2; 0% instances), [eu-pos/AUX]()-[eu-pos/NUM]() (2; 0% instances), [eu-pos/NOUN]()-[eu-pos/CCONJ]() (2; 0% instances), [eu-pos/PROPN]()-[eu-pos/NOUN]() (2; 0% instances), [eu-pos/VERB]()-[eu-pos/DET]() (2; 0% instances), [eu-pos/VERB]()-[eu-pos/NUM]() (2; 0% instances), [eu-pos/ADJ]()-[eu-pos/ADV]() (1; 0% instances), [eu-pos/ADP]()-[eu-pos/NOUN]() (1; 0% instances), [eu-pos/ADV]()-[eu-pos/ADJ]() (1; 0% instances), [eu-pos/AUX]()-[eu-pos/INTJ]() (1; 0% instances), [eu-pos/CCONJ]()-[eu-pos/ADJ]() (1; 0% instances), [eu-pos/CCONJ]()-[eu-pos/NOUN]() (1; 0% instances), [eu-pos/DET]()-[eu-pos/ADP]() (1; 0% instances), [eu-pos/NOUN]()-[eu-pos/ADV]() (1; 0% instances), [eu-pos/NOUN]()-[eu-pos/PRON]() (1; 0% instances), [eu-pos/PRON]()-[eu-pos/VERB]() (1; 0% instances), [eu-pos/PUNCT]()-[eu-pos/ADJ]() (1; 0% instances), [eu-pos/PUNCT]()-[eu-pos/CCONJ]() (1; 0% instances), [eu-pos/PUNCT]()-[eu-pos/NOUN]() (1; 0% instances), [eu-pos/PUNCT]()-[eu-pos/VERB]() (1; 0% instances), [eu-pos/VERB]()-[eu-pos/PROPN]() (1; 0% instances), [eu-pos/VERB]()-[eu-pos/PUNCT]() (1; 0% instances), [eu-pos/X]()-[eu-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 advcl	color:blue
1	Beraz	beraz	CCONJ	_	_	8	advmod	_	SpaceAfter=No
2	,	,	PUNCT	_	_	6	punct	_	_
3	idazten	idatzi	VERB	_	Case=Ine	6	advcl	_	_
4	ere	ere	CCONJ	_	_	3	advmod	_	_
5	lehenago	lehenago	ADV	_	_	6	advmod	_	_
6	hasi	hasi	VERB	_	Aspect=Perf|VerbForm=Part	8	ccomp	_	_
7	nintzela	izan	AUX	_	Mood=Ind|Number[abs]=Sing|Person[abs]=1	6	aux	_	_
8	esan	esan	VERB	_	VerbForm=Inf	0	root	_	_
9	liteke	*edin	AUX	_	Mood=Pot|Number[abs]=Sing|Person[abs]=3	8	aux	_	SpaceAfter=No
10	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 advcl	color:blue
1	Hauek	hauek	DET	_	Case=Abs|Definite=Def|Number=Plur	7	nsubj	_	_
2	ziren	izan	AUX	_	Aspect=Prog|Mood=Ind|Number[abs]=Plur|Person[abs]=3	7	cop	_	_
3	enparantzetan	enparantza	NOUN	_	Animacy=Inan|Case=Ine|Definite=Def|Number=Plur	5	obl	_	_
4	gehien	gehien	ADV	_	_	5	advmod	_	_
5	entzuten	entzun	VERB	_	Aspect=Imp|VerbForm=Inf	7	advcl	_	_
6	ziren	izan	AUX	_	Mood=Ind|Number[abs]=Plur|Person[abs]=3	5	aux	_	_
7	hitzak	hitz	NOUN	_	Animacy=Inan|Case=Abs|Definite=Def|Number=Plur	0	root	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 advcl	color:blue
1	Triste	triste	ADV	_	_	0	root	_	_
2	nago	egon	AUX	_	Aspect=Prog|Mood=Ind|Number[abs]=Sing|Person[abs]=1	1	cop	_	_
3	Galtzagorri	galtzagorri	NOUN	_	Case=Abs|Definite=Ind	4	obj	_	_
4	itzuli	itzuli	VERB	_	VerbForm=Part	6	xcomp	_	_
5	behar	behar	NOUN	_	Case=Abs|Definite=Ind	6	compound	_	_
6	dudalako	ukan	VERB	_	_	2	advcl	_	SpaceAfter=No
7	.	.	PUNCT	_	_	1	punct	_	_

~~~


