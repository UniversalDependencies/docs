---
layout: base
title:  'Statistics of nmod in UD_Korean-PUD'
udver: '2'
---

## Treebank Statistics: UD_Korean-PUD: Relations: `nmod`

This relation is universal.
There are 2 language-specific subtypes of `nmod`: <tt><a href="ko_pud-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="ko_pud-dep-nmod-tmod.html">nmod:tmod</a></tt>.

19 nodes (0%) are attached to their parents as `nmod`.

19 instances of `nmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.47368421052632.

The following 4 pairs of parts of speech are connected with `nmod`: <tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt> (15; 79% instances), <tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_pud-pos-PROPN.html">PROPN</a></tt> (2; 11% instances), <tt><a href="ko_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="ko_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ko_pud-pos-PROPN.html">PROPN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 nmod	color:blue
1	할증금	_	NOUN	NN	_	2	compound	_	Translit=.hal.jeung.geum
2	부채권과	부채권	NOUN	NN+CP	Polite=Form	9	nmod	_	MSeg=부채권-과|Translit=.bu.chae.gweon.gwa|LTranslit=.bu.chae.gweon
3	다른	_	DET	DT	_	9	det	_	Translit=.da.reun
4	영국	_	PROPN	NNP	_	8	compound	_	SpaceAfter=No|Translit=.yeong.gug
5	국민	_	NOUN	NN	_	7	compound	_	SpaceAfter=No|Proper=True|Translit=.gug.min
6	저축	_	NOUN	NN	_	7	compound	_	SpaceAfter=No|Proper=True|Translit=.jeo.chug
7	투자	_	NOUN	NN	_	8	compound	_	SpaceAfter=No|Proper=True|Translit=.tu.ja
8	연합회	_	NOUN	NN	_	9	compound	_	Proper=True|Translit=.yeon.hab.hoe
9	계좌에	계좌	NOUN	NN+CM	Polite=Form	10	obl	_	MSeg=계좌-에|Translit=.gye.jwa.e|LTranslit=.gye.jwa
10	투자된	_	NOUN	NN	_	11	acl:relcl	_	SpaceAfter=No|Translit=.tu.ja.doen
11	돈은	돈	NOUN	NN+CM	Case=Nom|Polite=Form	17	nsubj:pass	_	MSeg=돈-은|Translit=.don.eun|LTranslit=.don
12	정부	_	NOUN	NN	_	13	compound	_	Translit=.jeong.bu
13	지출에	지출	NOUN	NN+CM	Polite=Form	14	obl	_	MSeg=지출-에|Translit=.ji.chul.e|LTranslit=.ji.chul
14	대한	_	VERB	VV	Form=Adn	16	acl:relcl	_	Translit=.dae.han
15	자금	_	NOUN	NN	_	16	compound	_	Translit=.ja.geum
16	지원에	지원	NOUN	NN+CM	Polite=Form	17	obl	_	MSeg=지원-에|Translit=.ji.weon.e|LTranslit=.ji.weon
17	사용된다	_	NOUN	NN	_	0	root	_	SpaceAfter=No|Translit=.sa.yong.doen.da
18	.	.	PUNCT	.	_	17	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 nmod	color:blue
1	톰슨이	톰슨	PROPN	NNP+CM	Case=Nom|Polite=Form	2	nsubj	_	MSeg=톰슨-이|Translit=.tom.seun.i|LTranslit=.tom.seun
2	기고한	_	NOUN	NN	_	3	acl:relcl	_	SpaceAfter=No|Translit=.gi.go.han
3	논문은	논문	NOUN	NN+CM	Case=Nom|Polite=Form	17	nsubj	_	MSeg=논문-은|Translit=.non.mun.eun|LTranslit=.non.mun
4	마야인에게	마야인	PROPN	NNP+CM	Polite=Form	8	nmod	_	MSeg=마야인-에게|Translit=.ma.ya.in.e.ge|LTranslit=.ma.ya.in
5	방어물이	방어물	NOUN	NN+CM	Case=Nom|Polite=Form	8	nsubj	_	MSeg=방어물-이|Translit=.bang.eo.mul.i|LTranslit=.bang.eo.mul
6	눈에	눈	NOUN	NN+CM	Polite=Form	7	obl	_	MSeg=눈-에|Translit=.nun.e|LTranslit=.nun
7	띄게	_	VERB	VV	Form=Compl	8	advcl	_	Translit=.ddyi.ge
8	부족했다는	_	NOUN	NN	_	9	nmod	_	SpaceAfter=No|Translit=.bu.jog.haess.da.neun
9	측면에서	측면	NOUN	NN+CM	Polite=Form	17	obl	_	MSeg=측면-에서|Translit=.cheug.myeon.e.seo|LTranslit=.cheug.myeon
10	그들이	그들	PRON	PRP+CM	Case=Nom|Number=Plur|Person=3|Polite=Form	14	nsubj	_	MSeg=그들-이|Translit=.geu.deul.i|LTranslit=.geu.deul
11	"	"	PUNCT	``	_	12	punct	_	SpaceAfter=No|Translit="|LTranslit="
12	평화로운	_	ADJ	JJ	Form=Adn	14	amod	_	SpaceAfter=No|Translit=.pyeong.hwa.ro.un
13	"	"	PUNCT	''	_	12	punct	_	Translit="|LTranslit="
14	사람들	_	NOUN	NN	Number=Plur	17	advcl	_	SpaceAfter=No|Translit=.sa.ram.deul
15	이었다	이	AUX	VC	Mood=Ind|Tense=Past|VerbForm=Fin	14	cop	_	SpaceAfter=No|Translit=.i.eoss.da|LTranslit=.i
16	고	고	PART	QP	_	14	case	_	Translit=.go|LTranslit=.go
17	가정했다	_	NOUN	NN	_	0	root	_	SpaceAfter=No|Translit=.ga.jeong.haess.da
18	.	.	PUNCT	.	_	17	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 nmod	color:blue
1	돛은	돛	NOUN	NN+CM	Case=Nom|Polite=Form	8	nsubj	_	MSeg=돛-은|Translit=.doch.eun|LTranslit=.doch
2	선사	_	NOUN	NN	_	3	compound	_	Translit=.seon.sa
3	시대의	시대	NOUN	NN+CM	Case=Gen|Polite=Form	7	nmod:poss	_	MSeg=시대-의|Translit=.si.dae.yi|LTranslit=.si.dae
4	중앙	_	NOUN	NN	_	5	compound	_	Proper=True|Translit=.jung.ang
5	아메리카인의	아메리카인	PROPN	NNP+CM	Case=Gen|Polite=Form	7	nmod:poss	_	MSeg=아메리카인-의|Translit=.a.me.ri.ka.in.yi|LTranslit=.a.me.ri.ka.in
6	도해법이나	도해법	NOUN	NN+CP	Polite=Form	8	obl	_	MSeg=도해법-이나|Translit=.do.hae.beob.i.na|LTranslit=.do.hae.beob
7	텍스트에는	텍스트	NOUN	NN+CM	Polite=Form	6	conj	_	MSeg=텍스트-에는|Translit=.teg.seu.teu.e.neun|LTranslit=.teg.seu.teu
8	나타나지	_	VERB	VV	Form=Aux	21	advcl	_	Translit=.na.ta.na.ji
9	않으며	않	AUX	VX	Form=Compl	8	aux	_	Translit=.anh.eu.myeo|LTranslit=.anh
10	대신	_	NOUN	NN	_	12	nmod	_	Translit=.dae.sin
11	고대	_	NOUN	NN	_	12	compound	_	Translit=.go.dae
12	마야에서	마야	PROPN	NNP+CM	Polite=Form	21	obl	_	SpaceAfter=No|MSeg=마야-에서|Translit=.ma.ya.e.seo|LTranslit=.ma.ya
13	는	는	PART	AP	_	12	case	_	Translit=.neun|LTranslit=.neun
14	카누가	카누	NOUN	NN+CM	Case=Nom|Polite=Form	19	nsubj	_	MSeg=카누-가|Translit=.ka.nu.ga|LTranslit=.ka.nu
15	수상	_	NOUN	NN	_	16	compound	_	Translit=.su.sang
16	운송의	운송	NOUN	NN+CM	Case=Gen|Polite=Form	18	nmod:poss	_	MSeg=운송-의|Translit=.un.song.yi|LTranslit=.un.song
17	기본	_	NOUN	NN	_	18	compound	_	Translit=.gi.bon
18	방식으로	방식	NOUN	NN+CM	Polite=Form	19	obl	_	MSeg=방식-으로|Translit=.bang.sig.eu.ro|LTranslit=.bang.sig
19	사용되었다는	_	NOUN	NN	_	20	acl:relcl	_	SpaceAfter=No|Translit=.sa.yong.doe.eoss.da.neun
20	이론이	이론	NOUN	NN+CM	Case=Nom|Polite=Form	21	nsubj	_	MSeg=이론-이|Translit=.i.ron.i|LTranslit=.i.ron
21	세워졌다	_	VERB	VV	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Cau	0	root	_	SpaceAfter=No|Translit=.se.weo.jyeoss.da
22	.	.	PUNCT	.	_	21	punct	_	Translit=.|LTranslit=.

~~~


