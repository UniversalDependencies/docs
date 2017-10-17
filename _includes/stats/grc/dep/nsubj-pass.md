

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ancient_Greek-PROIEL)

This relation is a language-specific subtype of [nsubj]().

1835 nodes (1%) are attached to their parents as `nsubj:pass`.

1054 instances of `nsubj:pass` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.85177111716621.

The following 8 pairs of parts of speech are connected with `nsubj:pass`: [grc-pos/VERB]()-[grc-pos/NOUN]() (895; 49% instances), [grc-pos/VERB]()-[grc-pos/ADJ]() (326; 18% instances), [grc-pos/VERB]()-[grc-pos/PRON]() (286; 16% instances), [grc-pos/VERB]()-[grc-pos/PROPN]() (199; 11% instances), [grc-pos/VERB]()-[grc-pos/VERB]() (107; 6% instances), [grc-pos/VERB]()-[grc-pos/NUM]() (17; 1% instances), [grc-pos/VERB]()-[grc-pos/ADV]() (4; 0% instances), [grc-pos/VERB]()-[grc-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nsubj:pass	color:blue
1	ἁφθεὶς	ἅπτω	VERB	V-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	5	advcl	_	ref=1.19.1
2	δὲ	δέ	ADV	Df	_	5	discourse	_	ref=1.19.1
3	ὁ	ὁ	DET	S-	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Dem	4	det	_	ref=1.19.1
4	νηὸς	ναός	NOUN	Nb	Case=Nom|Gender=Masc|Number=Sing	5	nsubj:pass	_	ref=1.19.1
5	κατεκαύθη	κατακαίω	VERB	V-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	ref=1.19.1

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 nsubj:pass	color:blue
1	ἄνδρες	ἀνήρ	NOUN	Nb	Case=Voc|Gender=Masc|Number=Plur	8	vocative	_	ref=6.9.3
2	Ἴωνες	Ἴων	NOUN	Nb	Case=Voc|Gender=Masc|Number=Plur	1	nmod	_	ref=6.9.3
3	νῦν	νῦν#1	ADV	Df	_	8	advmod	_	ref=6.9.3
4	τις	τὶς	ADJ	Px	Case=Nom|Gender=Masc|Number=Sing	8	nsubj:pass	_	ref=6.9.3
5	ὑμέων	ὑμεῖς	PRON	Pp	Case=Gen|Gender=Masc|Number=Plur|Person=2|PronType=Prs	4	nmod	_	ref=6.9.3
6	εὖ	εὖ	ADV	Df	_	7	xcomp	_	ref=6.9.3
7	ποιήσας	ποιέω	VERB	V-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	4	acl	_	ref=6.9.3
8	φανήτω	φαίνω	VERB	V-	Aspect=Perf|Mood=Imp|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	ref=6.9.3
9	τὸν	ὁ	DET	S-	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Dem	11	det	_	ref=6.9.3
10	βασιλέος	βασιλεύς	NOUN	Nb	Case=Gen|Gender=Masc|Number=Sing	11	nmod	_	ref=6.9.3
11	οἶκον	οἶκος	NOUN	Nb	Case=Acc|Gender=Masc|Number=Sing	7	obj:dir	_	ref=6.9.3

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nsubj:pass	color:blue
1	ἐπορᾶν	ἐφοράω	VERB	V-	Tense=Pres|VerbForm=Inf|Voice=Act	4	xcomp	_	ref=1.110.3
2	δὲ	δέ	ADV	Df	_	4	discourse	_	ref=1.110.3
3	ἐκκείμενον	ἔκκειμαι	VERB	V-	Aspect=Perf|Case=Acc|Gender=Masc,Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Mid	1	xcomp	_	ref=1.110.3
4	τέταγμαι	τάσσω	VERB	V-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	ref=1.110.3
5	ἐγώ	ἐγώ	PRON	Pp	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	4	nsubj:pass	_	ref=1.110.3

~~~


