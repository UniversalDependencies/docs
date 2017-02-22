

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Greek)

This relation is a language-specific subtype of [acl]().

737 nodes (1%) are attached to their parents as `acl:relcl`.

737 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.44911804613297.

The following 15 pairs of parts of speech are connected with `acl:relcl`: [el-pos/NOUN]()-[el-pos/VERB]() (614; 83% instances), [el-pos/PRON]()-[el-pos/VERB]() (32; 4% instances), [el-pos/NOUN]()-[el-pos/ADJ]() (22; 3% instances), [el-pos/PROPN]()-[el-pos/VERB]() (21; 3% instances), [el-pos/NOUN]()-[el-pos/NOUN]() (17; 2% instances), [el-pos/X]()-[el-pos/VERB]() (11; 1% instances), [el-pos/ADJ]()-[el-pos/VERB]() (6; 1% instances), [el-pos/NUM]()-[el-pos/VERB]() (4; 1% instances), [el-pos/VERB]()-[el-pos/VERB]() (4; 1% instances), [el-pos/NOUN]()-[el-pos/NUM]() (1; 0% instances), [el-pos/NUM]()-[el-pos/ADJ]() (1; 0% instances), [el-pos/PRON]()-[el-pos/ADJ]() (1; 0% instances), [el-pos/PRON]()-[el-pos/NOUN]() (1; 0% instances), [el-pos/PROPN]()-[el-pos/NOUN]() (1; 0% instances), [el-pos/X]()-[el-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 acl:relcl	color:blue
1	Αυτή	αυτός	PRON	PRON	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Dem	4	nsubj	_	_
2	είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	4	cop	_	_
3	η	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	κατάσταση	κατάσταση	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
5	στην	στου	ADP	ADP	Case=Acc|Gender=Fem|Number=Sing	6	case	_	_
6	οποία	οποίος	PRON	PRON	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Rel	7	obl	_	_
7	ζούμε	ζω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	4	acl:relcl	_	SpaceAfter=No
8	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 acl:relcl	color:blue
1	Αυτό	αυτός	PRON	PRON	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Dem	4	nsubj	_	_
2	είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	4	cop	_	_
3	σαφώς	σαφώς	ADV	ADV	_	4	advmod	_	_
4	κάτι	κάτι	PRON	PRON	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Ind	0	root	_	_
5	που	που	PRON	PRON	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Rel	8	nsubj	_	_
6	δεν	δεν	PART	PART	_	8	advmod	_	_
7	θα	θα	PART	PART	_	8	aux	_	_
8	μπορούσε	μπορώ	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	acl:relcl	_	_
9	να	να	PART	PART	_	10	aux	_	_
10	γίνει	γίνομαι	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Pass	8	ccomp	_	_
11	δεκτό	δεκτός	ADJ	ADJ	Case=Nom|Gender=Neut|Number=Sing	10	xcomp	_	SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 15 acl:relcl	color:blue
1	Παρόμοιο	παρόμοιος	ADJ	ADJ	Case=Acc|Gender=Neut|Number=Sing	2	amod	_	_
2	καθεστώς	καθεστώς	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	3	obj	_	_
3	επιδιώκουν	επιδιώκουν	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	και	και	CCONJ	CCONJ	_	6	cc	_	_
5	οι	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Plur|PronType=Art	6	det	_	_
6	πόλεις	πόλη	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Plur	3	nsubj	_	_
7	στα	στου	ADP	ADP	Case=Acc|Gender=Neut|Number=Plur	8	case	_	_
8	ανατολικά	ανατολικός	ADJ	ADJ	Case=Acc|Gender=Neut|Number=Plur	6	amod	_	_
9	της	ο	DET	DET	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	Λιβύης	Λιβύη	PROPN	PROPN	Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	SpaceAfter=No
11	,	,	PUNCT	PUNCT	_	15	punct	_	_
12	οι	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Plur|PronType=Art	13	det	_	_
13	οποίες	οποίος	PRON	PRON	Case=Nom|Gender=Fem|Number=Plur|Person=3|PronType=Rel	15	nsubj	_	_
14	είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	15	cop	_	_
15	πλούσιες	πλούσιος	ADJ	ADJ	Case=Nom|Gender=Fem|Number=Plur	6	acl:relcl	_	_
16	σε	σε	ADP	ADP	_	17	case	_	_
17	κοιτάσματα	κοίτασμα	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Plur	15	nmod	_	_
18	πετρελαίου	πετρέλαιο	NOUN	NOUN	Case=Gen|Gender=Neut|Number=Sing	17	nmod	_	SpaceAfter=No
19	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


