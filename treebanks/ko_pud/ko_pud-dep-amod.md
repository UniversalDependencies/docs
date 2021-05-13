---
layout: base
title:  'Statistics of amod in UD_Korean-PUD'
udver: '2'
---

## Treebank Statistics: UD_Korean-PUD: Relations: `amod`

This relation is universal.

208 nodes (1%) are attached to their parents as `amod`.

208 instances of `amod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.29326923076923.

The following 6 pairs of parts of speech are connected with `amod`: <tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_pud-pos-ADJ.html">ADJ</a></tt> (156; 75% instances), <tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt> (45; 22% instances), <tt><a href="ko_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ko_pud-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_pud-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="ko_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ko_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ko_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	새로운	_	ADJ	JJ	Form=Adn	2	amod	_	Translit=.sae.ro.un|LTranslit=_
2	지출금은	지출금	NOUN	NN+CM	Case=Nom|Polite=Form	7	nsubj:pass	_	MSeg=지출금-은|Translit=.ji.chul.geum.eun|LTranslit=.ji.chul.geum
3	클린턴의	클린턴	PROPN	NNP+CM	Case=Gen|Polite=Form	6	nmod:poss	_	MSeg=클린턴-의|Translit=.keul.rin.teon.yi|LTranslit=.keul.rin.teon
4	거액의	거액	NOUN	NN+CM	Case=Gen|Polite=Form	6	nmod:poss	_	MSeg=거액-의|Translit=.geo.aeg.yi|LTranslit=.geo.aeg
5	은행	_	NOUN	NN	_	6	compound	_	Translit=.eun.haeng|LTranslit=_
6	계좌에서	계좌	NOUN	NN+CM	Polite=Form	7	advmod	_	MSeg=계좌-에서|Translit=.gye.jwa.e.seo|LTranslit=.gye.jwa
7	충당되었다	_	NOUN	NN	_	0	root	_	SpaceAfter=No|Translit=.chung.dang.doe.eoss.da|LTranslit=_
8	.	.	PUNCT	.	_	7	punct	_	Translit=.|LTranslit=_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 amod	color:blue
1	세계	_	NOUN	NN	_	2	compound	_	Translit=.se.gye|LTranslit=_
2	최고	_	NOUN	NN	_	3	advmod	_	SpaceAfter=No|Translit=.choe.go|LTranslit=_
3	라는	_	VERB	VV	Form=Adn	6	acl:relcl	_	Translit=.ra.neun|LTranslit=_
4	그들의	그들	PRON	PRP+CM	Case=Gen|Number=Plur|Person=3|Polite=Form	6	nmod:poss	_	MSeg=그들-의|Translit=.geu.deul.yi|LTranslit=.geu.deul
5	신성한	_	NOUN	NN	_	6	amod	_	SpaceAfter=No|Translit=.sin.seong.han|LTranslit=_
6	권리는	권리	NOUN	NN+CM	Case=Nom|Polite=Form	11	nsubj	_	MSeg=권리-는|Translit=.gweon.ri.neun|LTranslit=.gweon.ri
7	더	_	ADV	RB	_	8	advmod	_	Translit=.deo|LTranslit=_
8	이상	_	NOUN	NN	_	10	advmod	_	Translit=.i.sang|LTranslit=_
9	보장받지	_	NOUN	NN	_	10	aux	_	SpaceAfter=No|Translit=.bo.jang.bad.ji|LTranslit=_
10	못하게	_	VERB	VX	Form=Compl	11	advcl	_	Translit=.mos.ha.ge|LTranslit=_
11	되었나	_	VERB	VV	PronType=Int|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No|Translit=.doe.eoss.na|LTranslit=_
12	?	?	PUNCT	.	_	11	punct	_	Translit=?|LTranslit=_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 amod	color:blue
1	이를	이	PRON	PRD+CM	Case=Acc|Polite=Form	2	obj	_	MSeg=이-를|Translit=.i.reul|LTranslit=.i
2	통해	_	VERB	VV	Form=Compl	17	advcl	_	Translit=.tong.hae|LTranslit=_
3	화공	_	NOUN	NN	_	4	compound	_	Translit=.hwa.gong|LTranslit=_
4	산업	_	NOUN	NN	_	11	nsubj	_	Translit=.san.eob|LTranslit=_
5	및	_	CCONJ	CC	_	6	cc	_	ToDo=cc-after-conj|Translit=.mich|LTranslit=_
6	로비스트들이	로비스트들	NOUN	NN+CM	Case=Nom|Number=Plur|Polite=Form	4	conj	_	MSeg=로비스트들-이|Translit=.ro.bi.seu.teu.deul.i|LTranslit=.ro.bi.seu.teu.deul
7	그	_	DET	DT	_	8	det	_	Translit=.geu|LTranslit=_
8	책에	책	NOUN	NN+CM	Polite=Form	10	advmod	_	MSeg=책-에|Translit=.chaeg.e|LTranslit=.chaeg
9	관심을	관심	NOUN	NN+CM	Case=Acc|Polite=Form	10	obj	_	MSeg=관심-을|Translit=.gwan.sim.eul|LTranslit=.gwan.sim
10	갖게	_	VERB	VV	Form=Compl	11	advcl	_	Translit=.gaj.ge|LTranslit=_
11	됨은	됨	PART	VV+CM	Case=Nom|Polite=Form|VerbForm=Ger	12	csubj	_	MSeg=됨-은|Translit=.doem.eun|LTranslit=.doem
12	물론	_	NOUN	NN	_	17	advmod	_	Translit=.mul.ron|LTranslit=_
13	많은	_	ADJ	JJ	Form=Adn	14	amod	_	Translit=.manh.eun|LTranslit=_
14	미국인들의	미국인들	PROPN	NNP+CM	Case=Gen|Number=Plur|Polite=Form	15	nmod:poss	_	MSeg=미국인들-의|Translit=.mi.gug.in.deul.yi|LTranslit=.mi.gug.in.deul
15	관심도	관심	NOUN	NN+AP	_	17	obj	_	MSeg=관심-도|Translit=.gwan.sim.do|LTranslit=.gwan.sim
16	또한	_	ADV	RB	_	17	advmod	_	Translit=.ddo.han|LTranslit=_
17	불러일으켰다	_	VERB	VV	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No|Translit=.bul.reo.il.eu.kyeoss.da|LTranslit=_
18	.	.	PUNCT	.	_	17	punct	_	Translit=.|LTranslit=_

~~~


