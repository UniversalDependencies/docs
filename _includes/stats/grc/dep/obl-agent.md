

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ancient_Greek-PROIEL)

This relation is a language-specific subtype of [obl]().

447 nodes (0%) are attached to their parents as `obl:agent`.

304 instances of `obl:agent` (68%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.58165548098434.

The following 11 pairs of parts of speech are connected with `obl:agent`: [grc-pos/VERB]()-[grc-pos/NOUN]() (181; 40% instances), [grc-pos/VERB]()-[grc-pos/PRON]() (108; 24% instances), [grc-pos/VERB]()-[grc-pos/ADJ]() (69; 15% instances), [grc-pos/VERB]()-[grc-pos/PROPN]() (67; 15% instances), [grc-pos/VERB]()-[grc-pos/VERB]() (12; 3% instances), [grc-pos/VERB]()-[grc-pos/NUM]() (4; 1% instances), [grc-pos/VERB]()-[grc-pos/ADP]() (2; 0% instances), [grc-pos/ADP]()-[grc-pos/PRON]() (1; 0% instances), [grc-pos/ADP]()-[grc-pos/PROPN]() (1; 0% instances), [grc-pos/ADV]()-[grc-pos/PRON]() (1; 0% instances), [grc-pos/VERB]()-[grc-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obl:agent	color:blue
1	πάλαι	πάλαι	ADV	Df	_	6	advmod	_	ref=1.8.4
2	δὲ	δέ	ADV	Df	_	6	discourse	_	ref=1.8.4
3	τὰ	ὁ	DET	S-	Case=Nom|Definite=Def|Gender=Neut|Number=Plur|PronType=Dem	4	det	_	ref=1.8.4
4	καλὰ	καλός	ADJ	A-	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur	6	nsubj:pass	_	ref=1.8.4
5	ἀνθρώποισι	ἄνθρωπος	NOUN	Nb	Case=Dat|Gender=Masc|Number=Plur	6	obl:agent	_	ref=1.8.4
6	ἐξεύρηται	ἐξευρίσκω	VERB	V-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	ref=1.8.4
7	ἐκ	ἐκ	ADP	R-	_	9	advmod	_	ref=1.8.4
8	τῶν	ὁ	PRON	Pr	Case=Gen|Gender=Neut|Number=Plur|PronType=Rel	7	obj:dir	_	ref=1.8.4
9	μανθάνειν	μανθάνω	VERB	V-	Tense=Pres|VerbForm=Inf|Voice=Act	10	ccomp	_	ref=1.8.4
10	δεῖ	δεῖ	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	acl	_	ref=1.8.4

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 obl:agent	color:blue
1	τὰ	ὁ	DET	S-	Case=Nom|Definite=Def|Gender=Neut|Number=Plur|PronType=Dem	3	det	_	ref=5.35.3
2	δὲ	δέ	ADV	Df	_	4	discourse	_	ref=5.35.3
3	στίγματα	στίγμα	NOUN	Nb	Case=Nom|Gender=Neut|Number=Plur	4	nsubj	_	ref=5.35.3
4	ἐσήμαινε	σημαίνω	VERB	V-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	ref=5.35.3
5	ὡς	ὡς	ADV	Dq	PronType=Rel	9	advmod	_	ref=5.35.3
6	καὶ	καί#1	ADV	Df	_	9	advmod	_	ref=5.35.3
7	πρότερόν	πρότερος	ADJ	A-	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	9	advmod	_	ref=5.35.3
8	μοι	ἐγώ	PRON	Pp	Case=Dat|Gender=Masc|Number=Sing|Person=1|PronType=Prs	9	obl:agent	_	ref=5.35.3
9	εἴρηται	λέγω	VERB	V-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	4	advcl	_	ref=5.35.3
10	ἀπόστασιν	ἀπόστασις	NOUN	Nb	Case=Acc|Gender=Fem|Number=Sing	4	obj:dir	_	ref=5.35.3

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 obl:agent	color:blue
1	τιτρώσκεται	τιτρώσκω	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	ref=6.5.2
2	τὸν	ὁ	DET	S-	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Dem	3	det	_	ref=6.5.2
3	μηρὸν	μηρός	NOUN	Nb	Case=Acc|Gender=Masc|Number=Sing	1	obl	_	ref=6.5.2
4	ὑπό	ὑπό	ADP	R-	_	5	case	_	ref=6.5.2
5	τευ	τὶς	ADJ	Px	Case=Gen|Gender=Masc|Number=Sing	1	obl:agent	_	ref=6.5.2
6	τῶν	ὁ	DET	S-	Case=Gen|Definite=Def|Gender=Masc|Number=Plur|PronType=Dem	7	det	_	ref=6.5.2
7	Μιλησίων	Μιλήσιος	ADJ	A-	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	5	nmod	_	ref=6.5.2

~~~


