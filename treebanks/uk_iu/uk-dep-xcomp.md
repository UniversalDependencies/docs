---
layout: base
title:  'Statistics of xcomp in UD_Ukrainian'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian: Relations: `xcomp`

This relation is universal.
There are 1 language-specific subtypes of `xcomp`: <tt><a href="uk-dep-xcomp-sp.html">xcomp:pred</a></tt>.

824 nodes (1%) are attached to their parents as `xcomp`.

796 instances of `xcomp` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.61529126213592.

The following 10 pairs of parts of speech are connected with `xcomp`: <tt><a href="uk-pos-VERB.html">VERB</a></tt>-<tt><a href="uk-pos-VERB.html">VERB</a></tt> (714; 87% instances), <tt><a href="uk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk-pos-VERB.html">VERB</a></tt> (57; 7% instances), <tt><a href="uk-pos-VERB.html">VERB</a></tt>-<tt><a href="uk-pos-ADJ.html">ADJ</a></tt> (31; 4% instances), <tt><a href="uk-pos-VERB.html">VERB</a></tt>-<tt><a href="uk-pos-NOUN.html">NOUN</a></tt> (14; 2% instances), <tt><a href="uk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="uk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="uk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="uk-pos-INTJ.html">INTJ</a></tt>-<tt><a href="uk-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="uk-pos-VERB.html">VERB</a></tt>-<tt><a href="uk-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="uk-pos-VERB.html">VERB</a></tt>-<tt><a href="uk-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 xcomp	color:blue
1	Приблизно	приблизно	ADV	Rp	Degree=Pos	2	advmod	_	Id=11uc
2	так	так	ADV	Pd------r	PronType=Dem	5	advmod	_	Id=11ud
3	само	само	ADV	R	_	2	fixed	_	Id=11ue
4	ми	ми	PRON	Pp-1-ypnn	Animacy=Anim|Case=Nom|Number=Plur|Person=1|PronType=Prs	5	nsubj	_	Id=11uf
5	вчили	вчити	VERB	Vmpis-p	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	0	root	_	Id=11ug
6	літати	літати	VERB	Vmpn	Aspect=Imp|VerbForm=Inf	5	xcomp	_	Id=11uh
7	нашу	наш	DET	Ppp1f-saa	Case=Acc|Gender=Fem|Number=Sing|Person=1|Poss=Yes|PronType=Prs	8	det	_	Id=11ui
8	ворону	ворона	NOUN	Ncfsay	Animacy=Anim|Case=Acc|Gender=Fem|Number=Sing	5	obj	_	Id=11uj
9	Галю	Галя	PROPN	Npfsay	Animacy=Anim|Case=Acc|Gender=Fem|NameType=Giv|Number=Sing	8	flat:title	_	Id=11uk|SpaceAfter=No
10	.	.	PUNCT	U	_	5	punct	_	Id=11ul

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 xcomp	color:blue
1	Для	для	ADP	Spsg	Case=Gen	2	case	_	Id=36kq
2	цього	це	PRON	Pd--nnsgn	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	4	obl	_	Id=36kr
3	агенти	агент	NOUN	Ncmpny	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	4	nsubj	_	Id=36ks
4	повинні	повинний	ADJ	Ao--pns	Case=Nom|Number=Plur	0	root	_	Id=36kt
5	були	бути	AUX	Vapis-p	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	4	cop	_	Id=36ku
6	забезпечити	забезпечити	VERB	Vmen	Aspect=Perf|VerbForm=Inf	4	xcomp	_	Id=36kv
7	коридор	коридор	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	6	obj	_	Id=36kw
8	для	для	ADP	Spsg	Case=Gen	9	case	_	Id=36kx
9	спецназу	спецназ	NOUN	Ncmsgn	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	6	obl	_	Id=36ky|SpaceAfter=No
10	.	.	PUNCT	U	_	4	punct	_	Id=36kz

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	Отже	отже	SCONJ	Css	_	3	mark	_	Id=2tks
2	вони	вони	PRON	Pp-3--pnn	Case=Nom|Number=Plur|Person=3|PronType=Prs	3	nsubj:pass	_	Id=2tkt
3	мали	мати	VERB	Vmpis-p	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	0	root	_	Id=2tku
4	бути	бути	AUX	Vapn	Aspect=Imp|VerbForm=Inf	5	cop	_	Id=2tkv
5	вироблені	вироблений	ADJ	Ap--pns-ep	Aspect=Perf|Case=Nom|Number=Plur|VerbForm=Part|Voice=Pass	3	xcomp	_	Id=2tkw
6	зі	зі	ADP	Spsg	Case=Gen	8	case	_	Id=2tkx
7	спільного	спільний	ADJ	Ao-msgf	Case=Gen|Gender=Masc|Number=Sing	8	amod	_	Id=2tky
8	шматка	шматок	NOUN	Ncmsgn	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	obl	_	Id=2tkz
9	глини	глина	NOUN	Ncfsgn	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	Id=2tl0|SpaceAfter=No
10	.	.	PUNCT	U	_	3	punct	_	Id=2tl1

~~~


