---
layout: base
title:  'Statistics of case:loc in UD_Armenian-BSUT'
udver: '2'
---

## Treebank Statistics: UD_Armenian-BSUT: Relations: `case:loc`

This relation is a language-specific subtype of <tt><a href="hy_bsut-dep-case.html">case</a></tt>.

27 nodes (0%) are attached to their parents as `case:loc`.

27 instances of `case:loc` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.51851851851852.

The following 4 pairs of parts of speech are connected with `case:loc`: <tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_bsut-pos-ADP.html">ADP</a></tt> (23; 85% instances), <tt><a href="hy_bsut-pos-PRON.html">PRON</a></tt>-<tt><a href="hy_bsut-pos-ADP.html">ADP</a></tt> (2; 7% instances), <tt><a href="hy_bsut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hy_bsut-pos-ADP.html">ADP</a></tt> (1; 4% instances), <tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_bsut-pos-ADP.html">ADP</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 case:loc	color:blue
1	Թաքնվել	թաքնվել	VERB	_	Polarity=Pos|Subcat=Intr|VerbForm=Inf|Voice=Mid	0	root	_	Translit=T’ak’nvel|LTranslit=t’ak’nvel
2	աշխատանքի	աշխատանք	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	1	obl	_	Translit=ašxatank’i|LTranslit=ašxatank’
3	հետևում	հետև	ADP	_	AdpType=Post|Case=Loc	2	case:loc	_	Translit=hetewowm|LTranslit=hetew|SpaceAfter=No
4	:	:	PUNCT	_	Foreign=Yes	1	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 case:loc	color:blue
1	Նա	նա	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	9	nsubj	_	Translit=Na|LTranslit=na
2	ձեռքն	ձեռք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	4	obj	_	Translit=jeṙk’n|LTranslit=jeṙk’
3	առաջ	առաջ	ADV	_	_	2	case	_	Translit=aṙaǰ|LTranslit=aṙaǰ
4	պարզած	պարզել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Tran|VerbForm=Part|Voice=Act	9	advcl	_	Translit=parzaç|LTranslit=parzel|SpaceAfter=No
5	,	,	PUNCT	_	_	8	punct	_	Translit=,|LTranslit=,
6	օձի	օձ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	8	obl	_	Translit=òji|LTranslit=òj
7	պես	պես	ADP	_	AdpType=Post	6	case	_	Translit=pes|LTranslit=pes
8	սողալով	սողալ	VERB	_	Case=Ins|Definite=Ind|Polarity=Pos|Subcat=Intr|VerbForm=Inf|Voice=Mid	4	conj	_	Translit=soġalov|LTranslit=soġal
9	գալիս	գալ	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	0	root	_	Translit=galis|LTranslit=gal
10	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	9	aux	_	Translit=ēr|LTranslit=em
11	իր	ինքը	PRON	_	Case=Gen|Number=Sing|Person=3|PronType=Emp	9	obl	_	Translit=ir|LTranslit=ink’ë
12	հետևից	հետև	ADP	_	AdpType=Post|Case=Abl	11	case:loc	_	Translit=hetewic’|LTranslit=hetew|SpaceAfter=No
13	:	:	PUNCT	_	Foreign=Yes	9	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 case:loc	color:blue
1	Pegasus	Pegasus	X	_	ExtPos=PROPN|Foreign=Yes	4	nmod:poss	_	Translit=Pegasus|LTranslit=Pegasus|SpaceAfter=No
2	-	-	PUNCT	_	_	3	punct	_	Translit=-|LTranslit=-|SpaceAfter=No
3	ի	ը	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Hyph=Yes|Number=Sing	1	dep	_	Translit=i|LTranslit=ë
4	թռիչքը	թռիչք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	0	root	_	Translit=t’ṙičk’ë|LTranslit=t’ṙičk’
5	Հայաստանի	Հայաստան	PROPN	_	Animacy=Nhum|Case=Dat|Definite=Ind|NameType=Geo|Number=Sing	4	nmod:npmod	_	Translit=Hayastani|LTranslit=Hayastan
6	վրայով	վրա	ADP	_	AdpType=Post|Case=Ins	5	case:loc	_	Translit=vrayov|LTranslit=vra

~~~


