

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latvian)

This relation is universal.

271 nodes (1%) are attached to their parents as `advcl`.

183 instances of `advcl` (68%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.09225092250922.

The following 17 pairs of parts of speech are connected with `advcl`: [lv-pos/VERB]()-[lv-pos/VERB]() (205; 76% instances), [lv-pos/NOUN]()-[lv-pos/VERB]() (14; 5% instances), [lv-pos/VERB]()-[lv-pos/NOUN]() (11; 4% instances), [lv-pos/ADJ]()-[lv-pos/VERB]() (10; 4% instances), [lv-pos/ADV]()-[lv-pos/VERB]() (10; 4% instances), [lv-pos/PRON]()-[lv-pos/VERB]() (5; 2% instances), [lv-pos/VERB]()-[lv-pos/ADJ]() (4; 1% instances), [lv-pos/VERB]()-[lv-pos/ADV]() (3; 1% instances), [lv-pos/ADJ]()-[lv-pos/PROPN]() (1; 0% instances), [lv-pos/ADV]()-[lv-pos/ADJ]() (1; 0% instances), [lv-pos/NOUN]()-[lv-pos/NOUN]() (1; 0% instances), [lv-pos/NUM]()-[lv-pos/ADV]() (1; 0% instances), [lv-pos/PRON]()-[lv-pos/NOUN]() (1; 0% instances), [lv-pos/PROPN]()-[lv-pos/ADV]() (1; 0% instances), [lv-pos/PROPN]()-[lv-pos/NOUN]() (1; 0% instances), [lv-pos/PROPN]()-[lv-pos/VERB]() (1; 0% instances), [lv-pos/VERB]()-[lv-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 advcl	color:blue
1	Dienas	diena	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	_
2	Bizness	bizness	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	7	parataxis	_	SpaceAfter=No
3	:	:	PUNCT	zo	_	2	punct	_	_
4	Lai	lai	SCONJ	css	_	5	mark	_	_
5	attīstītos	attīstīties	VERB	vmyc0i300an	Mood=Cnd|Negative=Neg|Reflex=Yes|VerbForm=Fin|Voice=Act	7	advcl	_	SpaceAfter=No
6	,	,	PUNCT	zc	_	5	punct	_	_
7	jāsadarbojas	sadarboties	VERB	vmyd0i200an	Mood=Nec|Negative=Neg|Reflex=Yes|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
8	.	.	PUNCT	zs	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 advcl	color:blue
1	"	"	PUNCT	zq	_	4	punct	_	SpaceAfter=No
2	Mēs	mēs	PRON	pp10pnn	Case=Nom|Number=Plur|Person=1|PronType=Prs	4	nsubj	_	_
3	esam	būt	VERB	vcnipii1pan	Mood=Ind|Negative=Neg|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
4	pazīstami	pazīstami	ADJ	armpnnp	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	0	root	_	_
5	kopš	kopš	ADP	spsgn	_	7	case	_	_
6	1968.	1968.	ADJ	xo	NumType=Ord	7	amod	_	_
7	gada	gads	NOUN	ncmsg1	Case=Gen|Gender=Masc|Number=Sing	4	nmod	_	SpaceAfter=No
8	,	,	PUNCT	zc	_	11	punct	_	_
9	kad	kad	ADV	r0t	PronType=Int	11	advmod	_	_
10	kopā	kopā	ADV	r0m	_	11	advmod	_	_
11	mācījāmies	mācīties	VERB	vmyist31pan	Mood=Ind|Negative=Neg|Number=Plur|Person=1|Reflex=Yes|Tense=Past|VerbForm=Fin|Voice=Act	7	advcl	_	_
12	Latvijas	Latvija	PROPN	npfsg4	Case=Gen|Gender=Fem|Number=Sing	13	nmod	_	_
13	Universitātē	universitāte	NOUN	ncfsl5	Case=Loc|Gender=Fem|Number=Sing	11	nmod	_	_
14	filozofos	filozofs	NOUN	ncmpl1	Case=Loc|Gender=Masc|Number=Plur	11	nmod	_	SpaceAfter=No
15	.	.	PUNCT	zs	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 advcl	color:blue
1	Viņi	viņš	PRON	pp3mpnn	Case=Nom|Gender=Masc|Number=Plur|Person=3|PronType=Prs	2	nsubj	_	_
2	maksā	maksāt	VERB	vmnipt230an	Mood=Ind|Negative=Neg|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	attiecīgu	attiecīga	ADJ	arfsanp	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	4	amod	_	_
4	cenu	cena	NOUN	ncfsa4	Case=Acc|Gender=Fem|Number=Sing	2	dobj	_	SpaceAfter=No
5	,	,	PUNCT	zc	_	10	punct	_	_
6	jo	jo	SCONJ	css	_	10	mark	_	_
7	tā	tā	PRON	pd0fsnn	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	10	nsubj	_	_
8	ir	būt	VERB	vcnipii30an	Mood=Ind|Negative=Neg|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	aux	_	_
9	ikdienas	ikdiena	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	10	nmod	_	_
10	nepieciešamība	nepieciešamība	NOUN	ncfsn4	Case=Nom|Gender=Fem|Number=Sing	2	advcl	_	SpaceAfter=No
11	.	.	PUNCT	zs	_	2	punct	_	_

~~~


