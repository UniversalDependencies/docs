---
layout: base
title:  'Statistics of nmod in UD_Ruuli-RDT'
udver: '2'
---

## Treebank Statistics: UD_Ruuli-RDT: Relations: `nmod`

This relation is universal.
There are 2 language-specific subtypes of `nmod`: <tt><a href="ruc_rdt-dep-nmod-desc.html">nmod:desc</a></tt>, <tt><a href="ruc_rdt-dep-nmod-poss.html">nmod:poss</a></tt>.

184 nodes (2%) are attached to their parents as `nmod`.

165 instances of `nmod` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 14 pairs of parts of speech are connected with `nmod`: <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt> (101; 55% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt> (41; 22% instances), <tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt> (12; 7% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-NUM.html">NUM</a></tt> (9; 5% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-PRON.html">PRON</a></tt> (5; 3% instances), <tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt> (4; 2% instances), <tt><a href="ruc_rdt-pos-PRON.html">PRON</a></tt>-<tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="ruc_rdt-pos-ADV.html">ADV</a></tt>-<tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="ruc_rdt-pos-NUM.html">NUM</a></tt>-<tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ruc_rdt-pos-NUM.html">NUM</a></tt>-<tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ruc_rdt-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 nmod	color:blue
1	Oba	oba	CCONJ	_	_	2	cc	2:cc	Gloss=or|MSeg=oba
2	biwuka	biwuka	NOUN	_	NounClass=Bantu8	0	root	0:root	Gloss=8.virus|MSeg=biwuka
3	bya	a	PART	GEN	NounClass=Bantu8	5	case	5:case	Gloss=8.GEN|MSeg=bya
4	mu	mu	ADP	LOC	NounClass=Bantu18	5	case	5:case	Gloss=18.LOC|MSeg=mu
5	nda	nda	NOUN	_	NounClass=Bantu9	2	nmod	2:nmod	Gloss=9.stomach|MSeg=nda|SpaceAfter=No
6	?	?	PUNCT	_	_	2	punct	2:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nmod	color:blue
1	Ebika	kika	NOUN	_	NounClass=Bantu8|Referent=Yes	6	nsubj	6:nsubj	Gloss=AUG-8.clan|MSeg=e-bika
2	bya	a	PART	GEN	NounClass=Bantu8	3	case	3:case	Gloss=8.GEN|MSeg=bya
3	Banyala	Munyala	PROPN	_	NounClass=Bantu2	1	nmod	1:nmod	Gloss=2.Banyala|MSeg=Banyala
4	byaali	li	AUX	COP	NounClass=Bantu8|Person=3|Tense=Past	6	cop	6:cop	Gloss=8S-PST-COP|MSeg=bi-a-li|SpacesAfter=\n
5	bya	a	PART	GEN	NounClass=Bantu8	6	case	6:case	Gloss=8.GEN|MSeg=bya
6	mugaso	mugaso	NOUN	_	NounClass=Bantu3	0	root	0:root	Gloss=3.importance|MSeg=mugaso
7	muno	muno	ADV	_	_	6	advmod	6:advmod	Gloss=plenty|MSeg=muno
8	omu	mu	ADP	LOC	NounClass=Bantu18|Referent=Yes	9	case	9:case	Gloss=AUG-18.LOC|MSeg=o-mu
9	kugaita	gaita	NOUN	_	NounClass=Bantu15|VerbForm=Vnoun	6	obl	6:obl	Gloss=INF-join-FV|MSeg=ku-gait-a
10	abantu	muntu	NOUN	_	NounClass=Bantu2|Referent=Yes	9	obj	9:obj	Gloss=AUG-2.person|MSeg=a-bantu|SpaceAfter=No
11	.	.	PUNCT	_	_	6	punct	6:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod	color:blue
1	Elphas	Elphas	PROPN	_	NounClass=Bantu1	3	nsubj	3:nsubj	Gloss=1.Elphas|MSeg=Elphas
2	Moni	Moni	PROPN	_	NounClass=Bantu1	1	flat:name	1:flat:name	Gloss=1.Moni|MSeg=Moni
3	musaiza	musaiza	NOUN	_	NounClass=Bantu1	4	nmod	4:nmod	Gloss=1.man|MSeg=musaiza
4	Muirifuma	Muirifuma	PROPN	_	NounClass=Bantu1	0	root	0:root	Gloss=1.Muirifuma|MSeg=Muirifuma
5	(	(	PUNCT	_	_	6	punct	6:punct	SpaceAfter=No
6	Mufuma	Mufuma	PROPN	_	NounClass=Bantu1	4	appos	4:appos	Gloss=1.Mufuma|MSeg=Mufuma|SpaceAfter=No
7	)	)	PUNCT	_	_	6	punct	6:punct	_
8	eyeizira	eizira	VERB	REL	Mood=Ind|NounClass=Bantu1|Person=3|Referent=Yes|Tense=Pres|VerbForm=Fin	4	acl:relcl	4:acl:relcl	Gloss=S.REL-1S-belongs_to_totem-FV|MSeg=e-a-eizir-a
9	oMbogo	mbogo	NOUN	_	NounClass=Bantu1|Referent=Yes	8	obj	8:obj	Gloss=AUG-1.buffalo|MSeg=o-mbogo|SpaceAfter=No
10	.	.	PUNCT	_	_	4	punct	4:punct	SpacesAfter=\n

~~~


