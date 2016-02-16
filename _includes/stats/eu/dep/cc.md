

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Basque)

This relation is universal.

4678 nodes (4%) are attached to their parents as `cc`.

4318 instances of `cc` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.40722530996152.

The following 23 pairs of parts of speech are connected with `cc`: [eu-pos/VERB]()-[eu-pos/CONJ]() (2823; 60% instances), [eu-pos/NOUN]()-[eu-pos/CONJ]() (940; 20% instances), [eu-pos/PROPN]()-[eu-pos/CONJ]() (533; 11% instances), [eu-pos/ADJ]()-[eu-pos/CONJ]() (125; 3% instances), [eu-pos/NUM]()-[eu-pos/CONJ]() (75; 2% instances), [eu-pos/ADV]()-[eu-pos/CONJ]() (60; 1% instances), [eu-pos/NOUN]()-[eu-pos/PART]() (21; 0% instances), [eu-pos/PUNCT]()-[eu-pos/CONJ]() (18; 0% instances), [eu-pos/DET]()-[eu-pos/CONJ]() (15; 0% instances), [eu-pos/AUX]()-[eu-pos/CONJ]() (14; 0% instances), [eu-pos/PROPN]()-[eu-pos/PART]() (10; 0% instances), [eu-pos/CONJ]()-[eu-pos/CONJ]() (9; 0% instances), [eu-pos/X]()-[eu-pos/ADV]() (9; 0% instances), [eu-pos/VERB]()-[eu-pos/PART]() (6; 0% instances), [eu-pos/NUM]()-[eu-pos/PART]() (4; 0% instances), [eu-pos/PRON]()-[eu-pos/CONJ]() (4; 0% instances), [eu-pos/X]()-[eu-pos/CONJ]() (3; 0% instances), [eu-pos/ADJ]()-[eu-pos/PART]() (2; 0% instances), [eu-pos/CONJ]()-[eu-pos/PART]() (2; 0% instances), [eu-pos/NOUN]()-[eu-pos/X]() (2; 0% instances), [eu-pos/DET]()-[eu-pos/ADV]() (1; 0% instances), [eu-pos/PART]()-[eu-pos/CONJ]() (1; 0% instances), [eu-pos/VERB]()-[eu-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 cc	color:blue
1	-	-	PUNCT	_	_	3	punct	_	_
2	Euskal	euskal	NOUN	_	_	3	compound	_	_
3	Herrian	herri	NOUN	_	Case=Ine|Definite=Def|Number=Sing	4	nmod	_	_
4	jaio	jaio	VERB	_	Aspect=Perf|VerbForm=Part	0	root	_	_
5	dira	izan	AUX	_	Mood=Ind|Number[abs]=Plur|Person[abs]=3	4	aux	_	_
6	eta	eta	CONJ	_	_	4	cc	_	_
7	guraso	guraso	NOUN	_	_	9	dobj	_	_
8	euskaldunak	euskaldun	ADJ	_	Case=Abs|Definite=Def|Number=Plur	7	amod	_	_
9	dituzte	ukan	VERB	_	Aspect=Prog|Mood=Ind|Number[abs]=Plur|Number[erg]=Plur|Person[abs]=3|Person[erg]=3	4	conj	_	_
10	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 cc	color:blue
1	Marka	marka	NOUN	_	_	3	dobj	_	_
2	onena	on	ADJ	_	Case=Abs|Definite=Def|Degree=Sup|Number=Sing	1	amod	_	_
3	egin	egin	VERB	_	Aspect=Perf|VerbForm=Part	0	root	_	_
4	zuten	*edun	AUX	_	Mood=Ind|Number[abs]=Sing|Number[erg]=Plur|Person[abs]=3|Person[erg]=3	3	aux	_	_
5	ziabogan	ziaboga	NOUN	_	Animacy=Inan|Case=Ine|Definite=Def|Number=Sing	3	nmod	_	_
6	zein	zein	CONJ	_	_	5	cc	_	_
7	helmugan	helmuga	NOUN	_	Case=Ine|Definite=Def|Number=Sing	5	conj	_	_
8	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 cc	color:blue
1	Azkenean	azkenean	ADV	_	_	6	advmod	_	_
2	,	,	PUNCT	_	_	6	punct	_	_
3	Koxtape	Koxtape	PROPN	_	_	6	nsubj	_	_
4	eta	eta	CONJ	_	_	3	cc	_	_
5	Hondarribia	Hondarribia	PROPN	_	Case=Abs|Definite=Def|Number=Sing	3	conj	_	_
6	sailkatu	sailkatu	VERB	_	Aspect=Perf|VerbForm=Part	0	root	_	_
7	ziren	izan	AUX	_	Mood=Ind|Number[abs]=Plur|Person[abs]=3	6	aux	_	_
8	.	.	PUNCT	_	_	6	punct	_	_

~~~


