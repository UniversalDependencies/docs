

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Greek)

This relation is universal.
There are 1 language-specific subtypes of `acl`: [acl:relcl]().

410 nodes (1%) are attached to their parents as `acl`.

351 instances of `acl` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.3609756097561.

The following 14 pairs of parts of speech are connected with `acl`: [el-pos/NOUN]()-[el-pos/VERB]() (344; 84% instances), [el-pos/ADJ]()-[el-pos/VERB]() (26; 6% instances), [el-pos/PRON]()-[el-pos/VERB]() (12; 3% instances), [el-pos/NOUN]()-[el-pos/ADJ]() (8; 2% instances), [el-pos/NOUN]()-[el-pos/NOUN]() (6; 1% instances), [el-pos/ADV]()-[el-pos/VERB]() (4; 1% instances), [el-pos/NUM]()-[el-pos/VERB]() (3; 1% instances), [el-pos/ADJ]()-[el-pos/NOUN]() (1; 0% instances), [el-pos/ADV]()-[el-pos/ADJ]() (1; 0% instances), [el-pos/CONJ]()-[el-pos/VERB]() (1; 0% instances), [el-pos/NOUN]()-[el-pos/ADV]() (1; 0% instances), [el-pos/NOUN]()-[el-pos/NUM]() (1; 0% instances), [el-pos/NOUN]()-[el-pos/PRON]() (1; 0% instances), [el-pos/VERB]()-[el-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl	color:blue
1	Υπάρχει	υπάρχω	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	_
2	επείγουσα	επείγων	ADJ	ADJ	Case=Nom|Gender=Fem|Number=Sing	3	amod	_	_
3	ανάγκη	ανάγκη	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	1	nsubj	_	_
4	να	να	PART	PART	_	5	aux	_	_
5	αναληφθεί	αναλαμβάνω	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Voice=Pass	3	acl	_	_
6	δράση	δράση	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	_
7	στον	στου	ADP	ADP	Case=Acc|Gender=Masc|Number=Sing	8	case	_	_
8	τομέα	τομέας	NOUN	NOUN	Case=Acc|Gender=Masc|Number=Sing	5	nmod	_	_
9	αυτό	αυτός	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Dem	8	det	_	_
10	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 acl	color:blue
1	Η	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	Επιτροπή	επιτροπή	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
3	παραμένει	παραμένω	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	4	cop	_	_
4	ανοιχτή	ανοιχτός	ADJ	ADJ	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
5	σε	σε	ADP	ADP	_	8	case	_	_
6	οποιαδήποτε	οποιοσδήποτε	PRON	PRON	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Rel	7	nmod	_	_
7	σύσταση	σύσταση	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	8	nsubj	_	_
8	διατυπωθεί	διατυπώνω	VERB	VERB	VerbForm=Inf|Voice=Pass	4	acl	_	_
9	ενδεχομένως	ενδεχομένως	ADV	ADV	_	8	advmod	_	_
10	από	από	ADP	ADP	_	13	case	_	_
11	το	ο	DET	DET	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	13	det	_	_
12	κοινοβουλευτικό	κοινοβουλευτικός	ADJ	ADJ	Case=Acc|Gender=Neut|Number=Sing	13	amod	_	_
13	Σώμα	σώμα	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	8	nmod	_	_
14	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 acl	color:blue
1	Είναι	είμαι	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	2	cop	_	_
2	κάτι	κάτι	PRON	PRON	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Ind	0	root	_	_
3	στο	στου	ADP	ADP	Case=Acc|Gender=Neut|Number=Sing	4	case	_	_
4	οποίο	οποίος	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Rel	7	iobj	_	_
5	πρέπει	πρέπει	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	2	acl	_	_
6	να	να	PART	PART	_	7	aux	_	_
7	δώσουμε	δίνω	VERB	VERB	Mood=Ind|Number=Plur|Person=1|Voice=Act	5	csubj	_	_
8	μεγάλη	μεγάλος	ADJ	ADJ	Case=Acc|Gender=Fem|Number=Sing	9	amod	_	_
9	προσοχή	προσοχή	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	7	dobj	_	_
10	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


