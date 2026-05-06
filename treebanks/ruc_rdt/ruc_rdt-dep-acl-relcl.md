---
layout: base
title:  'Statistics of acl:relcl in UD_Ruuli-RDT'
udver: '2'
---

## Treebank Statistics: UD_Ruuli-RDT: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="ruc_rdt-dep-acl.html">acl</a></tt>.

95 nodes (2%) are attached to their parents as `acl:relcl`.

94 instances of `acl:relcl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.67368421052632.

The following 12 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt> (47; 49% instances), <tt><a href="ruc_rdt-pos-PRON.html">PRON</a></tt>-<tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt> (32; 34% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt> (4; 4% instances), <tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt> (3; 3% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="ruc_rdt-pos-DET.html">DET</a></tt>-<tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="ruc_rdt-pos-NUM.html">NUM</a></tt>-<tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ruc_rdt-pos-PRON.html">PRON</a></tt>-<tt><a href="ruc_rdt-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ruc_rdt-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 acl:relcl	color:blue
1	Kiwuka	kiwuka	NOUN	_	NounClass=Bantu7	2	nsubj	2:nsubj|3:nsubj|4:nsubj:xsubj	Gloss=7.virus|MSeg=kiwuka
2	ki	ki	PRON	_	PronType=Int	0	root	0:root	Gloss=what|MSeg=ki
3	ekikusinga	singa	VERB	REL	Aspect=Prog|Mood=Ind|NounClass=Bantu7|Person=3|Referent=Yes|Tense=Pres|VerbForm=Fin	1	acl:relcl	1:acl:relcl	Gloss=S.REL-7S-PROG-exceed|MSeg=e-ki-ku-sing
4	okuba	bba	VERB	COP	Referent=Yes|VerbForm=Inf	3	xcomp	3:xcomp	Gloss=AUG-INF-COP|MSeg=o-ku-bba
5	ekibbi	kibbi	NOUN	_	NounClass=Bantu7|Referent=Yes	4	obj	4:obj	Gloss=AUG-7.evil|MSeg=e-kibbi|SpaceAfter=No
6	?	?	PUNCT	_	_	2	punct	2:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 acl:relcl	color:blue
1	Kiki	kiki	PRON	_	PronType=Int	0	root	0:root|2:nsubj	Gloss=what|MSeg=kiki
2	ekikwaba	aba	VERB	REL	Aspect=Prog|Mood=Ind|NounClass=Bantu7|Person=3|Referent=Yes|Tense=Pres|VerbForm=Fin	1	acl:relcl	1:acl:relcl	Gloss=S.REL-7S-PROG-go-FV|MSeg=e-ki-ku-ab-a
3	omu	mu	ADP	LOC	NounClass=Bantu18|Referent=Yes	4	case	4:case	Gloss=AUG-18.LOC|MSeg=o-mu
4	maiso	riiso	NOUN	_	NounClass=Bantu6	2	obl	2:obl	Gloss=6.eye|MSeg=maiso
5	aiguru	aiguru	ADV	_	_	6	advmod	6:advmod	Gloss=on_top|MSeg=aiguru
6	eyo	o	ADV	_	Deixis=Med|NounClass=Bantu23|PronType=Dem	2	advmod	2:advmod	Gloss=23.MED|MSeg=eyo|SpaceAfter=No
7	?	?	PUNCT	_	_	1	punct	1:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 acl:relcl	color:blue
1	Nga	nga	SCONJ	_	_	2	mark	2:mark	Gloss=while|MSeg=nga
2	nkwendya	endya	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	0:root	Gloss=1sgS-PROG-want-FV|MSeg=n-ku-endy-a
3	kumanya	manya	VERB	_	VerbForm=Inf	2	xcomp	2:xcomp	Gloss=INF-know-FV|MSeg=ku-many-a
4	ekintu	kintu	NOUN	_	NounClass=Bantu7|Referent=Yes	3	obj	3:obj|6:nsubj	Gloss=AUG-7.thing|MSeg=e-kintu
5	ekiri	li	AUX	REL-COP	NounClass=Bantu7|Person=3|Referent=Yes|Tense=Pres	6	cop	6:cop	Gloss=S.REL-7S-COP|MSeg=e-ki-li
6	omunda	munda	NOUN	_	NounClass=Bantu3|Referent=Yes	4	acl:relcl	4:acl:relcl	Gloss=AUG-3.inside|MSeg=o-munda
7	wa	a	PART	GEN	NounClass=Bantu16	8	case	8:case	Gloss=16.GEN|MSeg=wa
8	seefu	seefu	NOUN	_	NounClass=Bantu9	6	nmod	6:nmod	Gloss=9.safe|MSeg=seefu|SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	2:punct	SpacesAfter=\n

~~~


