

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Greek)

This relation is universal.

4278 nodes (7%) are attached to their parents as `amod`.

3952 instances of `amod` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.30317905563347.

The following 15 pairs of parts of speech are connected with `amod`: [el-pos/NOUN]()-[el-pos/ADJ]() (3859; 90% instances), [el-pos/NOUN]()-[el-pos/PUNCT]() (233; 5% instances), [el-pos/NOUN]()-[el-pos/ADV]() (96; 2% instances), [el-pos/ADJ]()-[el-pos/ADJ]() (44; 1% instances), [el-pos/PRON]()-[el-pos/ADJ]() (20; 0% instances), [el-pos/NUM]()-[el-pos/ADJ]() (6; 0% instances), [el-pos/ADJ]()-[el-pos/ADV]() (4; 0% instances), [el-pos/PUNCT]()-[el-pos/ADJ]() (4; 0% instances), [el-pos/NUM]()-[el-pos/PUNCT]() (3; 0% instances), [el-pos/ADV]()-[el-pos/ADJ]() (2; 0% instances), [el-pos/ADV]()-[el-pos/ADV]() (2; 0% instances), [el-pos/PRON]()-[el-pos/ADV]() (2; 0% instances), [el-pos/ADJ]()-[el-pos/PART]() (1; 0% instances), [el-pos/ADP]()-[el-pos/ADJ]() (1; 0% instances), [el-pos/NUM]()-[el-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 amod	color:blue
1	Ενδεικτικές	ενδεικτικός	ADJ	ADJ	Case=Nom|Gender=Fem|Number=Plur	3	amod	_	_
2	χιλιομετρικές	χιλιομετρικός	ADJ	ADJ	Case=Nom|Gender=Fem|Number=Plur	3	amod	_	_
3	αποστάσεις	απόσταση	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Plur	0	root	_	_
4	:	:	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 amod	color:blue
1	Η	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	2	det	_	_
2	Ρωσία	Ρωσία	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
3	επιτρέπει	επιτρέπω	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	_
4	χρήση	χρήση	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	3	dobj	_	_
5	αεροδρομίου	αεροδρόμιο	NOUN	NOUN	Case=Gen|Gender=Neut|Number=Sing	4	nmod	_	_
6	της	μου	PRON	PRON	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs	5	nmod	_	_
7	από	από	ADP	ADP	_	8	case	_	_
8	ΝΑΤΟ	ΝΑΤΟ	PUNCT	PUNCT	_	4	amod	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 amod	color:blue
1	Μία	ένας	DET	DET	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	3	det	_	_
2	τελευταία	τελευταίος	ADJ	ADJ	Case=Nom|Gender=Fem|Number=Sing	3	amod	_	_
3	λέξη	λέξη	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
4	σχετικά	σχετικά	ADV	ADV	_	3	amod	_	_
5	με	με	ADP	ADP	_	8	case	_	_
6	τη	ο	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	7	det	_	_
7	διακυβέρνηση	διακυβέρνηση	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	4	nmod	_	_
8	και	και	CONJ	CONJ	_	7	cc	_	_
9	τη	ο	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	10	det	_	_
10	συναπόφαση	συναπόφαση	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	7	conj	_	_
11	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


