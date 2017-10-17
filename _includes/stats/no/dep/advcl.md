

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian-Bokmaal)

This relation is universal.

4780 nodes (2%) are attached to their parents as `advcl`.

3917 instances of `advcl` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.71903765690377.

The following 36 pairs of parts of speech are connected with `advcl`: [no-pos/VERB]()-[no-pos/VERB]() (3097; 65% instances), [no-pos/ADJ]()-[no-pos/VERB]() (683; 14% instances), [no-pos/ADV]()-[no-pos/VERB]() (272; 6% instances), [no-pos/NOUN]()-[no-pos/VERB]() (162; 3% instances), [no-pos/VERB]()-[no-pos/ADJ]() (137; 3% instances), [no-pos/VERB]()-[no-pos/NOUN]() (126; 3% instances), [no-pos/ADJ]()-[no-pos/ADJ]() (40; 1% instances), [no-pos/ADP]()-[no-pos/VERB]() (37; 1% instances), [no-pos/ADJ]()-[no-pos/NOUN]() (34; 1% instances), [no-pos/DET]()-[no-pos/VERB]() (34; 1% instances), [no-pos/ADV]()-[no-pos/ADJ]() (26; 1% instances), [no-pos/PROPN]()-[no-pos/VERB]() (20; 0% instances), [no-pos/PRON]()-[no-pos/VERB]() (19; 0% instances), [no-pos/VERB]()-[no-pos/ADP]() (18; 0% instances), [no-pos/VERB]()-[no-pos/PRON]() (13; 0% instances), [no-pos/NOUN]()-[no-pos/ADJ]() (8; 0% instances), [no-pos/VERB]()-[no-pos/NUM]() (8; 0% instances), [no-pos/NOUN]()-[no-pos/NOUN]() (7; 0% instances), [no-pos/VERB]()-[no-pos/PROPN]() (7; 0% instances), [no-pos/ADV]()-[no-pos/NOUN]() (6; 0% instances), [no-pos/NUM]()-[no-pos/VERB]() (4; 0% instances), [no-pos/ADJ]()-[no-pos/PRON]() (3; 0% instances), [no-pos/NOUN]()-[no-pos/ADP]() (3; 0% instances), [no-pos/PRON]()-[no-pos/NOUN]() (3; 0% instances), [no-pos/ADJ]()-[no-pos/NUM]() (2; 0% instances), [no-pos/ADJ]()-[no-pos/DET]() (1; 0% instances), [no-pos/ADJ]()-[no-pos/PROPN]() (1; 0% instances), [no-pos/ADP]()-[no-pos/NOUN]() (1; 0% instances), [no-pos/DET]()-[no-pos/NOUN]() (1; 0% instances), [no-pos/INTJ]()-[no-pos/VERB]() (1; 0% instances), [no-pos/NOUN]()-[no-pos/PRON]() (1; 0% instances), [no-pos/NOUN]()-[no-pos/PROPN]() (1; 0% instances), [no-pos/NUM]()-[no-pos/ADJ]() (1; 0% instances), [no-pos/PRON]()-[no-pos/ADJ]() (1; 0% instances), [no-pos/PROPN]()-[no-pos/ADJ]() (1; 0% instances), [no-pos/VERB]()-[no-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 advcl	color:blue
1	Som	som	SCONJ	_	_	3	obj	_	_
2	vi	vi	PRON	_	Animacy=Hum|Case=Nom|Number=Plur|Person=1|PronType=Prs	3	nsubj	_	_
3	spør	spørre	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	8	advcl	_	SpaceAfter=No
4	,	$,	PUNCT	_	_	3	punct	_	_
5	vil	ville	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	8	aux	_	_
6	vi	vi	PRON	_	Animacy=Hum|Case=Nom|Number=Plur|Person=1|PronType=Prs	8	nsubj	_	_
7	også	også	ADV	_	_	8	advmod	_	_
8	få	få	VERB	_	VerbForm=Inf	0	root	_	_
9	svar	svar	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	8	obj	_	SpaceAfter=No
10	.	$.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 advcl	color:blue
1	Det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	var	være	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	3	cop	_	_
3	grusomt	grusom	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
4	å	å	PART	_	_	5	mark	_	_
5	høre	høre	VERB	_	VerbForm=Inf	3	advcl	_	_
6	på	på	ADP	_	_	5	compound:prt	_	SpaceAfter=No
7	.	$.	PUNCT	_	_	3	punct	_	SpaceAfter=No
8	»	$"	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 advcl	color:blue
1	Men	men	CCONJ	_	_	4	cc	_	_
2	jeg	jeg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
3	skal	skulle	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	aux	_	_
4	bli	bli	VERB	_	VerbForm=Inf	0	root	_	_
5	så	så	ADV	_	_	6	advmod	_	_
6	frisk	frisk	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	4	xcomp	_	_
7	jeg	jeg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	8	nsubj	_	_
8	kan	kunne	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	5	advcl	_	SpaceAfter=No
9	,	$,	PUNCT	_	_	4	punct	_	_
10	sier	si	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	parataxis	_	_
11	han	han	PRON	_	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	SpaceAfter=No
12	.	$.	PUNCT	_	_	4	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian-Nynorsk)

This relation is universal.

4467 nodes (2%) are attached to their parents as `advcl`.

3685 instances of `advcl` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.75218267293486.

