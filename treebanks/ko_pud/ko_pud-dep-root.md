---
layout: base
title:  'Statistics of root in UD_Korean-PUD'
udver: '2'
---

## Treebank Statistics: UD_Korean-PUD: Relations: `root`

This relation is universal.

1000 nodes (6%) are attached to their parents as `root`.

1000 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 15.224.

The following 9 pairs of parts of speech are connected with `root`: -<tt><a href="ko_pud-pos-NOUN.html">NOUN</a></tt> (530; 53% instances), -<tt><a href="ko_pud-pos-VERB.html">VERB</a></tt> (333; 33% instances), -<tt><a href="ko_pud-pos-ADJ.html">ADJ</a></tt> (114; 11% instances), -<tt><a href="ko_pud-pos-PROPN.html">PROPN</a></tt> (6; 1% instances), -<tt><a href="ko_pud-pos-DET.html">DET</a></tt> (5; 1% instances), -<tt><a href="ko_pud-pos-ADV.html">ADV</a></tt> (4; 0% instances), -<tt><a href="ko_pud-pos-PART.html">PART</a></tt> (4; 0% instances), -<tt><a href="ko_pud-pos-NUM.html">NUM</a></tt> (2; 0% instances), -<tt><a href="ko_pud-pos-PRON.html">PRON</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 11 root	color:blue
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
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 17 root	color:blue
1	학생들에게	학생들	NOUN	NN+CM	Number=Plur|Polite=Form	7	iobj	_	MSeg=학생들-에게|Translit=.hag.saeng.deul.e.ge|LTranslit=.hag.saeng.deul
2	과학적	_	NOUN	NN	_	3	compound	_	SpaceAfter=No|Translit=.gwa.hag.jeog|LTranslit=_
3	방법을	방법	NOUN	NN+CM	Case=Acc|Polite=Form	7	obj	_	MSeg=방법-을|Translit=.bang.beob.eul|LTranslit=.bang.beob
4	별도의	별도	NOUN	NN+CM	Case=Gen|Polite=Form	6	nmod:poss	_	MSeg=별도-의|Translit=.byeol.do.yi|LTranslit=.byeol.do
5	학과	_	NOUN	NN	_	6	compound	_	Translit=.hag.gwa|LTranslit=_
6	단위로	단위	NOUN	NN+CM	Polite=Form	7	advmod	_	MSeg=단위-로|Translit=.dan.wi.ro|LTranslit=.dan.wi
7	가르치기보다	가르치기	PART	VV+CM	Polite=Form|VerbForm=Ger	17	advcl	_	SpaceAfter=No|MSeg=가르치기-보다|Translit=.ga.reu.chi.gi.bo.da|LTranslit=.ga.reu.chi.gi
8	는	는	PART	AP	_	7	case	_	Translit=.neun|LTranslit=_
9	예를	예	NOUN	NN+CM	Case=Acc|Polite=Form	10	obj	_	MSeg=예-를|Translit=.ye.reul|LTranslit=.ye
10	들어	_	VERB	VV	Form=Compl	17	advcl	_	Translit=.deul.eo|LTranslit=_
11	학생들이	학생들	NOUN	NN+CM	Case=Nom|Number=Plur|Polite=Form	17	nsubj	_	MSeg=학생들-이|Translit=.hag.saeng.deul.i|LTranslit=.hag.saeng.deul
12	응용을	응용	NOUN	NN+CM	Case=Acc|Polite=Form	13	obj	_	MSeg=응용-을|Translit=.eung.yong.eul|LTranslit=.eung.yong
13	통해	_	VERB	VV	Form=Compl	17	advcl	_	Translit=.tong.hae|LTranslit=_
14	과학	_	NOUN	NN	_	15	compound	_	Translit=.gwa.hag|LTranslit=_
15	내용을	내용	NOUN	NN+CM	Case=Acc|Polite=Form	17	obj	_	MSeg=내용-을|Translit=.nae.yong.eul|LTranslit=.nae.yong
16	배우게	_	VERB	VV	Form=Aux	17	aux	_	Translit=.bae.u.ge|LTranslit=_
17	한다	_	VERB	VX	Mood=Ind|VerbForm=Fin	0	root	_	SpaceAfter=No|Translit=.han.da|LTranslit=_
18	.	.	PUNCT	.	_	17	punct	_	Translit=.|LTranslit=_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 7 root	color:blue
1	아마도	_	ADV	RB	_	7	advmod	_	Translit=.a.ma.do|LTranslit=_
2	드레스	_	NOUN	NN	_	3	compound	_	Translit=.deu.re.seu|LTranslit=_
3	코드가	코드	NOUN	NN+CM	Case=Nom|Polite=Form	5	nsubj	_	MSeg=코드-가|Translit=.ko.deu.ga|LTranslit=.ko.deu
4	너무	_	ADV	RB	_	5	advmod	_	Translit=.neo.mu|LTranslit=_
5	갑갑했던	_	ADJ	JJ	Form=Adn|Tense=Past	6	dep	_	Translit=.gab.gab.haess.deon|LTranslit=_
6	것	_	NOUN	NNB	_	7	advmod	_	Translit=.geos|LTranslit=_
7	같다	_	ADJ	JJ	Mood=Ind|VerbForm=Fin	0	root	_	SpaceAfter=No|Translit=.gat.da|LTranslit=_
8	.	.	PUNCT	.	_	7	punct	_	Translit=.|LTranslit=_

~~~


