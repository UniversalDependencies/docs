

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is universal.

31171 nodes (11%) are attached to their parents as `punct`.

28056 instances of `punct` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.2525424272561.

The following 21 pairs of parts of speech are connected with `punct`: [it-pos/VERB]()-[it-pos/PUNCT]() (14273; 46% instances), [it-pos/NOUN]()-[it-pos/PUNCT]() (9023; 29% instances), [it-pos/PROPN]()-[it-pos/PUNCT]() (2615; 8% instances), [it-pos/ADJ]()-[it-pos/PUNCT]() (1601; 5% instances), [it-pos/NUM]()-[it-pos/PUNCT]() (1589; 5% instances), [it-pos/PRON]()-[it-pos/PUNCT]() (1103; 4% instances), [it-pos/ADV]()-[it-pos/PUNCT]() (566; 2% instances), [it-pos/CONJ]()-[it-pos/PUNCT]() (76; 0% instances), [it-pos/X]()-[it-pos/PUNCT]() (61; 0% instances), [it-pos/PUNCT]()-[it-pos/PUNCT]() (59; 0% instances), [it-pos/NUM]()-[it-pos/SYM]() (58; 0% instances), [it-pos/INTJ]()-[it-pos/PUNCT]() (51; 0% instances), [it-pos/AUX]()-[it-pos/PUNCT]() (46; 0% instances), [it-pos/SCONJ]()-[it-pos/PUNCT]() (15; 0% instances), [it-pos/PROPN]()-[it-pos/SYM]() (12; 0% instances), [it-pos/NOUN]()-[it-pos/SYM]() (10; 0% instances), [it-pos/DET]()-[it-pos/PUNCT]() (5; 0% instances), [it-pos/ADP]()-[it-pos/PUNCT]() (3; 0% instances), [it-pos/SYM]()-[it-pos/PUNCT]() (2; 0% instances), [it-pos/X]()-[it-pos/SYM]() (2; 0% instances), [it-pos/NOUN]()-[it-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 14 punct	color:blue
1	Tutti	tutto	DET	T	Gender=Masc|Number=Plur	3	det:predet	_	_
2	gli	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	3	det	_	_
3	esseri	essere	NOUN	S	Gender=Masc|Number=Plur	5	nsubj	_	_
4	umani	umano	ADJ	A	Gender=Masc|Number=Plur	3	amod	_	_
5	sanno	sapere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	di	di	ADP	E	_	9	mark	_	_
7	poter	potere	AUX	VM	VerbForm=Inf	9	aux	_	_
8	essere	essere	VERB	V	VerbForm=Inf	9	cop	_	_
9	più	più	ADV	B	_	5	xcomp	_	_
10	di	di	ADP	E	_	11	case	_	_
11	ciò	ciò	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	9	nmod	_	_
12	che	che	PRON	PR	PronType=Rel	13	nsubj	_	_
13	sono	essere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	11	acl:relcl	_	_
14	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 punct	color:blue
1	Sorpresa	sorpresa	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
2	in	in	ADP	E	_	4	case	_	_
3	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	sorpresa	sorpresa	NOUN	S	Gender=Fem|Number=Sing	1	nmod	_	_
5	:	:	PUNCT	FC	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 punct	color:blue
1	Tudjman	Tudjman	PROPN	SP	_	0	root	_	_
2	,	,	PUNCT	FF	_	1	punct	_	_
3	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	4	det	_	_
4	arte	arte	NOUN	S	Gender=Fem|Number=Sing	1	nmod	_	_
5	di	di	ADP	E	_	7	case	_	_
6	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	vendetta	vendetta	NOUN	S	Gender=Fem|Number=Sing	4	nmod	_	_
8	.	.	PUNCT	FS	_	1	punct	_	_

~~~


