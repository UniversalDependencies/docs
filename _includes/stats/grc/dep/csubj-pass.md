

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ancient_Greek-PROIEL)

This relation is a language-specific subtype of [csubj]().

128 nodes (0%) are attached to their parents as `csubj:pass`.

123 instances of `csubj:pass` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.3359375.

The following 7 pairs of parts of speech are connected with `csubj:pass`: [grc-pos/VERB]()-[grc-pos/VERB]() (96; 75% instances), [grc-pos/VERB]()-[grc-pos/ADJ]() (11; 9% instances), [grc-pos/VERB]()-[grc-pos/SCONJ]() (9; 7% instances), [grc-pos/VERB]()-[grc-pos/NOUN]() (6; 5% instances), [grc-pos/VERB]()-[grc-pos/PRON]() (3; 2% instances), [grc-pos/VERB]()-[grc-pos/AUX]() (2; 2% instances), [grc-pos/VERB]()-[grc-pos/NUM]() (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 csubj:pass	color:blue
1	τί	τίς	PRON	Pi	Case=Acc|Gender=Neut|Number=Sing|PronType=Int	0	root	_	ref=ACTS_5.9
2	ὅτι	ὅτι	SCONJ	G-	_	3	mark	_	ref=ACTS_5.9
3	συνεφωνήθη	συμφωνέω	VERB	V-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	1	ccomp	_	ref=ACTS_5.9
4	ὑμῖν	ὑμεῖς	PRON	Pp	Case=Dat|Gender=Masc|Number=Plur|Person=2|PronType=Prs	3	obl:agent	_	ref=ACTS_5.9
5	πειράσαι	πειράζω	VERB	V-	Aspect=Perf|Tense=Past|VerbForm=Inf|Voice=Act	3	csubj:pass	_	ref=ACTS_5.9
6	τὸ	ὁ	DET	S-	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Dem	7	det	_	ref=ACTS_5.9
7	πνεῦμα	πνεῦμα	NOUN	Nb	Case=Acc|Gender=Neut|Number=Sing	5	obj:dir	_	ref=ACTS_5.9
8	κυρίου	κύριος	NOUN	Nb	Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	ref=ACTS_5.9

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 csubj:pass	color:blue
1	οἱ	ὁ	DET	S-	Case=Nom|Definite=Def|Gender=Masc|Number=Plur|PronType=Dem	3	det	_	ref=5.113.1
2	δὲ	δέ	ADV	Df	_	5	discourse	_	ref=5.113.1
3	Κουριέες	Κουριεύς	NOUN	Nb	Case=Nom|Gender=Masc|Number=Plur	8	nsubj	_	ref=5.113.1
4	οὗτοι	οὗτος	DET	Pd	Case=Nom|Gender=Masc|Number=Plur	3	det	_	ref=5.113.1
5	λέγονται	λέγω	VERB	V-	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	ref=5.113.1
6	εἶναι	εἰμί#1	AUX	V-	Tense=Pres|VerbForm=Inf|Voice=Act	8	cop	_	ref=5.113.1
7	Ἀργείων	Ἀργεῖος	ADJ	A-	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	8	iobj	_	ref=5.113.1
8	ἄποικοι	ἄποικος	ADJ	A-	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	5	csubj:pass	_	ref=5.113.1

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj:pass	color:blue
1	γέγραπται	γράφω	VERB	V-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	ref=MATT_4.6
2	γὰρ	γάρ	ADV	Df	_	1	discourse	_	ref=MATT_4.6
3	ὅτι	ὅτι	SCONJ	G-	_	1	csubj:pass	_	ref=MATT_4.6

~~~


