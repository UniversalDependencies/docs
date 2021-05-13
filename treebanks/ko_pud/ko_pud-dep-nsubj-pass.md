---
layout: base
title:  'Statistics of nsubj:pass in UD_Korean-PUD'
udver: '2'
---

## Treebank Statistics: UD_Korean-PUD: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="ko_pud-dep-nsubj.html">nsubj</a></tt>.

160 nodes (1%) are attached to their parents as `nsubj:pass`.

160 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.20625.

The following 8 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt> (95; 59% instances), <tt><a href="ko_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt> (38; 24% instances), <tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_pud-pos-PROPN.html">PROPN</a></tt> (13; 8% instances), <tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_pud-pos-PRON.html">PRON</a></tt> (7; 4% instances), <tt><a href="ko_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_pud-pos-PRON.html">PRON</a></tt> (4; 3% instances), <tt><a href="ko_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ko_pud-pos-PART.html">PART</a></tt>-<tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ko_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 nsubj:pass	color:blue
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
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 12 nsubj:pass	color:blue
1	하지만	_	CCONJ	CC	_	14	advmod	_	Translit=.ha.ji.man|LTranslit=_
2	흡연에	흡연	NOUN	NN+CM	Polite=Form	5	advmod	_	MSeg=흡연-에|Translit=.heub.yeon.e|LTranslit=.heub.yeon
3	직접	_	ADV	RB	_	5	advmod	_	Translit=.jig.jeob|LTranslit=_
4	노출되지	_	NOUN	NN	_	5	aux	_	SpaceAfter=No|Translit=.no.chul.doe.ji|LTranslit=_
5	않는	_	VERB	VX	Form=Adn	6	acl:relcl	_	Translit=.anh.neun|LTranslit=_
6	방광	_	NOUN	NN	_	7	compound	_	Translit=.bang.gwang|LTranslit=_
7	등의	등	NOUN	NNB+CM	Case=Gen|Polite=Form	8	nmod:poss	_	MSeg=등-의|Translit=.deung.yi|LTranslit=.deung
8	조직에서	조직	NOUN	NN+CM	Polite=Form	14	advmod	_	SpaceAfter=No|MSeg=조직-에서|Translit=.jo.jig.e.seo|LTranslit=.jo.jig
9	는	는	PART	AP	_	8	case	_	Translit=.neun|LTranslit=_
10	이와	이	PRON	PRD+CM	Polite=Form	11	advmod	_	MSeg=이-와|Translit=.i.wa|LTranslit=.i
11	똑같은	_	ADJ	JJ	Form=Adn	12	acl:relcl	_	Translit=.ddog.gat.eun|LTranslit=_
12	패턴이	패턴	NOUN	NN+CM	Case=Nom|Polite=Form	14	nsubj:pass	_	MSeg=패턴-이|Translit=.pae.teon.i|LTranslit=.pae.teon
13	발견되지	_	NOUN	NN	_	14	aux	_	SpaceAfter=No|Translit=.bal.gyeon.doe.ji|LTranslit=_
14	않았다	_	VERB	VX	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No|Translit=.anh.ass.da|LTranslit=_
15	.	.	PUNCT	.	_	14	punct	_	Translit=.|LTranslit=_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:pass	color:blue
1	도널드	_	PROPN	NNP	_	4	nsubj:pass	_	Translit=.do.neol.deu|LTranslit=_
2	트럼프	_	PROPN	NNP	_	1	flat:name	_	SpaceAfter=No|Translit=.teu.reom.peu|LTranslit=_
3	가	가	PART	CM	Case=Nom|Polite=Form	1	case	_	Translit=.ga|LTranslit=_
4	당선되면	_	NOUN	NN	_	13	advcl	_	SpaceAfter=No|Translit=.dang.seon.doe.myeon|LTranslit=_
5	그	_	DET	DT	_	6	det	_	Translit=.geu|LTranslit=_
6	즉시	_	NOUN	NN	_	13	advmod	_	Translit=.jeug.si|LTranslit=_
7	세계	_	NOUN	NN	_	8	compound	_	Translit=.se.gye|LTranslit=_
8	정세가	정세	NOUN	NN+CM	Case=Nom|Polite=Form	13	nsubj:pass	_	MSeg=정세-가|Translit=.jeong.se.ga|LTranslit=.jeong.se
9	지금보다	지금	NOUN	NN+CM	Polite=Form	12	advmod	_	MSeg=지금-보다|Translit=.ji.geum.bo.da|LTranslit=.ji.geum
10	더욱	_	ADV	RB	_	12	advmod	_	Translit=.deo.ug|LTranslit=_
11	우려스럽고	_	NOUN	NN	_	13	dep	_	SpaceAfter=No|Translit=.u.ryeo.seu.reob.go|LTranslit=_
12	불안정해질	_	NOUN	NN	_	11	conj	_	SpaceAfter=No|Translit=.bul.an.jeong.hae.jil|LTranslit=_
13	것	_	NOUN	NNB	_	0	root	_	SpaceAfter=No|Translit=.geos|LTranslit=_
14	이다	_	AUX	VC	Mood=Ind|VerbForm=Fin	13	cop	_	SpaceAfter=No|Translit=.i.da|LTranslit=_
15	.	.	PUNCT	.	_	13	punct	_	Translit=.|LTranslit=_

~~~


