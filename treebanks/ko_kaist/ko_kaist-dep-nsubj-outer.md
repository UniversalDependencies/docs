---
layout: base
title:  'Statistics of nsubj:outer in UD_Korean-Kaist'
udver: '2'
---

## Treebank Statistics: UD_Korean-Kaist: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="ko_kaist-dep-nsubj.html">nsubj</a></tt>.

125 nodes (0%) are attached to their parents as `nsubj:outer`.

125 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.248.

The following 11 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="ko_kaist-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_kaist-pos-NOUN.html">NOUN</a></tt> (46; 37% instances), <tt><a href="ko_kaist-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ko_kaist-pos-NOUN.html">NOUN</a></tt> (25; 20% instances), <tt><a href="ko_kaist-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ko_kaist-pos-NOUN.html">NOUN</a></tt> (19; 15% instances), <tt><a href="ko_kaist-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_kaist-pos-PRON.html">PRON</a></tt> (9; 7% instances), <tt><a href="ko_kaist-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ko_kaist-pos-NOUN.html">NOUN</a></tt> (6; 5% instances), <tt><a href="ko_kaist-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_kaist-pos-NOUN.html">NOUN</a></tt> (6; 5% instances), <tt><a href="ko_kaist-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ko_kaist-pos-PRON.html">PRON</a></tt> (5; 4% instances), <tt><a href="ko_kaist-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_kaist-pos-PROPN.html">PROPN</a></tt> (4; 3% instances), <tt><a href="ko_kaist-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ko_kaist-pos-CCONJ.html">CCONJ</a></tt> (2; 2% instances), <tt><a href="ko_kaist-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ko_kaist-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="ko_kaist-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ko_kaist-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nsubj:outer	color:blue
1	일본에만	일본+에+만	ADV	nq+jca+jxc	_	2	advcl	_	LTranslit=.il.bon+.e+.man|Translit=.il.bon.e.man
2	오면	오+면	SCONJ	pvg+ecs	_	5	ccomp	_	LTranslit=.o+.myeon|Translit=.o.myeon
3	남편들이	남편+들+이	NOUN	ncn+xsn+jcs	_	5	nsubj:outer	_	LTranslit=.nam.pyeon+.deul+.i|Translit=.nam.pyeon.deul.i
4	사고가	사고+가	NOUN	ncpa+jcs	_	5	nsubj	_	LTranslit=.sa.go+.ga|Translit=.sa.go.ga
5	나니까요	나+니까요	VERB	pvg+ef	_	0	root	_	LTranslit=.na+.ni.gga.yo|SpaceAfter=No|Translit=.na.ni.gga.yo
6	.	.	PUNCT	sf	_	5	punct	_	LTranslit=.|Translit=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:outer	color:blue
1	지식	지식	NOUN	ncn	_	2	compound	_	LTranslit=.ji.sig|Translit=.ji.sig
2	정보상품이	정보+상품+이	NOUN	ncn+ncn+jcs	_	4	nsubj:outer	_	LTranslit=.jeong.bo+.sang.pum+.i|Translit=.jeong.bo.sang.pum.i
3	인기가	인기+가	NOUN	ncn+jcs	_	4	nsubj	_	LTranslit=.in.gi+.ga|Translit=.in.gi.ga
4	있게	있+게	ADJ	paa+ecx	_	12	amod	_	LTranslit=.iss+.ge|Translit=.iss.ge
5	되자	되+자	SCONJ	px+ecs	_	4	mark	_	LTranslit=.doe+.ja|Translit=.doe.ja
6	그들의	그+들+의	PRON	npp+xsn+jcm	PronType=Prs	7	nmod	_	LTranslit=.geu+.deul+.yi|Translit=.geu.deul.yi
7	관심은	관심+은	NOUN	ncpa+jxt	_	12	dislocated	_	LTranslit=.gwan.sim+.eun|Translit=.gwan.sim.eun
8	어느	어느	DET	mmd	PronType=Ind	9	det	_	LTranslit=.eo.neu|Translit=.eo.neu
9	품목을	품목+을	NOUN	ncn+jco	_	10	obj	_	LTranslit=.pum.mog+.eul|Translit=.pum.mog.eul
10	상품화하느냐의	상품화+하+느냐+의	NOUN	ncpa+xsv+ef+jcm	_	11	nmod	_	LTranslit=.sang.pum.hwa+.ha+.neu.nya+.yi|Translit=.sang.pum.hwa.ha.neu.nya.yi
11	문제로	문제+로	ADV	ncn+jca	_	12	advcl	_	LTranslit=.mun.je+.ro|Translit=.mun.je.ro
12	전화되었다	전화+되+었+다	VERB	ncpa+xsv+ep+ef	_	0	root	_	LTranslit=.jeon.hwa+.doe+.eoss+.da|SpaceAfter=No|Translit=.jeon.hwa.doe.eoss.da
13	.	.	PUNCT	sf	_	12	punct	_	LTranslit=.|Translit=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:outer	color:blue
1	그러다가	그러다가	CCONJ	maj	_	9	cc	_	LTranslit=.geu.reo.da.ga|Translit=.geu.reo.da.ga
2	대기업이	대기업+이	NOUN	ncn+jcs	_	4	nsubj:outer	_	LTranslit=.dae.gi.eob+.i|Translit=.dae.gi.eob.i
3	사정이	사정+이	NOUN	ncn+jcs	_	4	nsubj	_	LTranslit=.sa.jeong+.i|Translit=.sa.jeong.i
4	생겨	생기+어	SCONJ	pvg+ecs	_	9	ccomp	_	LTranslit=.saeng.gi+.eo|Translit=.saeng.gyeo
5	돈을	돈+을	NOUN	ncn+jco	_	6	obj	_	LTranslit=.don+.eul|Translit=.don.eul
6	지급하지	지급+하+지	VERB	ncpa+xsv+ecx	_	9	ccomp	_	LTranslit=.ji.geub+.ha+.ji|Translit=.ji.geub.ha.ji
7	못하면	못하+면	SCONJ	px+ecs	_	6	mark	_	LTranslit=.mos.ha+.myeon|Translit=.mos.ha.myeon
8	연쇄부도가	연쇄+부도+가	NOUN	ncpa+ncn+jcs	_	9	nsubj	_	LTranslit=.yeon.swae+.bu.do+.ga|Translit=.yeon.swae.bu.do.ga
9	난다	나+ㄴ다	VERB	pvg+ef	_	0	root	_	LTranslit=.na+ㄴ.da|SpaceAfter=No|Translit=.nan.da
10	.	.	PUNCT	sf	_	9	punct	_	LTranslit=.|Translit=.

~~~


