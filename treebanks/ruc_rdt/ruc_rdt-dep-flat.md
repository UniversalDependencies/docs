---
layout: base
title:  'Statistics of flat in UD_Ruuli-RDT'
udver: '2'
---

## Treebank Statistics: UD_Ruuli-RDT: Relations: `flat`

This relation is universal.
There are 3 language-specific subtypes of `flat`: <tt><a href="ruc_rdt-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="ruc_rdt-dep-flat-name.html">flat:name</a></tt>, <tt><a href="ruc_rdt-dep-flat-num.html">flat:num</a></tt>.

6 nodes (0%) are attached to their parents as `flat`.

6 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 4 pairs of parts of speech are connected with `flat`: <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt> (3; 50% instances), <tt><a href="ruc_rdt-pos-DET.html">DET</a></tt>-<tt><a href="ruc_rdt-pos-DET.html">DET</a></tt> (1; 17% instances), <tt><a href="ruc_rdt-pos-PRON.html">PRON</a></tt>-<tt><a href="ruc_rdt-pos-PRON.html">PRON</a></tt> (1; 17% instances), <tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 flat	color:blue
1	Oku	ku	ADP	LOC	NounClass=Bantu17|Referent=Yes	2	case	2:case	_
2	nzira	nzira	NOUN	_	NounClass=Bantu9	5	obl	5:obl	_
3	ya	a	PART	GEN	NounClass=Bantu9	4	case	4:case	_
4	Jinja	Jinja	PROPN	_	NounClass=Bantu9	2	nmod:poss	2:nmod:poss	_
5	bukanga	kanga	VERB	_	Mood=Ind|NounClass=Bantu14|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
6	ku	ku	ADP	LOC	NounClass=Bantu17	7	case	7:case	_
7	kagera	kagera	NOUN	_	NounClass=Bantu12	5	obl	5:obl	_
8	Waligga	Waligga	PROPN	_	NounClass=Bantu9	7	flat	7:flat	SpaceAfter=No
9	.	.	PUNCT	_	_	5	punct	5:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 flat	color:blue
1	Naye	naye	CCONJ	_	_	2	cc	2:cc	Gloss=but|MSeg=naye
2	tinkusobola	sobola	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin	0	root	0:root	Gloss=NEG-1sgS-PROG-be_able-FV|MSeg=ti-n-ku-sobol-a
3	kukwesiga	esiga	VERB	_	Number=Sing|Person=2|VerbForm=Inf	2	xcomp	2:xcomp	Gloss=INF-2sgO-trust-FV|MSeg=ku-ku-esig-a
4	na	na	ADP	COM	_	5	case	5:case	Gloss=COM|MSeg=na
5	kintu	kintu	NOUN	_	NounClass=Bantu7	3	obl	3:obl	Gloss=7.thing|MSeg=kintu
6	kindi	ndi	DET	_	NounClass=Bantu7|PronType=Ind	5	det	5:det	Gloss=7-other|MSeg=ki-ndi
7	kyona	ona	DET	_	NounClass=Bantu7|PronType=Tot	5	det	5:det	Gloss=7-all|MSeg=ki-ona
8	kyona	ona	DET	_	NounClass=Bantu7|PronType=Tot	7	flat	7:flat	Gloss=7-all|MSeg=ki-ona|SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	2:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat	color:blue
1	Oteekwa	teekwa	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	0:root	Gloss=2sgS-must-FV|MSeg=o-teekw-a
2	okuneigulira	eigula	VERB	_	Number=Sing|Person=1|Referent=Yes|VerbForm=Inf|Voice=Appl	1	xcomp	1:xcomp	Gloss=AUG-INF-1sgO-TODO-APPL-FV|MSeg=o-ku-n-eigul-ir-a
3	wena	ona	PRON	_	Number=Plur|Person=2|PronType=Tot	2	obj	2:obj	Gloss=you_all|MSeg=weena
4	wena	ona	PRON	_	Number=Plur|Person=2|PronType=Tot	3	flat	3:flat	Gloss=you_all|MSeg=weena
5	kinsobozesye	sobola	VERB	_	Mood=Sub|NounClass=Bantu7|Number=Sing|Person=3|Person[obj]=1|VerbForm=Fin|Voice=Cau	2	advcl	2:advcl	Gloss=7S-1sgO-be_able-CAUS-SBJV|MSeg=ki-n-sobol-esy-e
6	okubona	bona	VERB	_	Referent=Yes|VerbForm=Inf	5	xcomp	5:xcomp	Gloss=AUG-INF-see-FV|MSeg=o-ku-bon-a
7	buli	buli	DET	_	PronType=Tot	8	det	8:det	Gloss=each|MSeg=buli
8	kimwei	mwe	NUM	_	NounClass=Bantu7|NumForm=Word|NumType=Card	6	obj	6:obj|10:obj	Gloss=7-one|MSeg=ki-mwei
9	kye	e	PRON	_	NounClass=Bantu7|PronType=Rel	10	obj	8:ref	Gloss=7.REL|MSeg=kye
10	nkwendya	endya	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	8	acl:relcl	8:acl:relcl	Gloss=1sgS-PROG-want-FV|MSeg=n-ku-endy-a|SpaceAfter=No
11	.	.	PUNCT	_	_	1	punct	1:punct	SpacesAfter=\n

~~~


