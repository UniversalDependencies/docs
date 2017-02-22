

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latvian)

This relation is a language-specific subtype of [nsubj]().

271 nodes (1%) are attached to their parents as `nsubj:pass`.

177 instances of `nsubj:pass` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.86346863468635.

The following 10 pairs of parts of speech are connected with `nsubj:pass`: [lv-pos/VERB]()-[lv-pos/NOUN]() (184; 68% instances), [lv-pos/VERB]()-[lv-pos/PRON]() (69; 25% instances), [lv-pos/VERB]()-[lv-pos/PROPN]() (10; 4% instances), [lv-pos/ADJ]()-[lv-pos/NOUN]() (2; 1% instances), [lv-pos/NOUN]()-[lv-pos/PROPN]() (1; 0% instances), [lv-pos/PUNCT]()-[lv-pos/PROPN]() (1; 0% instances), [lv-pos/VERB]()-[lv-pos/ADJ]() (1; 0% instances), [lv-pos/VERB]()-[lv-pos/NUM]() (1; 0% instances), [lv-pos/VERB]()-[lv-pos/SYM]() (1; 0% instances), [lv-pos/VERB]()-[lv-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nsubj:pass	color:blue
1	Tomēr	tomēr	CCONJ	ccs	_	5	cc	_	_
2	pavisam	pavisam	ADV	r0q	_	5	advmod	_	_
3	šis	šis	DET	pd0msnn	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	4	det	_	_
4	projekts	projekts	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	5	nsubj:pass	_	_
5	aizmirsts	aizmirst	VERB	vmnpdmsnpsn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	nav	nebūt	VERB	vcnipii30ay	Evident=Fh,Nfh|Mood=Ind|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	_	SpaceAfter=No
7	.	.	PUNCT	zs	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Viņa	viņa	PRON	pp3fsnn	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	nsubj:pass	_	_
2	nav	nebūt	VERB	vcnipii30ay	Evident=Fh,Nfh|Mood=Ind|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	_	_
3	precēta	precēt	VERB	vmnpdfsnpsn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
4	.	.	PUNCT	zs	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nsubj:pass	color:blue
1	Par	par	ADP	spsan	_	4	case	_	_
2	Īres	īre	NOUN	ncfsg5	Case=Gen|Gender=Fem|Number=Sing	3	iobj	_	_
3	valdes	valde	NOUN	ncfsg5	Case=Gen|Gender=Fem|Number=Sing	4	nmod	_	_
4	priekšsēdētāju	priekšsēdētājs	NOUN	ncmsa1	Case=Acc|Gender=Masc|Number=Sing	6	acl	_	_
5	tika	tikt	VERB	vtnisi130an	Evident=Fh,Nfh|Mood=Ind|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	6	aux	_	_
6	iecelts	iecelt	VERB	vmnpdmsnpsn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
7	Andris	Andris	PROPN	npmsn2	Case=Nom|Gender=Masc|Number=Sing	6	nsubj:pass	_	_
8	Vilks	Vilks	PROPN	npmsn1	Case=Nom|Gender=Masc|Number=Sing	7	flat:name	_	SpaceAfter=No
9	.	.	PUNCT	zs	_	6	punct	_	_

~~~


