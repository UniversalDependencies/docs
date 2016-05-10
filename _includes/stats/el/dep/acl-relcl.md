

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Greek)

This relation is a language-specific subtype of [acl]().

839 nodes (1%) are attached to their parents as `acl:relcl`.

839 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.64123957091776.

The following 13 pairs of parts of speech are connected with `acl:relcl`: [el-pos/NOUN]()-[el-pos/VERB]() (709; 85% instances), [el-pos/NOUN]()-[el-pos/NOUN]() (41; 5% instances), [el-pos/NOUN]()-[el-pos/ADJ]() (36; 4% instances), [el-pos/PRON]()-[el-pos/VERB]() (29; 3% instances), [el-pos/ADJ]()-[el-pos/VERB]() (7; 1% instances), [el-pos/NUM]()-[el-pos/VERB]() (5; 1% instances), [el-pos/PRON]()-[el-pos/NOUN]() (4; 0% instances), [el-pos/ADJ]()-[el-pos/NOUN]() (2; 0% instances), [el-pos/NOUN]()-[el-pos/NUM]() (2; 0% instances), [el-pos/NOUN]()-[el-pos/ADV]() (1; 0% instances), [el-pos/NUM]()-[el-pos/ADJ]() (1; 0% instances), [el-pos/PRON]()-[el-pos/ADJ]() (1; 0% instances), [el-pos/VERB]()-[el-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 acl:relcl	color:blue
1	Είναι	είμαι	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	3	cop	_	_
2	ένα	ένας	PRON	PRON	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	3	det	_	_
3	πλέγμα	πλέγμα	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
4	έργων	έργο	NOUN	NOUN	Case=Gen|Gender=Neut|Number=Plur	3	nmod	_	_
5	το	ο	PRON	PRON	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	6	det	_	_
6	οποίο	οποίος	PRON	PRON	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Rel	9	nsubj	_	_
7	μεταξύ	μεταξύ	ADP	ADP	_	8	case	_	_
8	άλλων	άλλος	PRON	PRON	Case=Gen|Gender=Neut|Number=Plur|Person=3|PronType=Ind	9	nmod	_	_
9	περιλαμβάνει	περιλαμβάνω	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	3	acl:relcl	_	_
10	:	:	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 acl:relcl	color:blue
1	Σε	σε	ADP	ADP	_	5	case	_	_
2	όλο	όλο	ADJ	ADJ	Case=Acc|Gender=Neut|Number=Sing	5	amod	_	_
3	αυτό	αυτός	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Dem	5	det	_	_
4	το	ο	PRON	PRON	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	5	det	_	_
5	διάστημα	διάστημα	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	12	nmod	_	_
6	που	που	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Rel	9	nmod	_	_
7	είμαι	είμαι	VERB	VERB	Mood=Ind|Number=Sing|Person=1|Tense=Pres|Voice=Pass	9	cop	_	_
8	εκλεγμένος	εκλέγω	VERB	VERB	Case=Nom|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	9	acl	_	_
9	βουλευτής	βουλευτής	NOUN	NOUN	Case=Nom|Gender=Masc|Number=Sing	5	acl:relcl	_	_
10	δεν	δεν	PART	PART	_	12	neg	_	_
11	έχω	έχω	VERB	VERB	Mood=Ind|Number=Sing|Person=1|Tense=Pres|Voice=Act	12	aux	_	_
12	λάβει	λαμβάνω	VERB	VERB	VerbForm=Inf|Voice=Act	0	root	_	_
13	ποτέ	ποτέ	ADV	ADV	_	12	advmod	_	_
14	επαρκή	επαρκής	ADJ	ADJ	Case=Acc|Gender=Fem|Number=Sing	15	amod	_	_
15	πληροφόρηση	πληροφόρηση	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	12	dobj	_	_
16	από	από	ADP	ADP	_	18	case	_	_
17	την	ο	PRON	PRON	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	18	det	_	_
18	επιτροπή	επιτροπή	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	12	nmod	_	_
19	.	.	PUNCT	PUNCT	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 13 acl:relcl	color:blue
1	Η	ο	PRON	PRON	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	εξέταση	εξέταση	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	9	nsubj	_	_
3	των	ο	PRON	PRON	Case=Gen|Definite=Def|Gender=Fem|Number=Plur|PronType=Art	4	det	_	_
4	επιπτώσεων	επίπτωση	NOUN	NOUN	Case=Gen|Gender=Fem|Number=Plur	2	nmod	_	_
5	στην	στου	ADP	ADP	Case=Acc|Gender=Fem|Number=Sing	6	case	_	_
6	υγεία	υγεία	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	4	nmod	_	_
7	είναι	είμαι	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	9	cop	_	_
8	ένα	ένας	PRON	PRON	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	9	det	_	_
9	στοιχείο	στοιχείο	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
10	που	που	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Rel	13	dobj	_	_
11	θεωρώ	θεωρώ	VERB	VERB	Mood=Ind|Number=Sing|Person=1|Tense=Pres|Voice=Act	13	cop	_	_
12	πολύ	πολύ	ADV	ADV	_	13	advmod	_	_
13	σημαντικό	σημαντικός	ADJ	ADJ	Case=Nom|Gender=Neut|Number=Sing	9	acl:relcl	_	_
14	.	.	PUNCT	PUNCT	_	9	punct	_	_

~~~


