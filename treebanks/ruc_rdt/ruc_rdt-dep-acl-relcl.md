---
layout: base
title:  'Statistics of acl:relcl in UD_Ruuli-RDT'
udver: '2'
---

## Treebank Statistics: UD_Ruuli-RDT: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="ruc_rdt-dep-acl.html">acl</a></tt>.

170 nodes (2%) are attached to their parents as `acl:relcl`.

169 instances of `acl:relcl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.99411764705882.

The following 16 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt> (94; 55% instances), <tt><a href="ruc_rdt-pos-PRON.html">PRON</a></tt>-<tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt> (37; 22% instances), <tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt> (10; 6% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt> (8; 5% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-NUM.html">NUM</a></tt> (4; 2% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-ADV.html">ADV</a></tt> (3; 2% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-AUX.html">AUX</a></tt> (3; 2% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="ruc_rdt-pos-DET.html">DET</a></tt>-<tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="ruc_rdt-pos-NUM.html">NUM</a></tt>-<tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ruc_rdt-pos-PRON.html">PRON</a></tt>-<tt><a href="ruc_rdt-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ruc_rdt-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt> (1; 1% instances).


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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 acl:relcl	color:blue
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


