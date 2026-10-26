---
layout: base
title:  'Statistics of acl in UD_Ruuli-RDT'
udver: '2'
---

## Treebank Statistics: UD_Ruuli-RDT: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="ruc_rdt-dep-acl-relcl.html">acl:relcl</a></tt>.

12 nodes (0%) are attached to their parents as `acl`.

12 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.33333333333333.

The following 4 pairs of parts of speech are connected with `acl`: <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt> (9; 75% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-AUX.html">AUX</a></tt> (1; 8% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 acl	color:blue
1	Ate	ate	CCONJ	_	_	8	cc	8:cc	Gloss=but|MSeg=ate
2	ni	ni	SCONJ	_	_	3	mark	3:mark	Gloss=when|MSeg=ni
3	kiba	bba	VERB	COP	NounClass=Bantu7|Person=3|Tense=Pres	8	advcl	8:advcl	Gloss=7S-COP-FV|MSeg=ki-bb-a
4	nga	nga	SCONJ	_	_	5	mark	5:mark	Gloss=while|MSeg=nga
5	kikwaite	kwata	VERB	_	Aspect=Perf|Mood=Ind|NounClass=Bantu7|Person=3|Tense=Pres|VerbForm=Fin	3	advcl	3:advcl	Gloss=7S-catch:PFV|MSeg=ki-kwaite
6	omu	mu	ADP	LOC	NounClass=Bantu18|Referent=Yes	7	case	7:case	Gloss=AUG-18.LOC|MSeg=o-mu
7	mutwe	mutwe	NOUN	_	NounClass=Bantu3	5	obl	5:obl	Gloss=3.head|MSeg=mutwe
8	kiba	bba	VERB	COP	NounClass=Bantu7|Person=3|Tense=Pres	0	root	0:root	Gloss=7S-COP-FV|MSeg=ki-bb-a
9	kizibu	kizibu	NOUN	_	NounClass=Bantu7	8	obj	8:obj	Gloss=7.problem|MSeg=kizibu
10	okukiya	kiya	VERB	_	Referent=Yes|VerbForm=Inf	9	acl	9:acl	Gloss=AUG-INF-?TODO-FV|MSeg=o-ku-kiy-a
11	mu	mu	ADV	LOC	NounClass=Bantu18	10	advmod:loc	10:advmod:loc	Gloss=18.LOC|MSeg=mu
12	.	.	PUNCT	_	_	8	punct	8:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 acl	color:blue
1	eya	a	PART	GEN	NounClass=Bantu9|Referent=Yes	2	case	2:case	Gloss=AUG-9.GEN|MSeg=e-ya
2	mulembe	mulembe	NOUN	_	NounClass=Bantu9	5	obl	5:obl	Gloss=9.generation|MSeg=mulembe
3	ero	li	AUX	COP	NounClass=Bantu9|Person=3|Tense=Pres	2	acl	2:acl	Gloss=9S-COP|MSeg=e-li
4	wo	wo	ADV	LOC	NounClass=Bantu16	3	advmod:loc	3:advmod:loc	Gloss=16.LOC|MSeg=wo
5	siika	siika	VERB	_	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	0	root	0:root	Gloss=fry-FV|MSeg=siik-a|SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	7:punct	_
7	kola	kola	VERB	_	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	5	parataxis	5:parataxis	Gloss=do-FV|MSeg=kol-a
8	oti	ti	ADV	_	Referent=Yes	7	advmod	7:advmod	Gloss=AUG-like_this|MSeg=o-ti|SpaceAfter=No
9	.	.	PUNCT	_	_	5	punct	5:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 acl	color:blue
1	We	we	PRON	_	Number=Sing|Person=2|PronType=Prs	4	nsubj	4:nsubj	Gloss=2sg|MSeg=we
2	te	te	PART	TOP	InfStruct=Top	1	advmod:emph	1:advmod:emph	Gloss=TOP|MSeg=te
3	n'	ni	SCONJ	_	_	4	mark	4:mark	Gloss=if|MSeg=ni
4	osanga	sanga	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	0:root	Gloss=2sgS-find-FV|MSeg=o-sang-a
5	yo	yo	ADV	LOC	NounClass=Bantu23	4	advmod:loc	4:advmod:loc	Gloss=23.LOC|MSeg=yo
6	omwogo	mwogo	NOUN	_	NounClass=Bantu3|Referent=Yes	4	obj	4:obj	Gloss=AUG-3.cassava|MSeg=o-mwogo
7	nka	nka	ADP	_	_	9	mark	9:mark	Gloss=like|MSeg=nka
8	ogwo	gwo	PRON	_	NounClass=Bantu3|Person=3|PronType=Prs|Referent=Yes	9	nsubj	9:nsubj	Gloss=AUG-3|MSeg=o-gwo
9	ekiyaata	kiyaata	NOUN	_	NounClass=Bantu7|Referent=Yes	6	acl	6:acl	Gloss=AUG-7.sweet.potato|MSeg=e-kiyaata|SpacesAfter=\n

~~~


