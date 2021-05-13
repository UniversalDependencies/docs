---
layout: base
title:  'Statistics of cop in UD_Korean-PUD'
udver: '2'
---

## Treebank Statistics: UD_Korean-PUD: Relations: `cop`

This relation is universal.

458 nodes (3%) are attached to their parents as `cop`.

458 instances of `cop` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.02183406113537.

The following 6 pairs of parts of speech are connected with `cop`: <tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_pud-pos-AUX.html">AUX</a></tt> (432; 94% instances), <tt><a href="ko_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ko_pud-pos-AUX.html">AUX</a></tt> (13; 3% instances), <tt><a href="ko_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ko_pud-pos-AUX.html">AUX</a></tt> (8; 2% instances), <tt><a href="ko_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ko_pud-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="ko_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ko_pud-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="ko_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 cop	color:blue
1	소셜	_	NOUN	NN	_	2	compound	_	Translit=.so.syeol|LTranslit=_
2	미디어	_	NOUN	NN	_	3	compound	_	Translit=.mi.di.eo|LTranslit=_
3	전환을	전환	NOUN	NN+CM	Case=Acc|Polite=Form	4	obj	_	MSeg=전환-을|Translit=.jeon.hwan.eul|LTranslit=.jeon.hwan
4	따르는	_	VERB	VV	Form=Adn	7	acl:relcl	_	Translit=.dda.reu.neun|LTranslit=_
5	미국	_	PROPN	NNP	_	6	compound	_	Translit=.mi.gug|LTranslit=_
6	의회	_	NOUN	NN	_	7	compound	_	Translit=.yi.hoe|LTranslit=_
7	의원들에게	의원들	NOUN	NN+CM	Number=Plur|Polite=Form	10	advmod	_	MSeg=의원들-에게|Translit=.yi.weon.deul.e.ge|LTranslit=.yi.weon.deul
8	이것은	이것	PRON	PRD+CM	Case=Nom|Polite=Form	10	nsubj	_	MSeg=이것-은|Translit=.i.geos.eun|LTranslit=.i.geos
9	조금	_	ADV	RB	_	10	advmod	_	Translit=.jo.geum|LTranslit=_
10	다를	_	ADJ	JJ	Form=Adn	11	dep	_	Translit=.da.reul|LTranslit=_
11	것	_	NOUN	NNB	_	0	root	_	SpaceAfter=No|Translit=.geos|LTranslit=_
12	이다	_	AUX	VC	Mood=Ind|VerbForm=Fin	11	cop	_	SpaceAfter=No|Translit=.i.da|LTranslit=_
13	.	.	PUNCT	.	_	11	punct	_	Translit=.|LTranslit=_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 cop	color:blue
1	몇몇	_	DET	DT	_	2	det	_	Translit=.myeoch.myeoch|LTranslit=_
2	분석가들은	분석가들	NOUN	NN+CM	Case=Nom|Number=Plur|Polite=Form	14	nsubj	_	MSeg=분석가들-은|Translit=.bun.seog.ga.deul.eun|LTranslit=.bun.seog.ga.deul
3	삼성의	삼성	PROPN	NNP+CM	Case=Gen|Polite=Form	5	nmod:poss	_	MSeg=삼성-의|Translit=.sam.seong.yi|LTranslit=.sam.seong
4	사업	_	NOUN	NN	_	5	compound	_	Translit=.sa.eob|LTranslit=_
5	실패로	실패	NOUN	NN+CM	Polite=Form	9	advmod	_	MSeg=실패-로|Translit=.sil.pae.ro|LTranslit=.sil.pae
6	가장	_	ADV	RB	_	7	advmod	_	Translit=.ga.jang|LTranslit=_
7	큰	_	ADJ	JJ	Form=Adn	8	acl:relcl	_	Translit=.keun|LTranslit=_
8	이득을	이득	NOUN	NN+CM	Case=Acc|Polite=Form	9	obj	_	MSeg=이득-을|Translit=.i.deug.eul|LTranslit=.i.deug
9	본	_	VERB	VV	Form=Adn|Tense=Past	10	acl:relcl	_	Translit=.bon|LTranslit=_
10	기업이	기업	NOUN	NN+CM	Case=Nom|Polite=Form	11	nsubj	_	MSeg=기업-이|Translit=.gi.eob.i|LTranslit=.gi.eob
11	화웨이	_	PROPN	NNP	_	14	advcl	_	SpaceAfter=No|Translit=.hwa.we.i|LTranslit=_
12	라	_	AUX	VC	Mood=Ind|VerbForm=Fin	11	cop	_	SpaceAfter=No|Translit=.ra|LTranslit=_
13	고	고	PART	QP	_	11	case	_	Translit=.go|LTranslit=_
14	주장했다	_	NOUN	NN	_	0	root	_	SpaceAfter=No|Translit=.ju.jang.haess.da|LTranslit=_
15	.	.	PUNCT	.	_	14	punct	_	Translit=.|LTranslit=_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 cop	color:blue
1	그들은	그들	PRON	PRP+CM	Case=Nom|Number=Plur|Person=3|Polite=Form	2	nsubj	_	MSeg=그들-은|Translit=.geu.deul.eun|LTranslit=.geu.deul
2	누구	_	PRON	WP	_	0	root	_	SpaceAfter=No|Translit=.nu.gu|LTranslit=_
3	인가	_	AUX	VC	PronType=Int|VerbForm=Fin	2	cop	_	SpaceAfter=No|Translit=.in.ga|LTranslit=_
4	?	?	PUNCT	.	_	2	punct	_	Translit=?|LTranslit=_

~~~


