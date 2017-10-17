

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Basque)

This relation is universal.

3748 nodes (4%) are attached to their parents as `cc`.

3481 instances of `cc` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.44130202774813.

The following 24 pairs of parts of speech are connected with `cc`: [eu-pos/VERB]()-[eu-pos/CCONJ]() (2020; 54% instances), [eu-pos/NOUN]()-[eu-pos/CCONJ]() (859; 23% instances), [eu-pos/PROPN]()-[eu-pos/CCONJ]() (389; 10% instances), [eu-pos/ADJ]()-[eu-pos/CCONJ]() (177; 5% instances), [eu-pos/AUX]()-[eu-pos/CCONJ]() (73; 2% instances), [eu-pos/ADV]()-[eu-pos/CCONJ]() (67; 2% instances), [eu-pos/NUM]()-[eu-pos/CCONJ]() (58; 2% instances), [eu-pos/CCONJ]()-[eu-pos/CCONJ]() (24; 1% instances), [eu-pos/DET]()-[eu-pos/CCONJ]() (17; 0% instances), [eu-pos/NOUN]()-[eu-pos/PART]() (17; 0% instances), [eu-pos/PUNCT]()-[eu-pos/CCONJ]() (11; 0% instances), [eu-pos/PROPN]()-[eu-pos/PART]() (7; 0% instances), [eu-pos/X]()-[eu-pos/ADV]() (7; 0% instances), [eu-pos/VERB]()-[eu-pos/PART]() (6; 0% instances), [eu-pos/NUM]()-[eu-pos/PART]() (3; 0% instances), [eu-pos/PRON]()-[eu-pos/CCONJ]() (3; 0% instances), [eu-pos/CCONJ]()-[eu-pos/PART]() (2; 0% instances), [eu-pos/NOUN]()-[eu-pos/X]() (2; 0% instances), [eu-pos/ADJ]()-[eu-pos/PART]() (1; 0% instances), [eu-pos/DET]()-[eu-pos/PART]() (1; 0% instances), [eu-pos/INTJ]()-[eu-pos/CCONJ]() (1; 0% instances), [eu-pos/PRON]()-[eu-pos/ADV]() (1; 0% instances), [eu-pos/SYM]()-[eu-pos/CCONJ]() (1; 0% instances), [eu-pos/VERB]()-[eu-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 cc	color:blue
1	-	-	PUNCT	_	_	3	punct	_	_
2	Euskal	euskal	NOUN	_	_	3	compound	_	_
3	Herrian	herri	NOUN	_	Case=Ine|Definite=Def|Number=Sing	4	obl	_	_
4	jaio	jaio	VERB	_	Aspect=Perf|VerbForm=Part	0	root	_	_
5	dira	izan	AUX	_	Mood=Ind|Number[abs]=Plur|Person[abs]=3	4	aux	_	_
6	eta	eta	CCONJ	_	_	9	cc	_	_
7	guraso	guraso	NOUN	_	_	9	obj	_	_
8	euskaldunak	euskaldun	ADJ	_	Case=Abs|Definite=Def|Number=Plur	7	amod	_	_
9	dituzte	ukan	VERB	_	Aspect=Prog|Mood=Ind|Number[abs]=Plur|Number[erg]=Plur|Person[abs]=3|Person[erg]=3	4	conj	_	SpaceAfter=No
10	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 cc	color:blue
1	Marka	marka	NOUN	_	_	3	obj	_	_
2	onena	on	ADJ	_	Case=Abs|Definite=Def|Degree=Sup|Number=Sing	1	amod	_	_
3	egin	egin	VERB	_	Aspect=Perf|VerbForm=Part	0	root	_	_
4	zuten	*edun	AUX	_	Mood=Ind|Number[abs]=Sing|Number[erg]=Plur|Person[abs]=3|Person[erg]=3	3	aux	_	_
5	ziabogan	ziaboga	NOUN	_	Animacy=Inan|Case=Ine|Definite=Def|Number=Sing	3	obl	_	_
6	zein	zein	CCONJ	_	_	7	cc	_	_
7	helmugan	helmuga	NOUN	_	Case=Ine|Definite=Def|Number=Sing	5	conj	_	SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc	color:blue
1	Azkenean	azkenean	ADV	_	_	6	advmod	_	SpaceAfter=No
2	,	,	PUNCT	_	_	6	punct	_	_
3	Koxtape	Koxtape	PROPN	_	_	6	nsubj	_	_
4	eta	eta	CCONJ	_	_	5	cc	_	_
5	Hondarribia	Hondarribia	PROPN	_	Case=Abs|Definite=Def|Number=Sing	3	conj	_	_
6	sailkatu	sailkatu	VERB	_	Aspect=Perf|VerbForm=Part	0	root	_	_
7	ziren	izan	AUX	_	Mood=Ind|Number[abs]=Plur|Person[abs]=3	6	aux	_	SpaceAfter=No
8	.	.	PUNCT	_	_	6	punct	_	_

~~~


