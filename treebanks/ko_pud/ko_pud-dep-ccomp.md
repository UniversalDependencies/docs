---
layout: base
title:  'Statistics of ccomp in UD_Korean-PUD'
udver: '2'
---

## Treebank Statistics: UD_Korean-PUD: Relations: `ccomp`

This relation is universal.

68 nodes (0%) are attached to their parents as `ccomp`.

68 instances of `ccomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.42647058823529.

The following 11 pairs of parts of speech are connected with `ccomp`: <tt><a href="ko_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt> (21; 31% instances), <tt><a href="ko_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_pud-pos-VERB.html">VERB</a></tt> (12; 18% instances), <tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt> (9; 13% instances), <tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_pud-pos-VERB.html">VERB</a></tt> (9; 13% instances), <tt><a href="ko_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_pud-pos-PART.html">PART</a></tt> (7; 10% instances), <tt><a href="ko_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_pud-pos-ADJ.html">ADJ</a></tt> (3; 4% instances), <tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_pud-pos-PART.html">PART</a></tt> (2; 3% instances), <tt><a href="ko_pud-pos-PART.html">PART</a></tt>-<tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_pud-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="ko_pud-pos-PART.html">PART</a></tt>-<tt><a href="ko_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 ccomp	color:blue
1	오늘	_	ADV	RB	_	7	advmod	_	SpaceAfter=No|Translit=.o.neul|LTranslit=_
2	,	,	PUNCT	,	_	1	punct	_	Translit=,|LTranslit=_
3	칸지르는	칸지르	PROPN	NNP+CM	Case=Nom|Polite=Form	12	nsubj	_	MSeg=칸지르-는|Translit=.kan.ji.reu.neun|LTranslit=.kan.ji.reu
4	외로운	_	ADJ	JJ	Form=Adn	5	amod	_	Translit=.oe.ro.un|LTranslit=_
5	돼지	_	NOUN	NN	_	7	ccomp	_	SpaceAfter=No|Translit=.dwae.ji|LTranslit=_
6	일지	_	AUX	VC	Form=Compl	5	cop	_	Translit=.il.ji|LTranslit=_
7	몰라도	_	VERB	VV	Form=Compl	12	advcl	_	Translit=.mol.ra.do|LTranslit=_
8	항상	_	ADV	RB	_	9	advmod	_	Translit=.hang.sang|LTranslit=_
9	혼자	_	NOUN	NN	_	11	dep	_	SpaceAfter=No|Translit=.hon.ja|LTranslit=_
10	인	_	AUX	VC	Form=Adn	9	cop	_	Translit=.in|LTranslit=_
11	것은	것	NOUN	NNB+AP	_	12	compound:lvc	_	MSeg=것-은|Translit=.geos.eun|LTranslit=.geos
12	아니다	_	ADJ	JJ	Mood=Ind|VerbForm=Fin	0	root	_	SpaceAfter=No|Translit=.a.ni.da|LTranslit=_
13	.	.	PUNCT	.	_	12	punct	_	Translit=.|LTranslit=_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 ccomp	color:blue
1	나는	나	PRON	PRP+CM	Case=Nom|Person=1|Polite=Form	9	nsubj	_	MSeg=나-는|Translit=.na.neun|LTranslit=.na
2	우즈와	우즈	PROPN	NNP+CM	Polite=Form	4	advmod	_	MSeg=우즈-와|Translit=.u.jeu.wa|LTranslit=.u.jeu
3	이메일을	이메일	NOUN	NN+CM	Case=Acc|Polite=Form	4	obj	_	MSeg=이메일-을|Translit=.i.me.il.eul|LTranslit=.i.me.il
4	주고	_	VERB	VV	Form=Compl	9	advcl	_	Translit=.ju.go|LTranslit=_
5	받으면서	_	VERB	_	_	4	goeswith	_	Translit=.bad.eu.myeon.seo|LTranslit=_
6	어원을	어원	NOUN	NN+CM	Case=Acc|Polite=Form	7	obj	_	MSeg=어원-을|Translit=.eo.weon.eul|LTranslit=.eo.weon
7	밝히기	_	VERB	VV	VerbForm=Ger	8	ccomp	_	Translit=.barg.hi.gi|LTranslit=_
8	위해	_	VERB	VV	Form=Compl	9	advcl	_	Translit=.wi.hae|LTranslit=_
9	노력했다	_	NOUN	NN	_	0	root	_	SpaceAfter=No|Translit=.no.ryeog.haess.da|LTranslit=_
10	.	.	PUNCT	.	_	9	punct	_	Translit=.|LTranslit=_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 ccomp	color:blue
1	바람이	바람	NOUN	NN+CM	Case=Nom|Polite=Form	4	nsubj	_	MSeg=바람-이|Translit=.ba.ram.i|LTranslit=.ba.ram
2	꾸준히	_	ADV	RB	_	3	advmod	_	Translit=.ggu.jun.hi|LTranslit=_
3	불기	_	VERB	VV	VerbForm=Ger	4	ccomp	_	Translit=.bul.gi|LTranslit=_
4	시작하면서	_	NOUN	NN	_	10	advcl	_	SpaceAfter=No|Translit=.si.jag.ha.myeon.seo|LTranslit=_
5	지표에	지표	NOUN	NN+CM	Polite=Form	6	advmod	_	MSeg=지표-에|Translit=.ji.pyo.e|LTranslit=.ji.pyo
6	노출된	_	NOUN	NN	_	8	acl:relcl	_	SpaceAfter=No|Translit=.no.chul.doen|LTranslit=_
7	미세	_	NOUN	NN	_	8	compound	_	SpaceAfter=No|Translit=.mi.se|LTranslit=_
8	입자가	입자	NOUN	NN+CM	Case=Nom|Polite=Form	10	nsubj	_	MSeg=입자-가|Translit=.ib.ja.ga|LTranslit=.ib.ja
9	진동하기	_	NOUN	NN	_	10	ccomp	_	SpaceAfter=No|Translit=.jin.dong.ha.gi|LTranslit=_
10	시작한다	_	NOUN	NN	_	0	root	_	SpaceAfter=No|Translit=.si.jag.han.da|LTranslit=_
11	.	.	PUNCT	.	_	10	punct	_	Translit=.|LTranslit=_

~~~


