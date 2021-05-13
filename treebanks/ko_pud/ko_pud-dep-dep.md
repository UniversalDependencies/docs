---
layout: base
title:  'Statistics of dep in UD_Korean-PUD'
udver: '2'
---

## Treebank Statistics: UD_Korean-PUD: Relations: `dep`

This relation is universal.

193 nodes (1%) are attached to their parents as `dep`.

190 instances of `dep` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.12435233160622.

The following 7 pairs of parts of speech are connected with `dep`: <tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_pud-pos-VERB.html">VERB</a></tt> (84; 44% instances), <tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt> (81; 42% instances), <tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_pud-pos-ADJ.html">ADJ</a></tt> (23; 12% instances), <tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_pud-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="ko_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="ko_pud-pos-X.html">X</a></tt>-<tt><a href="ko_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 dep	color:blue
1	판발카르는	판발카르	PROPN	NNP+CM	Case=Nom|Polite=Form	13	nsubj	_	MSeg=판발카르-는|Translit=.pan.bal.ka.reu.neun|LTranslit=.pan.bal.ka.reu
2	그들이	그들	PRON	PRP+CM	Case=Nom|Number=Plur|Person=3|Polite=Form	6	nsubj	_	MSeg=그들-이|Translit=.geu.deul.i|LTranslit=.geu.deul
3	그	_	DET	DT	_	4	det	_	Translit=.geu|LTranslit=_
4	건물에서	건물	NOUN	NN+CM	Polite=Form	6	advmod	_	MSeg=건물-에서|Translit=.geon.mul.e.seo|LTranslit=.geon.mul
5	나와야	_	VERB	VV	Form=Aux	6	aux	_	Translit=.na.wa.ya|LTranslit=_
6	할	_	VERB	VX	Form=Adn	7	dep	_	Translit=.hal|LTranslit=_
7	것	_	NOUN	NNB	_	8	advmod	_	Translit=.geos|LTranslit=_
8	같은	_	ADJ	JJ	Form=Adn	9	acl:relcl	_	Translit=.gat.eun|LTranslit=_
9	느낌이	느낌	NOUN	NN+CM	Case=Nom|Polite=Form	10	nsubj	_	MSeg=느낌-이|Translit=.neu.ggim.i|LTranslit=.neu.ggim
10	든	_	VERB	VV	Form=Adn|Tense=Past	11	acl:relcl	_	Translit=.deun|LTranslit=_
11	때가	때	NOUN	NN+CM	Case=Nom|Polite=Form	12	nsubj	_	MSeg=때-가|Translit=.ddae.ga|LTranslit=.ddae
12	있었다고	있었다	ADJ	JJ+QP	Mood=Ind|Tense=Past|VerbForm=Fin	13	advcl	_	MSeg=있었다-고|Translit=.iss.eoss.da.go|LTranslit=.iss.eoss.da
13	말했다	_	NOUN	NN	_	0	root	_	SpaceAfter=No|Translit=.mal.haess.da|LTranslit=_
14	.	.	PUNCT	.	_	13	punct	_	Translit=.|LTranslit=_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 dep	color:blue
1	타당성	_	NOUN	NN	_	2	compound	_	Translit=.ta.dang.seong|LTranslit=_
2	조사에	조사	NOUN	NN+CM	Polite=Form	3	advmod	_	MSeg=조사-에|Translit=.jo.sa.e|LTranslit=.jo.sa
3	따르면	_	VERB	VV	Form=Compl	16	advcl	_	Translit=.dda.reu.myeon|LTranslit=_
4	곤돌라에	곤돌라	NOUN	NN+CM	Polite=Form	6	advmod	_	MSeg=곤돌라-에|Translit=.gon.dol.ra.e|LTranslit=.gon.dol.ra
5	승객을	승객	NOUN	NN+CM	Case=Acc|Polite=Form	6	obj	_	MSeg=승객-을|Translit=.seung.gaeg.eul|LTranslit=.seung.gaeg
6	태우고	_	VERB	VV	Form=Compl|Voice=Cau	9	advcl	_	Translit=.tae.u.go|LTranslit=_
7	포토맥	_	PROPN	NNP	_	8	compound	_	Translit=.po.to.maeg|LTranslit=_
8	강을	강	NOUN	NN+CM	Case=Acc|Polite=Form	9	obj	_	Proper=True|MSeg=강-을|Translit=.gang.eul|LTranslit=.gang
9	건너는	_	VERB	VV	Form=Adn	10	acl:relcl	_	Translit=.geon.neo.neun|LTranslit=_
10	데	_	NOUN	NNB	_	14	advmod	_	Translit=.de|LTranslit=_
11	약	_	DET	DT	_	13	det	_	Translit=.yag|LTranslit=_
12	4	4	NUM	CD	NumType=Card	13	nummod	_	SpaceAfter=No|Translit=4|LTranslit=_
13	분이	분	NOUN	NNB+CM	Case=Nom|Polite=Form	14	nsubj:pass	_	MSeg=분-이|Translit=.bun.i|LTranslit=.bun
14	소요될	_	NOUN	NN	_	15	dep	_	SpaceAfter=No|Translit=.so.yo.doel|LTranslit=_
15	것으로	것	NOUN	NNB+CM	Polite=Form	16	advmod	_	MSeg=것-으로|Translit=.geos.eu.ro|LTranslit=.geos
16	추정된다	_	NOUN	NN	_	0	root	_	SpaceAfter=No|Translit=.chu.jeong.doen.da|LTranslit=_
17	.	.	PUNCT	.	_	16	punct	_	Translit=.|LTranslit=_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 dep	color:blue
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


