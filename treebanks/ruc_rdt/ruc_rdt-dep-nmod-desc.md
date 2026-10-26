---
layout: base
title:  'Statistics of nmod:desc in UD_Ruuli-RDT'
udver: '2'
---

## Treebank Statistics: UD_Ruuli-RDT: Relations: `nmod:desc`

This relation is a language-specific subtype of <tt><a href="ruc_rdt-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="ruc_rdt-dep-nmod-poss.html">nmod:poss</a></tt>.

7 nodes (0%) are attached to their parents as `nmod:desc`.

7 instances of `nmod:desc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `nmod:desc`: <tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt> (4; 57% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt> (3; 43% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nmod:desc	color:blue
1	Nkwendya	endya	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	0:root	Gloss=1sgS-PROG-want-FV|MSeg=n-ku-endy-a
2	wekere	ekeera	VERB	_	Mood=Sub|Number=Sing|Person=2|VerbForm=Fin	1	ccomp	1:ccomp	Gloss=2sgS-do_first-SBJV|MSeg=o-ekeer-e
3	omperye	weerya	VERB	_	Mood=Sub|Number=Sing|Number[obj]=Sing|Person=2|Person[obj]=1|VerbForm=Fin	2	ccomp	2:ccomp	Gloss=2sgS-1sgO-give-SBJV|MSeg=o-n-weery-e
4	ebbasa	bbaasa	NOUN	_	NounClass=Bantu9|Referent=Yes	3	obj	3:obj|7:obj	Gloss=AUG-9.envelope|MSeg=e-bbaasa
5	eyo	o	DET	_	Deixis=Med|NounClass=Bantu9|PronType=Dem	4	det	4:det	Gloss=9.MED|MSeg=eyo
6	gy'	e	PRON	_	NounClass=Bantu9|PronType=Rel	7	obj	4:ref	Gloss=9.REL|MSeg=gye
7	okwaite	kwata	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	4	acl:relcl	4:acl:relcl	Gloss=2sgS-catch:PFV|MSeg=o-kwaite
8	,	,	PUNCT	_	_	1	punct	1:punct	_
9	mwami	mwami	NOUN	_	NounClass=Bantu1	10	nmod:desc	10:nmod:desc	Gloss=1.man|MSeg=mwami
10	Cobb	Cobb	PROPN	_	NounClass=Bantu1	1	vocative	1:vocative	Gloss=1.Cobb|MSeg=Cobb|SpaceAfter=No
11	.	.	PUNCT	_	_	1	punct	1:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:desc	color:blue
1	onsya	nsya	NOUN	_	NounClass=Bantu1|Referent=Yes	2	nsubj	2:nsubj	Gloss=AUG-1.duiker|MSeg=o-nsya
2	amubwirye	buulya	VERB	_	Aspect=Perf|Mood=Ind|NounClass=Bantu1|NounClass[obj]=Bantu1|Person=3|Person[obj]=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Gloss=1S-1O-ask:PFV|MSeg=a-mu-bwirye|SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	2:punct	SpacesAfter=\n
4	"	"	PUNCT	_	_	7	punct	7:punct	SpaceAfter=No
5	nanka	nanka	NOUN	_	NounClass=Bantu1	6	nmod:desc	6:nmod:desc	Gloss=1.whats_his_name|MSeg=nanka
6	nyakite	nyakite	NOUN	_	NounClass=Bantu1	7	vocative	7:vocative	Gloss=1.cow|MSeg=nyakite
7	okwiruka	iruka	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	2	ccomp	2:ccomp	Gloss=2sgS-PROG-run-FV|MSeg=o-ku-iruk-a
8	ki	ki	PRON	_	PronType=Int	7	obl	7:obl	Gloss=what|MSeg=ki|SpaceAfter=No
9	?	?	PUNCT	_	_	7	punct	7:punct	SpacesAfter=\n

~~~


