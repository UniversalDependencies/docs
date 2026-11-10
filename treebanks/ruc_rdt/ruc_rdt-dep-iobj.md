---
layout: base
title:  'Statistics of iobj in UD_Ruuli-RDT'
udver: '2'
---

## Treebank Statistics: UD_Ruuli-RDT: Relations: `iobj`

This relation is universal.
There are 1 language-specific subtypes of `iobj`: <tt><a href="ruc_rdt-dep-iobj-appl.html">iobj:appl</a></tt>.

20 nodes (0%) are attached to their parents as `iobj`.

14 instances of `iobj` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.45.

The following 5 pairs of parts of speech are connected with `iobj`: <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt> (15; 75% instances), <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-PRON.html">PRON</a></tt> (2; 10% instances), <tt><a href="ruc_rdt-pos-AUX.html">AUX</a></tt>-<tt><a href="ruc_rdt-pos-PRON.html">PRON</a></tt> (1; 5% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt> (1; 5% instances).


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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 iobj	color:blue
1	Nabyaliibwe	byala	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	0:root	Gloss=1sgS-PST-give_birth-PASS:PFV|MSeg=n-a-byal-ibwe
2	ninkuura	kula	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Nar|VerbForm=Fin	1	conj	0:root|1:conj	Gloss=NAR-1sgS-grow-FV|MSeg=ni-n-kul-a
3	oku	ku	ADP	LOC	NounClass=Bantu17|Referent=Yes	4	case	4:case	Gloss=AUG-17.LOC|MSeg=o-ku
4	kyalo	kyalo	NOUN	_	NounClass=Bantu7	2	obl	2:obl	Gloss=7.village|MSeg=kyalo
5	kye	e	PRON	_	NounClass=Bantu7|PronType=Rel	6	iobj	6:iobj	Gloss=7.REL|MSeg=kye
6	beeta	eta	VERB	_	Mood=Ind|NounClass=Bantu2|Person=3|Tense=Pres|VerbForm=Fin	4	acl:relcl	4:acl:relcl	Gloss=2S-call-FV|MSeg=ba-et-a
7	Kamusodoirye	Kamusodoirye	PROPN	_	NounClass=Bantu9	6	obj	6:obj	Gloss=9.Kamusodoirye|MSeg=Kamusodoirye|SpaceAfter=No
8	.	.	PUNCT	_	_	1	punct	1:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 iobj	color:blue
1	Wabbaanga	bba	VERB	COP	Aspect=Hab|Mood=Ind|NounClass=Bantu16|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Gloss=16S-COP-FV-HAB|MSeg=wa-bba-a-nga
2	wo	wo	ADV	LOC	NounClass=Bantu16	1	advmod:loc	1:advmod:loc	Gloss=16.LOC|MSeg=wo
3	omuntu	muntu	NOUN	_	NounClass=Bantu1|Referent=Yes	1	nsubj	1:nsubj|7:iobj	Gloss=AUG-1.person|MSeg=o-muntu
4	omukulu	mukulu	ADJ	_	NounClass=Bantu1|Referent=Yes	3	amod	3:amod	Gloss=AUG-1.adult|MSeg=o-mukulu|SpacesAfter=\n
5	abandi	ndi	PRON	_	NounClass=Bantu2|PronType=Ind|Referent=Yes	7	nsubj	7:nsubj	Gloss=AUG-2-other|MSeg=a-ba-ndi
6	gwe	e	PRON	_	NounClass=Bantu1|PronType=Rel	7	iobj	3:ref	Gloss=1.REL|MSeg=gwe
7	batanga	ta	AUX	COP	Aspect=Hab|NounClass=Bantu2|Person=3|Tense=Past	3	acl:relcl	3:acl:relcl	Gloss=2S-PST-put-HAB|MSeg=ba-a-ta-nga
8	mu	mu	ADV	LOC	NounClass=Bantu18	7	advmod:loc	7:advmod:loc	Gloss=18.LOC|MSeg=mu
9	ekitinisya	kitinisya	NOUN	_	NounClass=Bantu7|Referent=Yes	7	obj	7:obj	Gloss=AUG-7.respect|MSeg=e-kitinisya|SpaceAfter=No
10	.	.	PUNCT	_	_	1	punct	1:punct	SpacesAfter=\n

~~~


