

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ancient_Greek-PROIEL)

This relation is universal.

68 nodes (0%) are attached to their parents as `aux`.

38 instances of `aux` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.94117647058824.

The following 15 pairs of parts of speech are connected with `aux`: [grc-pos/VERB]()-[grc-pos/VERB]() (21; 31% instances), [grc-pos/PRON]()-[grc-pos/PRON]() (10; 15% instances), [grc-pos/VERB]()-[grc-pos/PRON]() (6; 9% instances), [grc-pos/VERB]()-[grc-pos/SCONJ]() (6; 9% instances), [grc-pos/ADJ]()-[grc-pos/PRON]() (5; 7% instances), [grc-pos/NOUN]()-[grc-pos/NOUN]() (4; 6% instances), [grc-pos/DET]()-[grc-pos/PRON]() (3; 4% instances), [grc-pos/ADJ]()-[grc-pos/NOUN]() (2; 3% instances), [grc-pos/ADP]()-[grc-pos/PRON]() (2; 3% instances), [grc-pos/CONJ]()-[grc-pos/VERB]() (2; 3% instances), [grc-pos/PROPN]()-[grc-pos/PRON]() (2; 3% instances), [grc-pos/VERB]()-[grc-pos/PROPN]() (2; 3% instances), [grc-pos/ADV]()-[grc-pos/VERB]() (1; 1% instances), [grc-pos/DET]()-[grc-pos/NOUN]() (1; 1% instances), [grc-pos/VERB]()-[grc-pos/NOUN]() (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 aux	color:blue
1	αἱ	ὁ	DET	S-	Case=Nom|Definite=Def|Gender=Fem|Number=Plur|PronType=Dem	2	det	_	_
2	χεῖρες	χείρ	NOUN	Nb	Case=Nom|Gender=Fem|Number=Plur	5	nsubj	_	_
3	δὲ	δέ	ADV	Df	_	5	discourse	_	_
4	ἐκεῖναι	ἐκεῖνος	ADJ	Pd	Case=Nom|Gender=Fem|Number=Plur	2	nmod	_	_
5	ἐμπεφυκυῖαι	ἐμφύω	VERB	V-	Aspect=Perf|Case=Nom|Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
6	ἦσαν	εἰμί#1	VERB	V-	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	aux	_	_
7	τοῖσι	ὁ	DET	S-	Case=Dat|Definite=Def|Gender=Masc|Number=Plur|PronType=Dem	8	det	_	_
8	ἐπισπαστῆρσι	ἐπισπαστήρ	NOUN	Nb	Case=Dat|Gender=Masc|Number=Plur	5	iobj	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 aux	color:blue
1	θέλω	ἐθέλω	VERB	V-	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	μέντοι	μέντοι	ADV	Df	_	1	discourse	_	_
3	καὶ	καί#1	ADV	Df	_	1	advmod	_	_
4	τὸ	ὁ	DET	S-	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Dem	5	det	_	_
5	ἀπὸ	ἀπό	ADP	R-	_	6	case	_	_
6	σεῦ	σύ	PRON	Pp	Case=Gen|Gender=Masc|Number=Sing|Person=2|PronType=Prs	12	dobj	_	_
7	ὁκοῖόν	ὁποῖος	PRON	Pi	Case=Acc|Gender=Neut|Number=Sing|PronType=Int	9	dobj	_	_
8	τι	τίς	PRON	Pi	Case=Acc|Gender=Neut|Number=Sing|PronType=Int	7	aux	_	_
9	λέγεις	λέγω	VERB	V-	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	5	acl	_	_
10	περὶ	περί	ADP	R-	_	11	case	_	_
11	αὐτῶν	αὐτός	PRON	Pp	Case=Gen|Gender=Masc|Number=Plur|Person=3|PronType=Prs	9	iobj	_	_
12	πυθέσθαι	πυνθάνομαι	VERB	V-	Aspect=Perf|Tense=Past|VerbForm=Inf|Voice=Mid	1	xcomp	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 aux	color:blue
1	σήμερον	σήμερον	ADV	Df	_	2	advmod	_	_
2	πεπλήρωται	πληρόω	VERB	V-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
3	ἡ	ὁ	DET	S-	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Dem	4	det	_	_
4	γραφὴ	γραφή	NOUN	Nb	Case=Nom|Gender=Fem|Number=Sing	2	nsubjpass	_	_
5	αὕτη	οὗτος	ADJ	Pd	Case=Nom|Gender=Fem|Number=Sing	4	nmod	_	_
6	ἐν	ἐν	ADP	R-	_	8	case	_	_
7	τοῖς	ὁ	DET	S-	Case=Dat|Definite=Def|Gender=Masc|Number=Plur|PronType=Dem	8	det	_	_
8	ὠσὶν	εἰμί#1	VERB	V-	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	nmod	_	_
9	ὑμῶν	ὑμεῖς	PRON	Pp	Case=Gen|Gender=Fem,Masc|Number=Plur|Person=2|PronType=Prs	8	aux	_	_

~~~


