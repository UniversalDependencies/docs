---
layout: base
title:  'Statistics of fixed in UD_Korean-Kaist'
udver: '2'
---

## Treebank Statistics: UD_Korean-Kaist: Relations: `fixed`

This relation is universal.

3186 nodes (1%) are attached to their parents as `fixed`.

3186 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 7 pairs of parts of speech are connected with `fixed`: <tt><a href="ko_kaist-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_kaist-pos-ADJ.html">ADJ</a></tt> (2665; 84% instances), <tt><a href="ko_kaist-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_kaist-pos-SCONJ.html">SCONJ</a></tt> (322; 10% instances), <tt><a href="ko_kaist-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_kaist-pos-CCONJ.html">CCONJ</a></tt> (80; 3% instances), <tt><a href="ko_kaist-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_kaist-pos-VERB.html">VERB</a></tt> (71; 2% instances), <tt><a href="ko_kaist-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_kaist-pos-NOUN.html">NOUN</a></tt> (34; 1% instances), <tt><a href="ko_kaist-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_kaist-pos-ADV.html">ADV</a></tt> (13; 0% instances), <tt><a href="ko_kaist-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_kaist-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 fixed	color:blue
1	옛	옛	ADJ	mma	_	2	amod	_	LTranslit=.yes|Translit=.yes
2	서울의	서울+의	PROPN	nq+jcm	_	4	nmod	_	LTranslit=.seo.ul+.yi|Translit=.seo.ul.yi
3	아름답던	아름답+던	ADJ	paa+etm	_	4	amod	_	LTranslit=.a.reum.dab+.deon|Translit=.a.reum.dab.deon
4	기와집들은	기와집+들+은	NOUN	ncn+xsn+jxt	_	10	dislocated	_	LTranslit=.gi.wa.jib+.deul+.eun|Translit=.gi.wa.jib.deul.eun
5	모두	모두	ADV	mag	_	7	advmod	_	LTranslit=.mo.du|Translit=.mo.du
6	불에	불+에	ADV	ncn+jca	_	7	obl	_	LTranslit=.bul+.e|Translit=.bul.e
7	타	타+아	SCONJ	pvg+ecs	_	0	root	_	LTranslit=.ta+.a|Translit=.ta
8	없어지고	없+어+지+고	CCONJ	paa+ecx+px+ecc	_	7	conj	_	LTranslit=.eobs+.eo+.ji+.go|Translit=.eobs.eo.ji.go
9	초가집으로	초가집+으로	ADV	ncn+jca	_	10	advcl	_	LTranslit=.cho.ga.jib+.eu.ro|Translit=.cho.ga.jib.eu.ro
10	바뀔	바뀌+ㄹ	VERB	pvg+etm	_	7	conj	_	LTranslit=.ba.ggwi+ㄹ|Translit=.ba.ggwil
11	수밖에	수+밖에	NOUN	nbn+jxc	ExtPos=AUX	10	obl	_	LTranslit=.su+.bagg.e|Translit=.su.bagg.e
12	없었습니다	없+었+습니다	ADJ	paa+ep+ef	_	11	fixed	_	LTranslit=.eobs+.eoss+.seub.ni.da|SpaceAfter=No|Translit=.eobs.eoss.seub.ni.da
13	.	.	PUNCT	sf	_	11	punct	_	LTranslit=.|Translit=.

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 fixed	color:blue
1	술에	술+에	ADV	ncn+jxc	_	2	advcl	_	LTranslit=.sul+.e|Translit=.sul.e
2	취해	취하+어	SCONJ	pvg+ecs	_	4	ccomp	_	LTranslit=.chwi.ha+.eo|Translit=.chwi.hae
3	곤드레만드레	곤드레만드레	ADV	mag	_	4	advmod	_	LTranslit=.gon.deu.re.man.deu.re|Translit=.gon.deu.re.man.deu.re
4	된	되+ㄴ	VERB	pvg+etm	_	5	acl	_	LTranslit=.doe+ㄴ|Translit=.doen
5	친구를	친구+를	NOUN	ncn+jco	_	11	obj	_	LTranslit=.chin.gu+.reul|Translit=.chin.gu.reul
6	할	하+ㄹ	VERB	pvg+etm	_	11	ccomp	_	LTranslit=.ha+ㄹ|Translit=.hal
7	수	수	NOUN	nbn	ExtPos=AUX	6	obl	_	LTranslit=.su|OrigDeprel=aux|Translit=.su
8	없이	없+이	SCONJ	paa+ecs	_	7	fixed	_	LTranslit=.eobs+.i|Translit=.eobs.i
9	자기집까지	자기집+까지	ADV	ncn+jxc	_	11	advcl	_	LTranslit=.ja.gi.jib+.gga.ji|Translit=.ja.gi.jib.gga.ji
10	데리고	데리+고	CCONJ	pvg+ecc	_	0	root	_	LTranslit=.de.ri+.go|Translit=.de.ri.go
11	갔다	가+ㅆ+다	VERB	pvg+ep+ef	_	10	conj	_	LTranslit=.ga+ㅆ+.da|SpaceAfter=No|Translit=.gass.da
12	.	.	PUNCT	sf	_	11	punct	_	LTranslit=.|Translit=.

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 fixed	color:blue
1	당은	당+은	NOUN	ncn+jxt	_	10	dislocated	_	LTranslit=.dang+.eun|Translit=.dang.eun
2	대중에게	대중+에게	ADV	ncn+jca	_	10	iobj	_	LTranslit=.dae.jung+.e.ge|Translit=.dae.jung.e.ge
3	운동조직	운동조직	NOUN	ncn	_	4	compound	_	LTranslit=.un.dong.jo.jig|Translit=.un.dong.jo.jig
4	이전에	이전+에	ADV	ncn+jca	_	10	obl	_	LTranslit=.i.jeon+.e|Translit=.i.jeon.e
5	믿을	믿+ㄹ	VERB	pvg+etm	_	9	acl	_	LTranslit=.mid+ㄹ|Translit=.mid.eul
6	수	수	NOUN	nbn	ExtPos=AUX	5	obl	_	LTranslit=.su|OrigDeprel=aux|Translit=.su
7	있고	있+고	CCONJ	paa+ecc	_	6	fixed	_	LTranslit=.iss+.go|Translit=.iss.go
8	도움되는	도움되+는	VERB	pvg+etm	_	5	conj	_	LTranslit=.do.um.doe+.neun|Translit=.do.um.doe.neun
9	친구가	친구+가	NOUN	ncn+jcs	_	10	nsubj	_	LTranslit=.chin.gu+.ga|Translit=.chin.gu.ga
10	되어야	되+어야	VERB	pvg+ecx	_	0	root	_	LTranslit=.doe+.eo.ya|Translit=.doe.eo.ya
11	한다	하	AUX	px+ef	_	10	aux	_	LTranslit=.ha|OrigLemma=하+ㄴ다|SpaceAfter=No|Translit=.han.da
12	.	.	PUNCT	sf	_	11	punct	_	LTranslit=.|Translit=.

~~~


