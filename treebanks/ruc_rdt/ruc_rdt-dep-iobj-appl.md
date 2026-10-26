---
layout: base
title:  'Statistics of iobj:appl in UD_Ruuli-RDT'
udver: '2'
---

## Treebank Statistics: UD_Ruuli-RDT: Relations: `iobj:appl`

This relation is a language-specific subtype of <tt><a href="ruc_rdt-dep-iobj.html">iobj</a></tt>.

6 nodes (0%) are attached to their parents as `iobj:appl`.

4 instances of `iobj:appl` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.16666666666667.

The following 2 pairs of parts of speech are connected with `iobj:appl`: <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt> (4; 67% instances), <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-PRON.html">PRON</a></tt> (2; 33% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 iobj:appl	color:blue
1	Asumbiire	sumba	VERB	_	Aspect=Perf|Mood=Ind|NounClass=Bantu1|Person=3|Tense=Pres|VerbForm=Fin|Voice=Appl	0	root	0:root	_
2	omwana	mwana	NOUN	_	NounClass=Bantu1|Referent=Yes	1	iobj:appl	1:iobj:appl	_
3	ebiyaata	kiyaata	NOUN	_	NounClass=Bantu8|Referent=Yes	1	obj	1:obj	SpaceAfter=No
4	.	.	PUNCT	_	_	1	punct	1:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 iobj:appl	color:blue
1	mbakusuubira	sumba	VERB	_	Mood=Ind|NounClass=Bantu2|Number=Sing|Person=3|Person[obj]=2|Tense=Nar|VerbForm=Fin|Voice=Appl	0	root	0:root	Gloss=NAR-2S-2sgO-cook-APPL-FV|MSeg=ni-ba-ku-sumb-ir-a
2	wee	we	PRON	_	Number=Sing|Person=2|PronType=Prs	1	iobj:appl	1:iobj:appl	Gloss=2sg|MSeg=we
3	na	na	PART	ADD.FOC	InfStruct=Foc	2	advmod:emph	2:advmod:emph	Gloss=ADD.FOC|MSeg=na
4	omukubi	mukubi	NOUN	_	NounClass=Bantu3|Referent=Yes	1	obj	1:obj	Gloss=AUG-3.sauce|MSeg=o-mukubi
5	wee	we	PRON	_	Number=Sing|Person=2|PronType=Prs	1	iobj:appl	1:iobj:appl	Gloss=2sg|MSeg=we
6	na	na	PART	ADD.FOC	InfStruct=Foc	5	advmod:emph	5:advmod:emph	Gloss=ADD.FOC|MSeg=na

~~~


