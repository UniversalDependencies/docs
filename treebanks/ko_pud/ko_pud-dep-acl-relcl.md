---
layout: base
title:  'Statistics of acl:relcl in UD_Korean-PUD'
udver: '2'
---

## Treebank Statistics: UD_Korean-PUD: Relations: `acl:relcl`

This relation is a language-specific subtype of .

1188 nodes (7%) are attached to their parents as `acl:relcl`.

1188 instances of `acl:relcl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.7449494949495.

The following 12 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_pud-pos-VERB.html">VERB</a></tt> (486; 41% instances), <tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt> (429; 36% instances), <tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_pud-pos-ADJ.html">ADJ</a></tt> (152; 13% instances), <tt><a href="ko_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt> (79; 7% instances), <tt><a href="ko_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ko_pud-pos-VERB.html">VERB</a></tt> (20; 2% instances), <tt><a href="ko_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ko_pud-pos-VERB.html">VERB</a></tt> (5; 0% instances), <tt><a href="ko_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ko_pud-pos-ADJ.html">ADJ</a></tt> (5; 0% instances), <tt><a href="ko_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_pud-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_pud-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="ko_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ko_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ko_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 acl:relcl	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 acl:relcl	color:blue
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
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 acl:relcl	color:blue
1	그녀가	그녀	PRON	PRP+CM	Case=Nom|Person=3|Polite=Form	2	nsubj	_	MSeg=그녀-가|Translit=.geu.nyeo.ga|LTranslit=.geu.nyeo
2	하는	_	VERB	VV	Form=Adn	3	acl:relcl	_	Translit=.ha.neun|LTranslit=_
3	말과	말	NOUN	NN+CP	Polite=Form	12	nsubj	_	MSeg=말-과|Translit=.mal.gwa|LTranslit=.mal
4	그녀가	그녀	PRON	PRP+CM	Case=Nom|Person=3|Polite=Form	5	nsubj	_	MSeg=그녀-가|Translit=.geu.nyeo.ga|LTranslit=.geu.nyeo
5	하는	_	VERB	VV	Form=Adn	6	acl:relcl	_	Translit=.ha.neun|LTranslit=_
6	행동은	행동	NOUN	NN+CM	Case=Nom|Polite=Form	3	conj	_	MSeg=행동-은|Translit=.haeng.dong.eun|LTranslit=.haeng.dong
7	사실	_	ADV	RB	_	12	advmod	_	SpaceAfter=No|Translit=.sa.sil|LTranslit=_
8	,	,	PUNCT	,	_	7	punct	_	Translit=,|LTranslit=_
9	믿을	_	VERB	VV	Form=Adn	10	acl:relcl	_	Translit=.mid.eul|LTranslit=_
10	수	_	NOUN	NNB	_	11	nsubj	_	Translit=.su|LTranslit=_
11	없을	_	ADJ	JJ	Form=Adn	12	acl:relcl	_	Translit=.eobs.eul|LTranslit=_
12	정도	_	NOUN	NN	_	0	root	_	SpaceAfter=No|Translit=.jeong.do|LTranslit=_
13	이다	_	AUX	VC	Mood=Ind|VerbForm=Fin	12	cop	_	SpaceAfter=No|Translit=.i.da|LTranslit=_
14	.	.	PUNCT	.	_	12	punct	_	Translit=.|LTranslit=_

~~~