The following 40 pairs of parts of speech are connected with `advcl`: [no-pos/VERB]()-[no-pos/VERB]() (2619; 59% instances), [no-pos/ADJ]()-[no-pos/VERB]() (806; 18% instances), [no-pos/ADV]()-[no-pos/VERB]() (299; 7% instances), [no-pos/VERB]()-[no-pos/ADJ]() (150; 3% instances), [no-pos/NOUN]()-[no-pos/VERB]() (147; 3% instances), [no-pos/VERB]()-[no-pos/NOUN]() (117; 3% instances), [no-pos/ADJ]()-[no-pos/ADJ]() (60; 1% instances), [no-pos/ADP]()-[no-pos/VERB]() (50; 1% instances), [no-pos/ADJ]()-[no-pos/NOUN]() (35; 1% instances), [no-pos/DET]()-[no-pos/VERB]() (33; 1% instances), [no-pos/ADV]()-[no-pos/ADJ]() (18; 0% instances), [no-pos/VERB]()-[no-pos/ADP]() (16; 0% instances), [no-pos/NOUN]()-[no-pos/NOUN]() (12; 0% instances), [no-pos/PRON]()-[no-pos/VERB]() (12; 0% instances), [no-pos/PROPN]()-[no-pos/VERB]() (12; 0% instances), [no-pos/VERB]()-[no-pos/PRON]() (12; 0% instances), [no-pos/ADV]()-[no-pos/NOUN]() (11; 0% instances), [no-pos/NOUN]()-[no-pos/ADJ]() (10; 0% instances), [no-pos/VERB]()-[no-pos/PROPN]() (8; 0% instances), [no-pos/NUM]()-[no-pos/VERB]() (6; 0% instances), [no-pos/VERB]()-[no-pos/NUM]() (4; 0% instances), [no-pos/ADJ]()-[no-pos/ADP]() (3; 0% instances), [no-pos/NOUN]()-[no-pos/PRON]() (3; 0% instances), [no-pos/ADJ]()-[no-pos/PRON]() (2; 0% instances), [no-pos/ADP]()-[no-pos/NOUN]() (2; 0% instances), [no-pos/ADV]()-[no-pos/PRON]() (2; 0% instances), [no-pos/DET]()-[no-pos/ADJ]() (2; 0% instances), [no-pos/NOUN]()-[no-pos/NUM]() (2; 0% instances), [no-pos/PRON]()-[no-pos/NOUN]() (2; 0% instances), [no-pos/X]()-[no-pos/VERB]() (2; 0% instances), [no-pos/ADJ]()-[no-pos/NUM]() (1; 0% instances), [no-pos/ADP]()-[no-pos/ADP]() (1; 0% instances), [no-pos/ADP]()-[no-pos/NUM]() (1; 0% instances), [no-pos/ADV]()-[no-pos/ADP]() (1; 0% instances), [no-pos/INTJ]()-[no-pos/VERB]() (1; 0% instances), [no-pos/NOUN]()-[no-pos/ADP]() (1; 0% instances), [no-pos/NOUN]()-[no-pos/DET]() (1; 0% instances), [no-pos/NUM]()-[no-pos/NOUN]() (1; 0% instances), [no-pos/PROPN]()-[no-pos/ADJ]() (1; 0% instances), [no-pos/VERB]()-[no-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 advcl	color:blue
1	Det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	obj	_	_
2	får	få	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
4	når	når	SCONJ	_	_	6	mark	_	_
5	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
6	bakar	bake	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	2	advcl	_	_
7	brødet	brød	NOUN	_	Definite=Def|Gender=Neut|Number=Sing	6	obj	_	_
8	i	i	ADP	_	_	9	case	_	_
9	former	form	NOUN	_	Definite=Ind|Gender=Fem|Number=Plur	6	obl	_	SpaceAfter=No
10	.	$.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 14 advcl	color:blue
1	Jaudå	jaudå	INTJ	_	_	4	discourse	_	SpaceAfter=No
2	,	$,	PUNCT	_	_	1	punct	_	_
3	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
4	har	ha	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
5	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	obj	_	SpaceAfter=No
6	,	$,	PUNCT	_	_	4	punct	_	_
7	og	og	CCONJ	_	_	10	cc	_	_
8	den	den	PRON	_	Gender=Fem,Masc|Number=Sing|Person=3|PronType=Prs	10	nsubj:pass	_	_
9	vert	verte	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	10	aux:pass	_	_
10	brukt	bruke	ADJ	_	Definite=Ind|Number=Sing|VerbForm=Part	4	conj	_	_
11	rett	rett	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	10	advmod	_	_
12	som	som	PRON	_	PronType=Rel	14	nsubj	_	_
13	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	14	expl	_	_
14	er	vere	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	11	advcl	_	SpaceAfter=No
15	.	$.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 advcl	color:blue
1	Det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	_	_
2	er	vere	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	no	no	ADV	_	_	0	root	_	_
4	arbeidet	arbeid	NOUN	_	Definite=Def|Gender=Neut|Number=Sing	5	nsubj	_	_
5	byrjar	byrje	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	3	advcl	_	SpaceAfter=No
6	»	$"	PUNCT	_	_	3	punct	_	SpaceAfter=No
7	,	$,	PUNCT	_	_	3	punct	_	_
8	sa	seie	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	3	parataxis	_	_
9	vi	vi	PRON	_	Animacy=Hum|Case=Nom|Number=Plur|Person=1|PronType=Prs	8	nsubj	_	SpaceAfter=No
10	.	$.	PUNCT	_	_	3	punct	_	_

~~~


