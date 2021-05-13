---
layout: base
title:  'Statistics of obj in UD_Korean-PUD'
udver: '2'
---

## Treebank Statistics: UD_Korean-PUD: Relations: `obj`

This relation is universal.

1030 nodes (6%) are attached to their parents as `obj`.

1030 instances of `obj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.82621359223301.

The following 11 pairs of parts of speech are connected with `obj`: <tt><a href="ko_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt> (512; 50% instances), <tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt> (386; 37% instances), <tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_pud-pos-PROPN.html">PROPN</a></tt> (41; 4% instances), <tt><a href="ko_pud-pos-PART.html">PART</a></tt>-<tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt> (36; 3% instances), <tt><a href="ko_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_pud-pos-PROPN.html">PROPN</a></tt> (25; 2% instances), <tt><a href="ko_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_pud-pos-PRON.html">PRON</a></tt> (14; 1% instances), <tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_pud-pos-PRON.html">PRON</a></tt> (9; 1% instances), <tt><a href="ko_pud-pos-PART.html">PART</a></tt>-<tt><a href="ko_pud-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="ko_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_pud-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="ko_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ko_pud-pos-PART.html">PART</a></tt>-<tt><a href="ko_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obj	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 obj	color:blue
1	한	_	DET	DT	_	2	nummod	_	Translit=.han|LTranslit=_
2	목격자의	목격자	NOUN	NN+CM	Case=Gen|Polite=Form	4	nmod:poss	_	MSeg=목격자-의|Translit=.mog.gyeog.ja.yi|LTranslit=.mog.gyeog.ja
3	경찰	_	NOUN	NN	_	4	compound	_	Translit=.gyeong.chal|LTranslit=_
4	진술에	진술	NOUN	NN+CM	Polite=Form	5	advmod	_	MSeg=진술-에|Translit=.jin.sul.e|LTranslit=.jin.sul
5	따르면	_	VERB	VV	Form=Compl	11	advcl	_	Translit=.dda.reu.myeon|LTranslit=_
6	피해자가	피해자	NOUN	NN+CM	Case=Nom|Polite=Form	10	nsubj	_	MSeg=피해자-가|Translit=.pi.hae.ja.ga|LTranslit=.pi.hae.ja
7	4	4	NUM	CD	NumType=Card	8	nummod	_	SpaceAfter=No|Translit=4|LTranslit=_
8	월에	월	NOUN	NNB+CM	Polite=Form	10	advmod	_	MSeg=월-에|Translit=.weol.e|LTranslit=.weol
9	용의자를	용의자	NOUN	NN+CM	Case=Acc|Polite=Form	10	obj	_	MSeg=용의자-를|Translit=.yong.yi.ja.reul|LTranslit=.yong.yi.ja
10	공격했었다고	공격했었다	NOUN	NN+QP	_	11	advcl	_	MSeg=공격했었다-고|Translit=.gong.gyeog.haess.eoss.da.go|LTranslit=.gong.gyeog.haess.eoss.da
11	한다	_	VERB	VV	Mood=Ind|VerbForm=Fin	0	root	_	SpaceAfter=No|Translit=.han.da|LTranslit=_
12	.	.	PUNCT	.	_	11	punct	_	Translit=.|LTranslit=_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 obj	color:blue
1	물론	_	ADV	RB	_	14	advmod	_	SpaceAfter=No|Translit=.mul.ron|LTranslit=_
2	,	,	PUNCT	,	_	1	punct	_	Translit=,|LTranslit=_
3	나는	나	PRON	PRP+CM	Case=Nom|Person=1|Polite=Form	14	nsubj	_	MSeg=나-는|Translit=.na.neun|LTranslit=.na
4	현대의	현대	NOUN	NN+CM	Case=Gen|Polite=Form	5	nmod:poss	_	MSeg=현대-의|Translit=.hyeon.dae.yi|LTranslit=.hyeon.dae
5	독일과	독일	PROPN	NNP+CP	Polite=Form	9	obj	_	MSeg=독일-과|Translit=.dog.il.gwa|LTranslit=.dog.il
6	나치	_	PROPN	NNP	_	7	compound	_	Translit=.na.chi|LTranslit=_
7	시대의	시대	NOUN	NN+CM	Case=Gen|Polite=Form	8	nmod:poss	_	MSeg=시대-의|Translit=.si.dae.yi|LTranslit=.si.dae
8	독일은	독일	PROPN	NNP+AP	_	5	conj	_	MSeg=독일-은|Translit=.dog.il.eun|LTranslit=.dog.il
9	분리시켜서	_	NOUN	NN	_	11	advcl	_	SpaceAfter=No|Translit=.bun.ri.si.kyeo.seo|LTranslit=_
10	생각해야	_	NOUN	NN	_	11	aux	_	SpaceAfter=No|Translit=.saeng.gag.hae.ya|LTranslit=_
11	한다는	_	VERB	VX	Form=Adn	12	dep	_	Translit=.han.da.neun|LTranslit=_
12	것을	것	NOUN	NNB+CM	Case=Acc|Polite=Form	14	obj	_	MSeg=것-을|Translit=.geos.eul|LTranslit=.geos
13	알고	_	VERB	VV	Form=Aux	14	aux	_	Translit=.al.go|LTranslit=_
14	있다	_	VERB	VX	Mood=Ind|VerbForm=Fin	0	root	_	SpaceAfter=No|Translit=.iss.da|LTranslit=_
15	.	.	PUNCT	.	_	14	punct	_	Translit=.|LTranslit=_

~~~


