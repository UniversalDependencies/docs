---
layout: base
title:  'Statistics of compound:lvc in UD_Korean-PUD'
udver: '2'
---

## Treebank Statistics: UD_Korean-PUD: Relations: `compound:lvc`

This relation is a language-specific subtype of <tt><a href="ko_pud-dep-compound.html">compound</a></tt>.

77 nodes (0%) are attached to their parents as `compound:lvc`.

77 instances of `compound:lvc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.1038961038961.

The following 6 pairs of parts of speech are connected with `compound:lvc`: <tt><a href="ko_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt> (49; 64% instances), <tt><a href="ko_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt> (20; 26% instances), <tt><a href="ko_pud-pos-PART.html">PART</a></tt>-<tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt> (4; 5% instances), <tt><a href="ko_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_pud-pos-PROPN.html">PROPN</a></tt> (2; 3% instances), <tt><a href="ko_pud-pos-DET.html">DET</a></tt>-<tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ko_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 compound:lvc	color:blue
1	그녀는	그녀	PRON	PRP+CM	Case=Nom|Person=3|Polite=Form	10	nsubj:pass	_	MSeg=그녀-는|Translit=.geu.nyeo.neun|LTranslit=.geu.nyeo
2	2	2	NUM	CD	NumType=Card	3	nummod	_	SpaceAfter=No|Translit=2|LTranslit=_
3	살	_	NOUN	NNB	_	4	compound:lvc	_	Translit=.sal|LTranslit=_
4	된	_	VERB	VV	Form=Adn|Tense=Past	5	acl:relcl	_	Translit=.doen|LTranslit=_
5	딸의	딸	NOUN	NN+CM	Case=Gen|Polite=Form	6	nmod:poss	_	MSeg=딸-의|Translit=.ddal.yi|LTranslit=.ddal
6	살인	_	NOUN	NN	_	7	compound	_	Translit=.sal.in|LTranslit=_
7	미수	_	NOUN	NN	_	8	compound	_	Translit=.mi.su|LTranslit=_
8	혐의로	혐의	NOUN	NN+CM	Polite=Form	10	advmod	_	SpaceAfter=No|MSeg=혐의-로|Translit=.hyeom.yi.ro|LTranslit=.hyeom.yi
9	도	도	PART	AP	_	8	case	_	Translit=.do|LTranslit=_
10	기소되었다	_	NOUN	NN	_	0	root	_	SpaceAfter=No|Translit=.gi.so.doe.eoss.da|LTranslit=_
11	.	.	PUNCT	.	_	10	punct	_	Translit=.|LTranslit=_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 compound:lvc	color:blue
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
# visual-style 8 7 compound:lvc	color:blue
1	멕시코는	멕시코	PROPN	NNP+CM	Case=Nom|Polite=Form	10	nsubj	_	MSeg=멕시코-는|Translit=.meg.si.ko.neun|LTranslit=.meg.si.ko
2	이	_	DET	DT	_	3	det	_	Translit=.i|LTranslit=_
3	퍼레이드가	퍼레이드	NOUN	NN+CM	Case=Nom|Polite=Form	8	nsubj	_	MSeg=퍼레이드-가|Translit=.peo.re.i.deu.ga|LTranslit=.peo.re.i.deu
4	브라질의	브라질	PROPN	NNP+CM	Case=Gen|Polite=Form	5	nmod:poss	_	MSeg=브라질-의|Translit=.beu.ra.jil.yi|LTranslit=.beu.ra.jil
5	카니발에	카니발	NOUN	NN+CM	Polite=Form	6	advmod	_	MSeg=카니발-에|Translit=.ka.ni.bal.e|LTranslit=.ka.ni.bal
6	필적하는	_	NOUN	NN	_	7	acl:relcl	_	SpaceAfter=No|Translit=.pil.jeog.ha.neun|LTranslit=_
7	행사가	행사	NOUN	NN+CM	Polite=Form	8	compound:lvc	_	MSeg=행사-가|Translit=.haeng.sa.ga|LTranslit=.haeng.sa
8	되기를	되기	PART	VV+CM	Case=Acc|Polite=Form|VerbForm=Ger	10	ccomp	_	MSeg=되기-를|Translit=.doe.gi.reul|LTranslit=.doe.gi
9	바라고	_	VERB	VV	Form=Aux	10	aux	_	Translit=.ba.ra.go|LTranslit=_
10	있다	_	VERB	VX	Mood=Ind|VerbForm=Fin	0	root	_	SpaceAfter=No|Translit=.iss.da|LTranslit=_
11	.	.	PUNCT	.	_	10	punct	_	Translit=.|LTranslit=_

~~~


