---
layout: base
title:  'Statistics of flat:repeat in UD_Ukrainian-IU'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-IU: Relations: `flat:repeat`

This relation is a language-specific subtype of <tt><a href="uk_iu-dep-flat.html">flat</a></tt>.
There are also 6 other language-specific subtypes of `flat`: <tt><a href="uk_iu-dep-flat-abs.html">flat:abs</a></tt>, <tt><a href="uk_iu-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="uk_iu-dep-flat-name.html">flat:name</a></tt>, <tt><a href="uk_iu-dep-flat-range.html">flat:range</a></tt>, <tt><a href="uk_iu-dep-flat-sibl.html">flat:sibl</a></tt>, <tt><a href="uk_iu-dep-flat-title.html">flat:title</a></tt>.

77 nodes (0%) are attached to their parents as `flat:repeat`.

77 instances of `flat:repeat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.49350649350649.

The following 11 pairs of parts of speech are connected with `flat:repeat`: <tt><a href="uk_iu-pos-INTJ.html">INTJ</a></tt>-<tt><a href="uk_iu-pos-INTJ.html">INTJ</a></tt> (17; 22% instances), <tt><a href="uk_iu-pos-ADV.html">ADV</a></tt>-<tt><a href="uk_iu-pos-ADV.html">ADV</a></tt> (16; 21% instances), <tt><a href="uk_iu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_iu-pos-NOUN.html">NOUN</a></tt> (16; 21% instances), <tt><a href="uk_iu-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_iu-pos-VERB.html">VERB</a></tt> (16; 21% instances), <tt><a href="uk_iu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="uk_iu-pos-PROPN.html">PROPN</a></tt> (3; 4% instances), <tt><a href="uk_iu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_iu-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="uk_iu-pos-DET.html">DET</a></tt>-<tt><a href="uk_iu-pos-DET.html">DET</a></tt> (2; 3% instances), <tt><a href="uk_iu-pos-PRON.html">PRON</a></tt>-<tt><a href="uk_iu-pos-PRON.html">PRON</a></tt> (2; 3% instances), <tt><a href="uk_iu-pos-ADV.html">ADV</a></tt>-<tt><a href="uk_iu-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="uk_iu-pos-DET.html">DET</a></tt>-<tt><a href="uk_iu-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="uk_iu-pos-PART.html">PART</a></tt>-<tt><a href="uk_iu-pos-PART.html">PART</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 flat:repeat	color:blue
1	На	на	INTJ	I	_	0	root	0:root	Id=2wpw|LTranslit=na|SpaceAfter=No|Translit=Na
2	,	,	PUNCT	U	_	3	punct	3:punct	Id=2wpx|LTranslit=,|Translit=,
3	на	на	INTJ	I	_	1	flat:repeat	1:flat:repeat	Id=2wpy|LTranslit=na|SpaceAfter=No|Translit=na
4	!	!	PUNCT	U	_	1	punct	1:punct	Id=2wpz|LTranslit=!|Translit=!

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 flat:repeat	color:blue
1	Що	що	PRON	Pr--nnsan	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	3	obj	3:obj	Id=1msb|LTranslit=ščo|Translit=Ščo
2	Середа	Середа	PROPN	Npmsny	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Number=Sing	3	nsubj	3:nsubj	Id=1msc|LTranslit=Sereda|Translit=Sereda
3	сказав	сказати	VERB	Vmeis-sm	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	11	csubj	11:csubj	Id=1msd|LTranslit=skazaty|Translit=skazav
4	про	про	ADP	Spsa	Case=Acc	5	case	5:case	Id=1mse|LTranslit=pro|Translit=pro
5	Вакарчука	Вакарчук	PROPN	Npmsay	Animacy=Anim|Case=Acc|Gender=Masc|NameType=Sur|Number=Sing	3	obl	3:obl	Id=1msf|LTranslit=Vakarčuk|Translit=Vakarčuka
6	-	-	PUNCT	U	PunctType=Dash	11	punct	11:punct	Id=1msg|LTranslit=-|Translit=-
7	це	це	PRON	Pd--nnsnn	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	11	expl	11:expl	Id=1msh|LTranslit=ce|Translit=ce
8	дуже	дуже	ADV	Rp	Degree=Pos	11	advmod	11:advmod	Id=1msi|LTranslit=duže|SpaceAfter=No|Translit=duže
9	-	-	PUNCT	U	PunctType=Dash	10	punct	10:punct	Id=1msj|LTranslit=-|SpaceAfter=No|Translit=-
10	дуже	дуже	ADV	Rp	Degree=Pos	8	flat:repeat	8:flat:repeat	Id=1msk|LTranslit=duže|Translit=duže
11	важливо	важливо	ADV	Rp	Degree=Pos	0	root	0:root	Id=1msl|LTranslit=važlyvo|SpaceAfter=No|Translit=važlyvo
12	!	!	PUNCT	U	_	11	punct	11:punct	Id=1msm|LTranslit=!|Translit=!

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 flat:repeat	color:blue
1	—	—	PUNCT	U	PunctType=Dash	6	punct	6:punct	Id=0b12|LTranslit=—|Translit=—
2	Дівко	дівка	NOUN	Ncfsvy	Animacy=Anim|Case=Voc|Gender=Fem|Number=Sing	6	vocative	6:vocative	Id=0b13|LTranslit=divka|SpaceAfter=No|Translit=Divko
3	,	,	PUNCT	U	_	4	punct	4:punct	Id=0b14|LTranslit=,|Translit=,
4	дівко	дівка	NOUN	Ncfsvy	Animacy=Anim|Case=Voc|Gender=Fem|Number=Sing	2	flat:repeat	2:flat:repeat	Id=0b15|LTranslit=divka|SpaceAfter=No|Translit=divko
5	,	,	PUNCT	U	_	2	punct	2:punct	Id=0b16|LTranslit=,|Translit=,
6	одчини	одчинити	VERB	Vmem-2s	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	0	root	0:root	Id=0b17|LTranslit=odčynyty|SpaceAfter=No|Translit=odčyny
7	!	!	PUNCT	U	_	6	punct	6:punct	Id=0b18|LTranslit=!|Translit=!

~~~


