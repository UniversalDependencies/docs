

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latvian)

This relation is universal.

228 nodes (1%) are attached to their parents as `nsubjpass`.

141 instances of `nsubjpass` (62%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.17543859649123.

The following 10 pairs of parts of speech are connected with `nsubjpass`: [lv-pos/VERB]()-[lv-pos/NOUN]() (161; 71% instances), [lv-pos/VERB]()-[lv-pos/SCONJ]() (25; 11% instances), [lv-pos/VERB]()-[lv-pos/PRON]() (18; 8% instances), [lv-pos/VERB]()-[lv-pos/VERB]() (8; 4% instances), [lv-pos/VERB]()-[lv-pos/PROPN]() (7; 3% instances), [lv-pos/VERB]()-[lv-pos/X]() (3; 1% instances), [lv-pos/NOUN]()-[lv-pos/PROPN]() (2; 1% instances), [lv-pos/VERB]()-[lv-pos/SYM]() (2; 1% instances), [lv-pos/VERB]()-[lv-pos/ADJ]() (1; 0% instances), [lv-pos/VERB]()-[lv-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nsubjpass	color:blue
1	Tomēr	tomēr	CONJ	ccs	_	5	cc	_	_
2	pavisam	pavisam	ADV	r0q	_	5	advmod	_	_
3	šis	šis	DET	pd0msnn	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	4	det	_	_
4	projekts	projekts	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	5	nsubjpass	_	_
5	aizmirsts	aizmirst	VERB	vmnpdmsnpsn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	nav	nebūt	VERB	vcnipii30ay	Mood=Ind|Negative=Pos|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	_	SpaceAfter=No
7	.	.	PUNCT	zs	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nsubjpass	color:blue
1	Pamata	pamats	NOUN	ncmsg1	Case=Gen|Gender=Masc|Number=Sing	2	nmod	_	_
2	ēkā	ēka	NOUN	ncfsl4	Case=Loc|Gender=Fem|Number=Sing	12	nmod	_	_
3	viss	viss	PRON	pg0msnn	Case=Nom|Gender=Masc|Number=Sing|PronType=Tot	10	acl	_	SpaceAfter=No
4	,	,	PUNCT	zc	_	7	punct	_	_
5	kas	kas	SCONJ	pr000nn	Case=Nom|PronType=Rel	7	nsubjpass	_	_
6	bija	būt	VERB	vcnisii30an	Mood=Ind|Negative=Neg|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	7	aux	_	_
7	paredzēts	paredzēt	VERB	vmnpdmsnpsn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	3	acl	_	_
8	programmā	programma	NOUN	ncfsl4	Case=Loc|Gender=Fem|Number=Sing	7	nmod	_	SpaceAfter=No
9	,	,	PUNCT	zc	_	3	punct	_	_
10	tas	tas	PRON	pd0msnn	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	12	nsubj	_	_
11	arī	arī	PART	qs	_	12	discourse	_	_
12	ir	būt	VERB	vmnipii30an	Mood=Ind|Negative=Neg|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
13	.	.	PUNCT	zs	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 13 nsubjpass	color:blue
1	Lai	lai	SCONJ	css	_	2	mark	_	_
2	tvertu	tvert	VERB	vmnc0t100an	Mood=Cnd|Negative=Neg|VerbForm=Fin|Voice=Act	9	advcl	_	_
3	Grūtupu	Grūtupa	PROPN	npfsa4	Case=Acc|Gender=Fem|Number=Sing	2	dobj	_	_
4	pilnībā	pilnība	NOUN	ncfsl4	Case=Loc|Gender=Fem|Number=Sing	2	nmod	_	SpaceAfter=No
5	,	,	PUNCT	zc	_	2	punct	_	_
6	viņš	viņš	PRON	pp3msnn	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	nsubj	_	_
7	ir	būt	VERB	vcnipii30an	Mood=Ind|Negative=Neg|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	aux	_	_
8	labi	labi	ADV	rpm	Degree=Pos	9	advmod	_	_
9	jāpazīst	pazīt	VERB	vmnd0t100an	Mood=Nec|Negative=Neg|VerbForm=Fin|Voice=Act	0	root	_	_
10	un	un	CONJ	ccs	_	9	cc	_	_
11	ne	ne	PART	qs	_	12	neg	_	_
12	katram	katrs	PRON	pg0msdn	Case=Dat|Gender=Masc|Number=Sing|PronType=Tot	15	nmod	_	_
13	tas	tas	PRON	pd0msnn	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	15	nsubjpass	_	_
14	ir	būt	VERB	vcnipii30an	Mood=Ind|Negative=Neg|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	15	aux	_	_
15	lemts	lemt	VERB	vmnpdmsnpsn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	9	conj	_	SpaceAfter=No
16	.	.	PUNCT	zs	_	9	punct	_	_

~~~


