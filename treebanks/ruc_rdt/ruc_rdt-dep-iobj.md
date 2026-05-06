---
layout: base
title:  'Statistics of iobj in UD_Ruuli-RDT'
udver: '2'
---

## Treebank Statistics: UD_Ruuli-RDT: Relations: `iobj`

This relation is universal.
There are 1 language-specific subtypes of `iobj`: <tt><a href="ruc_rdt-dep-iobj-appl.html">iobj:appl</a></tt>.

14 nodes (0%) are attached to their parents as `iobj`.

11 instances of `iobj` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.35714285714286.

The following 2 pairs of parts of speech are connected with `iobj`: <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt> (13; 93% instances), <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-PRON.html">PRON</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 iobj	color:blue
1	Tulina	lina	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	0:root	_
2	onyonyi	nyonyi	NOUN	_	NounClass=Bantu1|Referent=Yes	1	obj	1:obj|4:obj	_
3	gwe	e	PRON	_	NounClass=Bantu1|PronType=Rel	4	obj	2:ref	_
4	bayeta	e	VERB	_	Mood=Ind|NounClass=Bantu2|Person=3|Tense=Pres|VerbForm=Fin	2	acl:relcl	2:acl:relcl	_
5	okisyo	kisyo	NOUN	_	NounClass=Bantu1|Referent=Yes	4	iobj	4:iobj	SpaceAfter=No
6	.	.	PUNCT	_	_	1	punct	1:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 iobj	color:blue
1	Bairaiswe	muiraiswe	NOUN	_	NounClass=Bantu2	3	vocative	3:vocative	Gloss=2.my_friends|MSeg=bairaiswe|SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	1:punct	_
3	mutalowooza	lowooza	VERB	_	Mood=Ind|Number=Plur|Person=2|Polarity=Neg|Tense=Pres|VerbForm=Fin	0	root	0:root	Gloss=2plS-NEG-think-FV|MSeg=mu-ta-lowooz-a
4	nti	nti	SCONJ	COMPL	_	6	mark	6:mark	Gloss=COMPL|MSeg=nti
5	okuwandiika	wandiika	VERB	_	Referent=Yes|VerbForm=Inf	6	advcl	6:advcl	Gloss=AUG-INF-write-FV|MSeg=o-ku-wandiik-a|SpacesAfter=\n
6	omala	mala	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	3	ccomp	3:ccomp	Gloss=2sgS-finish-FV|MSeg=o-mal-a
7	kubuulya	buulya	VERB	_	VerbForm=Inf	6	xcomp	6:xcomp	Gloss=INF-ask-FV|MSeg=ku-buuly-a
8	buli	buli	PRON	_	PronType=Tot	7	iobj	7:iobj|10:obj	Gloss=every|MSeg=buli
9	gw'	e	PRON	_	NounClass=Bantu1|PronType=Rel	10	obj	8:ref	Gloss=1.REL|MSeg=gwe
10	oyajiirye	aja	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	8	acl:relcl	8:acl:relcl	Gloss=2sgS-meet:PFV|MSeg=o-ajiirye
11	n'	na	CCONJ	COM	_	12	cc	12:cc	Gloss=and|MSeg=na
12	owandiika	wandiika	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	6	conj	3:ccomp|6:conj	Gloss=2sgS-write-FV|MSeg=o-wandiik-a
13	bya	a	PART	GEN	NounClass=Bantu8	14	case	14:case	Gloss=8.GEN|MSeg=bya
14	kukobeire	koba	NOUN	_	NounClass=Bantu15|VerbForm=Vnoun|Voice=Appl	12	obj	12:obj	Gloss=INF-say-APPL:PFV|MSeg=ku-kob-eire|SpaceAfter=No
15	.	.	PUNCT	_	_	3	punct	3:punct	SpacesAfter=\n

~~~


