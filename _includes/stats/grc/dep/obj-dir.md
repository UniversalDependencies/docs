

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ancient_Greek-PROIEL)

This relation is a language-specific subtype of [obj]().

12761 nodes (6%) are attached to their parents as `obj:dir`.

7477 instances of `obj:dir` (59%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.13987931980252.

The following 42 pairs of parts of speech are connected with `obj:dir`: [grc-pos/VERB]()-[grc-pos/NOUN]() (6110; 48% instances), [grc-pos/VERB]()-[grc-pos/PRON]() (3265; 26% instances), [grc-pos/VERB]()-[grc-pos/ADJ]() (2022; 16% instances), [grc-pos/VERB]()-[grc-pos/PROPN]() (617; 5% instances), [grc-pos/VERB]()-[grc-pos/VERB]() (503; 4% instances), [grc-pos/ADV]()-[grc-pos/NOUN]() (57; 0% instances), [grc-pos/VERB]()-[grc-pos/NUM]() (57; 0% instances), [grc-pos/VERB]()-[grc-pos/ADV]() (35; 0% instances), [grc-pos/ADV]()-[grc-pos/PRON]() (11; 0% instances), [grc-pos/NOUN]()-[grc-pos/NOUN]() (11; 0% instances), [grc-pos/VERB]()-[grc-pos/AUX]() (9; 0% instances), [grc-pos/ADV]()-[grc-pos/ADJ]() (8; 0% instances), [grc-pos/ADV]()-[grc-pos/PROPN]() (5; 0% instances), [grc-pos/ADV]()-[grc-pos/VERB]() (5; 0% instances), [grc-pos/CCONJ]()-[grc-pos/NOUN]() (4; 0% instances), [grc-pos/ADJ]()-[grc-pos/NOUN]() (3; 0% instances), [grc-pos/ADP]()-[grc-pos/NOUN]() (3; 0% instances), [grc-pos/CCONJ]()-[grc-pos/ADJ]() (3; 0% instances), [grc-pos/SCONJ]()-[grc-pos/NOUN]() (3; 0% instances), [grc-pos/ADJ]()-[grc-pos/ADJ]() (2; 0% instances), [grc-pos/ADJ]()-[grc-pos/PROPN]() (2; 0% instances), [grc-pos/ADV]()-[grc-pos/NUM]() (2; 0% instances), [grc-pos/CCONJ]()-[grc-pos/PROPN]() (2; 0% instances), [grc-pos/NOUN]()-[grc-pos/NUM]() (2; 0% instances), [grc-pos/SCONJ]()-[grc-pos/ADJ]() (2; 0% instances), [grc-pos/SCONJ]()-[grc-pos/PRON]() (2; 0% instances), [grc-pos/ADP]()-[grc-pos/PRON]() (1; 0% instances), [grc-pos/ADP]()-[grc-pos/PROPN]() (1; 0% instances), [grc-pos/ADP]()-[grc-pos/VERB]() (1; 0% instances), [grc-pos/ADV]()-[grc-pos/AUX]() (1; 0% instances), [grc-pos/AUX]()-[grc-pos/ADJ]() (1; 0% instances), [grc-pos/AUX]()-[grc-pos/PROPN]() (1; 0% instances), [grc-pos/AUX]()-[grc-pos/VERB]() (1; 0% instances), [grc-pos/CCONJ]()-[grc-pos/PRON]() (1; 0% instances), [grc-pos/DET]()-[grc-pos/NOUN]() (1; 0% instances), [grc-pos/NOUN]()-[grc-pos/VERB]() (1; 0% instances), [grc-pos/PRON]()-[grc-pos/PROPN]() (1; 0% instances), [grc-pos/PROPN]()-[grc-pos/NOUN]() (1; 0% instances), [grc-pos/SCONJ]()-[grc-pos/VERB]() (1; 0% instances), [grc-pos/VERB]()-[grc-pos/ADP]() (1; 0% instances), [grc-pos/VERB]()-[grc-pos/INTJ]() (1; 0% instances), [grc-pos/VERB]()-[grc-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obj:dir	color:blue
1	ἐσελθοῦσαν	εἰσέρχομαι	VERB	V-	Aspect=Perf|Case=Acc|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	7	xcomp	_	ref=1.10.1
2	δὲ	δέ	ADV	Df	_	7	discourse	_	ref=1.10.1
3	καὶ	καί	CCONJ	C-	_	1	cc	_	ref=1.10.1
4	τιθεῖσαν	τίθημι	VERB	V-	Case=Acc|Gender=Fem|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	1	conj	_	ref=1.10.1
5	τὰ	ὁ	DET	S-	Case=Acc|Definite=Def|Gender=Neut|Number=Plur|PronType=Dem	6	det	_	ref=1.10.1
6	εἵματα	εἷμα	NOUN	Nb	Case=Acc|Gender=Neut|Number=Plur	4	obj:dir	_	ref=1.10.1
7	ἐθηεῖτο	θεάομαι	VERB	V-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	ref=1.10.1
8	ὁ	ὁ	DET	S-	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Dem	9	det	_	ref=1.10.1
9	Γύγης	Γύγης	PROPN	Ne	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	ref=1.10.1

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 obj:dir	color:blue
1	ὁκοτέρην	ὁπότερος	PRON	Pi	Case=Acc|Gender=Fem|Number=Sing|PronType=Int	3	obj:dir	_	ref=1.11.2
2	βούλεαι	βούλομαι	VERB	V-	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	ref=1.11.2
3	τραπέσθαι	τρέπω	VERB	V-	Aspect=Perf|Tense=Past|VerbForm=Inf|Voice=Mid	2	xcomp	_	ref=1.11.2

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obj:dir	color:blue
1	τότε	τότε	ADV	Df	_	8	advmod	_	ref=1.11.1
2	μὲν	μέν	ADV	Df	_	8	discourse	_	ref=1.11.1
3	δὴ	δή	ADV	Df	_	8	discourse	_	ref=1.11.1
4	οὕτω	οὕτω(ς)	ADV	Df	_	8	advmod	_	ref=1.11.1
5	οὐδέν	οὐδείς	ADJ	Px	Case=Acc|Gender=Neut|Number=Sing	6	obj:dir	_	ref=1.11.1
6	δηλώσασα	δηλόω	VERB	V-	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	8	advcl	_	ref=1.11.1
7	ἡσυχίην	ἡσυχία	NOUN	Nb	Case=Acc|Gender=Fem|Number=Sing	8	obj:dir	_	ref=1.11.1
8	εἶχε	ἔχω	VERB	V-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	ref=1.11.1

~~~


