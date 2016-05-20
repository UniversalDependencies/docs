

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian)

This relation is universal.

115 nodes (0%) are attached to their parents as `dislocated`.

114 instances of `dislocated` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.34782608695652.

The following 5 pairs of parts of speech are connected with `dislocated`: [no-pos/VERB]()-[no-pos/NOUN]() (64; 56% instances), [no-pos/VERB]()-[no-pos/ADJ]() (24; 21% instances), [no-pos/VERB]()-[no-pos/PRON]() (23; 20% instances), [no-pos/VERB]()-[no-pos/DET]() (3; 3% instances), [no-pos/VERB]()-[no-pos/NUM]() (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 dislocated	color:blue
1	Det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	10	nmod	_	_
2	er	være	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	expl	_	_
4	mange	mange	ADJ	_	Degree=Pos|Number=Plur	6	amod	_	_
5	små	liten	ADJ	_	Degree=Pos|Number=Plur	6	amod	_	_
6	bedrifter	bedrift	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	2	dislocated	_	_
7	som	som	PRON	_	PronType=Rel	9	nsubj	_	_
8	ikke	ikke	ADV	_	_	9	neg	_	_
9	har	ha	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	6	acl:relcl	_	_
10	råd	råd	NOUN	_	Gender=Fem	9	dobj	_	_
11	til	til	ADP	_	_	1	case	_	_
12	.	$.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 dislocated	color:blue
1	-	$-	PUNCT	_	_	3	punct	_	_
2	Det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	_	_
3	er	være	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
4	mye	mye	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	3	dislocated	_	_
5	man	man	PRON	_	Animacy=Anim|Case=Nom|Number=Sing|PronType=Prs	7	nsubj	_	_
6	kan	kunne	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	gjøre	gjøre	VERB	_	VerbForm=Inf	4	acl:relcl	_	_
8	uten	uten	ADP	_	_	10	mark	_	_
9	å	å	PART	_	_	10	mark	_	_
10	drive	drive	VERB	_	VerbForm=Inf	7	advcl	_	_
11	politisk	politisk	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	12	amod	_	_
12	overvåking	overvåking	NOUN	_	Definite=Ind|Gender=Fem|Number=Sing	10	dobj	_	_
13	.	$.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 dislocated	color:blue
1	Men	men	CONJ	_	_	3	cc	_	_
2	fremdeles	fremdeles	ADV	_	_	3	advmod	_	_
3	er	være	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
4	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	_	_
5	noen	noen	PRON	_	Gender=Fem,Masc|Number=Sing|Person=3|PronType=Ind,Prs	3	dislocated	_	_
6	som	som	PRON	_	PronType=Rel	7	nsubj	_	_
7	ønsker	ønske	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	5	acl:relcl	_	_
8	å	å	PART	_	_	9	mark	_	_
9	bo	bo	VERB	_	VerbForm=Inf	7	xcomp	_	_
10	i	i	ADP	_	_	11	case	_	_
11	Tafjord	Tafjord	PROPN	_	_	9	nmod	_	_
12	.	$.	PUNCT	_	_	3	punct	_	_

~~~


