---
layout: base
title:  'Statistics of flat:abs in UD_Ukrainian-IU'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-IU: Relations: `flat:abs`

This relation is a language-specific subtype of <tt><a href="uk_iu-dep-flat.html">flat</a></tt>.
There are also 6 other language-specific subtypes of `flat`: <tt><a href="uk_iu-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="uk_iu-dep-flat-name.html">flat:name</a></tt>, <tt><a href="uk_iu-dep-flat-range.html">flat:range</a></tt>, <tt><a href="uk_iu-dep-flat-repeat.html">flat:repeat</a></tt>, <tt><a href="uk_iu-dep-flat-sibl.html">flat:sibl</a></tt>, <tt><a href="uk_iu-dep-flat-title.html">flat:title</a></tt>.

48 nodes (0%) are attached to their parents as `flat:abs`.

48 instances of `flat:abs` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.75.

The following 5 pairs of parts of speech are connected with `flat:abs`: <tt><a href="uk_iu-pos-DET.html">DET</a></tt>-<tt><a href="uk_iu-pos-DET.html">DET</a></tt> (26; 54% instances), <tt><a href="uk_iu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_iu-pos-NOUN.html">NOUN</a></tt> (13; 27% instances), <tt><a href="uk_iu-pos-DET.html">DET</a></tt>-<tt><a href="uk_iu-pos-PRON.html">PRON</a></tt> (6; 13% instances), <tt><a href="uk_iu-pos-NUM.html">NUM</a></tt>-<tt><a href="uk_iu-pos-NUM.html">NUM</a></tt> (2; 4% instances), <tt><a href="uk_iu-pos-DET.html">DET</a></tt>-<tt><a href="uk_iu-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 flat:abs	color:blue
1	Умочав	умочати	VERB	Vmpis-sm	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	0:root	Id=3c2w|LTranslit=umočaty|Translit=Umočav
2	мішок	мішок	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	1	obj	1:obj	Id=3c2x|LTranslit=mišok|Translit=mišok
3	у	у	ADP	Spsa	Case=Acc	4	case	4:case	Id=3c2y|LTranslit=u|Translit=u
4	воду	вода	NOUN	Ncfsan	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	1	obl	1:obl	Id=3c2z|LTranslit=voda|Translit=vodu
5	і	і	CCONJ	Ccs	_	6	cc	6:cc	Id=3c30|LTranslit=i|Translit=i
6	клав	класти	VERB	Vmpis-sm	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	1	conj	0:root|1:conj	Id=3c31|LTranslit=klasty|Translit=klav
7	один	один	DET	Pi--mnsaa	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|PronType=Ind	6	obl	6:obl	Id=3c32|LTranslit=odyn|Translit=odyn
8	на	на	ADP	Spsa	Case=Acc	9	case	9:case	Id=3c33|LTranslit=na|Translit=na
9	інший	інший	DET	Pi--mnsaa	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|PronType=Ind	7	flat:abs	7:flat:abs	Id=3c34|LTranslit=inšyj|SpaceAfter=No|Translit=inšyj
10	.	.	PUNCT	U	_	1	punct	1:punct	Id=3c35|LTranslit=.|Translit=.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 flat:abs	color:blue
1	Час	час	NOUN	Ncmsnn	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	5	obl	5:obl	Id=0u81|LTranslit=čas|Translit=Čas
2	від	від	ADP	Spsg	Case=Gen	3	case	3:case	Id=0u82|LTranslit=vid|Translit=vid
3	часу	час	NOUN	Ncmsgn	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	1	flat:abs	1:flat:abs	Id=0u83|LTranslit=čas|Translit=času
4	Джон	Джон	PROPN	Npmsny	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	5	nsubj	5:nsubj	Id=0u84|LTranslit=Džon|Translit=Džon
5	їздив	їздити	VERB	Vmpis-sm	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	0:root	Id=0u85|LTranslit=jizdyty|Translit=jizdyv
6	автостопом	автостоп	NOUN	Ncmsin	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	5	obl	5:obl	Id=0u86|LTranslit=avtostop|Translit=avtostopom
7	до	до	ADP	Spsg	Case=Gen	8	case	8:case	Id=0u87|LTranslit=do|Translit=do
8	Ноттінгему	Ноттінгем	PROPN	Npmsgn	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	obl	5:obl	Id=0u88|LTranslit=Nottinhem|Translit=Nottinhemu
9	по	по	ADP	Spsa	Case=Acc	10	case	10:case	Id=0u89|LTranslit=po|Translit=po
10	пенсію	пенсія	NOUN	Ncfsan	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	5	obl	5:obl	Id=0u8a|LTranslit=pensija|SpaceAfter=No|Translit=pensiju
11	.	.	PUNCT	U	_	5	punct	5:punct	Id=0u8b|LTranslit=.|Translit=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat:abs	color:blue
1	Я	я	PRON	Pp-1-ysnn	Animacy=Anim|Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	5:nsubj	Id=1tt1|LTranslit=ja|Translit=Ja
2	просто	просто	PART	Q	_	5	discourse	5:discourse	Id=1tt2|LTranslit=prosto|Translit=prosto
3	сама	сам	DET	Px--f-sna	Case=Nom|Gender=Fem|Number=Sing|PronType=Prs|Reflex=Yes	5	obj	5:obj	Id=1tt3|LTranslit=sam|Translit=sama
4	собі	себе	PRON	Px-----dn	Case=Dat|PronType=Prs|Reflex=Yes	3	flat:abs	3:flat:abs	Id=1tt4|LTranslit=sebe|Translit=sobi
5	заздрю	заздрити	VERB	Vmpip1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	0:root	Id=1tt5|LTranslit=zazdryty|SpaceAfter=No|Translit=zazdŕu
6	!	!	PUNCT	U	_	5	punct	5:punct	Id=1tt6|LTranslit=!|Translit=!

~~~


