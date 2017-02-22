

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [det]().

3 nodes (0%) are attached to their parents as `det:numgov`.

3 instances of `det:numgov` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `det:numgov`: [lt-pos/NOUN]()-[lt-pos/DET]() (3; 100% instances).


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 18 det:numgov	color:blue
1	Šiuolaikiniai	šiuolaikinis	ADJ	Agpmpnn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	2	amod	_	_
2	daiktai	daiktas	NOUN	Ncmpnn-	Case=Nom|Gender=Masc|Number=Plur	0	root	_	_
3	taip	taip	ADV	Rgp	Degree=Pos	2	dep:adj	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	6	punct	_	_
5	kad	kad	CCONJ	Cg	_	6	mark	_	_
6	ištvertų	ištverti	VERB	Vgm-3p--n--ns-	Mood=Imp|Number=Plur|Person=3|Polarity=Pos|VerbForm=Fin	3	dep:pred_adj	_	_
7	truputį	truputis	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	6	dep:adj	_	_
8	ilgiau	ilgai	ADV	Rgc	Degree=Cmp	7	dep:adj	_	SpaceAfter=No
9	,	,	PUNCT	PUNCT	_	15	punct	_	_
10	nei	nei	CCONJ	Cg	_	15	mark	_	_
11	gamintojų	gamintojas	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	12	dep:atr_co	_	_
12	ir	ir	CCONJ	Cg	_	14	advmod	_	_
13	pardavėjų	pardavėjas	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	12	dep:atr_co	_	_
14	teikiama	teikti	VERB	Vgpp-sfpnnnn-p	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	15	acl	_	_
15	garantija	garantija	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	8	dep:sub	_	_
16	–	–	PUNCT	PUNCT	_	18	punct	_	_
17	apytikriai	apytikriai	ADV	Rgp	Degree=Pos	18	dep:adj	_	_
18	trejetą	trejetas	DET	Ml--aln	Case=Acc|NumForm=Word|NumType=Card|PronType=Tot	19	det:numgov	_	_
19	metų	metai	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	8	dep:adj	_	SpaceAfter=No
20	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


