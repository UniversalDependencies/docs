

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latvian)

This relation is universal.

734 nodes (4%) are attached to their parents as `cc`.

674 instances of `cc` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.12397820163488.

The following 25 pairs of parts of speech are connected with `cc`: [lv-pos/NOUN]()-[lv-pos/CONJ]() (294; 40% instances), [lv-pos/VERB]()-[lv-pos/CONJ]() (237; 32% instances), [lv-pos/PROPN]()-[lv-pos/CONJ]() (58; 8% instances), [lv-pos/ADJ]()-[lv-pos/CONJ]() (43; 6% instances), [lv-pos/VERB]()-[lv-pos/PART]() (18; 2% instances), [lv-pos/NOUN]()-[lv-pos/PART]() (15; 2% instances), [lv-pos/NOUN]()-[lv-pos/SCONJ]() (10; 1% instances), [lv-pos/ADV]()-[lv-pos/CONJ]() (8; 1% instances), [lv-pos/PRON]()-[lv-pos/CONJ]() (8; 1% instances), [lv-pos/NUM]()-[lv-pos/CONJ]() (5; 1% instances), [lv-pos/PROPN]()-[lv-pos/PART]() (5; 1% instances), [lv-pos/SYM]()-[lv-pos/CONJ]() (4; 1% instances), [lv-pos/VERB]()-[lv-pos/SCONJ]() (4; 1% instances), [lv-pos/X]()-[lv-pos/CONJ]() (4; 1% instances), [lv-pos/ADJ]()-[lv-pos/SCONJ]() (3; 0% instances), [lv-pos/PROPN]()-[lv-pos/ADV]() (3; 0% instances), [lv-pos/VERB]()-[lv-pos/ADV]() (3; 0% instances), [lv-pos/NOUN]()-[lv-pos/ADV]() (2; 0% instances), [lv-pos/NOUN]()-[lv-pos/PUNCT]() (2; 0% instances), [lv-pos/NUM]()-[lv-pos/SCONJ]() (2; 0% instances), [lv-pos/PROPN]()-[lv-pos/SCONJ]() (2; 0% instances), [lv-pos/ADV]()-[lv-pos/ADV]() (1; 0% instances), [lv-pos/PART]()-[lv-pos/CONJ]() (1; 0% instances), [lv-pos/PRON]()-[lv-pos/SCONJ]() (1; 0% instances), [lv-pos/SCONJ]()-[lv-pos/CONJ]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 cc	color:blue
1	Reklāmas	reklāma	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	5	nmod	_	_
2	un	un	CONJ	ccs	_	1	cc	_	_
3	sabiedrisko	sabiedriska	ADJ	affpgyp	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur	4	amod	_	_
4	attiecību	attiecības	NOUN	ncfdg4	Case=Gen|Gender=Fem|Number=Ptan	1	conj	_	_
5	daļas	daļa	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	6	nmod	_	_
6	vadītāja	vadītāja	NOUN	ncfsn4	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 cc	color:blue
1	Tomēr	tomēr	CONJ	ccs	_	5	cc	_	_
2	pavisam	pavisam	ADV	r0q	_	5	advmod	_	_
3	šis	šis	DET	pd0msnn	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	4	det	_	_
4	projekts	projekts	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	5	nsubjpass	_	_
5	aizmirsts	aizmirst	VERB	vmnpdmsnpsn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	nav	nebūt	VERB	vcnipii30ay	Mood=Ind|Negative=Pos|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	_	SpaceAfter=No
7	.	.	PUNCT	zs	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 cc	color:blue
1	22.00	22.00	NUM	xn	NumType=Card	2	nmod	_	_
2	-	-	PUNCT	zd	_	0	root	_	_
3	balle	balle	NOUN	ncfsn5	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	zc	_	2	punct	_	_
5	spēlēs	spēlēt	VERB	vmnift230an	Mood=Ind|Negative=Neg|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	2	conj	_	_
6	„	„	PUNCT	zq	_	7	punct	_	SpaceAfter=No
7	Sandra	Sandra	PROPN	npfsn4	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	SpaceAfter=No
8	"	"	PUNCT	zq	_	7	punct	_	_
9	un	un	CONJ	ccs	_	7	cc	_	_
10	DJ	DJ	PROPN	y	_	11	nmod	_	_
11	Andža	Andža	PROPN	npmsn4	Case=Nom|Gender=Masc|Number=Sing	7	conj	_	SpaceAfter=No
12	.	.	PUNCT	zs	_	2	punct	_	_

~~~


