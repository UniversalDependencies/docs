

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Old_Church_Slavonic)

This relation is universal.

382 nodes (1%) are attached to their parents as `appos`.

342 instances of `appos` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.76178010471204.

The following 36 pairs of parts of speech are connected with `appos`: [cu-pos/PROPN]()-[cu-pos/NOUN]() (112; 29% instances), [cu-pos/NOUN]()-[cu-pos/NOUN]() (52; 14% instances), [cu-pos/NOUN]()-[cu-pos/PROPN]() (32; 8% instances), [cu-pos/ADP]()-[cu-pos/NOUN]() (27; 7% instances), [cu-pos/ADJ]()-[cu-pos/NOUN]() (18; 5% instances), [cu-pos/PROPN]()-[cu-pos/ADJ]() (17; 4% instances), [cu-pos/ADV]()-[cu-pos/NOUN]() (14; 4% instances), [cu-pos/NOUN]()-[cu-pos/NUM]() (13; 3% instances), [cu-pos/PRON]()-[cu-pos/ADJ]() (11; 3% instances), [cu-pos/PRON]()-[cu-pos/NOUN]() (11; 3% instances), [cu-pos/VERB]()-[cu-pos/ADJ]() (11; 3% instances), [cu-pos/ADJ]()-[cu-pos/PROPN]() (8; 2% instances), [cu-pos/PROPN]()-[cu-pos/NUM]() (6; 2% instances), [cu-pos/VERB]()-[cu-pos/NOUN]() (6; 2% instances), [cu-pos/ADV]()-[cu-pos/ADV]() (5; 1% instances), [cu-pos/VERB]()-[cu-pos/NUM]() (5; 1% instances), [cu-pos/ADP]()-[cu-pos/PROPN]() (4; 1% instances), [cu-pos/PRON]()-[cu-pos/PROPN]() (4; 1% instances), [cu-pos/NOUN]()-[cu-pos/ADJ]() (3; 1% instances), [cu-pos/ADJ]()-[cu-pos/NUM]() (2; 1% instances), [cu-pos/ADP]()-[cu-pos/NUM]() (2; 1% instances), [cu-pos/NUM]()-[cu-pos/ADJ]() (2; 1% instances), [cu-pos/NUM]()-[cu-pos/PROPN]() (2; 1% instances), [cu-pos/PRON]()-[cu-pos/PRON]() (2; 1% instances), [cu-pos/VERB]()-[cu-pos/PROPN]() (2; 1% instances), [cu-pos/ADJ]()-[cu-pos/ADJ]() (1; 0% instances), [cu-pos/ADJ]()-[cu-pos/CCONJ]() (1; 0% instances), [cu-pos/ADJ]()-[cu-pos/VERB]() (1; 0% instances), [cu-pos/ADP]()-[cu-pos/ADJ]() (1; 0% instances), [cu-pos/ADP]()-[cu-pos/ADV]() (1; 0% instances), [cu-pos/NOUN]()-[cu-pos/SCONJ]() (1; 0% instances), [cu-pos/NUM]()-[cu-pos/NOUN]() (1; 0% instances), [cu-pos/NUM]()-[cu-pos/NUM]() (1; 0% instances), [cu-pos/PRON]()-[cu-pos/NUM]() (1; 0% instances), [cu-pos/PROPN]()-[cu-pos/PRON]() (1; 0% instances), [cu-pos/VERB]()-[cu-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 appos	color:blue
1	сь	сь	ADJ	Pd	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	ref=MATT_21.11
2	естъ	бꙑти	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	ref=MATT_21.11
3	и҃с	исоусъ	PROPN	Ne	Case=Nom|Gender=Masc|Number=Sing	2	xcomp	_	ref=MATT_21.11
4	пророкъ	пророкъ	NOUN	Nb	Case=Nom|Gender=Masc|Number=Sing	3	appos	_	ref=MATT_21.11
5	ꙇже	иже	PRON	Pr	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	7	nsubj	_	ref=MATT_21.11
6	отъ	отъ	ADP	R-	_	7	case	_	ref=MATT_21.11
7	назарета	назаретъ	PROPN	Ne	Case=Gen|Gender=Masc|Number=Sing	3	flat:name	_	ref=MATT_21.11
8	галилеискааго	галилеискъ	ADJ	A-	Case=Gen|Degree=Pos|Gender=Masc,Neut|Number=Sing|Strength=Weak	7	advmod	_	ref=MATT_21.11

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 appos	color:blue
1	г҃и	господь	NOUN	Nb	Case=Dat|Gender=Masc|Number=Sing	4	iobj	_	ref=LUKE_4.8
2	б҃оу	богъ	NOUN	Nb	Case=Dat|Gender=Masc|Number=Sing	1	appos	_	ref=LUKE_4.8
3	твоемоу	твои	ADJ	Ps	Case=Dat|Gender=Masc,Neut|Number=Sing|Person=2|Poss=Yes	2	nmod	_	ref=LUKE_4.8
4	поклониши	поклонити	VERB	V-	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	ref=LUKE_4.8
5	сѧ	себе	AUX	Pk	Case=Acc|Number=Sing|Person=3	4	aux	_	ref=LUKE_4.8
6	ꙇ	и	CCONJ	C-	_	4	cc	_	ref=LUKE_4.8
7	томоу	тъ	ADJ	Pd	Case=Dat|Gender=Masc|Number=Sing	9	iobj	_	ref=LUKE_4.8
8	единомоу	ѥдинъ	NUM	Ma	Case=Dat|Gender=Masc,Neut|Number=Sing	7	appos	_	ref=LUKE_4.8
9	послоужиши	послоужити	VERB	V-	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	4	conj	_	ref=LUKE_4.8

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 appos	color:blue
1	Г҃ла	глаголати	VERB	V-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	ref=JOHN_11.39
2	емоу	и	PRON	Pp	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs	1	iobj	_	ref=JOHN_11.39
3	сестра	сестра	NOUN	Nb	Case=Nom|Gender=Fem|Number=Sing	1	nsubj	_	ref=JOHN_11.39
4	оумеръшааго	оумрѣти	VERB	V-	Case=Gen|Gender=Masc|Number=Sing|Strength=Weak|Tense=Past|VerbForm=Part|Voice=Act	3	acl	_	ref=JOHN_11.39
5	марта	маръта	PROPN	Ne	Case=Nom|Gender=Fem|Number=Sing	3	appos	_	ref=JOHN_11.39

~~~


