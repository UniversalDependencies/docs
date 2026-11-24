---
layout: base
title:  'Statistics of appos in UD_Ruuli-RDT'
udver: '2'
---

## Treebank Statistics: UD_Ruuli-RDT: Relations: `appos`

This relation is universal.

37 nodes (0%) are attached to their parents as `appos`.

37 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.67567567567568.

The following 11 pairs of parts of speech are connected with `appos`: <tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt> (12; 32% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt> (8; 22% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt> (4; 11% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-PRON.html">PRON</a></tt> (3; 8% instances), <tt><a href="ruc_rdt-pos-PRON.html">PRON</a></tt>-<tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt> (3; 8% instances), <tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-X.html">X</a></tt> (1; 3% instances), <tt><a href="ruc_rdt-pos-NUM.html">NUM</a></tt>-<tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="ruc_rdt-pos-PRON.html">PRON</a></tt>-<tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ruc_rdt-pos-NUM.html">NUM</a></tt> (1; 3% instances), <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 appos	color:blue
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


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 appos	color:blue
1	Twanenibwe	nena	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	0:root	_
2	emida	muda	NOUN	_	NounClass=Bantu4|Referent=Yes	1	obl:agent	1:obl:agent	_
3	enjunzai	bijunzai	NOUN	_	NounClass=Bantu10|Referent=Yes	2	appos	2:appos	SpaceAfter=No
4	.	.	PUNCT	_	_	1	punct	1:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 appos	color:blue
1	Eizweri	izweri	ADV	_	Referent=Yes	4	advmod	4:advmod	Gloss=AUG-recently|MSeg=e-izweri
2	pulezidenti	pulezidenti	NOUN	_	NounClass=Bantu1	4	nsubj	4:nsubj	Gloss=1.president|MSeg=pulezidenti
3	yaali	li	AUX	_	NounClass=Bantu1|Person=3|Tense=Past	4	aux	4:aux	Gloss=1S-PST-AUX|MSeg=a-a-li
4	abbaire	bba	VERB	COP	Aspect=Perf|Mood=Ind|NounClass=Bantu1|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Gloss=1S-COP-PFV|MSeg=a-bba-ire
5	eni	eni	ADV	_	Deixis=Prox|NounClass=Bantu23|PronType=Dem	4	advmod:loc	4:advmod:loc	Gloss=23.PROX|MSeg=eni
6	ewaiswe	aiswe	PRON	ASSOC	NounClass=Bantu16|Number=Plur|Person[psed]=3|Person[psor]=1|Poss=Yes|PronType=Prs|Referent=Yes	4	obl	4:obl	Gloss=AUG-16-1plPOSS|MSeg=e-wa-aiswe
7	owa	a	PART	GEN	NounClass=Bantu1|Referent=Yes	8	case	8:case	Gloss=AUG-1.GEN|MSeg=o-wa
8	Uganda	Uganda	PROPN	_	NounClass=Bantu1	2	nmod	2:nmod	Gloss=1.Uganda|MSeg=Uganda
9	Yoweri	Yoweri	PROPN	_	NounClass=Bantu1	2	appos	2:appos	Gloss=1.Yoweri|MSeg=Yoweri
10	Museveni	Museveni	PROPN	_	NounClass=Bantu1	9	flat:name	9:flat:name	Gloss=1.Museveni|MSeg=Museveni|SpaceAfter=No
11	,	,	PUNCT	_	_	4	punct	4:punct	SpacesAfter=\n

~~~


