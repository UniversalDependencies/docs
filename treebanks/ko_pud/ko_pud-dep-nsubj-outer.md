---
layout: base
title:  'Statistics of nsubj:outer in UD_Korean-PUD'
udver: '2'
---

## Treebank Statistics: UD_Korean-PUD: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="ko_pud-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="ko_pud-dep-nsubj-pass.html">nsubj:pass</a></tt>.

63 nodes (0%) are attached to their parents as `nsubj:outer`.

63 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 8.85714285714286.

The following 10 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="ko_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt> (24; 38% instances), <tt><a href="ko_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ko_pud-pos-PRON.html">PRON</a></tt> (12; 19% instances), <tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt> (8; 13% instances), <tt><a href="ko_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt> (8; 13% instances), <tt><a href="ko_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ko_pud-pos-PROPN.html">PROPN</a></tt> (6; 10% instances), <tt><a href="ko_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="ko_pud-pos-DET.html">DET</a></tt>-<tt><a href="ko_pud-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_pud-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="ko_pud-pos-PART.html">PART</a></tt>-<tt><a href="ko_pud-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="ko_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_pud-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 5 nsubj:outer	color:blue
1	이	_	DET	DT	_	3	det	_	Translit=.i
2	운석	_	NOUN	NN	_	3	compound	_	Translit=.un.seog
3	물질이	물질	NOUN	NN+CM	Case=Nom|Polite=Form	4	nsubj:pass	_	MSeg=물질-이|Translit=.mul.jil.i|LTranslit=.mul.jil
4	발견되었다는	_	NOUN	NN	_	5	dep	_	SpaceAfter=No|Translit=.bal.gyeon.doe.eoss.da.neun
5	것은	것	NOUN	NNB+CM	Case=Nom|Polite=Form	15	nsubj:outer	_	MSeg=것-은|Translit=.geos.eun|LTranslit=.geos
6	고농도	_	NOUN	NN	_	7	compound	_	Translit=.go.nong.do
7	이리듐이	이리듐	NOUN	NN+CM	Case=Nom|Polite=Form	8	nsubj	_	MSeg=이리듐-이|Translit=.i.ri.dyum.i|LTranslit=.i.ri.dyum
8	있다는	_	ADJ	JJ	Form=Adn	12	acl:relcl	_	Translit=.iss.da.neun
9	숨길	_	VERB	VV	Form=Adn	10	acl:relcl	_	Translit=.sum.gil
10	수	_	NOUN	NNB	_	11	nsubj	_	Translit=.su
11	없는	_	ADJ	JJ	Form=Adn	12	acl:relcl	_	Translit=.eobs.neun
12	증거가	증거	NOUN	NN+CM	Polite=Form	13	compound:lvc	_	MSeg=증거-가|Translit=.jeung.geo.ga|LTranslit=.jeung.geo
13	될	_	VERB	VV	Form=Adn	14	acl:relcl	_	Translit=.doel
14	수	_	NOUN	NNB	_	15	nsubj	_	Translit=.su
15	있다	_	ADJ	JJ	Mood=Ind|VerbForm=Fin	0	root	_	SpaceAfter=No|Translit=.iss.da
16	.	.	PUNCT	.	_	15	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 1 nsubj:outer	color:blue
1	그는	그	PRON	PRP+CM	Case=Nom|Person=3|Polite=Form	19	nsubj:outer	_	MSeg=그-는|Translit=.geu.neun|LTranslit=.geu
2	또한	_	ADV	RB	_	19	advmod	_	Translit=.ddo.han
3	첫	_	DET	DT	_	4	det	_	Translit=.cheos
4	번째	_	NOUN	NNB	_	5	compound	_	Translit=.beon.jjae
5	임기를	임기	NOUN	NN+CM	Case=Acc|Polite=Form	6	obj	_	MSeg=임기-를|Translit=.im.gi.reul|LTranslit=.im.gi
6	마칠	_	VERB	VV	Form=Adn	7	acl:relcl	_	Translit=.ma.chil
7	때까지	때	NOUN	NN+AP	_	8	obl	_	MSeg=때-까지|Translit=.ddae.gga.ji|LTranslit=.ddae
8	기다린	_	VERB	VV	Form=Adn|Tense=Past	9	acl:relcl	_	Translit=.gi.da.rin
9	후	_	NOUN	NN	_	19	obl	_	Translit=.hu
10	파리	_	PROPN	NNP	_	12	compound	_	Translit=.pa.ri
11	기후	_	NOUN	NN	_	12	compound	_	Proper=True|Translit=.gi.hu
12	협약의	협약	NOUN	NN+CM	Case=Gen|Polite=Form	14	nmod:poss	_	Proper=True|MSeg=협약-의|Translit=.hyeob.yag.yi|LTranslit=.hyeob.yag
13	한	_	DET	DT	_	14	det	_	Translit=.han
14	조항을	조항	NOUN	NN+CM	Case=Acc|Polite=Form	15	obj	_	MSeg=조항-을|Translit=.jo.hang.eul|LTranslit=.jo.hang
15	빌미로	빌미	NOUN	NN+CM	Polite=Form	19	advcl	_	MSeg=빌미-로|Translit=.bil.mi.ro|LTranslit=.bil.mi
16	협약에서	협약	NOUN	NN+CM	Polite=Form	17	obl	_	MSeg=협약-에서|Translit=.hyeob.yag.e.seo|LTranslit=.hyeob.yag
17	탈퇴할	_	NOUN	NN	_	18	acl:relcl	_	SpaceAfter=No|Translit=.tal.toe.hal
18	수	_	NOUN	NNB	_	19	nsubj	_	Translit=.su
19	있었다	_	ADJ	JJ	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No|Translit=.iss.eoss.da
20	.	.	PUNCT	.	_	19	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 5 nsubj:outer	color:blue
1	올해	_	NOUN	NN	_	5	compound	_	Translit=.ol.hae
2	민주당	_	PROPN	NNP	_	3	compound	_	Translit=.min.ju.dang
3	측	_	NOUN	NNB	_	5	compound	_	Translit=.cheug
4	토론	_	NOUN	NN	_	5	compound	_	Translit=.to.ron
5	주제는	주제	NOUN	NN+CM	Case=Nom|Polite=Form	11	nsubj:outer	_	MSeg=주제-는|Translit=.ju.je.neun|LTranslit=.ju.je
6	대부분이	대부분	NOUN	NN+CM	Case=Nom|Polite=Form	11	nsubj	_	MSeg=대부분-이|Translit=.dae.bu.bun.i|LTranslit=.dae.bu.bun
7	백인	_	NOUN	NN	_	8	compound	_	Translit=.baeg.in
8	남성의	남성	NOUN	NN+CM	Case=Gen|Polite=Form	9	nmod:poss	_	MSeg=남성-의|Translit=.nam.seong.yi|LTranslit=.nam.seong
9	정체성에	정체성	NOUN	NN+CM	Polite=Form	10	obl	_	MSeg=정체성-에|Translit=.jeong.che.seong.e|LTranslit=.jeong.che.seong
10	관한	_	VERB	VV	Form=Adn	11	dep	_	Translit=.gwan.han
11	것	_	NOUN	NNB	_	0	root	_	SpaceAfter=No|Translit=.geos
12	이었다	이	AUX	VC	Mood=Ind|Tense=Past|VerbForm=Fin	11	cop	_	SpaceAfter=No|Translit=.i.eoss.da|LTranslit=.i
13	.	.	PUNCT	.	_	11	punct	_	Translit=.|LTranslit=.

~~~


