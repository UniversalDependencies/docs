

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Greek)

This relation is universal.
There are 1 language-specific subtypes of `acl`: [acl:relcl]().

379 nodes (1%) are attached to their parents as `acl`.

321 instances of `acl` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.35883905013193.

The following 19 pairs of parts of speech are connected with `acl`: [el-pos/NOUN]()-[el-pos/VERB]() (305; 80% instances), [el-pos/ADJ]()-[el-pos/VERB]() (23; 6% instances), [el-pos/PRON]()-[el-pos/VERB]() (10; 3% instances), [el-pos/NOUN]()-[el-pos/ADJ]() (8; 2% instances), [el-pos/VERB]()-[el-pos/VERB]() (5; 1% instances), [el-pos/ADV]()-[el-pos/VERB]() (4; 1% instances), [el-pos/PROPN]()-[el-pos/VERB]() (4; 1% instances), [el-pos/NOUN]()-[el-pos/NOUN]() (3; 1% instances), [el-pos/NUM]()-[el-pos/VERB]() (3; 1% instances), [el-pos/PRON]()-[el-pos/ADJ]() (2; 1% instances), [el-pos/PRON]()-[el-pos/PRON]() (2; 1% instances), [el-pos/PROPN]()-[el-pos/ADJ]() (2; 1% instances), [el-pos/X]()-[el-pos/VERB]() (2; 1% instances), [el-pos/ADV]()-[el-pos/ADJ]() (1; 0% instances), [el-pos/NOUN]()-[el-pos/ADV]() (1; 0% instances), [el-pos/NOUN]()-[el-pos/PRON]() (1; 0% instances), [el-pos/PRON]()-[el-pos/NOUN]() (1; 0% instances), [el-pos/VERB]()-[el-pos/ADJ]() (1; 0% instances), [el-pos/X]()-[el-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl	color:blue
1	Υπάρχει	υπάρχω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	επείγουσα	επείγων	ADJ	ADJ	Case=Nom|Gender=Fem|Number=Sing	3	amod	_	_
3	ανάγκη	ανάγκη	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	1	nsubj	_	_
4	να	να	PART	PART	_	5	aux	_	_
5	αναληφθεί	αναλαμβάνω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Pass	3	acl	_	_
6	δράση	δράση	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	_
7	στον	στου	ADP	ADP	Case=Acc|Gender=Masc|Number=Sing	8	case	_	_
8	τομέα	τομέας	NOUN	NOUN	Case=Acc|Gender=Masc|Number=Sing	5	obl	_	_
9	αυτό	αυτός	PRON	PRON	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Dem	8	det	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 16 acl	color:blue
1	Σε	σε	ADP	ADP	_	3	case	_	_
2	ό,τι	ό,τι	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Ind,Rel	3	nsubj	_	_
3	αφορά	αφορώ	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	advcl	_	_
4	τη	ο	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	διαγωγή	διαγωγή	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	3	obj	_	_
6	στην	στου	ADP	ADP	Case=Acc|Gender=Fem|Number=Sing	7	case	_	_
7	τάξη	τάξη	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	5	nmod	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	11	punct	_	_
9	δεν	δεν	PART	PART	_	11	advmod	_	_
10	είμαι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	11	cop	_	_
11	βέβαιος	βέβαιος	ADJ	ADJ	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
12	ότι	ότι	SCONJ	SCONJ	_	16	mark	_	_
13	η	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
14	Ένωση	ένωση	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	16	nsubj	_	_
15	θα	θα	PART	PART	_	16	aux	_	_
16	είχε	έχω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	11	acl	_	_
17	καλές	καλός	ADJ	ADJ	Case=Acc|Gender=Fem|Number=Plur	18	amod	_	_
18	επιδόσεις	επίδοση	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Plur	16	obj	_	SpaceAfter=No
19	.	.	PUNCT	PUNCT	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 acl	color:blue
1	Είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	2	cop	_	_
2	κάτι	κάτι	PRON	PRON	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Ind	0	root	_	_
3	στο	στου	ADP	ADP	Case=Acc|Gender=Neut|Number=Sing	4	case	_	_
4	οποίο	οποίος	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Rel	7	obl	_	_
5	πρέπει	πρέπει	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	acl	_	_
6	να	να	PART	PART	_	7	aux	_	_
7	δώσουμε	δίνω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|VerbForm=Fin|Voice=Act	5	csubj	_	_
8	μεγάλη	μεγάλος	ADJ	ADJ	Case=Acc|Gender=Fem|Number=Sing	9	amod	_	_
9	προσοχή	προσοχή	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	7	obj	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


