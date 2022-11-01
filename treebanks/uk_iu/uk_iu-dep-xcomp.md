---
layout: base
title:  'Statistics of xcomp in UD_Ukrainian-IU'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-IU: Relations: `xcomp`

This relation is universal.
There are 1 language-specific subtypes of `xcomp`: <tt><a href="uk_iu-dep-xcomp-pred.html">xcomp:pred</a></tt>.

1030 nodes (1%) are attached to their parents as `xcomp`.

991 instances of `xcomp` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.65145631067961.

The following 11 pairs of parts of speech are connected with `xcomp`: <tt><a href="uk_iu-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_iu-pos-VERB.html">VERB</a></tt> (892; 87% instances), <tt><a href="uk_iu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_iu-pos-VERB.html">VERB</a></tt> (69; 7% instances), <tt><a href="uk_iu-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_iu-pos-ADJ.html">ADJ</a></tt> (36; 3% instances), <tt><a href="uk_iu-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_iu-pos-NOUN.html">NOUN</a></tt> (18; 2% instances), <tt><a href="uk_iu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_iu-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="uk_iu-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_iu-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="uk_iu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_iu-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="uk_iu-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_iu-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="uk_iu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_iu-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="uk_iu-pos-INTJ.html">INTJ</a></tt>-<tt><a href="uk_iu-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="uk_iu-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_iu-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 xcomp	color:blue
1	Приблизно	приблизно	ADV	Rp	Degree=Pos	2	advmod	2:advmod	Id=11uc|LTranslit=pryblyzno|Translit=Pryblyzno
2	так	так	ADV	Pd------r	PronType=Dem	5	advmod	5:advmod	Id=11ud|LTranslit=tak|Translit=tak
3	само	само	ADV	R	_	2	fixed	2:fixed	Id=11ue|LTranslit=samo|Translit=samo
4	ми	ми	PRON	Pp-1-ypnn	Animacy=Anim|Case=Nom|Number=Plur|Person=1|PronType=Prs	5	nsubj	5:nsubj	Id=11uf|LTranslit=my|Translit=my
5	вчили	вчити	VERB	Vmpis-p	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	0	root	0:root	Id=11ug|LTranslit=včyty|Translit=včyly
6	літати	літати	VERB	Vmpn	Aspect=Imp|VerbForm=Inf	5	xcomp	5:xcomp	Id=11uh|LTranslit=litaty|Translit=litaty
7	нашу	наш	DET	Pps1f-saa	Case=Acc|Gender=Fem|Number=Sing|Person=1|Poss=Yes|PronType=Prs	8	det	8:det	Id=11ui|LTranslit=naš|Translit=našu
8	ворону	ворона	NOUN	Ncfsay	Animacy=Anim|Case=Acc|Gender=Fem|Number=Sing	5	obj	5:obj|6:nsubj:x	Id=11uj|LTranslit=vorona|Translit=voronu
9	Галю	Галя	PROPN	Npfsay	Animacy=Anim|Case=Acc|Gender=Fem|NameType=Giv|Number=Sing	8	flat:title	8:flat:title	Id=11uk|LTranslit=Haľа|SpaceAfter=No|Translit=Haľu
10	.	.	PUNCT	U	_	5	punct	5:punct	Id=11ul|LTranslit=.|Translit=.

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 xcomp	color:blue
1	Для	для	ADP	Spsg	Case=Gen	2	case	2:case	Id=36kq|LTranslit=dľа|Translit=Dľа
2	цього	це	PRON	Pd--nnsgn	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	4	obl	4:obl	Id=36kr|LTranslit=ce|Translit=ćoho
3	агенти	агент	NOUN	Ncmpny	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	4	nsubj	4:nsubj|6:nsubj:x	Id=36ks|LTranslit=ahent|Translit=ahenty
4	повинні	повинний	ADJ	Ao--pns	Case=Nom|Number=Plur	0	root	0:root	Id=36kt|LTranslit=povynnyj|Translit=povynni
5	були	бути	AUX	Vapis-p	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	4	cop	4:cop	Id=36ku|LTranslit=buty|Translit=buly
6	забезпечити	забезпечити	VERB	Vmen	Aspect=Perf|VerbForm=Inf	4	xcomp	4:xcomp	Id=36kv|LTranslit=zabezpečyty|Translit=zabezpečyty
7	коридор	коридор	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	6	obj	6:obj	Id=36kw|LTranslit=korydor|Translit=korydor
8	для	для	ADP	Spsg	Case=Gen	9	case	9:case	Id=36kx|LTranslit=dľа|Translit=dľа
9	спецназу	спецназ	NOUN	Ncmsgn	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	6	obl	6:obl	Id=36ky|LTranslit=specnaz|SpaceAfter=No|Translit=specnazu
10	.	.	PUNCT	U	_	4	punct	4:punct	Id=36kz|LTranslit=.|Translit=.

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	Отже	отже	SCONJ	Css	_	3	mark	3:mark	Id=2tks|LTranslit=otže|Translit=Otže
2	вони	вони	PRON	Pp-3--pnn	Case=Nom|Number=Plur|Person=3|PronType=Prs	3	nsubj	3:nsubj|5:nsubj:x	Id=2tkt|LTranslit=vony|Translit=vony
3	мали	мати	VERB	Vmpis-p	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	0	root	0:root	Id=2tku|LTranslit=maty|Translit=maly
4	бути	бути	AUX	Vapn	Aspect=Imp|VerbForm=Inf	5	cop	5:cop	Id=2tkv|LTranslit=buty|Translit=buty
5	вироблені	вироблений	ADJ	Ap--pns-ep	Aspect=Perf|Case=Nom|Number=Plur|VerbForm=Part|Voice=Pass	3	xcomp	3:xcomp	Id=2tkw|LTranslit=vyroblenyj|Translit=vyrobleni
6	зі	зі	ADP	Spsg	Case=Gen	8	case	8:case	Id=2tkx|LTranslit=zi|Translit=zi
7	спільного	спільний	ADJ	Ao-msgf	Case=Gen|Gender=Masc|Number=Sing	8	amod	8:amod	Id=2tky|LTranslit=spiľnyj|Translit=spiľnoho
8	шматка	шматок	NOUN	Ncmsgn	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	obl	5:obl	Id=2tkz|LTranslit=šmatok|Translit=šmatka
9	глини	глина	NOUN	Ncfsgn	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	8	nmod	8:nmod	Id=2tl0|LTranslit=hlyna|SpaceAfter=No|Translit=hlyny
10	.	.	PUNCT	U	_	3	punct	3:punct	Id=2tl1|LTranslit=.|Translit=.

~~~


