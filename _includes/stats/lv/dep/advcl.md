

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latvian)

This relation is universal.

282 nodes (1%) are attached to their parents as `advcl`.

184 instances of `advcl` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.16666666666667.

The following 18 pairs of parts of speech are connected with `advcl`: [lv-pos/VERB]()-[lv-pos/VERB]() (212; 75% instances), [lv-pos/NOUN]()-[lv-pos/VERB]() (17; 6% instances), [lv-pos/ADV]()-[lv-pos/VERB]() (12; 4% instances), [lv-pos/ADJ]()-[lv-pos/VERB]() (10; 4% instances), [lv-pos/VERB]()-[lv-pos/NOUN]() (9; 3% instances), [lv-pos/PRON]()-[lv-pos/VERB]() (5; 2% instances), [lv-pos/VERB]()-[lv-pos/ADJ]() (4; 1% instances), [lv-pos/VERB]()-[lv-pos/ADV]() (3; 1% instances), [lv-pos/ADJ]()-[lv-pos/NOUN]() (1; 0% instances), [lv-pos/ADJ]()-[lv-pos/PROPN]() (1; 0% instances), [lv-pos/ADV]()-[lv-pos/ADJ]() (1; 0% instances), [lv-pos/NOUN]()-[lv-pos/ADV]() (1; 0% instances), [lv-pos/NOUN]()-[lv-pos/NOUN]() (1; 0% instances), [lv-pos/PRON]()-[lv-pos/NOUN]() (1; 0% instances), [lv-pos/PROPN]()-[lv-pos/ADV]() (1; 0% instances), [lv-pos/PROPN]()-[lv-pos/VERB]() (1; 0% instances), [lv-pos/PUNCT]()-[lv-pos/VERB]() (1; 0% instances), [lv-pos/VERB]()-[lv-pos/PRON]() (1; 0% instances).


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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 advcl	color:blue
1	Ja	ja	SCONJ	css	_	2	mark	_	_
2	neuzlabosies	neuzlaboties	VERB	vmyifi230ay	Mood=Ind|Negative=Pos|Person=3|Reflex=Yes|Tense=Fut|VerbForm=Fin|Voice=Act	5	advcl	_	SpaceAfter=No
3	,	,	PUNCT	zc	_	2	punct	_	_
4	tāds	tāds	DET	pd0msnn	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	5	det	_	_
5	liktenis	liktenis	NOUN	ncmsn2	Case=Nom|Gender=Masc|Number=Sing	8	parataxis	_	SpaceAfter=No
6	,	,	PUNCT	zc	_	5	punct	_	SpaceAfter=No
7	"	"	PUNCT	zq	_	5	punct	_	_
8	secina	secināt	VERB	vmnipt330an	Mood=Ind|Negative=Neg|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
9	grāmatas	grāmata	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	8	iobj	_	_
10	autors	autors	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	SpaceAfter=No
11	.	.	PUNCT	zs	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 advcl	color:blue
1	Tā	tā	ADV	r0m	PronType=Dem	3	advmod	_	_
2	es	es	PRON	pp10snn	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	domāju	domāt	VERB	vmnist21san	Mood=Ind|Negative=Neg|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	-	-	PUNCT	zd	_	14	punct	_	_
5	nē	nē	PART	qs	_	14	discourse	_	SpaceAfter=No
6	,	,	PUNCT	zc	_	5	punct	_	_
7	tur	tur	ADV	r0p	PronType=Dem	14	advmod	_	SpaceAfter=No
8	,	,	PUNCT	zc	_	10	punct	_	_
9	kur	kur	ADV	r0p	PronType=Int	10	advmod	_	_
10	ir	būt	VERB	vmnipii30an	Mood=Ind|Negative=Neg|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	advcl	_	_
11	matemātika	matemātika	NOUN	ncfsn4	Case=Nom|Gender=Fem|Number=Sing	10	nsubj	_	SpaceAfter=No
12	,	,	PUNCT	zc	_	7	punct	_	_
13	tur	tur	ADV	r0p	PronType=Dem	7	conj	_	_
14	būs	būt	VERB	vmnifii30an	Mood=Ind|Negative=Neg|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	3	ccomp	_	_
15	problēmas	problēma	NOUN	ncfpn4	Case=Nom|Gender=Fem|Number=Plur	14	nsubj	_	SpaceAfter=No
16	.	.	PUNCT	zs	_	3	punct	_	_

~~~


