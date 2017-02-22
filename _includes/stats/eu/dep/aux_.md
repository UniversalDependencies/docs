

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Basque)

This relation is universal.

8312 nodes (9%) are attached to their parents as `aux`.

7604 instances of `aux` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.14978344562079.

The following 17 pairs of parts of speech are connected with `aux`: [eu-pos/VERB]()-[eu-pos/AUX]() (7492; 90% instances), [eu-pos/AUX]()-[eu-pos/AUX]() (480; 6% instances), [eu-pos/VERB]()-[eu-pos/VERB]() (286; 3% instances), [eu-pos/NOUN]()-[eu-pos/AUX]() (21; 0% instances), [eu-pos/NOUN]()-[eu-pos/VERB]() (10; 0% instances), [eu-pos/ADJ]()-[eu-pos/VERB]() (6; 0% instances), [eu-pos/VERB]()-[eu-pos/CCONJ]() (3; 0% instances), [eu-pos/ADJ]()-[eu-pos/AUX]() (2; 0% instances), [eu-pos/AUX]()-[eu-pos/CCONJ]() (2; 0% instances), [eu-pos/VERB]()-[eu-pos/PART]() (2; 0% instances), [eu-pos/VERB]()-[eu-pos/X]() (2; 0% instances), [eu-pos/ADJ]()-[eu-pos/ADV]() (1; 0% instances), [eu-pos/AUX]()-[eu-pos/VERB]() (1; 0% instances), [eu-pos/AUX]()-[eu-pos/X]() (1; 0% instances), [eu-pos/CCONJ]()-[eu-pos/VERB]() (1; 0% instances), [eu-pos/DET]()-[eu-pos/DET]() (1; 0% instances), [eu-pos/PRON]()-[eu-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 aux	color:blue
1	Atenasen	Atenas	PROPN	_	Case=Ine|Definite=Def|Number=Sing	8	obl	_	_
2	ordea	ordea	CCONJ	_	_	8	advmod	_	SpaceAfter=No
3	,	,	PUNCT	_	_	8	punct	_	_
4	beste	beste	DET	_	_	6	det	_	_
5	bost	bost	NUM	_	NumType=Card	6	nummod	_	_
6	jarduera	jarduera	NOUN	_	Case=Abs|Definite=Ind	8	nsubj	_	_
7	gehiago	gehiago	DET	_	Case=Abs|Definite=Ind	6	det	_	_
8	izan	izan	VERB	_	Aspect=Perf|VerbForm=Part	0	root	_	_
9	daitezke	*edin	AUX	_	Mood=Pot|Number[abs]=Plur|Person[abs]=3	8	aux	_	SpaceAfter=No
10	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 aux	color:blue
1	Hurrengo	hurrengo	ADJ	_	_	2	amod	_	_
2	orrialdeko	orrialde	NOUN	_	Animacy=Inan|Case=Loc|Definite=Def|Number=Sing	3	nmod	_	_
3	mapa	mapa	NOUN	_	Case=Abs|Definite=Def|Number=Sing	4	nsubj	_	_
4	baliagarria	baliagarri	ADJ	_	Case=Abs|Definite=Def|Number=Sing	0	root	_	_
5	izan	izan	AUX	_	VerbForm=Inf	4	cop	_	_
6	dakizuke	*edin	AUX	_	Mood=Pot|Number[abs]=Sing|Number[dat]=Sing|Person[abs]=3|Person[dat]=2	5	aux	_	SpaceAfter=No
7	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 aux	color:blue
1	"	"	PUNCT	_	_	3	punct	_	SpaceAfter=No
2	Ruandan	Ruanda	PROPN	_	Case=Ine|Definite=Def|Number=Sing	3	obl	_	_
3	hil	hil	VERB	_	VerbForm=Part	0	root	_	_
4	egingo	egin	VERB	_	Aspect=Prosp|VerbForm=Part	3	aux	_	_
5	gaituzte	*edun	AUX	_	Mood=Ind|Number[abs]=Plur|Number[erg]=Plur|Person[abs]=1|Person[erg]=3	3	aux	_	SpaceAfter=No
6	,	,	PUNCT	_	_	3	punct	_	_
7	abereak	abere	NOUN	_	Animacy=Anim|Case=Abs|Definite=Def|Number=Plur	8	nsubj	_	_
8	bagina	izan	VERB	_	Aspect=Prog|Mood=Cnd|Number[abs]=Plur|Person[abs]=1	3	advcl	_	_
9	bezala	bezala	ADV	_	_	8	mark	_	SpaceAfter=No
10	"	"	PUNCT	_	_	3	punct	_	SpaceAfter=No
11	.	.	PUNCT	_	_	3	punct	_	_

~~~


