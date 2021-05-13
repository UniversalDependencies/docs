---
layout: base
title:  'Statistics of appos in UD_Korean-PUD'
udver: '2'
---

## Treebank Statistics: UD_Korean-PUD: Relations: `appos`

This relation is universal.

90 nodes (1%) are attached to their parents as `appos`.

89 instances of `appos` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.7.

The following 10 pairs of parts of speech are connected with `appos`: <tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt> (29; 32% instances), <tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_pud-pos-PROPN.html">PROPN</a></tt> (25; 28% instances), <tt><a href="ko_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ko_pud-pos-PROPN.html">PROPN</a></tt> (25; 28% instances), <tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_pud-pos-NUM.html">NUM</a></tt> (3; 3% instances), <tt><a href="ko_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="ko_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ko_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ko_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ko_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="ko_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ko_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ko_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 appos	color:blue
1	오즈본은	오즈본	PROPN	NNP+CM	Case=Nom|Polite=Form	15	nsubj	_	MSeg=오즈본-은|Translit=.o.jeu.bon.eun|LTranslit=.o.jeu.bon
2	7	7	NUM	CD	NumType=Card	3	nummod	_	SpaceAfter=No|Translit=7|LTranslit=_
3	월에	월	NOUN	NNB+CM	Polite=Form	4	advmod	_	MSeg=월-에|Translit=.weol.e|LTranslit=.weol
4	해고된	_	NOUN	NN	_	5	acl:relcl	_	SpaceAfter=No|Translit=.hae.go.doen|LTranslit=_
5	후	_	NOUN	NN	_	15	advmod	_	Translit=.hu|LTranslit=_
6	한	_	DET	DT	_	9	det	_	Translit=.han|LTranslit=_
7	미국	_	PROPN	NNP	_	9	compound	_	Translit=.mi.gug|LTranslit=_
8	연사	_	NOUN	NN	_	9	compound	_	Translit=.yeon.sa|LTranslit=_
9	에이전시	_	NOUN	NN	_	15	advmod	_	SpaceAfter=No|Translit=.e.i.jeon.si|LTranslit=_
10	(	(	PUNCT	(	_	12	punct	_	SpaceAfter=No|Translit=(|LTranslit=_
11	speakers	_	NOUN	NN	_	12	compound	_	Translit=speakers|LTranslit=_
12	agency	_	NOUN	NN	_	9	appos	_	SpaceAfter=No|Translit=agency|LTranslit=_
13	)	)	PUNCT	)	_	12	punct	_	SpaceAfter=No|Translit=)|LTranslit=_
14	에	에	PART	CM	Polite=Form	9	case	_	Translit=.e|LTranslit=_
15	재취업했다	_	NOUN	NN	_	0	root	_	SpaceAfter=No|Translit=.jae.chwi.eob.haess.da|LTranslit=_
16	.	.	PUNCT	.	_	15	punct	_	Translit=.|LTranslit=_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 appos	color:blue
1	데이비스	_	PROPN	NNP	_	2	compound	_	SpaceAfter=No|Translit=.de.i.bi.seu|LTranslit=_
2	컵	_	NOUN	NN	_	9	nsubj	_	SpaceAfter=No|Proper=True|Translit=.keob|LTranslit=_
3	(	(	PUNCT	(	_	4	punct	_	SpaceAfter=No|Translit=(|LTranslit=_
4	Davis	_	PROPN	NNP	_	2	appos	_	Translit=Davis|LTranslit=_
5	Cup	_	PROPN	NNP	_	4	flat:name	_	SpaceAfter=No|Translit=Cup|LTranslit=_
6	)	)	PUNCT	)	_	4	punct	_	SpaceAfter=No|Translit=)|LTranslit=_
7	이	이	PART	CM	Case=Nom|Polite=Form	2	case	_	Translit=.i|LTranslit=_
8	기여를	기여	NOUN	NN+CM	Case=Acc|Polite=Form	9	obj	_	MSeg=기여-를|Translit=.gi.yeo.reul|LTranslit=.gi.yeo
9	했는지도	했는지	PART	VV+AP	Tense=Past|VerbForm=Fin	10	csubj	_	MSeg=했는지-도|Translit=.haess.neun.ji.do|LTranslit=.haess.neun.ji
10	의문	_	NOUN	NN	_	0	root	_	SpaceAfter=No|Translit=.yi.mun|LTranslit=_
11	이다	_	AUX	VC	Mood=Ind|VerbForm=Fin	10	cop	_	SpaceAfter=No|Translit=.i.da|LTranslit=_
12	.	.	PUNCT	.	_	10	punct	_	Translit=.|LTranslit=_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 appos	color:blue
1	앤디가	앤디	PROPN	NNP+CM	Case=Nom|Polite=Form	13	nsubj	_	MSeg=앤디-가|Translit=.aen.di.ga|LTranslit=.aen.di
2	4	4	NUM	CD	NumType=Card	3	nummod	_	SpaceAfter=No|Translit=4|LTranslit=_
3	월	_	NOUN	NNB	_	5	obl:tmod	_	Translit=.weol|LTranslit=_
4	몬테카를로에서	몬테카를로	PROPN	NNP+CM	Polite=Form	5	advmod	_	MSeg=몬테카를로-에서|Translit=.mon.te.ka.reul.ro.e.seo|LTranslit=.mon.te.ka.reul.ro
5	열린	_	VERB	VV	Form=Adn|Tense=Past|Voice=Pass	6	acl:relcl	_	Translit=.yeol.rin|LTranslit=_
6	베누아	_	PROPN	NNP	_	13	advmod	_	Translit=.be.nu.a|LTranslit=_
7	페르	_	PROPN	NNP	_	6	flat:name	_	SpaceAfter=No|Translit=.pe.reu|LTranslit=_
8	(	(	PUNCT	(	_	9	punct	_	SpaceAfter=No|Translit=(|LTranslit=_
9	Benoît	_	PROPN	NNP	_	6	appos	_	Translit=Benoît|LTranslit=_
10	Paire	_	PROPN	NNP	_	9	flat:name	_	SpaceAfter=No|Translit=Paire|LTranslit=_
11	)	)	PUNCT	)	_	9	punct	_	SpaceAfter=No|Translit=)|LTranslit=_
12	에	에	PART	CM	Polite=Form	6	case	_	Translit=.e|LTranslit=_
13	출전했을	_	NOUN	NN	_	14	acl:relcl	_	SpaceAfter=No|Translit=.chul.jeon.haess.eul|LTranslit=_
14	때가	때	NOUN	NN+CM	Case=Nom|Polite=Form	17	nsubj	_	MSeg=때-가|Translit=.ddae.ga|LTranslit=.ddae
15	바로	_	ADV	RB	_	17	advmod	_	Translit=.ba.ro|LTranslit=_
16	그런	_	DET	DT	_	17	det	_	Translit=.geu.reon|LTranslit=_
17	경우	_	NOUN	NN	_	0	root	_	SpaceAfter=No|Translit=.gyeong.u|LTranslit=_
18	였다	_	AUX	VC	Mood=Ind|Tense=Past|VerbForm=Fin	17	cop	_	SpaceAfter=No|Translit=.yeoss.da|LTranslit=_
19	.	.	PUNCT	.	_	17	punct	_	Translit=.|LTranslit=_

~~~


