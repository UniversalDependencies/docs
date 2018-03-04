---
layout: base
title:  'Statistics of csubj in UD_Latvian'
udver: '2'
---

## Treebank Statistics: UD_Latvian: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="lv-dep-csubj-pass.html">csubj:pass</a></tt>.

135 nodes (0%) are attached to their parents as `csubj`.

131 instances of `csubj` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.6962962962963.

The following 17 pairs of parts of speech are connected with `csubj`: <tt><a href="lv-pos-VERB.html">VERB</a></tt>-<tt><a href="lv-pos-VERB.html">VERB</a></tt> (78; 58% instances), <tt><a href="lv-pos-ADV.html">ADV</a></tt>-<tt><a href="lv-pos-VERB.html">VERB</a></tt> (17; 13% instances), <tt><a href="lv-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lv-pos-VERB.html">VERB</a></tt> (8; 6% instances), <tt><a href="lv-pos-VERB.html">VERB</a></tt>-<tt><a href="lv-pos-ADJ.html">ADJ</a></tt> (7; 5% instances), <tt><a href="lv-pos-VERB.html">VERB</a></tt>-<tt><a href="lv-pos-NOUN.html">NOUN</a></tt> (6; 4% instances), <tt><a href="lv-pos-PRON.html">PRON</a></tt>-<tt><a href="lv-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="lv-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lv-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="lv-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lv-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="lv-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lv-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="lv-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="lv-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="lv-pos-VERB.html">VERB</a></tt>-<tt><a href="lv-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="lv-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lv-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="lv-pos-ADV.html">ADV</a></tt>-<tt><a href="lv-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="lv-pos-ADV.html">ADV</a></tt>-<tt><a href="lv-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="lv-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lv-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="lv-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="lv-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="lv-pos-VERB.html">VERB</a></tt>-<tt><a href="lv-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 csubj	color:blue
1	-	-	PUNCT	zd	_	3	punct	3:punct	_
2	Man	es	PRON	pp10sdn	Case=Dat|Number=Sing|Person=1|PronType=Prs	3	obl	3:obl:dat	_
3	liekas	likties	VERB	vmyipi130an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Reflex=Yes|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
4	,	,	PUNCT	zc	_	7	punct	7:punct	_
5	viņa	viņa	PRON	pp3fsnn	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	nsubj	7:nsubj	_
6	mūs	mēs	PRON	pp10pan	Case=Acc|Number=Plur|Person=1|PronType=Prs	7	obj	7:obj	_
7	vēro	vērot	VERB	vmnipt230an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	csubj	3:csubj	SpaceAfter=No
8	.	.	PUNCT	zs	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 csubj	color:blue
1	Dīvaini	dīvaini	ADV	r0m	_	0	root	0:root	SpaceAfter=No
2	,	,	PUNCT	zc	_	7	punct	7:punct	_
3	ka	ka	SCONJ	cs	_	7	mark	7:mark	_
4	bērnībā	bērnība	NOUN	ncfsl4	Case=Loc|Gender=Fem|Number=Sing	7	obl	7:obl:loc	_
5	tomēr	tomēr	PART	q	_	7	discourse	7:discourse	_
6	tā	tā	ADV	r0m	PronType=Dem	7	advmod	7:advmod	_
7	baidījos	baidīties	VERB	vmyisi31san	Evident=Fh|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Reflex=Yes|Tense=Past|VerbForm=Fin|Voice=Act	1	csubj	1:csubj	SpaceAfter=No
8	.	.	PUNCT	zs	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 csubj	color:blue
1	-	-	PUNCT	zd	_	2	punct	2:punct	_
2	Skaidrs	skaidrs	ADJ	afmsnnp	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	zc	_	5	punct	5:punct	_
4	ka	ka	SCONJ	cs	_	5	mark	5:mark	_
5	nav	nebūt	VERB	vcnipii30ay	Evident=Fh|Mood=Ind|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	2	csubj	2:csubj	_
6	priekš	priekš	ADP	spsg	_	7	case	7:case	_
7	tevis	tu	PRON	pp20sgn	Case=Gen|Number=Sing|Person=2|PronType=Prs	5	iobj	5:iobj	SpaceAfter=No
8	,	,	PUNCT	zc	_	9	punct	9:punct	_
9	priekšnieks	priekšnieks	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	7	acl	7:acl:nom	_
10	atradies	atrasties	VERB	vmypdmsnasnp	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|Reflex=Yes|Tense=Past|VerbForm=Part	9	acl	9:acl:nom	SpaceAfter=No
11	.	.	PUNCT	zs	_	2	punct	2:punct	_

~~~


