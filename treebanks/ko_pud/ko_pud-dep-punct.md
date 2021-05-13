---
layout: base
title:  'Statistics of punct in UD_Korean-PUD'
udver: '2'
---

## Treebank Statistics: UD_Korean-PUD: Relations: `punct`

This relation is universal.

1595 nodes (10%) are attached to their parents as `punct`.

1345 instances of `punct` (84%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.65141065830721.

The following 10 pairs of parts of speech are connected with `punct`: <tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_pud-pos-PUNCT.html">PUNCT</a></tt> (839; 53% instances), <tt><a href="ko_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_pud-pos-PUNCT.html">PUNCT</a></tt> (391; 25% instances), <tt><a href="ko_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ko_pud-pos-PUNCT.html">PUNCT</a></tt> (158; 10% instances), <tt><a href="ko_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ko_pud-pos-PUNCT.html">PUNCT</a></tt> (139; 9% instances), <tt><a href="ko_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ko_pud-pos-PUNCT.html">PUNCT</a></tt> (26; 2% instances), <tt><a href="ko_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ko_pud-pos-PUNCT.html">PUNCT</a></tt> (17; 1% instances), <tt><a href="ko_pud-pos-PART.html">PART</a></tt>-<tt><a href="ko_pud-pos-PUNCT.html">PUNCT</a></tt> (14; 1% instances), <tt><a href="ko_pud-pos-DET.html">DET</a></tt>-<tt><a href="ko_pud-pos-PUNCT.html">PUNCT</a></tt> (5; 0% instances), <tt><a href="ko_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ko_pud-pos-PUNCT.html">PUNCT</a></tt> (5; 0% instances), <tt><a href="ko_pud-pos-X.html">X</a></tt>-<tt><a href="ko_pud-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 punct	color:blue
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
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 punct	color:blue
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
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 punct	color:blue
1	내가	내	PRON	PRP+CM	Case=Nom|Person=1|Polite=Form	3	nsubj	_	MSeg=내-가|Translit=.nae.ga|LTranslit=.nae
2	다음에	다음	NOUN	NN+CM	Polite=Form	3	advmod	_	MSeg=다음-에|Translit=.da.eum.e|LTranslit=.da.eum
3	내릴	_	VERB	VV	Form=Adn|Tense=Fut	4	acl:relcl	_	Translit=.nae.ril|LTranslit=_
4	곳은	곳	NOUN	NN+CM	Case=Nom|Polite=Form	9	nsubj	_	MSeg=곳-은|Translit=.gos.eun|LTranslit=.gos
5	캐나다	_	PROPN	NNP	_	6	compound	_	Translit=.kae.na.da|LTranslit=_
6	국경	_	NOUN	NN	_	7	compound	_	Translit=.gug.gyeong|LTranslit=_
7	근처에	근처	NOUN	NN+CM	Polite=Form	8	advmod	_	MSeg=근처-에|Translit=.geun.cheo.e|LTranslit=.geun.cheo
8	있는	_	ADJ	JJ	Form=Adn	9	acl:relcl	_	Translit=.iss.neun|LTranslit=_
9	벨링햄	_	PROPN	NNP	_	0	root	_	SpaceAfter=No|Translit=.bel.ring.haem|LTranslit=_
10	이었다	_	AUX	VC	Mood=Ind|Tense=Past|VerbForm=Fin	9	cop	_	SpaceAfter=No|Translit=.i.eoss.da|LTranslit=_
11	.	.	PUNCT	.	_	9	punct	_	Translit=.|LTranslit=_

~~~


