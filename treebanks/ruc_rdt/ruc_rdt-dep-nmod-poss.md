---
layout: base
title:  'Statistics of nmod:poss in UD_Ruuli-RDT'
udver: '2'
---

## Treebank Statistics: UD_Ruuli-RDT: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="ruc_rdt-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="ruc_rdt-dep-nmod-desc.html">nmod:desc</a></tt>.

120 nodes (2%) are attached to their parents as `nmod:poss`.

116 instances of `nmod:poss` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.25833333333333.

The following 8 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-PRON.html">PRON</a></tt> (88; 73% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt> (17; 14% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt> (6; 5% instances), <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-PRON.html">PRON</a></tt> (4; 3% instances), <tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ruc_rdt-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="ruc_rdt-pos-PRON.html">PRON</a></tt>-<tt><a href="ruc_rdt-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nmod:poss	color:blue
1	Nkwaba	aba	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	0:root	Gloss=1sgS-PROG-go-FV|MSeg=n-ku-ab-a
2	kulowooza	lowooza	VERB	_	VerbForm=Inf	1	advcl	1:advcl	Gloss=INF-think-FV|MSeg=ku-lowooz-a
3	oku	ku	ADP	LOC	NounClass=Bantu17|Referent=Yes	4	case	4:case	Gloss=AUG-17.LOC|MSeg=o-ku
4	proposal	proposal	NOUN	_	NounClass=Bantu9	2	obl	2:obl	Gloss=9.proposal|MSeg=proposal
5	yanywei	nywe	PRON	ASSOC	NounClass=Bantu9|Number=Plur|Person[psed]=3|Person[psor]=2|Poss=Yes|PronType=Prs	4	nmod:poss	4:nmod:poss	Gloss=9-2plPOSS|MSeg=ya-nywe|SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	7:punct	_
7	mube	bba	VERB	COP	Mood=Sub|Number=Plur|Person=2|Tense=Pres	1	parataxis	1:parataxis	Gloss=2plS-COP-SBJV|MSeg=mu-bb-e
8	kusai	kusai	ADV	_	_	7	advmod	7:advmod	Gloss=well|MSeg=kusai
9	basaiza	musaiza	NOUN	_	NounClass=Bantu2	1	vocative	1:vocative	Gloss=2.man|MSeg=basaiza|SpaceAfter=No
10	.	.	PUNCT	_	_	1	punct	1:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nmod:poss	color:blue
1	Amembe	iyembe	NOUN	_	NounClass=Bantu6|Referent=Yes	5	nsubj	5:nsubj	_
2	ga	a	PART	GEN	NounClass=Bantu6	3	case	3:case	_
3	nte	nte	NOUN	_	NounClass=Bantu1	1	nmod:poss	1:nmod:poss	_
4	wange	ange	PRON	ASSOC	NounClass=Bantu1|Number=Sing|Person[psed]=3|Person[psor]=1|Poss=Yes|PronType=Prs	3	nmod:poss	3:nmod:poss	_
5	gasongoli	songoli	ADJ	_	NounClass=Bantu6	0	root	0:root	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	5:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nmod:poss	color:blue
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


