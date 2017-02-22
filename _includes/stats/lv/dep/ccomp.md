

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latvian)

This relation is universal.

559 nodes (1%) are attached to their parents as `ccomp`.

511 instances of `ccomp` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.05008944543828.

The following 18 pairs of parts of speech are connected with `ccomp`: [lv-pos/VERB]()-[lv-pos/VERB]() (367; 66% instances), [lv-pos/ADV]()-[lv-pos/VERB]() (48; 9% instances), [lv-pos/PRON]()-[lv-pos/VERB]() (31; 6% instances), [lv-pos/VERB]()-[lv-pos/ADJ]() (25; 4% instances), [lv-pos/VERB]()-[lv-pos/NOUN]() (24; 4% instances), [lv-pos/ADJ]()-[lv-pos/VERB]() (23; 4% instances), [lv-pos/VERB]()-[lv-pos/PRON]() (11; 2% instances), [lv-pos/VERB]()-[lv-pos/ADV]() (9; 2% instances), [lv-pos/NOUN]()-[lv-pos/VERB]() (6; 1% instances), [lv-pos/ADJ]()-[lv-pos/ADJ]() (3; 1% instances), [lv-pos/PRON]()-[lv-pos/ADV]() (2; 0% instances), [lv-pos/PRON]()-[lv-pos/PRON]() (2; 0% instances), [lv-pos/PUNCT]()-[lv-pos/VERB]() (2; 0% instances), [lv-pos/VERB]()-[lv-pos/PROPN]() (2; 0% instances), [lv-pos/NUM]()-[lv-pos/VERB]() (1; 0% instances), [lv-pos/PRON]()-[lv-pos/ADJ]() (1; 0% instances), [lv-pos/PUNCT]()-[lv-pos/NOUN]() (1; 0% instances), [lv-pos/PUNCT]()-[lv-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 ccomp	color:blue
1	Bārmenis	bārmenis	NOUN	ncmsn2	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
2	kā	kā	SCONJ	css	_	3	mark	_	_
3	uzlaizīt	uzlaizīt	VERB	vmnn0t3000n	Polarity=Pos|VerbForm=Inf	4	ccomp	_	_
4	uzlaizīja	uzlaizīt	VERB	vmnist330an	Evident=Fh,Nfh|Mood=Ind|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
5	.	.	PUNCT	zs	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 ccomp	color:blue
1	Iztikt	iztikt	VERB	vmnn0i1000n	Polarity=Pos|VerbForm=Inf	4	ccomp	_	_
2	jau	jau	PART	qs	_	4	discourse	_	_
3	tagad	tagad	ADV	r0t	PronType=Dem	4	advmod	_	_
4	grūti	grūti	ADV	r0c	_	0	root	_	SpaceAfter=No
5	.	.	PUNCT	zs	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 14 ccomp	color:blue
1	Reizēm	reize	NOUN	ncfpd5	Case=Dat|Gender=Fem|Number=Plur	3	obl	_	_
2	man	es	PRON	pp10sdn	Case=Dat|Number=Sing|Person=1|PronType=Prs	3	obl	_	_
3	rodas	rasties	VERB	vmyipi130an	Evident=Fh,Nfh|Mood=Ind|Person=3|Polarity=Pos|Reflex=Yes|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	sajūta	sajūta	NOUN	ncfsn4	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	SpaceAfter=No
5	,	,	PUNCT	zc	_	9	punct	_	_
6	ka	ka	SCONJ	css	_	9	mark	_	_
7	viņš	viņš	PRON	pp3msnn	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	nsubj	_	_
8	to	tas	PRON	pd0msan	Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	9	obj	_	_
9	gaida	gaidīt	VERB	vmnipt330an	Evident=Fh,Nfh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	4	acl	_	_
10	-	-	PUNCT	zd	_	14	punct	_	_
11	lai	lai	SCONJ	css	_	14	mark	_	_
12	es	es	PRON	pp10snn	Case=Nom|Number=Sing|Person=1|PronType=Prs	14	nsubj	_	_
13	viņu	viņš	PRON	pp3msan	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	14	obj	_	_
14	pametu	pamest	VERB	vmnipt11san	Evident=Fh,Nfh|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	8	ccomp	_	SpaceAfter=No
15	.	.	PUNCT	zs	_	3	punct	_	_

~~~


