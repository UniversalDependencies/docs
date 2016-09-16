

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is a language-specific subtype of [acl]().
There are also 1 other language-specific subtypes of `acl`: [acl:inf]().

2983 nodes (2%) are attached to their parents as `acl:relcl`.

2983 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.70398927254442.

The following 34 pairs of parts of speech are connected with `acl:relcl`: [he-pos/NOUN]()-[he-pos/VERB]() (2062; 69% instances), [he-pos/NOUN]()-[he-pos/NOUN]() (150; 5% instances), [he-pos/PROPN]()-[he-pos/VERB]() (150; 5% instances), [he-pos/ADV]()-[he-pos/VERB]() (131; 4% instances), [he-pos/NOUN]()-[he-pos/ADJ]() (121; 4% instances), [he-pos/NOUN]()-[he-pos/AUX]() (119; 4% instances), [he-pos/PRON]()-[he-pos/VERB]() (88; 3% instances), [he-pos/NOUN]()-[he-pos/PRON]() (30; 1% instances), [he-pos/NOUN]()-[he-pos/PROPN]() (16; 1% instances), [he-pos/ADJ]()-[he-pos/VERB]() (14; 0% instances), [he-pos/ADV]()-[he-pos/ADJ]() (12; 0% instances), [he-pos/PROPN]()-[he-pos/NOUN]() (12; 0% instances), [he-pos/VERB]()-[he-pos/VERB]() (12; 0% instances), [he-pos/PRON]()-[he-pos/ADJ]() (8; 0% instances), [he-pos/PRON]()-[he-pos/AUX]() (8; 0% instances), [he-pos/PRON]()-[he-pos/NOUN]() (7; 0% instances), [he-pos/ADV]()-[he-pos/NOUN]() (5; 0% instances), [he-pos/NUM]()-[he-pos/VERB]() (5; 0% instances), [he-pos/PROPN]()-[he-pos/PROPN]() (5; 0% instances), [he-pos/ADV]()-[he-pos/AUX]() (4; 0% instances), [he-pos/PROPN]()-[he-pos/ADJ]() (4; 0% instances), [he-pos/PROPN]()-[he-pos/PRON]() (3; 0% instances), [he-pos/X]()-[he-pos/VERB]() (3; 0% instances), [he-pos/ADJ]()-[he-pos/AUX]() (2; 0% instances), [he-pos/NOUN]()-[he-pos/ADV]() (2; 0% instances), [he-pos/PROPN]()-[he-pos/AUX]() (2; 0% instances), [he-pos/ADJ]()-[he-pos/PRON]() (1; 0% instances), [he-pos/ADV]()-[he-pos/ADV]() (1; 0% instances), [he-pos/ADV]()-[he-pos/PRON]() (1; 0% instances), [he-pos/ADV]()-[he-pos/PROPN]() (1; 0% instances), [he-pos/DET]()-[he-pos/AUX]() (1; 0% instances), [he-pos/DET]()-[he-pos/VERB]() (1; 0% instances), [he-pos/NUM]()-[he-pos/AUX]() (1; 0% instances), [he-pos/VERB]()-[he-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 acl:relcl	color:blue
1	שם	_	ADV	ADV	_	3	advmod	_	_
2	היה	_	VERB	VERB	Gender=Masc|Negative=Pos|Number=Sing|Person=3|Tense=Past|VerbType=Cop	3	aux	_	_
3	אמור	_	AUX	AUX	Gender=Masc|Number=Sing|Person=1,2,3|VerbType=Mod	0	root	_	_
4	להיפגש	_	VERB	VERB	HebBinyan=NIFAL|VerbForm=Inf	3	xcomp	_	_
5	עם	_	ADP	ADP	_	6	case	_	_
6	אשתו	_	NOUN	NOUN	Gender=Fem|Number=Sing	4	nmod	_	_
7	הוא_	_	PRON	PRON	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nmod:poss	_	_
8	,	_	PUNCT	PUNCT	_	6	punct	_	_
9	ש	_	SCONJ	SCONJ	_	10	mark	_	_
10	עשתה	_	VERB	VERB	Gender=Fem|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Past	6	acl:relcl	_	_
11	ב	_	ADP	ADP	_	12	case	_	_
12	בוסטון	_	PROPN	PROPN	_	10	nmod	_	_
13	.	_	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 12 acl:relcl	color:blue
1	פתאום	_	ADV	ADV	_	2	advmod	_	_
2	חשבתי	_	VERB	VERB	Gender=Fem,Masc|Number=Sing|Person=1|Tense=Past	0	root	_	_
3	על	_	ADP	ADP	_	4	case	_	_
4	משפחתה	_	NOUN	NOUN	Gender=Fem|Number=Sing	2	iobj	_	_
5	היא_	_	PRON	PRON	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs	4	nmod:poss	_	_
6	של	_	PART	PART	Case=Gen	7	case:gen	_	_
7	סבתי	_	NOUN	NOUN	Gender=Fem|Number=Sing	4	nmod:poss	_	_
8	אני_	_	PRON	PRON	Case=Gen|Gender=Fem,Masc|Number=Sing|Person=1|PronType=Prs	7	nmod:poss	_	_
9	ש	_	SCONJ	SCONJ	_	12	mark	_	_
10	כולם	_	NOUN	NOUN	Gender=Masc|Number=Plur	12	nsubj	_	_
11	היו	_	VERB	VERB	Gender=Fem,Masc|Negative=Pos|Number=Plur|Person=3|Tense=Past|VerbType=Cop	12	aux	_	_
12	חסידים	_	NOUN	NOUN	Gender=Masc|Number=Plur	4	acl:relcl	_	_
13	.	_	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 11 acl:relcl	color:blue
1	גיילס	_	PROPN	PROPN	_	14	nsubj	_	_
2	ו	_	CONJ	CONJ	_	1	cc	_	_
3	שפע	_	PROPN	PROPN	_	1	conj	_	_
4	,	_	PUNCT	PUNCT	_	1	punct	_	_
5	ש	_	SCONJ	SCONJ	_	11	mark	_	_
6	ב	_	ADP	ADP	_	8	case	_	_
7	ה_	_	DET	DET	PronType=Art	8	det:def	_	_
8	מחצית	_	NOUN	NOUN	Gender=Fem|Number=Sing	11	nmod	_	_
9	ה	_	DET	DET	PronType=Art	10	det:def	_	_
10	ראשונה	_	ADJ	ADJ	Gender=Fem|Number=Sing	8	amod	_	_
11	הצטיינו	_	VERB	VERB	Gender=Fem,Masc|HebBinyan=HITPAEL|Number=Plur|Person=3|Tense=Past	1	acl:relcl	_	_
12	,	_	PUNCT	PUNCT	_	14	punct	_	_
13	כמו	_	ADV	ADV	_	14	advmod	_	_
14	נעלמו	_	VERB	VERB	Gender=Fem,Masc|HebBinyan=NIFAL|Number=Plur|Person=3|Tense=Past	0	root	_	_
15	.	_	PUNCT	PUNCT	_	14	punct	_	_

~~~


