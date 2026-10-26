---
layout: base
title:  'Statistics of nsubj:outer in UD_Ruuli-RDT'
udver: '2'
---

## Treebank Statistics: UD_Ruuli-RDT: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="ruc_rdt-dep-nsubj.html">nsubj</a></tt>.

3 nodes (0%) are attached to their parents as `nsubj:outer`.

3 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.33333333333333.

The following 2 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt> (2; 67% instances), <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-PRON.html">PRON</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 nsubj:outer	color:blue
1	Nabire	aba	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	0:root	Gloss=1sgS-go-PFV|MSeg=n-ab-ire
2	okubona	bona	VERB	_	Referent=Yes|VerbForm=Inf	1	advcl	1:advcl	Gloss=AUG-INF-see-FV|MSeg=o-ku-bon-a
3	nga	nga	SCONJ	COMPL	_	4	mark	4:mark	Gloss=COMPL|MSeg=nga
4	olugendo	lugendo	NOUN	_	NounClass=Bantu11|Referent=Yes	9	reparandum	9:reparandum	Gloss=AUG-11.journey|MSeg=o-lugendo|SpaceAfter=No
5	,	,	PUNCT	_	_	9	punct	9:punct	_
6	amananu	mananu	NOUN	_	NounClass=Bantu6|Referent=Yes	9	nsubj:outer	9:nsubj:outer	Gloss=AUG-6.fact|MSeg=a-mananu
7	gali	li	AUX	COP	NounClass=Bantu6|Person=3|Tense=Pres	9	cop	9:cop	Gloss=6S-COP|MSeg=ga-li
8	nti	nti	SCONJ	COMPL	_	9	mark	9:mark	Gloss=COMPL|MSeg=nti
9	lukunyenda	lukunyenda	VERB	_	Aspect=Prog|Mood=Ind|NounClass=Bantu11|Number=Sing|Person=3|Person[obj]=1|Tense=Pres|VerbForm=Fin	2	ccomp	2:ccomp	Gloss=11S-PROG-1sgS-break-FV|MSeg=lu-ku-n-end-a|SpaceAfter=No
10	,	,	PUNCT	_	_	1	punct	1:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 nsubj:outer	color:blue
1	Ontale	ntale	NOUN	_	NounClass=Bantu1|Referent=Yes	2	nsubj	2:nsubj	Gloss=AUG-1.lion|MSeg=o-ntale
2	wa	e	PRON	_	NounClass=Bantu16|PronType=Rel	8	nsubj:outer	8:nsubj:outer	Gloss=16.REL|MSeg=wa
3	akwema	ema	VERB	_	Aspect=Prog|Mood=Ind|NounClass=Bantu1|Person=3|Tense=Pres|VerbForm=Fin	2	acl:relcl	2:acl:relcl	Gloss=1S-PROG-step-FV|MSeg=a-ku-em-a|SpaceAfter=No
4	,	,	PUNCT	_	_	2	punct	2:punct	SpacesAfter=\n
5	n’	na	PART	ADD.FOC	InfStruct=Foc	6	advmod:emph	6:advmod:emph	Gloss=ADD.FOC|MSeg=na
6	onte	nte	NOUN	_	NounClass=Bantu1|Referent=Yes	8	nsubj	8:nsubj	Gloss=AUG-1.cow|MSeg=o-nte
7	niwo	ni	AUX	COP	InfStruct=Foc|NounClass=Bantu16|Person=3|Tense=Pres	8	cop	8:cop	Gloss=COP-16|MSeg=ni-wo
8	akwema	ema	VERB	_	Aspect=Prog|Mood=Ind|NounClass=Bantu1|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Gloss=1S-PROG-step-FV|MSeg=a-ku-em-a|SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	8:punct	SpacesAfter=\n

~~~


